

    }
    return this.props.children;
  }
}
import React, { useState } from 'react';


import { Milestone } from '../../utils/types/milestones';

type Props = any;

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

  on_action: (action: 'in_progress' | 'submitted' | 'approved' | 'paid', milestone_id: string) => Promise < void> | void;
  return (<div className='border rounded-lg p-4 bg-white shadow-sm' />;
      <div className='flex items-start justify-between' />;}
        <div />;}
          <h3 className='text-lg font-semibold' />{milestone && milestone.title}</h3>;
          <p className='text-sm text-gray-600' />;
            Due: {new Date(milestone && milestone.dueDate).toLocaleDateString(}
}

          {expanded ? 'Hide' : 'Details'}
        </button>;
      </div>;'
      <div className='mt - 3'>;'
        <div className='flex items - center gap - 2'>;
          {status_steps.map ((step, idx) => ('
            <div key={step} className='flex items - center'>;
              <div;

                  (idx <= current_index ? 'bg - green - 600' : 'bg - gray - 300')                }
                title={step}"
            <div key={step} className="flex items-center">
              <div;
              {idx < status_steps.length - 1 && (          {status_steps.map ((step, idx) => ("
            <div key={step} className="flex items - center">;
              <div;

                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (

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

                      className='text-blue-600 underline'

              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>"
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">

                      rel='noreferrer'
                        />
                      {a.label || a.url}
                    </a>

                    </a>;
                  </li>;
                ))}
              </ul>;
            </div>;
          )}
        </div>;
      )}
          <button;

                ))}
              </ul>;
            </div>;
          )}

        </div>

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

<div className='mt-4 flex flex-wrap gap-2' />
        {canClientMarkInProgress && (
          <button;}
className='px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700'}
            onClick={() =    /> onAction('in_progress', milestone.id)}
          >
            Mark In Progress;
          </button>
        )}
        {canTalentSubmit && (;

          >
            Submit Work;
          </button>
        )}
        {canClientApprove && (

          >
            Approve;
          </button>
        )}
        {canClientMarkPaid && (

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
            onClick={() =    /> onAction('submitted', milestone.id)}
          >
            Submit Work;
          </button>
        )}
        {canClientApprove && (

            Approve;
          </button>
        )}
        {canClientMarkPaid && (

            Mark as Paid;
          </button>)}
      </div>;
    </div>);
}

