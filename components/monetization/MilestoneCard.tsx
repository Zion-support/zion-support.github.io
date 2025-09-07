class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
    return this.props.children;
  }
<<<<<<< HEAD
}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useState } from 'react';
import { Milestone } from '../../utils/types/milestones';

type Props = any;

type Props = {
  milestone: Milestone;
import { Milestone  } from '../../utils/types/milestones';
type Props = any;
type Props = {milestone: Milestone;
import { Milestone  } from '../../utils/types/milestones';
type Props = any;
type Props = {milestone: Milestone;
  project_id: string;
  role: 'client' | 'talent' | 'admin';
  onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid';
    milestoneId: string;
  ) => Promise<void> | void;
}
const statusSteps = [;
  'Pending';
  'In Progress';
  'Submitted';
  'Approved';
  'Paid';
] as const;
export default function MilestoneCard() {milestone: Milestone;
  project_id: string;
  role: 'client' | 'talent' | 'admin';
    milestone.status === 'In Progress';
  const canClientApprove =;
    role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid =;
    role !== 'talent' && milestone.status === 'Approved';
  return (<div className='border rounded-lg p-4 bg-white shadow-sm'>;
      <div className='flex items-start justify-between'>;
        <div>;
          <h3 className='text-lg font-semibold'>{milestone && milestone.title}</h3>;
          <p className='text-sm text-gray-600'>;
            Due: {new Date(milestone && milestone.dueDate).toLocaleDateString()}
=======
}'
import React, { useState } from 'react';

import { Milestone } from '../../utils/types/milestones';

type Props = any;
<<<<<<< HEAD
type Props = {
origin/cursor/automate-test-improve-and-merge-code-2533
  milestone: Milestone;
  project_id: string;'
  role: 'client' | 'talent' | 'admin';
  onAction: ('
    action: 'in_progress' | 'submitted' | 'approved' | 'paid'
    milestoneId: string;
  ) => Promise<void> | void;
}
const statusSteps = ['
  'Pending''
  'In Progress''
  'Submitted''
  'Approved''
  'Paid'
] as const;
export default function MilestoneCard({};
  milestone;
  projectId;
  role;
  onAction;
}: Props) {}
  milestone: Milestone;
  project_id: string;'
  role: 'client' | 'talent' | 'admin';'
    milestone.status === 'In Progress';
  const canClientApprove =;'
    role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid =;'
    role !== 'talent' && milestone.status === 'Approved';
  return ('
    <div className='border rounded-lg p-4 bg-white shadow-sm'>;'
      <div className='flex items-start justify-between'>;
        <div>;'
          <h3 className='text-lg font-semibold'>{milestone && milestone.title}</h3>;'
          <p className='text-sm text-gray-600'>;
            Due: {new Date(milestone && milestone.dueDate).toLocaleDateString()}
          </p>;
        </div>;
        <button'
          className='text-sm text-blue-600'
          onClick={() => setExpanded(v => !v)}'
        >          {expanded ? 'Hide' : 'Details'}

type Props = {}
;
  return ('
    <div className='border rounded - lg p - 4 bg - white shadow - sm'>;'
      <div className='flex items - start justify - between'>;
        <div>;'
          <h3 className='text - lg font - semibold'>{milestone.title}</h3>;'
          <p className='text - sm text - gray - 600'>;
            Due: {new Date (milestone.due_date).toLocaleDateString ()}
          </p>;
        </div>;
        <button;'
          className='text - sm text - blue - 600';
          on_click={() => set_expanded (v => !v)}'
        >          {expanded ? 'Hide' : 'Details'}
        </button>;
      </div>;'
      <div className='mt - 3'>;'
        <div className='flex items - center gap - 2'>type Props = {}
  const [expanded, setExpanded] = useState(false);
  const currentIndex = statusSteps.findIndex((s) => s === milestone.status);'
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';'
  const canTalentSubmit = (role === 'talent' |role === 'admin') && milestone.status === 'In Progress';'
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';'
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';'
      <div className='mt-3'>;'
        <div className='flex items-center gap-2'>type Props = {;
  milestone: Milestone,;
  projectId: string,;'
  role: 'client' | 'talent' | 'admin',;'
  onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestoneId: string) => Promise<void> | void;
};'
  const canClientMarkInProgress = role !== 'talent' && milestone && milestone.status === 'Pending';'
  const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone && milestone.status === 'In Progress';'
  const canClientApprove = role !== 'talent' && milestone && milestone.status === 'Submitted';'
  const canClientMarkPaid = role !== 'talent' && milestone && milestone.status === 'Approved';

<<<<<<< HEAD
        >
          {expanded ? 'Hide' : 'Details'}
        </button>
      </div>

<div className='mt-3'>
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
      <div className='mt-3'>
        <div className='flex items-center gap-2'>
          {statusSteps.map((step, idx) => (
            <div key={step} className='flex items-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <div
=======
              <div'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  on_action: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestone_id: string) => Promise < void> | void;
  return (<div className='border rounded-lg p-4 bg-white shadow-sm' />;
      <div className='flex items-start justify-between' />;}
        <div />;}
          <h3 className='text-lg font-semibold' />{milestone && milestone.title}</h3>;
          <p className='text-sm text-gray-600' />;
            Due: {new Date(milestone && milestone.dueDate).toLocaleDateString(}
}
<<<<<<< HEAD
;'
const status_steps = ['PendingIn ProgressSubmittedApprovedPaid'] as const;
;
export default /**;
 * MilestoneCard - Function description;
 */
function MilestoneCard() {}
  const [expanded, set_expanded] = useState (false);
;
  const current_index = status_steps.find_index ((s) => string === milestone.status);
;'
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';'
  const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone.status === 'In Progress';'
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';'
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';
;
  return (
    <div className="border rounded - lg p - 4 bg - white shadow - sm">;"
      <div className="flex items - start justify - between">;
        <div>;"
          <h3 className="text - lg font - semibold">{milestone.title}</h3>;"
          <p className="text - sm text - gray - 600">Due: {new Date (milestone.due_date).toLocaleDateString ()}</p>;
        </div>;"
        <button className="text - sm text - blue - 600" on_click={() => set_expanded ((v) => !v)}>;'
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          </p>;
        </div>;
        <button;
          className='text-sm text-blue-600';
          onClick={() => setExpanded(v => !v)}>          {expanded ? 'Hide' : 'Details'}type Props = {return (<div className='border rounded - lg p - 4 bg - white shadow - sm'>;
        >          {expanded ? 'Hide' : 'Details'}

<<<<<<< HEAD
type Props = {
;
  return (
    <div className='border rounded - lg p - 4 bg - white shadow - sm'>;
        <button;
          className='text-sm text-blue-600';
          onClick={() => setExpanded(v => !v)}>          {expanded ? 'Hide' : 'Details'}type Props = {return (<div className='border rounded - lg p - 4 bg - white shadow - sm'>;
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
        <div className='flex items - center gap - 2'>type Props = {const [expanded, setExpanded] = useState(false)const currentIndex = statusSteps.findIndex((s) => s === milestone.status)const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' |role === 'admin') && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';
      <div className='mt-3'>;
        <div className='flex items-center gap-2'>type Props = {milestone: Milestone,projectId: string,role: 'client' | 'talent' | 'admin',onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestoneId: string) => Promise<void> | void;
}const canClientMarkInProgress = role !== 'talent' && milestone && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone && milestone.status === 'Submitted';
  const canClientMarkPaid  = role !== 'talent' && milestone && milestone.status === 'Approved';>;
          {expanded ? 'Hide' : 'Details'}
        </button>;
      </div>;
<div className='mt-3'>;
  return (<div className="border rounded-lg p-4 bg-white shadow-sm">;
      <div className="flex items-start justify-between">;
        <div>;
          <h3 className="text-lg font-semibold">{milestone.title}</h3>;
          <p className="text-sm text-gray-600">Due: {new Date(milestone.dueDate).toLocaleDateString()}</p>;
        </div>;
        <button className="text-sm text-blue-600" onClick={() => setExpanded((v) => !v)}>;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          {expanded ? 'Hide' : 'Details'}
        </button>;
      </div>;'
      <div className='mt - 3'>;'
        <div className='flex items - center gap - 2'>;
          {status_steps.map ((step, idx) => ('
            <div key={step} className='flex items - center'>;
              <div;
<<<<<<< HEAD
                className={'
                  'h - 2 w - 2 rounded - full ' +;'
=======
                className={
                  'h - 2 w - 2 rounded - full ' +;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300')                }
                title={step}"
            <div key={step} className="flex items-center">
              <div;
              {idx < status_steps.length - 1 && (          {status_steps.map ((step, idx) => ("
            <div key={step} className="flex items - center">;
              <div;
<<<<<<< HEAD
                className={

                  'h-2 w-2 rounded-full ' +
                  (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                className={}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
<<<<<<< HEAD
<div
                  className={
                    'h - 0.5 w - 8 ' +;
=======
                <div;
                  className={'
                    'h - 0.5 w - 8 ' +;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    (idx < current_index ? 'bg - green - 600' : 'bg - gray - 300');
                  }
                />              )}
            </div>
          ))}'
        </div>                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />
'
                  'h - 2 w - 2 rounded - full ' + (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300');
                }
                title={step}
      {expanded && ('
        <div className='mt - 4 space - y-2 text - sm text - gray - 800'>          {milestone.description && <p>{milestone.description}</p>}
          <div > Amount: ${milestone.amount_usd.to_fixed (2)}</div>;
          {milestone.attachments && milestone.attachments.length > 0 && (
                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
                />
origin/cursor/automate-test-improve-and-merge-code-2533
              )}
            </div>
          ))}
        </div>
<<<<<<< HEAD
<div className='mt-2 text-xs text-gray-700'>
          Status: {milestone.status}
        </div>
<div className='mt-3' />;
  return (<div className=\"border rounded-lg p-4 bg-white shadow-sm\" />;"
      <div className=\"flex items-start justify-between\" />;
        <div />;"
          <h3 className=\"text-lg font-semibold\" />{milestone.title}</h3>;"
          <p className=\"text-sm text-gray-600\" />Due: {new Date(milestone.dueDate).toLocaleDateString(}
}</p>;
        </div>;"
        <button className=\"text-sm text-blue-600\" onClick={() = /> setExpanded((v) => !v)}>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          {expanded ? 'Hide' : 'Details'}
  const canClientMarkPaid = role !== 'talent' && milestone && milestone.status === 'Approved';

              <div
        </button>;
      </div>;
      <div className='mt-3'>;
        <div className='flex items-center gap-2'>;
          {statusSteps.map((step, idx) => (<div key={step} className='flex items-center'>;
              <div;
on_action: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestone_id: string) = /> Promise < void> | void;
}

const status_steps  = ['PendingIn ProgressSubmittedApprovedPaid'] as const;
export default /**;
 * MilestoneCard - Function description;
 */;
function MilestoneCard() {const [expanded, set_expanded]  = useState (false)const current_index  = status_steps.find_index ((s) => string === milestone.status)const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid  = role !== 'talent' && milestone.status === 'Approved';return (<div className="border rounded - lg p - 4 bg - white shadow - sm">;
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
          {status_steps.map ((step, idx) => (<div key={step} className='flex items - center'>;
              <div;
                className={
                  'h - 2 w - 2 rounded - full ' +;
                className={'h - 2 w - 2 rounded - full ' +;
                  (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300')                }
                title={step}
            <div key={step} className="flex items-center">
              <div
              {idx < status_steps.length - 1 && (          {status_steps.map ((step, idx) => (
            <div key={step} className="flex items - center">;
              <div;
import { Milestone } from '../../utils/types/milestones';
type Props = $2;
  projectId: string,
  role: 'client' | 'talent' | 'admin',
  onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestoneId: string) => Promise<void> | void
},

const statusSteps = $2;
export default function MilestoneCard({ milestone, projectId, role, onAction }: Props) {
  const [expanded, setExpanded] = useState($2);
  const currentIndex = $2;
  const canClientMarkInProgress = $2;
  const canTalentSubmit = $2;
  const canClientApprove = $2;
  const canClientMarkPaid = $2;
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

      <div className="mt-3">
        <div className="flex items-center gap-2">
          {statusSteps.map((step, idx) => (
            <div key={step} className="flex items-center">
              <div
                className={
                  'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')
                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
                className={'h - 2 w - 2 rounded - full ' +;
                  (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300')                }
                title={step}
            <div key={step} className="flex items-center">;
              <div;
              {idx < status_steps.length - 1 && (          {status_steps.map ((step, idx) => (<div key={step} className="flex items - center">;
              <div;
                className={'h-2 w-2 rounded-full ' +;
                  (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')}
                title={step}
              />;
              {idx < statusSteps.length - 1 && (<div;
                  className={'h - 0.5 w - 8 ' +;
                    (idx < current_index ? 'bg - green - 600' : 'bg - gray - 300')}/>              )}
            </div>;
          ))}
        </div>                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />;
                  'h - 2 w - 2 rounded - full ' + (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300')}
                title={step}
      {expanded && (<div className='mt - 4 space - y-2 text - sm text - gray - 800'>          {milestone.description && <p>{milestone.description}</p>}
          <div > Amount: ${milestone.amount_usd.to_fixed (2)}</div>;
          {milestone.attachments && milestone.attachments.length > 0 && (}
                title={step}
              />;
              {idx < statusSteps.length - 1 && (/>;
                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />
              )}
            </div>
          ))}
<<<<<<< HEAD
                />              )}
            </div>
          ))}
        </div>                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />

                  'h - 2 w - 2 rounded - full ' + (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300');
                }
                title={step}
      {expanded && (
        <div className='mt - 4 space - y-2 text - sm text - gray - 800'>          {milestone.description && <p>{milestone.description}</p>}
          <div > Amount: ${milestone.amount_usd.to_fixed (2)}</div>;
          {milestone.attachments && milestone.attachments.length > 0 && (
                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
              )}
            </div>
          ))}
        </div>

<div className='mt-2 text-xs text-gray-700'>
          Status: {milestone.status}
        </div>
<div className='mt-2 text-xs text-gray-700'>
        </div>;
<div className='mt-2 text-xs text-gray-700'>;
              )}
            </div>;
          ))}
        </div>;
<div className='mt-2 text-xs text-gray-700'>;
          Status: {milestone.status}
        </div>;
      </div>;
      {expanded && (<div className='mt-4 space-y-2 text-sm text-gray-800'>;
          {milestone.description && <p>{milestone.description}</p>}

<<<<<<< HEAD
                    <a
                      className='text-blue-600 underline'
=======
          <div />Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>
<div className='font-medium'>Attachments</div>
              <ul className='list-disc ml-5'>
                {milestone.attachments.map(a => (
                  <li key={a.id}>
origin/cursor/automate-test-improve-and-merge-code-2533
                    <a
=======
                    <a'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      className='text-blue-600 underline'
<<<<<<< HEAD
                      href={a && a.url}'
                      target='_blank'"
=======
                      href={a && a.url}
                      target='_blank'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>"
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">
<<<<<<< HEAD
=======
            <div />
<div className='font-medium' />Attachments</div>
              <ul className='list-disc ml-5' />}
                {milestone.attachments.map(a => (}
                  <li key={a.id} />
                    <a;
className='text-blue-600 underline'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      href={a && a.url}
                      target='_blank'
        </div>
        <div className="mt-2 text-xs text-gray-700">Status: {milestone.status}</div>
      </div>

<<<<<<< HEAD
      {expanded && (
        <div className="mt-4 space-y-2 text-sm text-gray-800">
          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>
              <div className="font-medium">Attachments</div>
              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>;
          {milestone.attachments && milestone.attachments.length > 0 && (<div>;
<div className='font-medium'>Attachments</div>;
              <ul className='list-disc ml-5'>;
                {milestone.attachments.map(a => (<li key={a.id}>;
                    <a;
                      className='text-blue-600 underline';
                      href={a && a.url}
                      target='_blank';
              <ul className="list-disc ml-5">;
                {milestone.attachments.map((a) => (<li key={a.id}>;
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">;
                      rel='noreferrer';
                    >;
                      {a.label || a.url}</a>;
                  </li>;
                      rel='noreferrer'>                      {a && a.label || a && a.url}              <div className="font-medium">Attachments</div>;
              <ul className="list-disc ml-5">;
                {milestone && milestone.attachments.map((a) => (<li key={a && a.id}>;
                    <a className="text-blue-600 underline" href={a && a.url} target="_blank" rel="noreferrer">;
                    </a>;
                  </li>;
                      {a.label || a.url}
=======
        </div>
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      rel='noreferrer'
                     />
                      {a.label || a.url}
origin/cursor/automate-test-improve-and-merge-code-2533
                    </a>
<<<<<<< HEAD
                  </li>'"
                      rel='noreferrer'>                      {a && a.label || a && a.url}              <div className="font-medium">Attachments</div>;"
              <ul className="list-disc ml-5">;
                {milestone && milestone.attachments.map((a) => (;
                  <li key={a && a.id}>;"
                    <a className="text-blue-600 underline" href={a && a.url} target="_blank" rel="noreferrer">;
=======
                  </li>

                      rel='noreferrer'>                      {a && a.label || a && a.ur}"
}              <div className=\"font-medium\" />Attachments</div>;"
              <ul className=\"list-disc ml-5\" />;
                {milestone && milestone.attachments.map((a) => (<li key={a && a.id} />;"
                    <a className=\"text-blue-600 underline\" href={a && a.url} target=\"_blank\" rel=\"noreferrer\" />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    </a>;
                  </li>;
                ))}
              </ul>;
            </div>;
          )}
        </div>;
      )}
          <button;
<<<<<<< HEAD
          <button"
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
'
      <div className='mt-4 flex flex-wrap gap-2'>
        {canClientMarkInProgress && (
          <button'
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}
'
            onClick={() => onAction('in_progress', milestone.id)}

                    </a>
                  </li>
=======
          <button;"
            className=\"px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700\";
      <div className='mt-4 flex flex-wrap gap-2' />;
        {canClientMarkInProgress && (<button;}
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() = /> onAction('in_progress', milestone.id)}onClick={() => onAction('in_progress', milestone.id)}</a>;
                  </li>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                ))}
              </ul>;
            </div>;
          )}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

                      className='text-blue-600 underline'

<div className='mt-4 flex flex-wrap gap-2' />
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}

            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone && milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">;
        {canClientMarkInProgress && (;
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700">;
            Mark In Progress;
          </button>;
        </div>
<<<<<<< HEAD
      )}'"
=======
      )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button"
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"'
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}
'"
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone && milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">;
        {canClientMarkInProgress && (;
          <button"
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700">;
            Mark In Progress;
          </button>;
"
      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button"
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"'
            onClick={() => onAction('in_progress', milestone.id)}




<div className='mt-4 flex flex-wrap gap-2'>
        {canClientMarkInProgress && (
          <button
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'
            onClick={() => onAction('in_progress', milestone.id)}
origin/cursor/automate-test-improve-and-merge-code-2533

      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={() => onAction('in_progress', milestone.id)}
          >
            Mark In Progress
          </button>
        )}
<<<<<<< HEAD

className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'
            onClick={() => onAction('submitted', milestone.id)}
        {canTalentSubmit && (
          <button
            className="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onAction('submitted', milestone.id)}
=======
        {canTalentSubmit && (;
<<<<<<< HEAD
          <button
className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'
            onClick={() => onAction('submitted', milestone.id)}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          >
            Submit Work;
          </button>
        )}
        {canClientApprove && (
<<<<<<< HEAD
          <button
className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'
            onClick={() => onAction('approved', milestone.id)}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          >
            Approve;
          </button>
        )}
        {canClientMarkPaid && (
<<<<<<< HEAD
          <button
className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'
            onClick={() => onAction('paid', milestone.id)}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          >
            Mark as Paid;
          </button>
        )}
      </div>
    </div>


        )}
      </div>
    </div>
  );
}"
            <div>        <div className="mt - 2 text - xs text - gray - 700">Status: {milestone.status}</div>;
      </div>;
      {expanded && ("
        <div className="mt - 4 space - y-2 text - sm text - gray - 800">;
          <div > Amount: ${milestone.amount_usd.to_fixed (2)}</div>;
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>;'
              <div className='font - medium'>Attachments</div>;'
              <ul className='list - disc ml - 5'>;
                {milestone.attachments.map (array => (
                  <li key={a.id}>;
                    <a;'
                      className='text - blue - 600 underline';
                      href={a.url}'
                      target='_blank';'
                      rel='noreferrer';"
                    >                      {a.label || a.url}              <div className="font - medium">Attachments</div>;"
              <ul className="list - disc ml - 5">;
                {milestone.attachments.map ((a) => (
                  <li key={a.id}>;"
                    <a className="text - blue - 600 underline" href={a.url} target="_blank" rel="noreferrer">;
                    </a>;
                  </li>))}
              </ul>;
            </div>)}
        </div>)}'
      <div className='mt - 4 flex flex - wrap gap - 2'>;
        {canClientMarkInProgress && (
          <button;'"
            className='px - 3 py - 1 text - sm rounded bg - indigo - 600 text - white hover:bg - indigo - 700'            on_click={() => on_action ('in_progress', milestone.id)}      <div className="mt - 4 flex flex - wrap gap - 2">;
        {canClientMarkInProgress && (
          <button;"
            className="px - 3 py - 1 text - sm rounded bg - indigo - 600 text - white hover:bg - indigo - 700";
          >;
            Mark In Progress;
          </button>)}
        {canTalentSubmit && (
          <button;'"
            className='px - 3 py - 1 text - sm rounded bg - amber - 600 text - white hover:bg - amber - 700'            on_click={() => on_action ('submitted', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - amber - 600 text - white hover:bg - amber - 700";'
            on_click={() => on_action ('submitted', milestone.id)}
          >;
          <button;}
className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'}
            onClick={() = /> onAction('submitted', milestone.id)}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
<<<<<<< HEAD
          <button
            className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
            onClick={() => onAction('approved', milestone.id)}
          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button

className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'
            onClick={() => onAction('paid', milestone.id)}
            className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800"
            onClick={() => onAction('paid', milestone.id)}
          >
            Mark as Paid
=======
<<<<<<< HEAD
          <button;'"
            className='px - 3 py - 1 text - sm rounded bg - green - 600 text - white hover:bg - green - 700'            on_click={() => on_action ('approved', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - green - 600 text - white hover:bg - green - 700";'
            on_click={() => on_action ('approved', milestone.id)}
          >;
=======
          <button;}
className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'}
            onClick={() = /> onAction('approved', milestone.id)}
          >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            Approve;
          </button>
        )}
        {canClientMarkPaid && (
<<<<<<< HEAD
          <button;'"
            className='px - 3 py - 1 text - sm rounded bg - slate - 700 text - white hover:bg - slate - 800'            on_click={() => on_action ('paid', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - slate - 700 text - white hover:bg - slate - 800";'
            on_click={() => on_action ('paid', milestone.id)}
          >;
=======
          <button;}
className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'}
            onClick={() = /> onAction('paid', milestone.id)}
          >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            Mark as Paid;
          </button>)}
      </div>;
    </div>);
}
<<<<<<< HEAD
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          </button>
        )}
      </div>
    </div>
<<<<<<< HEAD



        )}
      </div>
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
        </div>;
      )}className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">;
        {canClientMarkInProgress && (<button;
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700";
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone && milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">;
        {canClientMarkInProgress && (<button;
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700">;
            Mark In Progress;
          </button>;<div className="mt-4 flex flex-wrap gap-2">;
        {canClientMarkInProgress && (<button;
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700";
            onClick={() => onAction('in_progress', milestone.id)}<div className='mt-4 flex flex-wrap gap-2'>;
        {canClientMarkInProgress && (<button;
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700';
            onClick={() => onAction('in_progress', milestone.id)}>;
            Mark In Progress;
          </button>;
        )}
        {canTalentSubmit && (<button;
className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700';
            onClick={() => onAction('submitted', milestone.id)}>;
            Submit Work;
          </button>;
        )}
        {canClientApprove && (<button;
className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700';
            onClick={() => onAction('approved', milestone.id)}>;
            Approve;
          </button>;
        )}
        {canClientMarkPaid && (<button;
className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800';
            onClick={() => onAction('paid', milestone.id)}>;
            Mark as Paid;
          </button>;
        )}
      </div>;
    </div>;
        )}
      </div>;
    </div>;
  )}
            <div>        <div className="mt - 2 text - xs text - gray - 700">Status: {milestone.status}</div>;
      </div>;
      {expanded && (<div className="mt - 4 space - y-2 text - sm text - gray - 800">;
          <div > Amount: ${milestone.amount_usd.to_fixed (2)}</div>;
          {milestone.attachments && milestone.attachments.length > 0 && (<div>;
              <div className='font - medium'>Attachments</div>;
              <ul className='list - disc ml - 5'>;
                {milestone.attachments.map (array => (<li key={a.id}>;
                    <a;
                      className='text - blue - 600 underline';
                      href={a.url}
                      target='_blank';
                      rel='noreferrer';
                    >                      {a.label || a.url}              <div className="font - medium">Attachments</div>;
              <ul className="list - disc ml - 5">;
                {milestone.attachments.map ((a) => (<li key={a.id}>;
                    <a className="text - blue - 600 underline" href={a.url} target="_blank" rel="noreferrer">;
                    </a>;
                  </li>))}
              </ul>;
            </div>)}
        </div>)}
      <div className='mt - 4 flex flex - wrap gap - 2'>;
        {canClientMarkInProgress && (<button;
            className='px - 3 py - 1 text - sm rounded bg - indigo - 600 text - white hover:bg - indigo - 700'            on_click={() => on_action ('in_progress', milestone.id)}      <div className="mt - 4 flex flex - wrap gap - 2">;
        {canClientMarkInProgress && (<button;
            className="px - 3 py - 1 text - sm rounded bg - indigo - 600 text - white hover:bg - indigo - 700";
          >;
            Mark In Progress;
          </button>)}
        {canTalentSubmit && (<button;
            className='px - 3 py - 1 text - sm rounded bg - amber - 600 text - white hover:bg - amber - 700'            on_click={() => on_action ('submitted', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - amber - 600 text - white hover:bg - amber - 700";
            on_click={() => on_action ('submitted', milestone.id)}
          >;
            Submit Work;
          </button>)}
        {canClientApprove && (<button;
            className='px - 3 py - 1 text - sm rounded bg - green - 600 text - white hover:bg - green - 700'            on_click={() => on_action ('approved', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - green - 600 text - white hover:bg - green - 700";
            on_click={() => on_action ('approved', milestone.id)}
          >;
            Approve;
          </button>)}
        {canClientMarkPaid && (<button;
            className='px - 3 py - 1 text - sm rounded bg - slate - 700 text - white hover:bg - slate - 800'            on_click={() => on_action ('paid', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - slate - 700 text - white hover:bg - slate - 800";
            on_click={() => on_action ('paid', milestone.id)}
          >;
            Mark as Paid;
          </button>)}
      </div>;
    </div>);
}
    </div>)})}
  )
}
=======
);
}
}
<<<<<<< HEAD

"
<<<<<<< HEAD
=======
return (<div className="border rounded-lg p-4 bg-white shadow-sm" > <div className="flex items-start justify-between" > <div> <div className= {
  'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300') 
}title= {
  step 
}/> {
  idx < statusSteps.length - 1 && (<div className= {
  'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300') 
}/>) 
}</div>) ) 
}</div> </a> </li>) ) 
}</ul> </div>) 
}</div>) 
}> Mark In Progress </button>) 
}> Submit Work </button>) 
}> Approve </button>) 
}> Mark as Paid </button>) 
}</div> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
