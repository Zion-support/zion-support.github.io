'use client;

import React, { useEffect } from react;

interface SecurityEnhancerProps {}
  enableCSP?: boolean;

  enableHSTS?: boolean;

  enableXSSProtection?: boolean;

  enableClickjackingProtection?: boolean;

  enableContentTypeSniffing?: boolean;

}

;

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  useEffect(() => {
    if (typeof window === 'undefined) {
import React from 'react';
'use client';
