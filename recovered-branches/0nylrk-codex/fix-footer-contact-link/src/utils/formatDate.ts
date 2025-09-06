
<<<<<<< HEAD
/**
 * Format a date string or timestamp into a readable format
 * @param date Date to format
 * @param format Optional format specification
 * @returns Formatted date string
 */
<<<<<<< HEAD

export const formatDate = (date: Date | string | number, format: string = 'medium'): string => {
=======
export const formatDate = (date: Date | string | number, format: string = 'medium'): string => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    default: return dateObj.toLocaleDateString()
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
},
=======
};
=======
},
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * Format a date to show how long ago it was
 * @param date Date to format
 * @returns Time ago string (e.g., "2 hours ago")
 */
<<<<<<< HEAD
export const timeAgo = (date: Date | string | number): string => {;
  const dateObj = new Date(date);
  const now = new Date();
=======
export const timeAgo = (date: Date | string | number): string => {
<<<<<<< HEAD
  const dateObj = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  let interval = Math.floor(seconds / 31536000)
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval === 1 ? '1 month ago' : `${interval} months ago`
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval === 1 ? '1 day ago' : `${interval} days ago`
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval === 1 ? '1 hour ago' : `${interval} hours ago`
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval === 1 ? '1 minute ago' : `${interval} minutes ago`
  }
  return seconds <= 5 ? 'just now' : `${Math.floor(seconds)} seconds ago`
}

=======
  const dateObj = new Date(date),
  const now = new Date(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000),
  
  let interval = Math.floor(seconds / 31536000),
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval === 1 ? '1 month ago' : `${interval} months ago`
  }
  
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval === 1 ? '1 day ago' : `${interval} days ago`
  }
  
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval === 1 ? '1 hour ago' : `${interval} hours ago`
  }
  
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval === 1 ? '1 minute ago' : `${interval} minutes ago`
  }
  
  return seconds <= 5 ? 'just now' : `${Math.floor(seconds)} seconds ago`
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
;
  interval = Math.floor(seconds / 2592000),;
  if (interval >= 1) {;
    return interval === 1 ? '1 month ago' : `${interval} months ago`;
  }
;
  interval = Math.floor(seconds / 86400),;
  if (interval >= 1) {;
    return interval === 1 ? '1 day ago' : `${interval} days ago`;
  }
;
  interval = Math.floor(seconds / 3600),;
  if (interval >= 1) {;
    return interval === 1 ? '1 hour ago' : `${interval} hours ago`;
  }
;
  interval = Math.floor(seconds / 60),;
  if (interval >= 1) {;
    return interval === 1 ? '1 minute ago' : `${interval} minutes ago`;
  }
;
  return seconds <= 5 ? 'just now' : `${Math.floor(seconds)} seconds ago`;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
