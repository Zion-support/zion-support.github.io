import React from 'react';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
type Props = {
  message: string;
  onJoin?: () => void;
  canJoin?: boolean;
};

export default function InviteBanner({
  message,
  onJoin,
  canJoin = true,
}: Props) {
  return (
    <div className='w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between'>
      <span className='text-sm'>{message}</span>
      {onJoin && (
        <button
          onClick={onJoin}
          disabled={!canJoin}
          className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}
        >          Join Meeting
=======
        <button onClick={onJoin} disabled={!canJoin} className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          Join Meeting
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </button>
      )}
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
