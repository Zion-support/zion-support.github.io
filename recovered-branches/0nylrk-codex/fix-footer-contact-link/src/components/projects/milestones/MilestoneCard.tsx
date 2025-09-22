<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

  id: string
  projectId: string
  title: string
  description?: string;
  amount: number
  status: string
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>

<<<<<<< HEAD
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { format  } from 'date-fns';
import { Check, ArrowDown, X } from "lucide-react";
import { useDisputeCheck  } from '@/hooks/useDisputeCheck';
import { DisputeStatusBadge  } from '@/components/disputes/DisputeStatusBadge';
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface MilestoneCardProps {

  id: string
  projectId: string
  title: string
  description?: string;
  amount: number
  status: string
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>

  onReject?: (id: string) => Promise<void>
}
export function MilestoneCard({
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";"
import {Badge} from "@/components/ui/badge";"
import {Button} from "@/components/ui/button";'
import {format} from 'date-fns';"
import {Check, ArrowDown, X} from "lucide-react";'
import {useDisputeCheck} from '@/hooks/useDisputeCheck';'
import {DisputeStatusBadge} from '@/components/disputes/DisputeStatusBadge';'
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {format} from 'date-fns';
import {Check, ArrowDown, X} from "lucide-react";
import {useDisputeCheck} from '@/hooks/useDisputeCheck';
import {DisputeStatusBadge} from '@/components/disputes/DisputeStatusBadge';
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
import { Check, ArrowDown, X } from "lucide-react",
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
interface MilestoneCardProps {
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
}

export function MilestoneCard({ ;
  id;
  projectId;

  title
  description
  amount
  status

  dueDate;
  onApprove;
  onReject
}: MilestoneCardProps) {
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);
  function getStatusBadgeColor() {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'rejected':
        return 'bg-red-500';
      default: return 'bg-gray-500'
    }
  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button",
import { format } from 'date-fns',
import { Check, ArrowDown, X } from "lucide-react",
import { useDisputeCheck } from '@/hooks/useDisputeCheck',
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
interface MilestoneCardProps {
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
  onApprove?: (id: string) => Promise<void>,
  onReject?: (id: string) => Promise<void>
}

  id;
  projectId;

  title;
  description;
  amount;
  status;
  dueDate;
  onApprove;
  onReject;
}: MilestoneCardProps) {}
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);
  function getStatusBadgeColor() {}
    switch (status) {'
      case 'completed':'
        return 'bg-green-500';'
      case 'in_progress':'
        return 'bg-blue-500';'
      case 'pending':'
        return 'bg-yellow-500';'
      case 'rejected':'
        return 'bg-red-500';'
      default: return 'bg-gray-500'
    }
  }"
import { Button } from "@/components/ui/button",'
import { format } from 'date-fns',"
import { Check, ArrowDown, X } from "lucide-react",'
import { useDisputeCheck } from '@/hooks/useDisputeCheck','
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge','
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
interface MilestoneCardProps {}
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
  onApprove?: (id: string) => Promise<void>,
onReject?: (id: string) => Promise<void>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { format } from 'date-fns',;
import { Check, ArrowDown, X } from "lucide-react",;
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  onReject?: (id: string) => Promise<void>';
import React from 'react',;"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;"
import { Badge } from "@/components/ui/badge",;"
import { Button } from "@/components/ui/button",;'
import { format } from 'date-fns',;"
import { Check, ArrowDown, X } from "lucide-react",;'
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;'
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
interface MilestoneCardProps {;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: string,;
  projectId: string,;
  title: string,;

  description?: string;
  amount: number,;
  status: string,;
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}

export function MilestoneCard(): any ({ ;
  id;
  projectId;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  title, ;
  description, ;
  amount, ;
  status, ;
<<<<<<< HEAD
        return 'bg-green-500';
      case 'in_progress':;
        return 'bg-blue-500';
      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
      default: return 'bg-gray-500';
<<<<<<< HEAD
<<<<<<< HEAD

    }
  }
<<<<<<< HEAD

    }
  }

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
  }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
=======
    }
  }
      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
      }
  }
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify-between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;
              <p className="text-sm text-muted-foreground">;
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}
<<<<<<< HEAD
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
              {status && status.replace('_ ')}
            </Badge>;

            {isUnderDispute && disputeStatus && (;
              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
      </CardHeader>;

      <CardContent className="pb-2">;
        {description && (;
          <p className="text-muted-foreground">{description}</p>;
        )}
        <div className="mt-4">;
          <p className="text-xl font-bold">${amount && amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;

      <CardFooter className="pt-2 flex justify-between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (;
            <RaiseDisputeButton
              projectId={projectId} 
              milestoneId={id} 

              variant="ghost"
              size="sm"
            />;
          )}
</div>
        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>
                Due:{format(new Date(dueDate), 'MMM d, yyyy')}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </p>;
            )}
          </div>;"
          <div className="flex gap-2">;"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;'
              {status.replace('_ ')}
            </Badge>;
            ;
            {isUnderDispute && disputeStatus && (;
              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
      </CardHeader>;
      ;"
      <CardContent className="pb-2">;
        {description && (;"
          <p className="text-muted-foreground">{description}</p>;
        )}"
        <div className="mt-4">;"
              variant="ghost""
              size="sm"
            />;
          )}'
        return 'bg-yellow-500';'
      case 'rejected':;'
        return 'bg-red-500';'
      default: return 'bg-gray-500';
    }
  }

    }
  }
  return (
    <Card>;"
      <CardHeader className="pb-2">;"
        <div className="flex justify-between items-start">;
          <div>;"
            <CardTitle className="text-xl">{title}</CardTitle>;
            {dueDate && (;"
              <p className="text-sm text-muted-foreground">;'
                Due: {format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}"
              variant="ghost""
              size="sm"
            />;
          )}

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
=======
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              {status.replace('_ ')}
            </Badge>;
            {isUnderDispute && disputeStatus && (;
              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;
</CardHeader>;"
      <CardContent className="pb-2">;
        {description && (;"
          <p className="text-muted-foreground">{description}</p>;
        )}"
        <div className="mt-4">;"
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;"
      <CardFooter className="pt-2 flex justify-between">;
        <div>;'
          {status !== 'completed' && status !== 'rejected' && (;
            <RaiseDisputeButton;
              projectId={projectId} ;
              milestoneId={id} ;"
              variant="ghost";"
              size="sm";
            />;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          )}
<<<<<<< HEAD
          {status === 'pending' && onApprove && !isUnderDispute && (
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>
              <Check className="h-4 w-4 mr-1" /> Approve
            </Button>
          )}
          {isUnderDispute && (
            <Button variant="outline" size="sm" disabled>
              Actions frozen due to dispute
            </Button>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <div className="flex gap-2">;
          {status === 'pending' && onReject && !isUnderDispute && (;
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;
              <X className="h-4 w-4 mr-1" /> Reject;
            </Button>;
          )}
'
          {status === 'pending' && onApprove && !isUnderDispute && (;"
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;"
=======

        </div>;

        <div className="flex gap-2">;
          {status === 'pending' && onReject && !isUnderDispute && (;
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;
              <X className="h-4 w-4 mr-1" /> Reject;
            </Button>;
          )}

          {status === 'pending' && onApprove && !isUnderDispute && (;
            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Check className="h-4 w-4 mr-1" /> Approve;
            </Button>;
          )}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          {isUnderDispute && (;
=======

          {isUnderDispute && (;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>;
          )}
        </div>;
      </CardFooter>;
    </Card>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}'
import React from 'react';'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';'
import { Badge } from '@/components / ui / badge';'
import { Button } from '@/components / ui / button';'
import {format} from 'date - fns';'
import { Check, ArrowDown, X } from './lucide-react';'
import {useDisputeCheck} from '@/hooks / useDisputeCheck';'
import {DisputeStatusBadge} from '@/components / disputes / DisputeStatusBadge';'
import {RaiseDisputeButton} from '@/components / disputes / RaiseDisputeButton';
interface MilestoneCardProps {}
  id: string,
  project_id: string,
  title: string,
  description?: string;
  amount: number,
  status: string,
  due_date?: string;
  on_approve?: (id: string) => Promise < void>,
  on_reject?: (id: string) => Promise < void>;
}
export /**;
 * MilestoneCard - Function description;
 */
function MilestoneCard() {}
  const { isUnderDispute, dispute_status } = useDisputeCheck (project_id, id);
;
/**
 * getStatusBadgeColor - Function description
 */
function getStatusBadgeColor() {
    switch (status) {

import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Badge} from "@/components/ui/badge";""
import {Button} from "@/components/ui/button";""
import {format} from 'date-fns';
import {Check, ArrowDown, X} from "lucide-react";""
import {useDisputeCheck} from '@/hooks/useDisputeCheck';
import {DisputeStatusBadge} from '@/components/disputes/DisputeStatusBadge';
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
  id;
  projectId;

  title;
  description;
  amount;
  status;

  dueDate;
  onApprove;
  onReject;
}: MilestoneCardProps) {
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);

  function getStatusBadgeColor() {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'rejected':
        return 'bg-red-500';
      default: return 'bg-gray-500
    }
import { Button } from "@/components/ui/button",""
import { format } from 'date-fns',;
import { Check, ArrowDown, X } from "lucide-react",""
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
interface MilestoneCardProps {
  // TODO: Implement
  id: string,
  projectId: string,
  title: string,
  description?: string,
  amount: number,
  status: string,
  dueDate?: string,
  onApprove?: (id: string) => Promise<void>,
</void>
  onReject?: (id: string) => Promise<void>
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
    <Card>;

      <CardHeader className="pb-2">;"
"
        <div className="flex justify-between items-start">;"
</div>
          <div>;
</div>"
            <CardTitle className="text-xl">{title};""
              <p className="text-sm text-muted-foreground">;"
</p>
              </p>;
          </div>;"
          <div className="flex gap-2">;"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;"

            ;
              <DisputeStatusBadge status={disputeStatus} />;

          </div>;
      ;"
      <CardContent className="pb-2">;"
          <p className="text-muted-foreground">{description}</p>;""
        <div className="mt-4">;"
          <p className="text-xl font-bold">${amount && amount.toFixed(2)}</p>;"
      <CardFooter className="pt-2 flex justify-between">;"

            <RaiseDisputeButton;
              projectId={projectId} 
              milestoneId={id} 
              variant="ghost"""
              size="sm""
            />;

</div>"`;

          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;"

              projectId={projectId} ;
              milestoneId={id} ;"
              variant="ghost";""
              size="sm";"

            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;"
              <X className="h-4 w-4 mr-1" /> Reject;"

            <Button variant="default" size="sm" onClick={() => onApprove(id)}>;"
              <Check className="h-4 w-4 mr-1" /> Approve;"

            <Button variant="outline" size="sm" disabled>;"

  on_approve?: (id: string) => Promise < void>,
  on_reject?: (id: string) => Promise < void>;
export /**
 * MilestoneCard - Function description;
 */
function MilestoneCard() {
  const { isUnderDispute, dispute_status } = useDisputeCheck (project_id, id);
  /**
 * getStatusBadgeColor - Function description;
    switch (status) {"
pr-12325
      case 'completed':;
        return 'bg - green - 500';
      case 'in_progress':;
        return 'bg - blue - 500';
      case 'pending':;
        return 'bg - yellow - 500';
      case 'rejected':;
        return 'bg - red - 500';
      default: return 'bg - gray - 500';
    }
  }
  return (
    <Card>;
      <CardHeader className="pb-2">;
        <div className="flex justify - between items-start">;
          <div>;
            <CardTitle className="text-xl">{title}</CardTitle>;
            {due_date && (
              <p className="text - sm text - muted-foreground">;
                Due: {format (new Date (due_date), 'MMM d, yyyy')}
              </p>)}
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor ()} text - white`}>;
              {status.replace ('_ ')}
            </Badge>;
            {isUnderDispute && dispute_status && (
              <DisputeStatusBadge status={dispute_status} />)}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent className="pb-2">;
        {description && (
          <p className="text - muted-foreground">{description}</p>)}
        <div className="mt-4">;
          <p className="text - xl font-bold">${amount.to_fixed (2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="pt - 2 flex justify-between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton;
              project_id={project_id}
              milestone_id={id}
              variant="ghost";
              size="sm";
            />)}
        </div>;
        <div className="flex gap-2">;
          {status === 'pending' && on_reject && !isUnderDispute && (
            <Button variant="outline" size="sm" on_click={() => on_reject (id)}>;
              <X className="h - 4 w - 4 mr-1" /> Reject;
            </Button>)}
          {status === 'pending' && on_approve && !isUnderDispute && (
            <Button variant="default" size="sm" on_click={() => on_approve (id)}>;
              <Check className="h - 4 w - 4 mr-1" /> Approve;
            </Button>)}
          {isUnderDispute && (
            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>)}
        </div>;
      </CardFooter>;
    </Card>);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  ),;}
 interface MilestoneCardProps {
  id: string;
projectId: string;
title: string;
description?: string;
amount: number;
status: string;
dueDate?: string;
  return (

      <CardHeader className="pb - 2">;"
        <div className="flex justify - between items - start">;"
            <CardTitle className="text - xl">{title};""
              <p className="text - sm text - muted - foreground">;"
</p>)
              </p>)}
          <div className="flex gap - 2">;"
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor ()} text - white`}>;"

              <DisputeStatusBadge status={dispute_status} />)}

      <CardContent className="pb - 2">;"
          <p className="text - muted - foreground">{description}</p>)}""
        <div className="mt - 4">;"
          <p className="text - xl font - bold">${amount.to_fixed (2)}</p>;"
      <CardFooter className="pt - 2 flex justify - between">;"

              project_id={project_id}
              milestone_id={id}"
            />)}

            <Button variant="outline" size="sm" on_click={() => on_reject (id)}>;"
              <X className="h - 4 w - 4 mr - 1" /> Reject;"

            )}"
            <Button variant="default" size="sm" on_click={() => on_approve (id)}>;"
              <Check className="h - 4 w - 4 mr - 1" /> Approve;"

            )}
    );
onApprove?: (id: string) => Promise<void>;
</void>"
}return (<Card> <CardHeader className="pb-2" > <div className="flex justify-between items-start" > <div> </p>)"

}</div> isUnderDispute && disputeStatus && (<DisputeStatusBadge status= {
  disputeStatus;)
}/>) 
}</div> </div>  </div>  <CardFooter className="pt-2 flex justify-between" > <div> {"
  status !== 'completed' && status !== 'rejected' && (<RaiseDisputeButton projectId= {
  projectId 
}/>) 
}</div> Actions frozen due to dispute </Button>) 
}</div> </CardFooter> </Card>) 
}
  );
}
;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  projectId;)

}</div> Actions frozen due to dispute ) 
}</div>  ) `;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
