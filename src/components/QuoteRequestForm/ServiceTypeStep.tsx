<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react",
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes",
import { Input } from "@/components/ui/input",
import { Card } from "@/components/ui/card",
import { Search } from 'lucide-react'
import { ListingScoreCard } from "@/components/ListingScoreCard",
import { captureException } from "@/utils/sentry",
import Skeleton from "@/components/ui/skeleton",
import { useDebounce } from "@/hooks/useDebounce",
import { useIsMounted } from "@/hooks/useIsMounted",
import { z } from "zod";
import {logErrorToProduction} from '@/utils/productionLogger';
const listingSchema = null;
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">What are you looking for?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card 
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "service" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("service")}
          >
            <h4 className="font-medium text-white">Services</h4>
            <p className="text-sm text-zion-slate-light">AI solutions, consulting, development</p>
          </Card>
          
          <Card 
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "talent" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("talent")}
          >
            <h4 className="font-medium text-white">Talent</h4>
            <p className="text-sm text-zion-slate-light">AI specialists, developers, consultants</p>
          </Card>
          
          <Card 
            className={`p-4 cursor-pointer border-2 transition-colors ${
              formData.serviceType === "equipment" 
                ? "bg-zion-purple/20 border-zion-purple" 
                : "bg-zion-blue-light/20 border-zion-blue-light hover:border-zion-purple/50"
            }`}
            onClick={() => handleTypeSelect("equipment")}
          >
            <h4 className="font-medium text-white">Equipment</h4>
            <p className="text-sm text-zion-slate-light">Servers, workstations, specialized hardware</p>
          </Card>
        </div>
      </div>
      
      {formData.serviceType && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Select a specific {formData.serviceType}</h3>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <Input
              placeholder={`Search ${formData.serviceType}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-zion-blue border border-zion-blue-light focus:border-zion-purple"
            />
          </div>


const listingSchema = z.object({
  id: z.string()
  title: z.string()
  category: z.string()
  image: z.string().optional()})
      const maxRetries = 3
  const sourceListings = listings
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
const listingSchema = z && z.object({;
  id: z && z.string(),;
  title: z && z.string(),;
  category: z && z.string(),;
  image: z && z.string().optional()}),;

      const maxRetries = 3;



  const sourceListings = listings;
}
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD
=======

  )
}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
const listing_schema = z.object ({
  id: z.string (),
  title: z.string (),
  category: z.string (),
  image: z.string ().optional ()}),
      const max_retries = 3;
  const source_listings = listings;
}
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
