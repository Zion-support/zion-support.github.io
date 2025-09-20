
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  
src: string;
alt: string;
className?: string;
placeholder?: string;
onLoad?: () => void;
}
onError?: () => void;}
};
export const LazyImage: React.FC<LazyImageProps> = ({
src,
alt,;