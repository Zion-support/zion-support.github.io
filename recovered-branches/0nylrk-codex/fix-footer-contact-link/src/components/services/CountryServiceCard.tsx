<<<<<<< HEAD

<<<<<<< HEAD
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";
import {CountryPricing} from "@/data/onsiteServicePricing";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";
import {CountryPricing} from "@/data/onsiteServicePricing";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",
import { CountryPricing } from "@/data/onsiteServicePricing",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CountryServiceCardProps {
=======
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge",";
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";"
import { CountryPricing } from "@/data/onsiteServicePricing";"
import { Globe, Server, Clock, MapPin, Check } from "lucide-react","
import { CountryPricing } from "@/data/onsiteServicePricing",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface CountryServiceCardProps {};
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  isPopular?: boolean;
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {}
  // Get region flag based on country name (for demo purposes)

const getRegionEmoji = (countryName: string): string => {
const emojiMap: Record<string, string> = {
    const emojiMap: Record<string, string> = {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Badge } from '@/components / ui / badge';'
import { Globe, Server, Clock, MapPin, Check } from './lucide-react';'
import { CountryPricing } from '@/data / onsiteServicePricing';
interface CountryServiceCardProps {}
  country: CountryPricing,
  on_select: (country: CountryPricing) => void,
  is_popular?: boolean;
}
export /**;
 * CountryServiceCard - Function description;
 */
function CountryServiceCard() {}
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (country_name: string): string => {}
    const emoji_map: Record < string, string> = {}
    const emojiMap: Record<string, string> = {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export /**
 * CountryServiceCard - Function description
 */
function CountryServiceCard() {
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (country_name: string): string => {
    const emoji_map: Record < string, string> = {

const emojiMap: Record<string, string> = {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const emojiMap: Record<string, string> = {;

    const emojiMap: Record<string, string> = {
    const emojiMap: Record<string, string> = {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "United States": "🇺🇸";
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";
"Germany": "🇩🇪"
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

"
      "Germany": "🇩🇪", ;
=======
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";
      "Germany": "🇩🇪",      "Germany": "🇩🇪", ;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      "United States": "🇺🇸";
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";

      "Germany": "🇩🇪", ;

      "Germany": "🇩🇪", ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      "Germany": "🇩🇪", ;
      "Germany": "🇩🇪",
      "Germany": "🇩🇪"
      "Germany": "🇩🇪",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      // Default if no flag is found
      "default": "🌐"
    }
    return emojiMap[countryName] |emojiMap["default"]
  }
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const emojiMap: Record<string string> = {
      "United States": "🇺🇸",
      "United Kingdom": "🇬🇧",
      "Canada": "🇨🇦",

      "Australia": "🇦🇺",

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      "Australia": "🇦🇺",

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      "Germany": "🇩🇪", 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
      "default": ""
    }"
    return emojiMap[countryName] |emojiMap["default"]
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Get response time estimate based on country
<<<<<<< HEAD
<<<<<<< HEAD
  const getResponseTime = (countryName: string): string => {
<<<<<<< HEAD
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (tier1.includes(countryName)) {
=======
  const getResponseTime = (countryName: string): string => {    if (tier1.includes(countryName)) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const getResponseTime = (countryName: string): string => {    if (tier1.includes(countryName)) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string): string => {}
    if (tier1.includes(countryName)) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],

    if (tier1.includes(countryName)) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return "4 hours"
    } else if (tier2.includes(countryName)) {"
      return "6 hours"
    } else {"
      return "8-24 hours"
<<<<<<< HEAD
    }
<<<<<<< HEAD
<<<<<<< HEAD
  },

  }

  },

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
    }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  },

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${}
      isPopular"
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
<<<<<<< HEAD
=======
    }  return (
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
const emojiMap: Record<string, string> = {;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }`}
        >
          Select Service;
        </Button>
      </CardFooter>
    </Card>
  )
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",;
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
<<<<<<< HEAD
<<<<<<< HEAD
      // Default if no flag is found;
      "default": "🌐";
    };
=======
export function CountryServiceCard() { return null; }
    };"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      // Default if no flag is found;
      "default": "🌐";
    };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return emojiMap[countryName] || emojiMap["default"];
  };

  // Get response time estimate based on country;
const getResponseTime = (countryName: string): string => {;"
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];"
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];

    if (tier1 && tier1.includes(countryName)) {;"
      return "4 hours";
    } else if (tier2 && tier2.includes(countryName)) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];

    if (tier1 && tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2 && tier2.includes(countryName)) {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return "6 hours";
    } else {;"
      return "8-24 hours";
    }
  };

return (
    <CardclassName={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        : "bg-zion-blue-dark border-zion-blue-light"
`
    }`}>;"
      <CardHeader className="pb-2">;"
        <div className="flex items-center justify-between">;"
          <div className="flex items-center space-x-2">;

          </div>;
          {isPopular && (;"
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}

        </div>;
      </CardHeader>;"
      <CardContent className="pb-4">;"
        <p className="text-3xl font-bold text-zion-cyan mb-4">;

          </div>;"
          <div className="flex items-start">;"
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Service available in major cities</span>;
          </div>;"
          <div className="flex items-start">;"
            <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Hardware & network support</span>;
          </div>;"
          <div className="flex items-start">;"
            <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>First hour included</span>;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;

`
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
    </Card>;
  ),;}
 interface CountryServiceCardProps {}
  country: CountryPricing;
onSelect: (country: CountryPricing) => void;
isPopular?: boolean;
}export function CountryServiceCard ({};
  country, onSelect, isPopular;
}: CountryServiceCardProps) {}
  //Get region flag based on country name (for demo purposes) const getRegionEmoji = (countryName: string) : string => {"
  return emojiMap[countryName] || emojiMap["default" ];
};
//Get response time estimate based on country return (<Card className= {}`
  `h-full transition-all duration-300 hover:shadow-lg $ {"
  isPopular </div> <div className="flex items-start" > <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Service available in major cities</span> </div> <div className="flex items-start" > <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Hardware & network support</span> </div> <div className="flex items-start" > <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>First hour included</span> </div> </div> </CardContent> <CardFooter> <Button onClick= {}
  () => onSelect (country) 
}className= {}`
  `w-full $ {}
  isPopular > Select Service </Button> </CardFooter> </Card>) 
}
    </Card>;
  );
}
;

;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country && country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country && country.country}</h3>;
<span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>;
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>;
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
          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        : "bg-zion-blue-dark border-zion-blue-light"        : "bg-zion-blue-dark border-zion-blue-light"
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

        <Button;
          on_click={() => on_select (country)}

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
