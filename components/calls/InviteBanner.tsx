import React from 'react';
<<<<<<< HEAD

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
=======
=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
type Props = {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
    <div className='w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between'>;
      <span className='text-sm'>{message}</span>;
      {onJoin && (;
=======
    <div className='w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between'>
      <span className='text-sm'>{message}</span>
      {onJoin && (
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        <button
          onClick={onJoin}
          disabled={!canJoin}
          className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}
        >          Join Meetingtype Props = {
<<<<<<< HEAD
  message: string
=======
<<<<<<< HEAD
  message: string
=======
  message: string,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
import React from 'react';
type Props = {
  message: string,
  on_join?: () => void;
  can_join?: boolean;
}
<<<<<<< HEAD
;
export default /**
 * InviteBanner - Function description
 */
function InviteBanner() {
  return (
    <div className="w - full bg - gray - 900 text - white p - 3 rounded border border - gray - 700 flex items - center justify - between">;
      <span className="text - sm">{message}</span>;
      {on_join && (
        <button on_click={on_join} disabled={!can_join} className={`px - 3 py - 2 rounded ${can_join ? 'bg - cyan - 600 text - white' : 'bg - gray - 700 text - gray - 400'}`}>;
          Join Meeting;
        </button>)}
    </div>);
}
=======

=======

    </div>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
