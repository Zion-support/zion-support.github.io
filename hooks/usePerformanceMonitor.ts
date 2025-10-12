// Monitor page load performance;
if ('performance' in window) {}
const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
const paint = performance.getEntriesByType('paint');

// Log performance metrics;
console.log('Page Load Performance:', {}
domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
entry.name === 'first-paint')?.startTime,
entry.name === 'first-contentful-paint')?.startTime,
});
}, 0);
});
};

// Monitor resource loading;
if ('performance' in window) {}
if (entry.entryType === 'resource') {}
console.log('Resource loaded:', {}
name: entry.name,
duration: entry.duration,
size: (entry, as, any).transferSize,
});
});
});

observer.observe({ entryTypes: ['resource'] });

observer.disconnect();
};

// Initialize monitoring;
monitorPageLoad();
const cleanup = monitorResourceLoading();

// Cleanup;
cleanup?.();
};
}, []);
};