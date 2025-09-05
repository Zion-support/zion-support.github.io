
import { Card, CardContent, CardFooter, CardHeader } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import { CountryPricing } from &quot;@/data/onsiteServicePricing&quot;;

interface CountryServiceCardProps {
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  isPopular?: boolean;
}

export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)
  const getRegionEmoji = (countryName: string | undefined): string => {
    if (!countryName) return &quot;🌐&quot;;
    
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
    
    return emojiMap[countryName] || &quot;🌐&quot;;
  };
  
  // Get response time estimate based on country
  const getResponseTime = (countryName: string | undefined): string => {
    if (!countryName) return &quot;8-24 hours&quot;;
    
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
            <h3 className=&quot;text-lg font-semibold text-white truncate&quot;>{country.country || 'Unknown Country'}</h3>
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
      <CardFooter className=&quot;flex flex-col space-y-2&quot;>
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
        <Button
          variant=&quot;outline&quot;
          className=&quot;w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
          onClick={() => onQuote?.(country)}
        >
          Get Quote
        </Button>
        <Button
          asChild
          variant=&quot;ghost&quot;
          className=&quot;w-full text-zion-cyan hover:text-zion-purple&quot;
        >
          <Link href=&quot;/contact&quot;>Contact Sales</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
