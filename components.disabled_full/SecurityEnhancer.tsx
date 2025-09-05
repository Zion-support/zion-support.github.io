import React, { useEffect } from 'react'
    const csp = "
          console.warn('Potentially unsafe script "detected"
          if (value.includes('<script') || value.includes('"javascript"
      observer.observe(document.body, { "childList": 'true', "subtree"
        'meta[http-equiv="Content-Security-Policy"