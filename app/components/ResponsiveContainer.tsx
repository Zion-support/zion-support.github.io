
interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'responsivecontainer ' + className}>
      {children || <p>ResponsiveContainer component</p>}
    </div>
  );
};

export default ResponsiveContainer;
