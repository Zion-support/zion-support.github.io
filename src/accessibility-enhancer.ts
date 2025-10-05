// Accessibility Enhancement Script
export const enhanceAccessibility = () => {
  // Add skip links
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
  `;
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px';
  });
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add ARIA labels to interactive elements
  const buttons = document.querySelectorAll('button:not([aria-label])');
  buttons.forEach(button => {
    if (!button.getAttribute('aria-label') && button.textContent) {
      button.setAttribute('aria-label', button.textContent.trim());
    }
  });

  // Add focus indicators
  const style = document.createElement('style');
  style.textContent = `
    *:focus {
      outline: 2px solid #4A90E2;
      outline-offset: 2px;
    }
    .skip-link:focus {
      top: 6px;
    }
  `;
  document.head.appendChild(style);
};

// Auto-run on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', enhanceAccessibility);
}