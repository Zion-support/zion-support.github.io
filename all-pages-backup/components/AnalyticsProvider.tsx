<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(;
  undefined
)

export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
  consttrackEvent= (
    eventName: string
    parameters?: Record<string, unknown>
  ) => {
<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
        page_title: pageName,
  page_location: window.location.href
<<<<<<< HEAD:all-pages-backup/components/AnalyticsProvider.tsx
{};

export default AnalyticsProviderPage
=======
import React from 'react';

const AnalyticsProviderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AnalyticsProvider
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

export default AnalyticsProviderPage;
>>>>>>> origin/main
