
interface LoadingSpinnerProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'loadingspinner ' + className}>
      {children || <p>LoadingSpinner component</p>}
    </div>
  );
};

export default LoadingSpinner;
