
import { useState, useEffect } from "react";
import { Globe } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing";
interface CountrySelectorProps {
  onCountryChange: (country: CountryPricing | null) => void;
  selectedCountry: CountryPricing | null,
}

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  const [topCountries, setTopCountries] = useState<CountryPricing[]>([]),
  
  // Set top/popular countries
  useEffect(() => {

