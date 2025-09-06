<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD


        .order('created_at', { ascending: false })
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4


        .order('created_at', { ascending: false })

}
}
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState, useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow;
} from '@/components/ui/table',;
import { Button } from '@/components/ui/button',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu',;
import { Badge } from '@/components/ui/badge',;
import { toast } from '@/hooks/use-toast',;
import { WhitelabelTenant } from '@/hooks/useWhitelabelTenant',;
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from 'lucide-react';
import { format } from 'date-fns',;
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  useEffect(() => {;
    loadTenants();
  }, []),;
  const loadTenants = async () => {;
    try {;
      setIsLoading(true),;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .select('*');
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        .order('created_at', { ascending: false }),;

}
<<<<<<< HEAD
}
        .order ('created_at', { ascending: false }),
}
}
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


=======
        .order ('created_at', { ascending: false }),
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
