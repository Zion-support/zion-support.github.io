<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge","
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";"
import { CountryPricing } from "@/data/onsiteServicePricing";"
import { Globe, Server, Clock, MapPin, Check } from "lucide-react","
import { CountryPricing } from "@/data/onsiteServicePricing","
    const "emojiMap": Record<string, string> = {;
    }
    const "emojiMap": Record<string, string> = {
    }
      "United Kingdom": "🇬🇧";"
      "Canada": "🇨🇦";"
      "Australia": "🇦🇺";"
      "Germany": "🇩🇪",      "Germany": "🇩🇪", ;"
      "Germany": "🇩🇪", ;"
      "Germany": "🇩🇪","
      "Germany": "🇩🇪""
      "Germany": "🇩🇪","
      "France": "🇫🇷";"
      "Japan": "🇯🇵";"
      "China": "🇨🇳";"
      "Brazil": "🇧🇷";"
      "India": "🇮🇳";"
      "Russia": "🇷🇺";"
      "Singapore": "🇸🇬";"
      "South Korea": "🇰🇷";"
      "South Africa": "🇿🇦";"
      "Germany": "🇩🇪", "
      "France": "🇫🇷","
      "Japan": "🇯🇵","
      "China": "🇨🇳","
      "Brazil": "🇧🇷","
      "India": "🇮🇳","
      "Russia": "🇷🇺","
      "Singapore": "🇸🇬","
      "South Korea": "🇰🇷","
      "South Africa": "🇿🇦","
=======
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";
import {CountryPricing} from "@/data/onsiteServicePricing";

>>>>>>> merged-prs-20250907-203621
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";
import { CountryPricing } from "@/data/onsiteServicePricing";
<<<<<<< HEAD
interface CountryServiceCardProps {
  country: CountryPricing,
  onSelect: (country: CountryPricing) => void,
  isPopular?: boolean
}

  country: CountryPricing
  onSelect: (country: CountryPricing) => void

  isPopular?: boolean
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string): string => {
    const emojiMap: Record<string, string> = {
=======
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",
import { CountryPricing } from "@/data/onsiteServicePricing",

<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface CountryServiceCardProps {

interface CountryServiceCardProps {};
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  isPopular?: boolean;
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {}
  // Get region flag based on country name (for demo purposes)

<<<<<<< HEAD
=======
  const getRegionEmoji = (countryName: string): string => {
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Globe, Server, Clock, MapPin, Check } from './lucide-react';
import { CountryPricing } from '@/data / onsiteServicePricing';
interface CountryServiceCardProps {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  country: CountryPricing,
  on_select: (country: CountryPricing) => void,
  is_popular?: boolean;
}
<<<<<<< HEAD

=======
export /**
 * CountryServiceCard - Function description
 */
function CountryServiceCard() {
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (country_name: string): string => {
    const emoji_map: Record < string, string> = {

    const emojiMap: Record<string, string> = {;

<<<<<<< HEAD
    const emojiMap: Record<string, string> = {
    const emojiMap: Record<string, string> = {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      "United States": "🇺🇸";
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";
<<<<<<< HEAD
      "Germany": "🇩🇪"
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      "Germany": "🇩🇪", ;

      "Germany": "🇩🇪", ;
      "Germany": "🇩🇪",
<<<<<<< HEAD
      "Germany": "🇩🇪"
      "Germany": "🇩🇪",

=======
<<<<<<< HEAD
      "Germany": "🇩🇪"
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
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
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      // Default if no flag is found
      "default": "🌐"
    }
    return emojiMap[countryName] |emojiMap["default"]
  }
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
<<<<<<< HEAD
      "Germany": "🇩🇪", 
=======
=======

>>>>>>> origin/chore/fix-lint-and-merge
      // Default if no flag is found
      "default": "🌐"
    }
    return emojiMap[countryName] |emojiMap["default"]
  }
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const emojiMap: Record<string string> = {
      "United States": "🇺🇸",
      "United Kingdom": "🇬🇧",
      "Canada": "🇨🇦",

      "Australia": "🇦🇺",
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      "Germany": "🇩🇪", 

>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

      "default": ""
    }"
    return emojiMap[countryName] |emojiMap["default"]
  }

=======
>>>>>>> merged-prs-20250907-203621
      "default": "🌐"
    },
    
    return emojiMap[countryName] || emojiMap["default"]
  },
  
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],
    
<<<<<<< HEAD
    if (tier1.includes(countryName)) {
      return "4 hours"
    } else if (tier2.includes(countryName)) {
      return "6 hours"
    } else {
      return "8-24 hours"
    }
  },
  
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
=======
<<<<<<< HEAD
    
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (tier1.includes(countryName)) {

<<<<<<< HEAD
      return "4 hours"
    } else if (tier2.includes(countryName)) {"
      return "6 hours"
    } else {"
      return "8-24 hours"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  },

  }

  },

  },

<<<<<<< HEAD
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"

          }`}
        >
          Select Service;
=======
<<<<<<< HEAD
  }

  },
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        </Button>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD

import { CountryPricing } from "@/data/onsiteServicePricing",;

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {Badge} from "@/components/ui/badge";""
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";""
import {CountryPricing} from "@/data/onsiteServicePricing";""
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge",""
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";""
import { CountryPricing } from "@/data/onsiteServicePricing";""
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",""
import { CountryPricing } from "@/data/onsiteServicePricing","
interface CountryServiceCardProps {
  // TODO: Implement
}
  country: CountryPricing;,
  onSelect: (country: CountryPricing) => void;
  isPopular?: boolean;
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string): string => {
"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";""
import {Button} from "@/components/ui/button";""
import {Badge} from "@/components/ui/badge";""
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";""
import {CountryPricing} from "@/data/onsiteServicePricing";"
=======
}
<<<<<<< HEAD
;
=======
            isPopular 
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" 
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",;
import { CountryPricing } from "@/data/onsiteServicePricing",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface CountryServiceCardProps {;
  country: CountryPricing,;
  onSelect: (country: CountryPricing) => void,;
  isPopular?: boolean;
}
;
<<<<<<< HEAD

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      // Default if no flag is found;
      "default": "🌐";
    };

    return emojiMap[countryName] || emojiMap["default"];
  };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Get response time estimate based on country;
<<<<<<< HEAD
=======
  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
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

    if (tier1 && tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2 && tier2.includes(countryName)) {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return "6 hours";
    } else {;
      return "8-24 hours";
    }
  };

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
  return (
    <CardclassName={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        : "bg-zion-blue-dark border-zion-blue-light"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;
<<<<<<< HEAD
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>;
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>;
=======
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country && country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country && country.country}</h3>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
          {isPopular && (;
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-3xl font-bold text-zion-cyan mb-4">;
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
          ${country && country.pricePerIncident.toFixed(2)}
        </p>;

        <div className="space-y-2 text-zion-slate-light">;
          <div className="flex items-start">;
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Typical response time: {getResponseTime(country && country.country)}</span>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        <Button;
          on_click={() => on_select (country)}

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }`}
        >;
          Select Service;
        </Button>;
      </CardFooter>;

}
<<<<<<< HEAD
</Card>);
}
    </Card>);
}
=======
    </Card>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
;
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
