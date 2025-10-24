'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

interface EnhancedSEOHeadProps {;
  className?: string;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps>= ({className = '' }) =</ {
  return (
    <>
      <Helmet />
        <title>{title}</title />
        <meta name="description" content="Zion Tech Group" / />
        <meta name="keywords" content="AI, artificial intelligence, EnhancedSEOHead, AI solutions, intelligent automation" / />
      </Helmet />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div />

export default EnhancedSEOHeadPage;
  )
}
export default EnhancedSEOHead;