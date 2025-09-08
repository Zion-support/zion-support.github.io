


} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {}
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,;
DropdownMenuTrigger,;
  DropdownMenuTrigger,



import {;
  Edit,;
  MoreHorizontal,;
  ExternalLink,;
  Power,;
  PowerOff,;
  Users,;
  RefreshCcw,;
} from "@/components/icons";
import { format } from "date-fns";
export function TenantsList() {;
  const [tenants, setTenants] = useState<WhitelabelTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {;

  const loadTenants = async () => {;
    try {;

    } catch (error: any) {;
      console && console.error("Error loading tenants:", error);
      toast({;
        variant: "destructive",;
        title: "Failed to load tenants",;
        description: error && error.message,;


  const toggleTenantStatus = async (tenant: WhitelabelTenant) => {
    try {
      const { error } = await supabase
        .from("whitelabel_tenants")
        .update({ is_active: !tenant.is_active })

        .eq("id", tenant.id);










      const { error } = await supabase;
}
"variant": "destructive",;"
        "title": "Failed to verify DNS","
        "description": error.message
      });







                        </div>;

                          </Button>;
                        </DropdownMenuTrigger>;
                        <DropdownMenuContent align="end">;
                          <DropdownMenuItem>;




                    <TableCell>{format(new Date(tenant.created_at), 'MMM d, yyyy')}
                    <TableCell className="text-right">"


                      <DropdownMenu>

                        <DropdownMenuTrigger asChild>


