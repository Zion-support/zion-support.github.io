

interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ className, children }) => {
  return (
    <div className={className} role="region" aria-label="Loading States">
      {children || <p>Loading States</p>}
    </div>
  );
};

export default LoadingStates;
