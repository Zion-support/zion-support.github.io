
/**
 * Format a date string or timestamp into a readable format
 * @param date Date to format
 * @param format Optional format specification
 * @returns Formatted date string
 */
export const formatDate = (date: Date | string | number, format: string = 'medium'): string => {
  const dateObj = new Date($2);
  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString($2);
    case 'medium':
      return dateObj.toLocaleDateString($2);
    case 'long':
      return dateObj.toLocaleDateString($2);
    case 'full':
      return dateObj.toLocaleDateString($2);
    case 'relative':
      // Simple relative time (today, yesterday, or date)
      const now = new Date($2);
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      const yesterday = new Date($2);
      yesterday.setDate(yesterday.getDate() - 1),
      
      if (dateObj >= today) {
        return 'Today'
      } else if (dateObj >= yesterday) {
        return 'Yesterday'
      } else {
        return dateObj.toLocaleDateString()
      }
    default: return dateObj.toLocaleDateString()
  }
},

/**
 * Format a date to show how long ago it was
 * @param date Date to format
 * @returns Time ago string (e.g., "2 hours ago")
 */
export const timeAgo = (date: Date | string | number): string => {
  const dateObj = new Date($2);
  const now = new Date($2);
  const seconds = $2;
  let interval = Math.floor($2);
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`
  }
  
  interval = Math.floor($2);
  if (interval >= 1) {
    return interval === 1 ? '1 month ago' : `${interval} months ago`
  }
  
  interval = Math.floor($2);
  if (interval >= 1) {
    return interval === 1 ? '1 day ago' : `${interval} days ago`
  }
  
  interval = Math.floor($2);
  if (interval >= 1) {
    return interval === 1 ? '1 hour ago' : `${interval} hours ago`
  }
  
  interval = Math.floor($2);
  if (interval >= 1) {
    return interval = $2;