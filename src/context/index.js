export { AuthProvider } from './auth';
export { MessagingProvider } from './MessagingContext';
export { NotificationProvider } from './notifications/NotificationContext';
export { RequestQuoteWizardProvider, useRequestQuoteWizard } from './RequestQuoteWizard';
export { ViewModeProvider, useViewMode } from './ViewModeContext';
export { CartProvider, useCart } from './CartContext';

// Mock function for useEnqueueSnackbar
export const useEnqueueSnackbar = () => {
  return (message, options = {}) => {
    console.log('Snackbar:', message, options);
  };
};
