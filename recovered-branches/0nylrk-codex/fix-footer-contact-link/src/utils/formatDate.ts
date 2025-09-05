
/**
 * Format a date string or timestamp into a readable format
 * @param date Date to format
 * @param format Optional format specification
 * @returns Formatted date string
 */
export const _formatDate = (date: Date | string | number, format: string = 'medium'): string => {_const _dateObj = new Date(date);
  
  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString();
    case 'medium':
      return dateObj.toLocaleDateString(undefined, _{ 
        year: 'numeric', _month: 'short', _day: 'numeric'});
    case 'long':
      return dateObj.toLocaleDateString(undefined, {_year: 'numeric', _month: 'long', _day: 'numeric'});
    case 'full':
      return dateObj.toLocaleDateString(undefined, {_weekday: 'long', _year: 'numeric', _month: 'long', _day: 'numeric'});
    case 'relative':
      // Simple relative time (today, yesterday, or date)
      const _now = new Date();
      const _today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const _yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (dateObj >= today) {_return 'Today';} else if (dateObj >= yesterday) {_return 'Yesterday';} else {_return dateObj.toLocaleDateString();}
    default:
      return dateObj.toLocaleDateString();
  }
};

/**
 * Format a date to show how long ago it was
 * @param date Date to format
 * @returns Time ago string (e.g., "2 hours ago")
 */
export const _timeAgo = (date: Date | string | number): string => {_const _dateObj = new Date(date);
  const _now = new Date();
  
  const _seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  let _interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`;
  }
  
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {_return interval === 1 ? '1 month ago' : `${interval} months ago`;
  }
  
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {_return interval === 1 ? '1 day ago' : `${interval} days ago`;
  }
  
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {_return interval === 1 ? '1 hour ago' : `${interval} hours ago`;
  }
  
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {_return interval === 1 ? '1 minute ago' : `${interval} minutes ago`;
  }
  
  return seconds <= 5 ? 'just now' : `${_Math.floor(seconds)} seconds ago`;
};
