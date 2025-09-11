
<<<<<<< HEAD
<<<<<<< HEAD
import {useState} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CountryServiceCard} from "@/components/services/CountryServiceCard";
import {CountryPricing} from "@/data/onsiteServicePricing";
import { useState } from "react",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",


import { CountryServiceCard } from "@/components/services/CountryServiceCard";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceCard } from "@/components/services/CountryServiceCard",
import { CountryPricing } from "@/data/onsiteServicePricing",
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface CountryTabsProps {

  popularCountries: string[]
  filteredCountries: CountryPricing[]
  handleCountrySelect: (country: CountryPricing) => void
  searchQuery: string

  setSearchQuery: (query: string) => void
}
<<<<<<< HEAD
<<<<<<< HEAD
export function CountryTabs({
  popularCountries;

  filteredCountries
  handleCountrySelect
  searchQuery
  setSearchQuery
=======
export function CountryTabs({
  popularCountries;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


export function CountryTabs({ ;
  popularCountries;
export function CountryTabs({ 
  popularCountries,
  filteredCountries, 
  handleCountrySelect, 
  searchQuery, 
  setSearchQuery 
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36






<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}: CountryTabsProps) {
  return (
    <Tabs defaultValue="featured" className="w-full">
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">
          Featured Countries
        </TabsTrigger>
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">
          All Countries
        </TabsTrigger>
      </TabsList>
      <TabsContent value="featured" className="mt-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries
            .filter(country => popularCountries.includes(country.country))
            .map(country => (
<<<<<<< HEAD
<<<<<<< HEAD
              <CountryServiceCard
                key={country.country}
                country={country}
              <CountryServiceCard 
                key={country.country} 
                country={country} 
import { useState } from "react",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { CountryServiceCard } from "@/components/services/CountryServiceCard",;
import { CountryPricing } from "@/data/onsiteServicePricing",;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {useState} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CountryServiceCard} from "@/components/services/CountryServiceCard";
import {CountryPricing} from "@/data/onsiteServicePricing";
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface CountryTabsProps {;
  popularCountries: string[],;
  filteredCountries: CountryPricing[],;
  handleCountrySelect: (country: CountryPricing) => void,;
  searchQuery: string,;
  setSearchQuery: (query: string) => void;
}

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export function CountryTabs(): any ({ ;
  popularCountries;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export function CountryTabs(): any ({ ;
  popularCountries;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  filteredCountries, ;
  handleCountrySelect, ;
  searchQuery, ;
  setSearchQuery ;
<<<<<<< HEAD
<<<<<<< HEAD
} CountryTabsProps) {;
  return (;
;
export function CountryTabs({;
  popularCountries,;
  filteredCountries,;
  handleCountrySelect;
  searchQuery;
  setSearchQuery;
}: CountryTabsProps) {;
  return (;
=======
}: CountryTabsProps) {;
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}: CountryTabsProps) {;
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Tabs defaultValue="featured" className="w-full">;
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">;
          Featured Countries;
        </TabsTrigger>;
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;
          All Countries;
        </TabsTrigger>;
      </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
      ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <TabsContent value="featured" className="mt-0">;
        <div className="mb-6">;
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>;
          <p className="text-zion-slate-light text-center mt-2">;
            Browse our most popular service destinations;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;
          {filteredCountries;
            .filter(country => popularCountries && popularCountries.includes(country && country.country));
            .map(country => (;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CountryServiceCard
                key={country && country.country} 
                country={country} 

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CountryServiceCard 
                key={country.country} 
                country={country} 

<<<<<<< HEAD
<<<<<<< HEAD
                onSelect={handleCountrySelect}
        ;
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;
          {filteredCountries;
            .filter(country => popularCountries.includes(country.country));
            .map(country => (;
        </div>;
      </TabsContent>;
      ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                onSelect={handleCountrySelect}
                isPopular={true}
              />;
            ));
          }

        </div>;
      </TabsContent>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <TabsContent value="all" className="mt-0">;
        <div className="mb-6 max-w-md mx-auto">;
          <div className="relative">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;
<<<<<<< HEAD
<<<<<<< HEAD
              <CountryServiceCard;
                key={country.country} ;
                country={country} ;
                onSelect={handleCountrySelect}
                isPopular={true}
              />
            ))
          }
        </div>
      </TabsContent>
      <TabsContent value="all" className="mt-0">
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Input
              type="text"
              placeholder="Search by country..."
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={searchQuery}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCountries.slice(0, 12).map(country => (
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              onChange={(e) => setSearchQuery(e && e.target.value)}
            />;
          </div>;
        </div>;
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;
          {filteredCountries && filteredCountries.slice(0, 12).map(country => (;
            <CountryServiceCard
              key={country && country.country} 
              country={country} 

            <CountryServiceCard 
              key={country.country} 
              country={country} 

=======
            <CountryServiceCard
              key={country.country}
              country={country}
            <CountryServiceCard 
              key={country.country} 
              country={country} 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onSelect={handleCountrySelect}
              isPopular={popularCountries && popularCountries.includes(country && country.country)}
            />;
          ))}
<<<<<<< HEAD
        </div>;
        {filteredCountries && filteredCountries.length > 12 && (;
          <div className="text-center mt-8">;
=======

        </div>;

        {filteredCountries && filteredCountries.length > 12 && (;
          <div className="text-center mt-8">;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Button
              onClick={() => document && document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline";
              className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
            >;
              View All {filteredCountries && filteredCountries.length} Countries;
<<<<<<< HEAD
            <Input;
              type="text";
              placeholder="Search by country...";
              className="pl-10 bg-zion-blue border-zion-blue-light text-white";
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />;
          </div>;
        </div>;
        ;
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;
          {filteredCountries.slice(0, 12).map(country => (;
            <CountryServiceCard ;
              key={country.country} ;
              country={country} ;              onSelect={handleCountrySelect}
              isPopular={popularCountries.includes(country.country)}
            />;
          ))}
        </div>;
        ;
        {filteredCountries.length > 12 && (;
          <div className="text-center mt-8">;
            <Button;
              onClick={() => document.getElementById('pricing-table')?.scrollIntoView({ behavior:'smooth' })}
              variant="outline";
              className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
            >;
              View All {filteredCountries.length} Countries;
            </Button>;
          </div>;
        )}
      </TabsContent>;
    </Tabs>;
=======
            </Button>;
          </div>;
        )}

      </TabsContent>;
    </Tabs>;
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from './react';
import { Search } from './lucide-react';
import { Input } from '@/components / ui / input';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { CountryServiceCard } from '@/components / services / CountryServiceCard';
import { CountryPricing } from '@/data / onsiteServicePricing';
interface CountryTabsProps {
  popular_countries: string[],
  filtered_countries: CountryPricing[],
  handleCountrySelect: (country: CountryPricing) => void,
  search_query: string,
  setSearchQuery: (query: string) => void;
}
export /**
 * CountryTabs - Function description
 */
function CountryTabs() {
  return (
    <Tabs default_value="featured" className="w - full">;
      <TabsList className="bg - zion - blue - light border border - zion - blue - light w - full max - w-md mx - auto mb - 6">;
        <TabsTrigger value="featured" className="data-[state = active]:bg - zion - purple">;
          Featured Countries;
        </TabsTrigger>;
        <TabsTrigger value="all" className="data-[state = active]:bg - zion - purple">;
          All Countries;
        </TabsTrigger>;
      </TabsList>;
      <TabsContent value="featured" className="mt - 0">;
        <div className="mb - 6">;
          <h2 className="text - 2xl font - bold text - white text - center">Featured Service Locations</h2>;
          <p className="text - zion - slate - light text - center mt - 2">;
            Browse our most popular service destinations;
          </p>;
        </div>;
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {filtered_countries;
            .filter (country => popular_countries.includes (country.country));
            .map (country => (
              <CountryServiceCard;
                key={country.country}
                country={country}
                on_select={handleCountrySelect}
                is_popular={true}
              />));
          }
        </div>;
      </TabsContent>;
      <TabsContent value="all" className="mt - 0">;
        <div className="mb - 6 max - w-md mx - auto">;
          <div className="relative">;
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" />;
            <Input;
              type="text";
              placeholder="Search by country...";
              className="pl - 10 bg - zion - blue border - zion - blue - light text - white";
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}
            />;
          </div>;
        </div>;
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 4">;
          {filtered_countries.slice (0, 12).map (country => (
            <CountryServiceCard;
              key={country.country}
              country={country}
              on_select={handleCountrySelect}
              is_popular={popular_countries.includes (country.country)}
            />))}
        </div>;
        {filtered_countries.length > 12 && (
          <div className="text - center mt - 8">;
            <Button;
              on_click={() => document.getElementById ('pricing - table')?.scrollIntoView ({ behavior: 'smooth' })}
              variant="outline";
              className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
            >;
              View All {filtered_countries.length} Countries;
            </Button>;
          </div>)}
      </TabsContent>;
    </Tabs>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;}
 interface CountryTabsProps {
  popularCountries: string[];
filteredCountries: CountryPricing[];
handleCountrySelect: (country: CountryPricing) => void;
searchQuery: string;
setSearchQuery: (query: string) => void 
}export function CountryTabs ({
  popularCountries;
filteredCountries;
handleCountrySelect;
searchQuery;
setSearchQuery 
}: CountryTabsProps) {
  return (<Tabs defaultValue="featured" className="w-full" > <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6" > <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple" > all"className=" data-[state=active]:bg-zion-purple"> All Countries </TabsTrigger> </TabsList> <TabsContent value=" featured"className=" mt-0"> <div className=" mb-6"> <h2 className=" text-2xl font-bold text-white text-center">Featured Service Locations</h2> <p className=" text-zion-slate-light text-center mt-2"> Browse our most popular service destinations </p> </div> <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {
  filteredCountries .filter (country => popularCountries.includes (country.country) ) .map (country => (<CountryServiceCard key= {
  country.country 
}country= {
  country 
}onSelect= {
  handleCountrySelect 
}isPopular= {
  true 
}/>) ) 
}</div> </TabsContent> <TabsContent value=" all"className=" mt-0"> <div className=" mb-6 max-w-md mx-auto"> <div className=" relative"> <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> <Input /> </div> </div> <CountryServiceCard key= {
  country.country 
}country= {
  country 
}onSelect= {
  handleCountrySelect 
}isPopular= {
  popularCountries.includes (country.country) 
}/>) ) 
}</div> > View All {
  filteredCountries.length 
}Countries </Button> </div>) 
}</TabsContent> </Tabs>) 
}
            <CountryServiceCard
              key={country.country}
              country={country}
            <CountryServiceCard 
              key={country.country} 
              country={country} 
              onSelect={handleCountrySelect}
              isPopular={popularCountries.includes(country.country)}
            />
          ))}
        </div>
        {filteredCountries.length > 12 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            >
              View All {filteredCountries.length} Countries
            </Button>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
