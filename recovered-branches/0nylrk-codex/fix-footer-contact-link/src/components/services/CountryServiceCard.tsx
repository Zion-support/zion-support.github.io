
import { Card, CardContent, CardFooter, CardHeader } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Globe, Server, Clock, MapPin, Check } from &quot;lucide-react&quot;;
import { CountryPricing } from &quot;@/data/onsiteServicePricing&quot;;

interface CountryServiceCardProps {
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  isPopular?: boolean;
}

export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)
  const getRegionEmoji = (countryName: string): string => {
    const emojiMap: Record<string, string> = {
      &quot;United States&quot;: &quot;🇺🇸&quot;,
      &quot;United Kingdom&quot;: &quot;🇬🇧&quot;,
      &quot;Canada&quot;: &quot;🇨🇦&quot;,
      &quot;Australia&quot;: &quot;🇦🇺&quot;,
      &quot;Germany&quot;: &quot;🇩🇪&quot;, 
      &quot;France&quot;: &quot;🇫🇷&quot;,
      &quot;Japan&quot;: &quot;🇯🇵&quot;,
      &quot;China&quot;: &quot;🇨🇳&quot;,
      &quot;Brazil&quot;: &quot;🇧🇷&quot;,
      &quot;India&quot;: &quot;🇮🇳&quot;,
      &quot;Russia&quot;: &quot;🇷🇺&quot;,
      &quot;Singapore&quot;: &quot;🇸🇬&quot;,
      &quot;South Korea&quot;: &quot;🇰🇷&quot;,
      &quot;South Africa&quot;: &quot;🇿🇦&quot;,
      // Default if no flag is found
      &quot;default&quot;: &quot;🌐&quot;
    };
    
    return emojiMap[countryName] || emojiMap[&quot;default&quot;];
  };
  
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = [&quot;United States&quot;, &quot;United Kingdom&quot;, &quot;Germany&quot;, &quot;Japan&quot;, &quot;Singapore&quot;, &quot;Australia&quot;, &quot;Canada&quot;, &quot;France&quot;];
    const tier2 = [&quot;China&quot;, &quot;Brazil&quot;, &quot;India&quot;, &quot;South Korea&quot;, &quot;South Africa&quot;, &quot;Russia&quot;];
    
    if (tier1.includes(countryName)) {
      return &quot;4 hours&quot;;
    } else if (tier2.includes(countryName)) {
      return &quot;6 hours&quot;;
    } else {
      return &quot;8-24 hours&quot;;
    }
  };
  
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? &quot;bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple&quot; 
        : &quot;bg-zion-blue-dark border-zion-blue-light&quot;
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
            <span>Typical response time: {getResponseTime(country.country)}</span>
          </div>
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
        <Button 
          onClick={() => onSelect(country)} 
          className={`w-full ${
            isPopular 
              ? &quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot; 
              : &quot;bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light&quot;
          }`}
        >
          Select Service
        </Button>
      </CardFooter>
    </Card>
  );
}
