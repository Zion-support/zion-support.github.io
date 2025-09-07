import React from 'react';

interface SkeletonProps {

}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', lines = 1 }) => {
  return (