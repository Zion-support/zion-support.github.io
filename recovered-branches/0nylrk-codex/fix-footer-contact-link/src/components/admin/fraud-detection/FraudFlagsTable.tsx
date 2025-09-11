



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface FraudFlagsTableProps {

  flags: FraudFlag[]
  isLoading: boolean
  hasFilters: boolean
  resetFilters: () => void

  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}





  flags,
  isLoading,
  hasFilters,
  resetFilters,
  onAction
}) => {
  if (isLoading) {
    return (

      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
      </div>
    )
import React from "react",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { FraudFlag } from "@/types/fraud",;
import { SeverityDisplay } from "./SeverityDisplay",;
import { ActionButtons } from "./ActionButtons",;
import { EmptyFraudState } from "./EmptyFraudState",;

interface FraudFlagsTableProps {;
  flags: FraudFlag[],;
  isLoading: boolean,;
  hasFilters: boolean,;
  resetFilters: () => void,;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}

export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({;
  flags;
  isLoading;
  hasFilters;
  resetFilters,;
  onAction;
}) => {;
  if (isLoading) {;
    return (
      <div className="flex justify-center items-center h-64">;
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
      </div>;
    );



  }
  if (flags.length === 0) {
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Severity</TableHead>
          <TableHead>User</TableHead>
          <TableHead>Content</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Reason</TableHead>
          <TableHead>GPT Analysis</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {flags.map((flag) => (
          <TableRow key={flag.id}>
            <TableCell>
              <SeverityDisplay severity={flag.severity} />
            </TableCell>
            <TableCell className="font-medium">
              {flag.user_email |flag.user_id.substring(0, 8)}
            </TableCell>
            <TableCell className="max-w-xs truncate">
              {flag.content_excerpt}
            </TableCell>
            <TableCell>
              <Badge variant="outline">{flag.content_type}</Badge>
            </TableCell>
            <TableCell className="max-w-xs truncate">{flag.reason}</TableCell>
            <TableCell className="max-w-xs truncate">
              {flag.gpt_explanation |(
              {flag.gpt_explanation || (
                <span className="text-muted-foreground text-xs">Not analyzed</span>
=======
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
        {flags && flags.map((flag) => (;
          <TableRow key={flag && flag.id}>;
            <TableCell>;
              <SeverityDisplay severity={flag && flag.severity} />;
            </TableCell>;
            <TableCell className="font-medium">;
              {flag && flag.user_email || flag && flag.user_id.substring(0, 8)}
            </TableCell>;
            <TableCell className="max-w-xs truncate">;
              {flag && flag.content_excerpt}
            </TableCell>;
            <TableCell>;
              <Badge variant="outline">{flag && flag.content_type}</Badge>;
            </TableCell>;
            <TableCell className="max-w-xs truncate">{flag && flag.reason}</TableCell>;
            <TableCell className="max-w-xs truncate">;
              {flag && flag.gpt_explanation || (;
                <span className="text-muted-foreground text-xs">Not analyzed</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              )}
            </TableCell>;
            <TableCell>;
              {new Date(flag && flag.timestamp).toLocaleDateString()} {new Date(flag && flag.timestamp).toLocaleTimeString()}
            </TableCell>;
            <TableCell>;
              <Badgevariant={
                flag && flag.status === 'pending'
                  ? 'secondary'
                  : flag && flag.status === 'actioned'
                  ? 'destructive'
                  : flag && flag.status === 'ignored'
                  ? 'outline'
                  : 'default'

              }>;
                {flag && flag.status}
              </Badge>;
            </TableCell>;
            <TableCell>;
              <ActionButtons
                flagId={flag && flag.id} 
                status={flag && flag.status} 
                onAction={onAction} 
              />;
            </TableCell>;
          </TableRow>;
        ))}
      </TableBody>;
    </Table>;
  );
=======


=======
      </TableBody>;
    </Table>;
  );



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
