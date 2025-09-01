type LoadingSpinnerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string};
export default function LoadingSpinner({ size = 'md', className = '', text }: LoadingSpinnerProps) {
  const sizeClasses: Record<string, string> = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-cyan-500 rounded-full animate-spin`} aria-label="Loading" />
      {text ? <p className="mt-3 text-sm text-gray-400">{text}</p> : null}
    </div>
  )}
