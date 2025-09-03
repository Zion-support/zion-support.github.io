<<<<<<< HEAD
import React, { useEffect } from 'react';

const AccessibilityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add keyboard navigation support
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      };

      const handleMouseDown = () => {
        document.body.classList.remove('keyboard-navigation');
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);

      // Add focus indicators
      const style = document.createElement('style');
      style.textContent = `
        .keyboard-navigation *:focus {
          outline: 2px solid #3B82F6 !important;
          outline-offset: 2px !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, []);

  return null;
};

export default AccessibilityEnhancer;
=======
import React from 'react'; interface AccessibilityEnhancerProps { // Add your props here children: React.ReactNode; role?: string; "aria-label"?: string; "aria-describedby"?: string; "aria-expanded"?: boolean; "aria-controls"?: string; "aria-haspopup"?: boolean; tabIndex?: number; onKeyDown?: event: React.KeyboardEvent void; className?: string; focusable?: boolean; skipToContent?: boolean; const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children, role,aria-label": ariaLabel,aria-describedby": ariaDescribedby,aria-expanded": ariaExpanded,aria-controls": ariaControls,aria-haspopup": ariaHaspopup, tabIndex, onKeyDown, className = ", focusable = true, skipToContent = false; }) => { const ref = useRef<HTMLDivElement>(null); useEffect(: unknown { if (skipToContent && ref.current) { ref.current.focus(); } }, [skipToContent]); const handleKeyDown = (event: React.KeyboardEvent) => { // Handle common keyboard interactions switch (event.key) { case "Enter":" case " ":" if (role === "button" || role === "link") { event.preventDefault(); // Trigger click event" const clickEvent = new MouseEvent("click", { bubbles: true, cancelable: true, view: window }); event.currentTarget.dispatchEvent(clickEvent); } break; case "Escape": if (ariaExpanded !== undefined) { // Close dropdown or modal event.preventDefault(); // You can add custom close logic here } break; default: break; } // Call custom onKeyDown handler if (onKeyDown) { onKeyDown(event); } }; const accessibilityProps = { role,aria-label": ariaLabel,aria-describedby": ariaDescribedby,aria-expanded": ariaExpanded,aria-controls": ariaControls,aria-haspopup": ariaHaspopup, tabIndex: focusable ? tabIndex : -1, onKeyDown: handleKeyDown, className: `${className} ${focusable ? "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" : "}`, ref }; return() <div {...accessibilityProps}> {children} </div> ); }; export default AccessibilityEnhancer;"` 
>>>>>>> a4e4b61825d9486fa9e1113a59af8c11dc69fb90
