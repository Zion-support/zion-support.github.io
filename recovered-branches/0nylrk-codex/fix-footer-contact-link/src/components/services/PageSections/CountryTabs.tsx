



import {useState} from "react";""
import {Search} from "lucide-react";""
import {Input} from "@/components/ui/input";""
import {Button} from "@/components/ui/button";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";""
import {CountryServiceCard} from "@/components/services/CountryServiceCard";""
import {CountryPricing} from "@/data/onsiteServicePricing";""
import { useState } from "react",""
import { Search } from "lucide-react",""
import { Input } from "@/components/ui/input",""
import { Button } from "@/components/ui/button",""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",""
import { CountryServiceCard } from "@/components/services/CountryServiceCard";""
import { CountryPricing } from "@/data/onsiteServicePricing";""
import { CountryServiceCard } from "@/components/services/CountryServiceCard",""
import { CountryPricing } from "@/data/onsiteServicePricing","
interface CountryTabsProps {
  // TODO: Implement
}
  popularCountries: string[],
  filteredCountries: CountryPricing[]
  handleCountrySelect: (country: CountryPricing) => void;,
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
export function CountryTabs({
  popularCountries;



export function CountryTabs({ ;
  popularCountries;
export function CountryTabs({ 
  popularCountries,
  filteredCountries, 
  handleCountrySelect, 
  searchQuery, 
  setSearchQuery;)
}: CountryTabsProps) {
  return ("
    <Tabs defaultValue="featured" className="w-full">"
</Tabs>"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">"
</TabsList>"
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">"
</TabsTrigger>
        </TabsTrigger>"
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">"
</TabsTrigger>
        </TabsTrigger>
      </TabsList>"
      <TabsContent value="featured" className="mt-0">"
</TabsContent>"
        <div className="mb-6">"
</div>"
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>""
          <p className="text-zion-slate-light text-center mt-2">"
</p>
          </p>
        </div>"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">"
</div>"
    <Tabs defaultValue="featured" className="w-full">;"
</Tabs>"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;"
</TabsList>"
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">;"
</TabsTrigger>
        </TabsTrigger>;"
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;"
</TabsTrigger>
        </TabsTrigger>;
      </TabsList>;"
      <TabsContent value="featured" className="mt-0">;"
</TabsContent>"
        <div className="mb-6">;"
</div>"
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>;""
          <p className="text-zion-slate-light text-center mt-2">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>
              <CountryServiceCard;
                key={country && country.country} 
                country={country} 


              <CountryServiceCard;
                key={country.country} 
                country={country} 

                onSelect={handleCountrySelect}
                isPopular={true}
              />;
</CountryServiceCard>
        </div>;
      </TabsContent>;"
      <TabsContent value="all" className="mt-0">;"
</TabsContent>"
        <div className="mb-6 max-w-md mx-auto">;"
</div>"
          <div className="relative">;"
</div>"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;"
</Search>
            <Input;"
              type="text"""
              placeholder="Search by country..."""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white""
              value={searchQuery}
)
              onChange={(e) => setSearchQuery(e && e.target.value)}
</Input>
          </div>;
        </div>;"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;"
</div>
            <CountryServiceCard;
              key={country && country.country} 
              country={country} 


            <CountryServiceCard;
              key={country.country} 
              country={country} 

              onSelect={handleCountrySelect}
              isPopular={popularCountries && popularCountries.includes(country && country.country)}
            />;
</CountryServiceCard>
        </div>;"
          <div className="text-center mt-8">;"
</div>
            <Button;"
              onClick={() => document && document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}'
</Button>
            </Button>;
          </div>;
      </TabsContent>;
    </Tabs>;'
    <Tabs default_value="featured" className="w - full">;"
</Tabs>"
      <TabsList className="bg - zion - blue - light border border - zion - blue - light w - full max - w-md mx - auto mb - 6">;"
</TabsList>"
        <TabsTrigger value="featured" className="data-[state = active]:bg - zion - purple">;"
</TabsTrigger>
        </TabsTrigger>;"
        <TabsTrigger value="all" className="data-[state = active]:bg - zion - purple">;"
</TabsTrigger>
        </TabsTrigger>;
      </TabsList>;"
      <TabsContent value="featured" className="mt - 0">;"
</TabsContent>"
        <div className="mb - 6">;"
</div>"
          <h2 className="text - 2xl font - bold text - white text - center">Featured Service Locations</h2>;""
          <p className="text - zion - slate - light text - center mt - 2">;"
</p>
          </p>;
        </div>;"
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
</div>
              <CountryServiceCard;
                key={country.country}
                country={country}
                on_select={handleCountrySelect}
                is_popular={true}
              />));
</CountryServiceCard>
        </div>;
      </TabsContent>;"
      <TabsContent value="all" className="mt - 0">;"
</TabsContent>"
        <div className="mb - 6 max - w-md mx - auto">;"
</div>"
          <div className="relative">;"
</div>"
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" />;"
</Search>
            <Input;"
              type="text";""
              placeholder="Search by country...";""
              className="pl - 10 bg - zion - blue border - zion - blue - light text - white";"
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}
</Input>
          </div>;
        </div>;"
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 4">;"
</div>
            <CountryServiceCard;
              key={country.country}
              country={country}
              on_select={handleCountrySelect}
              is_popular={popular_countries.includes (country.country)}
            />))}
</CountryServiceCard>
        </div>;"
          <div className="text - center mt - 8">;"
</div>
            <Button;"
              on_click={() => document.getElementById ('pricing - table')?.scrollIntoView ({ behavior: 'smooth' })}'
</Button>
            </Button>;
          </div>)}
      </TabsContent>;
    </Tabs>);'
  return (<Tabs defaultValue="featured" className="w-full" > <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6" > <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple" > all"className=" data-[state=active]:bg-zion-purple"> All Countries </TabsTrigger> </TabsList> <TabsContent value=" featured"className=" mt-0"> <div className=" mb-6"> <h2 className=" text-2xl font-bold text-white text-center">Featured Service Locations</h2> <p className=" text-zion-slate-light text-center mt-2"> Browse our most popular service destinations </p> </div> <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {"
</Tabs>)
  filteredCountries .filter (country => popularCountries.includes (country.country) ) .map (country => (<CountryServiceCard key= {
  country.country;
}country= {
  country;
}onSelect= {
  handleCountrySelect;
}isPopular= {
  true;)
}/>) ) 
</CountryServiceCard>"
}</div> </TabsContent> <TabsContent value=" all"className=" mt-0"> <div className=" mb-6 max-w-md mx-auto"> <div className=" relative"> <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> <Input /> </div> </div> <CountryServiceCard key= {"
</TabsContent>
}</div> > View All {
}Countries </Button> </div>) 
}</TabsContent> </Tabs>) 
            <CountryServiceCard;
              key={country.country}
              country={country}
            <CountryServiceCard;
              key={country.country} 
              country={country} 
              onSelect={handleCountrySelect}
              isPopular={popularCountries.includes(country.country)}
            />
</CountryServiceCard>
        </div>"
          <div className="text-center mt-8">"
</div>
            <Button;"
              onClick={() => document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}'
</Button>
            </Button>
          </div>
      </TabsContent>
    </Tabs>'