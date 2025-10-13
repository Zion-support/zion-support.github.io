<<<<<<< HEAD
<<<<<<< HEAD
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return

    const updateStats = () => {
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          let totalSize = 0
          Promise.all(
            cacheNames.map(cacheName =>
              caches.open(cacheName).then(cache =>
                cache.keys().then(requests =>
                  Promise.all(
                    requests.map(request =>
                      cache.match(request).then(response => {
                        if (response) {
                          const contentLength = response.headers.get('content-length')
                          if (contentLength) {
                            totalSize += parseInt(contentLength, 10)
                          }
                        }
                      })
                    )
                  )
                )
              )
            )
          ).then(() => {
            setStats(prev => ({
              ...prev,
              size: totalSize
            }))
          })
