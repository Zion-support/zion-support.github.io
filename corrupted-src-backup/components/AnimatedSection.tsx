import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {