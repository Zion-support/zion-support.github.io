interface LazyComponentProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  fallback = <div className="flex items-center justify-center p-4">Loading...</div>, 
  children 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;

  return (

    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;