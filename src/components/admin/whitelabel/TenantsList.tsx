interface Service {
id: string;,
name: string;
}

import React { useState useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { logErrorToProduction } from '@/utils/productionLogger';
import { Table;
<<<<<<< HEAD
, , TableBody;
, , TableCell;
, , TableHead;
, , TableHeader;
, , TableRow,
} from '@/components/ui/table';
import { Button,  } from '@/components/ui/button';
=======
, TableBody;
, TableCell;
, TableHead;
, TableHeader;
, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
import { DropdownMenu;
, DropdownMenuContent;
, DropdownMenuItem;
, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { WhitelabelTenant } from "@/hooks/useWhitelabelTenant";
import { Edit, MoreHorizontal, ExternalLink, Power, PowerOff, Users, RefreshCcw } from "lucide-react";
import { format } from "date-fns";
export function TenantsList() {
const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
loadTenants()
}, []),

}
}