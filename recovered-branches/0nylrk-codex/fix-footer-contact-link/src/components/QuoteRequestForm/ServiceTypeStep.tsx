


}


  {
    id: "service-1"
    title: "AI Development"
    category: "Services"
    image:
      "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format"
  }
  {
    id: "service-2"
    title: "Cloud Migration"
    category: "Services"
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format"
  }
  {
    id: "talent-1"
    title: "AI Engineer"
    category: "Talents"
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format"
  }
  {
    id: "talent-2"
    title: "Data Scientist"
    category: "Talents"
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format"
  }
  {
    id: "equipment-1"
    title: "Workstation"
    category: "Equipment"
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format"
  }
  {
    id: "equipment-2"
    title: "Server Rack"
    category: "Equipment"
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format"
  }
];
export function ServiceTypeStep({
  formData
  updateFormData
}: ServiceTypeStepProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleTypeSelect = (type: ServiceType) => {
    updateFormData({ serviceType: type });
  }


  const handleItemSelect = (item: ListingItem) => {
    updateFormData({
      specificItem: item
      serviceCategory: item.category
      serviceType: item.category.toLowerCase() as ServiceType


import { useState  } from './react';
import { QuoteFormData, ListingItem, ServiceType  } from '@/types / quotes';
import { Input  } from '@/components / ui / input';
import { Card  } from '@/components / ui / card';
import { Search  } from './lucide-react';
import { ListingScoreCard  } from '@/components / ListingScoreCard';
interface ServiceTypeStepProps {
  form_data: QuoteFormData;
  updateFormData: (data: Partial < QuoteFormData>) => void;
}
// Sample data - would come from an API in a real application;
const SAMPLE_LISTINGS: ListingItem[] = [;

  {
    id: "service-1",
    title: "AI Development",

    category: "Services",
    image:;
      "https://images.unsplash.com / photo - 1516192518150 - 0d8fee5425e3?w = 800 & auto = format",


;
export /**
 * ServiceTypeStep - Function description
 */
function ServiceTypeStep() {
  const [search_query, setSearchQuery] = useState ("");
;
  const handleTypeSelect = (type: ServiceType) =>: any {
    updateFormData ({ service_type: type });
  }
;
  const handleItemSelect = (item: ListingItem) =>: any {
    updateFormData ({
      specific_item: item,
      service_category: item.category,
      service_type: item.category.toLowerCase () as ServiceType,
    });
  }
;
  const filtered_listings = SAMPLE_LISTINGS.filter ((item) => {
    // Filter by category only when a service type has been selected;
    // Check condition
if ( {) {
  $2
}
      const category_match =;
        item.category.toLowerCase () === form_data.service_type.toLowerCase ();
      // Check condition
if (return false) {
  $2
}
    }
    if (=== "") return true) {
  $2
}
    return (
      item.title.toLowerCase ().includes (search_query.toLowerCase ()) ||;
      item.category.toLowerCase ().includes (search_query.toLowerCase ()));
  });
;
});
  }
  const filteredListings = SAMPLE_LISTINGS.filter((item) => {
    // Filter by category only when a service type has been selected
    if (formData.serviceType !== "") {
      const categoryMatch =
        item.category.toLowerCase() === formData.serviceType.toLowerCase();
      if (!categoryMatch) return false;
    }
    if (searchQuery.trim() === "") return true;
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) |
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
    })
  },
  {
    id: "service-2",
    title: "Cloud Migration",
    category: "Services",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
  },
  {
    id: "talent-1",
    title: "AI Engineer",
    category: "Talents",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format",
  },
  {
    id: "talent-2",
    title: "Data Scientist",
    category: "Talents",
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format",
  },
  {
    id: "equipment-1",
    title: "Workstation",
    category: "Equipment",
    image:
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format",
  },
  {
    id: "equipment-2",
    title: "Server Rack",
    category: "Equipment",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
  },
];

export function ServiceTypeStep({
  formData,
  updateFormData,
}: ServiceTypeStepProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleTypeSelect = (type: ServiceType) => {
    updateFormData({ serviceType: type });
  };

  const handleItemSelect = (item: ListingItem) => {
    updateFormData({
      specificItem: item,
      serviceCategory: item.category,
      serviceType: item.category.toLowerCase() as ServiceType,
    });
  };

  const filteredListings = SAMPLE_LISTINGS.filter((item) => {
    // Filter by category only when a service type has been selected
    if (formData.serviceType !== "") {
      const categoryMatch =
        item.category.toLowerCase() === formData.serviceType.toLowerCase();
      if (!categoryMatch) return false;

    }
    
    if (searchQuery.trim() === "") return true,
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           item.category.toLowerCase().includes(searchQuery.toLowerCase())
  }),

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">
          What are you looking for?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "service"
                ? "bg-zion-purple/20 border-zion-purple"
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("service")}
          >
            <h4 className="font-medium text-white">Services</h4>
            <p className="text-sm text-zion-slate-light">
              AI solutions, consulting, development
            </p>
          </Card>







  const filteredListings = SAMPLE_LISTINGS && SAMPLE_LISTINGS.filter(item => {;
    // Filter by category only when a service type has been selected;
    if (formData && formData.serviceType !== "") {;
      const categoryMatch = item && item.category.toLowerCase() === formData && formData.serviceType.toLowerCase();
      if (!categoryMatch) return false;
    }
    if (searchQuery && searchQuery.trim() === "") return true;
    return item && item.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) || ;
           item && item.category.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
  });
  return (
import { useState } from "react",;
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes",;
import { Input } from "@/components/ui/input",;
import { Card } from "@/components/ui/card",;
import { Search } from "lucide-react",;
import { ListingScoreCard } from "@/components/ListingScoreCard",;
;
interface ServiceTypeStepProps {;
  formData:QuoteFormData,;
  updateFormData:(data:Partial<QuoteFormData>) => void;
}
;
// Sample data - would come from an API in a real application;
const SAMPLE_LISTINGS:ListingItem[] = [;
  { id:"service-1", title:"AI Development", category:"Services", image:"https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format" },;
  { id:"service-2", title:"Cloud Migration", category:"Services", image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format" },;
  { id:"talent-1", title:"AI Engineer", category:"Talents", image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format" },;
  { id:"talent-2", title:"Data Scientist", category:"Talents", image:"https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format" },;
  { id:"equipment-1", title:"Workstation", category:"Equipment", image:"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format" },;
  { id:"equipment-2", title:"Server Rack", category:"Equipment", image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format" }],;
;
export function ServiceTypeStep({ formData, updateFormData } ServiceTypeStepProps) {;
  const [searchQuery, setSearchQuery] = useState(""),;
  ;
  const handleTypeSelect = (type:ServiceType) => {;
    updateFormData({ serviceType:type }),;
  },;
  ;
  const handleItemSelect = (item:ListingItem) => {;
    updateFormData({ ;
      specificItem:item,;
      serviceCategory:item.category,;
      serviceType:item.category.toLowerCase() as ServiceType;
    }),;
  },;
  ;
  const filteredListings = SAMPLE_LISTINGS.filter(item => {;
    // Filter by category only when a service type has been selected;
    if (formData.serviceType !== "") {;
      const categoryMatch = item.category.toLowerCase() === formData.serviceType.toLowerCase(),;
      if (!categoryMatch) return false,;
    }
    ;
    if (searchQuery.trim() === "") return true,;
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) || ;
           item.category.toLowerCase().includes(searchQuery.toLowerCase()),;
  }),;
;
  return (;
          <Card ;
            className={`p-4 cursor-pointer border-2 transition-colors ${;
              formData.serviceType === "service" ;
                ? "bg-zion-purple/20 border-zion-purple" ;
                :"bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
          ;
          <Card ;
            className={`p-4 cursor-pointer border-2 transition-colors ${;
              formData.serviceType === "talent" ;
                ? "bg-zion-purple/20 border-zion-purple" ;
                :"bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
          ;
          <Card ;
            className={`p-4 cursor-pointer border-2 transition-colors ${;
              formData.serviceType === "equipment" ;
                ? "bg-zion-purple/20 border-zion-purple" ;
                :"bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";

            <Input
              placeholder={`Search ${formData && formData.serviceType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e && e.target.value)}
              className="pl-10 bg-zion-blue border border-zion-blue-light focus:border-zion-purple";
            />;
          </div>;
          <div className="grid grid-cols-1 gap-4 mt-4">;
            {filteredListings && filteredListings.length > 0 ? (;
              filteredListings && filteredListings.map((item) => (;
                <div
                  key={item && item.id}
                  onClick={() => handleItemSelect(item)}
                  className={`cursor-pointer transition-all ${;
                    formData && formData.specificItem?.id === item && item.id ? "ring-2 ring-zion-purple rounded-lg" : "";

                    formData.specificItem?.id === item.id ? "ring-2 ring-zion-purple rounded-lg" : ""



      )}
    </div>;
  );


              </div>
            )}

  );



