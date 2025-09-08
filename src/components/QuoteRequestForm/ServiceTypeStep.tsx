import { useState } from "react";
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { ListingScoreCard } from "@/components/ListingScoreCard";
import { SAMPLE_SERVICES } from "@/data/sampleServices";
import { Skeleton } from "@/components/ui/skeleton";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { fetchServices } from "@/api/services";

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

  const fallbackListings = SAMPLE_SERVICES.filter(
    (item) =>
      item.category === formData.serviceType &&
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );
  
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
