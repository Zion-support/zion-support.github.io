


  projectId: string;,
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
import {Button} from '@/components/ui/button';''
import {Link} from 'react-router-dom';''
import {ShieldAlert} from "lucide-react";""
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';''
import React from 'react',''
import { Button } from '@/components/ui/button',''
import { Link } from 'react-router-dom',''
import { ShieldAlert } from "lucide-react",""
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton','
interface ProjectActionsProps {
  // TODO: Implement
}
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,
  onAddMilestone: () => void;
}

export function ProjectActions({;
  projectId;
  isUnderDispute;
  disputeId;
  isTalent;
export function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,


  onAddMilestone;)
}: ProjectActionsProps) {
  return (

  return (

  onAddMilestone;)
}: ProjectActionsProps) {
  return ('
    <div className="flex gap-2">"
</div>"
        <Button variant="outline" asChild>"
</Button>
          <Link to={`/dashboard/disputes/${disputeId}`}>
</Link>"
            <ShieldAlert className="h-4 w-4 mr-2" />"
</ShieldAlert>
          </Link>
        </Button>
        <RaiseDisputeButton;
          projectId={projectId}"
          variant="outline""
        />
</RaiseDisputeButton>"
    <div className="flex gap-2">;"
</div>"
        <Button variant="outline" asChild>;"
</Button>
          <Link to={`/dashboard/disputes/${disputeId}`}>;
</Link>"
            <ShieldAlert className="h-4 w-4 mr-2" />;"
</ShieldAlert>
          </Link>;
        </Button>;
        <RaiseDisputeButton;
          projectId={projectId}"
          variant="outline"")
      ) :(;
        <RaiseDisputeButton ;
          projectId={projectId}"
          variant="outline";"
        />;
</RaiseDisputeButton>
        <Button onClick={onAddMilestone}>
</Button>
        </Button>
    </div>
    </div>;"
    <div className="flex gap - 2">;"
</div>"
        <Button variant="outline" as_child>;"
</Button>
          <Link to={`/dashboard / disputes/${dispute_id}`}>;
</Link>"
            <ShieldAlert className="h - 4 w - 4 mr - 2" />;"
</ShieldAlert>
          </Link>;)
        </Button>) : (
        <RaiseDisputeButton;
          project_id={project_id}"
          variant="outline";"
        />;
</RaiseDisputeButton>
        <Button onClick={onAddMilestone}>;
</Button>)
        </Button>)}
    </div>);
    </div>;"
  return (<div className="flex gap-2" > isUnderDispute && disputeId ? (<Button variant="outline" asChild> <Link to= {"
</div>)"
}> <ShieldAlert className="h-4 w-4 mr-2" /> View Active Dispute </Link> </Button>) : (<RaiseDisputeButton />)"
</ShieldAlert>
  isTalent && !isUnderDispute && (<Button onClick= {
  onAddMilestone;)
}> Add Milestone </Button>) 
}</div>) 
    </div>"

