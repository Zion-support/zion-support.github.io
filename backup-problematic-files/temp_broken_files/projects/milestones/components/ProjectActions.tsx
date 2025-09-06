
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/ProjectActions.tsx
=======
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { Link } from 'react-router-dom',;
import { ShieldAlert } from "lucide-react",;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from 'react',;
import { Button } from '@/components/ui/button',;
import Link from 'next/link',;
import { ShieldAlert } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/projects/milestones/components/ProjectActions.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/ProjectActions.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;
          <Link to={`/dashboard/disputes/${disputeId}`}>;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <div className="flex gap-2">;
      {isUnderDispute && disputeId ? (;
        <Button variant="outline" asChild>;
          <Link href={`/dashboard/disputes/${disputeId}`}>;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/projects/milestones/components/ProjectActions.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <ShieldAlert className="h-4 w-4 mr-2" />;
            View Active Dispute;
          </Link>;
        </Button>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/ProjectActions.tsx

=======
      ) :(;
        <RaiseDisputeButton ;
          projectId={projectId}
          variant="outline";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        />;
      )}
      {isTalent && !isUnderDispute && (;
        <Button onClick={onAddMilestone}>;
          Add Milestone;
        </Button>;
      )}
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/projects/milestones/components/ProjectActions.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  ),;}
 {;
  isUnderDispute && disputeId ? (<Button variant="outline" asChild> <Link href= {;
  `/dashboard/disputes/$ {;
  disputeId ;"}` ";"}> <ShieldAlert className="h-4 w-4 mr-2" /> View Active Dispute </Link> </Button>) : (<RaiseDisputeButton />) ;
}{;
  isTalent && !isUnderDispute && (<Button onClick={;
  onAddMilestone ;
}> Add Milestone </Button>) ;
:temp_broken_files/projects/milestones/components/ProjectActions.tsx
}</div>) ;"}"
}</div>) ;
}"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/projects/milestones/components/ProjectActions.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/projects/milestones/components/ProjectActions.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
