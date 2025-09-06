
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
import { Milestone } from '../../utils/types/milestones';

type Props = {
  milestone: Milestone;
  project_id: string;
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

  const [expanded, setExpanded] = useState(false);
  const currentIndex = statusSteps.findIndex(s => s === milestone.status);
  const canClientMarkInProgress =
    role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit =
    (role === 'talent' |role === 'admin') &&
  on_action: (
    action: 'in_progress' | 'submitted' | 'approved' | 'paid',
    milestone_id: string) => Promise < void> | void;
}
;
const status_steps = [;
  'Pending',
  'In Progress',
  'Submitted',
  'Approved',
  'Paid',
] as const;
;
export default /**
 * MilestoneCard - Function description
 */
function MilestoneCard() {
  const [expanded, set_expanded] = useState (false);
;
  const current_index = status_steps.find_index (string => string === milestone.status);
;
  const canClientMarkInProgress =;
    role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit =;
    (role === 'talent' || role === 'admin') &&;
    milestone.status === 'In Progress';
  const canClientApprove =;
    role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid =;
    role !== 'talent' && milestone.status === 'Approved';

  onAction: (;
    action: 'in_progress' | 'submitted' | 'approved' | 'paid',;
    milestoneId: string;
  ) => Promise<void> | void;
};

const statusSteps = [;
  'Pending',;
  'In Progress',;
  'Submitted',;
  'Approved',;
  'Paid',;
] as const;

export default function MilestoneCard(): any ({;
  milestone,;
  projectId,;
  role,;
  onAction,;
}: Props) {;
  const [expanded, setExpanded] = useState(false);

  const currentIndex = statusSteps && statusSteps.findIndex(s => s === milestone && milestone.status);

  const canClientMarkInProgress =;
    role !== 'talent' && milestone && milestone.status === 'Pending';
  const canTalentSubmit =;
    (role === 'talent' || role === 'admin') &&;
    milestone && milestone.status === 'In Progress';
  const canClientApprove =;
    role !== 'talent' && milestone && milestone.status === 'Submitted';
  const canClientMarkPaid =;
    role !== 'talent' && milestone && milestone.status === 'Approved';


  return (
    <div className='border rounded-lg p-4 bg-white shadow-sm'>;
      <div className='flex items-start justify-between'>;
        <div>;
          <h3 className='text-lg font-semibold'>{milestone && milestone.title}</h3>;
          <p className='text-sm text-gray-600'>;
            Due: {new Date(milestone && milestone.dueDate).toLocaleDateString()}
          </p>;
        </div>;
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

  const [expanded, setExpanded] = useState(false);
  const currentIndex = statusSteps.findIndex((s) => s === milestone.status);
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' |role === 'admin') && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';
        </button>;
      </div>;

      <div className='mt-3'>;
        <div className='flex items-center gap-2'>type Props = {;
  milestone: Milestone,;
  projectId: string,;
  role: 'client' | 'talent' | 'admin',;
  onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestoneId: string) => Promise<void> | void;
};

const statusSteps = ['PendingIn ProgressSubmittedApprovedPaid'] as const;

export default function MilestoneCard(): any ({ milestone, projectId, role, onAction }: Props) {;
  const [expanded, setExpanded] = useState(false);

  const currentIndex = statusSteps && statusSteps.findIndex((s) => s === milestone && milestone.status);

  const canClientMarkInProgress = role !== 'talent' && milestone && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone && milestone.status === 'Submitted';
  const canClientMarkPaid = role !== 'talent' && milestone && milestone.status === 'Approved';

  return (


          {expanded ? 'Hide' : 'Details'}
        </button>
      </div>

                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (

              )}
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-gray-700">Status: {milestone.status}</div>

      </div>
      {expanded && (
        <div className="mt-4 space-y-2 text-sm text-gray-800">

        </div>;
        <div className='mt-2 text-xs text-gray-700'>;
          Status: {milestone && milestone.status}
        </div>;
      </div>;

      {expanded && (;
        <div className='mt-4 space-y-2 text-sm text-gray-800'>          {milestone && milestone.description && <p>{milestone && milestone.description}</p>}
          <div>Amount: ${milestone && milestone.amountUsd.toFixed(2)}</div>;
          {milestone && milestone.attachments && milestone && milestone.attachments.length > 0 && (;
            <div>        <div className="mt-2 text-xs text-gray-700">Status: {milestone && milestone.status}</div>;
      </div>;

      {expanded && (;
        <div className="mt-4 space-y-2 text-sm text-gray-800">;
          <div>Amount: ${milestone && milestone.amountUsd.toFixed(2)}</div>;
          {milestone && milestone.attachments && milestone && milestone.attachments.length > 0 && (;
            <div>;
              <div className='font-medium'>Attachments</div>;
              <ul className='list-disc ml-5'>;
                {milestone && milestone.attachments.map(a => (;
                  <li key={a && a.id}>;

                    <a
                      className='text-blue-600 underline'
                      href={a && a.url}
                      target='_blank'

          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>

                    </a>
                  </li>
                      rel='noreferrer'>                      {a && a.label || a && a.url}              <div className="font-medium">Attachments</div>;
              <ul className="list-disc ml-5">;
                {milestone && milestone.attachments.map((a) => (;
                  <li key={a && a.id}>;
                    <a className="text-blue-600 underline" href={a && a.url} target="_blank" rel="noreferrer">;
                    </a>;
                  </li>;


                ))}
              </ul>
            </div>
          )}
        </div>
      )}

            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"

            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}

            onClick={() => onAction('in_progress', milestone.id)}

          >
            Mark In Progress
          </button>
        )}
        {canTalentSubmit && (;
          <button

          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
          <button

          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button

          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>

}

}
}
}
}

  );

}
