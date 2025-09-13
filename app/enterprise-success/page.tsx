import React from 'react';
import SEO from '../../../components/SEO';
import EnterpriseSuccessStories from '../../../components/EnterpriseSuccessStories';
import NewContent2025ShowcaseBanner from '../../../components/NewContent2025ShowcaseBanner';
import AI2025LatestInnovationsShowcase from '../../../components/AI2025LatestInnovationsShowcase';

export default function EnterpriseSuccessPage() {
  return (
    <>
      <SEO
        title="Enterprise Success Stories - Real Results | Zion Tech Group"
        description="Discover real enterprise success stories and case studies. See how Fortune 500 companies achieved 15,000% ROI with our AI solutions and digital transformation services."
        keywords="enterprise success stories, case studies, ROI results, digital transformation, AI implementation, business transformation"
        url="/enterprise-success"
      />
      
      <div className="min-h-screen bg-white">
        <NewContent2025ShowcaseBanner />
        <EnterpriseSuccessStories />
        <AI2025LatestInnovationsShowcase />
      </div>
    </>
  );
}