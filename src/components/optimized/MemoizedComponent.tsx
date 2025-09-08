import React, { memo, useMemo, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface MemoizedComponentProps {
  data: any[];
  onItemClick: (item: any) => void;
  className?: string;
  searchTerm?: string;
}

// Memoized item component
const MemoizedItem = memo<{
  item: any;
  onClick: (item: any) => void;
  searchTerm?: string;
}>(({ item, onClick, searchTerm }) => {
  const handleClick = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  const isHighlighted = useMemo(() => {
    if (!searchTerm) return false;
    return item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
           item.description?.toLowerCase().includes(searchTerm.toLowerCase());
  }, [item, searchTerm]);

  return (
    <div
      className={cn(
        'p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md',
        isHighlighted && 'bg-blue-50 border-blue-200'
      )}
      onClick={handleClick}
    >
      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
    </div>
  );
});

MemoizedItem.displayName = 'MemoizedItem';

// Main memoized component
export const MemoizedComponent = memo<MemoizedComponentProps>(({
  data,
  onItemClick,
  className,
  searchTerm,
}) => {
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter(item =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const handleItemClick = useCallback((item: any) => {
    onItemClick(item);
  }, [onItemClick]);

  return (
    <div className={cn('space-y-2', className)}>
      {filteredData.map((item, index) => (
        <MemoizedItem
          key={item.id || index}
          item={item}
          onClick={handleItemClick}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
});

MemoizedComponent.displayName = 'MemoizedComponent';