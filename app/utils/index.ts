// Utility functions

export const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export default {
  formatDate,
  formatCurrency,
};