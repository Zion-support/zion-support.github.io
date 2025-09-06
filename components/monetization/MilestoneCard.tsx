import React, { useState } from 'react';
import { Milestone } from '../../utils/types/milestones';


type Props = {
  milestone: Milestone;
  projectId: string;
  role: 'client' | 'talent' | 'admin';
  onAction: (
    action: 'in_progress' | 'submitted' | 'approved' | 'paid'
    milestoneId: string
  ) => Promise<void> | void;
}
const statusSteps = [
  'Pending'
  'In Progress'
  'Submitted'
  'Approved'
  'Paid'
] as const;
export default function MilestoneCard({

  milestone,
  projectId,
  role,
  onAction,
}: Props) {;

  const [expanded, setExpanded] = useState(false);
  const currentIndex = statusSteps.findIndex(s => s === milestone.status);
  const canClientMarkInProgress =
    role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit =
    (role === 'talent' |role === 'admin') &&
    milestone.status === 'In Progress';
  const canClientApprove =
    role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid =
    role !== 'talent' && milestone.status === 'Approved';
  return (
    <div className='border rounded-lg p-4 bg-white shadow-sm'>
      <div className='flex items-start justify-between'>
        <div>
          <h3 className='text-lg font-semibold'>{milestone.title}</h3>
          <p className='text-sm text-gray-600'>
            Due: {new Date(milestone.dueDate).toLocaleDateString()}
          </p>
        </div>
        <button
          className='text-sm text-blue-600'
          onClick={() => setExpanded(v => !v)}
        >          {expanded ? 'Hide' : 'Details'}
        </button>
      </div>
      <div className='mt-3'>
        <div className='flex items-center gap-2'>type Props = {
  milestone: Milestone
  projectId: string
  role: 'client' | 'talent' | 'admin'
  onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestoneId: string) => Promise<void> | void
}
const statusSteps = ['PendingIn ProgressSubmittedApprovedPaid'] as const;


export default function MilestoneCard({ milestone, projectId, role, onAction }: Props) {;

  const [expanded, setExpanded] = useState(false);
  const currentIndex = statusSteps.findIndex((s) => s === milestone.status);
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' |role === 'admin') && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{milestone.title}</h3>
          <p className="text-sm text-gray-600">Due: {new Date(milestone.dueDate).toLocaleDateString()}</p>
        </div>
        <button className="text-sm text-blue-600" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Hide' : 'Details'}
        </button>
      </div>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              )}
            </div>
          ))}
        </div>
        <div className='mt-2 text-xs text-gray-700'>
          Status: {milestone.status}
        </div>
      </div>
      {expanded && (
        <div className='mt-4 space-y-2 text-sm text-gray-800'>          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>        <div className="mt-2 text-xs text-gray-700">Status: {milestone.status}</div>
      </div>
      {expanded && (
        <div className="mt-4 space-y-2 text-sm text-gray-800">
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>


                      {a.label || a.url}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}


          >
            Mark In Progress
          </button>
        )}
        {canTalentSubmit && (
          <button

            className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'            onClick={() => onAction('submitted', milestone.id)}

            onClick={() => onAction('submitted', milestone.id)}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
          <button

            className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'            onClick={() => onAction('approved', milestone.id)}

            onClick={() => onAction('approved', milestone.id)}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button

            className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'            onClick={() => onAction('paid', milestone.id)}

            onClick={() => onAction('paid', milestone.id)}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>

  );

=======
}

}
}
}
}
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}