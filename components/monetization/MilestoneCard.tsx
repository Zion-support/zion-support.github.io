<<<<<<< HEAD
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error,,,
  errorInfo) {console.error('Error caught by boundary:', error,,,
  errorInfo)}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error,,,
  errorInfo) {console.error('Error caught by boundary:', error,,,
  errorInfo)}render() {if (this.state.hasError) ;}
=======
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}static getDerivedStateFromError(error) {return { hasError: true }
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}render() {if (this.state.hasError) ;}
<<<<<<< HEAD
>>>>>>> origin/main
  return <div />Something went wrong.</div>;}
=======
  return <div    />Something went wrong.</div>;}
>>>>>>> origin/chore/fix-lint-and-merge
    }
    return this.props.children;
  }
}
<<<<<<< HEAD
import React, { useState,
  from 'react';
import { Milestone,
  from '../../utils/types/milestones';
=======
import React, { useState } from 'react';
<<<<<<< HEAD
import { Milestone } from '../../utils/types/milestones';
import React, { useState } from 'react;
import { Milestone } from ../../utils/types/milestones';
=======


import { Milestone } from '../../utils/types/milestones';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main

type Props = any;

type Props = {
<<<<<<< HEAD

  ) => Promise<void> | void;
}

const statusSteps = [;
=======
  milestone: Milestone;

  project_id: string;
  role: 'client' | 'talent' | 'admin';
  onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid';
    milestoneId: string;}
  ) => Promise<void    /> | void;}
}

const statusSteps = [
  'Pending';
  'In Progress';
  'Submitted';
  'Approved';
  'Paid';
] as const;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> origin/main
export default function MilestoneCard() {milestone: Milestone;
  project_id: string;
  role: 'client' | 'talent' | 'admin';
    milestone.status === 'In Progress';

const canClientApprove =;
    role !== 'talent' && milestone.status === 'Submitted';

const canClientMarkPaid =;
<<<<<<< HEAD
    role !== 'talent' && milestone.status === 'Approved';'
  return (<div className='border rounded-lg p-4 bg-white shadow-sm'>;'
      <div className='flex items-start justify-between'>;'
        <div>;
          <h3 className='text-lg font-semibold'>{milestone && milestone.title}</h3>;
          <p className='text-sm text-gray-600'>;
            Due: {new Date(milestone && milestone.dueDate).toLocaleDateString()}
}'
import React, { useState } from 'react';

import { Milestone } from '../../utils/types/milestones';

type Props = any;
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

=======
    role !== 'talent' && milestone.status === 'Approved';
<<<<<<< HEAD
  return (
    <div className='border rounded-lg p-4 bg-white shadow-sm' />;
=======
  return (<div className='border rounded-lg p-4 bg-white shadow-sm'    />;
      <div className='flex items-start justify-between'    />;}
        <div    />;}
          <h3 className='text-lg font-semibold'    />{milestone && milestone.title}</h3>;
          <p className='text-sm text-gray-600'    />;
            Due: {new Date(milestone && milestone.dueDate).toLocaleDateString(}
}
>>>>>>> origin/chore/fix-lint-and-merge
          </p>;
        </div>;
        <button;
          className='text-sm text-blue-600;
          onClick={() => setExpanded(v => !v)}>          {expanded ? Hide' : 'Details}type Props = {return (<div className=border rounded - lg p - 4 bg - white shadow - sm'>;
        >          {expanded ? 'Hide : Details'}

<<<<<<< HEAD

          {expanded ? 'Hide : Details'}
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

=======
        <button;
className='text-sm text-blue-600'
          onClick={() =    /> setExpanded(v => !v)}

>>>>>>> origin/chore/fix-lint-and-merge
        >

<<<<<<< HEAD
<div className='mt-3'>
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
      <div className='mt-3'>'
        <div className='flex items-center gap-2'>'
          {statusSteps.map((step, idx) => (
            <div key={step} className='flex items-center'>
origin/cursor/automate-test-improve-and-merge-code-2533
              <div
              <div'
  on_action: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestone_id: string) => Promise < void> | void;
  return (<div className='border rounded-lg p-4 bg-white shadow-sm' />;
>>>>>>> origin/main
      <div className='flex items-start justify-between' />;}
        <div />;}
          <h3 className='text-lg font-semibold' />{milestone && milestone.title}</h3>;
          <p className='text-sm text-gray-600' />;
            Due: {new Date(milestone && milestone.dueDate).toLocaleDateString(}
}
<<<<<<< HEAD
          </p>,
  </div>,
  <button className='text-sm text-blue-600',,
  onClick={() = /> setExpanded(v => !v)}

        >
=======
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
          </p>;
        </div>;
        <button;
          className='text-sm text-blue-600';
          onClick={() => setExpanded(v => !v)}>          {expanded ? 'Hide' : 'Details'}type Props = {return (<div className='border rounded - lg p - 4 bg - white shadow - sm'>;
        >          {expanded ? 'Hide' : 'Details'}
>>>>>>> origin/main

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
          {expanded ? 'Hide' : 'Details'}
        </button>;
      </div>;'
      <div className='mt - 3'>;'
        <div className='flex items - center gap - 2'>;
          {status_steps.map ((step, idx) => ('
            <div key={step} className='flex items - center'>;
              <div;
                className={'
                  'h - 2 w - 2 rounded - full ' +;'
                  (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300')                }
                title={step}"
            <div key={step} className="flex items-center">
              <div;
              {idx < status_steps.length - 1 && (          {status_steps.map ((step, idx) => ("
            <div key={step} className="flex items - center">;
              <div;
                className={

                  'h-2 w-2 rounded-full ' +
                  (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')
origin/cursor/automate-test-improve-and-merge-code-2533
                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
<div
                  className={
                    'h - 0.5 w - 8 ' +;
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
<div className='mt-2 text-xs text-gray-700'>
          Status: {milestone.status}
        </div>
<div className='mt-3' />;
  return (
    <div className=\"border rounded-lg p-4 bg-white shadow-sm\" />;"
      <div className=\"flex items-start justify-between\" />;
        <div />;"
          <h3 className=\"text-lg font-semibold\" />{milestone.title}</h3>;"
          <p className=\"text-sm text-gray-600\" />Due: {new Date(milestone.dueDate).toLocaleDateString(}
}</p>,
  </div>;",,
  <button className=\"text-sm text-blue-600\" onClick={() = /> setExpanded((v) => !v)}>;
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
=======
          {expanded ? 'Hide' : 'Details'}
        </button>;
      </div>;
<div className='mt-3'    />;
  return (<div className=\"border rounded-lg p-4 bg-white shadow-sm\"    />;"
      <div className=\"flex items-start justify-between\"    />;
        <div    />;"
          <h3 className=\"text-lg font-semibold\"    />{milestone.title}</h3>;"
          <p className=\"text-sm text-gray-600\"    />Due: {new Date(milestone.dueDate).toLocaleDateString(}
}</p>;
        </div>;"
        <button className=\"text-sm text-blue-600\" onClick={() =    /> setExpanded((v) => !v)}>;
          {expanded ? 'Hide' : 'Details'}

        </button>
      </div>
<<<<<<< HEAD
      <div className='mt-3' />
        <div className='flex items-center gap-2' />
          {statusSteps.map((step,,,
  idx) => (}
            <div key={step}
            className='flex items-center' />
              <div on_action: (action: 'in_progress' | 'submitted' | 'approved' | 'paid' milestone_id: string) = /> Promise < void> | void
            

=======
      <div className='mt-3'    />
        <div className='flex items-center gap-2'    />
          {statusSteps.map((step, idx) => (}
            <div key={step} className='flex items-center'    />
              <div;
on_action: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestone_id: string) =    /> Promise < void> | void;
>>>>>>> origin/chore/fix-lint-and-merge
}
>>>>>>> origin/main

const status_steps  = ['PendingIn ProgressSubmittedApprovedPaid'] as const;
export default /**;
 * MilestoneCard - Function description;
 */;
function MilestoneCard() {const [expanded
            set_expanded]  = useState (false)const current_index = status_steps.find_index ((s) => string === milestone.status;
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';

const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone.status === 'In Progress';

const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
"
<<<<<<< HEAD
const canClientMarkPaid  = role !== 'talent' && milestone.status === 'Approved';return (
    <div className=\"border rounded - lg p - 4 bg - white shadow - sm\" />
            "
      <div className=\"flex items - start justify - between\" />;
        <div />;}"
          <h3 className=\"text - lg font - semibold\" />{milestone.title}</h3>;"
          <p className=\"text - sm text - gray - 600\" />Due: {new Date (milestone.due_date).toLocaleDateString (}
=======
const canClientMarkPaid  = role !== 'talent' && milestone.status === 'Approved';return (<div className=\"border rounded - lg p - 4 bg - white shadow - sm\"    />;"
      <div className=\"flex items - start justify - between\"    />;}
        <div    />;}"
          <h3 className=\"text - lg font - semibold\"    />{milestone.title}</h3>;"
          <p className=\"text - sm text - gray - 600\"    />Due: {new Date (milestone.due_date).toLocaleDateString (}
>>>>>>> origin/main
}</p>;
        </div>;"
        <button className=\"text - sm text - blue - 600\" on_click={() =    /> set_expanded ((v) => !v)}>;
          {expanded ? 'Hide' : 'Details'}
        </button>;
      </div>;
<<<<<<< HEAD
      <div className='mt - 3' />;
        <div className='flex items - center gap - 2' />;
          {status_steps.map ((step, idx) => (
          <div key={step}
            className='flex items - center' />
            <div className={
=======
      <div className='mt - 3'    />;
        <div className='flex items - center gap - 2'    />;
          {status_steps.map ((step, idx) => (<div key={step} className='flex items - center'    />;
              <div;
<<<<<<< HEAD

                  (idx <= current_index ? bg - green - 600 : 'bg - gray - 300')                }
                title={step}
            <div key={step} className="flex items-center">
              <div;
              {idx < status_steps.length - 1 && (          {status_steps.map ((step, idx) => (
            <div key={step} className=flex items - center">;
              <div;

                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
=======
>>>>>>> origin/main

                  'h-2 w-2 rounded-full ' +
                  (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')
                }
                title={step}
                 />
              {idx < statusSteps.length - 1 && (
<div className={
                    'h - 0.5 w - 8 ' +;}
                    (idx < current_index ? 'bg - green - 600' : 'bg - gray - 300');}
                  }

                   />
>>>>>>> origin/chore/fix-lint-and-merge

              )}
            </div>;
          ))}
<<<<<<< HEAD
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
                />              )}
            </div>
          ))}
        </div>                <div className={h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600 : bg-gray-300')} />
'
                  h - 2 w - 2 rounded - full  + (idx <= current_index ? 'bg - green - 600' : bg - gray - 300);
                }
                title={step}
      {expanded && ('
        <div className='mt - 4 space - y-2 text - sm text - gray - 800>          {milestone.description && <p>{milestone.description}</p>}
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

                      className=text-blue-600 underline'
=======

        </div>

<div className='mt-2 text-xs text-gray-700'    />
>>>>>>> origin/chore/fix-lint-and-merge

          Status: {milestone.statu}
}
        </div>;
      </div>;
<<<<<<< HEAD
      {expanded && (
          <div className='mt-4 space-y-2 text-sm text-gray-800' />;}
          {milestone.description && <p />{milestone.description}</p>}
=======
      {expanded && (<div className='mt-4 space-y-2 text-sm text-gray-800'    />;}
          {milestone.description && <p    />{milestone.description}</p>}
>>>>>>> origin/main

<<<<<<< HEAD
                    <a
                      className='text-blue-600 underline'
                      className='text-blue-600 underline'
                      href={a && a.url}'
                      target='_blank'"
              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>"
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">
                      href={a && a.url}
                      target='_blank'
        </div>
        <div className="mt-2 text-xs text-gray-700">Status: {milestone.status}</div>
      </div>

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
                    <a className="text-blue-600 underline" href={a && a.url} target="_blank" rel="noreferrer">;"
                    </a>;
                  </li>;
                      {a.label || a.url}
                      rel='noreferrer'
        </div>
        <div className=mt-2 text-xs text-gray-700>Status: {milestone.status}</div>
      </div>


                      rel=noreferrer'
                     />
=======
          <div    />Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div    />
<div className='font-medium'    />Attachments</div>
              <ul className='list-disc ml-5'    />}
                {milestone.attachments.map(a => (}
<<<<<<< HEAD
                  <li key={a.id} />
                    <a className='text-blue-600 underline'
=======
                  <li key={a.id}    />
                    <a;
className='text-blue-600 underline'
>>>>>>> origin/main
                      href={a && a.url}
            target='_blank'

                      rel='noreferrer'
<<<<<<< HEAD
                     />
                      {a.label || a.url
=======
                        />
>>>>>>> origin/chore/fix-lint-and-merge
                      {a.label || a.url}
>>>>>>> origin/main
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

<<<<<<< HEAD
                      rel='noreferrer'>                      {a && a.label || a && a.ur"
              <div className=\"font-medium\" />Attachments</div>;"
              <ul className=\"list-disc ml-5\" />;,,
  {milestone && milestone.attachments.map((a) => (
          <li key={a && a.id} />;"
                    <a className=\"text-blue-600 underline\" href={a && a.url}
            target=\"_blank\" rel=\"noreferrer\" />;
=======
                      rel='noreferrer'>                      {a && a.label || a && a.ur}"
}              <div className=\"font-medium\"    />Attachments</div>;"
              <ul className=\"list-disc ml-5\"    />;
                {milestone && milestone.attachments.map((a) => (<li key={a && a.id}    />;"
                    <a className=\"text-blue-600 underline\" href={a && a.url} target=\"_blank\" rel=\"noreferrer\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
                    </a>;
                  </li>;
                ))
              </ul>;
<<<<<<< HEAD
            </div>
            )
        </div>
            )
          <button <button"
            className=\"px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700\";
      <div className='mt-4 flex flex-wrap gap-2' />;
        {canClientMarkInProgress && (
          <button className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() = /> onAction('in_progress'},,
  milestone.id)onClick={() => onAction('in_progress'},,
  milestone.id)</a>;
=======
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
            className=\'px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700\';
      <div className='mt-4 flex flex-wrap gap-2'    />;
        {canClientMarkInProgress && (<button;}
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() =    /> onAction('in_progress', milestone.id)}onClick={() => onAction('in_progress', milestone.id)}</a>;
>>>>>>> origin/main
                  </li>;
>>>>>>> origin/chore/fix-lint-and-merge
                ))}
              </ul>;
            </div>;
          )}

<<<<<<< HEAD
                      className='text-blue-600 underline

<div className=mt-4 flex flex-wrap gap-2' />
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700            onClick={() => onAction(in_progress', milestone.id)}

            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700            onClick={() => onAction(in_progress', milestone && milestone.id)}      <div className=mt-4 flex flex-wrap gap-2>;
        {canClientMarkInProgress && (;
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700">;
            Mark In Progress;
          </button>;
        </div>
      )}'"
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button"
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'
            className=px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700            onClick={() => onAction('in_progress', milestone.id)}

            className=px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress, milestone && milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">;
        {canClientMarkInProgress && (;
          <button
            className=px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700">;
            Mark In Progress;
          </button>;
"
      <div className=mt-4 flex flex-wrap gap-2>
        {canClientMarkInProgress && (
          <button"
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700
            onClick={() => onAction('in_progress', milestone.id)}





=======
        </div>
      )}

<<<<<<< HEAD
<div className='mt-4 flex flex-wrap gap-2' />
        {canClientMarkInProgress && (
          <button className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'}
            onClick={() = /> onAction('in_progress'},,
  milestone.id)
=======

<div className='mt-4 flex flex-wrap gap-2'    />
        {canClientMarkInProgress && (
          <button;}
className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'}
            onClick={() =    /> onAction('in_progress', milestone.id)}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
          >
            Mark In Progress;
          </button>
        )}
<<<<<<< HEAD
        {canTalentSubmit && (;
          <button className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'}
            onClick={() = /> onAction('submitted'},,
  milestone.id)
=======
<<<<<<< HEAD

className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'
            onClick={() => onAction('submitted', milestone.id)}
        {canTalentSubmit && (
          <button
            className="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onAction('submitted', milestone.id)}
          <button
className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'
            onClick={() => onAction('submitted', milestone.id)}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/main
          >
            Submit Work;
          </button>
        )}
        {canClientApprove && (
<<<<<<< HEAD
          <button className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'}
            onClick={() = /> onAction('approved'},,
  milestone.id)
=======
          <button
className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'
            onClick={() => onAction('approved', milestone.id)}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/main
          >
            Approve;
          </button>
        )}
        {canClientMarkPaid && (
<<<<<<< HEAD
          <button className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'}
            onClick={() = /> onAction('paid'},,
  milestone.id)
=======
          <button
className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'
            onClick={() => onAction('paid', milestone.id)}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/main
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
=======
        {canTalentSubmit && (;
          <button;}
className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'}
            onClick={() =    /> onAction('submitted', milestone.id)}
>>>>>>> origin/chore/fix-lint-and-merge
          >
            Submit Work;
          </button>
        )}
        {canClientApprove && (
<<<<<<< HEAD
          <button
}
className='px-3 py-1 text-sm rounded bg-green-600 text-white "hover":bg-green-700''
            onClick={() => onAction('approved', milestone.id)}'
          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button
}
className='px-3 py-1 text-sm rounded bg-slate-700 text-white "hover":bg-slate-800''
            onClick={() => onAction('paid', milestone.id)}'
          >
            Mark as Paid
          <button;'"
            className='px - 3 py - 1 text - sm rounded bg - green - 600 text - white hover:bg - green - 700'            on_click={() => on_action ('approved', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - green - 600 text - white hover:bg - green - 700";'
            on_click={() => on_action ('approved', milestone.id)}
          >;
=======
          <button;}
className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'}
            onClick={() =    /> onAction('approved', milestone.id)}
          >
>>>>>>> origin/chore/fix-lint-and-merge
            Approve;
          </button>
        )}
        {canClientMarkPaid && (
<<<<<<< HEAD
          <button;'"
            className='px - 3 py - 1 text - sm rounded bg - slate - 700 text - white hover:bg - slate - 800'            on_click={() => on_action ('paid', milestone.id)}            className="px - 3 py - 1 text - sm rounded bg - slate - 700 text - white hover:bg - slate - 800";'
            on_click={() => on_action ('paid', milestone.id)}
          >;
            Mark as Paid;
          </button>)}
      </div>;
    </div>);
}
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
          <button;}
className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'}
            onClick={() =    /> onAction('paid', milestone.id)}
          >
            Mark as Paid;
>>>>>>> origin/chore/fix-lint-and-merge
          </button>
        )}
      </div>
    </div>

<<<<<<< HEAD
"
=======
  );
}
<<<<<<< HEAD
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

"
=======

"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
