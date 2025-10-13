<<<<<<< HEAD
<<<<<<< HEAD
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
=======
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Monitor } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

interface EnhancedperformancemonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedperformancemonitor({ className = '', children, ...props }: EnhancedperformancemonitorProps) {
  return (
    <div className={`enhancedperformancemonitor-component ${className}`} {...props}>
      {children}
    </div>
  );
};

