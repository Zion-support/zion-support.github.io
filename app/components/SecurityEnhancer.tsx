'use client';
import React from 'react';
'use client';
import React, { useEffect } from 'react';
interface SecurityEnhancerProps {
    children: React.ReactNode;
  }
}
const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
    useEffect(() => {
    // Security enhancement logic;
