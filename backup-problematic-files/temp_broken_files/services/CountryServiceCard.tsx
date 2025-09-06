<<<<<<< HEAD

=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;
<<<<<<< HEAD

          </div>;
          {isPopular && (;
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-3xl font-bold text-zion-cyan mb-4">;

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

          }`}
        >;
          Select Service;
        </Button>;
      </CardFooter>;

=======
 interface CountryServiceCardProps {;
  country: CountryPricing;
onSelect: (country: CountryPricing) => void;
onQuote?: (country: CountryPricing) => void;
isPopular?: boolean ;
}export function CountryServiceCard ({;
  country, onSelect,  onQuote, isPopular ;
}: CountryServiceCardProps) {;
  //Get region flag based on country name (for demo purposes) const getRegionEmoji = (countryName: string | undefined) : string => {;
  return emojiMap[countryName] || "";
};
//Get response time estimate based on country return (<Card className= {;"  `h-full transition-all duration-300 hover:shadow-lg $ {";"  isPopular </div> <div className="flex items-start" > <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Service available in major cities</span> </div> <div className="flex items-start" > <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Hardware & network support</span> </div> <div className="flex items-start" > <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>First hour included</span> </div> </div> </CardContent> <CardFooter className="flex flex-col space-y-2" > <Button onClick={;
  () => onSelect (country) ;
}className= {;"  `w-full $ {";"  isPopular > Select Service </Button> <Button > Get Quote </Button> <Button asChild > <Link href="/contact" >Contact Sales</Link> </Button> </CardFooter> </Card>) ;"}"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
