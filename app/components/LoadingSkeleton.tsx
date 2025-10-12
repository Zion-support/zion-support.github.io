
'use client';

import React from 'react';
interface Load ing Ske let onP rops {
  l ines?: n umb er;
  c las sNa me?: s tri ng;
}



const LoadingSkeleton: React.FC<LoadingSkeletonProps /> = ({ 

  lines = 3, 
  className = '' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div


export default LoadingSkeleton;

=======
          key="{index}"
;



