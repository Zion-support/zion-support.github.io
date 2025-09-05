import React, { useState } from 'react',
import { Milestone } from '../../utils/types/milestones',

type Props = {
  milestone: Milestone,
  projectId: string,
  role: 'client' | 'talent' | 'admin',
  onAction: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestoneId: string) => Promise<void> | void
},

const statusSteps = ['PendingIn Progress', 'SubmittedApproved', 'Paid'] as const,

export default function MilestoneCard({ milestone, projectId, role, onAction }: Props) {
  const [expanded, setExpanded] = useState(false),

  const currentIndex = statusSteps.findIndex((s) => s === milestone.status),

  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending',
  const canTalentSubmit = (role === 'talent' || role === 'admin') && milestone.status === 'In Progress',
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted',
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved',

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-start justify-between"></div>
        <div></div>
          <h3 className="text-lg font-semibold">{milestone.title}</h3>
          <p className="text-sm text-gray-600">Due: {new Date(milestone.dueDate).toLocaleDateString()}</p>
        </div>
        <button className="text-sm text-blue-600" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Hide' : 'Details'}
        </button>
      </div>

      <div className="mt-3"></div>
        <div className="flex items-center gap-2"></div>
          {statusSteps.map((step, idx) => (
            <div key={step} className="flex items-center"></div>
              <div
                className={
                  'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')
                }
                title={step
  },
              />
              {idx < statusSteps.length - 1 && (
                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-gray-700">Status: {milestone.status}</div>
      </div>

      {expanded && (
        <div className="mt-4 space-y-2 text-sm text-gray-800"></div>
          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${milestone.amountUsd.toFixed(2)}</div>
          {milestone.attachments && milestone.attachments.length > 0 && (
            <div></div>
              <div className="font-medium">Attachments</div>
              <ul className="list-disc ml-5"></ul>
                {milestone.attachments.map((a) => (
                  <li key={a.id}></li>
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer"></a>
                      {a.label || a.url
  },
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2"></div>
        {canClientMarkInProgress && (
          <button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={() => onAction('in_progress', milestone.id)}
          >
            Mark In Progress
          </button>
        )}
        {canTalentSubmit && (
          <button
            className="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onAction('submitted', milestone.id)}
          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
          <button
            className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
            onClick={() => onAction('approved', milestone.id)}
          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button
            className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800"
            onClick={() => onAction('paid', milestone.id)}
          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>
  ),
}