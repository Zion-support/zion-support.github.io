'use client';

interface ModernLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent';
  text?: string;
  fullScreen?: boolean;
}
const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps>= ({
  size = 'md',
  color = 'primary',
  text = 'Loading...',
  fullScreen = false
}) => {
          return (
    <div>
      <div>
        <div>
          <div className={spinnerClasses}></div>
          <div className="absolute inset-0 rounded-full border-2 border-current border-opacity-20"></div>
        </div>
        {text && (
          <p className="text-sm text-gray-300 animate-pulse">{text}</p>
        )}
      </div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>);
}
export default ModernLoadingSpinner