=======
import React, { useState, useEffect } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import {logErrorToProduction} from '@/utils/productionLogger';
import { Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow 
 } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge  } from '@/components/ui/badge';
import { toast  } from '@/hooks/use-toast';
import { WhitelabelTenant  } from '@/hooks/useWhitelabelTenant';
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from 'lucide-react'
import { format  } from 'date-fns';
export function TenantsList() {
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadTenants()
  }, []),
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea


        .order('created_at', { ascending: false })

}
<<<<<<< HEAD
}
<<<<<<< HEAD

=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
