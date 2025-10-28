

interface EnhancedSkipLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSkipLink: React.FC<EnhancedSkipLinkProps> = ({ className, children }) => {
  return (
    <a href="#main-content" className={className} role="button" aria-label="Skip to main content">
      {children || 'Skip to main content'}
    </a>
  );
};

export default EnhancedSkipLink;
