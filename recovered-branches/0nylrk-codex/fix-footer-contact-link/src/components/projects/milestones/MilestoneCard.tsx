<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD




<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react',
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
=======

import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {format} from 'date-fns';
import {Check, ArrowDown, X} from "lucide-react";
import {useDisputeCheck} from '@/hooks/useDisputeCheck';
import {DisputeStatusBadge} from '@/components/disputes/DisputeStatusBadge';
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
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
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
<<<<<<< HEAD
  onReject?: (id: string) => Promise<void>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { format } from 'date-fns',;
import { Check, ArrowDown, X } from "lucide-react",;
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======

=======



interface MilestoneCardProps {;
  id: string,;
  projectId: string,;
  title: string,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title, ;
  description, ;
  amount, ;
  status, ;
<<<<<<< HEAD
<<<<<<< HEAD
=======

  dueDate;
  onApprove;
  onReject;
}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);


  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

    }
  }
<<<<<<< HEAD
=======


  dueDate;
  onApprove;
  onReject;
}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id);


'
        return 'bg-green-500';'
      case 'in_progress':;'
        return 'bg-blue-500';'
      case 'pending':;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    }
  }



<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    }
  }
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

=======

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

                Due:{format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
        </div>
        <div className="flex gap-2">
          {status === 'pending' && onReject && !isUnderDispute && (
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>
              <X className="h-4 w-4 mr-1" /> Reject
            </Button>
=======

=======


=======
=======
  return (
  dueDate,;
  onApprove,;
  onReject;
} MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id),;
  ;
  description?: string,;
  amount: number,;
  status: string,;
  dueDate?: string,;
  onApprove?: (id: string) => Promise<void>,;
  onReject?: (id: string) => Promise<void>;
}
;
export function MilestoneCard({;
  id,;
  projectId,;
  title,;
  description,;
  amount,;
  status,;
  dueDate,;
  onApprove,;
  onReject;
}: MilestoneCardProps) {;
  const { isUnderDispute, disputeStatus } = useDisputeCheck(projectId, id),;
  function getStatusBadgeColor() {;
    switch (status) {;
      case 'completed':;
        return 'bg-green-500',;
      case 'in_progress':;
        return 'bg-blue-500',;
      case 'pending':;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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


<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;
=======

          </div>;"
          <div className="flex gap-2">;"`
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
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
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

        </div>;

=======
        </div>;
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;
      ;
      <CardFooter className="pt-2 flex justify-between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (;
            <RaiseDisputeButton ;
=======
      </CardHeader>;
      <CardContent className="pb-2">;
        {description && (;
          <p className="text-muted-foreground">{description}</p>;
        )}
        <div className="mt-4">;
          <p className="text-xl font-bold">${amount.toFixed(2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="pt-2 flex justify-between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (;
            <RaiseDisputeButton;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              projectId={projectId} ;
              milestoneId={id} ;
              variant="ghost";
              size="sm";
            />;
          )}
<<<<<<< HEAD
        </div>;
        ;
        </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="flex gap-2">;
          {status === 'pending' && onReject && !isUnderDispute && (;
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;
=======
"
        <div className="flex gap-2">;'
          {status === 'pending' && onReject && !isUnderDispute && (;"
            <Button variant="outline" size="sm" onClick={() => onReject(id)}>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
          ;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  );



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


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
<<<<<<< HEAD
  /**
 * getStatusBadgeColor - Function description
 */
function getStatusBadgeColor() {
    switch (status) {
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
      <CardHeader className="pb - 2">;
        <div className="flex justify - between items - start">;
          <div>;
            <CardTitle className="text - xl">{title}</CardTitle>;
            {due_date && (
              <p className="text - sm text - muted - foreground">;
                Due: {format (new Date (due_date), 'MMM d, yyyy')}
              </p>)}
          </div>;
          <div className="flex gap - 2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor ()} text - white`}>;
              {status.replace ('_ ')}
            </Badge>;
            {isUnderDispute && dispute_status && (
              <DisputeStatusBadge status={dispute_status} />)}
          </div>;
        </div>;
      </CardHeader>;
      <CardContent className="pb - 2">;
        {description && (
          <p className="text - muted - foreground">{description}</p>)}
        <div className="mt - 4">;
          <p className="text - xl font - bold">${amount.to_fixed (2)}</p>;
        </div>;
      </CardContent>;
      <CardFooter className="pt - 2 flex justify - between">;
        <div>;
          {status !== 'completed' && status !== 'rejected' && (
            <RaiseDisputeButton;
              project_id={project_id}
              milestone_id={id}
              variant="ghost";
              size="sm";
            />)}
        </div>;
        <div className="flex gap - 2">;
          {status === 'pending' && on_reject && !isUnderDispute && (
            <Button variant="outline" size="sm" on_click={() => on_reject (id)}>;
              <X className="h - 4 w - 4 mr - 1" /> Reject;
            </Button>)}
          {status === 'pending' && on_approve && !isUnderDispute && (
            <Button variant="default" size="sm" on_click={() => on_approve (id)}>;
              <Check className="h - 4 w - 4 mr - 1" /> Approve;
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  ),;}
 interface MilestoneCardProps {
  id: string;
projectId: string;
title: string;
description?: string;
amount: number;
status: string;
dueDate?: string;
onApprove?: (id: string) => Promise<void>;
onReject?: (id: string) => Promise<void> 
}export function MilestoneCard ({
  id;
projectId;
title;
description;
amount;
status;
dueDate;
onApprove;
onReject 
}: MilestoneCardProps) {
  const {
  isUnderDispute, disputeStatus 
}= useDisputeCheck (projectId, id);
switch (status) {
  case 'completed': return 'bg-green-500';
case 'in progress': return 'bg-blue-500';
case 'pending': return 'bg-yellow-500';
case 'rejected': 
}return (<Card> <CardHeader className="pb-2" > <div className="flex justify-between items-start" > <div> </p>) 
}</div> isUnderDispute && disputeStatus && (<DisputeStatusBadge status= {
  disputeStatus 
}/>) 
}</div> </div> </CardHeader> </div> </CardContent> <CardFooter className="pt-2 flex justify-between" > <div> {
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
