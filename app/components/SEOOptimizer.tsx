import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const defaultStructuredData = {
  const finalStructuredData = structuredData || defaultStructuredData;
export default SEOOptimizer;
const SEOOptimizer: React.FC = () => {
      const canonical = document.createElement('link');
      const viewport = document.createElement('meta');
      const charset = document.createElement('meta');
      const description = document.createElement('meta');
    const ogTags = [
        const meta = document.createElement('meta');
    const twitterTags = [
        const meta = document.createElement('meta');
    const breadcrumbSchema = {
    const breadcrumbScript = document.createElement('script');
    const performanceHints = [
        const link = document.createElement('link');
      const robots = document.createElement('meta');
      const themeColor = document.createElement('meta');
      const appleTouchIcon = document.createElement('link');
      const favicon = document.createElement('link');
export default SEOOptimizer;