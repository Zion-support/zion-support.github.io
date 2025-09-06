import React, { useState } from 'react';
import { Milestone } from '../../utils/types/milestones';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
type Props = {
  milestone: Milestone;
  projectId: string;
  role: 'client' | 'talent' | 'admin';
  onAction: (
    action: 'in_progress' | 'submitted' | 'approved' | 'paid',
    milestoneId: string
  ) => Promise<void> | void;
};

const statusSteps = [
  'Pending',
  'In Progress',
  'Submitted',
  'Approved',
  'Paid',
] as const;

export default function MilestoneCard({
  milestone,
  projectId,
  role,
  onAction,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const currentIndex = statusSteps.findIndex(s => s === milestone.status);

  const canClientMarkInProgress =
    role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit =
    (role === 'talent' || role === 'admin') &&
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
        <div className='flex items-center gap-2'>
=======
        <button className="text-sm text-blue-600" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Hide' : 'Details'}
        </button>
      </div>

<<<<<<< HEAD
      <div className='mt-3'>
        <div className='flex items-center gap-2'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          {statusSteps.map((step, idx) => (
            <div key={step} className='flex items-center'>
              <div
                className={
                  'h-2 w-2 rounded-full ' +
                  (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
=======
                  'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')
                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div
                  className={
                    'h-0.5 w-8 ' +
                    (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')
                  }
<<<<<<< HEAD
                />              )}
            </div>
          ))}
        </div>
=======
                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />
              )}
            </div>
          ))}
        </div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div className='mt-2 text-xs text-gray-700'>
          Status: {milestone.status}
        </div>
      </div>

      {expanded && (
<<<<<<< HEAD
        <div className='mt-4 space-y-2 text-sm text-gray-800'>          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>
=======
        <div className="mt-2 text-xs text-gray-700">Status: {milestone.status}</div>
      </div>

      {expanded && (
        <div className="mt-4 space-y-2 text-sm text-gray-800">
          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div className='font-medium'>Attachments</div>
              <ul className='list-disc ml-5'>
                {milestone.attachments.map(a => (
                  <li key={a.id}>
                    <a
                      className='text-blue-600 underline'
                      href={a.url}
                      target='_blank'
                      rel='noreferrer'
<<<<<<< HEAD
                    >                      {a.label || a.url}
=======
              <div className="font-medium">Attachments</div>
              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">
                      {a.label || a.url}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className='mt-4 flex flex-wrap gap-2'>
        {canClientMarkInProgress && (
          <button
            className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'            onClick={() => onAction('in_progress', milestone.id)}
=======
      <div className="mt-4 flex flex-wrap gap-2">
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={() => onAction('in_progress', milestone.id)}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            Mark In Progress
          </button>
        )}
        {canTalentSubmit && (
          <button
            className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'            onClick={() => onAction('submitted', milestone.id)}
=======
            className="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onAction('submitted', milestone.id)}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
          <button
            className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'            onClick={() => onAction('approved', milestone.id)}
=======
            className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
            onClick={() => onAction('approved', milestone.id)}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button
            className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'            onClick={() => onAction('paid', milestone.id)}
=======
            className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800"
            onClick={() => onAction('paid', milestone.id)}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
