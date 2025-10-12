import React from 'react';
import { motion } from 'framer-motion';
'use client';

interface FuturisticLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'pink' | 'green';
  text?: string;
}

  const size = 'md', 
  color = 'cyan',
  text = 'Loading...' 
}: FuturisticLoaderProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-16 h-16';
      default: return 'w-12 h-12';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'purple': return 'border-purple-500 text-purple-400';
      case 'pink': return 'border-pink-500 text-pink-400';
      case 'green': return 'border-green-500 text-green-400';
      default: return 'border-cyan-500 text-cyan-400';
    }
  };