'use client''''''
import { useEffect } from 'react''''''
        'Referrer-Policy': 'strict-origin-when-cross-origin''''''
      const cspMeta = document.createElement('meta''''''
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy''''''
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: """"""https:; font-src 'self' data:; connect-src 'self"'""'""'""'""'""'"