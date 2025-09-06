import React from 'react'
type Props = {
  message: string,
  onJoin?: () => void,
  canJoin?: boolean
},

export default function InviteBanner({ message, onJoin, canJoin = true }: Props) {
  return (
    <div className=&quot;w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between&quot;>
      <span className=&quot;text-sm&quot;>{message}</span>
      {onJoin && (
        <button onClick={onJoin} disabled={!canJoin} className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
import React from 'react';

type Props = {_message: string;
  onJoin?: () => void;
  canJoin?: boolean;};

export default function InviteBanner(_{_message, _onJoin, _canJoin = true}: Props) {_return (
    <div className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between">
      <span className="text-sm">{message}</span>
      {_onJoin && (
        <button onClick={onJoin} disabled={_!canJoin} className={_`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          Join Meeting
        </button>
      )}
    </div>
  )
}