

<<<<<<< HEAD
import { useState } from "react",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { CountryServiceCard } from "@/components/services/CountryServiceCard";
import { CountryPricing } from "@/data/onsiteServicePricing";

interface CountryTabsProps {
  popularCountries: string[];
  filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void
}

export function CountryTabs({ 
  popularCountries;

  filteredCountries;
  handleCountrySelect;
  searchQuery;

  setSearchQuery 
=======
import { useState } from "react",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { CountryServiceCard } from "@/components/services/CountryServiceCard";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceCard } from "@/components/services/CountryServiceCard",;
import { CountryPricing } from "@/data/onsiteServicePricing",;

>>>>>>> origin/main
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
            .map(country => (  filteredCountries, ;
  handleCountrySelect, ;
  searchQuery, ;
  setSearchQuery ;    <Tabs defaultValue="featured" className="w-full">;
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">;
          Featured Countries;
        </TabsTrigger>;
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;
          All Countries;
        </TabsTrigger>;
      </TabsList>;      <TabsContent value="featured" className="mt-0">;
        <div className="mb-6">;
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>;
          <p className="text-zion-slate-light text-center mt-2">;
            Browse our most popular service destinations;
          </p>;
        </div>;

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;
          {filteredCountries;
            .filter(country => popularCountries && popularCountries.includes(country && country.country));
            .map(country => (;              <CountryServiceCard
                key={country && country.country} 
                country={country} 

              <CountryServiceCard 
                key={country.country} 
                country={country} 

        <div className="mb-6 max-w-md mx-auto">;
          <div className="relative">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;              onSelect={handleCountrySelect}
              isPopular={popularCountries && popularCountries.includes(country && country.country)}
            />;
          ))}


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
export function CountryTabs({
  popularCountries;



export function CountryTabs({ ;
  popularCountries,
  filteredCountries, 
  handleCountrySelect, 
  searchQuery, 
  setSearchQuery;)
}: CountryTabsProps) {
  return ("
    <Tabs defaultValue="featured" className="w-full">"
"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">"
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">"

        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">"

        
      <TabsContent value="featured" className="mt-0">"
        <div className="mb-6">"
</div>"
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>""
          <p className="text-zion-slate-light text-center mt-2">"
</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">"
    <Tabs defaultValue="featured" className="w-full">;"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;"
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">;"

        ;"
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;"

        ;
      <TabsContent value="featured" className="mt-0">;"
        <div className="mb-6">;"
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>;""
          <p className="text-zion-slate-light text-center mt-2">;"
          </p>;
        </div>;"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;"
</div>
              <CountryServiceCard;
                key={country && country.country} 
                country={country} 


                key={country.country} 

                onSelect={handleCountrySelect}
                isPopular={true}
              />;

        </div>;
      <TabsContent value="all" className="mt-0">;"
        <div className="mb-6 max-w-md mx-auto">;"
          <div className="relative">;"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;"

            <Input;"
              type="text"""
              placeholder="Search by country..."""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white""
              value={searchQuery}
)
              onChange={(e) => setSearchQuery(e && e.target.value)}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;"



              isPopular={popularCountries && popularCountries.includes(country && country.country)}

          <div className="text-center mt-8">;"
            <Button;"
              onClick={() => document && document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}

    <Tabs default_value="featured" className="w - full">;"
      <TabsList className="bg - zion - blue - light border border - zion - blue - light w - full max - w-md mx - auto mb - 6">;"
        <TabsTrigger value="featured" className="data-[state = active]:bg - zion - purple">;"

        <TabsTrigger value="all" className="data-[state = active]:bg - zion - purple">;"

      <TabsContent value="featured" className="mt - 0">;"
        <div className="mb - 6">;"
          <h2 className="text - 2xl font - bold text - white text - center">Featured Service Locations</h2>;""
          <p className="text - zion - slate - light text - center mt - 2">;"
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 6">;"
                on_select={handleCountrySelect}
                is_popular={true}
              />));

      <TabsContent value="all" className="mt - 0">;"
        <div className="mb - 6 max - w-md mx - auto">;"
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" />;"

              type="text";""
              placeholder="Search by country...";""
              className="pl - 10 bg - zion - blue border - zion - blue - light text - white";"
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}

        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 4">;"
              is_popular={popular_countries.includes (country.country)}
            />))}

          <div className="text - center mt - 8">;"
              on_click={() => document.getElementById ('pricing - table')?.scrollIntoView ({ behavior: 'smooth' })}

          </div>)}
    );
  return (<Tabs defaultValue="featured" className="w-full" > <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6" > <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple" > all"className=" data-[state=active]:bg-zion-purple"> All Countries   <TabsContent value=" featured"className=" mt-0"> <div className=" mb-6"> <h2 className=" text-2xl font-bold text-white text-center">Featured Service Locations</h2> <p className=" text-zion-slate-light text-center mt-2"> Browse our most popular service destinations </p> </div> <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {"
  filteredCountries .filter (country => popularCountries.includes (country.country) ) .map (country => (<CountryServiceCard key= {
  country.country;
}country= {
  country;
}onSelect= {
  handleCountrySelect;
}isPopular= {
  true;)
}/>) ) 
}</div>  <TabsContent value=" all"className=" mt-0"> <div className=" mb-6 max-w-md mx-auto"> <div className=" relative"> <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" /> <Input /> </div> </div> <CountryServiceCard key= {"

}</div> > View All {
}Countries  </div>) 
} ) 
              isPopular={popularCountries.includes(country.country)}
            />

          <div className="text-center mt-8">"
              onClick={() => document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}

            
      
    
pr-12325
