<<<<<<< HEAD



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

=======

interface ServiceTypeStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void

import { useState } from "react";
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { ListingScoreCard } from "@/components/ListingScoreCard";

interface ServiceTypeStepProps {

  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void;

}

export function ServiceTypeStep({ formData, updateFormData }: ServiceTypeStepProps) {;
  const [searchQuery, setSearchQuery] = useState("");

export function ServiceTypeStep({ formData, updateFormData }: ServiceTypeStepProps) {
  const [searchQuery, setSearchQuery] = useState(""),


  {
    id: "service-1",
    title: "AI Development",
>>>>>>> origin/cursor/delete-old-data-records-6bba

    category: "Services",
    image:"
      "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format",
  },
  {"
    id: "service-2","
    title: "Cloud Migration","
    category: "Services",
    image:"
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format",
  },
  {"
    id: "talent-1","
    title: "AI Engineer","
    category: "Talents",
    image:"
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format",
  },
  {"
    id: "talent-2","
    title: "Data Scientist","
    category: "Talents",
    image:"
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format",
  },
  {"
    id: "equipment-1","
    title: "Workstation","
    category: "Equipment",
    image:"
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format",
  },
  {"
    id: "equipment-2","
    title: "Server Rack","
    category: "Equipment",
    image:"

      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format",
  },
];
<<<<<<< HEAD

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
=======


    updateFormData({

      specificItem: item,
      serviceCategory: item.category,

>>>>>>> origin/cursor/delete-old-data-records-6bba

  return (
    <div className="space - y-6">;
      <div>;
        <h3 className="text - xl font - semibold text - white mb - 4">;
          What are you looking for?;
        </h3>;
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;
          <Card;
            className={`p - 4 cursor - pointer border - 2 transition - colors ${
              form_data.service_type === "service";
                ? "bg - zion - purple / 20 border - zion - purple";
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";
            }`}
<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    updateFormData({
      specificItem: item,
      serviceCategory: item.category,

      serviceType: item.category.toLowerCase() as ServiceType,
    });
  };

  const filteredListings = SAMPLE_LISTINGS.filter((item) => {}
    // Filter by category only when a service type has been selected"
    if (formData.serviceType !== "") {}
      const categoryMatch =
        item.category.toLowerCase() === formData.serviceType.toLowerCase();
      if (!categoryMatch) return false;
    }
"
    if (searchQuery.trim() === "") return true;
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return ("
    <div className="space-y-6">
      <div>"
        <h3 className="text-xl font-semibold text-white mb-4">
          What are you looking for?
        </h3>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            onClick={() => handleTypeSelect("service")}
          >"
            <h4 className="font-medium text-white">Services</h4>"
            <p className="text-sm text-zion-slate-light">
              AI solutions, consulting, development;
            </p>
          </Card>

<<<<<<< HEAD
=======
            className={`p-4 cursor-pointer border-2 transition-colors ${

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
          <Card
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "talent"
                ? "bg-zion-purple/20 border-zion-purple"
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}


          <Card

            className={`p-4 cursor-pointer border-2 transition-colors ${
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD

=======
            onClick={() => handleTypeSelect("talent")}
          >"
            <h4 className="font-medium text-white">Talent</h4>"
            <p className="text-sm text-zion-slate-light">
              AI specialists, developers, consultants;
            </p>
          </Card>
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
          <Card

<Card
          <Card
          <Card 
>>>>>>> origin/cursor/delete-old-data-records-6bba
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "equipment"
                ? "bg-zion-purple/20 border-zion-purple"
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("equipment")}
          >
            <h4 className="font-medium text-white">Equipment</h4>
            <p className="text-sm text-zion-slate-light">
              Servers, workstations, specialized hardware
            </p>
          </Card>
        </div>
      </div>
<<<<<<< HEAD

=======


          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <Input
>>>>>>> origin/cursor/delete-old-data-records-6bba


          <h3 className="text-xl font-semibold text-white">
            Select a specific {formData.serviceType}
          </h3>
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <Input

<<<<<<< HEAD


=======
          <h3 className="text-xl font-semibold text-white">
            Select a specific {formData.serviceType}
          </h3>
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <Input
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState } from "react",;
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes",;
import { Input } from "@/components/ui/input",;
import { Card } from "@/components/ui/card",;
import { Search } from "lucide-react",;
import { ListingScoreCard } from "@/components/ListingScoreCard",;

interface ServiceTypeStepProps {;
  formData: QuoteFormData,;
  updateFormData: (data: Partial<QuoteFormData>) => void;
}

// Sample data - would come from an API in a real application;
const SAMPLE_LISTINGS: ListingItem[] = [;
  { id: "service-1", title: "AI Development", category: "Services", image: "https://images && images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=800&auto=format" },;
  { id: "service-2", title: "Cloud Migration", category: "Services", image: "https://images && images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format" },;
  { id: "talent-1", title: "AI Engineer", category: "Talents", image: "https://images && images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format" },;
  { id: "talent-2", title: "Data Scientist", category: "Talents", image: "https://images && images.unsplash.com/photo-1573497491765-dccce02b29df?w=800&auto=format" },;
  { id: "equipment-1", title: "Workstation", category: "Equipment", image: "https://images && images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format" },;
  { id: "equipment-2", title: "Server Rack", category: "Equipment", image: "https://images && images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format" }],;

export function ServiceTypeStep(): any ({ formData, updateFormData }: ServiceTypeStepProps) {;
  const [searchQuery, setSearchQuery] = useState("");

  const handleTypeSelect = (type: ServiceType) => {;
    updateFormData({ serviceType: type });
  };

  const handleItemSelect = (item: ListingItem) => {;
    updateFormData({ ;
      specificItem: item,;
      serviceCategory: item && item.category,;
      serviceType: item && item.category.toLowerCase() as ServiceType;
    });
  };

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

    <div className="space-y-6">;
      <div>;
        <h3 className="text-xl font-semibold text-white mb-4">What are you looking for?</h3>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;

<<<<<<< HEAD
          <Card ;
            className={`p-4 cursor-pointer border-2 transition-colors ${;
              formData.serviceType === "service" ;
                ? "bg-zion-purple/20 border-zion-purple" ;
                :"bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            }`}
            onClick={() => handleTypeSelect("service")}
          >;
            <h4 className="font-medium text-white">Services</h4>;
            <p className="text-sm text-zion-slate-light">AI solutions, consulting, development</p>;
          </Card>;

<<<<<<< HEAD
          ;
          <Card ;
            className={`p-4 cursor-pointer border-2 transition-colors ${;
              formData.serviceType === "talent" ;
                ? "bg-zion-purple/20 border-zion-purple" ;
                :"bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            }`}
            onClick={() => handleTypeSelect("talent")}
          >;
            <h4 className="font-medium text-white">Talent</h4>;
            <p className="text-sm text-zion-slate-light">AI specialists, developers, consultants</p>;
          </Card>;

<<<<<<< HEAD
          ;
          <Card ;
            className={`p-4 cursor-pointer border-2 transition-colors ${;
              formData.serviceType === "equipment" ;
                ? "bg-zion-purple/20 border-zion-purple" ;
                :"bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50";
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

            }`}
            onClick={() => handleTypeSelect("equipment")}
          >;
            <h4 className="font-medium text-white">Equipment</h4>;
            <p className="text-sm text-zion-slate-light">Servers, workstations, specialized hardware</p>;
          </Card>;
        </div>;
      </div>;
<<<<<<< HEAD

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


=======


              placeholder={`Search ${formData.serviceType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}"
              className="pl-10 bg-zion-blue border border-zion-blue-light focus:border-zion-purple"

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  }`}
                >;
                  <ListingScoreCard;
                    title={item && item.title}
                    category={item && item.category}
                    aiScore={Math && Math.floor(Math && Math.random() * 30) + 70}
                    rating={Math && Math.floor(Math && Math.random() * 2) + 3}
                    reviewCount={Math && Math.floor(Math && Math.random() * 50) + 10}
                    image={item && item.image}"
                    description="Sample listing description"
                  />;
                </div>;
              ));
            ) : (;"
              <div className="text-center py-8 text-zion-slate-light">;
                No items found. Please try a different search.;
              </div>;
            )}
          </div>;
        </div>;
<<<<<<< HEAD

      )}
    </div>;
  );

=======

      )});

>>>>>>> origin/cursor/delete-old-data-records-6bba
            on_click={() => handleTypeSelect ("service")}
          >;
            <h4 className="font - medium text-white">Services</h4>;
            <p className="text - sm text - zion - slate-light">;

              AI specialists, developers, consultants;
            </p>;
          </Card>;
          <Card;`
            className={`p - 4 cursor - pointer border - 2 transition - colors ${"
              form_data.service_type === "equipment";"
                ? "bg - zion - purple / 20 border - zion - purple";"
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";`
            }`}"
            on_click={() => handleTypeSelect ("equipment")}

              Servers, workstations, specialized hardware;
            </p>;
          </Card>;
        </div>;
      </div>;

            {filtered_listings.length > 0 ? (
              filtered_listings.map ((item) => (
                <div;
                  key={item.id}
                  on_click={() => handleItemSelect (item)}`
                  className={`cursor - pointer transition - all ${}
                    form_data.specific_item?.id === item.id;"
                      ? "ring - 2 ring - zion - purple rounded - lg";"
                      : "";`
                  }`}
                >;
                  <ListingScoreCard;
import { useState } from "react";""
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";""
import { Input } from "@/components/ui/input";""
import { Card } from "@/components/ui/card";""
import { Search } from "lucide-react";""
import { ListingScoreCard } from "@/components/ListingScoreCard";"
interface ServiceTypeStepProps {
  // TODO: Implement
}
  formData: QuoteFormData;,
  updateFormData: (data: Partial<QuoteFormData>) => void;
"
    <div className="space-y-6">"
</Input>
          </div>;"
          <div className="grid grid - cols - 1 gap - 4 mt - 4">;"
</div>
      <div>
</div>"
        <h3 className="text-xl font-semibold text-white mb-4">"
</h3>
        </h3>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"
          <Card;
            className={`p-4 cursor-pointer border-2 transition-colors ${"
              formData.serviceType === "service"""
                ? "bg-zion-purple/20 border-zion-purple"""
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50""`;
            }`}"
            onClick={() => handleTypeSelect("service")}"
            <h4 className="font-medium text-white">Services</h4>""
            <p className="text-sm text-zion-slate-light">"
</p>

          <Card;`;
              formData.serviceType === "talent"""
            onClick={() => handleTypeSelect("talent")}"
            <h4 className="font-medium text-white">Talent</h4>""

              formData.serviceType === "equipment"""
            onClick={() => handleTypeSelect("equipment")}"
            <h4 className="font-medium text-white">Equipment</h4>""
        <div className="space-y-4">"
          <h3 className="text-xl font-semibold text-white">"
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>""
          <div className="relative">"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />"

            <Input;`;
              placeholder={`Search ${formData.serviceType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}

          <div className="grid grid-cols-1 gap-4 mt-4">"
                <div;
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  <ListingScoreCard;
                    title={item && item.title}
                    category={item && item.category}
                    aiScore={Math && Math.floor(Math && Math.random() * 30) + 70}
                    rating={Math && Math.floor(Math && Math.random() * 2) + 3}
                    reviewCount={Math && Math.floor(Math && Math.random() * 50) + 10}
                    image={item && item.image}"
                    description="Sample listing description""
                  />;

                </div>;"
              <div className="text-center py-8 text-zion-slate-light">;"
              </div>;
            <h4 className="font - medium text - white">Services</h4>;""
            <p className="text - sm text - zion - slate - light">;"
            </p>;
          ;
            className={`p - 4 cursor - pointer border - 2 transition - colors ${"
              form_data.service_type === "talent";""
                ? "bg - zion - purple / 20 border - zion - purple";""
                : "bg - zion - blue - light / 20 border - zion - blue - light hover:border - zion - purple / 50";"`;
            on_click={() => handleTypeSelect ("talent")}"
            <h4 className="font - medium text - white">Talent</h4>;""
              form_data.service_type === "equipment";""
            on_click={() => handleTypeSelect ("equipment")}"
            <h4 className="font - medium text - white">Equipment</h4>;""
        <div className="space - y-4">;"
          <h3 className="text - xl font - semibold text - white">;"
          </h3>;"
          <div className="relative">;"
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - zion - slate - light h - 4 w - 4" />;"

              placeholder={`Search ${form_data.service_type}...`}
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}

          <div className="grid grid - cols - 1 gap - 4 mt - 4">;"
                  on_click={() => handleItemSelect (item)}
pr-12325
                    title={item.title}
                  on_click={() => handleItemSelect (item)}
</div>

                  <ListingScoreCard;
title={item.title}
                    category={item.category}

                    ai_score={Math.floor (Math.random () * 30) + 70}
                    rating={Math.floor (Math.random () * 2) + 3}
                    review_count={Math.floor (Math.random () * 50) + 10}

                    description="Sample listing description";
                  />;
                </div>))) : (
              <div className="text - center py - 8 text - zion - slate - light">;
                No items found. Please try a different search.;
                    image={item.image}}
                    image={item.image}"
                    description="Sample listing description";"

                </div>))) : ("
              <div className="text - center py - 8 text - zion - slate - light">;"
</div>)
              </div>)}
    </div>);


                    description="Sample listing description"
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-zion-slate-light">
                No items found. Please try a different search.
<<<<<<< HEAD

              </div>
            )}
=======

              <div className="text-center py-8 text-zion-slate-light">"
    </div>"`;
pr-12325
</div>

              </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </div>
        </div>
      )}
    </div>
<<<<<<< HEAD

  );



=======
  );

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
