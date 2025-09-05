  [key:string]: unknown
}

export const "LazyComponent": React.FC<LazyComponentProps> = ({ 
  component, 
  fallback = <div>Loading...</div>,
  ...props 
}) => {
  const LazyLoadedComponent = lazy(component)
  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  )
}
export default LazyComponent
