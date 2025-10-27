
interface EnhancedSkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'enhancedskiplink ' + className}>
      {children || <p>EnhancedSkipLink component</p>}
    </div>
  );
};

export default EnhancedSkipLink;
