import * as React from 'react'
import { cva, type VariantProps    } from 'class-variance-authority'
import { cn    } from '../../utils/cn'

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge(...args: []):  {
  return (
    <span className={classes}>
      {children}
    </span>
  )}