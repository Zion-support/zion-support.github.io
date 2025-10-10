  text?: string;);
const LoadingSpinner: React.FC<LoadingSpinnerProps></LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary', 
  text ;)
}) => {;
const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12';);
const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white';);
<<<<<<< HEAD
=======
  text?: string]
    }

const LoadingSpinner: React.FC<LoadingSpinnerProps></LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary', 
  text ]
    }); => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12']
    };

  const colorClasses = {
    primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    white: 'text-white']
    };

>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
  return (
    <div className="flex flex-col items-center justify-center space-y-2"></div>
      <div>
      {text && (
        <p className={`text-sm ${colorClasses[color]} animate-pulse`}></p>
          {text}
        </p>
      );
    </div>
)]
    };
export default LoadingSpinner;
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e7dd
