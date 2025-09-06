<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFlagsTable.tsx


<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {FraudFlag} from "@/types/fraud";
import {SeverityDisplay} from "./SeverityDisplay";
import {ActionButtons} from "./ActionButtons";
import {EmptyFraudState} from "./EmptyFraudState";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { FraudFlag } from "@/types/fraud",
import { SeverityDisplay } from "./SeverityDisplay",
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
import { ActionButtons } from "./ActionButtons";
import { EmptyFraudState } from "./EmptyFraudState";
=======
import { ActionButtons } from "./ActionButtons",
import { EmptyFraudState } from "./EmptyFraudState",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface FraudFlagsTableProps {

  flags: FraudFlag[]
  isLoading: boolean
  hasFilters: boolean
  resetFilters: () => void

  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}
<<<<<<< HEAD

<<<<<<< HEAD
export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({

  resetFilters,
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({;
  flags;
  isLoading;
  hasFilters;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({
<<<<<<< HEAD
  flags;
  isLoading;
  hasFilters;

  resetFilters

=======
  flags,
  isLoading,
  hasFilters,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  resetFilters,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  onAction
}) => {
  if (isLoading) {
    return (

      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
      </div>
    )
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFlagsTable.tsx
import React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {FraudFlag} from "@/types/fraud";
import {SeverityDisplay} from "./SeverityDisplay";
import {ActionButtons} from "./ActionButtons";
import {EmptyFraudState} from "./EmptyFraudState";
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { FraudFlag } from "@/types/fraud",;
import { SeverityDisplay } from "./SeverityDisplay",;
import { ActionButtons } from "./ActionButtons",;
import { EmptyFraudState } from "./EmptyFraudState",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface FraudFlagsTableProps {;
  flags: FraudFlag[],;
  isLoading: boolean,;
  hasFilters: boolean,;
  resetFilters: () => void,;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}
<<<<<<< HEAD
export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({;
  flags;
  isLoading;
  hasFilters;
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  resetFilters,;
  onAction;
}) => {;
  if (isLoading) {;
<<<<<<< HEAD
    return (
=======
;
export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({;
  flags,;
  isLoading,;
  hasFilters,;
  resetFilters;
  onAction;
}) => {;
  if (isLoading) {;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="flex justify-center items-center h-64">;
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
      </div>;
    );
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  if (flags.length === 0) {
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />
  }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFlagsTable.tsx

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (


              {flag.gpt_explanation || (

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                <span className="text-muted-foreground text-xs">Not analyzed</span>
========
  if (flags && flags.length === 0) {;
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />;
  }
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFlagsTable.tsx
=======
    return (;
      <div className="flex justify-center items-center h-64">;
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
      </div>;
    ),;
  }
;
  if (flags.length === 0) {;
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />,;
  }
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
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
=======
        {flags.map((flag) => (;
          <TableRow key={flag.id}>;
            <TableCell>;
              <SeverityDisplay severity={flag.severity} />;
            </TableCell>;
            <TableCell className="font-medium">;
              {flag.user_email || flag.user_id.substring(0, 8)}
            </TableCell>;
            <TableCell className="max-w-xs truncate">;
              {flag.content_excerpt}
            </TableCell>;
            <TableCell>;
              <Badge variant="outline">{flag.content_type}</Badge>;
            </TableCell>;
            <TableCell className="max-w-xs truncate">{flag.reason}</TableCell>;
            <TableCell className="max-w-xs truncate">;
              {flag.gpt_explanation || (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                <span className="text-muted-foreground text-xs">Not analyzed</span>;
              )}
            </TableCell>;
            <TableCell>;
<<<<<<< HEAD
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFlagsTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFlagsTable.tsx
              }>;
                {flag && flag.status}
              </Badge>;
            </TableCell>;
            <TableCell>;
              <ActionButtons
                flagId={flag && flag.id} 
                status={flag && flag.status} 
                onAction={onAction} 
=======
              {new Date(flag.timestamp).toLocaleDateString()} {new Date(flag.timestamp).toLocaleTimeString()}
            </TableCell>;
            <TableCell>;
              <Badge variant={;
                flag.status === 'pending';
                  ? 'secondary';
                  :flag.status === 'actioned';
                  ? 'destructive';
                  :flag.status === 'ignored';
                  ? 'outline';
                  :'default';
              }>;
                {flag.status}
              </Badge>;
            </TableCell>;
            <TableCell>;
              <ActionButtons ;
                flagId={flag.id} ;
                status={flag.status} ;
                onAction={onAction} ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              />;
            </TableCell>;
          </TableRow>;
        ))}
<<<<<<< HEAD

=======
      </TableBody>;
    </Table>;
<<<<<<< HEAD
  );
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      </TableBody>;
    </Table>;
  );

<<<<<<< HEAD
};

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
import React from './react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
import { FraudFlag } from '@/types / fraud';
import { SeverityDisplay } from './SeverityDisplay';
import { ActionButtons } from './ActionButtons';
import { EmptyFraudState } from './EmptyFraudState';
interface FraudFlagsTableProps {
  flags: FraudFlag[],
  is_loading: boolean,
  has_filters: boolean,
  reset_filters: () => void,
  on_action: (flag_id: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}
export const FraudFlagsTable: React.FC < FraudFlagsTableProps> = ({
  flags;
  is_loading;
  has_filters;
  reset_filters,
  on_action;
}) => {
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center h - 64">;
        <div className="animate - spin rounded - full h - 12 w - 12 border - b-2 border - zion - purple"></div>;
      </div>);
  }
  // Check condition
if ( {) {
  $2
}
    return <EmptyFraudState has_filters={has_filters} onResetFilters={reset_filters} />;
  }
  return (
    <Table>;
      <TableHeader>;
        <TableRow>;
          <TableHead > Severity</TableHead>;
          <TableHead > User</TableHead>;
          <TableHead > Content</TableHead>;
          <TableHead > Type</TableHead>;
          <TableHead > Reason</TableHead>;
          <TableHead > GPT Analysis</TableHead>;
          <TableHead > Timestamp</TableHead>;
          <TableHead > Status</TableHead>;
          <TableHead > Actions</TableHead>;
        </TableRow>;
      </TableHeader>;
      <TableBody>;
        {flags.map ((flag) => (
          <TableRow key={flag.id}>;
            <TableCell>;
              <SeverityDisplay severity={flag.severity} />;
            </TableCell>;
            <TableCell className="font - medium">;
              {flag.user_email || flag.user_id.substring (0, 8)}
            </TableCell>;
            <TableCell className="max - w-xs truncate">;
              {flag.content_excerpt}
            </TableCell>;
            <TableCell>;
              <Badge variant="outline">{flag.content_type}</Badge>;
            </TableCell>;
            <TableCell className="max - w-xs truncate">{flag.reason}</TableCell>;
            <TableCell className="max - w-xs truncate">;
              {flag.gpt_explanation || (
                <span className="text - muted - foreground text - xs">Not analyzed</span>)}
            </TableCell>;
            <TableCell>;
              {new Date (flag.timestamp).toLocaleDateString ()} {new Date (flag.timestamp).toLocaleTimeString ()}
            </TableCell>;
            <TableCell>;
              <Badge variant={
                flag.status === 'pending';
                  ? 'secondary';
                  : flag.status === 'actioned';
                  ? 'destructive';
                  : flag.status === 'ignored';
                  ? 'outline';
                  : 'default';
              }>;
                {flag.status}
              </Badge>;
            </TableCell>;
            <TableCell>;
              <ActionButtons;
                flag_id={flag.id}
                status={flag.status}
                on_action={on_action}
              />;
            </TableCell>;
          </TableRow>))}
      </TableBody>;
    </Table>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFlagsTable.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;
},; interface FraudFlagsTableProps {
  flags: FraudFlag[];
isLoading: boolean;
hasFilters: boolean;
resetFilters: () => void;
onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void 
}flags, isLoading, hasFilters, resetFilters, onAction 
}) => {
  if (isLoading) {
  return (<div className="flex justify-center items-center h-64" > <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple" ></div> </div> <TableHeader> <TableRow> <TableHead>Severity</TableHead> <TableHead>User</TableHead> <TableHead>Content</TableHead> <TableHead>Type</TableHead> <TableHead>Reason</TableHead> <TableHead>GPT Analysis</TableHead> <TableHead>Timestamp</TableHead> <TableHead>Status</TableHead> <TableHead>Actions</TableHead> </TableRow> </TableHeader> <TableBody> {
  flags.map ( (flag) => (<TableRow key= {
  flag.id 
}> <TableCell> <SeverityDisplay severity= {
  flag.severity 
}/> </TableCell>) 
}</TableCell> <TableCell> {
  new Date (flag.timestamp) .toLocaleDateString () 
}{
  new Date (flag.timestamp) .toLocaleTimeString () 
}</TableCell> <TableCell> <Badge variant= {
  flag.status === 'pending' ? 'secondary' : flag.status === 'actioned' ? 'destructive' : flag.status === 'ignored' ? 'outline' : 'default' 
}> {
  flag.status 
}</Badge> </TableCell> <TableCell> <ActionButtons flagId= {
  flag.id 
}status= {
  flag.status 
}onAction= {
  onAction 
}/> </TableCell> </TableRow>) ) 
}</TableBody> </Table>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/admin/fraud-detection/FraudFlagsTable.tsx
=======
<<<<<<< HEAD
              {flag.gpt_explanation |(
=======
              {flag.gpt_explanation || (
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
      </TableBody>
    </Table>
  )
<<<<<<< HEAD
}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      </TableBody>;
    </Table>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
