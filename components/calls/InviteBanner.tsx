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
  message: string;
    message: string,;
type Props = {;
  message: string;
  return (
    <div className='w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between'>;
      <span className='text-sm'>{message}</span>;
      {onJoin && (;
        <button
          onClick={onJoin}
          disabled={!canJoin}
        >          Join Meetingtype Props = {
  message: string
  onJoin?: () => void;
  canJoin?: boolean
}
          className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>          Join Meetingtype Props = {;
  message: string,;
  onJoin?: () => void;
  canJoin?: boolean
};
export default function InviteBanner(): any ({ message, onJoin, canJoin = true }: Props) {;
  return (
    <div className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between">
      <span className="text-sm">{message}</span>
      {onJoin && (
        <button onClick={onJoin} disabled={!canJoin} className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
          Join Meeting
        </button>
      )}
    </div>;
  );
}
import React from 'react';
type Props = {
  message: string,
  on_join?: () => void;
  can_join?: boolean;
}