import import React { useState useEffect } from 'react';
import import { supabase,,, ,,  } from '@/integrations/supabase/client';
import import { logErrorToProduction } from '@/utils/productionLogger';
import import { Table;
,, ,, TableBody;
,, ,, TableCell;
,, ,, TableHead;
,, ,, TableHeader;
,, ,, TableRow,
 } from '@/components/ui/table';
import import { Button,,  } from '@/components/ui/button';
import import { DropdownMenu;
,,, DropdownMenuContent;
,,, DropdownMenuItem;
,,, DropdownMenuTrigger,,  } from '@/components/ui/dropdown-menu';
import import { Badge,,, ,,  } from '@/components/ui/badge';
import import { toast,,, ,,  } from '@/hooks/use-toast';
import import { WhitelabelTenant,,, ,,  } from '@/hooks/useWhitelabelTenant';
import { Edit,,, MoreHorizontal,,, ExternalLink,,, Power,,, PowerOff,,, Users,,, RefreshCcw,,  } from 'lucide-react'
import import { format,,, ,,  } from 'date-fns';
export function TenantsList() {
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    loadTenants()
  }, []),

}
}