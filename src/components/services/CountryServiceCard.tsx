<<<<<<< HEAD
<<<<<<< HEAD
  country: CountryPricing
  onSelect: (country: CountryPricing,) => void
  onQuote?: (country: CountryPricing,) => void

  isPopular?: boolean
}
export function CountryServiceCard({
  country
  onSelect
  onQuote
  isPopular
}: CountryServiceCardProps) {
  country: CountryPricing,
  onSelect: (country: CountryPricing,) => void,
  onQuote?: (country: CountryPricing,) => void,

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import { CountryPricing } from "@/data/onsiteServicePricing",
interface CountryServiceCardProps {
  country: CountryPricing,
  onSelect: (country: CountryPricing) => void,
  onQuote?: (country: CountryPricing) => void,
}

export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {

  const getRegionEmoji = (countryName: string | undefined): string => {

  isPopular?: boolean
}

export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string | undefined): string => {
    if (!countryName) return '🌐'
    const emojiMap: Record<string, string> = {
      'United States': '🇺🇸'
      'United Kingdom': '🇬🇧'
      Canada: '🇨🇦'
      Australia: '🇦🇺'
      Germany: '🇩🇪'
      France: '🇫🇷'
      Japan: '🇯🇵'
      China: '🇨🇳'
      Brazil: '🇧🇷'
      India: '🇮🇳'
      Russia: '🇷🇺'
      Singapore: '🇸🇬'
      'South Korea': '🇰🇷'
      'South Africa': '🇿🇦'
      // Default if no flag is found
      default: '🌐'
    }
    return emojiMap[countryName] |'🌐'
  }
  // Get response time estimate based on country
  const getResponseTime = (countryName: string | undefined): string => {
    if (!countryName) return '8-24 hours'
    const tier1 = [
      'United States'
      'United Kingdom'
      'Germany'
      'Japan'
      'Singapore'
      'Australia'
      'Canada'
      'France'
    ]
    const tier2 = [
      'China'
      'Brazil'
      'India'
      'South Korea'
      'South Africa'
      'Russia'
    ]
    if (tier1.includes(countryName)) {
      return '4 hours'
    } else if (tier2.includes(countryName)) {
      return '6 hours'
    } else {
      return '8-24 hours'
    }
  }
    >
      <CardHeader className='pb-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <span className='text-2xl' aria-hidden='true'>
              {getRegionEmoji(country.country)}
            </span>
            <h3 className='text-lg font-semibold text-white truncate'>
              {country.country |'Unknown Country'}
            </h3>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string | undefined): string => {


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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    }
  },
  
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
        : "bg-zion-blue-dark border-zion-blue-light"
    }`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>
            <h3 className="text-lg font-semibold text-white truncate">{country.country || 'Unknown Country'}</h3>


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
    }
  },
  
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
        : "bg-zion-blue-dark border-zion-blue-light"
    }`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>
            <h3 className="text-lg font-semibold text-white truncate">{country.country || 'Unknown Country'}</h3>
<<<<<<< HEAD

          </div>
            <Badge className='bg-zion-purple text-white border-none'>
              Popular
            </Badge>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='space-y-2 text-zion-slate-light'>
          <div className='flex items-start'>
            <Clock className='h-4 w-4 mr-2 text-zion-purple mt-1' />
            <span>
              Typical response time: {getResponseTime(country.country)}
            </span>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        
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
<<<<<<< HEAD
<<<<<<< HEAD
      <CardFooter className="flex flex-col space-y-2">
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
        <Button
          variant='outline'
          className='w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10'
          onClick={() => onQuote?.(country)}        >
          variant="outline"
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          onClick={() => onQuote?.(country)}
        >
          Get Quote
        </Button>
        <Button
          asChild
          variant="ghost"
          className="w-full text-zion-cyan hover: text-zion-purple"
        >
          <Link href="/contact">Contact Sales</Link>
        </Button>
      </CardFooter>;
    </Card>;
  );
};
}
      </CardFooter>
    </Card>
  )
}
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
import { Badge } from "@/components/ui/badge",;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Globe, Server, Clock, MapPin, Check } from 'lucide-react';
import { CountryPricing } from "@/data/onsiteServicePricing",;
interface CountryServiceCardProps {;
  country: CountryPricing,;
  onSelect: (country: CountryPricing) => void,;
  onQuote?: (country: CountryPricing) => void,;
  isPopular?: boolean;
}
;
export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {;
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (countryName: string | undefined): string => {;
    if (!countryName) return "🌐",;
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
    },;
    return emojiMap[countryName] || "🌐";
  },;
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string | undefined): string => {;
    if (!countryName) return "8-24 hours",;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],;
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
    if (tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2.includes(countryName)) {;
      return "6 hours";
    } else {;
      return "8-24 hours";
    }
  };
  return (;
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;
      isPopular;
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple";
        : "bg-zion-blue-dark border-zion-blue-light";
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country || 'Unknown Country'}</h3>;
          </div>;
          {isPopular && (;
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-3xl font-bold text-zion-cyan mb-4">;
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
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className='flex flex-col space-y-2'>;
        <Button
          onClick = {() => onSelect(country),}
          className={`w-full ${;
            isPopular;
<<<<<<< HEAD
<<<<<<< HEAD
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple';
              : 'bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light';
    >;
      <CardHeader className='pb - 2'>;
        <div className='flex items - center justify - between'>;
          <div className='flex items - center space - x-2'>;
            <span className='text - 2xl' aria - hidden='true'>;
              {getRegionEmoji (country.country)}
            </span>;
            <h3 className='text - lg font - semibold text - white truncate'>;
              {country.country || 'Unknown Country'}
            </h3>;
          </div>;
          {is_popular && (
            <Badge className='bg - zion - purple text - white border - none'>;
              Popular;
            </Badge>)}
        </div>;
      </CardHeader>;
      <CardContent className='pb - 4'>;
        <p className='text - 3xl font - bold text - zion - cyan mb - 4'>;
          ${country.pricePerIncident.to_fixed (2)}
        </p>;
        <div className='space - y-2 text - zion - slate - light'>;
          <div className='flex items - start'>;
            <Clock className='h - 4 w - 4 mr - 2 text - zion - purple mt - 1' />;
            <span>;
              Typical response time: {getResponseTime (country.country)}
            </span>;
          </div>;
          <div className='flex items - start'>;
            <MapPin className='h - 4 w - 4 mr - 2 text - zion - purple mt - 1' />;
            <span > Service available in major cities</span>;
          </div>;
          <div className='flex items - start'>;
            <Server className='h - 4 w - 4 mr - 2 text - zion - purple mt - 1' />;
            <span > Hardware & network support</span>;
          </div>;
          <div className='flex items - start'>;
            <Check className='h - 4 w - 4 mr - 2 text - zion - purple mt - 1' />;
            <span > First hour included</span>;
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className='flex flex - col space - y-2'>;
        <Button;
          on_click = {() => on_select (country), }
          className={`w - full ${
            is_popular;
              ? 'bg - gradient - to - r from - zion - purple to - zion - purple - dark hover:from - zion - purple - light hover:to - zion - purple';
              : 'bg - zion - blue hover:bg - zion - blue - light border border - zion - blue - light';
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }`}
        >;
          Select Service;
        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
        <Button;
          variant="outline";
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10";
          onClick={() => onQuote?.(country)}
        >;
          Get Quote;
        </Button>;
        <Button;
          asChild;
          variant="ghost";
          className="w-full text-zion-cyan hover: text-zion-purple";
        >;
          <Link href="/contact">Contact Sales</Link>;
=======

          className='w-full text-zion-cyan hover:text-zion-purple'>;
          <Link href='/contact'>Contact Sales</Link>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          className='w-full text-zion-cyan hover:text-zion-purple'>;
          <Link href='/contact'>Contact Sales</Link>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <Button;
          variant='outline';
          className='w - full border - zion - purple text - zion - purple hover:bg - zion - purple / 10';
          on_click={() => on_quote?.(country)}        >;
          Get Quote;
        </Button>;
        <Button;
          as_child;
          variant='ghost';
          className='w - full text - zion - cyan hover:text - zion - purple';
        >;
          <Link href='/contact'>Contact Sales</Link>;
        </Button>;
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <CardFooter className="flex flex-col space-y-2">
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
        <Button
          variant='outline'
          className='w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10'
          onClick={() => onQuote?.(country)}        >
          variant="outline"
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          onClick={() => onQuote?.(country)}
        >

          Get Quote
<<<<<<< HEAD
=======
        </Button>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Button
          asChild
          variant="ghost"
          className="w-full text-zion-cyan hover: text-zion-purple"
        >
          <Link href="/contact">Contact Sales</Link>
        </Button>
<<<<<<< HEAD
      </CardFooter>;
    </Card>;
  );
};
}
}
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
import { Badge } from "@/components/ui/badge",;
import { Globe, Server, Clock, MapPin, Check } from 'lucide-react';
import { CountryPricing } from "@/data/onsiteServicePricing",;
interface CountryServiceCardProps {;
  country: CountryPricing,;
  onSelect: (country: CountryPricing) => void,;
  onQuote?: (country: CountryPricing) => void,;
  isPopular?: boolean;
}
;
export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {;
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (countryName: string | undefined): string => {;
    if (!countryName) return "🌐",;
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
    },;
    return emojiMap[countryName] || "🌐";
  },;
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string | undefined): string => {;
    if (!countryName) return "8-24 hours",;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],;
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
    if (tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2.includes(countryName)) {;
      return "6 hours";
    } else {;
      return "8-24 hours";
    }
  };
  return (;
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;
      isPopular;
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple";
        : "bg-zion-blue-dark border-zion-blue-light";
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country || 'Unknown Country'}</h3>;
          </div>;
          {isPopular && (;
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}
        </div>;
      </CardHeader>;
      <CardContent className="pb-4">;
        <p className="text-3xl font-bold text-zion-cyan mb-4">;
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
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className="flex flex-col space-y-2">;
        <Button;
          onClick={() => onSelect(country)}
          className={`w-full ${;
            isPopular;
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light";
          }`}
        >;
          Select Service;
        </Button>;
        <Button;
          variant="outline";
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10";
          onClick={() => onQuote?.(country)}
        >;
          Get Quote;
        </Button>;
        <Button;
          asChild;
          variant="ghost";
          className="w-full text-zion-cyan hover: text-zion-purple";
        >;
          <Link href="/contact">Contact Sales</Link>;
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
;
ursor/fix-website-loading-errors-and-merge-6662
;
      </CardFooter>
    </Card>
<<<<<<< HEAD
  )
=======
  )
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      </CardFooter>
    </Card>
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
