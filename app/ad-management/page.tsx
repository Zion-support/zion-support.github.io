<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
import React from 'react';

<<<<<<< HEAD
export const metadata: Metadata = {
=======
import React from 'react'.;
import { Metadata } from 'next'.;
import AdDashboard from '../components/AdDashboard';
export const metadata: Metadata = {,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
  title: 'Ad Management System | Zion Tech Group',
  description: 'Comprehensive advertising management system with campaign creation, analytics, scheduling, and template management.',
  keywords: 'ad management, advertising, campaigns, analytics, scheduling, templates, marketing',
  openGraph: {,
    title: 'Ad Management System | Zion Tech Group',
    description: 'Comprehensive advertising management system with campaign creation, analytics, scheduling, and template management.',
    type: 'website',;
  },;
};

const AdManagementPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <AdDashboard />
      </div>
    </div>
  );
};

export default AdManagementPage;
=======
    <div className="min-h-screen bg-gray-50">"""
      <div className="container mx-auto px-4 py-8">
        <AdDashboard />
      </div>
    </div>,
  );
  );
};
"
export default AdManagementPage;""
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
export default function AdManagementPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Ad Management</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
