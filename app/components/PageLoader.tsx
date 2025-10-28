const PageLoader = () => {
  return (
    <div className="p-4">
      <h2>PageLoader</h2>
      <p>Component implementation coming soon...</p>
    </div>
  );
};

interface PageLoaderProps {
  className?: string;
  children?: React.ReactNode;
}

const PageLoader: React.FC<PageLoaderProps> = ({ className = '', children }) => {
  return (
    <div className={`page-loader ${className}`}>
      {children}
    </div>
  );
};

PageLoader.displayName = 'PageLoader';

export default PageLoader;