

/**
 * Formats a date string into a readable format
 * @param dateString ISO date string to format
 * @returns Formatted date string
 */
export const _formatDate = (dateString: string): string => {_try {
    return format(new Date(dateString), _'PP');} catch (e) {_return dateString;}
};
