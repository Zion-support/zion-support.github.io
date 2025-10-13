
interface AnalyticsproviderProps {
  className?: string;
  children?: React.ReactNode;
}

  return (
    <div className={`analyticsprovider-component ${className}`} {...props}>
      {children}
    </div>
  );
