import React from 'react',;
import { Button } from '@/components/ui/button',;
import Link from 'next/link',;
import { ShieldAlert } from 'lucide-react';
<<<<<<< HEAD


import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;

;
interface ProjectActionsProps {;
  projectId: string;,;
  isUnderDispute: boolean;,;
  disputeId?:string,;
  isTalent: boolean;,;
  onAddMilestone:() => void;
}

=======
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
;
interface ProjectActionsProps {;
  projectId:string,;
  isUnderDispute:boolean,;
  disputeId?:string,;
  isTalent:boolean,;
  onAddMilestone:() => void;
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
export function ProjectActions({;
  projectId,;
  isUnderDispute,;
  disputeId,;
  isTalent,;
<<<<<<< HEAD

  onAddMilestone;)
} ProjectActionsProps) {;
  return (;


=======
  onAddMilestone;
} ProjectActionsProps) {;
  return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;
          <Link href={`/dashboard/disputes/${disputeId}`}>;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <ShieldAlert className="h-4 w-4 mr-2" />;
            View Active Dispute;
          </Link>;
        </Button>;
<<<<<<< HEAD


        />;

        <Button onClick={onAddMilestone}>;


=======
      ) :(;
        <RaiseDisputeButton ;
          projectId={projectId}
          variant="outline";
        />;
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
    </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  ),;}
 {;
  isUnderDispute && disputeId ? (<Button variant="outline" asChild> <Link href= {;
  `/dashboard/disputes/$ {;
  disputeId ;"}` ";"}> <ShieldAlert className="h-4 w-4 mr-2" /> View Active Dispute </Link> </Button>) : (<RaiseDisputeButton />) ;
}{;
  isTalent && !isUnderDispute && (<Button onClick={;
  onAddMilestone ;
}> Add Milestone </Button>) ;
<<<<<<< HEAD



=======
}</div>) ;"}"
>>>>>>> origin/cursor/delete-old-data-records-6bba
