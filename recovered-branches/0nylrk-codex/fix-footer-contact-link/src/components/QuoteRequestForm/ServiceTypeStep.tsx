






>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


interface ServiceTypeStepProps {
  formData: QuoteFormData;
  updateFormData: (data: Partial<QuoteFormData>) => void
}
// Sample data - would come from an API in a real application
const SAMPLE_LISTINGS: ListingItem[] = [







export function ServiceTypeStep({ formData, updateFormData }: ServiceTypeStepProps) {
  const [searchQuery, setSearchQuery] = useState(""),
  
  const handleTypeSelect = (type: ServiceType) => {
    updateFormData({ serviceType: type })
  },
  

  const handleItemSelect = (item: ListingItem) => {
    updateFormData({
      specificItem: item
      serviceCategory: item.category
      serviceType: item.category.toLowerCase() as ServiceType

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
  
  const filteredListings = SAMPLE_LISTINGS.filter(item => {
    // Filter by category only when a service type has been selected
    if (formData.serviceType !== "") {
      const categoryMatch = item.category.toLowerCase() === formData.serviceType.toLowerCase(),
      if (!categoryMatch) return false
    }

    
    if (searchQuery.trim() === "") return true,
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           item.category.toLowerCase().includes(searchQuery.toLowerCase())
  }),


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






          <Card 



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "talent"
                ? "bg-zion-purple/20 border-zion-purple"
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("talent")}
          >
            <h4 className="font-medium text-white">Talent</h4>
            <p className="text-sm text-zion-slate-light">
              AI specialists, developers, consultants
            </p>
          </Card>







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
      {formData.serviceType && (
        <div className="space-y-4">




import {useState} from "react";
import {QuoteFormData, ListingItem, ServiceType} from "@/types/quotes";
import {Input} from "@/components/ui/input";
import {Card} from "@/components/ui/card";
import {Search} from "lucide-react";
import {ListingScoreCard} from "@/components/ListingScoreCard";





              placeholder={`Search ${formData.serviceType}...`}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
                  className={`cursor-pointer transition-all ${

                    formData.specificItem?.id === item.id
                      ? "ring-2 ring-zion-purple rounded-lg"
                      : ""
                    formData.specificItem?.id === item.id ? "ring-2 ring-zion-purple rounded-lg" : ""

                  }`}
                >;
                  <ListingScoreCard
                    title={item && item.title}
                    category={item && item.category}
                    aiScore={Math && Math.floor(Math && Math.random() * 30) + 70}
                    rating={Math && Math.floor(Math && Math.random() * 2) + 3}
                    reviewCount={Math && Math.floor(Math && Math.random() * 50) + 10}
                    image={item && item.image}
                    description="Sample listing description"
                  />;
                </div>;
              ));
            ) : (;
              <div className="text-center py-8 text-zion-slate-light">;
                No items found. Please try a different search.;
              </div>;
            )}
          </div>;
        </div>;
      )}

    </div>;

  );

}