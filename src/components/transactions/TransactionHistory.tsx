import { useCurrency } from '@/hooks/useCurrency'
import {logErrorToProduction} from '@/utils/productionLogger'
import React, { useState, useEffect } from "react",
import { useQuery } from "@tanstack/react-query",
import { supabase } from "@/integrations/supabase/client",
import { useAuth } from "@/hooks/useAuth",
import { useToast } from "@/hooks/use-toast",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import Skeleton from "@/components/ui/skeleton",
import { ArrowLeft, ArrowRight, RefreshCcw, CheckCircle2, XCircle, Clock, AlertCircle, ShieldAlert } from 'lucide-react'
import { formatDistanceToNow } from "date-fns",
import { safeStorage } from "@/utils/safeStorage";
import { useCurrency  } from '@/hooks/useCurrency';
import {logErrorToProduction} from '@/utils/productionLogger';
interface Transaction {

  id: string
  user_id: string
  provider_id: string
  service_id: string
  amount: number
  currency: string
  status: 'pending' | 'in_escrow' | 'released' | 'disputed' | 'refunded' | 'cancelled'
  in_escrow: boolean
  created_at: string
  completed_at?: string
  refunded_at?: string
  cancelled_at?: string

  provider?: {
    display_name?: string
  }
  service?: {
    title?: string
  }
}
;
