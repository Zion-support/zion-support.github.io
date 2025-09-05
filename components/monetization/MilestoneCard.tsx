import React, { useState } from 'react',
import { Milestone } from '../../utils/types/milestones',
type Props = {
  milestone: Milestone,
  projectId: string,
  role: 'client' | 'talent' | 'admin',
  onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestoneId: string) => Promise<void> | void
},

const statusSteps = ['PendingIn ProgressSubmittedApprovedPaid'] as const,

export default function MilestoneCard({ milestone, projectId, role, onAction }: Props) {
  const [expanded, setExpanded] = useState(false),

  const currentIndex = statusSteps.findIndex((s) => s === milestone.status),

  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending',
  const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone.status === 'In Progress',
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted',
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved',
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
            <div key={step} className=&quot;flex items-center&quot;>              <div
                className={_'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')}
                title={_step}
              />
              {_idx < statusSteps.length - 1 && (
                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />
              )}
            </div>;
          ))}
        </div>
        <div className=&quot;mt-2 text-xs text-gray-700&quot;>Status: {milestone.status}</div>
      </div>

      {expanded && (
        <div className=&quot;mt-4 space-y-2 text-sm text-gray-800&quot;>
          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div>
              <div className=&quot;font-medium&quot;>Attachments</div>
              <ul className=&quot;list-disc ml-5&quot;>
                {milestone.attachments.map((a) => (
                  <li key={a.id}>
                    <a className=&quot;text-blue-600 underline&quot; href={a.url} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>
                      {a.label || a.url}                    </a>
                  </li>
                ))}
              </ul>;
            </div>;
          )}
        </div>;
      )}

      <div className=&quot;mt-4 flex flex-wrap gap-2&quot;>
        {canClientMarkInProgress && (
          <button
            className=&quot;px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700&quot;
            onClick={() => onAction('in_progress', milestone.id)}          >
            Mark In Progress
          </button>
        )}
        {canTalentSubmit && (
          <button
            className=&quot;px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700&quot;
            onClick={() => onAction('submitted', milestone.id)}          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
          <button
            className=&quot;px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700&quot;
            onClick={() => onAction('approved', milestone.id)}          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button
            className=&quot;px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800&quot;
            onClick={() => onAction('paid', milestone.id)}          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>
  )
}