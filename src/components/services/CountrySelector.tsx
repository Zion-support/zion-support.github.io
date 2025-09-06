import { useState, useEffect } from "react",
import { Globe } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { CountryPricing, onsiteServicePricing } from "@/data/onsiteServicePricing",
    <div className="mb-6">
              .map(item => (
                <SelectItem
                  key={item.country}
                  value={item.country}
                  className='text-white'
                >
                  {item.country} - ${item.pricePerIncident.toFixed(2)}
                </SelectItem>
              ))}          </div>              .map((item) => (
              .sort((a, b,) => a.country.localeCompare(b.country))
              .map((item,) => (

;

          </div>;
;
