




import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



interface ProjectActionsProps {
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,

  onAddMilestone: () => void
}


export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,


  onAddMilestone
}: ProjectActionsProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (


        <RaiseDisputeButton
          projectId={projectId}
          variant="outline"

        />;





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



      )}
      {isTalent && !isUnderDispute && (
        <Button onClick={onAddMilestone}>
          Add Milestone
        </Button>
      )}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    </div>
  )
}


