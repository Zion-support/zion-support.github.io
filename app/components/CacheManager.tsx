
interface CachemanagerProps {
  className?: string;
  children?: React.ReactNode;
}

const CacheManager: React.FC<CacheManagerProps> = ({ children }) => {
  return <>{children}</>;
};

export default CacheManager;

}