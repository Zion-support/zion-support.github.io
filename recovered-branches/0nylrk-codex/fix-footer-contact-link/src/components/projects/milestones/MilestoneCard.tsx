id: string
  projectId: string
  title: string
  description?: string;
  amount: number
  status: string
  dueDate?: string;
  onApprove?: (id: string) => Promise<void>

<<<<<<< HEAD


=======

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


>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {format} from 'date-fns';
import {Check, ArrowDown, X} from "lucide-react";
import {useDisputeCheck} from '@/hooks/useDisputeCheck';
import {DisputeStatusBadge} from '@/components/disputes/DisputeStatusBadge';
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
<<<<<<< HEAD


=======

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


import React from 'react',;
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Badge } from "@/components/ui/badge",;
import { Button } from "@/components/ui/button",;
import { format } from 'date-fns',;
import { Check, ArrowDown, X } from "lucide-react",;
import { useDisputeCheck } from '@/hooks/useDisputeCheck',;
import { DisputeStatusBadge } from '@/components/disputes/DisputeStatusBadge',;
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;


>>>>>>> origin/cursor/delete-old-data-records-6bba
interface MilestoneCardProps {;

  id: string,;
  projectId: string,;
  title: string,;


<<<<<<< HEAD
=======
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


>>>>>>> origin/cursor/delete-old-data-records-6bba
  title, ;
  description, ;
  amount, ;
  status, ;
<<<<<<< HEAD
=======

        return 'bg-green-500';
      case 'in_progress':;
        return 'bg-blue-500';
      case 'pending':;
        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
      default: return 'bg-gray-500';

    }
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

    }

<<<<<<< HEAD
        return 'bg-green-500';
      case 'in_progress':;
        return 'bg-blue-500';
=======
  }
      }
  }

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
>>>>>>> origin/cursor/delete-old-data-records-6bba

      case 'pending':;
                Due:{format(new Date(dueDate), 'MMM d, yyyy')}
              </p>;
            )}
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

        return 'bg-yellow-500';
      case 'rejected':;
        return 'bg-red-500';
      default: return 'bg-gray-500';

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  }

    }

  }
      }
  }

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

          )}
        </div>
      </CardFooter>
    </Card>
  )
}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>;
          <div className="flex gap-2">;
            <Badge variant="outline" className={`capitalize ${getStatusBadgeColor()} text-white`}>;

              {status.replace('_ ')}
            </Badge>;
            {isUnderDispute && disputeStatus && (;
              <DisputeStatusBadge status={disputeStatus} />;
            )}
          </div>;
        </div>;

<<<<<<< HEAD
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
              projectId={projectId} ;
              milestoneId={id} ;
              variant="ghost";
              size="sm";
            />;
          )}
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <Check className="h-4 w-4 mr-1" /> Approve;
            </Button>;
          )}
<<<<<<< HEAD



=======
          ;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          {isUnderDispute && (;

            <Button variant="outline" size="sm" disabled>;
              Actions frozen due to dispute;
            </Button>;
          )}
        </div>;
      </CardFooter>;
    </Card>;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import {format} from 'date - fns';
import { Check, ArrowDown, X } from './lucide-react';
import {useDisputeCheck} from '@/hooks / useDisputeCheck';
import {DisputeStatusBadge} from '@/components / disputes / DisputeStatusBadge';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

            )});
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
});
}

<<<<<<< HEAD



=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
