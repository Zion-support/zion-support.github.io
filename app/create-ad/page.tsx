import React from 'react';
import { Metadata } from 'next';
import AdManagementSystem from '../components/AdManagementSystem';

export const metadata: Metadata = {
  title: 'Create Ad Campaign | Zion Tech Group',
  description: 'Create and manage your advertising campaigns with our comprehensive ad management system.',
  keywords: 'create ad, advertising campaign, ad management, marketing',
  openGraph: {
    title: 'Create Ad Campaign | Zion Tech Group',
    description: 'Create and manage your advertising campaigns with our comprehensive ad management system.',
    type: 'website',
  },
};

const CreateAdPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50"
      <div className="container mx-auto px-4 py-8"
        <div className="mb-8"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create New Ad Campaign</h1>"
          <p className="text-xl text-gray-600"
            Build and launch your advertising campaigns with our powerful ad management tools.
          </p>
        </div>
        <AdManagementSystem />
      </div>
    </div>
};

export default CreateAdPage;