'use client';
import React, { useEffect } from 'react';

interface AccessibilityEnhancerProps {
enableKeyboardNavigation?: boolean;
enableScreenReaderSupport?: boolean;
enableHighContrast?: boolean;
enableFocusManagement?: boolean;
children: React.ReactNode;
}

const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
children,
enableKeyboardNavigation = true,
enableScreenReaderSupport = true,
enableHighContrast = false,
enableFocusManagement = true
}) => {
useEffect(() => {
// Add accessibility enhancements
if (enableKeyboardNavigation) {
document.addEventListener('keydown', handleKeyboardNavigation);
}

if (enableScreenReaderSupport) {
// Add screen reader support
document.body.setAttribute('aria-live', 'polite');
}

if (enableHighContrast) {
document.body.classList.add('high-contrast');
}

if (enableFocusManagement) {
// Manage focus for better accessibility
const focusableElements = document.querySelectorAll(
'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

focusableElements.forEach((element) => {
element.setAttribute('tabindex', '0');
});
}

return () => {
if (enableKeyboardNavigation) {
document.removeEventListener('keydown', handleKeyboardNavigation);
}
};
}, [enableKeyboardNavigation, enableScreenReaderSupport, enableHighContrast, enableFocusManagement]);

const handleKeyboardNavigation = (event: KeyboardEvent) => {
// Handle keyboard navigation
if (event.key === 'Tab') {
// Ensure proper tab order
const focusableElements = document.querySelectorAll(
'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

const firstElement = focusableElements[0] as HTMLElement;
const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

if (event.shiftKey && document.activeElement === firstElement) {
event.preventDefault();
lastElement.focus();
} else if (!event.shiftKey && document.activeElement === lastElement) {
event.preventDefault();
firstElement.focus();
}
}
};

return <>{children}</>;
};

export default AccessibilityEnhancer;
import React, { useEffect } from 'react
const AccessibilityEnhancer: React.FC = () => {
useEffect(() => {
// Skip to main content functionality
const addSkipLink = () => {
const skipLink = document.createElement('a');'
skipLink.href = '#main-content;'
skipLink.textContent = 'Skip to main content;'
skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50;'
skipLink.style.zIndex = '9999;'
document.body.insertBefore(skipLink, document.body.firstChild);
};
// High contrast mode toggle
const addHighContrastToggle = () => {
const toggle = document.createElement('button');'
toggle.textContent = 'Toggle High Contrast;'
toggle.className = 'fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded z-50;'
toggle.onclick = () => {
document.body.classList.toggle('high-contrast');'
};
};
// Focus management
const enhanceFocus = () => {
// Add focus indicators
const style = document.createElement('style');'
style.textContent = `
*:focus {
outline: 2px solid #8b5cf6 !important;
outline-offset: 2px !important;
}
.high-contrast {}
filter: contrast(150%) brightness(110%);}
}
`;
document.head.appendChild(style);
};
// Keyboard navigation enhancement
const enhanceKeyboardNavigation = () => {
document.addEventListener('keydown', (e) => {'
if (e.key === 'Tab') {'
document.body.classList.add('keyboard-navigation');'
}
});
document.addEventListener('mousedown', () => {'
document.body.classList.remove('keyboard-navigation');'
});
};
// Initialize accessibility features
addSkipLink();
addHighContrastToggle();
enhanceFocus();
enhanceKeyboardNavigation();
// Cleanup function
return () => {
const skipLink = document.querySelector('a[href="#main-content"]');'"'"
if (skipLink) {
skipLink.remove();
}
const toggle = document.querySelector('button[onclick*="high-contrast"]');'"'"
if (toggle) {
toggle.remove();
}
};
}, []);
return null;
};
export default AccessibilityEnhancer;
import React from 'react';;";
;
interface AccessibilityEnhancerProps {
className?: string;
children?: React.ReactNode;
}
;
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ ';',";
className = ',;";";";
children;
}) => {
return (
<div: className ={`accessibilityenhancer ${className}`}>;
{children}
</div>;
);
};
;
export default AccessibilityEnhancer;';';";
