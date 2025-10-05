import React, { lazy, Suspense, useState, useEffect } from 'react';

// Define available banners with their import paths
const bannerComponents = {
  // Add banner components here as needed
};

export type BannerKey = keyof typeof bannerComponents;

interface BannerRotationManagerProps {
  /** Array of banner keys to display in rotation */
  banners?: BannerKey[];
  /** Rotation interval in milliseconds (default: 8000) */
  interval?: number;
  /** Whether to auto-rotate banners (default: true) */
  autoRotate?: boolean;
  /** Maximum number of banners to show (default: 3) */
  maxBanners?: number;
export const BannerRotationManager: React.FC<BannerRotationManagerProps> = ({
  banners = [],
  interval = 8000,
  autoRotate = true,
  maxBanners = 3
    <div className='relative'>
      <Suspense fallback={<LoadingFallback />}>
        <CurrentBanner />
      </Suspense>

      {/* Rotation controls (if multiple banners) */}
      {visibleBanners.length > 1 && (
        <div className='flex justify-center gap-2 mt-4'>
          {visibleBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-purple-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />