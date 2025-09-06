<<<<<<< HEAD


=======
import React from 'react';
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
type Props = {
  message: string;
  onJoin?: () => void;
  canJoin?: boolean;
}
export default function InviteBanner({
  message
  onJoin
  canJoin = true
}: Props) {
  return (
    <div className='w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between'>
      <span className='text-sm'>{message}</span>
      {onJoin && (
        <button
          onClick={onJoin}
          disabled={!canJoin}
          className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}
        >          Join Meetingtype Props = {
<<<<<<< HEAD
  message: string
=======
  message: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  onJoin?: () => void;
  canJoin?: boolean
}
=======
          className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>          Join Meetingtype Props = {;
  message: string,;
  onJoin?: () => void;
  canJoin?: boolean;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

export default function InviteBanner(): any ({ message, onJoin, canJoin = true }: Props) {;
  return (
    <div className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between">;
      <span className="text-sm">{message}</span>;
      {onJoin && (;
        <button onClick={onJoin} disabled={!canJoin} className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>;
          Join Meeting;
        </button>;
      )}

import React from 'react';
type Props = {
  message: string,
  on_join?: () => void;
  can_join?: boolean;
}

=======

    </div>
  );
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
