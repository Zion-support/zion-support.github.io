<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";
import {CountryPricing} from "@/data/onsiteServicePricing";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";
import {CountryPricing} from "@/data/onsiteServicePricing";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";
import { CountryPricing } from "@/data/onsiteServicePricing";
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",
import { CountryPricing } from "@/data/onsiteServicePricing",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface CountryServiceCardProps {
=======
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card","
import { Button } from "@/components/ui/button","
import { Badge } from "@/components/ui/badge",";
import { Globe, Server, Clock, MapPin, Check } from "lucide-react";"
import { CountryPricing } from "@/data/onsiteServicePricing";"
import { Globe, Server, Clock, MapPin, Check } from "lucide-react","
import { CountryPricing } from "@/data/onsiteServicePricing",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface CountryServiceCardProps {};
  country: CountryPricing;
  onSelect: (country: CountryPricing) => void;
  isPopular?: boolean;
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {}
  // Get region flag based on country name (for demo purposes)

<<<<<<< HEAD
  const getRegionEmoji = (countryName: string): string => {
<<<<<<< HEAD
    const emojiMap: Record<string, string> = {
    const emojiMap: Record<string, string> = {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
interface CountryServiceCardProps {

  country: CountryPricing
  onSelect: (country: CountryPricing) => void

  isPopular?: boolean
}
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string): string => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";
<<<<<<< HEAD
=======
  const getRegionEmoji = (countryName: string): string => {}
";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";"
import {Button} from "@/components/ui/button";"
import {Badge} from "@/components/ui/badge";"
import {Globe, Server, Clock, MapPin, Check} from "lucide-react";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD



import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';'
import { Button } from '@/components / ui / button';'
import { Badge } from '@/components / ui / badge';'
import { Globe, Server, Clock, MapPin, Check } from './lucide-react';'
import { CountryPricing } from '@/data / onsiteServicePricing';
interface CountryServiceCardProps {}
=======
import { Card, CardContent, CardFooter, CardHeader } from '@/components / ui / card';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Globe, Server, Clock, MapPin, Check } from './lucide-react';
import { CountryPricing } from '@/data / onsiteServicePricing';
interface CountryServiceCardProps {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  country: CountryPricing,
  on_select: (country: CountryPricing) => void,
  is_popular?: boolean;
}
<<<<<<< HEAD
export /**;
 * CountryServiceCard - Function description;
 */
function CountryServiceCard() {}
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (country_name: string): string => {}
    const emoji_map: Record < string, string> = {}
    const emojiMap: Record<string, string> = {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export /**
 * CountryServiceCard - Function description
 */
function CountryServiceCard() {
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (country_name: string): string => {
    const emoji_map: Record < string, string> = {

<<<<<<< HEAD
    const emojiMap: Record<string, string> = {;


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const emojiMap: Record<string, string> = {;

    const emojiMap: Record<string, string> = {
    const emojiMap: Record<string, string> = {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      "United States": "🇺🇸";
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";
<<<<<<< HEAD
      "Germany": "🇩🇪"
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const emojiMap: Record<string, string> = {}
    const emojiMap: Record<string, string> = {;


"
      "United States": "🇺🇸";"
      "United Kingdom": "🇬🇧";"
      "Canada": "🇨🇦";"
      "Australia": "🇦🇺";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
      "Germany": "🇩🇪", ;
<<<<<<< HEAD

=======
      "Germany": "🇩🇪",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
      "Germany": "🇩🇪", ;
=======
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";
      "Germany": "🇩🇪",      "Germany": "🇩🇪", ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";
      "Germany": "🇩🇪",      "Germany": "🇩🇪", ;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      "United States": "🇺🇸";
      "United Kingdom": "🇬🇧";
      "Canada": "🇨🇦";
      "Australia": "🇦🇺";

      "Germany": "🇩🇪", ;

      "Germany": "🇩🇪", ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      "Germany": "🇩🇪", ;
      "Germany": "🇩🇪",
      "Germany": "🇩🇪"
      "Germany": "🇩🇪",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Default if no flag is found
      "default": "🌐"
    }
    return emojiMap[countryName] |emojiMap["default"]
  }
  // Get response time estimate based on country
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const emojiMap: Record<string string> = {
      "United States": "🇺🇸",
      "United Kingdom": "🇬🇧",
      "Canada": "🇨🇦",
<<<<<<< HEAD
=======
"
      "Germany": "🇩🇪", ;"
      "Germany": "🇩🇪","
      "Germany": "🇩🇪"

"
      "Germany": "🇩🇪",
"
      "France": "🇫🇷";"
      "Japan": "🇯🇵";"
      "China": "🇨🇳";"
      "Brazil": "🇧🇷";"
      "India": "🇮🇳";"
      "Russia": "🇷🇺";"
      "Singapore": "🇸🇬";"
      "South Korea": "🇰🇷";"
      "South Africa": "🇿🇦";



    const emojiMap: Record<string string> = {"
      "United States": "🇺🇸","
      "United Kingdom": "🇬🇧","
      "Canada": "🇨🇦","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "Australia": "🇦🇺",

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      "Australia": "🇦🇺",

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      "Germany": "🇩🇪", 
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
      "default": "🌐"
    },

    return emojiMap[countryName] || emojiMap["default"]
  },

=======
=======

"
      "Germany": "🇩🇪", "
      "France": "🇫🇷","
      "Japan": "🇯🇵","
      "China": "🇨🇳","
      "Brazil": "🇧🇷","
      "India": "🇮🇳","
      "Russia": "🇷🇺","
      "Singapore": "🇸🇬","
      "South Korea": "🇰🇷","
      "South Africa": "🇿🇦",
      // Default if no flag is found"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      "default": ""
    }"
    return emojiMap[countryName] |emojiMap["default"]
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Get response time estimate based on country
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const getResponseTime = (countryName: string): string => {
<<<<<<< HEAD
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (tier1.includes(countryName)) {
=======
  const getResponseTime = (countryName: string): string => {    if (tier1.includes(countryName)) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const getResponseTime = (countryName: string): string => {    if (tier1.includes(countryName)) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string): string => {}
    if (tier1.includes(countryName)) {"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  const getResponseTime = (countryName: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"],
    
    
    if (tier1.includes(countryName)) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return "4 hours"
    } else if (tier2.includes(countryName)) {"
      return "6 hours"
    } else {"
      return "8-24 hours"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }

  },
  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
    }

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  },
  


<<<<<<< HEAD



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${}
      isPopular"
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
            isPopular
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    }  return (
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
const emojiMap: Record<string, string> = {;



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }`}
        >
          Select Service;
        </Button>
      </CardFooter>
    </Card>
  )
<<<<<<< HEAD

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",;
=======
}
            isPopular "
              ? "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" "
              : "bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light""
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;"
import { Button } from "@/components/ui/button",;"
import { Badge } from "@/components/ui/badge",;"
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      // Default if no flag is found;
      "default": "🌐";
    };
=======
export function CountryServiceCard() { return null; }
    };"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      // Default if no flag is found;
      "default": "🌐";
    };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return emojiMap[countryName] || emojiMap["default"];
  };

  // Get response time estimate based on country;
<<<<<<< HEAD
  const getResponseTime = (countryName: string): string => {;"
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];"
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];

    if (tier1 && tier1.includes(countryName)) {;"
      return "4 hours";
    } else if (tier2 && tier2.includes(countryName)) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      // Default if no flag is found;
      "default": "🌐";
    },;
    return emojiMap[countryName] || emojiMap["default"];
  },;
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],;
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
    if (tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2.includes(countryName)) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];

    if (tier1 && tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2 && tier2.includes(countryName)) {;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
// Default if no flag is found;
      "default": "🌐";
    },;
    return emojiMap[countryName] || emojiMap["default"];
  },;
  // Get response time estimate based on country;
  const getResponseTime = (countryName: string): string => {;
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"],;
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
    if (tier1.includes(countryName)) {;
      return "4 hours";
    } else if (tier2.includes(countryName)) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return "6 hours";
    } else {;"
      return "8-24 hours";
    }
  };

<<<<<<< HEAD
  return (
    <CardclassName={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular 
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        : "bg-zion-blue-dark border-zion-blue-light"
`
    }`}>;"
      <CardHeader className="pb-2">;"
        <div className="flex items-center justify-between">;"
          <div className="flex items-center space-x-2">;



          </div>;
          {isPopular && (;"
            <Badge className="bg-zion-purple text-white border-none">Popular</Badge>;
          )}

        </div>;
      </CardHeader>;"
      <CardContent className="pb-4">;"
        <p className="text-3xl font-bold text-zion-cyan mb-4">;

          </div>;"
          <div className="flex items-start">;"
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Service available in major cities</span>;
          </div>;"
          <div className="flex items-start">;"
            <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Hardware & network support</span>;
          </div>;"
          <div className="flex items-start">;"
            <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>First hour included</span>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
      // Default if no flag is found;
      "default": "🌐";
    }
;
    return emoji_map[country_name] || emoji_map["default"];
  }
;
  // Get response time estimate based on country;
  const getResponseTime = (country_name: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
;
    if () {) {
  $2
}
      return "4 hours";
    } else if () {) {
  $2
}
      return "6 hours";
    } else {
      return "8 - 24 hours";
    }
  }
;
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;


`
          }`}
        >;
          Select Service;
        </Button>;
      </CardFooter>;




}


    </Card>);
}
    </Card>);
}
    </Card>;
  ),;}
 interface CountryServiceCardProps {}
  country: CountryPricing;
onSelect: (country: CountryPricing) => void;
isPopular?: boolean;
}export function CountryServiceCard ({};
  country, onSelect, isPopular;
}: CountryServiceCardProps) {}
  //Get region flag based on country name (for demo purposes) const getRegionEmoji = (countryName: string) : string => {"
  return emojiMap[countryName] || emojiMap["default" ];
};
//Get response time estimate based on country return (<Card className= {}`
  `h-full transition-all duration-300 hover:shadow-lg $ {"
  isPopular </div> <div className="flex items-start" > <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Service available in major cities</span> </div> <div className="flex items-start" > <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Hardware & network support</span> </div> <div className="flex items-start" > <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>First hour included</span> </div> </div> </CardContent> <CardFooter> <Button onClick= {}
  () => onSelect (country) 
}className= {}`
  `w-full $ {}
  isPopular > Select Service </Button> </CardFooter> </Card>) 
}
    </Card>;
  );
}
;


;
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        : "bg-zion-blue-dark border-zion-blue-light"        : "bg-zion-blue-dark border-zion-blue-light"
=======
        : "bg-zion-blue-dark border-zion-blue-light"
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
  return (;
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;
      isPopular;
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple";
        : "bg-zion-blue-dark border-zion-blue-light";
        : "bg-zion-blue-dark border-zion-blue-light"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country && country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country && country.country}</h3>;
<span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>;
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country.country)}</span>;
            <h3 className="text-lg font-semibold text-white truncate">{country.country}</h3>;
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
${country.pricePerIncident.toFixed(2)}
        </p>;
        ;
        <div className="space-y-2 text-zion-slate-light">;
          <div className="flex items-start">;
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;
            <span>Typical response time:{getResponseTime(country.country)}</span>;
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-3xl font-bold text-zion-cyan mb-4">
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
// Default if no flag is found;
      "default": "🌐";
    }
;
    return emoji_map[country_name] || emoji_map["default"];
  }
;
  // Get response time estimate based on country;
  const getResponseTime = (country_name: string): string => {
    const tier1 = ["United States", "United Kingdom", "Germany", "Japan", "Singapore", "Australia", "Canada", "France"];
    const tier2 = ["China", "Brazil", "India", "South Korea", "South Africa", "Russia"];
;
    if () {) {
  $2
}
      return "4 hours";
    } else if () {) {
  $2
}
      return "6 hours";
    } else {
      return "8 - 24 hours";
    }
  }
;
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        : "bg-zion-blue-dark border-zion-blue-light"        : "bg-zion-blue-dark border-zion-blue-light"
    }`}>;
      <CardHeader className="pb-2">;
        <div className="flex items-center justify-between">;
          <div className="flex items-center space-x-2">;          </div>;
        </div>;
      </CardContent>;
      <CardFooter>;
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======


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
export function CountryServiceCard({ country, onSelect, isPopular }: CountryServiceCardProps) {
  // Get region flag based on country name (for demo purposes)

  const getRegionEmoji = (countryName: string): string => {
"
import {CountryPricing} from "@/data/onsiteServicePricing";"
interface CountryServiceCardProps {;
  country: CountryPricing,;
  onSelect: (country: CountryPricing) => void,;

export function CountryServiceCard(): any ({ country, onSelect, isPopular }: CountryServiceCardProps) {;
  // Get region flag based on country name (for demo purposes);
  const getRegionEmoji = (countryName: string): string => {;
    const emojiMap: Record<string, string> = {;
</string>
    const emoji_map: Record < string, string> = {




    const emojiMap: Record<string, string> = {
    const emojiMap: Record<string string> = {
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPopular;"
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple""`;
          }`}
        >

    const emojiMap: Record<string string> = {;
</string>`;
    <CardclassName={`h-full transition-all duration-300 hover:shadow-lg ${
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple"""
        : "bg-zion-blue-dark border-zion-blue-light"""
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Badge } from "@/components/ui/badge",;""
import { Globe, Server, Clock, MapPin, Check } from "lucide-react",;""
import { CountryPricing } from "@/data/onsiteServicePricing",;"
;
  country:CountryPricing,;
  onSelect:(country:CountryPricing) => void,;

    const emojiMap:Record<string string> = {;
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${;
      isPopular ;"
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple" ;""
        :"bg-zion-blue-dark border-zion-blue-light";"
  return (;`;
        ? "bg-gradient-to-br from-zion-blue-dark to-zion-purple/10 border-zion-purple";""
        : "bg-zion-blue-dark border-zion-blue-light";""
        : "bg-zion-blue-dark border-zion-blue-light""`;
    }`}>;
      <CardHeader className="pb-2">;"
        <div className="flex items-center justify-between">;"
</div>"
          <div className="flex items-center space-x-2">;"
</div>)"
            <span className="text-2xl" aria-hidden="true">{getRegionEmoji(country && country.country)}</span>;""
            <h3 className="text-lg font-semibold text-white truncate">{country && country.country}</h3>;"
          </div>;"
            <Badge className="bg-zion-purple text-white border-none">Popular;"
        </div>;
      ;"
      <CardContent className="pb-4">;"
        <p className="text-3xl font-bold text-zion-cyan mb-4">;"
</p>
        </p>;"
        <div className="space-y-2 text-zion-slate-light">;"
          <div className="flex items-start">;"
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />;"

            <span>Typical response time: {getResponseTime(country && country.country)}</span>;
            <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" />;"

            <span>Service available in major cities</span>;
            <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" />;"

            <span>Hardware & network support</span>;
            <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" />;"

            <span>First hour included</span>;
      <CardFooter>;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
          }`}
        >;
          Select Service;
        </Button>;
      </CardFooter>;

}
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
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    );
//Get response time estimate based on country return (<Card className= {`;
  `h-full transition-all duration-300 hover:shadow-lg $ {"
  isPopular </div> <div className="flex items-start" > <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Service available in major cities</span> </div> <div className="flex items-start" > <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Hardware & network support</span> </div> <div className="flex items-start" > <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>First hour included</span> </div> </div>  <CardFooter> <Button onClick= {"
)
  isPopular > Select Service   ) 
    ;"`;
pr-12325
  isPopular </div> <div className="flex items-start" > <MapPin className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Service available in major cities</span> </div> <div className="flex items-start" > <Server className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>Hardware & network support</span> </div> <div className="flex items-start" > <Check className="h-4 w-4 mr-2 text-zion-purple mt-1" /> <span>First hour included</span> </div> </div> </CardContent> <CardFooter> <Button onClick= {"
</Card>)
  isPopular > Select Service </Button> </CardFooter> </Card>) 
    </Card>;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
