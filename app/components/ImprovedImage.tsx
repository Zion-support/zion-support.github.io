<<<<<<< HEAD
interface ImprovedImageProps {
  onLoad?: () => void;
  onError?: () => void;
}
const ImprovedImage: React.FC<ImprovedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder,
  lazy = true,
  priority = false,
  sizes,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLImageElement>(null);
  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    if (imgRef.current) {
    }
    return () => observer.disconnect();
  const handleLoad = () => {
  const handleError = () => {
  // Generate optimized src with quality parameter
  const getOptimizedSrc = (originalSrc: string) => {
    // If it's an external URL, return as is
    if (originalSrc.startsWith('http')) {
    }
    // For local images, you could add optimization parameters
    // This is a placeholder - in a real app, you'd use a service like Cloudinary or Next.js Image
  const optimizedSrc = getOptimizedSrc(src);
  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          {placeholder ? (
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <imgIcon className="w-8 h-8 text-gray-400" />
          )}
        </div>
      )}
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
          <div className="text-center">
            <imgIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">Failed to load image</p>
          </div>
        </div>
      )}
      {/* Actual Image */}
      {isInView && !hasError && (
        <img
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={lazy && !priority ? 'lazy' : 'eager'}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : 'auto'
          }}
        />
      )}
      {/* Loading Spinner */}
      {isInView && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
// Preload component for critical images
export const PreloadImage: React.FC<{ src: string; as?: string }> = ({ 
  src, 
  as = 'image' 
}) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = as;
    return () => {
// Image with blur placeholder
export const BlurImage: React.FC<ImprovedImageProps & { blurDataURL?: string }> = ({
  blurDataURL,
  ...props
}) => {
  return (
    <ImprovedImage
      {...props}
      placeholder={blurDataURL}
    />
=======
import React, { useState, useRef, useEffect } from 'react';
import { Cloud } from 'lucide-react';

interface ImprovedimageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvedimage({ className = '', children, ...props }: ImprovedimageProps) {
  return (
    <div className={`improvedimage-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/main
