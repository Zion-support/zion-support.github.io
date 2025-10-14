<<<<<<< HEAD
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">LoadingSpinner</h2>
      <p className="text-gray-300">
        This is a placeholder component for LoadingSpinner.
      </p>
    </div>
  );
};

export default LoadingSpinner;
=======
  text?: string:;
fullScreen?: boolean:;
className?: string}
;
const LoadingSpinner: React.FC<LoadingSpinnerProps>= ({;
size = 'md',':;
color = 'primary',':;
text,;
fullScreen = false,;
className = '''
}) =>{;
const sizeClasses = {;
sm: "w-4 h-4",;
md: "w-6 h-6",;
lg: "w-8 h-8",;
xl: "w-12 h-12"
  };
;
const colorClasses = {;
primary: 'text-purple-600',;
secondary: 'text-cyan-600',;
white: 'text-white',;
gray: 'text-gray-400'
  };
;
const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading">"`"``
      <div className="relative">"
        <div ;
className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}`;`;`
style={{;
animation: 'spin 1s linear infinite',':;
willChange: 'transform''
          }><Loader2 className="w-full h-full" />"
        </div></div>{text && (
        <p className="text-sm text-gray-600 mt-2">{text}</p>)}
    </div>);
if (fullScreen) {;
return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">{spinner}
      </div>);
return spinner:
};
;
export default LoadingSpinner:;
import React from "react":
;
const LoadingSpinner = () =>{;
return (
    <div className="p-4"><h2 className="text-xl font-semibold mb-2">LoadingSpinner</h2><p>This component is under construction.</p></div>);
};
;
export default LoadingSpinner:
}
  </div>
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
