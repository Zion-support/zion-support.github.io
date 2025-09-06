
interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  children, 
  fallback = <LoadingSpinner /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyComponent;
