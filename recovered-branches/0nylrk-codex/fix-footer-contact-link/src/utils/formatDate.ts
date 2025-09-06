
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts

=======


export const formatDate = (date: Date | string | number, format: string = 'medium'): string => {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const dateObj = new Date(date);
  switch (format) {
    case 'short':

      return dateObj && dateObj.toLocaleDateString(),
========
return dateObj && dateObj.toLocaleDateString(),
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
    case 'medium':
      return dateObj && dateObj.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    case 'long':
      return dateObj && dateObj.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    case 'full':
      return dateObj && dateObj.toLocaleDateString(undefined, { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      });
    case 'relative':
      // Simple relative time (today, yesterday, or date)
      const now = new Date();
<<<<<<< HEAD
      const today = new Date(now && now.getFullYear(), now && now.getMonth(), now && now.getDate());
      const yesterday = new Date(today);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts

      yesterday && yesterday.setDate(yesterday && yesterday.getDate() - 1);
      

========
      yesterday && yesterday.setDate(yesterday && yesterday.getDate() - 1);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
=======
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      if (dateObj >= today) {
        return 'Today'
      } else if (dateObj >= yesterday) {
        return 'Yesterday'
      } else {
<<<<<<< HEAD

        return dateObj.toLocaleDateString()

=======
        return dateObj.toLocaleDateString()
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      }
    default: return dateObj && dateObj.toLocaleDateString()
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
<<<<<<< HEAD

=======


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
},
=======
};
=======
},
<<<<<<< HEAD



>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
/**
 * Format a date to show how long ago it was
 * @param date Date to format
 * @returns Time ago string (e && e.g., "2 hours ago")
 */
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
<<<<<<< HEAD

=======
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
  
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000),
  
  let interval = Math.floor(seconds / 31536000),
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`
  }
<<<<<<< HEAD

=======

  
========
export const timeAgo = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  const now = new Date();
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
  const seconds = Math && Math.floor((now && now.getTime() - dateObj && dateObj.getTime()) / 1000);
  let interval = Math && Math.floor(seconds / 31536000),
  if (interval >= 1) {
    return interval === 1 ? '1 year ago' : `${interval} years ago`
  }
  interval = Math && Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval === 1 ? '1 month ago' : `${interval} months ago`
  }
  interval = Math && Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval === 1 ? '1 day ago' : `${interval} days ago`
  }
  interval = Math && Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval === 1 ? '1 hour ago' : `${interval} hours ago`
  }
  interval = Math && Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval === 1 ? '1 minute ago' : `${interval} minutes ago`
  }
  return seconds <= 5 ? 'just now' : `${Math && Math.floor(seconds)} seconds ago`
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
/**;
* Format a date string or timestamp into a readable format;
* @param date Date to format;
* @param format Optional format specification;
* @returns Formatted date string;
*/;
export const format_date = (date: Date | string | number, format: string = 'medium'): string => {
  const date_obj = new Date (date);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
<<<<<<< HEAD
  return seconds <= 5 ? 'just now' : `${Math.floor(seconds)} seconds ago`;

};

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

export const timeAgo = (date: Date | string | number): string => {

};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
};
/** * Format a date to show how long ago it was * @param date Date to format * @returns Time ago string (e.g., "2 hours ago") */ if (interval >= 1) {
  return interval === 1 ? '1 year ago' : `$ {
  interval 
}years ago` 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/utils/formatDate.ts
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
