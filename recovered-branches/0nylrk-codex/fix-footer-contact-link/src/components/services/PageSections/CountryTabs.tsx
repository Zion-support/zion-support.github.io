<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {useState} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CountryServiceCard} from "@/components/services/CountryServiceCard";
import {CountryPricing} from "@/data/onsiteServicePricing";

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { useState } from "react",
import { Search } from "lucide-react",
import { Input } from "@/components/ui/input",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { CountryServiceCard } from "@/components/services/CountryServiceCard";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { CountryServiceCard } from "@/components/services/CountryServiceCard",
import { CountryPricing } from "@/data/onsiteServicePricing",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CountryTabsProps {
=======

import { useState } from "react","
import { Search } from "lucide-react","
import { Input } from "@/components/ui/input","
import { Button } from "@/components/ui/button","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",";
import { CountryServiceCard } from "@/components/services/CountryServiceCard";"
import { CountryPricing } from "@/data/onsiteServicePricing";"
import { CountryServiceCard } from "@/components/services/CountryServiceCard","
import { CountryPricing } from "@/data/onsiteServicePricing",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface CountryTabsProps {}
  popularCountries: string[]
  filteredCountries: CountryPricing[];
  handleCountrySelect: (country: CountryPricing) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function CountryTabs({};
  popularCountries;

  filteredCountries,
  handleCountrySelect,
  searchQuery,
  setSearchQuery

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}: CountryTabsProps) {
  return (
    <Tabs defaultValue="featured" className="w-full">
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">
=======

}: CountryTabsProps) {}
  return ("
    <Tabs defaultValue="featured" className="w-full">"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">
          Featured Countries;
        </TabsTrigger>"
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">
          All Countries;
        </TabsTrigger>
      </TabsList>"
      <TabsContent value="featured" className="mt-0">"
        <div className="mb-6">"
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>"
          <p className="text-zion-slate-light text-center mt-2">
            Browse our most popular service destinations;
          </p>
        </div>"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries;
            .filter(country => popularCountries.includes(country.country))
<<<<<<< HEAD
            .map(country => (
<<<<<<< HEAD
<<<<<<< HEAD

"
import {useState} from "react";"
import {Search} from "lucide-react";"
import {Input} from "@/components/ui/input";"
import {Button} from "@/components/ui/button";"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
import {CountryServiceCard} from "@/components/services/CountryServiceCard";"
import {CountryPricing} from "@/data/onsiteServicePricing";
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            .map(country => (
import { useState } from "react",;
import { Search } from "lucide-react",;
import { Input } from "@/components/ui/input",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { CountryServiceCard } from "@/components/services/CountryServiceCard",;
import { CountryPricing } from "@/data/onsiteServicePricing",;

import {useState} from "react";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {CountryServiceCard} from "@/components/services/CountryServiceCard";
import {CountryPricing} from "@/data/onsiteServicePricing";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface CountryTabsProps {;
  popularCountries: string[],;
  filteredCountries: CountryPricing[],;
  handleCountrySelect: (country: CountryPricing) => void,;
  searchQuery: string,;
  setSearchQuery: (query: string) => void;
}

filteredCountries, ;
=======
            .map(country => (  filteredCountries, ;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  handleCountrySelect, ;
  searchQuery, ;
setSearchQuery ;    <Tabs defaultValue="featured" className="w-full">;
=======
            .map(country => (  filteredCountries, ;
  handleCountrySelect, ;
  searchQuery, ;
  setSearchQuery ;    <Tabs defaultValue="featured" className="w-full">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;
=======
  setSearchQuery ;

"
    <Tabs defaultValue="featured" className="w-full">;"
      <TabsList className="bg-zion-blue-light border border-zion-blue-light w-full max-w-md mx-auto mb-6">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <TabsTrigger value="featured" className="data-[state=active]:bg-zion-purple">;
          Featured Countries;
        </TabsTrigger>;"
        <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple">;
          All Countries;
        </TabsTrigger>;
</TabsList>;      <TabsContent value="featured" className="mt-0">;
        <div className="mb-6">;
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>;
=======
      </TabsList>;

"
      <TabsContent value="featured" className="mt-0">;"
        <div className="mb-6">;"
          <h2 className="text-2xl font-bold text-white text-center">Featured Service Locations</h2>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="text-zion-slate-light text-center mt-2">;
            Browse our most popular service destinations;
          </p>;
        </div>;

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">;
          {filteredCountries;
            .filter(country => popularCountries && popularCountries.includes(country && country.country));
<<<<<<< HEAD
<<<<<<< HEAD
            .map(country => (;
<<<<<<< HEAD
              <CountryServiceCard;
                key={country.country} ;
                country={country} ;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <CountryServiceCard
                key={country && country.country} 
                country={country} 

=======
=======
            .map(country => (;              <CountryServiceCard
                key={country && country.country} 
                country={country} 

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
            .map(country => (;
              <CountryServiceCard
                key={country && country.country} 
                country={country} 

<CountryServiceCard
                key={country && country.country} 
                country={country}
            .map(country => (;              <CountryServiceCard
                key={country && country.country} 
                country={country} 

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <CountryServiceCard 
                key={country.country} 
                country={country} 

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                onSelect={handleCountrySelect}
                isPopular={true}
              />;
            ));
          }
"
      <TabsContent value="all" className="mt-0">;"
        <div className="mb-6 max-w-md mx-auto">;"
          <div className="relative">;"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;

            <Input"
              type="text""
              placeholder="Search by country...""
              className="pl-10 bg-zion-blue border-zion-blue-light text-white"
              value={searchQuery}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

              onChange={(e) => setSearchQuery(e && e.target.value)}
            />;
          </div>;
        </div>;
"
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">;
          {filteredCountries && filteredCountries.slice(0, 12).map(country => (;
            <CountryServiceCard;
              key={country && country.country} 
              country={country} 

            <CountryServiceCard;
              key={country.country} 
              country={country} 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              onSelect={handleCountrySelect}
=======
        <div className="mb-6 max-w-md mx-auto">;
          <div className="relative">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;              onSelect={handleCountrySelect}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <div className="mb-6 max-w-md mx-auto">;
          <div className="relative">;
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />;              onSelect={handleCountrySelect}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              isPopular={popularCountries && popularCountries.includes(country && country.country)}
            />;
))}
          ))}

        </div>;

{filteredCountries && filteredCountries.length > 12 && (;"
          <div className="text-center mt-8">;

            <Button;
              onClick={() => document && document.getElementById('pricing-table')?.scrollIntoView({ behavior: 'smooth' })}"
              variant="outline";"
              className="border-zion-purple text-zion-purple hover:bg-zion-purple/10";
            >;
              View All {filteredCountries && filteredCountries.length} Countries;

'
import { useState } from './react';'
import { Search } from './lucide-react';'
import { Input } from '@/components / ui / input';'
import { Button } from '@/components / ui / button';'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';'
import { CountryServiceCard } from '@/components / services / CountryServiceCard';'
import { CountryPricing } from '@/data / onsiteServicePricing';
interface CountryTabsProps {}
  popular_countries: string[],
  filtered_countries: CountryPricing[],
  handleCountrySelect: (country: CountryPricing) => void,
  search_query: string,
  setSearchQuery: (query: string) => void;
}
export /**;
 * CountryTabs - Function description;
 */
function CountryTabs() {}
  return ("
    <Tabs default_value="featured" className="w - full">;"
      <TabsList className="bg - zion - blue - light border border - zion - blue - light w - full max - w-md mx - auto mb - 6">;"
        <TabsTrigger value="featured" className="data-[state = active]:bg - zion - purple">;
          Featured Countries;
        </TabsTrigger>;"
        <TabsTrigger value="all" className="data-[state = active]:bg - zion - purple">;
          All Countries;
        </TabsTrigger>;
      </TabsList>;"
      <TabsContent value="featured" className="mt - 0">;"
        <div className="mb - 6">;"
          <h2 className="text - 2xl font - bold text - white text - center">Featured Service Locations</h2>;"
          <p className="text - zion - slate - light text - center mt - 2">;
            Browse our most popular service destinations;
          </p>;
        </div>;"
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
          {filtered_countries;
            .filter (country => popular_countries.includes (country.country));
            .map (country => (
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
}
        </div>;
</TabsContent>;"
      <TabsContent value="all" className="mt - 0">;"
        <div className="mb - 6 max - w-md mx - auto">;"
          <div className="relative">;"
            <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 h - 4 w - 4 text - zion - slate - light" />;
            <Input;"
              type="text";"
              placeholder="Search by country...";"
              className="pl - 10 bg - zion - blue border - zion - blue - light text - white";
              value={search_query}
              on_change={(e) => setSearchQuery (e.target.value)}
            />;
          </div>;
</div>;"
        <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 4 gap - 4">;
          {filtered_countries.slice (0, 12).map (country => (
            <CountryServiceCard;
              key={country.country}
              country={country}
              on_select={handleCountrySelect}
              is_popular={popular_countries.includes (country.country)}
            />))}
        </div>;
{filtered_countries.length > 12 && ("
          <div className="text - center mt - 8">;
            <Button;'
              on_click={() => document.getElementById ('pricing - table')?.scrollIntoView ({ behavior: 'smooth' })}"
              variant="outline";"
              className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
            >;
              View All {filtered_countries.length} Countries;
            </Button>;
          </div>)}
      </TabsContent>;
    </Tabs>);
}
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
