<<<<<<< HEAD

import {Dispute, DisputeStatus} from "@/types/disputes";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
import {ShieldAlert} from "lucide-react";
import {Link} from "react-router-dom";
=======
import React, { useState } from "react";
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

=======
import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD

import { Skeleton } from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from "lucide-react",
import { Link } from "react-router-dom",
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),

  const filteredDisputes = statusFilter === "all" 
    ? disputes 
<<<<<<< HEAD


=======
type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean

}
export function DisputesList() { return null; }
},

type DisputesListProps = {
  disputes: Dispute[]
  isLoading: boolean


  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
      case "open": return "default";


      case "under_review":

        return "secondary"
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":

>>>>>>> origin/cursor/delete-old-data-records-6bba
        return "outline",
      default:"
        return "default"
    }

  },

<<<<<<< HEAD


=======

  if (isLoading) {}
    return ("
      <div className="space-y-4">"
        <div className="flex gap-2 mb-4">"
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => ("

>>>>>>> origin/cursor/delete-old-data-records-6bba
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>"

        <div className="border rounded-md">

          <Table>

            <TableHeader>

              <TableRow>

                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
<<<<<<< HEAD

                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
                </TableRow>
=======


import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;

>>>>>>> origin/cursor/delete-old-data-records-6bba

import { Badge } from "@/components/ui/badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
<<<<<<< HEAD

  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Skeleton } from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;
import { ShieldAlert } from "lucide-react",;
import { Link } from "react-router-dom",;
=======

  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Skeleton } from "@/components/ui/skeleton",;"
import { formatDistanceToNow } from "date-fns",;"
import { ShieldAlert } from "lucide-react",;"
import { Link } from "react-router-dom",;

>>>>>>> origin/cursor/delete-old-data-records-6bba

type DisputesListProps = {;
  disputes: Dispute[],;
  isLoading: boolean;
};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  const getStatusBadgeVariant = (status: DisputeStatus) => {;
    switch (status) {;"

      case "open": return "default";

import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;
import { Badge } from "@/components/ui/badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Skeleton } from "@/components/ui/skeleton",;
import { formatDistanceToNow } from "date-fns",;
import { ShieldAlert } from "lucide-react",;
import { Link } from "react-router-dom",;


>>>>>>> origin/cursor/delete-old-data-records-6bba
      case "under_review":;
        return "secondary",;
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState } from './react';
import { Dispute, DisputeStatus } from '@/types / disputes';
import { Button } from '@/components / ui / button';
import { Badge } from '@/components / ui / badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Skeleton } from '@/components / ui / skeleton';
import { formatDistanceToNow } from './date - fns';
import { ShieldAlert } from './lucide-react';

import { Link } from './react-router-dom';
type DisputesListProps = {}
  disputes: Dispute[],
  is_loading: boolean;
}
;
export /**;
 * DisputesList - Function description;
 */

    ? disputes;
    : disputes.filter (dispute => dispute.status === status_filter);
;
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {
    switch (status) {
      case "open": return "default";
      case "under_review":;
        return "secondary",
      case "resolved":;
        return "outline", // Changed from './success'; to "outline";

<<<<<<< HEAD
      case "closed":;


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

        return "outline";
      default:;"
        return "default";
    }
<<<<<<< HEAD



=======


              ))}
            </TableBody>;



>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="space - y-4">;
        <div className="flex gap - 2 mb - 4">;
          {["All", "Open", "Under Review", "Resolved", "Closed"].map ((status) => (
            <Skeleton key={status} className="h - 10 w - 24" />))}
        </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div className="border rounded - md">;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead > Case ID</TableHead>;
                <TableHead > Project</TableHead>;
                <TableHead > Parties</TableHead>;
                <TableHead > Created</TableHead>;

                <TableHead className="text - right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {[...Array (5)].map ((_, i) => (

                  <TableCell className="text - right"><Skeleton className="h - 9 w - 20 ml - auto" /></TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>;
        </div>;
      </div>);
  }

        <p className="text - muted - foreground mt - 2">;
          No active disputes match the selected filter;
        </p>;
      </div>);
  }

          size="sm";
        >;
          All;
        </Button>;

          size="sm";
        >;
          Open;
        </Button>;

          size="sm";
        >;
          Under Review;
        </Button>;

          size="sm";
        >;
          Resolved;
        </Button>;

<<<<<<< HEAD
        <Button;
          variant={status_filter === "closed" ? "default" : "outline"}
          on_click={() => setStatusFilter ("closed")}
        <Button;
          variant={statusFilter === "closed" ? "default" :"outline"}
          onClick={() => setStatusFilter("closed")}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          size="sm";
        >;
          Closed;
        </Button>;
      </div>;
<<<<<<< HEAD

;
      <div className="border rounded-md overflow-hidden">;
        <Table>;
          <TableHeader>;
            <TableRow>;
              <TableHead>Case ID</TableHead>;
              <TableHead>Project</TableHead>;
              <TableHead>Parties</TableHead>;
              <TableHead>Created</TableHead>;
              <TableHead>Status</TableHead>;
              <TableHead className="text-right">Actions</TableHead>;
            </TableRow>;
          </TableHeader>;
          <TableBody>;
            {filteredDisputes.map((dispute) => (;
              <TableRow key={dispute.id}>;
                <TableCell className="font-mono text-xs">;
                  {dispute.id.split('-')[0]}
                </TableCell>;
                <TableCell>;
                  {dispute.project?.title || "Unknown Project"}
                </TableCell>;
                <TableCell>;
                  <div className="flex flex-col text-sm">;

=======


<div className="flex flex-col text-sm">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <span>;
                      Client:{dispute.client_profile?.display_name || "Unknown Client"}
                    </span>;
                    <span>;
                      Talent:{dispute.talent_profile?.display_name || "Unknown Talent"}
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;

<<<<<<< HEAD


=======
</TableBody>
        </Table>
      </div>
    </div>
  )
}
</TableBody>
        </Table>
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}

<<<<<<< HEAD



=======
;
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
                </TableCell>;
                <TableCell>;
                </TableCell>;
                <TableCell>;
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;
                    {dispute.status.replace('_ ')}
                  </Badge>;
                </TableCell>;
                <TableCell className="text-right">;
                  <Button asChild size="sm">;
                    <Link to={`/dashboard/disputes/${dispute.id}`}>View Details</Link>;
                  </Button>;
                </TableCell>;
              </TableRow>;
            ))}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  ),; import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
type DisputesListProps = {
  disputes: Dispute[];
isLoading: boolean 
};
export function DisputesList ({
  disputes, isLoading 
}: DisputesListProps) {
  const filteredDisputes = statusFilter === "all" const getStatusBadgeVariant = (status: DisputeStatus) => {
  switch (status) {
  
}
;

};
if (isLoading) {
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {
  ["All", "Open", "Under Review", "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {
  status 
}className="h-10 w-24" /> 
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  [...Array (5) ].map ( (, i) => (<TableRow key= {
  i 
}> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-4 w-40" /></TableCell> <TableCell><Skeleton className="h-4 w-32" /></TableCell> <TableCell><Skeleton className="h-4 w-24" /></TableCell> <TableCell><Skeleton className="h-6 w-20" /></TableCell> <TableCell className="text-right" ><Skeleton className="h-9 w-20 ml-auto" /></TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </div>) 
}> All </Button> <Button > Open </Button> <Button > Under Review </Button> <Button > Resolved </Button> <Button > Closed </Button> </div> <div className="border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID</TableHead> <TableHead>Project</TableHead> <TableHead>Parties</TableHead> <TableHead>Created</TableHead> <TableHead>Status</TableHead> <TableHead className="text-right" >Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  filteredDisputes.map ( (dispute) => (<TableRow key= {
  dispute.id 
}> </TableCell> <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div> </TableCell> <TableCell> {
  formatDistanceToNow (new Date (dispute.created at), {
  addSuffix: true 
}) 
}</TableCell> <TableCell> </Button> </TableCell> </TableRow>) ) 
}</TableBody> </Table> </div> </div>) 
}
;
;
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
                </TableCell>;
                <TableCell>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
