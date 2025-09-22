// Get region flag based on country name (for demo,  purposes)
  const getRegionEmoji = (countryName: string |,  undefined): string => {,
    if (!countryName) return "🌐","
// Get region flag based on country name (for demo purposes)

:src_backup/components/services/CountryServiceCard.tsx
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
  isPopular?: boolean
}

<<<<<<< HEAD
export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)
  const getRegionEmoji = (countryName: string | undefined): string => {

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import Link from 'next/link',
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/services/CountryServiceCard.tsx
import { Badge } from "@/components/ui/badge";
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
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;

  isPopular?: boolean
}
export function CountryServiceCard({
  country
  onSelect
  onQuote
  isPopular
}: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = null;
origin/cursor/automate-test-improve-and-merge-code-2533
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

:src_backup/components/services/CountryServiceCard.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
:src/components/services/CountryServiceCard.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/services/CountryServiceCard.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/services/CountryServiceCard.tsx
          </div>
          {isPopular && (
            <Badge className='bg-zion-purple text-white border-none'>
              Popular
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className='pb-4'>
        <p className='text-3xl font-bold text-zion-cyan mb-4'>
          ${country.pricePerIncident.toFixed(2)}
        </p>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="space-y-2 text-zion-slate-light">
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Typical response time: {getResponseTime(country.country)}</span>

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>
          <div className='flex items-start'>
            <MapPin className='h-4 w-4 mr-2 text-zion-purple mt-1' />
            <span>Service available in major cities</span>
          </div>
          <div className='flex items-start'>
            <Server className='h-4 w-4 mr-2 text-zion-purple mt-1' />
            <span>Hardware & network support</span>
          </div>
          <div className='flex items-start'>
            <Check className='h-4 w-4 mr-2 text-zion-purple mt-1' />
            <span>First hour included</span>
          </div>
        </div>
      </CardContent>
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
      </CardFooter>
    </Card>
  )
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import Link from 'next/link',;
import { Badge } from "@/components/ui/badge",;

import {;
  Card,;
  CardContent,;
  CardFooter,;
  CardHeader,;
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
:src_backup/components/services/CountryServiceCard.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Globe, Server, Clock, MapPin, Check } from 'lucide-react';
import { CountryPricing } from "@/data/onsiteServicePricing",;
interface CountryServiceCardProps {;
  country: CountryPricing,;
  onSelect: (country:,  CountryPricing) => void,;
  onQuote?: (country:,  CountryPricing) => void,;
  isPopular?: boolean;
}
;
export function CountryServiceCard({ country, onSelect, onQuote, isPopular }:,  CountryServiceCardProps) {;
  // Get region flag based on country name (for demo,  purposes);
  const getRegionEmoji = (countryName: string |,  undefined): string => {;,
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
    },;,
    return emojiMap[countryName] || "🌐";
  },;
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string |,  undefined): string => {;,
    if (!countryName) return "8-24 hours",;,
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],;,
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
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;`,
      isPopular;
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple";
        : "bg-zion-blue-dark border-zion-blue-light";
    }`}>;`
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

:src_backup/components/services/CountryServiceCard.tsx
interface CountryServiceCardProps {;
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  onQuote?: (country: CountryPricing) => void;
  isPopular?: boolean;import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { Globe, Server, Clock, MapPin, Check } from 'lucide-react';
import { CountryPricing } from "@/data/onsiteServicePricing";
interface CountryServiceCardProps {;
  country: CountryPricing,;
  onSelect: (country: CountryPricing,) => void,;
  onQuote?: (country: CountryPricing,) => void,;
  isPopular?: boolean;
}

export function CountryServiceCard(): any ({;
  country,;
  onSelect,;
  onQuote,;
  isPopular,;
}: CountryServiceCardProps) {;
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (countryName: string | undefined): string => {;
    if (!countryName) return '🌐';

    const emojiMap: Record<string, string> = {;
      'United States': '🇺🇸',;
      'United Kingdom': '🇬🇧',;
      Canada: '🇨🇦',;
      Australia: '🇦🇺',;
      Germany: '🇩🇪',;
      France: '🇫🇷',;
      Japan: '🇯🇵',;
      China: '🇨🇳',;
      Brazil: '🇧🇷',;
      India: '🇮🇳',;
      Russia: '🇷🇺',;
      Singapore: '🇸🇬',;
      'South Korea': '🇰🇷',;
      'South Africa': '🇿🇦',;
      // Default if no flag is found;
      default: '🌐',
};

    return emojiMap[countryName] || '🌐'
};

  // Get response time estimate based on country;
  const getResponseTime = (countryName: string | undefined): string => {;
    if (!countryName) return '8-24 hours';

    const tier1 = [;
      'United States',;
      'United Kingdom',;
      'Germany',;
      'Japan',;
      'Singapore',;
      'Australia',;
      'Canada',;
      'France',;
    ];
    const tier2 = [;
      'China',;
      'Brazil',;
      'India',;
      'South Korea',;
      'South Africa',;
      'Russia',;
    ];

    if (tier1 && tier1.includes(countryName)) {;
      return '4 hours';
    } else if (tier2 && tier2.includes(countryName)) {;
      return '6 hours';
    } else {;
      return '8-24 hours';
    }
  };
    >;
      <CardHeader className='pb-2'>;
        <div className='flex items-center justify-between'>;
          <div className='flex items-center space-x-2'>;
            <span className='text-2xl' aria-hidden='true'>;
              {getRegionEmoji(country && country.country)}
            </span>;
:src_backup/components/services/CountryServiceCard.tsx
            <h3 className='text-lg font-semibold text-white truncate'>;
              {country && country.country || 'Unknown Country'}
            </h3>;
          </div>;
          {isPopular && (;
            <Badge className='bg-zion-purple text-white border-none'>;
              Popular;
            </Badge>;
          )}
        </div>;
      </CardHeader>;
      <CardContent className='pb-4'>;
        <p className='text-3xl font-bold text-zion-cyan mb-4'>;
          ${country && country.pricePerIncident.toFixed(2)}
        </p>;

        <div className='space-y-2 text-zion-slate-light'>;
          <div className='flex items-start'>;
            <Clock className='h-4 w-4 mr-2 text-zion-purple mt-1' />;
            <span>;
              Typical response time: {getResponseTime(country && country.country)}
            </span>;
          </div>;
          <div className='flex items-start'>;
            <MapPin className='h-4 w-4 mr-2 text-zion-purple mt-1' />;
            <span>Service available in major cities</span>;
          </div>;
          <div className='flex items-start'>;
            <Server className='h-4 w-4 mr-2 text-zion-purple mt-1' />;
            <span>Hardware & network support</span>;
          </div>;
          <div className='flex items-start'>;
            <Check className='h-4 w-4 mr-2 text-zion-purple mt-1' />;            <span>First hour included</span>;
            <span>First hour included</span>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          </div>;
        </div>;
      </CardContent>;
      <CardFooter className="flex flex-col space-y-2">;
        <Button;
:src_backup/components/services/CountryServiceCard.tsx
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
:src_backup/components/services/CountryServiceCard.tsx
;
        <Button;
          variant='outline';
          className='w - full border - zion - purple text - zion - purple hover:bg - zion - purple / 10';',
          on_click={() => on_quote?.(country)}        >;
          Get Quote;
        </Button>;
        <Button;
          as_child;
          variant='ghost';
          className='w - full text - zion - cyan hover:text - zion - purple';
        >;
          <Link href='/contact' />Contact Sales</Link>;
        </Button>;
      </CardFooter>;
    </Card>);
}
      <CardFooter className="flex flex-col space-y-2">"
        <Button
          onClick={() => onSelect(country)}
          className={`w-full ${`
            isPopular
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple""
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light""
          }`}`
        >
          Select Service
        </Button>
        <Button
          variant="outline""
          className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"",
          onClick={() => onQuote?.(country)}
        >
          Get Quote
        </Button>
        <Button
          asChild
          variant="ghost""
          className="w-full text-zion-cyan hover: text-zion-purple""
        >
          <Link href="/contact" />Contact Sales</Link>"
        </Button>
      </CardFooter>
    </Card>
:src_backup/components/services/CountryServiceCard.tsx
<<<<<<< HEAD:src/components/services/CountryServiceCard.tsx
<<<<<<< HEAD
  )
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/services/CountryServiceCard.tsx
