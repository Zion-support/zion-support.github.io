import React from 'react';
<<<<<<< HEAD

const OptimizedLoadingSpinner: React.FC = () => {
  return (
    <div className="optimizedloadingspinner">
      <h2>OptimizedLoadingSpinner</h2>
      <p>OptimizedLoadingSpinner component.</p>
    </div>
  );
};

<<<<<<< HEAD
export default OptimizedLoadingSpinner;
=======
interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({
    size = 'md',
=======
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

interface OptimizedLoadingSpinnerProps {size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars'
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple'
  fullScreen?: boolean;}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps   /> = memo(
  ({const size = 'md',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,}) => {const sizeClasses = useMemo(
      () => ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',}),
      []
    );

    const textSizeClasses = useMemo(
      () => ({xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',}),
      []
    );

    const colorClasses = useMemo(
<<<<<<< HEAD
      () => ({
        blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',
      }),
      []
    );

    const renderSpinner = useMemo(() => {switch (variant) {
        case 'dots':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2].map(i => (</div>
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full animate-bounce ${colorClasses[color].split(' ')[1]}`}
                  style={{ animationDelay: `${i * 0.1,}s` }}
                />
              ))}</div>
          );

        case 'pulse':
          return (
            <div
              className={`${baseClasses} rounded-full animate-pulse`}
              role='status'
              aria-label='Loading'
            />
          );

        case 'skeleton':
          return (</div>
            <div className='space-y-2' role='status' aria-label='Loading'></div>
              <div
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              /></div>
              <div
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '75%' ,}}
              /></div>
              <div
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '50%' ,}}
              /></div>
          );

=======
      () => ({blue: 'text-blue-500',
        gray: 'text-gray-500',
        green: 'text-green-500',
        red: 'text-red-500',
        purple: 'text-purple-500',}),
      []
    )

    const renderSpinner = () => {switch (variant) {
        case 'dots':
          return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {[0, 1, 2].map((i) => (
                <div;
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,}
  }) =   /> {const sizeClasses = useMemo(() => ({xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',}
      }),;
      []);const textSizeClasses = useMemo(() => ({xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',}
      }),;
      []);const colorClasses = useMemo(() => ({blue: 'border-blue-600 bg-blue-600',
        gray: 'border-gray-600 bg-gray-600',
        green: 'border-green-600 bg-green-600',
        red: 'border-red-600 bg-red-600',
        purple: 'border-purple-600 bg-purple-600',}
      }),;
      []);const renderSpinner = useMemo(() => {switch (variant) {case 'dots':
          return (
    <div className="'flex" space-x-1' role="'status'" aria-label="'Loading'"   /></div>
              {[0, 1, 2].map(i => (</div>
                <div}
                  key="{i}"
                  className="{`${sizeClasses[size]}" rounded-full bg-current animate-pulse`}
                  style="{{" animationDelay: `${i * 0.2}s` }}
                   />))}
            </div>
  )
        case 'pulse':
          return (
    <div;
              className="{`${sizeClasses[size]}" rounded-full bg-current animate-pulse`}
               /></div>
  )
        case 'skeleton':
          return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"> </div>
  )
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
        case 'bars':
          return (
            <div className='flex space-x-1' role='status' aria-label='Loading'>
              {[0, 1, 2, 3].map(i => (</div>
                <div
                  key={i}
                  className={`w-1 ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{
                    height: `${12 + i * 4,}px`,
                    animationDelay: `${i * 0.1,}s`,
                  }}
<<<<<<< HEAD
                />
              ))}</div>
          );

        case 'spinner':
        default:
          return (
            <div
              className={`${baseClasses} rounded-full border-2 border-t-transparent animate-spin`}
              role='status'
              aria-label='Loading'
            />
          );
=======
                   />))}
            </div>
  )
        default:
          return (
    <div;
              className="{`${sizeClasses[size]}" border-2 border-current border-t-transparent rounded-full animate-spin`}
               /></div>
  )
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
      }
    }, [size, variant, color, sizeClasses, colorClasses]);

    const containerClasses = useMemo(() => {return `${baseClasses} ${fullScreenClasses} ${className}`;
    }, [fullScreen, className]);

    return (</div>
      <div className={containerClasses}></div>
        <div className='text-center'>
          {renderSpinner}
<<<<<<< HEAD
          {text && (</div>
            <p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>
=======
          {text && (</div&gt;}
            <p className="{`mt-2" text-gray-600 ${textSizeClasses[size]}`}></p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
              {text}
            </p>
  )}
        </div>
<<<<<<< HEAD
    );
  }
);

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';

export default OptimizedLoadingSpinner;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
  )
  }
</div></div>
  )
;

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';export default OptimizedLoadingSpinner

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
