
=======
import { useState } from "react",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { CountryServiceCard } from "@/components/services/CountryServiceCard",;
import { CountryPricing } from "@/data/onsiteServicePricing",;
;
interface CountryTabsProps {;
  popularCountries:string[],;
  filteredCountries:CountryPricing[],;
  handleCountrySelect:(country:CountryPricing) => void,;
  searchQuery:string,;
  setSearchQuery:(query:string) => void;
}
;
export function CountryTabs({ ;
  popularCountries,;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  filteredCountries, ;
  handleCountrySelect, ;
  searchQuery, ;
  setSearchQuery ;
<<<<<<< HEAD

    <Tabs defaultValue="featured" className="w-full">;
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">;
          Featured Countries;
        </TabsTrigger>;
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;
          All Countries;
        </TabsTrigger>;
      </TabsList>;

      <TabsContent value="featured" className="mt-0">;
        <div className="mb-6">;
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>;
          <p className="text-zion-slate-light text-center mt-2">;
            Browse our most popular service destinations;
          </p>;
        </div>;

                isPopular={true}
              />;
            ));
          }
        </div>;
      </TabsContent>;

      <TabsContent value="all" className="mt-0">;
        <div className="mb-6 max-w-md mx-auto">;
          <div className="relative">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;

            </Button>;
          </div>;
        )}
      </TabsContent>;
    </Tabs>;

