
            endDate: endDate?.toISOString()}
        }
      })

}
}

import { useState } from 'react',
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog",
import { Button } from "@/components/ui/button",
import { Input } from "@/components/ui/input",
import { Textarea } from "@/components/ui/textarea",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Label } from "@/components/ui/label",
import { Slider } from "@/components/ui/slider",
import { Calendar } from "@/components/ui/calendar",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { format } from "date-fns",
import { CalendarIcon } from 'lucide-react'
import { cn } from "@/lib/utils",
import { ProductListing } from "@/types/listings",
import { toast } from '@/hooks/use-toast',
import { supabase } from "@/integrations/supabase/client",
import {logErrorToProduction} from '@/utils/productionLogger',
interface ServiceQuoteModalProps {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  service: ProductListing | null
}



...form_data;            start_date: start_date?.toISOString (),
            end_date: end_date?.toISOString ()}
        }
      });
}
}



;

