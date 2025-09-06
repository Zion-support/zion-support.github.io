=======

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
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';


type Props = {
  milestone: Milestone;
  project_id: string;
  role: 'client' | 'talent' | 'admin';


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

  const [expanded, setExpanded] = useState(false);
  const currentIndex = statusSteps.findIndex((s) => s === milestone.status);
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' |role === 'admin') && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (


          {expanded ? 'Hide' : 'Details'}
=======

        </button>;
      </div>;
      <div className='mt-3'>;
        <div className='flex items-center gap-2'>;
          {statusSteps && statusSteps.map((step, idx) => (;
            <div key={step} className='flex items-center'>;

              <div
  on_action: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestone_id: string) => Promise < void> | void;
}
;
const status_steps = ['PendingIn ProgressSubmittedApprovedPaid'] as const;
;
export default /**
 * MilestoneCard - Function description
 */
function MilestoneCard() {
  const [expanded, set_expanded] = useState (false);
;
  const current_index = status_steps.find_index ((s) => string === milestone.status);
;
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';
;
  return (
    <div className="border rounded - lg p - 4 bg - white shadow - sm">;
      <div className="flex items - start justify - between">;
        <div>;
          <h3 className="text - lg font - semibold">{milestone.title}</h3>;
          <p className="text - sm text - gray - 600">Due: {new Date (milestone.due_date).toLocaleDateString ()}</p>;
        </div>;
        <button className="text - sm text - blue - 600" on_click={() => set_expanded ((v) => !v)}>;
          {expanded ? 'Hide' : 'Details'}
        </button>;
      </div>;
      <div className='mt - 3'>;
        <div className='flex items - center gap - 2'>;
          {status_steps.map ((step, idx) => (
            <div key={step} className='flex items - center'>;
              <div;
                className={
                  'h - 2 w - 2 rounded - full ' +;
                  (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300')                }
                title={step}
              />;

              <div
              {idx < status_steps.length - 1 && (          {status_steps.map ((step, idx) => (
            <div key={step} className="flex items - center">;
              <div;
                className={
                  'h - 2 w - 2 rounded - full ' + (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300');
                }
                title={step}


                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              )}
            </div>;
          ))}

              />;
              {idx < status_steps.length - 1 && (
                <div;
                  className={
                    'h - 0.5 w - 8 ' +;
                    (idx < current_index ? 'bg - green - 600' : 'bg - gray - 300');
                  }
                />              )}
            </div>))}
        </div>                <div className={'h - 0.5 w - 8 ' + (idx < current_index ? 'bg - green - 600' : 'bg - gray - 300')} />)}
            </div>))}
        </div>;
        <div className='mt - 2 text - xs text - gray - 700'>;
          Status: {milestone.status}
        </div>;
      </div>;

      {expanded && (
        <div className='mt - 4 space - y-2 text - sm text - gray - 800'>          {milestone.description && <p>{milestone.description}</p>}
          <div > Amount: ${milestone.amount_usd.to_fixed (2)}</div>;
          {milestone.attachments && milestone.attachments.length > 0 && (

              />
              {idx < statusSteps.length - 1 && (
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (

              )}
            </div>
          ))}
        </div>
=======
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
              <div className="font-medium">Attachments</div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    </a>
                  </li>
                      rel='noreferrer'>                      {a && a.label || a && a.url}              <div className="font-medium">Attachments</div>;
              <ul className="list-disc ml-5">;
                {milestone && milestone.attachments.map((a) => (;
                  <li key={a && a.id}>;
                    <a className="text-blue-600 underline" href={a && a.url} target="_blank" rel="noreferrer">;
                    </a>;
                  </li>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                ))}
              </ul>;
            </div>;
          )}
        </div>;
      )}

            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"

          >
            Mark In Progress
          </button>
        )}
{canTalentSubmit && (;
          <button

        )}

          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
          <button

            onClick={() => onAction('approved', milestone.id)}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button

            onClick={() => onAction('paid', milestone.id)}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          >
            Mark as Paid
          </button>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}
      </div>
    </div>

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
