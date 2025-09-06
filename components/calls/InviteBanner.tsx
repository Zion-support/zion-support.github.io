  onJoin?: () => void;
  canJoin?: boolean
}
          className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>          Join Meetingtype Props = {;
  message: string,;
  onJoin?: () => void;
  canJoin?: boolean;
};
export default function InviteBanner(): any ({ message, onJoin, canJoin = true }: Props) {;
  return (
import React from 'react';
type Props = {
  message: string,
  on_join?: () => void;
  can_join?: boolean;
}
