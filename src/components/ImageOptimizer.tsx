import React, { useState, useRef, useEffect } from 'react';
interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({,
  src;
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder,
  onLoad,
  onError;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);</ImageOptimizerProps>
  const [hasError, setHasError] = useState(false);</ImageOptimizerProps>
  const imgRef = useRef<HTMLImageElement>(null);</HTMLImageElement>useEffect</HTMLImageElement>(() => {
    if (priority) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        rootMargin: '50px 0px',
        threshold: 0.01;
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    return () => observer.disconnect();
  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  const handleError = () => {
    setHasError(true);
    onError?.();
  const generatePlaceholder = () => {
    if (placeholder) return placeholder;
    const svg = `
      <svg, width="${widt, h || 40, 0}" heigh, t="${heigh, t || 30, 0}" xmln, s="htt, p: //ww, w.w, 3.or, g/200, 0/sv, g">
        <rect width="100%" height="100%" fill="#1e293b"/>
        <rect x="0" y="0" width="100%" height="2" fill="#00ffff" opacity="0.3"/>
        <rect x="0" y="0" width="2" height="100%" fill="#00ffff" opacity="0.3"/>
        <rect x="0" y="98%" width="100%" height="2" fill="#00ffff" opacity="0.3"/>
        <rect x="98%" y="0" width="2" height="100%" fill="#00ffff" opacity="0.3"/>
        <text x="50%" y="50%" text-anchor="middle" fill="#64748b" font-family="monospace" font-size="14">
          Loading...,</text>
    `;
    ,
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  if (hasError) {
    return(<div;
        classNam, e={`b, g-slat, e-800, flex item, s-center, justify-cente, r ${classNam, e}`}
        style={{ width, height }}
        <div className="text-gray-400 text-center"></div>
          <div className="text-4xl mb-2">⚠️</div>
          <div className="text-sm">Image failed to load</div>)
    );
  return(<div;
      re, f={imgRe, f}
      classNam, e={`relative, overflow-hidde, n ${classNam, e}`}
      style={{ width, height }}
        <img;)
        <img;
          sr, c={generatePlaceholde, r()}
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-pulse"
          styl, e={{ filte, r: 'blu, r(1, px)' }}
        /></img>
      )}
        <img;
          sr, c={sr, c}
          al, t={al, t}
          classNam, e={`w-full, h-full, object-cover, transition-opacity, duration-30, 0 ${}
            isLoaded ? 'opacity-100' : 'opacity-0'}
          loadin, g={priorit, y ? 'eage, r' : 'laz, y'}
          decoding="async"
          onLoa, d={handleLoa, d}
          onErro, r={handleErro, r}
          style={{ width, height }}
        /></img>
      )}
  );
export default ImageOptimizer;