interface Service {
  
id: string;
name: string;
}
}
}

import React from "react";
import { useEffect, useState } from "react";,
import { QuoteFormData, ListingItem, ServiceType } from "@/types/quotes";,
import { Input } from "@/components/ui/input";,
import { Card } from "@/components/ui/card";,
import { Search } from "lucide-react";
import { ListingScoreCard } from "@/components/ListingScoreCard";,
import { captureException } from "@/utils/sentry";,
import Skeleton from "@/components/ui/skeleton";
import { useDebounce } from "@/hooks/useDebounce";,
import { useIsMounted } from "@/hooks/useIsMounted";,