<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface FraudFlagsTableProps {

interface FraudFlagsTableProps {}
  flags: FraudFlag[];
  isLoading: boolean;
  hasFilters: boolean;
  resetFilters: () => void;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}

  flags,
  isLoading,
  hasFilters,
  resetFilters,

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
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  flags,
  isLoading,
  hasFilters,
  resetFilters,
>>>>>>> origin/cursor/delete-old-data-records-6bba
  onAction
}) => {

  if (isLoading) {
    return (

  onAction;
}) => {}
  if (isLoading) {}
    return (
"
      <div className="flex justify-center items-center h-64">"
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
      </div>

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {FraudFlag} from "@/types/fraud";
import {SeverityDisplay} from "./SeverityDisplay";
import {ActionButtons} from "./ActionButtons";
import {EmptyFraudState} from "./EmptyFraudState";

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from "react",;

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { FraudFlag } from "@/types/fraud",;
import { SeverityDisplay } from "./SeverityDisplay",;
import { ActionButtons } from "./ActionButtons",;

<<<<<<< HEAD
import { EmptyFraudState } from "./EmptyFraudState",;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

interface FraudFlagsTableProps {;
  flags: FraudFlag[],;
  isLoading: boolean,;
  hasFilters: boolean,;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  resetFilters,;
  onAction;
}) => {;
  if (isLoading) {;


        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
      </div>;
    );
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  if (flags.length === 0) {}
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />
  }
<<<<<<< HEAD


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

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

              {flag.gpt_explanation || ("
                <span className="text-muted-foreground text-xs">Not analyzed</span>

<<<<<<< HEAD
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
                <span className="text-muted-foreground text-xs">Not analyzed</span>;
              )}
            </TableCell>;
            <TableCell>;
              }>;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                {flag && flag.status}
              </Badge>;
            </TableCell>;
            <TableCell>;
              <ActionButtons;
                flagId={flag && flag.id} 
                status={flag && flag.status} 

<<<<<<< HEAD
                onAction={onAction} 
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              />;
            </TableCell>;
          </TableRow>;
        ))}
      </TableBody>;
    </Table>;


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  flags;
  is_loading;
  has_filters;
  reset_filters,
  on_action;

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

                <span className="text - muted - foreground text - xs">Not analyzed</span>)}
            </TableCell>;
            <TableCell>;
              {new Date (flag.timestamp).toLocaleDateString ()} {new Date (flag.timestamp).toLocaleTimeString ()}
            </TableCell>;
            <TableCell>;

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

<<<<<<< HEAD
    </Table>);
}
;



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


      </TableBody>;
    </Table>;
  );

};
>>>>>>> origin/cursor/delete-old-data-records-6bba
