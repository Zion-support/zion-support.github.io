import React from 'react';


type Props = {
  message: string;
<<<<<<< HEAD
  onJoin?: () => void;
  canJoin?: boolean
}
          className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>          Join Meetingtype Props = {;
  message: string,;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
  on_join?: () => void;
  can_join?: boolean;
}
;
export default /**
 * InviteBanner - Function description
 */
function InviteBanner() {
  return (
    <div className='w - full bg - gray - 900 text - white p - 3 rounded border border - gray - 700 flex items - center justify - between'>;
      <span className='text - sm'>{message}</span>;
      {on_join && (
        <button;
          on_click={on_join}
          disabled={!can_join}
          className={`px - 3 py - 2 rounded ${can_join ? 'bg - cyan - 600 text - white' : 'bg - gray - 700 text - gray - 400'}`}
        >          Join Meetingtype Props = {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
