import React from 'react';
import { Button  } from '@/components/ui/button';
import { Link  } from 'react-router-dom';
import { ShieldAlert } from "lucide-react";
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {


}
    </div>;
  ),;}
 interface ProjectActionsProps {
  projectId: string;
isUnderDispute: boolean;
disputeId?: string;
isTalent: boolean;
onAddMilestone: () => void 
}export function ProjectActions ({


  projectId: string;,
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";""
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
import React from 'react',;
import { Button } from '@/components/ui/button',;
import { Link } from 'react-router-dom',;
import { ShieldAlert } from "lucide-react",""
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',;
interface ProjectActionsProps {
  // TODO: Implement
}
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,
  onAddMilestone: () => void;

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


    <div className="flex gap-2">"
</div>"
        <Button variant="outline" asChild>"

          <Link to={`/dashboard/disputes/${disputeId}`}>
"
            <ShieldAlert className="h-4 w-4 mr-2" />"

        <RaiseDisputeButton;
          projectId={projectId}"
          variant="outline""
        />
    <div className="flex gap-2">;"
        <Button variant="outline" asChild>;"
`;
          <Link to={`/dashboard/disputes/${disputeId}`}>;
            <ShieldAlert className="h-4 w-4 mr-2" />;"

          ;
          variant="outline"")
      ) :(;
        <RaiseDisputeButton ;
          variant="outline";"
        />;

        <Button onClick={onAddMilestone}>

    </div>
  )
}
    </div>;"
    <div className="flex gap - 2">;"
        <Button variant="outline" as_child>;"
          <Link to={`/dashboard / disputes/${dispute_id}`}>;
            <ShieldAlert className="h - 4 w - 4 mr - 2" />;"

          ;)
        ) : (
          project_id={project_id}"

        <Button onClick={onAddMilestone}>;
)
        )}
    </div>);
  return (<div className="flex gap-2" > isUnderDispute && disputeId ? (<Button variant="outline" asChild> <Link to= {"
</div>)"
}> <ShieldAlert className="h-4 w-4 mr-2" /> View Active Dispute  ) : (<RaiseDisputeButton />)"

  isTalent && !isUnderDispute && (<Button onClick= {
}> Add Milestone ) 
}</div>) 
    </div>"`;
pr-12325
    </div>"

