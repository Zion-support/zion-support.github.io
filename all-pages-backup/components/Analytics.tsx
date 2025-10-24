import React from 'react';

<<<<<<< HEAD
const Analytics: React.FC = () => {
<<<<<<< HEAD:all-pages-backup/components/Analytics.tsx
  useEffect(() => {;
    const initAnalytics = () => {;
      if (typeof window !== &quot;undefined&quot; && window.gtag) {
        window.gtag(&quot;config&quot;, &quot;GA_MEASUREMENT_ID&quot;, {
          page_title: document.title,
  page_location: window.location.href
:app/components/Analytics.tsx
        })
      }
    }
    initAnalytics()
  }, [])

  return null; // Analytics component doesn&apos;t render anything
}

export default Analytics
<<<<<<< HEAD:all-pages-backup/components/Analytics.tsx
{};

export default AnalyticsPage
:app/components/Analytics.tsx
=======
const AnalyticsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Analytics
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under construction and will be available soon.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700">
              We are working hard to bring you the best experience. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
>>>>>>> origin/main
