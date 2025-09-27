import Head from "next/head";
import dynamic from "next/dynamic";
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

export default function AnalyticsPage() {return (
    <>
      <Head>
        <title>Analytics Dashboard - Zion Tech Solutions</title>
        <meta name="description" content="Comprehens i v e website analyt i c s dashbo a r d fo r performanceaccessibility a n d SEO monitoring." />
        <meta name="robots" content="noindexnofollow" />
      </Head>

      
      {/* <EnhancedSEO
        ti t l e="Analytics Dashboard - Zion Tech Solutions"
        description="Comprehens i v e website analyt i c s dashbo a r d fo r performanceaccessibility a n d SEO monitoring."
        keywo r d s={['analyt i c s''performance monitoring''accessibility chec k e r''SEO analy z e r''website hea l t h''performance metr i c s''we b vit a l s''dashbo a r d']}
      /> */}
			<di v classN a m e="mi n-h-scr e e n b g-g r a y-5 0 f l e x it e m s-cen t e r just i f y-cen t e r">
			<di v classN a m e="t e x t-cen t e r">
          <h 1 classN a m e="t e x t-2 x l f o n t-b o l d t e x t-g r a y-90 0 m b-4">Analytics Dashboard</h 1>
          <p classN a m e="t e x t-g r a y-60 0">Compon e n t temporar i l y disab l e d</p>
        </di v>
      </di v>
		</>
  )}