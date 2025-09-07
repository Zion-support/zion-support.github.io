<<<<<<< HEAD

export type ModerationModalProps = {
  flag: any | null;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
</div> <div className="p-4 space-y-4 text-sm" > <div className="grid grid-cols-2 gap-4" > <div> </div> </div> </div>) 
}
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export type ModerationModalProps = {
=======
export type ModerationModalProps = {};
>>>>>>> origin/chore/fix-lint-and-merge
  flag: any | null;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false ;};
  }
  static getDerivedStateFromError(error) {
    return { hasError: true ;};
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: ';, error, errorInfo);
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<<<<<<< HEAD
</div> <div className='p-4 space-y-4 text-sm' > <div className='grid grid-cols-2 gap-4' > <div> </div> </div> </div>) 
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
</div> <div className="p-4 space-y-4 text-sm" > <div className="grid grid-cols-2 gap-4" > <div> </div> </div> </div>) 
>>>>>>> origin/resolved-merge-conflicts
}
import React, { useState } from 'react';

<<<<<<< HEAD



  onAction: (;
    action: 'approve' | 'remove' | 'warn' | 'ban',;
    adminNotes?: string;
  ) => Promise<void>;
export default function ModerationModal(): any ({;
  flag,;
  onClose,;
  onAction,;
}: ModerationModalProps) {;
=======
<<<<<<< HEAD
=======
=======
import React, { useState } from 'react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  onAction: (;
<<<<<<< HEAD
    action: approve' | 'remove | warn' | 'ban,
=======
    action: 'approve' | 'remove' | 'warn' | 'ban';,;
>>>>>>> origin/chore/fix-lint-and-merge
    adminNotes?: string;
  ) => Promise<void>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export default function ModerationModal(): any ({
  flag,
  onClose,
  onAction}: ModerationModalProps) {
<<<<<<< HEAD
=======
=======
>>>>>>> origin/resolved-merge-conflicts


<<<<<<< HEAD


=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

  flag,
  onClose,
  onAction,
}: ModerationModalProps) {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  flag,
  onClose,
  onAction}: ModerationModalProps) {

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts




  flag,
  onClose,
  onAction}: ModerationModalProps) {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {
    console.error(Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
<<<<<<< HEAD
}
import React, { useState } from 'react';
=======
<<<<<<< HEAD
}
>>>>>>> origin/resolved-merge-conflicts

export type ModerationModalProps = {
  flag: any | null;






  const [adminNotes, setAdminNotes] = useState(');
  if (!flag) return null;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [adminNotes, setAdminNotes] = useState('');
  if (!flag) return null;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50>;
      <div className=bg-white dark:bg-black w-full max-w-2xl rounded shadow-lg'>;
        <div className='p-4 border-b flex items-center justify-between>;
          <div className=font-semibold'>Review Flag — {flag && flag.id}</div>;
          <button
            onClick={onClose}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts


            className='text-gray-500 hover:text-gray-700>;
            ✕;
          </button>;
        </div>;
        <div className=p-4 space-y-4 text-sm'>;
          <div className='grid grid-cols-2 gap-4>;
            <div>;
              <div className=text-gray-500'>Content Type</div>;
              <div className='font-medium>{flag && flag.contentType}</div>;
            </div>;
            <div>;
              <div className=text-gray-500'>User</div>;
              <div className='font-medium>{flag && flag.userEmail}</div>;
            </div>;
            <div>;
              <div className=text-gray-500'>Reason</div>;
              <div className='font-medium>{flag && flag.reason}</div>;
            </div>;
            <div>;
              <div className=text-gray-500'>Status</div>;
              <div className='font-medium>{flag && flag.status}</div>;
            </div>;
          </div>;
          <div>;
            <div className=text-gray-500 mb-1'>Preview</div>;
            <div className='border rounded p-3 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto>;
              {flag && flag.snippet}
            </div>;
          </div>;
<<<<<<< HEAD
          <div className='grid grid-cols-3 gap-4'>;
            <div className='p-3 border rounded'>;
              <div className='text-gray-500'>Toxicity</div>;
              <div className='font-semibold'>;
                {Math && Math.round((flag && flag.aiScores?.toxicity || 0) * 100)}%;
              </div>;
            </div>;
            <div className='p-3 border rounded'>;
              <div className='text-gray-500'>NSFW</div>;
              <div className='font-semibold'>;
                {Math && Math.round((flag && flag.aiScores?.nsfw || 0) * 100)}%;
              </div>;
            </div>;
            <div className='p-3 border rounded'>;
              <div className='text-gray-500'>Scam</div>;
              <div className='font-semibold'>;
                {Math && Math.round((flag && flag.aiScores?.scam || 0) * 100)}%;
              </div>;
=======
          <div className=grid grid-cols-3 gap-4'>;
            <div className='p-3 border rounded>;
              <div className=text-gray-500'>Toxicity</div>;
              <div className='font-semibold>;
                {Math && Math.round((flag && flag.aiScores?.toxicity || 0) * 100)}%;
              </div>;
            </div>;
            <div className=p-3 border rounded'>;
              <div className='text-gray-500>NSFW</div>;
              <div className=font-semibold'>;
                {Math && Math.round((flag && flag.aiScores?.nsfw || 0) * 100)}%;
              </div>;
            </div>;
            <div className='p-3 border rounded>;
              <div className=text-gray-500'>Scam</div>;
              <div className='font-semibold>;
=======
  return ('
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>;'
      <div className='bg-white dark:bg-black w-full max-w-2xl rounded shadow-lg'>;'
        <div className='p-4 border-b flex items-center justify-between'>;'
          <div className='font-semibold'>Review Flag — {flag && flag.id}</div>;
          <button;
            onClick={onClose}

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            className='text-gray-500 hover:text-gray-700'>;
            ✕;
          </button>;
        </div>;'
        <div className='p-4 space-y-4 text-sm'>;'
          <div className='grid grid-cols-2 gap-4'>;
            <div>;'
              <div className='text-gray-500'>Content Type</div>;'
              <div className='font-medium'>{flag && flag.contentType}</div>;
            </div>;
            <div>;'
              <div className='text-gray-500'>User</div>;'
              <div className='font-medium'>{flag && flag.userEmail}</div>;
            </div>;
            <div>;'
              <div className='text-gray-500'>Reason</div>;'
              <div className='font-medium'>{flag && flag.reason}</div>;
            </div>;
            <div>;'
              <div className='text-gray-500'>Status</div>;'
              <div className='font-medium'>{flag && flag.status}</div>;
>>>>>>> origin/resolved-merge-conflicts
            </div>;
          </div>;
          <div>;
            <label className='block text-sm font-medium mb-1'>;
<<<<<<< HEAD
              Admin Notes;
            </label>;



=======
>>>>>>> origin/chore/fix-lint-and-merge
              Admin Notes;
            </label>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            <textarea
              value={adminNotes}
              onChange={e => setAdminNotes(e && e.target.value)}
              rows={3}
              className='w-full border rounded px-3 py-2 bg-white dark:bg-black;
            />;
          </div>;
        </div>;
<<<<<<< HEAD
        <div className='p-4 border-t flex items-center justify-end gap-2'>;
=======
        <div className=p-4 border-t flex items-center justify-end gap-2'>;
>>>>>>> origin/resolved-merge-conflicts
          <button
            onClick={() => onAction('approve, adminNotes)}
            className=px-3 py-2 rounded bg-green-600 text-white';
          >;
            Approve;
          </button>;
          <button
            onClick={() => onAction('remove, adminNotes)}
            className=px-3 py-2 rounded bg-red-600 text-white';
          >;
            Remove;
          </button>;
          <button
            onClick={() => onAction('warn, adminNotes)}
            className=px-3 py-2 rounded bg-yellow-600 text-white';
          >;
            Warn;
          </button>;
          <button
<<<<<<< HEAD
            onClick={() => onAction('ban', adminNotes)}
            className='px-3 py-2 rounded bg-gray-800 text-white';
=======
            onClick={() => onAction('ban, adminNotes)}
            className=px-3 py-2 rounded bg-gray-800 text-white';
=======
              rows={3}'
              className='w-full border rounded px-3 py-2 bg-white dark:bg-black';
            />;
          </div>;
        </div>;'
        <div className='p-4 border-t flex items-center justify-end gap-2'>;
          <button'
            onClick={() => onAction('approve', adminNotes)}'
            className='px-3 py-2 rounded bg-green-600 text-white';
          >;
            Approve;
          </button>;
          <button'
            onClick={() => onAction('remove', adminNotes)}'
            className='px-3 py-2 rounded bg-red-600 text-white';
          >;
            Remove;
          </button>;
          <button'
            onClick={() => onAction('warn', adminNotes)}'
            className='px-3 py-2 rounded bg-yellow-600 text-white';
          >;
            Warn;
          </button>;
          <button'
            onClick={() => onAction('ban', adminNotes)}'
            className='px-3 py-2 rounded bg-gray-800 text-white';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
          >;
            Ban User;
          </button>        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

export type ModerationModalProps = {
  flag: any | null,
  onClose: () => void,
<<<<<<< HEAD
  onAction: (action: 'approve' | 'remove' | 'warn' | 'ban', adminNotes?: string) => Promise<void>
};
=======
  onAction: (action: 'approve | remove' | 'warn | ban', adminNotes?: string) => Promise<void>
}
=======
  flag: any | null;,
  onClose: () => void;,
  onAction: (action: 'approve' | 'remove' | 'warn' | 'ban';, adminNotes?: string) => Promise<void>
};
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
export default function ModerationModal({ flag, onClose, onAction }: ModerationModalProps) {
  if (!flag) return null;
  return (
<<<<<<< HEAD
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='bg-white dark:bg-black w-full max-w-2xl rounded shadow-lg'>
        <div className='p-4 border-b flex items-center justify-between'>
          <div className='font-semibold'>Review Flag — {flag.id}</div>
<button onClick={onClose} className='text-gray-500 hover:text-gray-700'>✕</button>
        </div>
        <div className='p-4 space-y-4 text-sm'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <div className='text-gray-500'>Content Type</div>
              <div className='font-medium'>{flag.contentType}</div>
            </div>
            <div>
              <div className='text-gray-500'>User</div>
              <div className='font-medium'>{flag.userEmail}</div>
            </div>
            <div>
              <div className='text-gray-500'>Reason</div>
              <div className='font-medium'>{flag.reason}</div>
            </div>
            <div>
              <div className='text-gray-500'>Status</div>
              <div className='font-medium'>{flag.status}</div>
            </div>
          </div>
          <div>
            <div className='text-gray-500 mb-1'>Preview</div>
            <div className='border rounded p-3 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto'>{flag.snippet}</div>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='p-3 border rounded'>
              <div className='text-gray-500'>Toxicity</div>
              <div className='font-semibold'>{Math.round((flag.aiScores?.toxicity || 0) * 100)}%</div>
            </div>
            <div className='p-3 border rounded'>
              <div className='text-gray-500'>NSFW</div>
              <div className='font-semibold'>{Math.round((flag.aiScores?.nsfw || 0) * 100)}%</div>
            </div>
            <div className='p-3 border rounded'>
              <div className='text-gray-500'>Scam</div>
              <div className='font-semibold'>{Math.round((flag.aiScores?.scam || 0) * 100)}%</div>
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium mb-1' htmlFor='input-Admin Notes'>Admin Notes</label>
            <textarea value={adminNotes} onChange={e => setAdminNotes(e.target.value)} rows={3} className='w-full border rounded px-3 py-2 bg-white dark:bg-black' />
          </div>
        </div>
        <div className='p-4 border-t flex items-center justify-end gap-2'>

  );
}        <div className='p-4 border-t flex items-center justify-end gap-2'>
=======
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50>
      <div className=bg-white dark:bg-black w-full max-w-2xl rounded shadow-lg">
        <div className="p-4 border-b flex items-center justify-between>
          <div className=font-semibold">Review Flag — {flag.id}</div>
<button onClick={onClose} className="text-gray-500 hover:text-gray-700>✕</button>
        </div>
        <div className=p-4 space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-4>
            <div>
              <div className=text-gray-500">Content Type</div>
              <div className="font-medium>{flag.contentType}</div>
            </div>
            <div>
              <div className=text-gray-500">User</div>
              <div className="font-medium>{flag.userEmail}</div>
            </div>
            <div>
              <div className=text-gray-500">Reason</div>
              <div className="font-medium>{flag.reason}</div>
            </div>
            <div>
              <div className=text-gray-500">Status</div>
              <div className="font-medium>{flag.status}</div>
            </div>
          </div>
          <div>
<<<<<<< HEAD
            <div className=text-gray-500 mb-1">Preview</div>
            <div className="border rounded p-3 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto>{flag.snippet}</div>
=======
            <div className="text-gray-500 mb-1">Preview</div>
            <div className="border rounded p-3 bg-gray-50 dark: bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto">{flag.snippet;}</div>
>>>>>>> origin/chore/fix-lint-and-merge
          </div>
          <div className=grid grid-cols-3 gap-4">
            <div className="p-3 border rounded>
              <div className=text-gray-500">Toxicity</div>
              <div className="font-semibold>{Math.round((flag.aiScores?.toxicity || 0) * 100)}%</div>
            </div>
            <div className=p-3 border rounded">
              <div className="text-gray-500>NSFW</div>
              <div className=font-semibold">{Math.round((flag.aiScores?.nsfw || 0) * 100)}%</div>
            </div>
            <div className="p-3 border rounded>
              <div className=text-gray-500">Scam</div>
              <div className="font-semibold>{Math.round((flag.aiScores?.scam || 0) * 100)}%</div>
            </div>
          </div>
          <div>
            <label className=block text-sm font-medium mb-1" htmlFor="input-Admin Notes>Admin Notes</label>
            <textarea value={adminNotes} onChange={e => setAdminNotes(e.target.value)} rows={3} className=w-full border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
        </div>
<<<<<<< HEAD
        <div className="p-4 border-t flex items-center justify-end gap-2>

  );
}        <div className=p-4 border-t flex items-center justify-end gap-2">
>>>>>>> origin/resolved-merge-conflicts








  );
<<<<<<< HEAD
}        <div className='p-4 border-t flex items-center justify-end gap-2'>

          <button onClick={() => onAction('approve', adminNotes)} className='px-3 py-2 rounded bg-green-600 text-white'>Approve</button>
          <button onClick={() => onAction('remove', adminNotes)} className='px-3 py-2 rounded bg-red-600 text-white'>Remove</button>
          <button onClick={() => onAction('warn', adminNotes)} className='px-3 py-2 rounded bg-yellow-600 text-white'>Warn</button>
          <button onClick={() => onAction('ban', adminNotes)} className='px-3 py-2 rounded bg-gray-800 text-white'>Ban User</button>
      </div>
    </div>
);



  );

  );
);

=======
}        <div className="p-4 border-t flex items-center justify-end gap-2>

          <button onClick={() => onAction(approve', adminNotes)} className=px-3 py-2 rounded bg-green-600 text-white">Approve</button>
          <button onClick={() => onAction('remove, adminNotes)} className="px-3 py-2 rounded bg-red-600 text-white>Remove</button>
          <button onClick={() => onAction(warn', adminNotes)} className=px-3 py-2 rounded bg-yellow-600 text-white">Warn</button>
          <button onClick={() => onAction('ban, adminNotes)} className="px-3 py-2 rounded bg-gray-800 text-white>Ban User</button>
      </div>
    </div>

  );

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
export type ModerationModalProps = {
  flag: any | null,
  onClose: () => void,
  onAction: (action: 'approve' | 'remove' | 'warn' | 'ban', adminNotes?: string) => Promise<void>
};
export default function ModerationModal({ flag, onClose, onAction }: ModerationModalProps) {
  const [adminNotes, setAdminNotes] = useState('');
  if (!flag) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-black w-full max-w-2xl rounded shadow-lg">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="font-semibold">Review Flag — {flag.id}</div>
<button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <div className="p-4 space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-500">Content Type</div>
              <div className="font-medium">{flag.contentType}</div>
            </div>
            <div>
              <div className="text-gray-500">User</div>
              <div className="font-medium">{flag.userEmail}</div>
            </div>
            <div>
              <div className="text-gray-500">Reason</div>
              <div className="font-medium">{flag.reason}</div>
            </div>
            <div>
              <div className="text-gray-500">Status</div>
              <div className="font-medium">{flag.status}</div>
            </div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">Preview</div>
            <div className="border rounded p-3 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto">{flag.snippet}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 border rounded">
              <div className="text-gray-500">Toxicity</div>
              <div className="font-semibold">{Math.round((flag.aiScores?.toxicity || 0) * 100)}%</div>
            </div>
            <div className="p-3 border rounded">
              <div className="text-gray-500">NSFW</div>
              <div className="font-semibold">{Math.round((flag.aiScores?.nsfw || 0) * 100)}%</div>
            </div>
            <div className="p-3 border rounded">
              <div className="text-gray-500">Scam</div>
              <div className="font-semibold">{Math.round((flag.aiScores?.scam || 0) * 100)}%</div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="input-Admin Notes">Admin Notes</label>
            <textarea value={adminNotes} onChange={e => setAdminNotes(e.target.value)} rows={3} className="w-full border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
        </div>
        <div className="p-4 border-t flex items-center justify-end gap-2">
          <button onClick={() => onAction('approve', adminNotes)} className="px-3 py-2 rounded bg-green-600 text-white">Approve</button>
          <button onClick={() => onAction('remove', adminNotes)} className="px-3 py-2 rounded bg-red-600 text-white">Remove</button>
          <button onClick={() => onAction('warn', adminNotes)} className="px-3 py-2 rounded bg-yellow-600 text-white">Warn</button>
          <button onClick={() => onAction('ban', adminNotes)} className="px-3 py-2 rounded bg-gray-800 text-white">Ban User</button>
}        <div className="p-4 border-t flex items-center justify-end gap-2">;
          <button onClick={() => onAction('approve', adminNotes)} className="px-3 py-2 rounded bg-green-600 text-white">Approve</button>;
          <button onClick={() => onAction('remove', adminNotes)} className="px-3 py-2 rounded bg-red-600 text-white">Remove</button>;
          <button onClick={() => onAction('warn', adminNotes)} className="px-3 py-2 rounded bg-yellow-600 text-white">Warn</button>;
          <button onClick={() => onAction('ban', adminNotes)} className="px-3 py-2 rounded bg-gray-800 text-white">Ban User</button>;
      </div>;
    </div>;
  );
}
        </div>
      </div>
    </div>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
  on_close: () => void;
  on_action: (
    action: approve' | 'remove | warn' | 'ban,
    admin_notes?: string) => Promise < void>;
export default /**
 * ModerationModal - Function description
 */
function ModerationModal() {
  const [admin_notes, setAdminNotes] = useState (');
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='fixed inset - 0 z - 50 flex items - center justify - center bg - black / 50>;
      <div className=bg - white dark:bg - black w - full max - w-2xl rounded shadow - lg'>;
        <div className='p - 4 border - b flex items - center justify - between>;
          <div className=font - semibold'>Review Flag — {flag.id}</div>;
          <button;
            on_click={on_close}
            className='text - gray - 500 hover:text - gray - 700;
          >;
            ✕;
          </button>;
        </div>;
        <div className=p - 4 space - y-4 text - sm'>;
          <div className='grid grid - cols - 2 gap - 4>;
            <div>;
              <div className=text - gray - 500'>Content Type</div>;
              <div className='font - medium>{flag.content_type}</div>;
            </div>;
            <div>;
              <div className=text - gray - 500'>User</div>;
              <div className='font - medium>{flag.user_email}</div>;
            </div>;
            <div>;
              <div className=text - gray - 500'>Reason</div>;
              <div className='font - medium>{flag.reason}</div>;
            </div>;
            <div>;
              <div className=text - gray - 500'>Status</div>;
              <div className='font - medium>{flag.status}</div>;
            </div>;
          </div>;
          <div>;
            <div className=text - gray - 500 mb - 1'>Preview</div>;
            <div className='border rounded p - 3 bg - gray - 50 dark:bg - gray - 900 whitespace - pre - wrap max - h-48 overflow - auto>;
              {flag.snippet}
            </div>;
          </div>;
<<<<<<< HEAD
          <div className='grid grid - cols - 3 gap - 4'>;
            <div className='p - 3 border rounded'>;
              <div className='text - gray - 500'>Toxicity</div>;
              <div className='font - semibold'>;
                {Math.round ((flag.ai_scores?.toxicity || 0) * 100)}%;
              </div>;
            </div>;
            <div className='p - 3 border rounded'>;
              <div className='text - gray - 500'>NSFW</div>;
              <div className='font - semibold'>;
                {Math.round ((flag.ai_scores?.nsfw || 0) * 100)}%;
              </div>;
            </div>;
            <div className='p - 3 border rounded'>;
              <div className='text - gray - 500'>Scam</div>;
              <div className='font - semibold'>;
                {Math.round ((flag.ai_scores?.scam || 0) * 100)}%;
              </div>;
=======
          <div className=grid grid - cols - 3 gap - 4'>;
            <div className='p - 3 border rounded>;
              <div className=text - gray - 500'>Toxicity</div>;
              <div className='font - semibold>;
                {Math.round ((flag.ai_scores?.toxicity || 0) * 100)}%;
              </div>;
            </div>;
            <div className=p - 3 border rounded'>;
              <div className='text - gray - 500>NSFW</div>;
              <div className=font - semibold'>;
                {Math.round ((flag.ai_scores?.nsfw || 0) * 100)}%;
              </div>;
            </div>;
            <div className='p - 3 border rounded>;
              <div className=text - gray - 500'>Scam</div>;
              <div className='font - semibold>;
=======
  on_action: ('
    action: 'approve' | 'remove' | 'warn' | 'ban',

    admin_notes?: string) => Promise < void>;
;
export default /**;
 * ModerationModal - Function description;
 */
function ModerationModal() { return null; }
if (return null) {}
  $2;
}
  return ('
    <div className='fixed inset - 0 z - 50 flex items - center justify - center bg - black / 50'>;'
      <div className='bg - white dark:bg - black w - full max - w-2xl rounded shadow - lg'>;'
        <div className='p - 4 border - b flex items - center justify - between'>;'
          <div className='font - semibold'>Review Flag — {flag.id}</div>;
          <button;
            on_click={on_close}'
            className='text - gray - 500 hover:text - gray - 700';
          >;
            ✕;
          </button>;
        </div>;'
        <div className='p - 4 space - y-4 text - sm'>;'
          <div className='grid grid - cols - 2 gap - 4'>;
            <div>;'
              <div className='text - gray - 500'>Content Type</div>;'
              <div className='font - medium'>{flag.content_type}</div>;
            </div>;
            <div>;'
              <div className='text - gray - 500'>User</div>;'
              <div className='font - medium'>{flag.user_email}</div>;
            </div>;
            <div>;'
              <div className='text - gray - 500'>Reason</div>;'
              <div className='font - medium'>{flag.reason}</div>;
            </div>;
            <div>;'
              <div className='text - gray - 500'>Status</div>;'
              <div className='font - medium'>{flag.status}</div>;
>>>>>>> origin/resolved-merge-conflicts
            </div>;
          </div>;
          <div>;
            <label className='block text - sm font - medium mb - 1'>;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
              Admin Notes;
            </label>;
            <textarea;
              value={admin_notes}
              on_change={e => setAdminNotes (e.target.value)}
              rows={3}
              className='w - full border rounded px - 3 py - 2 bg - white dark:bg - black;
            />;
          </div>;
        </div>;
<<<<<<< HEAD
        <div className='p - 4 border - t flex items - center justify - end gap - 2'>;
=======
        <div className=p - 4 border - t flex items - center justify - end gap - 2'>;
>>>>>>> origin/resolved-merge-conflicts
          <button;
            on_click={() => on_action ('approve, admin_notes)}
            className=px - 3 py - 2 rounded bg - green - 600 text - white';
          >;
            Approve;
          </button>;
          <button;
            on_click={() => on_action ('remove, admin_notes)}
            className=px - 3 py - 2 rounded bg - red - 600 text - white';
          >;
            Remove;
          </button>;
          <button;
            on_click={() => on_action ('warn, admin_notes)}
            className=px - 3 py - 2 rounded bg - yellow - 600 text - white';
          >;
            Warn;
          </button>;
          <button;
<<<<<<< HEAD
            on_click={() => on_action ('ban', admin_notes)}
            className='px - 3 py - 2 rounded bg - gray - 800 text - white';
=======
            on_click={() => on_action ('ban, admin_notes)}
            className=px - 3 py - 2 rounded bg - gray - 800 text - white';
=======
              rows={3}'
              className='w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
        </div>;'
        <div className='p - 4 border - t flex items - center justify - end gap - 2'>;
          <button;'
            on_click={() => on_action ('approve', admin_notes)}'
            className='px - 3 py - 2 rounded bg - green - 600 text - white';
          >;
            Approve;
          </button>;
          <button;'
            on_click={() => on_action ('remove', admin_notes)}'
            className='px - 3 py - 2 rounded bg - red - 600 text - white';
          >;
            Remove;
          </button>;
          <button;'
            on_click={() => on_action ('warn', admin_notes)}'
            className='px - 3 py - 2 rounded bg - yellow - 600 text - white';
          >;
            Warn;
          </button>;
          <button;'
            on_click={() => on_action ('ban', admin_notes)}'
            className='px - 3 py - 2 rounded bg - gray - 800 text - white';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
          >;
            Ban User;
          </button>        </div>;
      </div>;
    </div>);
<<<<<<< HEAD
}        <div className='p - 4 border - t flex items - center justify - end gap - 2'>;
          <button on_click={() => on_action ('approve', admin_notes)} className='px - 3 py - 2 rounded bg - green - 600 text - white'>Approve</button>;
          <button on_click={() => on_action ('remove', admin_notes)} className='px - 3 py - 2 rounded bg - red - 600 text - white'>Remove</button>;
          <button on_click={() => on_action ('warn', admin_notes)} className='px - 3 py - 2 rounded bg - yellow - 600 text - white'>Warn</button>;
          <button on_click={() => on_action ('ban', admin_notes)} className='px - 3 py - 2 rounded bg - gray - 800 text - white'>Ban User</button>;
      </div>;
    </div>);
}
=======
}        <div className=p - 4 border - t flex items - center justify - end gap - 2">;
          <button on_click={() => on_action ('approve, admin_notes)} className="px - 3 py - 2 rounded bg - green - 600 text - white>Approve</button>;
          <button on_click={() => on_action (remove', admin_notes)} className=px - 3 py - 2 rounded bg - red - 600 text - white">Remove</button>;
          <button on_click={() => on_action ('warn, admin_notes)} className="px - 3 py - 2 rounded bg - yellow - 600 text - white>Warn</button>;
          <button on_click={() => on_action (ban', admin_notes)} className=px - 3 py - 2 rounded bg - gray - 800 text - white">Ban User</button>;
=======
    </div>);"
}        <div className="p - 4 border - t flex items - center justify - end gap - 2">;'"
          <button on_click={() => on_action ('approve', admin_notes)} className="px - 3 py - 2 rounded bg - green - 600 text - white">Approve</button>;'"
          <button on_click={() => on_action ('remove', admin_notes)} className="px - 3 py - 2 rounded bg - red - 600 text - white">Remove</button>;'"
          <button on_click={() => on_action ('warn', admin_notes)} className="px - 3 py - 2 rounded bg - yellow - 600 text - white">Warn</button>;'"
          <button on_click={() => on_action ('ban', admin_notes)} className="px - 3 py - 2 rounded bg - gray - 800 text - white">Ban User</button>;
>>>>>>> origin/chore/fix-lint-and-merge
      </div>;
    </div>);
<<<<<<< HEAD
}
=======
        </div>
        <div className=&quot;p-4 space-y-4 text-sm&quot;>
          <div className=&quot;grid grid-cols-2 gap-4&quot;>
            <div>
              <div className=&quot;text-gray-500&quot;>Content Type</div>
              <div className=&quot;font-medium&quot;>{flag.contentType}</div>
            </div>
            <div>
              <div className=&quot;text-gray-500&quot;>User</div>
              <div className=&quot;font-medium&quot;>{flag.userEmail}</div>
            </div>
            <div>
              <div className=&quot;text-gray-500&quot;>Reason</div>
              <div className=&quot;font-medium&quot;>{flag.reason}</div>
            </div>
            <div>
              <div className=&quot;text-gray-500&quot;>Status</div>
              <div className=&quot;font-medium&quot;>{flag.status}</div>
            </div>
          </div>
          <div>
            <div className=&quot;text-gray-500 mb-1&quot;>Preview</div>
            <div className=&quot;border rounded p-3 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto&quot;>{flag.snippet}</div>
          </div>
          <div className=&quot;grid grid-cols-3 gap-4&quot;>
            <div className=&quot;p-3 border rounded&quot;>
              <div className=&quot;text-gray-500&quot;>Toxicity</div>
              <div className=&quot;font-semibold&quot;>{Math.round((flag.aiScores?.toxicity || 0) * 100)}%</div>
            </div>
            <div className=&quot;p-3 border rounded&quot;>
              <div className=&quot;text-gray-500&quot;>NSFW</div>
              <div className=&quot;font-semibold&quot;>{Math.round((flag.aiScores?.nsfw || 0) * 100)}%</div>
            </div>
            <div className=&quot;p-3 border rounded&quot;>
              <div className=&quot;text-gray-500&quot;>Scam</div>
              <div className=&quot;font-semibold&quot;>{Math.round((flag.aiScores?.scam || 0) * 100)}%</div>
            </div>
          </div>
          <div>
            <label className=&quot;block text-sm font-medium mb-1&quot;>Admin Notes</label>
            <textarea value={adminNotes} onChange={e => setAdminNotes(e.target.value)} rows={3} className=&quot;w-full border rounded px-3 py-2 bg-white dark:bg-black&quot; />
          </div>
        </div>
        <div className=&quot;p-4 border-t flex items-center justify-end gap-2&quot;>
          <button onClick={() => onAction('approve', adminNotes)} className=&quot;px-3 py-2 rounded bg-green-600 text-white&quot;>Approve</button>
          <button onClick={() => onAction('remove', adminNotes)} className=&quot;px-3 py-2 rounded bg-red-600 text-white&quot;>Remove</button>
          <button onClick={() => onAction('warn', adminNotes)} className=&quot;px-3 py-2 rounded bg-yellow-600 text-white&quot;>Warn</button>
          <button onClick={() => onAction('ban', adminNotes)} className=&quot;px-3 py-2 rounded bg-gray-800 text-white&quot;>Ban User</button>
        </div>
      </div>
    </div>
  )

}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts




  );


ursor/fix-website-loading-errors-and-merge-6662

  );

<<<<<<< HEAD
export type ModerationModalProps = {;

export type ModerationModalProps = {
  flag: any | null;

import React, { useState } from 'react';
=======
<<<<<<< HEAD
export type ModerationModalProps = {
=======
import React, { useState } from 'react';

export type ModerationModalProps = {;
>>>>>>> origin/chore/fix-lint-and-merge

export type ModerationModalProps = {};
  flag: any | null;

<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
export type ModerationModalProps = any;

  onClose: () => void;
  onAction: (
    action: approve' | 'remove | warn' | 'ban
    adminNotes?: string
  ) => Promise<void>;
export default function ModerationModal({
  flag
  onClose
  onAction
}: ModerationModalProps) {
  flag,
  onClose,
  onAction
}: ModerationModalProps) {
  if (!flag) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50>
      <div className=bg-white dark:bg-black w-full max-w-2xl rounded shadow-lg'>
        <div className='p-4 border-b flex items-center justify-between>
          <div className=font-semibold'>Review Flag — {flag.id}</div>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700;
          >;
            ✕;
          </button>;
        </div>;
        <div className=p-4 space-y-4 text-sm'>;
          <div className='grid grid-cols-2 gap-4>;
            <div>;
              <div className=text-gray-500'>Content Type</div>;
              <div className='font-medium>{flag.contentType}</div>;
            </div>;
            <div>;
              <div className=text-gray-500'>User</div>;
              <div className='font-medium>{flag.userEmail}</div>;
            </div>;
            <div>;
              <div className=text-gray-500'>Reason</div>;
              <div className='font-medium>{flag.reason}</div>;
            </div>;
            <div>;
              <div className=text-gray-500'>Status</div>;
              <div className='font-medium>{flag.status}</div>;
            </div>;
          </div>;
          <div>;
            <div className=text-gray-500 mb-1'>Preview</div>;
            <div className='border rounded p-3 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto>;
              {flag.snippet}
            </div>;
          </div>;
<<<<<<< HEAD
          <div className='grid grid-cols-3 gap-4'>;
            <div className='p-3 border rounded'>;
              <div className='text-gray-500'>Toxicity</div>;
              <div className='font-semibold'>;
                {Math.round((flag.aiScores?.toxicity |0) * 100)}%;
              </div>;
            </div>;
            <div className='p-3 border rounded'>;
              <div className='text-gray-500'>NSFW</div>;
              <div className='font-semibold'>;
                {Math.round((flag.aiScores?.nsfw |0) * 100)}%;
              </div>;
            </div>;
            <div className='p-3 border rounded'>;
              <div className='text-gray-500'>Scam</div>;
              <div className='font-semibold'>;
=======
          <div className=grid grid-cols-3 gap-4'>;
            <div className='p-3 border rounded>;
              <div className=text-gray-500'>Toxicity</div>;
              <div className='font-semibold>;
                {Math.round((flag.aiScores?.toxicity |0) * 100)}%;
              </div>;
            </div>;
            <div className=p-3 border rounded'>;
              <div className='text-gray-500>NSFW</div>;
              <div className=font-semibold'>;
                {Math.round((flag.aiScores?.nsfw |0) * 100)}%;
              </div>;
            </div>;
            <div className='p-3 border rounded>;
              <div className=text-gray-500'>Scam</div>;
              <div className='font-semibold>;
>>>>>>> origin/resolved-merge-conflicts
                {Math.round((flag.aiScores?.scam |0) * 100)}%;
              </div>;
            </div>;
          </div>;
          <div>;
<<<<<<< HEAD
            <label className='block text-sm font-medium mb-1'>;
=======
            <label className=block text-sm font-medium mb-1'>;
=======
  onAction,
}: ModerationModalProps) {;'
  const [adminNotes, setAdminNotes] = useState('');
  if (!flag) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='bg-white dark:bg-black w-full max-w-2xl rounded shadow-lg'>
        <div className='p-4 border-b flex items-center justify-between'>

          <div className='font-semibold'>Review Flag — {flag.id}</div>
          <button;
            onClick={onClose}'
            className='text-gray-500 hover:text-gray-700'
          >
            ✕
          </button>
        </div>'
        <div className='p-4 space-y-4 text-sm'>'
          <div className='grid grid-cols-2 gap-4'>
            <div>'
              <div className='text-gray-500'>Content Type</div>'
              <div className='font-medium'>{flag.contentType}</div>
            </div>
            <div>'
              <div className='text-gray-500'>User</div>'
              <div className='font-medium'>{flag.userEmail}</div>
            </div>
            <div>'
              <div className='text-gray-500'>Reason</div>'
              <div className='font-medium'>{flag.reason}</div>
            </div>
            <div>'
              <div className='text-gray-500'>Status</div>'
              <div className='font-medium'>{flag.status}</div>
            </div>
          </div>
          <div>'
            <div className='text-gray-500 mb-1'>Preview</div>'
            <div className='border rounded p-3 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto'>
              {flag.snippet}
            </div>
          </div>'
          <div className='grid grid-cols-3 gap-4'>'
            <div className='p-3 border rounded'>'
              <div className='text-gray-500'>Toxicity</div>'
              <div className='font-semibold'>
                {Math.round((flag.aiScores?.toxicity |0) * 100)}%
              </div>
            </div>'
            <div className='p-3 border rounded'>'
              <div className='text-gray-500'>NSFW</div>'
              <div className='font-semibold'>
                {Math.round((flag.aiScores?.nsfw |0) * 100)}%
              </div>
            </div>'
            <div className='p-3 border rounded'>'
              <div className='text-gray-500'>Scam</div>'
              <div className='font-semibold'>
                {Math.round((flag.aiScores?.scam |0) * 100)}%
              </div>
            </div>
          </div>
          <div>'
            <label className='block text-sm font-medium mb-1'>
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
              Admin Notes;
            </label>;
            <textarea;
              value={adminNotes}
              onChange={e => setAdminNotes(e.target.value)}
              rows={3}
              className='w-full border rounded px-3 py-2 bg-white dark:bg-black;
            />;
          </div>;
        </div>;
<<<<<<< HEAD
        <div className='p-4 border-t flex items-center justify-end gap-2'>;
=======
        <div className=p-4 border-t flex items-center justify-end gap-2'>;
>>>>>>> origin/resolved-merge-conflicts
          <button;
            onClick={() => onAction('approve, adminNotes)}
            className=px-3 py-2 rounded bg-green-600 text-white';
          >;
            Approve;
          </button>;
          <button;
            onClick={() => onAction('remove, adminNotes)}
            className=px-3 py-2 rounded bg-red-600 text-white';
          >;
            Remove;
          </button>;
          <button;
            onClick={() => onAction('warn, adminNotes)}
            className=px-3 py-2 rounded bg-yellow-600 text-white';
          >;
            Warn;
          </button>;
          <button;
            onClick={() => onAction('ban, adminNotes)}
            className=px-3 py-2 rounded bg-gray-800 text-white';
          >;
            Ban User;
          </button>        </div>;
      </div>;
    </div>;
  )</button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  )}        <div className='p-4 border-t flex items-center justify-end gap-2'>;
          <button onClick={() => onAction('approve', adminNotes)} className='px-3 py-2 rounded bg-green-600 text-white'>Approve</button>;
          <button onClick={() => onAction('remove', adminNotes)} className='px-3 py-2 rounded bg-red-600 text-white'>Remove</button>;
          <button onClick={() => onAction('warn', adminNotes)} className='px-3 py-2 rounded bg-yellow-600 text-white'>Warn</button>;
          <button onClick={() => onAction('ban', adminNotes)} className='px-3 py-2 rounded bg-gray-800 text-white'>Ban User</button>;
=======
  )}        <div className="p-4 border-t flex items-center justify-end gap-2>;
          <button onClick={() => onAction('approve, adminNotes)} className=px-3 py-2 rounded bg-green-600 text-white">Approve</button>;
          <button onClick={() => onAction(remove', adminNotes)} className="px-3 py-2 rounded bg-red-600 text-white>Remove</button>;
          <button onClick={() => onAction('warn, adminNotes)} className=px-3 py-2 rounded bg-yellow-600 text-white">Warn</button>;
          <button onClick={() => onAction(ban', adminNotes)} className="px-3 py-2 rounded bg-gray-800 text-white>Ban User</button>;
>>>>>>> origin/resolved-merge-conflicts
      </div>;
    </div>;
)}
  )}
<<<<<<< HEAD
=======
            className='px-3 py-2 rounded bg-gray-800 text-white
=======
              rows={3}'
              className='w-full border rounded px-3 py-2 bg-white dark:bg-black'
            />
          </div>
        </div>'
        <div className='p-4 border-t flex items-center justify-end gap-2'>
          <button'
            onClick={() => onAction('approve', adminNotes)}'
            className='px-3 py-2 rounded bg-green-600 text-white'
          >
            Approve;
          </button>
          <button'
            onClick={() => onAction('remove', adminNotes)}'
            className='px-3 py-2 rounded bg-red-600 text-white'
          >
            Remove;
          </button>
          <button'
            onClick={() => onAction('warn', adminNotes)}'
            className='px-3 py-2 rounded bg-yellow-600 text-white'
          >
            Warn;
          </button>
          <button'
            onClick={() => onAction('ban', adminNotes)}'
            className='px-3 py-2 rounded bg-gray-800 text-white'
>>>>>>> origin/chore/fix-lint-and-merge
          >

      </div>
    </div>
<<<<<<< HEAD
  );
}        <div className=p-4 border-t flex items-center justify-end gap-2">
          <button onClick={() => onAction(approve', adminNotes)} className="px-3 py-2 rounded bg-green-600 text-white>Approve</button>
          <button onClick={() => onAction('remove, adminNotes)} className=px-3 py-2 rounded bg-red-600 text-white">Remove</button>
          <button onClick={() => onAction(warn', adminNotes)} className="px-3 py-2 rounded bg-yellow-600 text-white>Warn</button>
          <button onClick={() => onAction('ban', adminNotes)} className=px-3 py-2 rounded bg-gray-800 text-white">Ban User</button>
      </div>
    </div>
);
}
}
origin/cursor/automate-test-improve-and-merge-code-2533





}

=======
  );"
}        <div className="p-4 border-t flex items-center justify-end gap-2">'"
          <button onClick={() => onAction('approve', adminNotes)} className="px-3 py-2 rounded bg-green-600 text-white">Approve</button>'"
          <button onClick={() => onAction('remove', adminNotes)} className="px-3 py-2 rounded bg-red-600 text-white">Remove</button>'"
          <button onClick={() => onAction('warn', adminNotes)} className="px-3 py-2 rounded bg-yellow-600 text-white">Warn</button>'"
          <button onClick={() => onAction('ban', adminNotes)} className="px-3 py-2 rounded bg-gray-800 text-white">Ban User</button>
      </div>
    </div>
);
});

}        <div className="p-4 border-t flex items-center justify-end gap-2">
          <button onClick={() => onAction('approve', adminNotes)} className="px-3 py-2 rounded bg-green-600 text-white">Approve</button>
          <button onClick={() => onAction('remove', adminNotes)} className="px-3 py-2 rounded bg-red-600 text-white">Remove</button>
          <button onClick={() => onAction('warn', adminNotes)} className="px-3 py-2 rounded bg-yellow-600 text-white">Warn</button>
          <button onClick={() => onAction('ban', adminNotes)} className="px-3 py-2 rounded bg-gray-800 text-white">Ban User</button>
      </div>
    </div>
);
});
  );
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

  );

import React, { useState } from 'react';
export type ModerationModalProps = {;

export type ModerationModalProps = {
  flag: any | null;
  onClose: () => void;
  onAction: (
    action: 'approve' | 'remove' | 'warn' | 'ban'
    adminNotes?: string
  ) => Promise<void>;
export default function ModerationModal({
  flag
  onClose
  onAction
}: ModerationModalProps) {
  flag,
  onClose,
  onAction,
}: ModerationModalProps) {;
  const [adminNotes, setAdminNotes] = useState('');
  if (!flag) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='bg-white dark:bg-black w-full max-w-2xl rounded shadow-lg'>
        <div className='p-4 border-b flex items-center justify-between'>
          <div className='font-semibold'>Review Flag — {flag.id}</div>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700'
          >
            ✕
          </button>
        </div>
        <div className='p-4 space-y-4 text-sm'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <div className='text-gray-500'>Content Type</div>
              <div className='font-medium'>{flag.contentType}</div>
            </div>
            <div>
              <div className='text-gray-500'>User</div>
              <div className='font-medium'>{flag.userEmail}</div>
            </div>
            <div>
              <div className='text-gray-500'>Reason</div>
              <div className='font-medium'>{flag.reason}</div>
            </div>
            <div>
              <div className='text-gray-500'>Status</div>
              <div className='font-medium'>{flag.status}</div>
            </div>
          </div>
          <div>
            <div className='text-gray-500 mb-1'>Preview</div>
            <div className='border rounded p-3 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto'>
              {flag.snippet}
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='p-3 border rounded'>
              <div className='text-gray-500'>Toxicity</div>
              <div className='font-semibold'>
                {Math.round((flag.aiScores?.toxicity |0) * 100)}%
              </div>
            </div>
            <div className='p-3 border rounded'>
              <div className='text-gray-500'>NSFW</div>
              <div className='font-semibold'>
                {Math.round((flag.aiScores?.nsfw |0) * 100)}%
              </div>
            </div>
            <div className='p-3 border rounded'>
              <div className='text-gray-500'>Scam</div>
              <div className='font-semibold'>
                {Math.round((flag.aiScores?.scam |0) * 100)}%
              </div>
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>
              Admin Notes
            </label>
            <textarea
              value={adminNotes}
              onChange={e => setAdminNotes(e.target.value)}
              rows={3}
              className='w-full border rounded px-3 py-2 bg-white dark:bg-black'
            />
          </div>
        </div>
        <div className='p-4 border-t flex items-center justify-end gap-2'>
          <button
            onClick={() => onAction('approve', adminNotes)}
            className='px-3 py-2 rounded bg-green-600 text-white'
          >
            Approve
          </button>
          <button
            onClick={() => onAction('remove', adminNotes)}
            className='px-3 py-2 rounded bg-red-600 text-white'
          >
            Remove
          </button>
          <button
            onClick={() => onAction('warn', adminNotes)}
            className='px-3 py-2 rounded bg-yellow-600 text-white'
          >
            Warn
          </button>
          <button
            onClick={() => onAction('ban', adminNotes)}
>>>>>>> origin/resolved-merge-conflicts
            className='px-3 py-2 rounded bg-gray-800 text-white'
          >
            Ban User
          </button>        </div>
      </div>
    </div>
  );
}        <div className='p-4 border-t flex items-center justify-end gap-2'>
          <button onClick={() => onAction('approve', adminNotes)} className='px-3 py-2 rounded bg-green-600 text-white'>Approve</button>
          <button onClick={() => onAction('remove', adminNotes)} className='px-3 py-2 rounded bg-red-600 text-white'>Remove</button>
          <button onClick={() => onAction('warn', adminNotes)} className='px-3 py-2 rounded bg-yellow-600 text-white'>Warn</button>
          <button onClick={() => onAction('ban', adminNotes)} className='px-3 py-2 rounded bg-gray-800 text-white'>Ban User</button>
      </div>
    </div>
);
}
}
origin/cursor/automate-test-improve-and-merge-code-2533


<<<<<<< HEAD



}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
