

export const formatDate = (date: Date | string | number, format: string = 'medium'): string => {;

  const dateObj = new Date(date);
  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString()
    case 'medium':
      return dateObj.toLocaleDateString(undefined, {
        year: 'numeric'
        month: 'short'
        day: 'numeric'
      });
    case 'long':
      return dateObj.toLocaleDateString(undefined, {
        year: 'numeric'
        month: 'long'
        day: 'numeric'
      });
    case 'full':
      return dateObj.toLocaleDateString(undefined, {
        weekday: 'long'
        year: 'numeric'
        month: 'long'
        day: 'numeric'
      });
    case 'relative':
      // Simple relative time (today, yesterday, or date)
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      if (dateObj >= today) {
        return 'Today'
      } else if (dateObj >= yesterday) {
        return 'Yesterday'
      } else {
        return dateObj.toLocaleDateString()
=======
/**;
 * Format a date string or timestamp into a readable format;
 * @param date Date to format;
 * @param format Optional format specification;
 * @returns Formatted date string;
 */;
export const formatDate = (date: Date | string | number, format: string = 'medium'): string => {;
  const dateObj = new Date(date),;
  switch (format) {;
    case 'short':;
      return dateObj.toLocaleDateString(),;
    case 'medium':;
      return dateObj.toLocaleDateString(undefined, {;
        year: 'numeric',;
        month: 'short',;
        day: 'numeric';
      }),;
    case 'long':;
      return dateObj.toLocaleDateString(undefined, {;
        year: 'numeric',;
        month: 'long',;
        day: 'numeric';
      }),;
    case 'full':;
      return dateObj.toLocaleDateString(undefined, {;
        weekday: 'long',;
        year: 'numeric',;
        month: 'long',;
        day: 'numeric';
      }),;
    case 'relative':;
      // Simple relative time (today, yesterday, or date);
      const now = new Date(),;
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()),;
      const yesterday = new Date(today),;
      yesterday.setDate(yesterday.getDate() - 1),;
      if (dateObj >= today) {;
        return 'Today';
      } else if (dateObj >= yesterday) {;
        return 'Yesterday';
      } else {;
        return dateObj.toLocaleDateString();


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    default: return dateObj.toLocaleDateString()
  }

},
=======
};
=======
},

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Format a date to show how long ago it was
 * @param date Date to format
 * @returns Time ago string (e.g., "2 hours ago")
 */

export const timeAgo = (date: Date | string | number): string => {

};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
