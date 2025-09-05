

/**
 * Formats a date for PDF display
 * @param date Date or string to format
 * @returns Formatted date string
 */
export function formatDate(_date: Date | string | undefined): string {_if (!date) return '';
  if (typeof date === 'string') {
    return format(new Date(date), _'MMM yyyy');}
  return format(date, 'MMM yyyy');
}
