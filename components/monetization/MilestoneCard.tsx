
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
<<<<<<< HEAD
import { Milestone } from '../../utils / types / milestones';
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type Props = {
  milestone: Milestone;
  project_id: string;
  role: 'client' | 'talent' | 'admin';
<<<<<<< HEAD
=======


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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className='border rounded-lg p-4 bg-white shadow-sm'>;
      <div className='flex items-start justify-between'>;
        <div>;
          <h3 className='text-lg font-semibold'>{milestone && milestone.title}</h3>;
          <p className='text-sm text-gray-600'>;
            Due: {new Date(milestone && milestone.dueDate).toLocaleDateString()}
          </p>;
        </div>;
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
  milestone
  projectId
  role
  onAction
}: Props) {
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

type Props = {
;
  return (
    <div className='border rounded - lg p - 4 bg - white shadow - sm'>;
      <div className='flex items - start justify - between'>;
        <div>;
          <h3 className='text - lg font - semibold'>{milestone.title}</h3>;
          <p className='text - sm text - gray - 600'>;
            Due: {new Date (milestone.due_date).toLocaleDateString ()}
          </p>;
        </div>;
        <button;
          className='text - sm text - blue - 600';
          on_click={() => set_expanded (v => !v)}
        >          {expanded ? 'Hide' : 'Details'}
        </button>;
      </div>;
      <div className='mt - 3'>;
        <div className='flex items - center gap - 2'>type Props = {
<<<<<<< HEAD
  milestone: Milestone,
  project_id: string,
  role: 'client' | 'talent' | 'admin',
=======

  milestone: Milestone,
  project_id: string,
  role: 'client' | 'talent' | 'admin',



export default function MilestoneCard({ milestone, projectId, role, onAction }: Props) {;


  const [expanded, setExpanded] = useState(false);
  const currentIndex = statusSteps.findIndex((s) => s === milestone.status);
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' |role === 'admin') && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD

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
export default function MilestoneCard({ milestone, projectId, role, onAction }: Props) {

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (


          {expanded ? 'Hide' : 'Details'}

        </button>;
      </div>;
      <div className='mt-3'>;
        <div className='flex items-center gap-2'>;
          {statusSteps && statusSteps.map((step, idx) => (;
            <div key={step} className='flex items-center'>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="mt-3">
        <div className="flex items-center gap-2">
          {statusSteps.map((step, idx) => (
            <div key={step} className="flex items-center">
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div
              {idx < status_steps.length - 1 && (          {status_steps.map ((step, idx) => (
            <div key={step} className="flex items - center">;
              <div;
                className={
                  'h - 2 w - 2 rounded - full ' + (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300');
                }
                title={step}
<<<<<<< HEAD
=======


                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {expanded && (
        <div className='mt - 4 space - y-2 text - sm text - gray - 800'>          {milestone.description && <p>{milestone.description}</p>}
          <div > Amount: ${milestone.amount_usd.to_fixed (2)}</div>;
          {milestone.attachments && milestone.attachments.length > 0 && (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              />
              {idx < statusSteps.length - 1 && (

  return (
    <div className=&quot;border rounded-lg p-4 bg-white shadow-sm&quot;>
      <div className=&quot;flex items-start justify-between&quot;>
        <div>
          <h3 className=&quot;text-lg font-semibold&quot;>{milestone.title}</h3>
          <p className=&quot;text-sm text-gray-600&quot;>Due: {new Date(milestone.dueDate).toLocaleDateString()}</p>
        </div>
        <button className=&quot;text-sm text-blue-600&quot; onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Hide' : 'Details'}
        </button>
      </div>

      <div className=&quot;mt-3&quot;>
        <div className=&quot;flex items-center gap-2&quot;>
          {statusSteps.map((step, idx) => (
            <div key={step} className=&quot;flex items-center&quot;>
              <div
                className={_'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')}
                title={_step}
              />
              {_idx < statusSteps.length - 1 && (

                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />
        </button>
      </div>
      <div className='mt-3'>
        <div className='flex items-center gap-2'>
          {statusSteps.map((step, idx) => (
            <div key={step} className='flex items-center'>
              <div
                className={
                  'h-2 w-2 rounded-full ' +
                  (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (          {statusSteps.map((step, idx) => (
            <div key={step} className="flex items-center">
              <div
                className={
                  'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')

                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
                <div
                  className={
                    'h-0.5 w-8 ' +
                    (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')
                  }
                />              )}
            </div>
          ))}
        </div>                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />

              )}
            </div>
          ))}
        </div>
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <a
                      className='text-blue-600 underline'
                      href={a && a.url}
                      target='_blank'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>
              <div className="font-medium">Attachments</div>

<<<<<<< HEAD
<div className="font-medium">Attachments</div>
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
              <div className='font-medium'>Attachments</div>
              <ul className='list-disc ml-5'>
                {milestone.attachments.map(a => (
                  <li key={a.id}>
                    <a
                      className='text-blue-600 underline'
                      href={a.url}
                      target='_blank'
                      rel='noreferrer'
                    >                      {a.label |a.url}              <div className="font-medium">Attachments</div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">
<<<<<<< HEAD
=======

                      {a.label || a.url}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                      {a.label || a.url}


<<<<<<< HEAD

                      {a.label || a.url}


                      {a.label || a.url}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </a>
                  </li>
                      rel='noreferrer'>                      {a && a.label || a && a.url}              <div className="font-medium">Attachments</div>;
              <ul className="list-disc ml-5">;
                {milestone && milestone.attachments.map((a) => (;
                  <li key={a && a.id}>;
                    <a className="text-blue-600 underline" href={a && a.url} target="_blank" rel="noreferrer">;
                    </a>;
                  </li>;
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                ))}
              </ul>;
            </div>;
          )}
        </div>;
      )}

<<<<<<< HEAD
=======

      <div className='mt-4 flex flex-wrap gap-2'>;
        {canClientMarkInProgress && (;

          <button
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone && milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">;
        {canClientMarkInProgress && (;
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700">;
            Mark In Progress;
          </button>;

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={() => onAction('in_progress', milestone.id)}
<<<<<<< HEAD
      <div className='mt-4 flex flex-wrap gap-2'>
        {canClientMarkInProgress && (
          <button
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"

      <div className='mt-4 flex flex-wrap gap-2'>
        {canClientMarkInProgress && (
          <button
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}

            onClick={() => onAction('in_progress', milestone.id)}
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          >
            Mark In Progress
          </button>
        )}
{canTalentSubmit && (;
          <button
<<<<<<< HEAD
        )}

            className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'            onClick={() => onAction('submitted', milestone.id)}            className="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onAction('submitted', milestone.id)}
            className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'            onClick={() => onAction('submitted', milestone.id)}

            onClick={() => onAction('submitted', milestone.id)}

=======

        )}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
          <button


            className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'            onClick={() => onAction('approved', milestone.id)}

            onClick={() => onAction('approved', milestone.id)}



<<<<<<< HEAD
className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
            className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'            onClick={() => onAction('approved', milestone.id)}            className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
            onClick={() => onAction('approved', milestone.id)}
            className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'            onClick={() => onAction('approved', milestone.id)}

            onClick={() => onAction('approved', milestone.id)}

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button


            className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'            onClick={() => onAction('paid', milestone.id)}

            onClick={() => onAction('paid', milestone.id)}



<<<<<<< HEAD
className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800"
            className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'            onClick={() => onAction('paid', milestone.id)}            className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800"
            onClick={() => onAction('paid', milestone.id)}
            className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'            onClick={() => onAction('paid', milestone.id)}

            onClick={() => onAction('paid', milestone.id)}

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>


  );


<<<<<<< HEAD
);
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div>        <div className="mt - 2 text - xs text - gray - 700">Status: {milestone.status}</div>;
      </div>;
      {expanded && (
        <div className="mt - 4 space - y-2 text - sm text - gray - 800">;
          <div > Amount: ${milestone.amount_usd.to_fixed (2)}</div>;
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>;
              <div className='font - medium'>Attachments</div>;
              <ul className='list - disc ml - 5'>;
                {milestone.attachments.map (array => (
                  <li key={a.id}>;
                    <a;
                      className='text - blue - 600 underline';
                      href={a.url}
                      target='_blank';
                      rel='noreferrer';
                    >                      {a.label || a.url}              <div className="font - medium">Attachments</div>;
              <ul className="list - disc ml - 5">;
                {milestone.attachments.map ((a) => (
                  <li key={a.id}>;
                    <a className="text - blue - 600 underline" href={a.url} target="_blank" rel="noreferrer">;
                    </a>;
                  </li>))}
              </ul>;
            </div>)}
        </div>)}
      <div className='mt - 4 flex flex - wrap gap - 2'>;
        {canClientMarkInProgress && (
          <button;
            className='px - 3 py - 1 text - sm rounded bg - indigo - 600 text - white hover:bg - indigo - 700'            on_click={() => on_action ('in_progress', milestone.id)}      <div className="mt - 4 flex flex - wrap gap - 2">;
        {canClientMarkInProgress && (
          <button;
            className="px - 3 py - 1 text - sm rounded bg - indigo - 600 text - white hover:bg - indigo - 700";
          >;
            Mark In Progress;
          </button>)}
        {canTalentSubmit && (
          <button;
            className='px - 3 py - 1 text - sm rounded bg - amber - 600 text - white hover:bg - amber - 700'            on_click={() => on_action ('submitted', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - amber - 600 text - white hover:bg - amber - 700";
            on_click={() => on_action ('submitted', milestone.id)}
          >;
            Submit Work;
          </button>)}
        {canClientApprove && (
          <button;
            className='px - 3 py - 1 text - sm rounded bg - green - 600 text - white hover:bg - green - 700'            on_click={() => on_action ('approved', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - green - 600 text - white hover:bg - green - 700";
            on_click={() => on_action ('approved', milestone.id)}
          >;
            Approve;
          </button>)}
        {canClientMarkPaid && (
          <button;
            className='px - 3 py - 1 text - sm rounded bg - slate - 700 text - white hover:bg - slate - 800'            on_click={() => on_action ('paid', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - slate - 700 text - white hover:bg - slate - 800";
            on_click={() => on_action ('paid', milestone.id)}
          >;
            Mark as Paid;
          </button>)}
      </div>;
    </div>);
);
  );
}
<<<<<<< HEAD

}
}
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
