interface LoadingSpinnerProps {
=======

interface LoadingSpinnerProps {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'white' | 'gray' | 'slate';
  text?: string;
  full_screen?: boolean;
  class_name?: string;
}
          {text}
        </p>;
      )}
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
=======
export default LoadingSpinner;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
