
<<<<<<< HEAD
import React from "react";
import Link from "next/link";
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}
export default function EmptyState({
  title
  description
  icon
  primaryAction
  secondaryAction
}: EmptyStateProps) {
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";
import Link from "next/link";
import EnhancedButton from "./EnhancedButton";

export type EmptyStateProps = {;
  title: string;
  description?: string;
  icon?: React && React.ReactNode;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

export default function EmptyState(): any ({;
  title,;
  description,;
  icon,;
  primaryAction,;
  secondaryAction,;
}: EmptyStateProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'>;
      <div className='text-3xl opacity-70'>{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold'>{title}</h3>;
      {description && (;
        <p className='text-sm opacity-80 max-w-prose'>{description}</p>;
      )}
<<<<<<< HEAD
      {(primaryAction |secondaryAction) && (
        <div className='flex gap-2 mt-2'>
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size='md'>{primaryAction.label}</EnhancedButton>              </a>export type EmptyStateProps = {
  title: string
  description?: string;
  icon?: React.ReactNode;
  primaryAction?: { label: string, href: string }
=======
      {(primaryAction || secondaryAction) && (;
        <div className='flex gap-2 mt-2'>;
          {primaryAction && (;
            <Link href={primaryAction && primaryAction.href}>;
              <a>;
                <EnhancedButton size='md'>{primaryAction && primaryAction.label}</EnhancedButton>              </a>export type EmptyStateProps = {;
  title: string,;
  description?: string;
  icon?: React && React.ReactNode;
  primaryAction?: { label: string, href: string },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  secondaryAction?: { label: string, href: string }
}

export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;
  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>;
      <h3 className="text-lg font-semibold">{title}</h3>;
      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
<<<<<<< HEAD
      {(primaryAction |secondaryAction) && (
        <div className="flex gap-2 mt-2">
          {primaryAction && (
            <Link href={primaryAction.href}>
              <a>
                <EnhancedButton size="md">{primaryAction.label}</EnhancedButton>
              </a>
            </Link>
=======
      {(primaryAction || secondaryAction) && (;
        <div className="flex gap-2 mt-2">;
          {primaryAction && (;
            <Link href={primaryAction && primaryAction.href}>;
              <a>;
                <EnhancedButton size="md">{primaryAction && primaryAction.label}</EnhancedButton>;
              </a>;
            </Link>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          )}
          {secondaryAction && (;
            <Link href={secondaryAction && secondaryAction.href}>;
              <a>;
                <EnhancedButton variant='secondary' size='md'>;
                  {secondaryAction && secondaryAction.label}
                </EnhancedButton>              </a>                <EnhancedButton variant="secondary" size="md">{secondaryAction && secondaryAction.label}</EnhancedButton>;
              </a>;
            </Link>;
          )}
        </div>;
      )}
    </div>;
  );
}