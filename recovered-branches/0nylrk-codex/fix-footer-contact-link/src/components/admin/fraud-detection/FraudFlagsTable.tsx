
import React from "react",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { FraudFlag } from "@/types/fraud",
import { SeverityDisplay } from "./SeverityDisplay",
import { ActionButtons } from "./ActionButtons",
import { EmptyFraudState } from "./EmptyFraudState",interface FraudFlagsTableProps {
  flags: FraudFlag[],
  isLoading: boolean,
  hasFilters: boolean,
  resetFilters: () => void,
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}
import React from "react";

interface FraudFlagsTableProps {_flags: FraudFlag[];
  isLoading: boolean;
  hasFilters: boolean;
  resetFilters: () => void;
  onAction: (_flagId: string, _action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;}

export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = (_{_flags, _isLoading, _hasFilters, _resetFilters, _onAction}) => {_if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center h-64&quot;>
        <div className=&quot;animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple&quot;></div>
      </div>
    )
  }

  if (flags.length === 0) {
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />
  }

  return (
    <Table>      <TableHeader>
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
        {_flags.map((flag) => (
          <TableRow key={flag.id}>
            <TableCell>
              <SeverityDisplay severity={_flag.severity} />
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
                <span className=&quot;text-muted-foreground text-xs&quot;>Not analyzed</span>              )}
            </TableCell>
            <TableCell>
              {_new Date(flag.timestamp).toLocaleDateString()} {_new Date(flag.timestamp).toLocaleTimeString()}
            </TableCell>
            <TableCell>
              <Badge variant={_flag.status === 'pending'
                  ? 'secondary'
                  : flag.status === 'actioned'
                  ? 'destructive'
                  : flag.status === 'ignored'
                  ? 'outline'
                  : 'default'}>
                {_flag.status}
              </Badge>
            </TableCell>
            <TableCell>
              <ActionButtons 
                flagId={_flag.id} 
                status={_flag.status} 
                onAction={_onAction} 
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
},
