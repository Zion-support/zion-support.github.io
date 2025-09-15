<<<<<<< HEAD
"use client";


import React, { useState } from 'react';
import { Milestone } from '../../utils/types/milestones';


=======
import React, { useState } from 'react';
import { Milestone } from '../../utils/types/milestones';

>>>>>>> origin/auto/autonomy-17186719616
type Props = {
  milestone: Milestone;
  projectId: string;
  role: 'client' | 'talent' | 'admin';
<<<<<<< HEAD
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
=======
  onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestoneId: string) => Promise<void> | void;
};

const statusSteps = ['Pending', 'In Progress', 'Submitted', 'Approved', 'Paid'] as const;

export default function MilestoneCard({ milestone, projectId, role, onAction }: Props) {
  const [expanded, setExpanded] = useState(false);

  const currentIndex = statusSteps.findIndex((s) => s === milestone.status);

>>>>>>> origin/auto/autonomy-17186719616
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';
<<<<<<< HEAD
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


=======

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
>>>>>>> origin/auto/autonomy-17186719616

      <div className="mt-3">
        <div className="flex items-center gap-2">
          {statusSteps.map((step, idx) => (
            <div key={step} className="flex items-center">
              <div
<<<<<<< HEAD
              {idx < status_steps.length - 1 && (          {status_steps.map ((step, idx) => (
            <div key={step} className="flex items - center">;
              <div;
                className={
                  'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')






=======
                className={
                  'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')
>>>>>>> origin/auto/autonomy-17186719616
                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
<<<<<<< HEAD

                <div
                  className={
                    'h - 0.5 w - 8 ' +;
                    (idx < current_index ? 'bg - green - 600' : 'bg - gray - 300');
                  }
                />              )}
            </div>
          ))}
        </div>                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />


        </button>
      </div>


                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (











=======
                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />
>>>>>>> origin/auto/autonomy-17186719616
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-gray-700">Status: {milestone.status}</div>
<<<<<<< HEAD

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

=======
      </div>

      {expanded && (
        <div className="mt-4 space-y-2 text-sm text-gray-800">
>>>>>>> origin/auto/autonomy-17186719616
          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>
<<<<<<< HEAD

              <div className='font-medium'>Attachments</div>
              <ul className='list-disc ml-5'>
                {milestone.attachments.map(a => (
                  <li key={a.id}>
                    <a
                      className='text-blue-600 underline'
                      href={a && a.url}
                      target='_blank'
                      rel='noreferrer'
                    >                      {a.label |a.url}              <div className="font-medium">Attachments</div>
=======
              <div className="font-medium">Attachments</div>
>>>>>>> origin/auto/autonomy-17186719616
              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">
<<<<<<< HEAD

                      {a.label || a.url}









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

      <div className='mt-4 flex flex-wrap gap-2'>
        {canClientMarkInProgress && (
          <button



=======
                      {a.label || a.url}
>>>>>>> origin/auto/autonomy-17186719616
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

<<<<<<< HEAD


            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"



            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}
















=======
      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={() => onAction('in_progress', milestone.id)}
>>>>>>> origin/auto/autonomy-17186719616
          >
            Mark In Progress
          </button>
        )}
<<<<<<< HEAD
        {canTalentSubmit && (;
          <button

            className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'            onClick={() => onAction('submitted', milestone.id)}            className="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onAction('submitted', milestone.id)}
            className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'            onClick={() => onAction('submitted', milestone.id)}

        )}









=======
        {canTalentSubmit && (
          <button
            className="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onAction('submitted', milestone.id)}
>>>>>>> origin/auto/autonomy-17186719616
          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
          <button
<<<<<<< HEAD

            className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'            onClick={() => onAction('approved', milestone.id)}            className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
            onClick={() => onAction('approved', milestone.id)}
            className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'            onClick={() => onAction('approved', milestone.id)}

            onClick={() => onAction('approved', milestone.id)}











=======
            className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
            onClick={() => onAction('approved', milestone.id)}
>>>>>>> origin/auto/autonomy-17186719616
          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button
<<<<<<< HEAD

            className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'            onClick={() => onAction('paid', milestone.id)}            className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800"
            onClick={() => onAction('paid', milestone.id)}
            className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'            onClick={() => onAction('paid', milestone.id)}

            onClick={() => onAction('paid', milestone.id)}











=======
            className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800"
            onClick={() => onAction('paid', milestone.id)}
>>>>>>> origin/auto/autonomy-17186719616
          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>
<<<<<<< HEAD

);
  );
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

}

}
}
}
}

  );


}


=======
  );
}
>>>>>>> origin/auto/autonomy-17186719616
