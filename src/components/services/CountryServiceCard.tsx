
<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import { CountryPricing } from "@/data/onsiteServicePricing",
=======
import { Card, CardContent, CardFooter, CardHeader } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import Link from 'next/link';
import { Badge } from &quot;@/components/ui/badge&quot;;
import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import { CountryPricing } from &quot;@/data/onsiteServicePricing&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface CountryServiceCardProps {
  country: CountryPricing,
  onSelect: (country: CountryPricing) => void,
  onQuote?: (country: CountryPricing) => void,
  isPopular?: boolean
}

export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)
  const getRegionEmoji = (countryName: string | undefined): string => {
<<<<<<< HEAD
    if (!countryName) return "🌐",
    
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
    
    return emojiMap[countryName] || "🌐"
  },
  
  // Get response time estimate based on country
  const getResponseTime = (countryName: string | undefined): string => {
    if (!countryName) return "8-24 hours",
    
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],
    
    if (tier1.includes(countryName)) {
      return "4 hours"
    } else if (tier2.includes(countryName)) {
      return "6 hours"
    } else {
      return "8-24 hours"
=======
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
=======
import Link from 'next/link';

interface CountryServiceCardProps {_country: CountryPricing;
  onSelect: (_country: CountryPricing) => void;
  onQuote?: (_country: CountryPricing) => void;
  isPopular?: boolean;}

export function CountryServiceCard(_{_country, _onSelect, _onQuote, _isPopular}: CountryServiceCardProps) {_// Get region flag based on country name (for demo purposes)
  const _getRegionEmoji = (countryName: string | undefined): string => {
    if (!countryName) return "🌐";
    
    const emojiMap: Record<string, _string> = {
      "United States": "🇺🇸", _"United Kingdom": "🇬🇧", _"Canada": "🇨🇦", _"Australia": "🇦🇺", _"Germany": "🇩🇪", _"France": "🇫🇷", _"Japan": "🇯🇵", _"China": "🇨🇳", _"Brazil": "🇧🇷", _"India": "🇮🇳", _"Russia": "🇷🇺", _"Singapore": "🇸🇬", _"South Korea": "🇰🇷", _"South Africa": "🇿🇦", _// Default if no flag is found
      "default": "🌐"};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    return emojiMap[countryName] || &quot;🌐&quot;;
  };
  
  // Get response time estimate based on country
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
=======
  const _getResponseTime = (countryName: string | undefined): string => {_if (!countryName) return "8-24 hours";
    
    const _tier1 = ["United States", _"United Kingdom", _"Germany", _"Japan", _"Singapore", _"Australia", _"Canada", _"France"];
    const _tier2 = ["China", _"Brazil", _"India", _"South Korea", _"South Africa", _"Russia"];
    
    if (tier1.includes(countryName)) {
      return "4 hours";} else if (tier2.includes(countryName)) {_return "6 hours";} else {_return "8-24 hours";}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return (
    <Card className={_`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
<<<<<<< HEAD
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
=======
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
        : "bg-zion-blue-dark border-zion-blue-light"}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" aria-hidden="true">{_getRegionEmoji(country.country)}</span>
            <h3 className="text-lg font-semibold text-white truncate">{_country.country || 'Unknown Country'}</h3>
          </div>
          {_isPopular && (
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-3xl font-bold text-zion-cyan mb-4">
          ${_country.pricePerIncident.toFixed(2)}
        </p>
        
        <div className="space-y-2 text-zion-slate-light">
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Typical response time: {_getResponseTime(country.country)}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
          onClick={_() => onSelect(country)}
          className={_`w-full ${
            isPopular
<<<<<<< HEAD
              ? &quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple&quot;
              : &quot;bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light&quot;
          }`}
=======
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light"}`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Select Service
        </Button>
        <Button
<<<<<<< HEAD
          variant=&quot;outline&quot;
          className=&quot;w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
          onClick={() => onQuote?.(country)}
=======
          variant="outline"
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          onClick={_() => onQuote?.(country)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          Get Quote
        </Button>
        <Button
          asChild
<<<<<<< HEAD
          variant="ghost"
          className="w-full text-zion-cyan hover: text-zion-purple"
=======
          variant=&quot;ghost&quot;
          className=&quot;w-full text-zion-cyan hover:text-zion-purple&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        >
          <Link href=&quot;/contact&quot;>Contact Sales</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
