


<<<<<<< HEAD
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",
import { CountryPricing } from "@/data/onsiteServicePricing",


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface CountryServiceCardProps {

  country: CountryPricing
  onSelect: (country: CountryPricing) => void

  isPopular?: boolean
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string): string => {


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

    const emojiMap: Record<string, string> = {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
      "United States": "🇺🇸";
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";
<<<<<<< HEAD


      "Germany": "🇩🇪", ;


=======

      "Germany": "🇩🇪", ;

=======
      "Germany": "🇩🇪",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    const emojiMap: Record<string string> = {
      "United States": "🇺🇸",
      "United Kingdom": "🇬🇧",
      "Canada": "🇨🇦",
      "Australia": "🇦🇺",
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
    
    if (tier1.includes(countryName)) {
      return "4 hours"
    } else if (tier2.includes(countryName)) {
      return "6 hours"
    } else {
      return "8-24 hours"
    }
  }

  },
  
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
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

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
      return "6 hours";
    } else {;
      return "8-24 hours";
    }
  };

  return (
    <CardclassName={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

}
;
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
