
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingStateProps {
  
type?: 'spinner' | 'skeleton' | 'pulse' | 'dots';
size?: 'sm' | 'md' | 'lg';
color?: string;
}
text?: string;}
};
export const LoadingState: React.FC<LoadingStateProps> = ({
type = 'spinner',
size = 'md',
color = 'blue',
text;
}) => {
const sizeClasses = {;
sm: 'w-4 h-4';
md: 'w-8 h-8',;
lg: 'w-12 h-12';
