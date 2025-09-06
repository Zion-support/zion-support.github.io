<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface LoadingSpinnerProps {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
  )
=======
<<<<<<< HEAD
  );
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};

<<<<<<< HEAD
export default LoadingSpinner;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'white' | 'gray' | 'slate';
  text?: string;
  full_screen?: boolean;
  class_name?: string;
}
<<<<<<< HEAD


const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
  size = 'md',;
  text = 'Loading...',;
  className = '',}) => {;
  const sizeClasses = {;
    sm: 'w-4 h-4',;
    md: 'w-8 h-8',;
    lg: 'w-12 h-12',;
  };
  const colorClasses = {;
    blue: 'text-blue-600',;
    white: 'text-white',;
    gray: 'text-gray-600',;
    slate: 'text-slate-600';
  };
  const spinner = (;
    <div className={`flex flex-col items-center justify-center ${className}`}>;
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`} />;
      {text && (;
        <p className={`mt-2 text-sm ${colorClasses[color]}`}>;

          {text}
        </p>;
      )}
    </div>
  );
  if (fullScreen) {
=======
    </div>;
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <p className="text-lg">Loading...</p>
      </div>
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export default LoadingSpinner;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
