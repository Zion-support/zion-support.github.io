
<<<<<<< HEAD
import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
=======
import React, { useState } from &quot;react&quot;;
import { Dispute, DisputeStatus } from &quot;@/types/disputes&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
<<<<<<< HEAD
  TableRow} from "@/components/ui/table",
import Skeleton from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from 'lucide-react'
import Link from "next/link",
=======
  TableRow} from &quot;@/components/ui/table&quot;;
import Skeleton from &quot;@/components/ui/skeleton&quot;;
import { formatDistanceToNow } from &quot;date-fns&quot;;
import { ShieldAlert } from 'lucide-react'
import Link from &quot;next/link&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
type DisputesListProps = {
  disputes: Dispute[],
  isLoading: boolean
},

export function DisputesList({ disputes, isLoading }: DisputesListProps) {
<<<<<<< HEAD
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),
=======
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | &quot;all&quot;>(&quot;all&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const filteredDisputes = statusFilter === &quot;all&quot; 
    ? disputes 
    : disputes.filter(dispute => dispute.status === statusFilter),

  const getStatusBadgeVariant = (status: DisputeStatus) => {
    switch (status) {
<<<<<<< HEAD
      case "open": return "default",
      case "under_review":
        return "secondary",
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":
        return "outline",
      default:
        return "default"
=======
      case &quot;open&quot;:
        return &quot;default&quot;;
      case &quot;under_review&quot;:
        return &quot;secondary&quot;;
      case &quot;resolved&quot;:
        return &quot;outline&quot;; // Changed from &quot;success&quot; to &quot;outline&quot;
      case &quot;closed&quot;:
        return &quot;outline&quot;;
      default:
        return &quot;default&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  if (isLoading) {
    return (
      <div className=&quot;space-y-4&quot;>
        <div className=&quot;flex gap-2 mb-4&quot;>
          {[&quot;All&quot;, &quot;Open&quot;, &quot;Under Review&quot;, &quot;Resolved&quot;, &quot;Closed&quot;].map((status) => (
            <Skeleton key={status} className=&quot;h-10 w-24&quot; />
          ))}
        </div>
        <div className=&quot;border rounded-md&quot;>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className=&quot;text-right&quot;>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className=&quot;h-4 w-24&quot; /></TableCell>
                  <TableCell><Skeleton className=&quot;h-4 w-40&quot; /></TableCell>
                  <TableCell><Skeleton className=&quot;h-4 w-32&quot; /></TableCell>
                  <TableCell><Skeleton className=&quot;h-4 w-24&quot; /></TableCell>
                  <TableCell><Skeleton className=&quot;h-6 w-20&quot; /></TableCell>
                  <TableCell className=&quot;text-right&quot;><Skeleton className=&quot;h-9 w-20 ml-auto&quot; /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }

  if (disputes.length === 0) {
    return (
      <div className=&quot;text-center py-12 border rounded-md bg-muted/20&quot;>
        <ShieldAlert className=&quot;mx-auto h-12 w-12 text-muted-foreground mb-4&quot; />
        <h3 className=&quot;text-xl font-medium&quot;>No disputes found</h3>
        <p className=&quot;text-muted-foreground mt-2&quot;>
          No active disputes match the selected filter
        </p>
      </div>
    )
  }

  return (
    <div className=&quot;space-y-4&quot;>
      <div className=&quot;flex gap-2 mb-4 overflow-x-auto pb-2&quot;>
        <Button
          variant={statusFilter === &quot;all&quot; ? &quot;default&quot; : &quot;outline&quot;}
          onClick={() => setStatusFilter(&quot;all&quot;)}
          size=&quot;sm&quot;
        >
          All
        </Button>
        <Button
          variant={statusFilter === &quot;open&quot; ? &quot;default&quot; : &quot;outline&quot;}
          onClick={() => setStatusFilter(&quot;open&quot;)}
          size=&quot;sm&quot;
        >
          Open
        </Button>
        <Button
          variant={statusFilter === &quot;under_review&quot; ? &quot;default&quot; : &quot;outline&quot;}
          onClick={() => setStatusFilter(&quot;under_review&quot;)}
          size=&quot;sm&quot;
        >
          Under Review
        </Button>
        <Button
          variant={statusFilter === &quot;resolved&quot; ? &quot;default&quot; : &quot;outline&quot;}
          onClick={() => setStatusFilter(&quot;resolved&quot;)}
          size=&quot;sm&quot;
        >
          Resolved
        </Button>
        <Button
          variant={statusFilter === &quot;closed&quot; ? &quot;default&quot; : &quot;outline&quot;}
          onClick={() => setStatusFilter(&quot;closed&quot;)}
          size=&quot;sm&quot;
        >
          Closed
        </Button>
      </div>

      <div className=&quot;border rounded-md overflow-hidden&quot;>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className=&quot;text-right&quot;>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className=&quot;font-mono text-xs&quot;>
                  {dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
                  {dispute.project?.title || &quot;Unknown Project&quot;}
                </TableCell>
                <TableCell>
                  <div className=&quot;flex flex-col text-sm&quot;>
                    <span>
                      Client: {dispute.client_profile?.display_name || &quot;Unknown Client&quot;}
                    </span>
                    <span>
                      Talent: {dispute.talent_profile?.display_name || &quot;Unknown Talent&quot;}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(dispute.created_at), { addSuffix: true })}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(dispute.status)}>
                    {dispute.status.replace('_ ')}
                  </Badge>
                </TableCell>
                <TableCell className=&quot;text-right&quot;>
                  <Button asChild size=&quot;sm&quot;>
                    <Link href={`/dashboard/disputes/${dispute.id}`}>View Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
