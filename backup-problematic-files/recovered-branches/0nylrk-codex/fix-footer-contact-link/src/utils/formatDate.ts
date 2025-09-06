
  }
},;
;
/**;
 * Format a date to show how long ago it was;
 * @param date Date to format;
 * @returns Time ago string (e.g., "2 hours ago");
 */;
export const timeAgo = (date:Date | string | number):string => {;
  const dateObj = new Date(date),;
  const now = new Date(),;
  ;
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000),;
  ;
  let interval = Math.floor(seconds / 31536000),;
  if (interval >= 1) {;
    return interval === 1 ? '1 year ago' :`${interval} years ago`,;
  }
  ;
  interval = Math.floor(seconds / 2592000),;
  if (interval >= 1) {;
    return interval === 1 ? '1 month ago' :`${interval} months ago`,;
  }
  ;
  interval = Math.floor(seconds / 86400),;
  if (interval >= 1) {;
    return interval === 1 ? '1 day ago' :`${interval} days ago`,;
  }
  ;
  interval = Math.floor(seconds / 3600),;
  if (interval >= 1) {;
    return interval === 1 ? '1 hour ago' :`${interval} hours ago`,;
  }
  ;
  interval = Math.floor(seconds / 60),;
  if (interval >= 1) {;
    return interval === 1 ? '1 minute ago' :`${interval} minutes ago`,;
  }
  ;
  return seconds <= 5 ? 'just now' :`${Math.floor(seconds)} seconds ago`,;
},; /** * Format a date string or timestamp into a readable format * @param date Date to format * @param format Optional format specification * @returns Formatted date string */ switch (format) {
  case 'short': return dateObj.toLocaleDateString ();
case 'medium':
}

