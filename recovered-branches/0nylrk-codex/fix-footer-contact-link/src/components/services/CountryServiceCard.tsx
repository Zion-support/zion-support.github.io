


<<<<<<< HEAD
<<<<<<< HEAD
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";
import {CountryPricing} from "@/data/onsiteServicePricing";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",
import { CountryPricing } from "@/data/onsiteServicePricing",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface CountryServiceCardProps {

  country: CountryPricing
  onSelect: (country: CountryPricing) => void

  isPopular?: boolean
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string): string => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";
import {CountryPricing} from "@/data/onsiteServicePricing";
interface CountryServiceCardProps {;
  country: CountryPricing,;
  onSelect: (country: CountryPricing) => void,;
  isPopular?: boolean;
}

export function CountryServiceCard(): any ({ country, onSelect, isPopular }: CountryServiceCardProps) {;
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (countryName: string): string => {;
    const emojiMap: Record<string, string> = {;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Globe, Server, Clock, MapPin, Check } from './lucide-react';
import { CountryPricing } from '@/data / onsiteServicePricing';
interface CountryServiceCardProps {
  country: CountryPricing,
  on_select: (country: CountryPricing) => void,
  is_popular?: boolean;
}
export /**
 * CountryServiceCard - Function description
 */
function CountryServiceCard() {
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (country_name: string): string => {
    const emoji_map: Record < string, string> = {
<<<<<<< HEAD

    const emojiMap: Record<string, string> = {;

<<<<<<< HEAD
    const emojiMap: Record<string, string> = {
    const emojiMap: Record<string, string> = {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

    const emojiMap: Record<string, string> = {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "United States": "🇺🇸";
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      "Germany": "🇩🇪", ;

      "Germany": "🇩🇪", ;
      "Germany": "🇩🇪",
<<<<<<< HEAD
      "Germany": "🇩🇪"
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      "Germany": "🇩🇪", ;

=======
      "Germany": "🇩🇪",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "France": "🇫🇷";
      "Japan": "🇯🇵";
      "China": "🇨🇳";
      "Brazil": "🇧🇷";
      "India": "🇮🇳";
      "Russia": "🇷🇺";
      "Singapore": "🇸🇬";
      "South Korea": "🇰🇷";
      "South Africa": "🇿🇦";
<<<<<<< HEAD
<<<<<<< HEAD
      // Default if no flag is found
      "default": "🌐"
    }
    return emojiMap[countryName] |emojiMap["default"]
  }
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const emojiMap: Record<string string> = {
      "United States": "🇺🇸",
      "United Kingdom": "🇬🇧",
      "Canada": "🇨🇦",
      "Australia": "🇦🇺",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      "Germany": "🇩🇪", 
      "France": "🇫🇷",
      "Japan": "🇯🇵",
      "China": "🇨🇳",
      "Brazil": "🇧🇷",
      "India": "🇮🇳",
      "Russia": "🇷🇺",
      "Singapore": "🇸🇬",
      "South Korea": "🇰🇷",
      "South Africa": "🇿🇦",
      // Default if no flag is found
      "default": "🌐"
    },
    
    return emojiMap[countryName] || emojiMap["default"]
  },
  
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],
    
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    if (tier1.includes(countryName)) {
      return "4 hours"
    } else if (tier2.includes(countryName)) {
      return "6 hours"
    } else {
      return "8-24 hours"
    }
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },
  


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }

  },
  
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
<<<<<<< HEAD
<<<<<<< HEAD
        : "bg-zion-blue-dark border-zion-blue-light"
    }`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>
          </div>
          {isPopular && (
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-3xl font-bold text-zion-cyan mb-4">
          ${country.pricePerIncident.toFixed(2)}
        </p>
        <div className="space-y-2 text-zion-slate-light">
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Typical response time: {getResponseTime(country.country)}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Service available in major cities</span>
          </div>
          <div className="flex items-start">
            <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Hardware & network support</span>
          </div>
          <div className="flex items-start">
            <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>First hour included</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => onSelect(country)}
          className={`w-full ${
            isPopular
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light"
          }`}
        >
          Select Service
        </Button>
      </CardFooter>
    </Card>
  )
}
            isPopular 
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" 
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",;
import { CountryPricing } from "@/data/onsiteServicePricing",;
interface CountryServiceCardProps {;
  country: CountryPricing,;
  onSelect: (country: CountryPricing) => void,;
  isPopular?: boolean;
}
;
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {;
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (countryName: string): string => {;
    const emojiMap: Record<string string> = {;
      "United States": "🇺🇸",;
      "United Kingdom": "🇬🇧",;
      "Canada": "🇨🇦",;
      "Australia": "🇦🇺",;
      "Germany": "🇩🇪",;
      "France": "🇫🇷",;
      "Japan": "🇯🇵",;
      "China": "🇨🇳",;
      "Brazil": "🇧🇷",;
      "India": "🇮🇳",;
      "Russia": "🇷🇺",;
      "Singapore": "🇸🇬",;
      "South Korea": "🇰🇷",;
      "South Africa": "🇿🇦",;
      // Default if no flag is found;
      "default": "🌐";
    };
    return emojiMap[countryName] || emojiMap["default"];
  };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
      // Default if no flag is found;
      "default": "🌐";
    };

    return emojiMap[countryName] || emojiMap["default"];
  };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
<<<<<<< HEAD
<<<<<<< HEAD
    if (tier1 && tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2 && tier2.includes(countryName)) {;
      // Default if no flag is found;
      "default": "🌐";
    },;
    return emojiMap[countryName] || emojiMap["default"];
  },;
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],;
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
    if (tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2.includes(countryName)) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    if (tier1 && tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2 && tier2.includes(countryName)) {;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      return "6 hours";
    } else {;
      return "8-24 hours";
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",;
import { CountryPricing } from "@/data/onsiteServicePricing",;
;
interface CountryServiceCardProps {;
  country:CountryPricing,;
  onSelect:(country:CountryPricing) => void,;
  isPopular?:boolean;
}
;
export function CountryServiceCard({ country, onSelect, isPopular } CountryServiceCardProps) {;
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (countryName:string):string => {;
    const emojiMap:Record<string string> = {;
      "United States":"🇺🇸",;
      "United Kingdom":"🇬🇧",;
      "Canada":"🇨🇦",;
      "Australia":"🇦🇺",;
      "Germany":"🇩🇪", ;
      "France":"🇫🇷",;
      "Japan":"🇯🇵",;
      "China":"🇨🇳",;
      "Brazil":"🇧🇷",;
      "India":"🇮🇳",;
      "Russia":"🇷🇺",;
      "Singapore":"🇸🇬",;
      "South Korea":"🇰🇷",;
      "South Africa":"🇿🇦",;
      // Default if no flag is found;
      "default":"🌐";
    },;
    ;
    return emojiMap[countryName] || emojiMap["default"],;
  },;
  ;
  // Get response time estimate based on country;
  const getResponseTime = (countryName:string):string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],;
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],;
    ;
    if (tier1.includes(countryName)) {;
      return "4 hours",;
    } else if (tier2.includes(countryName)) {;
      return "6 hours",;
    } else {;
      return "8-24 hours",;
    }
  },;
  ;
  return (;
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;
      isPopular ;
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" ;
        :"bg-zion-blue-dark border-zion-blue-light";
  return (;
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;
      isPopular;
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple";
        : "bg-zion-blue-dark border-zion-blue-light";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <CardclassName={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        : "bg-zion-blue-dark border-zion-blue-light"
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;
<<<<<<< HEAD
<<<<<<< HEAD
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>;
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>;
=======
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country && country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country && country.country}</h3>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country && country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country && country.country}</h3>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
          {isPopular && (;
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-3xl font-bold text-zion-cyan mb-4">;
<<<<<<< HEAD
<<<<<<< HEAD
          ${country.pricePerIncident.toFixed(2)}
        </p>;
        ;
        <div className="space-y-2 text-zion-slate-light">;
          <div className="flex items-start">;
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Typical response time:{getResponseTime(country.country)}</span>;
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-3xl font-bold text-zion-cyan mb-4">
          ${country.pricePerIncident.toFixed(2)}
        </p>;
        <div className="space-y-2 text-zion-slate-light">;
          <div className="flex items-start">;
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Typical response time: {getResponseTime(country.country)}</span>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ${country && country.pricePerIncident.toFixed(2)}
        </p>;

        <div className="space-y-2 text-zion-slate-light">;
          <div className="flex items-start">;
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Typical response time: {getResponseTime(country && country.country)}</span>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
          <div className="flex items-start">;
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Service available in major cities</span>;
          </div>;
          <div className="flex items-start">;
            <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Hardware & network support</span>;
          </div>;
          <div className="flex items-start">;
            <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>First hour included</span>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
      // Default if no flag is found;
      "default": "🌐";
    }
;
    return emoji_map[country_name] || emoji_map["default"];
  }
;
  // Get response time estimate based on country;
  const getResponseTime = (country_name: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
;
    if () {) {
  $2
}
      return "4 hours";
    } else if () {) {
  $2
}
      return "6 hours";
    } else {
      return "8 - 24 hours";
    }
  }
;
  return (
    <Card className={`h - full transition - all duration - 300 hover:shadow - lg ${
      is_popular;
        ? "bg - gradient - to - br from - zion - blue - dark to - zion - purple / 10 border - zion - purple";
        : "bg - zion - blue - dark border - zion - blue - light";
    }`}>;
      <CardHeader className="pb - 2">;
        <div className="flex items - center justify - between">;
          <div className="flex items - center space - x-2">;
            <span className="text - 2xl" aria - hidden="true">{getRegionEmoji (country.country)}</span>;
            <h3 className="text - lg font - semibold text - white truncate">{country.country}</h3>;
          </div>;
          {is_popular && (
            <Badge className="bg - zion - purple text - white border - none">Popular</Badge>)}
        </div>;
      </CardHeader>;
      <CardContent className="pb - 4">;
        <p className="text - 3xl font - bold text - zion - cyan mb - 4">;
          ${country.pricePerIncident.to_fixed (2)}
        </p>;
        <div className="space - y-2 text - zion - slate - light">;
          <div className="flex items - start">;
            <Clock className="h - 4 w - 4 mr - 2 text - zion - purple mt - 1" />;
            <span > Typical response time: {getResponseTime (country.country)}</span>;
          </div>;
          <div className="flex items - start">;
            <MapPin className="h - 4 w - 4 mr - 2 text - zion - purple mt - 1" />;
            <span > Service available in major cities</span>;
          </div>;
          <div className="flex items - start">;
            <Server className="h - 4 w - 4 mr - 2 text - zion - purple mt - 1" />;
            <span > Hardware & network support</span>;
          </div>;
          <div className="flex items - start">;
            <Check className="h - 4 w - 4 mr - 2 text - zion - purple mt - 1" />;
            <span > First hour included</span>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Button ;
          onClick={() => onSelect(country)} ;
          className={`w-full ${;
            isPopular ;
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" ;
              :"bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light";
        <Button;
          onClick={() => onSelect(country)} ;
          className={`w-full ${;
            isPopular;
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <Button;
          on_click={() => on_select (country)}
          className={`w - full ${
            is_popular;
              ? "bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
              : "bg - zion - blue hover:bg - zion - blue - light border border - zion - blue - light";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }`}
        >;
          Select Service;
        </Button>;
      </CardFooter>;




}
<<<<<<< HEAD
    </Card>);
}
<<<<<<< HEAD
    </Card>);
}
    </Card>;
  ),;}
 interface CountryServiceCardProps {
  country: CountryPricing;
onSelect: (country: CountryPricing) => void;
isPopular?: boolean 
}export function CountryServiceCard ({
  country, onSelect, isPopular 
}: CountryServiceCardProps) {
  //Get region flag based on country name (for demo purposes) const getRegionEmoji = (countryName: string) : string => {
  return emojiMap[countryName] || emojiMap["default" ];
};
//Get response time estimate based on country return (<Card className= {
  `h-full transition-all duration-300 hover:shadow-lg $ {
  isPopular </div> <div className="flex items-start" > <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Service available in major cities</span> </div> <div className="flex items-start" > <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Hardware & network support</span> </div> <div className="flex items-start" > <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>First hour included</span> </div> </div> </CardContent> <CardFooter> <Button onClick= {
  () => onSelect (country) 
}className= {
  `w-full $ {
  isPopular > Select Service </Button> </CardFooter> </Card>) 
}
    </Card>;
  );
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
