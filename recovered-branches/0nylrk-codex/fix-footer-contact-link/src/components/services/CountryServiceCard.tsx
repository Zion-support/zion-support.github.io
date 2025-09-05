
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",
import { CountryPricing } from "@/data/onsiteServicePricing",interface CountryServiceCardProps {
  country: CountryPricing,
  onSelect: (country: CountryPricing) => void,
  isPopular?: boolean
}

export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)
  const getRegionEmoji = (countryName: string): string => {
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
  
  // Get response time estimate based on country,
const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],
    
    if (tier1.includes(countryName)) {
      return "4 hours"
    } else if (tier2.includes(countryName)) {
      return "6 hours"
    } else {
      return "8-24 hours"    
    return emojiMap[countryName] || emojiMap[&quot;default&quot]
  };
  
  // Get response time estimate based on country,
const getResponseTime = (countryName: string): string => {
    const tier1 = [&quot;United States&quot;, &quot;United Kingdom&quot;, &quot;Germany&quot;, &quot;Japan&quot;, &quot;Singapore&quot;, &quot;Australia&quot;, &quot;Canada&quot;, &quot;France&quot];
    const tier2 = [&quot;China&quot;, &quot;Brazil&quot;, &quot;India&quot;, &quot;South Korea&quot;, &quot;South Africa&quot;, &quot;Russia&quot];
    
    if (tier1.includes(countryName)) {
      return &quot;4 hours&quot
    } else if (tier2.includes(countryName)) {
      return &quot;6 hours&quot
    } else {
      return &quot;8-24 hours&quot
    }
  },  
  return (
    <Card className={_`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? &quot;bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple&quot; 
        : &quot;bg-zion-blue-dark border-zion-blue-light&quot
    }`}>
      <CardHeader className=&quot;pb-2&quot;>
        <div className=&quot;flex items-center justify-between&quot;>
          <div className=&quot;flex items-center space-x-2&quot;>
            <span className=&quot;text-2xl&quot; aria-hidden=&quot;true&quot;>{getRegionEmoji(country.country)}</span>
            <h3 className=&quot;text-lg font-semibold text-white truncate&quot;>{country.country}</h3>
          </div>
          {isPopular && (
            <Badge className=&quot;bg-zion-purple text-white border-none&quot;>Popular</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className=&quot;pb-4&quot;>
        <p className=&quot;text-3xl font-bold text-zion-cyan mb-4&quot;>
          ${country.pricePerIncident.toFixed(2)}
        </p>
        
        <div className=&quot;space-y-2 text-zion-slate-light&quot;>
          <div className=&quot;flex items-start&quot;>
            <Clock className=&quot;h-4 w-4 mr-2 text-zion-purple mt-1&quot; />
            <span>Typical response time: {getResponseTime(country.country)}</span>          </div>
          <div className=&quot;flex items-start&quot;>
            <MapPin className=&quot;h-4 w-4 mr-2 text-zion-purple mt-1&quot; />
            <span>Service available in major cities</span>
          </div>
          <div className=&quot;flex items-start&quot;>
            <Server className=&quot;h-4 w-4 mr-2 text-zion-purple mt-1&quot; />
            <span>Hardware & network support</span>
          </div>
          <div className=&quot;flex items-start&quot;>
            <Check className=&quot;h-4 w-4 mr-2 text-zion-purple mt-1&quot; />
            <span>First hour included</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button,
onClick={_() => onSelect(country)} 
          className={_`w-full ${
            isPopular 
              ? &quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot; 
              : &quot;bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light&quot
          }`}        >
          Select Service
        </Button>
      </CardFooter>
    </Card>
  )
}
