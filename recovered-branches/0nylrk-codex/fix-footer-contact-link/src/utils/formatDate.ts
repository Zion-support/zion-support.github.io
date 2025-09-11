


export const formatDate = (date: Date | string | number, format: string = 'medium'): string => {;


  const dateObj = new Date(date);
  switch (format) {
    case 'short':

      return dateObj && dateObj.toLocaleDateString(),
export const formatDate = (date: Date | string | number, format: string = 'medium'): string => {
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
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      });
    case 'relative':
      // Simple relative time (today, yesterday, or date)
      const now = new Date();
      yesterday && yesterday.setDate(yesterday && yesterday.getDate() - 1);
      


/**;
 * Format a date string or timestamp into a readable format;
 * @param date Date to format;
 * @param format Optional format specification;
 * @returns Formatted date string;
 */;
export const formatDate = (date:Date | string | number, format:string = 'medium'):string => {;
  const dateObj = new Date(date),;
  ;
  switch (format) {;
    case 'short':;
      return dateObj.toLocaleDateString(),;
    case 'medium':;
      return dateObj.toLocaleDateString(undefined, { ;
        year:'numeric', ;
        month:'short', ;
        day:'numeric' ;
      }),;
    case 'long':;
      return dateObj.toLocaleDateString(undefined, { ;
        year:'numeric', ;
        month:'long', ;
        day:'numeric' ;
      }),;
    case 'full':;
      return dateObj.toLocaleDateString(undefined, { ;
        weekday:'long',;
        year:'numeric', ;
        month:'long', ;
        day:'numeric' ;
      }),;
    case 'relative':;
      // Simple relative time (today, yesterday, or date);
      const now = new Date(),;
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()),;
      const yesterday = new Date(today),;
      yesterday.setDate(yesterday.getDate() - 1),;
      ;
      if (dateObj >= today) {;
        return 'Today',;
      } else if (dateObj >= yesterday) {;
        return 'Yesterday',;
      } else {;
        return dateObj.toLocaleDateString(),;
      }
    default:return dateObj.toLocaleDateString();
  }


      }
    default: return dateObj.toLocaleDateString()
  }
}
=======
=======      }
    default: return dateObj && dateObj.toLocaleDateString()
  }


/**
 * Format a date to show how long ago it was
 * @param date Date to format
 * @returns Time ago string (e.g., "2 hours ago")
=======
},
=======
};
},

/**
 * Format a date to show how long ago it was
 * @param date Date to format
 * @returns Time ago string (e && e.g., "2 hours ago")
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
 */
export const timeAgo = (date: Date | string | number): string => {;
  const dateObj = new Date(date);
  const now = new Date();
export const timeAgo = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  let interval = Math.floor(seconds / 31536000)
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`
  }
  const dateObj = new Date(date),
  const now = new Date(),
  
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000),
  
  let interval = Math.floor(seconds / 31536000),
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`
  }
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
/**
 * Format a date to show how long ago it was
 * @param date Date to format
 * @returns Time ago string (e && e.g., "2 hours ago")
 */
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  
export const timeAgo = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  const now = new Date();
  const seconds = Math && Math.floor((now && now.getTime() - dateObj && dateObj.getTime()) / 1000);
  let interval = Math && Math.floor(seconds / 31536000),
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`
  }
=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  interval = Math && Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval === 1 ? '1 month ago' : `${interval} months ago`
  }
=======/**;
* Format a date string or timestamp into a readable format;
* @param date Date to format;
* @param format Optional format specification;
* @returns Formatted date string;
*/;
export const format_date = (date: Date | string | number, format: string = 'medium'): string => {
  const date_obj = new Date (date);
;
  switch (format) {
    case 'short':;
      return date_obj.toLocaleDateString (),
    case 'medium':;
      return date_obj.toLocaleDateString (undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric';
      });
    case 'long':;
      return date_obj.toLocaleDateString (undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric';
      });
    case 'full':;
      return date_obj.toLocaleDateString (undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric';
      });
    case 'relative':;
      // Simple relative time (today, yesterday, or date);
      const now = new Date ();
      const today = new Date (now.getFullYear (), now.get_month (), now.get_date ());
      const yesterday = new Date (today);
      yesterday.set_date (yesterday.get_date () - 1);
;
      // Check condition
if ( {) {
  $2
}
        return 'Today';
      } else // Check condition
if ( {) {
  $2
}
        return 'Yesterday';
      } else {
        return date_obj.toLocaleDateString ();
      }
    default: return date_obj.toLocaleDateString ();
  }
}
;
/**;
* Format a date to show how long ago it was;
* @param date Date to format;
* @returns Time ago string (e.g., "2 hours ago");
*/;
export const time_ago = (date: Date | string | number): string => {
  const date_obj = new Date (date);
  const now = new Date ();
;
  const seconds = Math.floor ((now.get_time () - date_obj.get_time ()) / 1000);
;
  let interval = Math.floor (seconds / 31536000),
  // Check condition
if ( {) {
  $2
}
    return interval === 1 ? '1 year ago' : `${interval} years ago`;
  }
  interval = Math.floor (seconds / 2592000);
  // Check condition
if ( {) {
  $2
}
    return interval === 1 ? '1 month ago' : `${interval} months ago`;
  }
  interval = Math.floor (seconds / 86400);
  // Check condition
if ( {) {
  $2
}
    return interval === 1 ? '1 day ago' : `${interval} days ago`;
  }
  interval = Math.floor (seconds / 3600);
  // Check condition
if ( {) {
  $2
}
    return interval === 1 ? '1 hour ago' : `${interval} hours ago`;
  }
  interval = Math.floor (seconds / 60);
  // Check condition
if ( {) {
  $2
}
    return interval === 1 ? '1 minute ago' : `${interval} minutes ago`;
  }
  return seconds <= 5 ? 'just now' : `${Math.floor (seconds)} seconds ago`;
}
;
export const timeAgo = (date: Date | string | number): string => {

};
<<<<<<< HEAD
<<<<<<< HEAD
};
/** * Format a date to show how long ago it was * @param date Date to format * @returns Time ago string (e.g., "2 hours ago") */ if (interval >= 1) {
  return interval === 1 ? '1 year ago' : `$ {
  interval 
}years ago` 
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
};
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
