'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

  const stats = [
    { icon: TrendingUp, value: "340%", label: "Average ROI" },
    { icon: Users, value: "500+", label: "Success Stories" },
    { icon: Clock, value: "90 Days", label: "Implementation" },
    { icon: Star, value: "98%", label: "Client Satisfaction" }
  ];

  useEffect(() => {
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  );
};

export default EnhancedContentPromotionBanner;