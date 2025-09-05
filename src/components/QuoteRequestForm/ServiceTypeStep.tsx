<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react",
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Card } from "@/components/ui/card",
import { Search } from 'lucide-react'
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { captureException } from "@/utils/sentry",
import Skeleton from "@/components/ui/skeleton",
import { useDebounce } from "@/hooks/useDebounce",
import { useIsMounted } from "@/hooks/useIsMounted",
import { z } from "zod",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import { useEffect, useState } from &quot;react&quot;;
import { QuoteFormData, ListingItem, ServiceType } from &quot;@/types/quotes&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Card } from &quot;@/components/ui/card&quot;;
import { Search } from 'lucide-react'
import { ListingScoreCard } from &quot;@/components/ListingScoreCard&quot;;
import { captureException } from &quot;@/utils/sentry&quot;;
import Skeleton from &quot;@/components/ui/skeleton&quot;;
import { useDebounce } from &quot;@/hooks/useDebounce&quot;;
import { useIsMounted } from &quot;@/hooks/useIsMounted&quot;;
import { z } from &quot;zod&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const listingSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  image: z.string().optional()}),

const listingsSchema = z.array(listingSchema),

interface ServiceTypeStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}


export function ServiceTypeStep({ formData, updateFormData }: ServiceTypeStepProps) {
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState(""),
  const debouncedQuery = useDebounce(searchQuery, 300),
  const [listings, setListings] = useState<ListingItem[]>([]),
  const [loading, setLoading] = useState(false),
  const [error, setError] = useState<string | null>(null),
  const isMounted = useIsMounted(),
=======
  const [searchQuery, setSearchQuery] = useState("&quot;);
  const debouncedQuery = useDebounce(searchQuery, 300);
  const [listings, setListings] = useState<ListingItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useIsMounted();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import Skeleton from "@/components/ui/skeleton";


const _listingSchema = z.object({_id: z.string(), _title: z.string(), _category: z.string(), _image: z.string().optional()});

const _listingsSchema = z.array(listingSchema);

interface ServiceTypeStepProps {_formData: QuoteFormData;
  updateFormData: (_data: Partial<QuoteFormData>) => void;}


export function ServiceTypeStep(_{_formData, _updateFormData}: ServiceTypeStepProps) {_const [searchQuery, _setSearchQuery] = useState("");
  const _debouncedQuery = useDebounce(searchQuery, _300);
  const [listings, _setListings] = useState<ListingItem[]>([]);
  const [loading, _setLoading] = useState(false);
  const [error, _setError] = useState<string | null>(null);
  const _isMounted = useIsMounted();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Fetch services when the service type or query changes
  useEffect__(() => {
    if (!formData.serviceType) {
<<<<<<< HEAD
      setListings([]),
      return
    }

    const fetchServices = async () => {
      setLoading(true),
      setError(null),
      const url = `/api/public/services?category=${encodeURIComponent(
        formData.serviceType
      )}&q=${encodeURIComponent(debouncedQuery)}`,
      const maxRetries = 3,

      for (let attempt = 0, attempt < maxRetries, attempt++) {
        try {
          const response = await fetch(url),
          if (!response.ok) throw new Error('Failed to fetch'),
          const data = await response.json(),
          const parsed = listingsSchema.safeParse(data),
          if (!parsed.success) throw new Error('Invalid response'),
          if (isMounted.current) {
            setListings(parsed.data as ListingItem[]),
            setError(null)
          }
          return
        } catch (err) {
          if (attempt === maxRetries - 1) {
            if (process.env.NODE_ENV === 'development') {
              logErrorToProduction('Failed to load services:', { data: err })
            } else {
              captureException(err)
            }
            if (isMounted.current) {
              setListings([]),
              setError('Failed to load services')
            }
          } else {
            await new Promise((res) => setTimeout(res, Math.pow(2, attempt) * 500))
          }
        } finally {
          if (isMounted.current) setLoading(false)
        }
=======
      setListings([]);
      return;}

    const _fetchServices = async () => {_setLoading(true);
      setError(null);
      const _url = `/api/public/services?category=${encodeURIComponent(
        formData.serviceType
      )}&q=${_encodeURIComponent(debouncedQuery)}`;
      const _maxRetries = 3;

      for (let attempt = 0; attempt < maxRetries; attempt++) {_try {
          const _response = await fetch(url);
          if (!response.ok) throw new Error('Failed to fetch');
          const _data = await response.json();
          const _parsed = listingsSchema.safeParse(data);
          if (!parsed.success) throw new Error('Invalid response');
          if (isMounted.current) {
            setListings(parsed.data as ListingItem[]);
            setError(null);}
          return;
        } catch (err) {_if (attempt === maxRetries - 1) {
            if (process.env.NODE_ENV === 'development') {
              logErrorToProduction('Failed to load services:', _{ data: err});
            } else {_captureException(err);}
            if (isMounted.current) {_setListings([]);
              setError('Failed to load services');}
          } else {_await new Promise(_(res) => setTimeout(res, _Math.pow(2, _attempt) * 500));}
        } finally {_if (isMounted.current) setLoading(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    },

    fetchServices()
  }, [formData.serviceType, debouncedQuery, isMounted]),
  
<<<<<<< HEAD
  const handleTypeSelect = (type: ServiceType) => {
    updateFormData({ serviceType: type })
  },
  
  const handleItemSelect = (item: ListingItem) => {
    updateFormData({ 
      specificItem: item,
      serviceCategory: item.category,
      serviceType: item.category.toLowerCase() as ServiceType
    })
  },
  
  const sourceListings = listings,

  const filteredListings = sourceListings.filter(item => {
    // Filter by category only when a service type has been selected
<<<<<<< HEAD
    if (formData.serviceType !== "") {
      const categoryMatch = item.category.toLowerCase() === formData.serviceType.toLowerCase(),
      if (!categoryMatch) return false
=======
    if (formData.serviceType !== "&quot;) {
      const categoryMatch = item.category.toLowerCase() === formData.serviceType.toLowerCase();
      if (!categoryMatch) return false;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
=======
  const _handleTypeSelect = (_type: ServiceType) => {_updateFormData({ serviceType: type});
  };
  
  const _handleItemSelect = (_item: ListingItem) => {_updateFormData({ 
      specificItem: item, _serviceCategory: item.category, _serviceType: item.category.toLowerCase() as ServiceType});
  };
  
  const _sourceListings = listings;

  const _filteredListings = sourceListings.filter(item => {_// Filter by category only when a service type has been selected
    if (formData.serviceType !== "") {
      const _categoryMatch = item.category.toLowerCase() === formData.serviceType.toLowerCase();
      if (!categoryMatch) return false;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (searchQuery.trim() === "") return true,
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           item.category.toLowerCase().includes(searchQuery.toLowerCase())
  }),

  return (_<div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What are you looking for?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card 
<<<<<<< HEAD
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "service&quot; 
                ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
            }`}
            onClick={() => handleTypeSelect(&quot;service")}
=======
            className={_`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "service" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
            onClick={_() => handleTypeSelect("service")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h4 className="font-medium text-white">Services</h4>
            <p className="text-sm text-zion-slate-light">AI solutions, consulting, development</p>
          </Card>
          
          <Card 
<<<<<<< HEAD
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "talent&quot; 
                ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
            }`}
            onClick={() => handleTypeSelect(&quot;talent")}
=======
            className={_`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "talent" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
            onClick={_() => handleTypeSelect("talent")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h4 className="font-medium text-white">Talent</h4>
            <p className="text-sm text-zion-slate-light">AI specialists, developers, consultants</p>
          </Card>
          
          <Card 
<<<<<<< HEAD
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "equipment&quot; 
                ? &quot;bg-zion-purple/20 border-zion-purple&quot; 
                : &quot;bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50&quot;
            }`}
            onClick={() => handleTypeSelect(&quot;equipment")}
=======
            className={_`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "equipment" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"}`}
            onClick={_() => handleTypeSelect("equipment")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h4 className="font-medium text-white">Equipment</h4>
            <p className="text-sm text-zion-slate-light">Servers, workstations, specialized hardware</p>
          </Card>
        </div>
      </div>
      
      {_formData.serviceType && (_<div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <Input
              placeholder={_`Search ${formData.serviceType}...`}
              value={_searchQuery}
              onChange={_(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zion-blue border border-zion-blue-light focus:border-zion-purple"
            />
          </div>

          {_error && (
            <div className="text-center text-red-400 text-sm">{error}</div>
          )}
          
          <div className="grid grid-cols-1 gap-4 mt-4" aria-busy={_loading}>
            {_loading ? (
              <>
                <Skeleton className="h-[120px] w-full" />
                <Skeleton className="h-[120px] w-full" />
                <Skeleton className="h-[120px] w-full" />
              </>
            ) : filteredListings.length > 0 ? (_filteredListings.map((item) => (_<div
                  key={item.id}
<<<<<<< HEAD
                  onClick={() => handleItemSelect(item)}
                  className={`cursor-pointer transition-all ${
                    formData.specificItem?.id === item.id ? "ring-2 ring-zion-purple rounded-lg&quot; : "&quot;
                  }`}
                >
                  <ListingScoreCard
                    title={item.title}
                    category={item.category}
                    aiScore={Math.floor(Math.random() * 30) + 70}
                    rating={Math.floor(Math.random() * 2) + 3}
                    reviewCount={Math.floor(Math.random() * 50) + 10}
                    image={item.image}
                    description=&quot;Sample listing description&quot;
=======
                  onClick={_() => handleItemSelect(item)}
                  className={_`cursor-pointer transition-all ${
                    formData.specificItem?.id === item.id ? "ring-2 ring-zion-purple rounded-lg" : ""}`}
                >
                  <ListingScoreCard
                    title={_item.title}
                    category={_item.category}
                    aiScore={_Math.floor(Math.random() * 30) + 70}
                    rating={_Math.floor(Math.random() * 2) + 3}
                    reviewCount={_Math.floor(Math.random() * 50) + 10}
                    image={_item.image}
                    description="Sample listing description"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </div>
              ))
            ) : (
              <div className=&quot;text-center py-8 text-zion-slate-light&quot;>
                No items found. Please try a different search.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
