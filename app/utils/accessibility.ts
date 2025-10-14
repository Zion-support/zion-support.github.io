export const accessibilityUtils = {
  addSkipLink: () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only';
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
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  },
  
  enhanceFocus: () => {
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #4F46E5;
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  },
  
  addAriaLabels: () => {
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        button.setAttribute('aria-label', 'Button');
      }
    });
  }
};