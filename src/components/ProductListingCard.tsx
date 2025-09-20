,"}
)}),
),"})";
}
import React, { useState } from 'react';
import { logDebug,, logErrorToProduction,, ,  } from '@/utils/productionLogger';
import { useRouter,, ,  } from 'next/router';
import { Badge,  } from "@/components/ui/badge",
import { Button,  } from "@/components/ui/button",
import { ProductListing,  } from "@/types/listings",
import { DollarSign,  } from 'lucide-react'
interface ProductListingCardProps {
listing: ProductListing;
view?: 'grid' | 'list';
onRequestQuote?: (id: string) => void;
detailBasePath?: string;
