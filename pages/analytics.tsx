import Head from "next/head";
// import dynamic from "next/dynamic";
// import EnhancedSEO from "../src/components/EnhancedSEO";

// L a z y l o a d th e comprehens i v e dashbo a r d
// const ComprehensiveDashboard = dynamic(() => import("../src/components/ComprehensiveDashboard"){
//   ss r: false//   load i n g: () => (
//     <di v classN a m e="mi n-h-scr e e n b g-g r a y-5 0 f l e x it e m s-cen t e r just i f y-cen t e r">
//       <di v classN a m e="t e x t-cen t e r">
//         <di v classN a m e="anim a t e-s p i n roun d e d-f u l l h-1 2 w-1 2 bor d e r-b-2 bor d e r-b l u e-60 0 m x-a u t o"></di v>
//         <p classN a m e="m t-4 t e x t-g r a y-60 0">Load i n g analyt i c s dashbo a r d...</p>
//       </di v>
//     </di v>
//   )
// });


			<Head>
        <title>Analytics Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehens i v e website analyt i c s dashbo a r d fo r performance accessibility an d SEO monitoring." />
        <meta name="robots" content="noindex nofollow" />
			</Head>

export default function AnalyticsPage() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehensive website analytics dashboard for performance, accessibility and SEO monitoring." />
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      
      {/* <EnhancedSEO
        title="Analytics Dashboard - Zion Tech Solutions"
        description="Comprehensive website analytics dashboard for performance, accessibility and SEO monitoring."
        keywords={['analytics', 'performance monitoring', 'accessibility checker', 'SEO analyzer', 'website health', 'performance metrics', 'web vitals', 'dashboard']}
      /> */}
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
			<div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Analytics Dashboard</h1>
          <p className="text-gray-600">Component temporarily disabled</p>
        </div>
      </div>
		</>
  );
}