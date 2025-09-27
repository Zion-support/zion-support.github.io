import Head from "next/head";
import dynamic from "next/dynamic";

export default function AnalyticsPage() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive website analytics dashboard for performance, accessibility and SEO monitoring." />
        <meta name="robots" content="noindex nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h1>
          <p className="text-gray-600">Component temporarily disabled</p>
        </div>
      </div>
    </>
  );
}