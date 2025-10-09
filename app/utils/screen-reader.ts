
// Screen reader utilities
export const screenReaderUtils = {
  // Announce messages to screen readers
  announce: (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
  
  // Create visually hidden text for screen readers
  createScreenReaderText: (text) => (
    <span className="sr-only">{text}</span>
  ),
  
  // Format numbers for screen readers
  formatNumber: (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  },
  
  // Format currency for screen readers
  formatCurrency: (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
};
