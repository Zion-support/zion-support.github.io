
// ARIA utilities for better accessibility
export const ariaUtils = {
  // Generate unique IDs for ARIA relationships
  generateId: (prefix = 'element') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },
  
  // Create accessible button props
  createButtonProps: (label, description) => ({
    'aria-label': label,
    'aria-describedby': description ? ariaUtils.generateId('desc') : undefined,
    role: 'button',
    tabIndex: 0
  }),
  
  // Create accessible form field props
  createFormFieldProps: (label, required = false, error = null) => ({
    'aria-label': label,
    'aria-required': required,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': error ? ariaUtils.generateId('error') : undefined
  }),
  
  // Create accessible navigation props
  createNavProps: (label, current = false) => ({
    'aria-label': label,
    'aria-current': current ? 'page' : undefined,
    role: 'navigation'
  })
};
