
import React from "react",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { FraudFlag } from "@/types/fraud",;
import { SeverityDisplay } from "./SeverityDisplay",;
import { ActionButtons } from "./ActionButtons",;
import { EmptyFraudState } from "./EmptyFraudState",;
;
interface FraudFlagsTableProps {;
  flags:FraudFlag[],;
  isLoading:boolean,;
  hasFilters:boolean,;
  resetFilters:() => void,;
  onAction:(flagId:string, action:'warning' | 'suspension' | 'ban' | 'ignore') => void;
}
;
export const FraudFlagsTable:React.FC<FraudFlagsTableProps> = ({;
  flags,;
  isLoading,;
  hasFilters,;
  resetFilters,;
  onAction;
}) => {;
  if (isLoading) {;

    <Table>;
      <TableHeader>;
        <TableRow>;
          <TableHead>Severity</TableHead>;
          <TableHead>User</TableHead>;
          <TableHead>Content</TableHead>;
          <TableHead>Type</TableHead>;
          <TableHead>Reason</TableHead>;
          <TableHead>GPT Analysis</TableHead>;
          <TableHead>Timestamp</TableHead>;
          <TableHead>Status</TableHead>;
          <TableHead>Actions</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;

                <span className="text-muted-foreground text-xs">Not analyzed</span>;
              )}
            </TableCell>;
            <TableCell>;

              />;
            </TableCell>;
          </TableRow>;
        ))}
      </TableBody>;
    </Table>;
