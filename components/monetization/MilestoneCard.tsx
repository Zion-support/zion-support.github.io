import React, {_useState} from 'react';

type Props = {_milestone: Milestone;
  projectId: string;
  role: 'client' | 'talent' | 'admin';
  onAction: (_action: 'in_progress' | 'submitted' | 'approved' | 'paid', _milestoneId: string) => Promise<void> | void;};

const _statusSteps = ['Pending', 'In Progress', 'Submitted', 'Approved', 'Paid'] as const;

export default function MilestoneCard(_{_milestone, _projectId, _role, _onAction}: Props) {_const [expanded, _setExpanded] = useState(false);

  const _currentIndex = statusSteps.findIndex(_(s) => s === milestone.status);

  const _canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const _canTalentSubmit = (role === 'talent' || role === 'admin') && milestone.status === 'In Progress';
  const _canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const _canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{milestone.title}</h3>
          <p className="text-sm text-gray-600">Due: {_new Date(milestone.dueDate).toLocaleDateString()}</p>
        </div>
        <button className="text-sm text-blue-600" onClick={_() => setExpanded(_(v) => !v)}>
          {_expanded ? 'Hide' : 'Details'}
        </button>
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2">
          {_statusSteps.map(_(step, _idx) => (
            <div key={step} className="flex items-center">
              <div
                className={_'h-2 w-2 rounded-full ' + (idx <= currentIndex ? 'bg-green-600' : 'bg-gray-300')}
                title={_step}
              />
              {_idx < statusSteps.length - 1 && (
                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-gray-700">Status: {_milestone.status}</div>
      </div>

      {_expanded && (
        <div className="mt-4 space-y-2 text-sm text-gray-800">
          {milestone.description && <p>{milestone.description}</p>}
          <div>Amount: ${_milestone.amountUsd.toFixed(2)}</div>
          {_milestone.attachments && milestone.attachments.length > 0 && (_<div>
              <div className="font-medium">Attachments</div>
              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>
                    <a className="text-blue-600 underline" href={_a.url} target="_blank" rel="noreferrer">
                      {_a.label || a.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {_canClientMarkInProgress && (_<button
            className="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={() => onAction('in_progress', _milestone.id)}
          >
            Mark In Progress
          </button>
        )}
        {_canTalentSubmit && (_<button
            className="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onAction('submitted', _milestone.id)}
          >
            Submit Work
          </button>
        )}
        {_canClientApprove && (_<button
            className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
            onClick={() => onAction('approved', _milestone.id)}
          >
            Approve
          </button>
        )}
        {_canClientMarkPaid && (_<button
            className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800"
            onClick={() => onAction('paid', _milestone.id)}
          >
            Mark as Paid
          </button>
        )}
      </div>
    </div>
  );
}