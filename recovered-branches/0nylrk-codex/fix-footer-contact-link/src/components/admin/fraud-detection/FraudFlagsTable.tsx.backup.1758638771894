
<<<<<<< HEAD

import React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {FraudFlag} from "@/types/fraud";
import {SeverityDisplay} from "./SeverityDisplay";
import {ActionButtons} from "./ActionButtons";
import {EmptyFraudState} from "./EmptyFraudState";
import React from "react",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { FraudFlag } from "@/types/fraud",
import { SeverityDisplay } from "./SeverityDisplay",
import { ActionButtons } from "./ActionButtons";
import { EmptyFraudState } from "./EmptyFraudState";
import { ActionButtons } from "./ActionButtons",
import { EmptyFraudState } from "./EmptyFraudState",

interface FraudFlagsTableProps {

  flags: FraudFlag[]
  isLoading: boolean
  hasFilters: boolean
  resetFilters: () => void

  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}







=======
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FraudFlag } from "@/types/fraud";
import { SeverityDisplay } from "./SeverityDisplay";
import { ActionButtons } from "./ActionButtons";
import { EmptyFraudState } from "./EmptyFraudState";

interface FraudFlagsTableProps {
  flags: FraudFlag[];
  isLoading: boolean;
  hasFilters: boolean;
  resetFilters: () => void;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}

export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({
>>>>>>> origin/auto/autonomy-17186719616
  flags,
  isLoading,
  hasFilters,
  resetFilters,
<<<<<<< HEAD

=======
>>>>>>> origin/auto/autonomy-17186719616
  onAction
}) => {
  if (isLoading) {
    return (
<<<<<<< HEAD

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






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




  }
  if (flags.length === 0) {
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />
=======
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
      </div>
    );
  }

  if (flags.length === 0) {
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />;
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
              {flag.user_email |flag.user_id.substring(0, 8)}
=======
              {flag.user_email || flag.user_id.substring(0, 8)}
>>>>>>> origin/auto/autonomy-17186719616
            </TableCell>
            <TableCell className="max-w-xs truncate">
              {flag.content_excerpt}
            </TableCell>
            <TableCell>
              <Badge variant="outline">{flag.content_type}</Badge>
            </TableCell>
            <TableCell className="max-w-xs truncate">{flag.reason}</TableCell>
            <TableCell className="max-w-xs truncate">
<<<<<<< HEAD

              {flag.gpt_explanation |(
              {flag.gpt_explanation || (

                <span className="text-muted-foreground text-xs">Not analyzed</span>

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


=======
              {flag.gpt_explanation || (
                <span className="text-muted-foreground text-xs">Not analyzed</span>
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
>>>>>>> origin/auto/autonomy-17186719616
              }>
                {flag.status}
              </Badge>
            </TableCell>
            <TableCell>
<<<<<<< HEAD
              <ActionButtons
                flagId={flag.id}
                status={flag.status}
                onAction={onAction}
=======
              <ActionButtons 
                flagId={flag.id} 
                status={flag.status} 
                onAction={onAction} 
>>>>>>> origin/auto/autonomy-17186719616
              />
            </TableCell>
          </TableRow>
        ))}
<<<<<<< HEAD

      </TableBody>
    </Table>
  )
}


      </TableBody>;
    </Table>;
  );




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


};

=======
      </TableBody>
    </Table>
  );
};
>>>>>>> origin/auto/autonomy-17186719616
