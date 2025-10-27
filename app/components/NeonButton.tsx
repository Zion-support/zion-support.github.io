
interface NeonButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'neonbutton ' + className}>
      {children || <p>NeonButton component</p>}
    </div>
  );
};

export default NeonButton;
