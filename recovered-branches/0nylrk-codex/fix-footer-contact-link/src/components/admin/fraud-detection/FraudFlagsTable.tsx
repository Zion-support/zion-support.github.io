<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {FraudFlag} from "@/types/fraud";
import {SeverityDisplay} from "./SeverityDisplay";
import {ActionButtons} from "./ActionButtons";
import {EmptyFraudState} from "./EmptyFraudState";
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { FraudFlag } from "@/types/fraud",
import { SeverityDisplay } from "./SeverityDisplay",
import { ActionButtons } from "./ActionButtons";
import { EmptyFraudState } from "./EmptyFraudState";
import { ActionButtons } from "./ActionButtons",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { EmptyFraudState } from "./EmptyFraudState",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface FraudFlagsTableProps {
=======

import React from "react","
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table","
import { Badge } from "@/components/ui/badge","
import { FraudFlag } from "@/types/fraud","
import { SeverityDisplay } from "./SeverityDisplay",";
import { ActionButtons } from "./ActionButtons";"
import { EmptyFraudState } from "./EmptyFraudState";"
import { ActionButtons } from "./ActionButtons","
import { EmptyFraudState } from "./EmptyFraudState",
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

interface FraudFlagsTableProps {}
  flags: FraudFlag[];
  isLoading: boolean;
  hasFilters: boolean;
  resetFilters: () => void;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { EmptyFraudState } from "./EmptyFraudState",
interface FraudFlagsTableProps {

  flags: FraudFlag[]
  isLoading: boolean
  hasFilters: boolean
  resetFilters: () => void

  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({;
  flags;
  isLoading;
  hasFilters;
<<<<<<< HEAD
export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({};
=======
export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  flags;
  isLoading;
  hasFilters;

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  flags,
  isLoading,
  hasFilters,
  resetFilters,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  onAction
}) => {
=======
import { EmptyFraudState } from "./EmptyFraudState",}) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { EmptyFraudState } from "./EmptyFraudState",}) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  onAction
}) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (isLoading) {
    return (
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  onAction;
}) => {}
  if (isLoading) {}
    return (
"
      <div className="flex justify-center items-center h-64">"
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    )

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======
    )

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {FraudFlag} from "@/types/fraud";
import {SeverityDisplay} from "./SeverityDisplay";
import {ActionButtons} from "./ActionButtons";
import {EmptyFraudState} from "./EmptyFraudState";
<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",;
=======
    )import React from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    )import React from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
import { FraudFlag } from "@/types/fraud",;
import { SeverityDisplay } from "./SeverityDisplay",;
import { ActionButtons } from "./ActionButtons",;
<<<<<<< HEAD
import { EmptyFraudState } from "./EmptyFraudState",;      <div className="flex justify-center items-center h-64">;
=======

"
import React from "react",;"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",;"
import { Badge } from "@/components/ui/badge",;"
import { FraudFlag } from "@/types/fraud",;"
import { SeverityDisplay } from "./SeverityDisplay",;"
import { ActionButtons } from "./ActionButtons",;"
import { EmptyFraudState } from "./EmptyFraudState",;



=======
import { EmptyFraudState } from "./EmptyFraudState",;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface FraudFlagsTableProps {;
  flags: FraudFlag[],;
  isLoading: boolean,;
  hasFilters: boolean,;
<<<<<<< HEAD
  resetFilters: () => void,;'
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}




=======
  resetFilters: () => void,;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}

export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({;
  flags;
  isLoading;
  hasFilters;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  resetFilters,;
  onAction;
}) => {;
  if (isLoading) {;
<<<<<<< HEAD


"
      <div className="flex justify-center items-center h-64">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    return (
      <div className="flex justify-center items-center h-64">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple"></div>;
      </div>;
    );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
  if (flags.length === 0) {}
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

<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (




              {flag.gpt_explanation || ("
                <span className="text-muted-foreground text-xs">Not analyzed</span>



    <Table>;
=======
  }
  if (flags.length === 0) {
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />
  }    <Table>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
  if (flags.length === 0) {
    return <EmptyFraudState hasFilters={hasFilters} onResetFilters={resetFilters} />
  }    <Table>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


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


  return (


              {flag.gpt_explanation || (
                <span className="text-muted-foreground text-xs">Not analyzed</span>
    <Table>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
              <Badge variant="outline">{flag && flag.content_type}</Badge>;                <span className="text-muted-foreground text-xs">Not analyzed</span>;
=======

            </TableCell>;"
            <TableCell className="max-w-xs truncate">{flag && flag.reason}</TableCell>;"
            <TableCell className="max-w-xs truncate">;
              {flag && flag.gpt_explanation || (;


"
                <span className="text-muted-foreground text-xs">Not analyzed</span>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
              <Badge variant="outline">{flag && flag.content_type}</Badge>;
            </TableCell>;
            <TableCell className="max-w-xs truncate">{flag && flag.reason}</TableCell>;
            <TableCell className="max-w-xs truncate">;
              {flag && flag.gpt_explanation || (;
                <span className="text-muted-foreground text-xs">Not analyzed</span>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              )}
            </TableCell>;
            <TableCell>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              {new Date(flag && flag.timestamp).toLocaleDateString()} {new Date(flag && flag.timestamp).toLocaleTimeString()}
            </TableCell>;
            <TableCell>;
              <Badgevariant={'
                flag && flag.status === 'pending''
                  ? 'secondary''
                  : flag && flag.status === 'actioned''
                  ? 'destructive''
                  : flag && flag.status === 'ignored''
                  ? 'outline''
                  : 'default'
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}


              }>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
}

              }>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                {flag && flag.status}
              </Badge>;
            </TableCell>;
            <TableCell>;
              <ActionButtons;
                flagId={flag && flag.id} 
                status={flag && flag.status} 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                onAction={onAction} 

=======
                onAction={onAction} 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              />;
            </TableCell>;
          </TableRow>;
        ))}
      </TableBody>;
    </Table>;
<<<<<<< HEAD



      </TableBody>;
    </Table>;
  );
};'
import React from './react';'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';'
import { Badge } from '@/components / ui / badge';'
import { FraudFlag } from '@/types / fraud';'
import { SeverityDisplay } from './SeverityDisplay';'
import { ActionButtons } from './ActionButtons';'
import { EmptyFraudState } from './EmptyFraudState';
interface FraudFlagsTableProps {}
  flags: FraudFlag[],
  is_loading: boolean,
  has_filters: boolean,
  reset_filters: () => void,'
  on_action: (flag_id: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void;
}
export const FraudFlagsTable: React.FC < FraudFlagsTableProps> = ({};
=======
  );
      </TableBody>;
    </Table>;
  );
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  flags;
  is_loading;
  has_filters;
  reset_filters,
  on_action;
<<<<<<< HEAD
}) => {}
  // Check condition;
if ( {) {}
  $2;
}
    return ("
      <div className="flex justify - center items - center h - 64">;"
        <div className="animate - spin rounded - full h - 12 w - 12 border - b-2 border - zion - purple"></div>;
      </div>);
  }
  // Check condition;
if ( {) {}
  $2;
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
            </TableCell>;"
            <TableCell className="font - medium">;
              {flag.user_email || flag.user_id.substring (0, 8)}
            </TableCell>;"
            <TableCell className="max - w-xs truncate">;
              {flag.content_excerpt}
            </TableCell>;
            <TableCell>;"
              <Badge variant="outline">{flag.content_type}</Badge>;
            </TableCell>;"
            <TableCell className="max - w-xs truncate">{flag.reason}</TableCell>;"
            <TableCell className="max - w-xs truncate">;
              {flag.gpt_explanation || ("
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                <span className="text - muted - foreground text - xs">Not analyzed</span>)}
            </TableCell>;
            <TableCell>;
              {new Date (flag.timestamp).toLocaleDateString ()} {new Date (flag.timestamp).toLocaleTimeString ()}
            </TableCell>;
            <TableCell>;
<<<<<<< HEAD
              <Badge variant={'
                flag.status === 'pending';'
                  ? 'secondary';'
                  : flag.status === 'actioned';'
                  ? 'destructive';'
                  : flag.status === 'ignored';'
                  ? 'outline';'
=======
              <Badge variant={
                flag.status === 'pending';
                  ? 'secondary';
                  : flag.status === 'actioned';
                  ? 'destructive';
                  : flag.status === 'ignored';
                  ? 'outline';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
    </Table>);
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
    </Table>);
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              }>
                {flag.status}
              </Badge>
            </TableCell>
            <TableCell>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <ActionButtons
                flagId={flag.id}
                status={flag.status}
                onAction={onAction}
              />
            </TableCell>
          </TableRow>
        ))}
<<<<<<< HEAD

<<<<<<< HEAD
};
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
      </TableBody>
    </Table>
  )
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      </TableBody>;
    </Table>;
  );
};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                onAction={onAction} 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                onAction={onAction} 
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
