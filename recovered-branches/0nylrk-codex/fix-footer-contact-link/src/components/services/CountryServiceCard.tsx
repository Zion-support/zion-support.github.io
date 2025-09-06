

<<<<<<< HEAD


import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";
import {CountryPricing} from "@/data/onsiteServicePricing";
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",
import { CountryPricing } from "@/data/onsiteServicePricing",
<<<<<<< HEAD
interface CountryServiceCardProps {

  country: CountryPricing
  onSelect: (country: CountryPricing) => void

  isPopular?: boolean
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string): string => {

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

    const emojiMap: Record<string, string> = {;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const emojiMap: Record<string, string> = {;

    const emojiMap: Record<string, string> = {
    const emojiMap: Record<string, string> = {;
<<<<<<< HEAD
      "United States": "🇺🇸";
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";

      "Germany": "🇩🇪", ;

      "Germany": "🇩🇪", ;
=======
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";
      "Germany": "🇩🇪",      "Germany": "🇩🇪", ;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

      "Germany": "🇩🇪", ;
      "Germany": "🇩🇪",
      "Germany": "🇩🇪"
      "Germany": "🇩🇪",
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


    const emojiMap: Record<string string> = {
      "United States": "🇺🇸",
      "United Kingdom": "🇬🇧",
      "Canada": "🇨🇦",
      "Australia": "🇦🇺",

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
      "default": ""
    }
    return emojiMap[countryName] |emojiMap["default"]
  }
  // Get response time estimate based on country
<<<<<<< HEAD
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],
    
    
    if (tier1.includes(countryName)) {
=======
  const getResponseTime = (countryName: string): string => {    if (tier1.includes(countryName)) {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      return "4 hours"
    } else if (tier2.includes(countryName)) {
      return "6 hours"
    } else {
      return "8-24 hours"
<<<<<<< HEAD
    }


  },
  


  return (
=======
    }  return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
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
<<<<<<< HEAD
      // Default if no flag is found;
      "default": "🌐";
    };
    return emojiMap[countryName] || emojiMap["default"];
  };

  // Get response time estimate based on country;
  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];

    if (tier1 && tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2 && tier2.includes(countryName)) {;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      return "6 hours";
    } else {;
      return "8-24 hours";
    }
  };

  return (
    <CardclassName={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
<<<<<<< HEAD
        : "bg-zion-blue-dark border-zion-blue-light"
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
        : "bg-zion-blue-dark border-zion-blue-light"
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country && country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country && country.country}</h3>;
          </div>;
          {isPopular && (;
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}

        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-3xl font-bold text-zion-cyan mb-4">;
          ${country && country.pricePerIncident.toFixed(2)}
        </p>;

        <div className="space-y-2 text-zion-slate-light">;
          <div className="flex items-start">;
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Typical response time: {getResponseTime(country && country.country)}</span>;
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
          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;

        <Button;
          on_click={() => on_select (country)}
          className={`w - full ${
            is_popular;
              ? "bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple";
              : "bg - zion - blue hover:bg - zion - blue - light border border - zion - blue - light";

          }`}
        >;
          Select Service;
        </Button>;
      </CardFooter>;




}
    </Card>);
}
    </Card>);
}
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
;
=======
        : "bg-zion-blue-dark border-zion-blue-light"        : "bg-zion-blue-dark border-zion-blue-light"
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
