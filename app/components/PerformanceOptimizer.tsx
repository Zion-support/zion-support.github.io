<<<<<<< HEAD:app/components/PerformanceOptimizer.tsx
'use client';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState, useCallback } from 'react';
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
interface PerformanceOptimizerProps {
  className?: string
}
const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true
  enableLazyLoading = true
  enablePreloading = true
  enableCodeSplitting = true}) => {
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizationStatus, setOptimizationStatus] = useState<{
    images: boolean,
    lazyLoading: boolean
    preloading: boolean,
    codeSplitting: boolean}>({
    images: false,
    lazyLoading: false
    preloading: false,
    codeSplitting: false})
  const optimizeImages = useCallback(() => {
  if (!enableImageOptimization) return
    // Optimize images
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      if (img.loading !== 'lazy') {
        img.loading = 'lazy'
}
      // Add WebP support detection
      if (!img.src.includes('.webp') && img.src.includes('.jpg')) {
  const webpSrc = img.src.replace('.jpg', '.webp')
        const webpImg = new Image()
        webpImg.onload = () => {
          img.src = webpSrc
}
        webpImg.src = webpSrc
      }
    })
    setOptimizationStatus(prev => ({ ...prev, images: true }))
  }, [enableImageOptimization])
  const enableLazyLoadingOptimization = useCallback(() => {
    if (!enableLazyLoading) return
    // Intersection Observer for lazyloadingconstobserver= new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              observer.unobserve(img)
            }
          }
        })
      }
      { rootMargin: '50px' }
    )
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach((img) => observer.observe(img))
    setOptimizationStatus(prev => ({ ...prev, lazyLoading: true }))
  }, [enableLazyLoading])
  const enablePreloadingOptimization = useCallback(() => {
  if (!enablePreloading) return
    // Preload critical resources
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css']
    criticalResources.forEach((resource) => {
      const link = document.createElement('link')
=======
import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import React, { useEffect, useState, useCallback } from 'react'
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import { AlertTriangle } from 'lucide-react'
'use client'
    const images = document.querySelectorAll('img';
      if (img.loading !== 'lazy'
        img.loading = 'lazy'
      if (!img.src.includes('.webp') && img.src.includes('.jpg'
  const webpSrc = img.src.replace('.jpg', '.webp'
              img.removeAttribute('data-src'
      { "rootMargin": '50px',
    const lazyImages = document.querySelectorAll('img[data-src]'
      '/fonts/main.woff2'
      '/css/critical.css'}
      const link = document.createElement('link'
>>>>>>> origin/main:app-backup/components/PerformanceOptimizer.tsx
      link.rel = 'preload'
      link.as = resource.endsWith('.css') ? 'style' : 'font'
      if (resource.endsWith('.woff2'
        link.crossOrigin = 'anonymous';
    console.error('Optimization "failed": '