
import React from 'react',;
import { Button } from '@/components/ui/button',;
import Link from 'next/link',;
import { ShieldAlert } from 'lucide-react';
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
export function ProjectActions({;
  projectId,;
  isUnderDispute,;
  disputeId,;
  isTalent,;
  onAddMilestone;
} ProjectActionsProps) {;
  return (;
<<<<<<< HEAD
    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;
          <Link to={`/dashboard/disputes/${disputeId}`}>;
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;
          <Link href={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className="h-4 w-4 mr-2" />;
            View Active Dispute;
          </Link>;
        </Button>;
<<<<<<< HEAD
=======
      ) :(;
        <RaiseDisputeButton ;
          projectId={projectId}
          variant="outline";
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
        />;
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
    </div>;
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
:temp_broken_files/projects/milestones/components/ProjectActions.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/projects/milestones/components/ProjectActions.tsx
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
