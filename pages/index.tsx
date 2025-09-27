import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
ursor/check-fix-push-and-merge-to-main-2926
import dynamic from 'next/dynamic';
import EnhancedSEO from '../src/components/EnhancedSEO';
// Lazy load heavy components
const AccessibilityEnhancer = dynamic(() => import('../src/components/AccessibilityEnhancer'), {
  ssr: false  });
const Home = React.memo(function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
export default Home;