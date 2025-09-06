import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
import { ShieldAlert } from 'lucide-react'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton'
import { Button } from '@/components/ui/button'
interface ProjectActionsProps {
  projectId: string
  isUnderDispute: boolean
  disputeId?: string
  isTalent: boolean
  onAddMilestone: () => void

import React from 'react';
import { Button  } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react'
import { RaiseDisputeButton } from '@/components/disputes/RaiseDisputeButton';
interface ProjectActionsProps {
  projectId: string;
  isUnderDispute: boolean;
  disputeId?: string;
  isTalent: boolean;
  onAddMilestone: () => void
export function ProjectActions({

  projectId
  isUnderDispute
  disputeId
  isTalent

xport function ProjectActions({
  projectId,
  isUnderDispute,
  disputeId,
  isTalent,
        <RaiseDisputeButton projectId={projectId} variant='outline' />            <ShieldAlert className="h-4 w-4 mr-2" />
      )}

import React from 'react';
import {Button} from '@/components / ui / button';
import Link from 'next / link';
import { ShieldAlert } from 'lucide-react';
import { RaiseDisputeButton } from '@/components / disputes / RaiseDisputeButton';
import { Button } from '@/components / ui / button';
interface ProjectActionsProps {
  project_id: string;
  isUnderDispute: boolean;
  dispute_id?: string;
  is_talent: boolean;
  onAddMilestone: () => void;
export /**
 * ProjectActions - Function description
 */
function ProjectActions() {
  return (
    <div className='flex gap - 2'>;
      {isUnderDispute && dispute_id ? (
        <Button variant='outline' as_child>;
          <Link href={`/dashboard / disputes/${dispute_id}`}>;
            <ShieldAlert className='h - 4 w - 4 mr - 2' />            View Active Dispute;
          </Link>;
        </Button>) : (
        <RaiseDisputeButton project_id={project_id} variant='outline' />            <ShieldAlert className="h - 4 w - 4 mr - 2" />;
            View Active Dispute;
          </Link>;
        </Button>) : (
        <RaiseDisputeButton project_id={project_id} variant='outline' />;
      {is_talent && !isUnderDispute && (
        <Button on_click={onAddMilestone}>Add Milestone</Button>)}
    </div>);
}
      )}
      {is_talent && !isUnderDispute && (
        <Button on_click={onAddMilestone}>;
          Add Milestone;
        </Button>)}
    </div>);
}
;
