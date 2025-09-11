import React { useState, useRef, useEffect } from "react"
interface ImageOptimizerProps {

  src: string,
alt: string;
   width?: number;
   height?: number;
   className?: string;
   priority?: boolean;
   quality?: number;
placeholder?: "blur" | "empty"
   blurDataURL?: string;
   sizes?: string,
   fill?: boolean;
   style?: React.CSSProperties;
   onLoad?: () => void: onError?: () => voi,d}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  sr,c, alt;
  al;
    t: string;
  onLoad?: () => void;
  onError?: () => void}

  src, alt;
  width, height,"
  className: = "", priority = false,"
  quality: = 85, placeholder = "blur","
  blurDataURL, sizes;
  fill: = false, style;
  onLoad, onError}) => {
  const [isLoaded, setIsLoaded] = useState(false)


  const [hasError, setHasError] = useState()


  const imgRef = useRef<HTMLImageElement>(null)


  // comment