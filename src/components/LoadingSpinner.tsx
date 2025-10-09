'use client';


interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className,
  text = 'Loading...',
  fullScreen = false,
}) => {
      if (fullScreen) {
    return (
      <div>
        {spinner}
      </div>);
  }

  return spinner;
}
export default LoadingSpinner