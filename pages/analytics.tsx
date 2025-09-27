import Head from "next/head";
import dynamic from "next/dynamic";
// importEnhancedSEOfrom "../src/components/EnhancedSEO";

// La zy lo ad the comprehensi ve dashboa rd
// constComprehensiveDashboard = dynamic(() => import("../src/components/ComprehensiveDashboard"){
//   ssr: false//   loadi ng: () => (
//     <div classNa me="min-h-scre en bg-gr ay-5 0 fl ex ite ms-cent er justi fy-cent er">
//       <div classNa me="te xt-cent er">
//         <div classNa me="anima te-sp in round ed-fu ll h-1 2 w-1 2 bord er-b-2 bord er-bl ue-60 0 mx-au to"></div>
//         <pclassNa me="mt-4 t ex t-gr ay-60 0">Loadi ng analyti cs dashboa rd...</p>
//       </div>
//     </div>
//   )
// });


			<Head>
        <title>AnalyticsDashboard - ZionTechSolutions</title>
        <metaname="description" content="Comprehensi ve websiteanalyti cs dashboa rd for performanceaccessibilityand SEOmonitoring." />
        <metaname="robots" content="noindexnofollow" />
			</Head>

exportdefaultfunctionAnalyticsPage() {
  return (
    <>
      <Head>
        <title>AnalyticsDashboard - ZionTechSolutions</title>
        <metaname="description" content="Comprehensivewebsiteanalyticsdashboardforperformance, accessibilityandSEOmonitoring." />
        <metaname="robots" content="noindex,nofollow" />
      </Head>

      
      {/* <EnhancedSEO
        tit le="AnalyticsDashboard - ZionTechSolutions"
        description="Comprehensi ve websiteanalyti cs dashboa rd for performanceaccessibilitya nd SEOmonitoring."
        keywor ds={['analyti cs''performancemonitoring''accessibilitycheck er''SEOanalyz er''websiteheal th''performancemetri cs''web vita ls''dashboa rd']}
      /> */}
			<div classNa me="min-h-scre en bg-gr ay-5 0 fl ex ite ms-cent er justi fy-cent er">
			<div classNa me="te xt-cent er">
          <h 1 classNa me="te xt-2 x lf on t-bo ld te xt-gr ay-90 0 mb-4">AnalyticsDashboard</h 1>
          <pclassNa me="te xt-gr ay-60 0">Compone nt temporari ly disabl ed</p>
        </div>
      </div>
		</>
  )}