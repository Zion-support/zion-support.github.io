import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
type Props = any;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
  message: string
=======
  message: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  onJoin?: () => void;
  canJoin?: boolean
}

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
<<<<<<< HEAD
    </div>;
  );
}

}
}
=======
    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
