import Navigation from './Navigation'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import React, { useEffect, useState, useCallback } from 'react'
import { Settings, Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import { AlertTriangle } from 'lucide-react'
'use client'
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
    preloadin,
  g: boolean,
    codeSplitting: boolean}>({
    images: false,
    lazyLoading: false
    preloadin,
  g: false,
    codeSplitting: false})
  const optimizeImages = $2;
export default PerformanceOptimizerPage