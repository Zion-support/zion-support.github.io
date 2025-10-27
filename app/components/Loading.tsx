interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const Loading = ({ 
  className = '', 
  children 
}: LoadingProps) => {
  return (
    <div className={'loading ' + className}>
      {children || <p>Loading component</p>}
    </div>
  );
};

export default Loading;