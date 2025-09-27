import Head from "next/head";
import dynamic from "next/dynamic";

export default function AnalyticsPage() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive website analytics dashboard for performance, accessibility and SEO monitoring." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading analytics dashboard...</p>
        </div>
      </div>
    </>
  );
}