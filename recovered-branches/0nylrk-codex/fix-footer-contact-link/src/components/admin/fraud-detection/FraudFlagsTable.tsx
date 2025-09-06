
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface FraudFlagsTableProps {

  flags: FraudFlag[]
  isLoading: boolean
  hasFilters: boolean
  resetFilters: () => void

  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}





<<<<<<< HEAD
=======
export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({;
  flags;
  isLoading;
  hasFilters;
export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({
  flags;
  isLoading;
  hasFilters;

  resetFilters

  flags,
  isLoading,
  hasFilters,
  resetFilters,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  onAction
}) => {
  if (isLoading) {
    return (

      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
      </div>
    )

<<<<<<< HEAD
import React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {FraudFlag} from "@/types/fraud";
import {SeverityDisplay} from "./SeverityDisplay";
import {ActionButtons} from "./ActionButtons";
import {EmptyFraudState} from "./EmptyFraudState";
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { FraudFlag } from "@/types/fraud",;
import { SeverityDisplay } from "./SeverityDisplay",;
import { ActionButtons } from "./ActionButtons",;
import { EmptyFraudState } from "./EmptyFraudState",;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <div className="flex justify-center items-center h-64">;
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
      </div>;
    );
<<<<<<< HEAD



=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
  if (flags.length === 0) {
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />
  }


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (


              {flag.gpt_explanation || (


                <span className="text-muted-foreground text-xs">Not analyzed</span>
<<<<<<< HEAD
=======
=======
  if (flags && flags.length === 0) {;
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />;
  }
  return (
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                <span className="text-muted-foreground text-xs">Not analyzed</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              }>;
                {flag && flag.status}
              </Badge>;
            </TableCell>;
            <TableCell>;
              <ActionButtons
                flagId={flag && flag.id} 
                status={flag && flag.status} 
                onAction={onAction} 
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              />;
            </TableCell>;
          </TableRow>;
        ))}
      </TableBody>;
    </Table>;
<<<<<<< HEAD
  );
=======


=======
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      </TableBody>;
    </Table>;
  );



};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
              {flag.gpt_explanation |(
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
  )
}

      </TableBody>;
    </Table>;
  );
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
