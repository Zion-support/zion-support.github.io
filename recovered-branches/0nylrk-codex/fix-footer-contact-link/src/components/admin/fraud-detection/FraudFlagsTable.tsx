
import React from &quot;react&quot;;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from &quot;@/components/ui/table&quot;;
import { Badge } from &quot;@/components/ui/badge&quot;;
import { FraudFlag } from &quot;@/types/fraud&quot;;
import { SeverityDisplay } from &quot;./SeverityDisplay&quot;;
import { ActionButtons } from &quot;./ActionButtons&quot;;
import { EmptyFraudState } from &quot;./EmptyFraudState&quot;;

interface FraudFlagsTableProps {
  flags: FraudFlag[];
  isLoading: boolean;
  hasFilters: boolean;
  resetFilters: () => void;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}

export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({
  flags,
  isLoading,
  hasFilters,
  resetFilters,
  onAction
}) => {
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center h-64&quot;>
        <div className=&quot;animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple&quot;></div>
      </div>
    );
  }

  if (flags.length === 0) {
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />;
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
            <TableCell className=&quot;font-medium&quot;>
              {flag.user_email || flag.user_id.substring(0, 8)}
            </TableCell>
            <TableCell className=&quot;max-w-xs truncate&quot;>
              {flag.content_excerpt}
            </TableCell>
            <TableCell>
              <Badge variant=&quot;outline&quot;>{flag.content_type}</Badge>
            </TableCell>
            <TableCell className=&quot;max-w-xs truncate&quot;>{flag.reason}</TableCell>
            <TableCell className=&quot;max-w-xs truncate&quot;>
              {flag.gpt_explanation || (
                <span className=&quot;text-muted-foreground text-xs&quot;>Not analyzed</span>
              )}
            </TableCell>
            <TableCell>
              {new Date(flag.timestamp).toLocaleDateString()} {new Date(flag.timestamp).toLocaleTimeString()}
            </TableCell>
            <TableCell>
              <Badge variant={
                flag.status === 'pending'
                  ? 'secondary'
                  : flag.status === 'actioned'
                  ? 'destructive'
                  : flag.status === 'ignored'
                  ? 'outline'
                  : 'default'
              }>
                {flag.status}
              </Badge>
            </TableCell>
            <TableCell>
              <ActionButtons 
                flagId={flag.id} 
                status={flag.status} 
                onAction={onAction} 
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
