'use client';
import React from 'react';

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;

const LoadingSkeleton: React.FC<LoadingSkeletonProps /> = ({ 
  lines = 3, 
  className = '' 
  return (
 (

          key="{index}"
;

