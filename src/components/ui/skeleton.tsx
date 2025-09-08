import React from 'react';

type SkeletonProps = { className?: string; style?: React.CSSProperties };

export function Skeleton({ className, style }: SkeletonProps) {
  return <div className={className} style={style} />;
}

export default Skeleton;

