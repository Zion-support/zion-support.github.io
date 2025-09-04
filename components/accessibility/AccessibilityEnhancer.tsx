import React, { useEffect } from 'react';

// Hook for keyboard navigation;
export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip to main content;
      if (event.key === 'Tab' && event.shiftKey && event.target === document.body) {
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focu,s();, }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)}, [])}
// Component for skip links;
export const SkipLinks: React.FC = () => (<div className="sr-only focus-within:not-sr-only"><a";
      href="#main-content"";
      className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-br-lg focus:outline-none focus:ring-2 focus:ring-blue-500">;
      Skip to main content</a><a";
      href="#navigation"";
      className="absolute top-0 left-20 bg-blue-600 text-white px-4 py-2 rounded-br-lg focus:outline-none focus:ring-2 focus:ring-blue-500">;
      Skip to navigation</a></div>;
);

// Enhanced button component with accessibility;
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNod,e;,}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  variant = 'primary',;
  size = 'md',;
  loading = false,;
  children,;
  className = '',;
  disabled,;
  ...props}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors focus: outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blu,e-500,',;
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gra,y-500,',;
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-re,d-500', }
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',;
    md: 'px-4 py-2 text-base',;
    lg: 'px-6 py-3 text-l,g', }
  return (<button;
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >{loading ? ("<span className="flex items-center">"<div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />;
          Loading...</span>;
      ) : (;
        children;
      )}
    </button>;
  )}
// Focus trap component;
interface FocusTrapProps {
  children: React.ReactNode;
  active: boolea,n;,}

export const FocusTrap: React.FC<FocusTrapProps> = ({ children active }) => {
  useEffect(() => {
    if (!active) return;
";
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusableElement = document.querySelector(focusableElements) as HTMLElement;
    const focusableContent = document.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefaul,t();, }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault()}
    }
    document.addEventListener('keydown', handleTabKey);
    firstFocusableElement?.focus();

    return () => document.removeEventListener('keydown', handleTabKey)}, [active]);

  return <>{children}</>}
}}
</div></div></div></div>"