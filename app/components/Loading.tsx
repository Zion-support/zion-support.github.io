<<<<<<< HEAD
interface LoadingProps {
<<<<<<< HEAD
<<<<<<< HEAD
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function Loading({ className = '', children }: LoadingProps) {
  return (
    <div className={`${className}`}>
=======
export default function Loading({ className = '', children, ...props }: LoadingProps) {
<<<<<<< HEAD
  return (
    <div className={`loading-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}
=======
export default function Loading({ className = '', children, ...props }: LoadingProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
}

export default function Loading({ className = '' }: LoadingProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <p className="text-white text-lg font-medium">{message}</p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};
=======

  className?: string;
  children?: React.ReactNode;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

export default Loading;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
interface LoadingProps {;
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
