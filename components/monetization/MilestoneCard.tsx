

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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


  milestone: Milestone;
  project_id: string;
  role: 'client' | 'talent' | 'admin';


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <button
          className='text-sm text-blue-600'
          onClick={() => setExpanded(v => !v)}
        >          {expanded ? 'Hide' : 'Details'}
<<<<<<< HEAD
=======

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

  milestone: Milestone,
  project_id: string,
  role: 'client' | 'talent' | 'admin',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4





<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const [expanded, setExpanded] = useState(false);
  const currentIndex = statusSteps.findIndex((s) => s === milestone.status);
  const canClientMarkInProgress = role !== 'talent' && milestone.status === 'Pending';
  const canTalentSubmit = (role === 'talent' |role === 'admin') && milestone.status === 'In Progress';
  const canClientApprove = role !== 'talent' && milestone.status === 'Submitted';
  const canClientMarkPaid = role !== 'talent' && milestone.status === 'Approved';


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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

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
          ))}
        </div>                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />



<<<<<<< HEAD
=======
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
=======
        </button>
      </div>

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                }
                title={step}
              />
              {idx < statusSteps.length - 1 && (
<<<<<<< HEAD

                <div
                  className={
                    'h-0.5 w-8 ' +
                    (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')
                  }
                />              )}
            </div>
          ))}
        </div>                <div className={'h-0.5 w-8 ' + (idx < currentIndex ? 'bg-green-600' : 'bg-gray-300')} />
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45


=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
              )}
            </div>
          ))}
        </div>
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
              <ul className="list-disc ml-5">
                {milestone.attachments.map((a) => (
                  <li key={a.id}>
                    <a className="text-blue-600 underline" href={a.url} target="_blank" rel="noreferrer">

                      {a.label || a.url}

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======


                      {a.label || a.url}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
              </ul>
            </div>
          )}
        </div>
      )}
<<<<<<< HEAD
      <div className='mt-4 flex flex-wrap gap-2'>
        {canClientMarkInProgress && (
          <button

            onClick={() => onAction('in_progress', milestone.id)}




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          >
            Mark In Progress
          </button>
        )}
{canTalentSubmit && (;
          <button
            className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'            onClick={() => onAction('submitted', milestone.id)}            className="px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onAction('submitted', milestone.id)}
            className='px-3 py-1 text-sm rounded bg-amber-600 text-white hover:bg-amber-700'            onClick={() => onAction('submitted', milestone.id)}

        )}

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          >
            Submit Work
          </button>
        )}
        {canClientApprove && (
          <button
            className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'            onClick={() => onAction('approved', milestone.id)}            className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
            onClick={() => onAction('approved', milestone.id)}
            className='px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700'            onClick={() => onAction('approved', milestone.id)}

            onClick={() => onAction('approved', milestone.id)}



<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          >
            Approve
          </button>
        )}
        {canClientMarkPaid && (
          <button
            className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'            onClick={() => onAction('paid', milestone.id)}            className="px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800"
            onClick={() => onAction('paid', milestone.id)}
            className='px-3 py-1 text-sm rounded bg-slate-700 text-white hover:bg-slate-800'            onClick={() => onAction('paid', milestone.id)}

            onClick={() => onAction('paid', milestone.id)}



<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          >
            Mark as Paid
          </button>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        )}
      </div>
    </div>

);
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
