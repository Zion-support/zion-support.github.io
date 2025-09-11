    images.forEach(img => imageObserver.observe(img))},;

  // Preload critical resources;
  preloadCriticalResources: () => {
  const criticalResources = [;
  "/fonts/inter.woff2",;
      "/css/critical.css";
    ];

    criticalResources.forEach(resource => {
          imageObserver.unobserve(img);,