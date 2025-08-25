<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { SEO } from '@/components/SEO';
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef

const Analytics: React.FC = () => {
  return (
    <>
      <SEO 
        title="Analytics - Zion Tech Group"
        description="View analytics and insights about your projects"
        canonical="https://ziontechgroup.com/analytics"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Analytics
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              View analytics and insights about your projects
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our analytics page is coming soon. You'll be able to view comprehensive analytics and insights about your projects and performance.
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function Analytics() {
  return (
    <>
      <SEO
        title="Analytics - Zion Tech Group"
        description="View platform analytics and insights."
        canonical="https://ziontechgroup.com/analytics"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <GradientHeading>Analytics</GradientHeading>
            <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
              Platform analytics and insights for administrators and business users.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter">
              <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-zion-slate-light mb-6">
                Analytics dashboard is currently under development.
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </>
  );
};

export default Analytics;
=======
      </main>
      <Footer />
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
