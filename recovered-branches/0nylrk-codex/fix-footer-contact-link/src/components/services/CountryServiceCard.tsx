<<<<<<< HEAD

=======

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
interface CountryServiceCardProps {
  country: CountryPricing,
  onSelect: (country: CountryPricing) => void,
  isPopular?: boolean
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  isPopular?: boolean
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string): string => {
    const emojiMap: Record<string, string> = {
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",
import { CountryPricing } from "@/data/onsiteServicePricing",

>>>>>>> origin/cursor/delete-old-data-records-6bba
interface CountryServiceCardProps {

interface CountryServiceCardProps {};
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  isPopular?: boolean;
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {}
  // Get region flag based on country name (for demo purposes)

<<<<<<< HEAD

  const getRegionEmoji = (countryName: string): string => {

=======

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
  country: CountryPricing,
  on_select: (country: CountryPricing) => void,
  is_popular?: boolean;
}

<<<<<<< HEAD
export /**
 * CountryServiceCard - Function description
 */
function CountryServiceCard() {
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (country_name: string): string => {
    const emoji_map: Record < string, string> = {

    const emojiMap: Record<string, string> = {;




=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      "United States": "🇺🇸";
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";

<<<<<<< HEAD

=======
"
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      "Germany": "🇩🇪", ;

      "Germany": "🇩🇪", ;
      "Germany": "🇩🇪",
<<<<<<< HEAD




=======

      "Germany": "🇩🇪"
      "Germany": "🇩🇪",

>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      // Default if no flag is found
      "default": "🌐"
    }
    return emojiMap[countryName] |emojiMap["default"]
  }
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];

      // Default if no flag is found
      "default": "🌐"
    }
    return emojiMap[countryName] |emojiMap["default"]
  }
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];


>>>>>>> origin/cursor/delete-old-data-records-6bba
    const emojiMap: Record<string string> = {
      "United States": "🇺🇸",
      "United Kingdom": "🇬🇧",
      "Canada": "🇨🇦",

      "Australia": "🇦🇺",

<<<<<<< HEAD


      "Germany": "🇩🇪", 

=======
      "Germany": "🇩🇪", 

      "Germany": "🇩🇪", 
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD


    if (tier1.includes(countryName)) {



=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  },

  }

  },

  },



<<<<<<< HEAD
  // Get response time estimate based on country;

  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];

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


=======
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


      // Default if no flag is found;
      "default": "🌐";
    };

    return emojiMap[countryName] || emojiMap["default"];
  };

  // Get response time estimate based on country;
  // Get response time estimate based on country;


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

>>>>>>> origin/cursor/delete-old-data-records-6bba
          }`}
        >;
          Select Service;
        </Button>;
      </CardFooter>;

}

<<<<<<< HEAD
    </Card>);
}



=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
