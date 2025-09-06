
import React from 'react';
import { Button  } from '@/components/ui/button';
import { Link  } from 'react-router-dom';
import { ShieldAlert } from "lucide-react";
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {

  projectId: string
  isUnderDispute: boolean
  disputeId?: string;
  isTalent: boolean

import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ShieldAlert} from "lucide-react";
import {RaiseDisputeButton} from '@/components/disputes/RaiseDisputeButton';
import React from 'react',
import { Button } from '@/components/ui/button',
import { Link } from 'react-router-dom',
import { ShieldAlert } from "lucide-react",
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton',
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface ProjectActionsProps {
  projectId: string,
  isUnderDispute: boolean,
  disputeId?: string,
  isTalent: boolean,

  onAddMilestone
}: ProjectActionsProps) {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

        <RaiseDisputeButton
          projectId={projectId}
          variant="outline"
        />;
=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
