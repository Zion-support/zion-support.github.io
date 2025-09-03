
<<<<<<< HEAD
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg';
   className?: string}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
  size = 'md',;
  className = '}) => {;
  const sizeClasses = { sm: 'w-4 h-4',;
    md: 'w-8 h-8',;
    lg: 'w-12 h-12'}
;
  return (<div className={`flex items-center justify-center ${className}`}>;
      <div;
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        role='status';
      >;
        <span className='sr-only'>Loading...</span>;
      </div>;
    </div>;
  )}
=======
<<<<<<< HEAD
interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';
   className?: string}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({size = 'md', className=''}) => {const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8',
    lg: 'w-12 h-12'}

  return (<div className={`flex items-center justify-center ${className}`}" >`
      <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}" role='status'" >"
=======
interface LoadingSpinnerProps {
<<<<<<< HEAD
  size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg';
   className?: string}&apos;&apos;
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = &apos;md&apos;,
  className = &apos;&apos;}) => {&apos;}&apos;
  const sizeClasses = { sm: &apos;w-4 h-4&apos;,
    md: &apos;w-8 h-8&apos;,
    lg: &apos;w-12 h-12&apos;}

  return (&apos;<div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}
        role=&apos;status&apos;
      >&apos;
        <span className=&apos;sr-only&apos;>Loading...&apos;</span>
      </div>
    </div>
  )};
=======
  size?: 'sm' | 'md' | 'lg';
   className?: string}
<<<<<<< HEAD
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({""
  size = 'md', className = ''}) => {""
  const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8',""
=======
<<<<<<< HEAD
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md', className = ''}) => {
  const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8',
=======
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({"
  size = 'md', className = ''}) => {"
  const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8,
>>>>>>> main
>>>>>>> main
    lg: 'w-12 h-12'}
""
  return (<div className={`flex items-center justify-center ${className}`}"" >`"`"
      <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`}""
        role='status'"" >""
>>>>>>> main
        <span className='sr-only'>Loading...</span>
      </div>
    </div>"`"
  )}"`"
"`"
>>>>>>> main
>>>>>>> main
