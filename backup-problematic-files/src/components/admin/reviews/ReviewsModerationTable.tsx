import { useState } from "react"
import { useMutation } from "@tanstack/
import { toast } from "@/hooks/
import { supabase } from "@/integrations/supabase/
import { Review, ReviewStatus } from "@/types/
  TableRow} from "@/components/ui/
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/
  DialogTitle} from "@/components/ui/
  DropdownMenuTrigger} from "@/components/ui/
import { Badge } from "@/components/ui/
import { Button } from "@/components/ui/
              
  return (<div className="space-y-4"> <div className="h-12 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> <div className="h-16 w-full bg-muted rounded animate-pulse" /> 
  return (<div className="py-10 text-center"> <h3 className="text-lg font-medium mb-2">No reviews to moderate
return (<> <Table> <TableHeader> <TableRow> <TableHead>Reviewer</TableHead> <TableHead>Rating</TableHead> <TableHead>Date</TableHead> <TableHead>Status</TableHead> <TableHead>Reports
</TableCell> <TableCell>
</Badge> 
 <Check className=" h-4 w-4 text-green-500"/> </Button> <Button > <X className=" h-4 w-4 text-red-500"/> </Button> 
</DropdownMenuContent> </DropdownMenu> </div> </TableCell> 
</TableBody> </Table> </DialogDescription> 
</div> </div> 
</p> 
</div> 
</h4> <p className="text-sm text-red-700"> This review has been reported by users and may need investigation. </p> 