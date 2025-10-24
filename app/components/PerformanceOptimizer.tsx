'use client'
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'

import React, { useEffect, useState, useCallback } from 'react'
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import { AlertTriangle } from 'lucide-react'

interface PerformanceOptimizerProps {;
  className?: string;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps>= ({enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true}) =</ {const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizationStatus, setOptimizationStatus] = useState<{
    images: boolean;
    lazyLoading: boolean;
    preloading: boolean;
    codeSplitting: boolean;
  }>({images: false,
    lazyLoading: false,
    preloading: false,
    codeSplitting: false})

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;
    // Optimize images;
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
  
      if (img.loading !== 'lazy') {
        img.loading = 'lazy'
      }

      // Add WebP support detection;
      if (!img.src.includes('.webp') && img.src.includes('.jpg')) {
        const webpSrc = img.src.replace('.jpg', '.webp')
        const webpImg = new Image()
        webpImg.onload = () => {
          img.src = webpSrc;
        }
        webpImg.src = webpSrc;
      }
    })

    setOptimizationStatus(prev => ({...prev, images: true }))
  }, [enableImageOptimization])

  const enableLazyLoadingOptimization = useCallback(() => {
    if (!enableLazyLoading) return;
    // Intersection Observer for lazyloadingconstobserver= new IntersectionObserver(
      (entries) => {
  
        entries.forEach((entry) => {
  
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src')
              observer.unobserve(img)
            }
          }
        })
      },

export default PerformanceOptimizerPage;
