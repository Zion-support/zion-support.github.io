import React from 'react';

<<<<<<< HEAD
const PerformanceMonitor: React.FC = () => {
  return null;
};

export default PerformanceMonitor;
=======
import React from 'react';;
import React, { useEffect, useState } from 'react';
import { useEffect  } from 'react';
export const PerformanceMonitor = () => {useEffect(() => {// Web Vitals monitoring;
    if (typeof window !== 'undefined') {import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {getCLS(console.log)getFID(console.log)getFCP(console.log)getLCP(console.log)getTTFB(console.log)})}
  }, [])return null;
}export default PerformanceMonitor;
>>>>>>> 157aff07b859488146569974cc7382910d9762e2
