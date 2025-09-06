
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

  isPopular?: boolean
}

export function CountryServiceCard({ country, onSelect, onQuote, isPopular }: CountryServiceCardProps) {

  // Get region flag based on country name (for demo purposes)
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

=======

        
        <div className="space-y-2 text-zion-slate-light">
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 text-zion-purple mt-1" />
            <span>Typical response time: {getResponseTime(country.country)}</span>


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
