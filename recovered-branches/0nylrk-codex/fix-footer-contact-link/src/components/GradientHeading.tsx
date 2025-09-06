import { cn } from '@/lib/utils';
import React from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export function GradientHeading({
  children,
  className,
  level = 'h2',
}: GradientHeadingProps) {
  const Tag = level;

  
    >
      {children}
    </Tag>
  );
