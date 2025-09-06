<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';

type Props = {;
  message: string;
  onJoin?: () => void;
  canJoin?: boolean;
<<<<<<< HEAD
}
export default function InviteBanner({
  message
  onJoin
  canJoin = true
}: Props) {
=======
};

export default function InviteBanner(): any ({;
  message,;
  onJoin,;
  canJoin = true,;
}: Props) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between'>;
      <span className='text-sm'>{message}</span>;
      {onJoin && (;
        <button
          onClick={onJoin}
          disabled={!canJoin}
<<<<<<< HEAD
          className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}
        >          Join Meetingtype Props = {
  message: string
  onJoin?: () => void;
  canJoin?: boolean
}
=======
          className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>          Join Meetingtype Props = {;
  message: string,;
  onJoin?: () => void;
  canJoin?: boolean;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

export default function InviteBanner(): any ({ message, onJoin, canJoin = true }: Props) {;
  return (
    <div className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between">;
      <span className="text-sm">{message}</span>;
      {onJoin && (;
        <button onClick={onJoin} disabled={!canJoin} className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>;
          Join Meeting;
        </button>;
      )}
    </div>;
  );
}
=======
import React from 'react';
type Props = {
  message: string,
  onJoin?: () => void;
  canJoin?: boolean
};

export default function InviteBanner({ message, onJoin, canJoin = true }: Props) {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
