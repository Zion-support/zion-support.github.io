
import React, {_useState} from "react";
import {_Table, _TableBody, _TableCell, _TableHead, _TableHeader, _TableRow} from "@/components/ui/table";

type DisputesListProps = {_disputes: Dispute[];
  isLoading: boolean;};

export function DisputesList(_{_disputes, _isLoading}: DisputesListProps) {_const [statusFilter, _setStatusFilter] = useState<DisputeStatus | "all">("all");

  const _filteredDisputes = statusFilter === "all" 
    ? disputes 
    : disputes.filter(dispute => dispute.status === statusFilter);

  const _getStatusBadgeVariant = (_status: DisputeStatus) => {
    switch (status) {
      case "open":
        return "default";
      case "under_review":
        return "secondary";
      case "resolved":
        return "outline"; // Changed from "success" to "outline"
      case "closed":
        return "outline";
      default:
        return "default";}
  };

  if (isLoading) {_return (_<div className="space-y-4">
        <div className="flex gap-2 mb-4">
          {["All", _"Open", _"Under Review", _"Resolved", _"Closed"].map((status) => (
            <Skeleton key={status} className="h-10 w-24" />
          ))}
        </div>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case ID</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Parties</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {_[...Array(5)].map(_(_, _i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  if (disputes.length === 0) {_return (
      <div className="text-center py-12 border rounded-md bg-muted/20">
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium">No disputes found</h3>
        <p className="text-muted-foreground mt-2">
          No active disputes match the selected filter
        </p>
      </div>
    );}

  return (_<div className="space-y-4">
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <Button
          variant={_statusFilter === "all" ? "default" : "outline"}
          onClick={_() => setStatusFilter("all")}
          size="sm"
        >
          All
        </Button>
        <Button
          variant={_statusFilter === "open" ? "default" : "outline"}
          onClick={_() => setStatusFilter("open")}
          size="sm"
        >
          Open
        </Button>
        <Button
          variant={_statusFilter === "under_review" ? "default" : "outline"}
          onClick={_() => setStatusFilter("under_review")}
          size="sm"
        >
          Under Review
        </Button>
        <Button
          variant={_statusFilter === "resolved" ? "default" : "outline"}
          onClick={_() => setStatusFilter("resolved")}
          size="sm"
        >
          Resolved
        </Button>
        <Button
          variant={_statusFilter === "closed" ? "default" : "outline"}
          onClick={_() => setStatusFilter("closed")}
          size="sm"
        >
          Closed
        </Button>
      </div>

      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Parties</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {_filteredDisputes.map(_(dispute) => (
              <TableRow key={dispute.id}>
                <TableCell className="font-mono text-xs">
                  {_dispute.id.split('-')[0]}
                </TableCell>
                <TableCell>
                  {_dispute.project?.title || "Unknown Project"}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col text-sm">
                    <span>
                      Client: {_dispute.client_profile?.display_name || "Unknown Client"}
                    </span>
                    <span>
                      Talent: {_dispute.talent_profile?.display_name || "Unknown Talent"}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {_formatDistanceToNow(new Date(dispute.created_at), _{ addSuffix: true})}
                </TableCell>
                <TableCell>
                  <Badge variant={_getStatusBadgeVariant(dispute.status)}>
                    {_dispute.status.replace('_', _' ')}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button asChild size="sm">
                    <Link to={_`/dashboard/disputes/${dispute.id}`}>View Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
