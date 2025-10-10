'use client';
import React from 'react';
'use client';
import React, { useEffect } from 'react';
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
      document.head.appendChild(cspMeta);
