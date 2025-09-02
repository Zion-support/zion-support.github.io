
interface LoadingSpinnerProps {
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