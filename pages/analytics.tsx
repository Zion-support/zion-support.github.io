import Head from 'next/head';
import dynamic from 'next/dynamic';
// import EnhancedSEO from '../src/components/EnhancedSEO';

// Lazy load the comprehensive dashboard
// const ComprehensiveDashboard = dynamic(() => import('../src/components/ComprehensiveDashboard'), {
//   ssr: false,
//   loading: () => (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//         <p className="mt-4 text-gray-600">Loading analytics dashboard...</p>
//       </div>
//     </div>
//   )
// });

export default function AnalyticsPage() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive website analytics dashboard for performance  accessibility  and SEO monitoring." />
        <meta name="robots" content="noindex  nofollow" />
      </Head>
      
      {/* <EnhancedSEO
        title="Analytics Dashboard - Zion Tech Solutions"
        description="Comprehensive website analytics dashboard for performance  accessibility  and SEO monitoring."
        keywords={[
          'analytics',
          'performance monitoring',
          'accessibility checker',
          'SEO analyzer',
          'website health',
          'performance metrics',
          'web vitals',
          'dashboard'
        ]}
      /> */}
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h1>
          <p className="text-gray-600">Component temporarily disabled</p>
        </div>
      </div>
		</>
  )}