
<<<<<<< HEAD
  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const isAllowed = process.env.NODE_ENV !== 'production' || isAdmin;

<<<<<<< HEAD


      scriptEntries.forEach(entry => {
        const size = entry.transferSize || entry.encodedBodySize || 0;
        const loadTime = entry.responseEnd - entry.requestStart;
        const cached = entry.transferSize === 0;
        


