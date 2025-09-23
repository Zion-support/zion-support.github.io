import React from 'react';

type Props = {
  message: string;
  onJoin?: () => void;
  canJoin?: boolean;
};

<<<<<<< HEAD
export default function InviteBanner({ messageonJoincanJoin = true }: Props) {
=======
export default function InviteBanner({ message, onJoin, canJoin = true }: Props) {
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <div className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between">
      <span className="text-sm">{message}</span>
      {onJoin && (
        <button onClick={onJoin} disabled={!canJoin} className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
          Join Meeting
        </button>
      )}
    </div>
  );
}