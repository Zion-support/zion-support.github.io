<<<<<<< HEAD

import {
  Card
  CardContent
  CardFooter
  CardHeader
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

import { Globe, Server, Clock, MapPin, Check } from 'lucide-react'
import { CountryPricing } from "@/data/onsiteServicePricing";
interface CountryServiceCardProps {

  country: CountryPricing
  onSelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  isPopular?: boolean; import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { CountryPricing } from "@/data/onsiteServicePricing"
interface CountryServiceCardProps {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  country: CountryPricing,
  onSelect: (country: CountryPricing,) => void,
  onQuote?: (country: CountryPricing,) => void,

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  isPopular?: boolean
}

export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {

  // Get region flag based on country name (for demo purposes)
=======
>>>>>>>   isPopular?: boolean
}

export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {
>>>>>>>   // Get region flag based on country name (for demo purposes)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  const getRegionEmoji = (countryName: string | undefined): string => {

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
// Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string | undefined): string => {


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>           </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </div>
>>>>>>>           {isPopular && (
            <Badge className='bg-zion-purple text-white border-none'>
              Popular
            </Badge>
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </div>
          {isPopular && (
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-3xl font-bold text-zion-cyan mb-4">
          ${country.pricePerIncident.toFixed(2)}
        </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          </div>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className='space-y-2 text-zion-slate-light'>
          <div className='flex items-start'>
            <Clock className='h-4 w-4 mr-2 text-zion-purple mt-1' />
            <span>
              Typical response time: {getResponseTime(country.country)}
            </span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />
ursor/fix-website-loading-errors-and-merge-6662
          </div>
          <div className='flex items-start'>
            <MapPin className='h-4 w-4 mr-2 text-zion-purple mt-1' />
>>>>>>>             <span>Service available in major cities</span>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        
        <div className="space-y-2 text-zion-slate-light">
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Typical response time: {getResponseTime(country.country)}</span>
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </div>
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Service available in major cities</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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


import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
      <CardFooter className="flex flex-col space-y-2">;
        <Button;
          onClick={() => onSelect(country)}
=======
      <CardFooter className='flex flex-col space-y-2'>;
        <Button
          onClick = {() => onSelect(country),}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          className={`w-full ${;
            isPopular;
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple";
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          }`}
        >;
          Select Service;
        </Button>;
<<<<<<< HEAD

          className='w-full text-zion-cyan hover:text-zion-purple'>;
          <Link href='/contact'>Contact Sales</Link>;
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </Button>;
      </CardFooter>;
    </Card>;
  );
}
<<<<<<< HEAD

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>       <CardFooter className="flex flex-col space-y-2">
=======
      <CardFooter className="flex flex-col space-y-2">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
          variant='outline'
          className='w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10'
          onClick={() => onQuote?.(country)}        >
>>>>>>>           Get Quote
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
          variant="outline"
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
          onClick={() => onQuote?.(country)}
        >

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          Get Quote
>>>>>>>         </Button>
        <Button
          asChild
          variant="ghost"
          className="w-full text-zion-cyan hover: text-zion-purple"
        >
          <Link href="/contact">Contact Sales</Link>
        </Button>
<<<<<<< HEAD

<<<<<<< HEAD
=======
      </CardFooter>;
    </Card>;
  );
};
}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
      </CardFooter>
    </Card>
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
