import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import SuccessStoriesShowcase2026 from '../../components/SuccessStoriesShowcase2026';
import SuccessStoriesShowcase2026PromotionBanner from '../../components/SuccessStoriesShowcase2026PromotionBanner';
import RevolutionaryTestimonialsShowcase from '../../components/RevolutionaryTestimonialsShowcase';
import BusinessSuccessStories2025 from '../../components/BusinessSuccessStories2025';

export default function SuccessStories2026Page() {
  return (
    <ErrorBoundary>
      <SEO
        title="Success Stories 2026 - Real Business Transformations | Zion Tech Group"
        description="Discover how businesses achieved 300% ROI with our AI solutions. Read real success stories, case studies, and testimonials from companies that transformed with our technology."
        keywords="success stories, case studies, business transformation, AI ROI, testimonials, client results, business automation success"
        url="/success-stories-2026"
      />
      
      <div className="min-h-screen bg-white">
        {/* Promotion Banner */}
        <SuccessStoriesShowcase2026PromotionBanner />
        
        {/* Main Success Stories */}
        <SuccessStoriesShowcase2026 />
        
        {/* Testimonials */}
        <RevolutionaryTestimonialsShowcase />
        
        {/* Additional Success Stories */}
        <BusinessSuccessStories2025 />
      </div>
    </ErrorBoundary>
  );
}