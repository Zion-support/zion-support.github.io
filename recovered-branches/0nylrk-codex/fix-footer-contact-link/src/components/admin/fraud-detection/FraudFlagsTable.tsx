
import React from "react";

interface FraudFlagsTableProps {_flags: FraudFlag[];
  isLoading: boolean;
  hasFilters: boolean;
  resetFilters: () => void;
  onAction: (_flagId: string, _action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;}

export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = (_{_flags, _isLoading, _hasFilters, _resetFilters, _onAction}) => {_if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
      </div>
    );}

  if (flags.length === 0) {_return <EmptyFraudState hasFilters={hasFilters} onResetFilters={_resetFilters} />;
  }

  return (_<Table>
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
        {_flags.map((flag) => (
          <TableRow key={flag.id}>
            <TableCell>
              <SeverityDisplay severity={_flag.severity} />
            </TableCell>
            <TableCell className="font-medium">
              {_flag.user_email || flag.user_id.substring(0, _8)}
            </TableCell>
            <TableCell className="max-w-xs truncate">
              {_flag.content_excerpt}
            </TableCell>
            <TableCell>
              <Badge variant="outline">{_flag.content_type}</Badge>
            </TableCell>
            <TableCell className="max-w-xs truncate">{_flag.reason}</TableCell>
            <TableCell className="max-w-xs truncate">
              {_flag.gpt_explanation || (
                <span className="text-muted-foreground text-xs">Not analyzed</span>
              )}
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
  );
};
