
interface EnhancedLoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedLoadingSpinner({ className = '', children }: EnhancedLoadingSpinnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
