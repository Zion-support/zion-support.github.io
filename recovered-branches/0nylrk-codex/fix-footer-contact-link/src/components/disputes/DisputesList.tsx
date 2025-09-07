<<<<<<< HEAD
import React, { useState } from "react";
import {Dispute, DisputeStatus} from "@/types/disputes";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
import {ShieldAlert} from "lucide-react";
import {Link} from "react-router-dom";

import { Dispute, DisputeStatus } from "@/types/disputes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
type DisputesListProps = $2;
  isLoading: boolean},

export function DisputesList({ disputes, isLoading }: DisputesListProps) {
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),

  const filteredDisputes = statusFilter === "all" 
    ? disputes 
=======
>>>>>>> origin/chore/fix-lint-and-merge
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

        return "outline",
      default:"
        return "default"
    }

  },

  if (isLoading) {}
    return ("
      <div className="space-y-4">"
        <div className="flex gap-2 mb-4">"
          {["All", "Open", "Under Review", "Resolved", "Closed"].map((status) => ("
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

import React, { useState } from "react",;
import { Dispute, DisputeStatus } from "@/types/disputes",;
import { Button } from "@/components/ui/button",;

import { Badge } from "@/components/ui/badge",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;"
  TableRow} from "@/components/ui/table",;"
import { Skeleton } from "@/components/ui/skeleton",;"
import { formatDistanceToNow } from "date-fns",;"
import { ShieldAlert } from "lucide-react",;"
import { Link } from "react-router-dom",;

type DisputesListProps = {;
  disputes: Dispute[],;
  isLoading: boolean;
};

export function DisputesList(): any ({ disputes, isLoading }: DisputesListProps) {;"
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");
"
  const filteredDisputes = statusFilter === "all" ;
    ? disputes ;
    : disputes && disputes.filter(dispute => dispute && dispute.status === statusFilter);

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

      case "under_review":;
        return "secondary",;
      case "resolved":;
        return "outline", // Changed from "success" to "outline";
      case "closed":;
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

        return "outline";
      default:;"
        return "default";
    }

              ))}
            </TableBody>;

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

          size="sm";
        >;
          Closed;
        </Button>;
      </div>;

<div className="flex flex-col text-sm">;
                    <span>;
                      Client:{dispute.client_profile?.display_name || "Unknown Client"}
                    </span>;
                    <span>;
                      Talent:{dispute.talent_profile?.display_name || "Unknown Talent"}
                    </span>;
                  </div>;
                </TableCell>;
                <TableCell>;

</TableBody>
        </Table>
      </div>
    </div>
  )
}
          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}

;
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix:true })}
                </TableCell>;
                <TableCell>;