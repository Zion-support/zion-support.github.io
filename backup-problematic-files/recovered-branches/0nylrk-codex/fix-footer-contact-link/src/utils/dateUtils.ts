;
/**;
 * Formats a date string into a readable format;
 * @param dateString ISO date string to format;
 * @returns Formatted date string;
 */;
export const formatDate = (dateString:string):string => {;
  try {;

    return format(new Date(dateString), 'PP');
  } catch (e) {;
    return dateString;
  }
}; 

    return format(new Date(dateString), 'PP'),;
  } catch (e) {;
    return dateString,;
<<<<<<< HEAD
  }
=======
  }
<<<<<<< HEAD
},; 
=======
},; 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
