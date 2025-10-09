import React, { useEffect, useState, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// Lazy load components for better performance
const HomePage = lazy(() => import('./page'));
// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);
const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    // Simulate initialization
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const initializeEnhancers = async () => {
    try {
      // Initialize enhancers
      const performanceEnhancer = new PerformanceEnhancer();
      const seoEnhancer = new SEOEnhancer({
        title: 'Zion Tech Group - Advanced AI and IT Solutions',
        description: 'Leading provider of AI and IT solutions for modern enterprises',
        keywords: ['AI', 'IT Solutions', 'Technology', 'Enterprise'],
        canonicalUrl: 'https://ziontechgroup.com'});
      const accessibilityEnhancer = new AccessibilityEnhancer();
      const securityEnhancer = new SecurityEnhancer();
      const uxEnhancer = new UserExperienceEnhancer();
      setEnhancers({
        performance: performanceEnhancer,
        seo: seoEnhancer,
        accessibility: accessibilityEnhancer,
        security: securityEnhancer,
        ux: uxEnhancer});
      setIsInitialized(true);
    } catch (error) {
      // console.error('Failed to initialize enhancers:', error);
      setIsInitialized(true);
    }
  };
  if (!isInitialized) {
    return <LoadingSpinner />;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
export default App;