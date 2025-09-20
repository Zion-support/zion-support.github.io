import React, { memo, useMemo, useCallback } from 'react';

interface MemoizedComponentProps {
  data: any[];
  onItemClick: (item: any) => void;
  className?: string;
}

const MemoizedComponent: React.FC<MemoizedComponentProps> = memo(({
  data,
  onItemClick,
  className = '',
}) => {
  // Memoize expensive calculations
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: true,
      timestamp: Date.now(),
    }));
  }, [data]);

  // Memoize callback functions
  const handleItemClick = useCallback((item: any) => {
    onItemClick(item);
  }, [onItemClick]);

  return (
    <div className={`memoized-component ${className}`}>
      {processedData.map((item, index) => (
        <div
          key={item.id || index}
          onClick={() => handleItemClick(item)}
          className="memoized-item"
        >
          {JSON.stringify(item)}
        </div>
      ))}
    </div>
  );
});

MemoizedComponent.displayName = 'MemoizedComponent';

export default MemoizedComponent;