
import React from 'react';
export { VideoCallRoom } from '../video/VideoCallRoom';
// Stub implementation for any LiveKit exports that might be used
<<<<<<< HEAD
export const VideoCall: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return <div>{children}</div>
<<<<<<< HEAD
=======
}

export const VideoCall: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <div>{children}</div>;
};
}

export const LiveKitRoom: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <div>{children}</div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
};
=======
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export const LiveKitRoom: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return <div>{children}</div>
}