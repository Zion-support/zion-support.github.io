
;
import React, { useState, useEffect, useCallback } from 'react' import { motion, AnimatePresence    } from 'framer-motion' import {  Search, Eye, Ear, MousePointer, Keyboard, Smartphone, Globe, Target, CheckCircle, AlertTriangle, Info, Settings, X, RefreshCw, Download, Share2    } from 'lucide-react'  interface SEOAnalysis { title: string description: string keywords: string[] headings: { level: number tex,
    t: string i,
    d: string  }[] images: { src: string al,
    t: string hasAl,
    t: boolean  }[] links: { href: string tex,
    t: string isInterna,
    l: boolean  }[] metaTags: { nam,
    e: string conten,
    t: string  }[] } interface AccessibilityAnalysis { contrastRatio: number hasSkipLinks: boolean hasProperHeadings: boolean hasAltText: boolean hasFocusIndicators: boolean hasKeyboardNavigation: boolean hasScreenReaderSuppor,
    t: boolean issue,
    s: string[]  } export const EnhancedSEOAccessibility: React.FC = () => { const [isVisible, setIsVisible] = useState(false) const [seoAnalysis, setSeoAnalysis] = useState<SEOAnalysis | null" >(null) const [accessibilityAnalysis, setAccessibilityAnalysis] = useState<AccessibilityAnalysis | null" >(null) const [isAnalyzing, setIsAnalyzing] = useState(false) const [currentTab, setCurrentTab] = useState<'seo' | 'accessibility'>('seo') ;"
}"