
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { CountryServiceCard } from "@/components/services/CountryServiceCard",
import { CountryPricing } from "@/data/onsiteServicePricing",
=======
import { useState } from &quot;react&quot;;
import { Search } from &quot;lucide-react&quot;;
import { Input } from &quot;@/components/ui/input&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { CountryServiceCard } from &quot;@/components/services/CountryServiceCard&quot;;
import { CountryPricing } from &quot;@/data/onsiteServicePricing&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface CountryTabsProps {
  popularCountries: string[],
  filteredCountries: CountryPricing[],
  handleCountrySelect: (country: CountryPricing) => void,
  searchQuery: string,
  setSearchQuery: (query: string) => void
}

export function CountryTabs({ 
  popularCountries,
  filteredCountries, 
  handleCountrySelect, 
  searchQuery, 
  setSearchQuery 
}: CountryTabsProps) {
  return (
    <Tabs defaultValue=&quot;featured&quot; className=&quot;w-full&quot;>
      <TabsList className=&quot;bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6&quot;>
        <TabsTrigger value=&quot;featured&quot; className=&quot;data-[state=active]:bg-zion-purple&quot;>
          Featured Countries
        </TabsTrigger>
        <TabsTrigger value=&quot;all&quot; className=&quot;data-[state=active]:bg-zion-purple&quot;>
          All Countries
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value=&quot;featured&quot; className=&quot;mt-0&quot;>
        <div className=&quot;mb-6&quot;>
          <h2 className=&quot;text-2xl font-bold text-white text-center&quot;>Featured Service Locations</h2>
          <p className=&quot;text-zion-slate-light text-center mt-2&quot;>
            Browse our most popular service destinations
          </p>
        </div>
        
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {filteredCountries
            .filter(country => popularCountries.includes(country.country))
            .map(country => (
              <CountryServiceCard 
                key={country.country} 
                country={country} 
=======
import { useState } from "react",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { CountryServiceCard } from "@/components/services/CountryServiceCard",;
import { CountryPricing } from "@/data/onsiteServicePricing",;
interface CountryTabsProps {;
  popularCountries: string[],;
  filteredCountries: CountryPricing[],;
  handleCountrySelect: (country: CountryPricing) => void,;
  searchQuery: string,;
  setSearchQuery: (query: string) => void;
}
;
export function CountryTabs({;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect;
  searchQuery;
  setSearchQuery;
}: CountryTabsProps) {;
  return (;
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;
          {filteredCountries;
            .filter(country => popularCountries.includes(country.country));
            .map(country => (;
              <CountryServiceCard;
                key={country.country} ;
                country={country} ;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                onSelect={handleCountrySelect}
                isPopular={true}
              />;
            ));
          }
<<<<<<< HEAD
        </div>
      </TabsContent>
      
      <TabsContent value=&quot;all&quot; className=&quot;mt-0&quot;>
        <div className=&quot;mb-6 max-w-md mx-auto&quot;>
          <div className=&quot;relative&quot;>
            <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light&quot; />
            <Input
              type=&quot;text&quot;
              placeholder=&quot;Search by country...&quot;
              className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white&quot;
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4&quot;>
          {filteredCountries.slice(0, 12).map(country => (
            <CountryServiceCard 
              key={country.country} 
              country={country} 
=======
        </div>;
      </TabsContent>;
      <TabsContent value="all" className="mt-0">;
        <div className="mb-6 max-w-md mx-auto">;
          <div className="relative">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
            <Input;
              type="text";
              placeholder="Search by country...";
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />;
          </div>;
        </div>;
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;
          {filteredCountries.slice(0, 12).map(country => (;
            <CountryServiceCard;
              key={country.country} ;
              country={country} ;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              onSelect={handleCountrySelect}
              isPopular={popularCountries.includes(country.country)}
            />;
          ))}
<<<<<<< HEAD
        </div>
        
        {filteredCountries.length > 12 && (
          <div className=&quot;text-center mt-8&quot;>
            <Button
              onClick={() => document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}
              variant=&quot;outline&quot;
              className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
            >
              View All {filteredCountries.length} Countries
            </Button>
          </div>
=======
        </div>;
        {filteredCountries.length > 12 && (;
          <div className="text-center mt-8">;
            <Button;
              onClick={() => document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline";
              className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
            >;
              View All {filteredCountries.length} Countries;
            </Button>;
          </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        )}
      </TabsContent>;
    </Tabs>;
  );
}
;