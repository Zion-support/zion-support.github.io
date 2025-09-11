import React, { memo, useMemo, useCallback } from 'react';

interface MemoizedComponentProps {
  children: React.ReactNode;
  dependencies?: any[];
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const MemoizedComponent: React.FC<MemoizedComponentProps> = memo(({
  children,
  dependencies = [],
  className = '',
  style = {},
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const memoizedStyle = useMemo(() => style, [JSON.stringify(style)]);
  
  const memoizedClassName = useMemo(() => className, [className]);

  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const handleMouseEnter = useCallback(() => {
    onMouseEnter?.();
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    onMouseLeave?.();
  }, [onMouseLeave]);

  return (
    <div
      className={memoizedClassName}
      style={memoizedStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  if (prevProps.children !== nextProps.children) return false;
  if (prevProps.className !== nextProps.className) return false;
  if (JSON.stringify(prevProps.style) !== JSON.stringify(nextProps.style)) return false;
  if (prevProps.onClick !== nextProps.onClick) return false;
  if (prevProps.onMouseEnter !== nextProps.onMouseEnter) return false;
  if (prevProps.onMouseLeave !== nextProps.onMouseLeave) return false;
  
  // Check dependencies
  if (prevProps.dependencies?.length !== nextProps.dependencies?.length) return false;
  if (prevProps.dependencies && nextProps.dependencies) {
    return prevProps.dependencies.every((dep, index) => 
      JSON.stringify(dep) === JSON.stringify(nextProps.dependencies[index])
    );
  }
  
  return true;
});

MemoizedComponent.displayName = 'MemoizedComponent';

export default MemoizedComponent;