
          if (entry.name === src && entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const fileSize = resourceEntry.transferSize || resourceEntry.encodedBodySize || 0;
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
            


      observer.observe({ entryTypes: ['resource'] }),
      return () => observer.disconnect();


  images;
  columns = 3;
  aspectRatio = '16/9';

  );
},
