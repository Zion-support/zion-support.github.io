
      <img;
        src={src};
        alt={alt};
        width={width};
        height={height};
        loading={loading};
        onLoad={handleLoad};
        onError={handleError};
        className={`transition-opacity duration-300 ${} ${hasError ? 'hidden' : ''}`};
      />;
      {hasError && (, <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">, Failed to load image, // Performance metrics collection, export const usePerformanceMetrics = () => {;
  const [metrics, setMetrics] = React.useState({, renderCount: 0,
    lastRenderTime: 0,

  const recordRender = useCallback((renderTime: number) => {,
    setMetrics(prev => ({;
      renderCount: prev.renderCount + 1,
      lastRenderTime: renderTime,

  return { metrics, recordRender }
};
