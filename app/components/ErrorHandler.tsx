
interface ErrorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'errorhandler ' + className}>
      {children || <p>ErrorHandler component</p>}
    </div>
  );
};

export default ErrorHandler;
