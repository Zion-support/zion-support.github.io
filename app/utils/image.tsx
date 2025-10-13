import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function UtilsPage() {
  return (
    <>
      <Helmet>
        <title>Utils - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional utils services by Zion Tech Group. Transform your business with our expert solutions."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Utils</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional utils services coming soon.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
=======
'use client';
import React from 'react';
'use client';
import React, { useState, useCallback } from 'react';
interface ImageProps {src: string,}
    alt: string;,}interface ImageProps {}}src: string;,
  alt: string;,

  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  _quality?: number,
  src: string,
  alt: string,
=======
import React, { useState, useCallback } from 'react';

interface ImageProps {
  src: string;
  alt: string; origin/cursor/analyze-improve-and-deploy-application-1247
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  _quality?: number;
  _placeholder?: 'blur' | 'empty';
  _blurDataURL?: string;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}
export const Image: React.FC<ImageProps> = ({
  src, origin/cursor/analyze-improve-and-deploy-application-1247
  alt,
  width,
  height,
  className,
  priority = false,
_quality = 75,
  _placeholder = 'empty',
  _blurDataURL, origin/cursor/analyze-improve-and-deploy-application-1247
  fill = false,
  sizes,
  style,
  onLoad,
onError,
  ...props
}) => {
  const [, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    if (onError) onError();
  }, [onError]);

  const imageStyle: React.CSSProperties = {
    ...style,
    ...(fill && {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }),
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={imageStyle}
        {...props}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={imageStyle}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default Image; origin/cursor/analyze-improve-and-deploy-application-1247
