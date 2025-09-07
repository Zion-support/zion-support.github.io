



import React, { useState } from "react";""
import {Dispute, DisputeStatus} from "@/types/disputes";""
import {Button} from "@/components/ui/button";""
import {Badge} from "@/components/ui/badge";""
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";""
import {Skeleton} from "@/components/ui/skeleton";""
import {formatDistanceToNow} from "date-fns";""
import {ShieldAlert} from "lucide-react";""
import {Link} from "react-router-dom";""
import React, { useState } from "react",""
import { Dispute, DisputeStatus } from "@/types/disputes",""
import { Button } from "@/components/ui/button",""
import { Badge } from "@/components/ui/badge","
import {
  // TODO: Implement
}
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,"
  TableRow} from "@/components/ui/table",""
import { Skeleton } from "@/components/ui/skeleton",""
import { formatDistanceToNow } from "date-fns",""
import { ShieldAlert } from "lucide-react",""
import { Link } from "react-router-dom","
type DisputesListProps = {
  disputes: Dispute[],
  isLoading: boolean;
export function DisputesList({ disputes, isLoading }: DisputesListProps) {"
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all");"
"
  const [statusFilter, setStatusFilter] = useState<DisputeStatus | "all">("all"),"
      <div className="space-y-4">"
</div>"
        <div className="flex gap-2 mb-4">"
            <Skeleton key={status} className="h-10 w-24" />"

        <div className="border rounded-md">"
</div>
          <Table>

            <TableHeader>

              <TableRow>

                <TableHead>Case ID
                <TableHead>Project
                <TableHead>Parties
                <TableHead>Created
                <TableHead>Status"
                <TableHead className="text-right">Actions"
              
            
            <TableBody>

                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-24" />""
                  <TableCell><Skeleton className="h-4 w-40" />""
                  <TableCell><Skeleton className="h-4 w-32" />""
                  <TableCell><Skeleton className="h-6 w-20" />""
                  <TableCell className="text-right"><Skeleton className="h-9 w-20 ml-auto" />"
  const [status_filter, setStatusFilter] = useState < DisputeStatus | "all">("all");"
;"
  const filtered_disputes = status_filter === "all";"
    ? disputes;
    : disputes.filter (dispute => dispute.status === status_filter);
;
  const getStatusBadgeVariant = (status: DisputeStatus) =>: any {
  // TODO: Implement
    switch (status) {"
      case "open": return "default";""
      case "under_review":;""
        return "secondary",""
      case "resolved":;""
        return "outline", // Changed from './success'; to "outline";""
      case "closed":;""
        return "outline";"
      default:;"
        return "default";"



              ))}
        </div>;
      </div>;"
      <div className="text-center py-12 border rounded-md bg-muted/20">;"
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;"
        <h3 className="text-xl font-medium">No disputes found</h3>;""
        <p className="text-muted-foreground mt-2">;"
</p>
        </p>;
    <div className="space-y-4">;"
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">;"
        <Button;"
          variant={statusFilter === "all" ? "default" : "outline"}""
          onClick={() => setStatusFilter("all")}"

          variant={statusFilter === "open" ? "default" : "outline"}""
          onClick={() => setStatusFilter("open")}"

          variant={statusFilter === "under_review" ? "default" : "outline"}""
          onClick={() => setStatusFilter("under_review")}"

          variant={statusFilter === "resolved" ? "default" : "outline"}""
          onClick={() => setStatusFilter("resolved")}"

      <div className="space - y-4">;"
        <div className="flex gap - 2 mb - 4">;"
            <Skeleton key={status} className="h - 10 w - 24" />))}"

        <div className="border rounded - md">;"
          <Table>;

            <TableHeader>;

              <TableRow>;

                <TableHead > Case ID;
                <TableHead > Project;
                <TableHead > Parties;
                <TableHead > Created;
                <TableHead > Status;"
                <TableHead className="text - right">Actions;"
            <TableBody>;

                <TableRow key={i}>;
                  <TableCell><Skeleton className="h - 4 w - 24" />;""
                  <TableCell><Skeleton className="h - 4 w - 40" />;""
                  <TableCell><Skeleton className="h - 4 w - 32" />;""
                  <TableCell><Skeleton className="h - 6 w - 20" />;""
                  <TableCell className="text - right"><Skeleton className="h - 9 w - 20 ml - auto" />;"
      </div>);"
      <div className="text - center py - 12 border rounded - md bg - muted / 20">;"
        <ShieldAlert className="mx - auto h - 12 w - 12 text - muted - foreground mb - 4" />;"
        <h3 className="text - xl font - medium">No disputes found</h3>;""
        <p className="text - muted - foreground mt - 2">;"
      <div className="flex gap - 2 mb - 4 overflow - x-auto pb - 2">;"
          variant={status_filter === "all" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("all")}"

          variant={status_filter === "open" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("open")}"

          variant={status_filter === "under_review" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("under_review")}"

          variant={status_filter === "resolved" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("resolved")}"

          variant={status_filter === "closed" ? "default" : "outline"}""
          on_click={() => setStatusFilter ("closed")}"

      <div className="border rounded - md overflow - hidden">;"




              <TableRow key={dispute.id}>;
                <TableCell className="font - mono text - xs">;"

                <TableCell>;

                  <div className="flex flex - col text - sm">;"
                    <span>;
</span>
                    </span>;





                  <Badge variant={getStatusBadgeVariant (dispute.status)}>;

                <TableCell className="text - right">;"
                  <Button as_child size="sm">;"

                    <Link to={`/dashboard / disputes/${dispute.id}`}>View Details;
    </div>);


                  <Badge variant={getStatusBadgeVariant(dispute.status)}>;

                <TableCell className="text-right">;"
                  <Button asChild size="sm">;"
`;
                    <Link to={`/dashboard/disputes/${dispute.id}`}>View Details;
  return (<div className="space-y-4" > <div className="flex gap-2 mb-4" > {"
</div>)"
  ["All", "Open", "Under Review", "Resolved", "Closed" ].map ( (status) => (<Skeleton key= {"
  status;"
}className="h-10 w-24" />"
}</div> <div className="border rounded-md" > <Table> <TableHeader> <TableRow> <TableHead>Case ID <TableHead>Project <TableHead>Parties <TableHead>Created <TableHead>Status <TableHead className="text-right" >Actions   <TableBody> {"
</div>)
  [...Array (5) ].map ( (, i) => (<TableRow key= {
  i;)"
}> <TableCell><Skeleton className="h-4 w-24" /> <TableCell><Skeleton className="h-4 w-40" /> <TableCell><Skeleton className="h-4 w-32" /> <TableCell><Skeleton className="h-4 w-24" /> <TableCell><Skeleton className="h-6 w-20" /> <TableCell className="text-right" ><Skeleton className="h-9 w-20 ml-auto" /> ) )"
}  </div> </div>) "
}> All  <Button > Open  <Button > Under Review  <Button > Resolved  <Button > Closed  </div> <div className="border rounded-md overflow-hidden" > <Table> <TableHeader> <TableRow> <TableHead>Case ID <TableHead>Project <TableHead>Parties <TableHead>Created <TableHead>Status <TableHead className="text-right" >Actions   <TableBody> {"
  filteredDisputes.map ( (dispute) => (<TableRow key= {
  dispute.id;"
}>  <TableCell> <div className="flex flex-col text-sm" > <span> </span> </div>  <TableCell> {"
)
} <TableCell>   ) ) 
}  </div> </div>) "`;