<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Card } from "@/components/ui/card",
import { Search } from "lucide-react",
import { ListingScoreCard } from "@/components/ListingScoreCard",
=======
import { useState } from &quot;react&quot;;
import { QuoteFormData, ListingItem, ServiceType } from &quot;@/types/quotes&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Card } from &quot;@/components/ui/card&quot;;
import { Search } from &quot;lucide-react&quot;;
import { ListingScoreCard } from &quot;@/components/ListingScoreCard&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ServiceTypeStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void
}

// Sample data - would come from an API in a real application
const SAMPLE_LISTINGS: ListingItem[] = [
<<<<<<< HEAD
  { id: "service-1", title: "AI Development", category: "Services", image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format" },
  { id: "service-2", title: "Cloud Migration", category: "Services", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format" },
  { id: "talent-1", title: "AI Engineer", category: "Talents", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format" },
  { id: "talent-2", title: "Data Scientist", category: "Talents", image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format" },
  { id: "equipment-1", title: "Workstation", category: "Equipment", image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format" },
  { id: "equipment-2", title: "Server Rack", category: "Equipment", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format" }],

export function ServiceTypeStep({ formData, updateFormData }: ServiceTypeStepProps) {
  const [searchQuery, setSearchQuery] = useState(""),
=======
  { id: &quot;service-1&quot;, title: &quot;AI Development&quot;, category: &quot;Services&quot;, image: &quot;https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format&quot; },
  { id: &quot;service-2&quot;, title: &quot;Cloud Migration&quot;, category: &quot;Services&quot;, image: &quot;https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&quot; },
  { id: &quot;talent-1&quot;, title: &quot;AI Engineer&quot;, category: &quot;Talents&quot;, image: &quot;https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&quot; },
  { id: &quot;talent-2&quot;, title: &quot;Data Scientist&quot;, category: &quot;Talents&quot;, image: &quot;https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format&quot; },
  { id: &quot;equipment-1&quot;, title: &quot;Workstation&quot;, category: &quot;Equipment&quot;, image: &quot;https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&quot; },
  { id: &quot;equipment-2&quot;, title: &quot;Server Rack&quot;, category: &quot;Equipment&quot;, image: &quot;https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&quot; }];

export function ServiceTypeStep({ formData, updateFormData }: ServiceTypeStepProps) {
  const [searchQuery, setSearchQuery] = useState("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
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
  
  const filteredListings = SAMPLE_LISTINGS.filter(item => {
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

interface ServiceTypeStepProps {_formData: QuoteFormData;
  updateFormData: (_data: Partial<QuoteFormData>) => void;}

// Sample data - would come from an API in a real application
const SAMPLE_LISTINGS: ListingItem[] = [
  {_id: "service-1", _title: "AI Development", _category: "Services", _image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format"},
  {_id: "service-2", _title: "Cloud Migration", _category: "Services", _image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format"},
  {_id: "talent-1", _title: "AI Engineer", _category: "Talents", _image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format"},
  {_id: "talent-2", _title: "Data Scientist", _category: "Talents", _image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format"},
  {_id: "equipment-1", _title: "Workstation", _category: "Equipment", _image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format"},
  {_id: "equipment-2", _title: "Server Rack", _category: "Equipment", _image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format"}];

export function ServiceTypeStep(_{_formData, _updateFormData}: ServiceTypeStepProps) {_const [searchQuery, _setSearchQuery] = useState("");
  
  const _handleTypeSelect = (_type: ServiceType) => {
    updateFormData({ serviceType: type});
  };
  
  const _handleItemSelect = (_item: ListingItem) => {_updateFormData({ 
      specificItem: item, _serviceCategory: item.category, _serviceType: item.category.toLowerCase() as ServiceType});
  };
  
  const _filteredListings = SAMPLE_LISTINGS.filter(item => {_// Filter by category only when a service type has been selected
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
          
          <div className="grid grid-cols-1 gap-4 mt-4">
            {_filteredListings.length > 0 ? (_filteredListings.map((item) => (_<div 
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