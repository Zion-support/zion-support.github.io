import { useState } from "react";
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { ListingScoreCard } from "@/components/ListingScoreCard";
import api from '@/lib/api';

  formData: QuoteFormData;


export function ServiceTypeStep({ formData, updateFormData }: ServiceTypeStepProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 300);
  const {
    data: listings = [],
    isPending: loading,
    error,
  } = useQuery({
    queryKey: ['services', formData.serviceType, debouncedQuery],
    queryFn: () =>
      fetchServices(formData.serviceType, debouncedQuery),
    enabled: !!formData.serviceType,
    retry: 2,
  });

  // Fetch services when the service type changes
  useEffect(() => {
    if (!formData.serviceType) {
      setListings([]);
      return;
    }

    const fetchServices = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `/api/services?categoryId=${encodeURIComponent(formData.serviceType)}`
        );
        if (response.status < 200 || response.status >= 300) throw new Error('Failed to fetch');
        const data = response.data;
        setListings(data as ListingItem[]);
      } catch (err) {
        // Fallback to sample data on error
        setListings(SAMPLE_LISTINGS.filter(item => item.category.toLowerCase() === formData.serviceType.toLowerCase()));
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [formData.serviceType]);
  
  const handleTypeSelect = (type: ServiceType) => {
    updateFormData({ serviceType: type });
  };
  
  const handleItemSelect = (item: ListingItem) => {
    updateFormData({ 
      specificItem: item,
      serviceCategory: item.category,
      serviceType: item.category.toLowerCase() as ServiceType
    });
  };
  
  const sourceListings = error ? fallbackListings : listings.length > 0 ? listings : SAMPLE_SERVICES;



          {error && (
            <div className="text-center text-red-400 text-sm">
              {(error as Error).message || 'Failed to load services'}. Showing sample data.
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-4 mt-4">
            {loading ? (
              <>
                <Skeleton className="h-[120px] w-full" />
                <Skeleton className="h-[120px] w-full" />
                <Skeleton className="h-[120px] w-full" />
              </>
            ) : filteredListings.length > 0 ? (
              filteredListings.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  className={`cursor-pointer transition-all ${
                    formData.specificItem?.id === item.id ? "ring-2 ring-zion-purple rounded-lg" : ""
                  }`}
                >
                  <ListingScoreCard
                    title={item.title}
                    category={item.category}
                    aiScore={Math.floor(Math.random() * 30) + 70}
                    rating={Math.floor(Math.random() * 2) + 3}
                    reviewCount={Math.floor(Math.random() * 50) + 10}
                    image={item.image}
                    description="Sample listing description"
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-zion-slate-light">
                No items found. Please try a different search.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
