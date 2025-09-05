
<<<<<<< HEAD
import React from 'react',
export { VideoCallRoom } from '../video/VideoCallRoom',

// Stub implementation for any LiveKit exports that might be used
export const VideoCall: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return <div>{children}</div>
},

export const LiveKitRoom: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return <div>{children}</div>
},
=======
import React from 'react';
export {_VideoCallRoom} from '../video/VideoCallRoom';

// Stub implementation for any LiveKit exports that might be used
export const VideoCall: React.FC<{_children?: React.ReactNode}> = (_{_children}) => {_return <div>{children}</div>;
};

export const LiveKitRoom: React.FC<{_children?: React.ReactNode}> = (_{_children}) => {_return <div>{children}</div>;
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
