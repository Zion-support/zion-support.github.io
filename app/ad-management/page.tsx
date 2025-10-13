import React from 'react';
import { Metadata } from 'next';
import AdDashboard from '../components/AdDashboard';
export const metadata: Metadata = {
  title: 'Ad Management System | Zion Tech Group',
  description: 'Comprehensive advertising management system with campaign creation, analytics, scheduling, and template management.',
  keywords: 'ad management, advertising, campaigns, analytics, scheduling, templates, marketing',
  openGraph: {
    title: 'Ad Management System | Zion Tech Group',
    description: 'Comprehensive advertising management system with campaign creation, analytics, scheduling, and template management.',
    type: 'website',
  },
};
const AdManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50" /><div className="container mx-auto px-4 py-8" /><AdDashboard />
      </div>
    </div>
  );
};
export default AdManagementPage;