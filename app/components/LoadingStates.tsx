
interface LoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'loadingstates ' + className}>
      {children || <p>LoadingStates component</p>}
    </div>
  );
};

export default LoadingStates;
