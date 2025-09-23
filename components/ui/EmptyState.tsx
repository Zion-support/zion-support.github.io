import Link from 'next/link';
import EnhancedButton from './EnhancedButton';

export type EmptyStateProps ={
  title: string;
  description?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

