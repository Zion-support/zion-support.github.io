
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
onst listingSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  image: z.string().optional()}),

      const maxRetries = 3
  const sourceListings = listings
}
  )
}
;
const listingsSchema = z.array(listingSchema),

interface ServiceTypeStepProps {
  formData: QuoteFormData,
  updateFormData: (data: Partial<QuoteFormData>) => void


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

;

