
interface SkipLinkProps {
  children?: React.ReactNode;
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

export default SkipLink;
