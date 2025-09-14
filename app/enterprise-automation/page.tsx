import React from 'react';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import EnterpriseAutomationSolutions2025 from '../../components/EnterpriseAutomationSolutions2025';
import EnterpriseAutomationSolutions2025PromotionBanner from '../../components/EnterpriseAutomationSolutions2025PromotionBanner';

export default function EnterpriseAutomationPage() {
  return (
    <ErrorBoundary>
      <SEO
        title="Enterprise Automation Solutions 2025 - Zion Tech Group"
        description="Transform your enterprise with advanced automation solutions. AI-powered workflows, intelligent process automation, and comprehensive enterprise transformation tools."
        keywords="enterprise automation, business process automation, AI workflows, enterprise solutions, automation tools, digital transformation, enterprise AI"
        url="/enterprise-automation"
      />
      
      <div className="min-h-screen bg-white">
        <EnterpriseAutomationSolutions2025PromotionBanner />
        <EnterpriseAutomationSolutions2025 />
      </div>
    </ErrorBoundary>
  );
}