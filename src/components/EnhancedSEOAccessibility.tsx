import React, { useState, useEffect, useCallback } from 'react'; import { _motion, AnimatePresence  } from 'framer-motion'; import { _; Search,; Eye,; Ear,; MousePointer,; Keyboard,; Smartphone,; Globe,; Target,; CheckCircle,; AlertTriangle,; Info,; Settings,; X,; RefreshCw,; Download,; Share2;  } from 'lucide-react'; ; interface SEOAnalysis { title: string; description: string; keywords: string[]; headings: { level: number; text: string; id: string   }[]; images: { src: string; alt: string; hasAlt: boolean   }[]; links: { href: string; text: string; isInternal: boolean   }[]; metaTags: { name: string; content: string   }[]; }; interface AccessibilityAnalysis { contrastRatio: number; hasSkipLinks: boolean; hasProperHeadings: boolean; hasAltText: boolean; hasFocusIndicators: boolean; hasKeyboardNavigation: boolean; hasScreenReaderSupport: boolean; issues: string[];   }; export const EnhancedSEOAccessibility: Reac t.FC = () => {; const [isVisible, setIsVisible] = useState<any>(false); const [seoAnalysis, setSeoAnalysis] = useState<SEOAnalysis | null>(null); const [accessibilityAnalysis, setAccessibilityAnalysis] = useState<AccessibilityAnalysis | null>(null); const [isAnalyzing, setIsAnalyzing] = useState<any>(false); const [currentTab, setCurrentTab] = useState<'seo' | 'accessibility'>('seo'); ;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { CheckCircle } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Target } from 'lucide-react';
import { Check } from 'lucide-react';
</any>
</AccessibilityAnalysis>
</SEOAnalysis>';
</any>;';;';