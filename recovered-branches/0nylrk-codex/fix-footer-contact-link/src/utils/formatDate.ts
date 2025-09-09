
  const dateObj = new Date(date);
  switch (format) {
    case 'short':

      return dateObj && dateObj.toLocaleDateString(),
    case 'medium':
      return dateObj && dateObj.toLocaleDateString(undefined, { '
        year: 'numeric', '
        month: 'short', '
        day: 'numeric' 
      });'
    case 'long':
      return dateObj && dateObj.toLocaleDateString(undefined, { '
        year: 'numeric', '
        month: 'long', '
        day: 'numeric' 
      });'
    case 'full':
      return dateObj && dateObj.toLocaleDateString(undefined, { '
        weekday: 'long','
        year: 'numeric', '
        month: 'long', '
        day: 'numeric' 

