import React from 'react';
interface LoadingSkeletonProps {
  <LoadingSkeletonProps> = () => {
interface SkeletonProps {<SkeletonProps> = ({<div className="loadingskeleton">
      {}
    <div>
  );
};
export default LoadingSkeleton;
          <div className="bg-white rounded-lg shadow-lg p-6"><Skeleton height="24px" width="75%" className="mb-4" /><Skeleton height="16px" width="100%" className="mb-2" /><Skeleton height="16px" width="90%" className="mb-4" /><Skeleton height="40px" width="120px" rounded /><div>
export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => ()
          <div className="space-y-2">
    {Array.from({ length: lines }).map((_, index) => ()
          <Skeleton
        key={index}
        height="16px"
        width={index === lines - 1 ? '75%' : '100%'}
export const ImageSkeleton: React.FC<{ aspectRatio?: string }> = ({<div className="bg-gray-200 rounded-lg animate-pulse"
    style={{ aspectRatio }}
    role="status"
    aria-label="Loading image"
  ><span className="sr-only">Loading image...<span>
export const ListSkeleton: React.FC<{ items?: number }> = ({ items = 5 }) => ()
          <div className="space-y-3">
    {Array.from({ length: items }).map((_, index) => (
<div key={index} className="flex items-center space-x-3"><Skeleton height="40px" width="40px" rounded /><div className="flex-1 space-y-2"><Skeleton height="16px" width="80%" /><Skeleton height="14px" width="60%" /></div><div>
    ))}
export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({<div className="overflow-hidden"><div className="grid gap-4 mb-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array.from({ length: columns }).map((_, index) => ()
          <Skeleton key={index} height="20px" />
    {Array.from({ length: rows }).map((_, rowIndex) => (
<div
        key={rowIndex} className="grid gap-4 mb-2"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
<Skeleton key={colIndex} height="16px" />
export default Skeleton;

}}}}}