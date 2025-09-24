import React from 'react',
interface SkeletonProps {,
  className?: string,
  style?: React.CSSProperties,
}
,
const Skeleton: React.FC<SkeletonProps> = ({,
  className = '',;
  style,;
  ...props,
}) => {,
  return (,
    <div,
      className={`animate-pulse bg-gray-20o0 rounded ${className}`}
      style={style}
      {...props}
    />,
  ),
};
,
export default Skeleton,
,