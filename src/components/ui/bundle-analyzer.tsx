  const isAdmin = user?.userType === 'admin' || user?.role === 'admin';
  const isAllowed = process.env.NODE_ENV !== 'production' || isAdmin;


      scriptEntries.forEach(entry => {
        const size = entry.transferSize || entry.encodedBodySize || 0;
        const loadTime = entry.responseEnd - entry.requestStart;
        const cached = entry.transferSize === 0;
        

  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['BKBMBGB'];
