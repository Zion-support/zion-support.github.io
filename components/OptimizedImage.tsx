import React from "react"
"use client;
import Image from "next/image;
interface OptimizedImageProps {src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
priority?: boolean;
"  quality?: number;
"  placeholder?: "blur" | "empty;
  blurDataURL?: string;"  sizes?: string;fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
  const [hasError, setHasError] = useState(false)


  const [isInView, setIsInView] = useState(priority)


  const imageRef = useRef<HTMLDivElement>(null)


  const [isLoading, setIsLoading] = useState(true)


  const [hasError, setHasError] = useState(false)


  const [isInView, setIsInView] = useState(priority)


  const imageRef = useRef<HTMLDivElement>(null)


  // comment