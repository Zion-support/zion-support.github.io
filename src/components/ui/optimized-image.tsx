
<<<<<<< HEAD

          if (entry.name === src && entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            const fileSize = resourceEntry.transferSize || resourceEntry.encodedBodySize || 0;
            const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
            

<<<<<<< HEAD

<<<<<<< HEAD
  );
},

