import React from 'react';
import { Metadata } from 'next';
import AdvancedAutomationSolutionsShowcase2025 from '../../components/AdvancedAutomationSolutionsShowcase2025';
import AdvancedAutomationSolutionsPromotionBanner2025 from '../../components/AdvancedAutomationSolutionsPromotionBanner2025';

export const metadata: Metadata = {
  title: 'Advanced Automation Solutions 2025 | Zion Tech Group',
  description: 'Revolutionary automation technologies that transform business operations. Discover autonomous operations, process intelligence, and hyperautomation with 2,500%+ ROI.',
  keywords: [
    'automation solutions 2025',
    'autonomous operations',
    'process intelligence',
    'cognitive automation',
    'hyperautomation',
    'business process automation',
    'AI automation',
    'robotic process automation'
  ],
  openGraph: {
    title: 'Advanced Automation Solutions 2025 | Zion Tech Group',
    description: 'Revolutionary automation technologies that transform every aspect of business operations with unprecedented efficiency and ROI.',
    type: 'website',
  },
};

export default function AutomationSolutions2025Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <AdvancedAutomationSolutionsPromotionBanner2025 />
      <AdvancedAutomationSolutionsShowcase2025 />
    </div>
  );
}