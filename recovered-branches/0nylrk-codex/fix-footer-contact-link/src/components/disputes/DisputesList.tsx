



import React, { useState } from "react";
import {Dispute, DisputeStatus} from "@/types/disputes";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Skeleton} from "@/components/ui/skeleton";
import {formatDistanceToNow} from "date-fns";
import {ShieldAlert} from "lucide-react";
import {Link} from "react-router-dom";


import React, { useState } from "react",
import { Dispute, DisputeStatus } from "@/types/disputes",
import { Button } from "@/components/ui/button",
import { Badge } from "@/components/ui/badge",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Skeleton } from "@/components/ui/skeleton",
import { formatDistanceToNow } from "date-fns",
import { ShieldAlert } from "lucide-react",
import { Link } from "react-router-dom",


      case "under_review":
        return "secondary"
      case "resolved":
        return "outline", // Changed from "success" to "outline"
      case "closed":


        return "outline";
      default:;
        return "default";
    }


              ))}
            </TableBody>;
          </Table>;
        </div>;
      </div>;
    );
  }
    return (
      <div className="text-center py-12 border rounded-md bg-muted/20">;
        <ShieldAlert className="mx-auto h-12 w-12 text-muted-foreground mb-4" />;
        <h3 className="text-xl font-medium">No disputes found</h3>;
        <p className="text-muted-foreground mt-2">;
          No active disputes match the selected filter;
        </p>;
      </div>;
    );
  }
  return (
    <div className="space-y-4">;
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">;
        <Button
          variant={statusFilter === "all" ? "default" : "outline"}
          onClick={() => setStatusFilter("all")}
          size="sm";
        >;
          All;
        </Button>;
        <Button
          variant={statusFilter === "open" ? "default" : "outline"}
          onClick={() => setStatusFilter("open")}
          size="sm";
        >;
          Open;
        </Button>;
        <Button
          variant={statusFilter === "under_review" ? "default" : "outline"}
          onClick={() => setStatusFilter("under_review")}
          size="sm";
        >;
          Under Review;
        </Button>;
        <Button
          variant={statusFilter === "resolved" ? "default" : "outline"}
          onClick={() => setStatusFilter("resolved")}
          size="sm";
        >;
          Resolved;
        </Button>;
          onClick={() => setStatusFilter("closed")}


          </TableBody>;
        </Table>;
      </div>;
    </div>;
  );
}

;



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


