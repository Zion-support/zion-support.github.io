
interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticButton = ({ 
  className = '', 
  children 
}: FuturisticButtonProps) => {
  return (
    <div className={'futuristicbutton ' + className}>
      {children || <p>FuturisticButton component</p>}
    </div>
  );
};

export default FuturisticButton;