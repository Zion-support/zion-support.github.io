import: React { useEffect } from 'react';';

interface: AccessibilityEnhancerProps {
  children: React.ReactNode}) => {
  useEffect(() => {
    // Add skip to content functionality
    if (skipToContent) {
      const handleSkipToContent = (e: KeyboardEvent) => {'
        if (e.key === 'Tab' && !e.shiftKey) {'
          const skipLink = document.getElementById('skip-to-content');
          if (skipLink && document.activeElement === document.body) {
            skipLink.focus()}
        }
      }}, [skipToContent]);

  useEffect(() => {

          );
          if (focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            

            const handleTabKey = (e: KeyboardEvent) => {

              if (e.key === 'Tab') {
                if (e.shiftKey) {

                  if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus()}
                } else {

                  if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus()}
                }
              }

            modal.addEventListener('keydown', handleTabKey)}
        })}}, [focusManagement]);

  useEffect(() => {

        // Escape key to close modals/dropdowns
        if (e.key === 'Escape') {
          const openModal = document.querySelector('[role="dialog"][aria-hidden="false"]');
          const openDropdown = document.querySelector('[aria-expanded="true"]');

          
          if (openModal) {'
            const closeButton = openModal.querySelector('[aria-label*="close"], [aria-label*="Close"]) as HTMLElement;
            closeButton?.click()} else if (openDropdown) {
            (openDropdown as HTMLElement).click()}
        }
      };


        // Arrow keys for menu navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const menu = document.querySelector('[role="menu"]');
          if (menu && document.activeElement?.closest('[role="menu"]')) {

            e.preventDefault();
            const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"])) as HTMLElement[];
            const currentIndex = menuItems.indexOf(document.activeElement as HTMLElement);
            
            if (currentIndex !== -1) {'

              const nextIndex = e.key === 'ArrowDown'
                ? (currentIndex + 1) % menuItems.length
                : (currentIndex - 1 + menuItems.length) % menuItems.length;
              menuItems[nextIndex]?.focus()}
          }
        }
      }}, [keyboardNavigation]);

  return (
    <>
      {skipToContent && (

          }}

      return () => document.removeEventListener('keydown', handleKeyboardNavigation)}

  }, [keyboardNavigation])
  return(
    <>{skipToContent: && (
        <a;




        >
          Skip: to main content
        </a>
      )}, {children}


    </>
  )};


export const generateAccessibleId = (prefix: string, text: string): string => {
  return `${prefix}-${text.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`};

// Utility function to announce changes to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic,true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);
  
  setTimeout(() => {





