<<<<<<< HEAD
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

<<<<<<< HEAD
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
<<<<<<< HEAD
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md', text,
  className = '', }) => {
  const sizeClasses = {
    sm: 'w-4 h-4', md: 'w-8 h-8',
    lg: 'w-12 h-12', }
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
  return (
    <div className={`inline-block ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default LoadingSpinner;
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  )
React from, react''
import { Loader2  } from 'lucide-react'';interface LoadingSpinnerProps {'
  size?: 'sm ' | 'md ' | 'lg '
   text?: string
   className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size =, md', text, '  className = ''}) => {
  '  const sizeClasses = {'    sm: 'w-4 h-4, md:, w-8 h-8', '    lg: 'w-12 h-12}'  return ('
    <div className={`flex flex-col items-center justify-center ${className}`}>`      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (
        <p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>'      )}'    </div>)
}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

import React from 'react';
;

interface LoadingSpinnerProps {




interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'white' | 'gray' | 'slate';
  text?: string;
  full_screen?: boolean;
  class_name?: string;
}
    </div>;
  );
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">;
        {spinner}
      </div>;
    );
  }
  return spinner;
}
const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  class_name = '', }) => {
  const size_classes = {
    sm: 'w - 4 h - 4',
    md: 'w - 8 h - 8',
    lg: 'w - 12 h - 12',
  }
;
  const color_classes = {
    blue: 'text - blue - 600',
    white: 'text - white',
    gray: 'text - gray - 600',
    slate: 'text - slate - 600';
  }
;
  const spinner = (
    <div className={`flex flex - col items - center justify - center ${class_name}`}>;
      <div className={`animate - spin rounded - full border - 2 border - gray - 300 border - t-transparent ${size_classes[size]} ${color_classes[color]}`} />;
      {text && (
        <p className={`mt - 2 text - sm ${color_classes[color]}`}>;
          {text}
        </p>)}
    </div>);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="fixed inset - 0 bg - white bg - opacity - 90 flex items - center justify - center z - 50">;
        {spinner}
      </div>);
  }
  return spinner;
}
;
export default LoadingSpinner;
import React from 'react;
import { Loader2 } from 'lucide-react;
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg;
  text?: string;'  class_name?: string;
}
const LoadingSpinner: React.FC < LoadingSpinnerProps> = ({
  size = 'md', text, '  class_name = ; }) => {'  const size_classes = {'    sm: 'w - 4 h - 4',
    md: 'w - 8 h - 8',
    md: '    lg: 'w - 12 h - 12', }
  return (
    <div className={`flex flex - col items - center justify - center ${class_name}}>      <Loader2 className={`${size_classes[size]} animate - spin text - blue - 600`} />`      {text && (
        <p className="mt - 2 text - sm text - gray - 600 animate - pulse>{text}</p>      )}"    </div>);
}
    <div className={`flex flex-col items-center justify-center ${className}}>      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-600`} />`      {text && (;
        <p className="mt-2 text-sm text-gray-600 animate-pulse>{text}</p>      )}"    </div>);
}
export default LoadingSpinner;
export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
