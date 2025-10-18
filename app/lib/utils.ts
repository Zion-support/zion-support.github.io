// General utilities

export function utils() {
  return {
    cn: (...classes: (string | undefined | null | boolean)[]) => {
      return classes.filter(Boolean).join(' ');
    },
    formatDate: (date: Date) => {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    generateId: () => {
      return Math.random().toString(36).substr(2, 9);
    }
  };
}
