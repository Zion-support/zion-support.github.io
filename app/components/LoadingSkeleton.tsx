'use client';
import React from 'react';

interface Loading Skeleton Props {
  lines?: number;
  class Name?: string;
}

const Loading Skeleton: React.F C<L oading Skeleton Props /> = ({ 
  lines = 3, 
  class Name = '' 
}) => {
  return (
    <d iv class Name={`animate-pulse ${class Name}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key="{index}"
;
