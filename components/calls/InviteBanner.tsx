<<<<<<< HEAD
import React from 'react';

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

<<<<<<< HEAD
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
  message: string
  message: string,;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
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
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
    <div className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 flex items-center justify-between">
      <span className="text-sm">{message}</span>
      {onJoin && (
        <button onClick={onJoin} disabled={!canJoin} className={`px-3 py-2 rounded ${canJoin ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
          Join Meeting
        </button>
      )}
    </div>;
  );
<<<<<<< HEAD
}

}
}
    </div>
  );
<<<<<<< HEAD
}
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
=======
import React from 'react';
type Props = {
  message: string,
  on_join?: () => void;
  can_join?: boolean;
}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
