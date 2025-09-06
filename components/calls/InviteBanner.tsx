import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
type Props = any;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
type Props = {
  message: string;
  onJoin?: () => void;
  canJoin?: boolean;
<<<<<<< HEAD
}
=======
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
        >          Join Meetingtype Props = {
  message: string
  onJoin?: () => void;
  canJoin?: boolean
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function InviteBanner({ message, onJoin, canJoin = true }: Props) {
  return (
    <div className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between">
      <span className="text-sm">{message}</span>
      {onJoin && (
        <button onClick={onJoin} disabled={!canJoin} className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
=======
        >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          Join Meeting
        </button>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
