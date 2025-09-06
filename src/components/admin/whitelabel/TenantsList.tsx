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

  );

};
const verifyDns = async (tenant: WhitelabelTenant) => {;
  try {';
  //In a real implementation,  this would verify DNS records //For now, we'll just mark it as verified const {;
  error ';
}= await supabase .from ('whitelabel tenants') if (error) throw error;
//Update local state setTenants (tenants.map (t => ;

};
return (Refresh </Button> </div> </div>) : (<div className="rounded-md border" > <Table> <TableHeader> <TableRow> <TableHead>Brand</TableHead> <TableHead>Subdomain</TableHead> <TableHead>Custom Domain</TableHead> <TableHead>Status</TableHead> <TableHead>Created At</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {;
  tenants.length === 0 ? (<TableRow> <TableCell colSpan= {;
  6 ";
}className="text-center py-8 text-muted-foreground" > No tenants found. Create a new white-label instance to get started. </TableCell> </TableRow> <a href= {;
  `https://$ {;
  tenant.custom domain ;
}` ";
}target="blank" rel="noopener noreferrer" className="hover:underline flex items-center" > </Badge> {";
  !tenant.dns verified && (<Button variant="ghost" size="sm" onClick={;
  () => verifyDns (tenant) ";
}className="ml-1 h-6 w-6 p-0" > <RefreshCcw className="h-3 w-3" /> <span className="sr-only" >Verify DNS</span> </Button>) ";
}</div>) : (<span className="text-muted-foreground text-sm" >None</span>) ";
}</TableCell> <TableCell> <DropdownMenu> <DropdownMenuTrigger asChild> <Button variant="ghost" size="sm" > <MoreHorizontal className="h-4 w-4" /> <span className="sr-only" >Actions</span> </Button> </DropdownMenuTrigger> <DropdownMenuContent align="end" > <DropdownMenuItem> <Edit className="mr-2 h-4 w-4" /> Edit Tenant </DropdownMenuItem> <DropdownMenuItem> <Users className="mr-2 h-4 w-4" /> Manage Admins </DropdownMenuItem> <DropdownMenuItem onClick={;
  () => toggleTenantStatus (tenant) ;
}> {";
  tenant.is active ? (<> <PowerOff className="mr-2 h-4 w-4" /> Disable Tenant </>) : (<> <Power className="mr-2 h-4 w-4" /> Enable Tenant </>) ;
}</DropdownMenuItem> </DropdownMenuContent> </DropdownMenu> </TableCell> </TableRow>) ) ) ;
}</TableBody> </Table> </div>) ;
}</div>) ;
}'"
}
}
