// Analytics utility functions;
  // In a real implementation, you would send this to your analytics service;
  if (typeof window !== 'undefined' && (window as { gtag?: unknown }).gtag) {'"'"
    (window as { gtag: (command: string, eventName: string, properties?: Record<string, unknown>) => void }).gtag('event', eventName, properties)'"'"
  }
};
      page_title: pageName,
      page_location: window.location.href,
  
  });";
  };";";
}";";";