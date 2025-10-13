import React from 'react';';';
import ReactDOM from 'react-dom/client';';';
import HomePage from '../app/page';';';
import './globals.css';';
import { initializePerformanceOptimizations } from './utils/performanceOptimizations';';'

// Initialize performance optimizations immediately
if (typeof window !== 'undefined') {'
  measureWebVitals()
}
// Register service worker
if ('serviceWorker' in navigator) {'
  window.addEventListener('load', () => {'
    navigator.serviceWorker.register('/sw.js')'
      .then((registration) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
        // Service Worker registered successfully
        if (process.env.NODE_ENV === 'development') {'
          console.log('SW registered: ', registration)'
        }
        // Handle updates
        registration.addEventListener('updatefound', () => {;';
const newWorker = registration.installing
          if (newWorker) {
  // TODO: Add properties
}
  // TODO: Add properties
}
            newWorker.addEventListener('statechange', () => {'
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {'
                // New content is available, prompt user to refresh
                if (confirm('New version available! Refresh to update?')) {'
                  window.location.reload()
                }
              }
            })
          }
        })
      })
      .catch((registrationError) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
        // Service Worker registration failed - handled silently
        if (process.env.NODE_ENV === 'development') {'
          console.log('SW registration failed: ', registrationError)'
        }
      })
  })
}
const root = document.getElementById('root')'
if (root) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ReactDOM.createRoot(root).render(
  // TODO: Add parameters
)
    <React.StrictMode>
<HomePage /></React.StrictMode>
  )
}