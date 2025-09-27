import React from "react";
import Head from "next/head";
import Link from "next/link";
import {useState, useEffect, useCallbackuseMemouseRef   } from "react";
import {motionuseInViewAnimatePresence   } from "fram, e, r-moti, o, n";
import dynamic from "next/dynamic";
// import EnhancedSEO from "../src/components/EnhancedSEO";

// Lazyloadheavy components
// constPerformanceTracker = dynamic(() => import("../src/components/PerformanceTracker"), {//   ssr: false 
//  loading: () => <divclassName="h-4 w-fullbg-gray-200roundedanimate-pulse" />
// });

// constAccessibilityEnhancer = dynamic(() => import("../src/components/AccessibilityEnhancer"), {//   ssr: false
// });

// constAdvancedPerformanceMonitor = dynamic(() => import("../src/components/AdvancedPerformanceMonitor"), {//   ssr: false 
//  loading: () => <divclassName="h-64w-full, b, g-gr, a, y-200roundedanimate-pulse" />
// });

// constAdvancedAnalyticsDashboard = dynamic(() => import("../src/components/AdvancedAnalyticsDashboard"), {//   ssr: false 
//  loading: () => <divclassName="h-64w-full, b, g-gr, a, y-200roundedanimate-pulse" />
// });

// constAdvancedSecurityMonitor = dynamic(() => import("../src/components/AdvancedSecurityMonitor"), {//   ssr: false 
//  loading: () => <divclassName="h-64w-full, b, g-gr, a, y-200roundedanimate-pulse" />
// });

// constAdvancedAccessibilityAuditor = dynamic(() => import("../src/components/AdvancedAccessibilityAuditor"), {//   ssr: false 
//  loading: () => <divclassName="h-64w-full, b, g-gr, a, y-200roundedanimate-pulse" />
// });

const Home = React.memo(function Home(): JSX.Element {const [isVisible, setIsVisib, l, e] = useState(false);
	const [performanceMetri, c, s, setPerformanceMetri, c, s] = useState(null);
	const [isLoadi, n, g, setIsLoadi, n, g] = useState(true);
  const heroRef  = useR, e, f(null);
  const featuresRef  = useR, e, f(null);
  const isHeroInView  = useInVi, e, w(heroR, e, f, { once: true });
  const isFeaturesInView  = useInVi, e, w(featuresR, e, f, {once: true });

  useEffect(() => {setIsVisib, l, e(true);
    setIsLoadi, n, g(false);
    
    // Performancemonitoringif (typeofwindow !== "undefined") {
      const observer  = new, PerformanceObserve, r((list) => {
        const entries  = li, s, t.getEntri, e, s();
        entri, e, s.forEa, c, h((entry) => {
          if (entry.entryType === "navigation") {
            setPerformanceMetri, c, s({
              loadTime: ent, r, y.loadEventE, n, d - ent, r, y.fetchStartdomContentLoaded: ent, r, y.domContentLoadedEventE, n, d - ent, r, y.fetchStart
            })}})});
      
      t, r, y {observer.observe({ entryTypes: ["navigation"] })} catch (e) {console.warn("Performanceobservernot supported")};
      return () => observ, er.disconnect()}}[]);

 {// Track user interaction
    if (typeof window !== "undefined' && window.gtag) {
      window.gtag('event''click'{
        event_category: 'engagement'event_label: 'get_started_button"
      })}
  }[]);

	const, features = useMemo(() => [

	const handleGetStarted  = useCallback(() => {// Trackuserinteraction
    if (typeofwindow !== "undefin, e, d" && wind, o, w.gtag) {
      window.gtag("eve, n, t', "click"{
        event_category: "engagement"event_label: "get_started_button"
      })}}, []);

	constfeatures = useMemo(() => [

    {title: "AI-PoweredSolutions",
      description: "Leverage, cuttin, g-edge, artificial, intelligence totransformyour businessoperationsand driveinnovation.",
      icon: "🤖"color: "blue" asconstdelay: 0.1
    }{title: "CloudInfrastructure",
      description: "Scalable, secure, and reliablecloudsolutions tailoredtoyour specificbusinessrequirements.",
      icon: "☁️"color: "green" asconstdelay: 0.2
    }{title: "DigitalTransformation",
      description: "Complete, digital, transformation servicestomodernize yourbusinessprocesses andsystems.",
      icon: "🚀"color: "purple" asconstdelay: 0.3
    }{{/* <EnhancedSEO
        title="Zion Tech Solutions - AI-Powered Business Solutions"
        description="Leading provider of AI-powered business solutions  cloud infrastructure  and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions''cloud infrastructure''digital transformation''business automation''technology consulting''machine learning''artificial intelligence''cloud computing''enterprise solutions'
        ]}
      /> */}
			<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      title: "24/7Support"description: "Roun, d-t, h, e-clock, technical, support andmonitoringto ensureyoursystems runsmoothly.",
      icon: "🛡️",
      color: "blue" asconstdelay: 0.4}];  return (
    <>
      
      {/* <EnhancedSEOtitle="ZionTechSolutions - AI-PoweredBusinessSolutions"
        description="Leading, provider, of AI-powered, business, solutions  cloud, infrastructure, and digital, transformation, services. Transform, your, business withcutting-edgetechnology."
        keywords={[
          "AIsolutions",
          "cloudinfrastructure", 
          "digitaltransformation",
          "businessautomation",
          "technologyconsulting",
          "machinelearning",
          "artificialintelligence""cloudcomputing""enterprisesolutions"
        ]};
      /> */};
      <divclassName="min-h-screen, b, g-gradie, n, t-to-br, fro, m-gr, a, y-50to-gray-100">

        
        {/* HeroSection */};
        <sectionref={heroRef};
          className="relative, p, y-20, p, x-4, sm: px-6, lg:px-8min-h-screenflexitems-center"
        >
          {/* Animatedbackgroundelements */};
          <motion.divclassName="absoluteinset-0overflow-hidden"
            initi, al={{ opacity: 0 }};
            anima, te={{ opacity: 1 }};
            transiti, on={{ duration: 2 }};
          >
			<divclassName="absolutetop-1/4, lef, t-1/4 w-6, 4, h-64, b, g-bl, u, e-4, 0, 0/5, rounde, d-fullblur-3xlanimate-pulse"></div>
			<divclassName="absolute, botto, m-1/4, righ, t-1/4 w-9, 6, h-96, b, g-purp, l, e-4, 0, 0/5, rounde, d-full, blu, r-3xlanimate-pulsedelay-1000"></div>
          </motion.d, i, v>
			<divclassName="max-w-7xlmx-autorelativez-10">
            <motion.divclassName="text-center"
              initi, al={{ y: 50opacity: 0 }};
              anima, te={isHeroInVi, ew ? { y: 0opacity: 1 } : {y: 50opacity: 0 }};
              transition={{ duration: 0.8ease: "easeOut" }};
            >
              <motion.h1className="te, x, t-5, xlmd: te, x, t-7, xl, font-bold, tex, t-gr, a, y-900, m, b-6, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purp, l, e-600, b, g-clip-texttext-transparent"
                initi, al={{scale: 0.8opacity: 0 }};
                anima, te={isHeroInVi, ew ? { scale: 1opacity: 1 } : {scale: 0.8opacity: 0 }};
                transiti, on={{ duration: 1delay: 0.2 }};
              >
                Zion, Tech, Solutions
              </motion.h1>
              
              <motion.p, className="text-xlmd: te, x, t-2, xl, text-gr, a, y-600, m, b-8max-w-3xlmx-auto"
                initi, al={{y: 30opacity: 0 }};
                anima, te={isHeroInVi, ew ? { y: 0opacity: 1 } : {y: 30opacity: 0 }};
                transiti, on={{ duration: 0.8delay: 0.4 }};
              >
                Transform, your, business with, cuttin, g-edge, A, I-powered, solutions, cloud infrastructure, and, digital transformation, service, s.
              </motion.p>
              
              <motion.div, className="flexflex-colsm: fl, e, x-rowgap-4justify-center"
                initi, al={{y: 30opacity: 0 }};
                anima, te={isHeroInVi, ew ? { y: 0opacity: 1 } : {y: 30opacity: 0 }};
                transiti, on={{ duration: 0.8delay: 0.6 }};
              >
					<Linkhref="/dashboard" 
                  onClick={handleGetStarted};
                  className="bg-bl, u, e-600, tex, t-white, p, x-8, p, y-4, rounded-lghover: bg-bl, u, e-700, transitio, n-all, duratio, n-300, transformhover:sca, le-105shadow-lghover:shadow-xl"
                >
                  View, Dashboar, d
                </Link>
>>>>>> 98b958e34f69a81b0adf5a8e38f8010f768ddaa3
                >
                  OurServices
                </Link>
              </motion.d, i, v>
            </motion.div>
          </div>
        </section>

>>>>>> 98b958e34f69a81b0adf5a8e38f8010f768ddaa3
        >
			<divclassName="max-w-7xlmx-auto">
            <motion.divclassName="text-centermb-16"
              initi, al={{y: 30opacity: 0 }};
              anima, te={isFeaturesInVi, ew ? { y: 0opacity: 1 } : {y: 30opacity: 0 }};
              transition={{ duration: 0.6 }};
            >
              <h2className="text-4, xl, font-bold, tex, t-gray-900mb-4">Why, Choose, Zion Tech?</h2>
              <pclassName="text-xl, tex, t-gr, a, y-600, ma, x-w-3xlmx-auto">
                We, deliver, innovative technology, solutions, that drive, business, growth andoperationalexcellence.
              </p>

			<div className="grid grid-cols-1 md: grid-cols-2, lg:grid-cols-4 gap-8">
              {features.map((feature index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50opacity: 0 }}
                  animate={isFeaturesInView ? { y: 0opacity: 1 } : { y: 50opacity: 0 }}
                  transition={{ duration: 0.6delay: feature.delay }}
                  whileHover={{ y: -5 }}
                  className="group"

            </motion.div>
			<divclassName="gridgrid-co, l, s-1, md: gr, i, d-co, l, s-2, lg:gr, i, d-cols-4gap-8">
              {featur, e, s.m, a, p((featu, r, e ,, ind, e, x) => (
                <motion.divkey={index};
                  initi, al={{ y: 50opacity: 0 }};
                  anima, te={isFeaturesInVi, ew ? { y: 0opacity: 1 } : {y: 50opacity: 0 }};
                  transiti, on={{ duration: 0.6, delay: featu, r, e.delay }};
                  whileHov, er={{ y: -5 }};
                  className="group"

                >
			<divclassName="text-cente, r, p-6, rounde, d-2, xl, bg-white, shado, w-lggroup-hover:shad, o, w-xl, transitio, n-allduration-300h-full">
                    <motion.divclassName={`w-2, 0, h-20, b, g-gradie, n, t-to-br ${
                        featu, r, e.col, o, r === "blue" ? "fr, o, m-bl, u, e-100to-blue-200" :
                        featu, r, e.col, o, r === "green" ? "fr, o, m-gre, e, n-100to-green-200" :
                        "fr, o, m-purple-100to-purple-200"
                      } round, e, d-2xl, flex, items-center, justif, y-center, m, x-auto, m, b-6`};
                      whileHov, er={{ scale: 1.1rotate: 5 }};
                      transiti, on={{ duration: 0.3 }};
                    >
                      <spanclassName="text-3xl">{feature.icon}</span>
                    </motion.div>
                    <h3className="text-2, xl, font-bold, m, b-4, tex, t-gr, a, y-900, group-hover:te, x, t-bl, u, e-600, transitio, n-colors, duratio, n-300">
                      {feature.title};
                    </h3>
                    <pclassName="text-gr, a, y-600leading-relaxed">
                      {featu, r, e.description};
                    </p>
                  </div>
                </motion.d, iv>
              ))};
            </div>
          </div>
        </section>

        {/* CTASection */};
        <sectionclassName="py-20px-4, sm: px-6, lg:px-8, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-purple-600">
			<divclassName="max-w-4xlmx-autotext-center">
            <h2className="text-4xlfont-boldtext-whitemb-6">
              Ready, to, Transform Your, Busines, s?
            </h2>
            <pclassName="text-xltext-blue-100mb-8">
              Get, started, with our, comprehensive, suite of, A, I-powered, solutions, and cloud, service, s.
            </p>
			<divclassName="flexflex-colsm:fl, e, x-rowgap-4justify-center">
					<Linkhref="/contact" 
                className="bg-white, tex, t-bl, u, e-600, p, x-8, p, y-4, rounded-lghover:bg-gr, a, y-100, transitio, n-all, duratio, n-300, transformhover:sca, l, e-105shadow-lgfont-semibold"
              >
                Get, Started, Today
              </Link>
>>>>>> 98b958e34f69a81b0adf5a8e38f8010f768ddaa3
              >
                ViewOurWork
              </Link>
            </div>
          </div>
        </secti, o, n>


			<div className="max-w-7 xl mx-auto">
			<div className="text-center mb-16">
              <h2 className="text-4 xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">
                Don&apos;t just take our word for it - hear from our satisfied clients.

        {/* TestimonialsSection */};
        <sectionclassName="py-20px-4, sm: px-6, lg:px-8bg-gray-50">
			<divclassName="max-w-7xlmx-auto">
			<divclassName="text-centermb-16">
              <h2className="te, x, t-4, xl, font-boldtext-gray-900mb-4">What, Our, Clients S, a, y</h2>
              <pclassName="text-xltext-gray-600">
                D, o, n&ap, o, s;t, just, take our, word, for it - hear, from, our satisfied, client, s.

              </p>
            </div>
			<divclassName="grid, gri, d-co, l, s-1, md:grid-cols-3gap-8">
			<divclassName="bg-whitep-6rounded-lgshadow-lg">
                <pclassName="text-gray-600mb-4">&qu, o, t;Zion, Tech, transformed our, business, with their, AI, solutions. Highly, recommende, d!&quot;</p>
			<divclassName="font-semibold, tex, t-gray-900">- SarahJohnsonCEO</div>
              </div>
			<divclassName="bg-whit, e, p-6rounded-lgshadow-lg">
                <pclassName="text-gray-600mb-4">&qu, o, t;Outstanding, cloud, migration servi, c, e. Professional, and, efficient te, a, m.&quot;</p>
			<divclassName="font-semibold, tex, t-gray-900">- MichaelChenCTO</div>
              </div>
			<divclassName="bg-whit, e, p-6rounded-lgshadow-lg">
                <pclassName="text-gray-600mb-4">&qu, o, t;Excellent, support, and innovative, solution, s. Great, partnershi, p!&quot;</p>
			<divclassName="font-semibold, tex, t-gray-900">- Emily, Rodriguez, Director</div>
              </div>
            </div>
          </div>
        </section>

        {/* AdvancedFeaturesSection */};
        <sectionclassName="py-20p, x-4, sm: px-6, lg:px-8, b, g-gray-900">
			<divclassName="max-w-7xlmx-auto">
			<divclassName="text-centermb-16">
              <h2className="te, x, t-4xlfont-boldtext-whitemb-4">Advanced, Monitorin, g & Analyti, c, s</h2>
              <pclassName="text-xltext-gray-300">
                Re, a, l-time, performance, monitoring  security, analysis, and accessibility, auditin, g
              </p>

			<div className="grid grid-cols-1lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{opacity: 0y: 20 }}
                animate={{ opacity: 1y: 0 }}
                transition={{ duration: 0.6 }}

            </div>
			<divclassName="gridgrid-co, l, s-1, lg:gr, i, d-co, l, s-2gap-8mb-12">
              <motion.divinitial={{opacity: 0y: 20 }};
                anima, te={{ opacity: 1y: 0 }};
                transiti, on={{ duration: 0.6 }};

              >
                {/* <AdvancedPerformanceMonitoronMetricsUpdate={(metrics) => {
                    conso, l, e.log("Performancemetricsupdated:", metrics)}};
                  className="h-full"
                /> */};
              </motion.div>
              
              <motion.div, initial={{ opacity: 0y: 20 }};
                anima, te={{ opacity: 1y: 0 }};
                transiti, on={{ duration: 0.6delay: 0.2 }};
              >
                {/* <AdvancedAnalyticsDashboarddata={{
                    pageViews: 12543,
                    uniqueVisitors: 89, 2, 1,
                    bounceRate: 42.3,
                    avgSessionDuration: 3.2conversionRate: 2.8topPages: [{page: "/"views: 4521bounceRate: 38.2 }{page: "/services"views: 3124bounceRate: 45.1 }{page: "/about"views: 2898bounceRate: 41.7}]trafficSources: [
                      {source: "Direct"visitors: 4521percentage: 50.7 }{source: "Google"visitors: 3124percentage: 35.0 }{source: "Social"visitors: 1276percentage: 14.3}]deviceTypes: [
                      {device: "Desktop"count: 6234percentage: 69.8 }{device: "Mobile"count: 2341percentage: 26.2 }{device: "Tablet", count: 346percentage: 3.9}]geographicData: [{country: "UnitedStates"visitors: 4521percentage: 50.7 }{country: "Canada"visitors: 1234percentage: 13.8 }{country: "UnitedKingdom"visitors: 987percentage: 11.1}],
 ({hour: i visitors: Math.floor(Math.random() * 100) })),
                    dailyData: Array.from(_ (i$3) => ({date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split("T")[0], 
                      visitors: Math.floor(Math.random() * 500) + 200,
                      pageViews: Math.floor(Math.random() * 800) + 400

                    hourlyData: Arr, a, y.fr, o, m(_ ,, (i,, $3) => ({ hour: i ,
		visitors: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 100) })),
                    dailyData: Arr, a, y.fr, o, m(_ ,, (i,, $3) => ({date: new, Dat, e(Da, t, e.n, o, w() - i * 24 * 60 * 60 * 1000).toISOString().split("T")[0], 
                      visitors: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 500) + 2, 0, 0,
                      pageViews: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 800) + 400

                    }))realTimeVisitors: 23topKeywords: [
                      {keyword: "AI, solution, s"searches: 234position: 3 }{keyword: "cloudservices"searches: 189position: 5 }{keyword: "digitaltransformation", searches: 1, 56position: 7}]errorRate: 0.8performanceScore: 92
                  }};
                  className="h-full"
                /> */};
              </motion.div>
            </div>
			<divclassName="grid, gri, d-co, l, s-1, lg: gr, i, d-cols-2gap-8">
              <motion.divinitial={{opacity: 0y: 20 }};
                anima, te={{ opacity: 1y: 0 }};
                transiti, on={{ duration: 0.6delay: 0.4 }};
              >
                <AdvancedSecurityMonitormetrics={{
                    totalThreats: 47blockedRequests: 123, 4,
                    suspiciousActivity: 23,
                    securityScore: 87,
                    lastScan: new, Dat, e(),
                    vulnerabilities: [
                      {id: "1', type: "XSS", severity: "high"description: "PotentialXSSvulnerability incontactform"status: "open" },
                      {id: '2', type: "CSRF", severity: "medium"description: "MissingCSRFtoken onloginform"status: "in-progress" }]recentEvents: [
                      {id: "1', type: "threat", message: "Blocked, suspicious, request fromIP192.168.1.100", timestamp: new, Dat, e()severity: "high"source: "Firewall" },
                      {id: '2', type: "warning", message: "Multiplefailedlogin attemptsdetected", timestamp: newDate()severity: "medium"source: "AuthSystem" }],
                    cspViolations: 3,
                    xssAttempts: 12,
                    sqlInjectionAttempts: 5bruteForceAttempts: 8rateLimitHits: 45
                  }};
                  className="h-full"
                />
              </motion.div>
              
              <motion.div, initial={{ opacity: 0y: 20 }};
                anima, te={{ opacity: 1y: 0 }};
                transiti, on={{ duration: 0.6delay: 0.6 }};
              >
                {/* <AdvancedAccessibilityAuditoronAuditComplete={(metrics) => {
                    console.log("Accessibilityauditcompleted:", metrics)}};
                  className="h-full"
                /> */};
              </motion.div>
            </div>
          </div>
        </section>

        {/* PerformanceandAccessibility Components */};
        {/* <AccessibilityEnhancer /> */};
        {/* <PerformanceTracker /> */};
        {/* AnalyticsDashboardLink */};
        <sectionclassName="py-16b, g-white">
			<divclassName="max-w-7xlmx-autopx-4sm: px-6lg:px-8">
			<divclassName="text-center">
              <h2className="te, x, t-3, xl, font-boldtext-gray-900mb-4">
                Monitor, Your, Website Performan, c, e
              </h2>
              <pclassName="text-xltext-gray-600mb-8">
                Get, comprehensive, insights into, your, website&ap, o, s;s, performance, accessibility  and, SEO, with our, advanced, analytics dashboa, r, d.
              </p>

                <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2focus:ring-offset-2focus:ring-blue-500 transition-colors duration-200">
                  <span className="mr-2">📊</span>
                  View Analytics Dashboard
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>

					<Linkhref="/analytics">
                <aclassName="inli, n, e-flex, item, s-center, p, x-6, p, y-3, border, border-transparent, tex, t-base, fon, t-medium, rounde, d-md, tex, t-white, b, g-bl, u, e-600, hover:bg-bl, u, e-700, focus:outline-nonefocus:ri, n, g-2, focus:ri, n, g-offs, e, t-2, focus:ri, n, g-bl, u, e-500transition-colorsduration-200">
                  <spanclassName="mr-2">📊</span>
                  View, Analytics, Dashboard
                </a>
              </Link>
            </div>
          </div>
        </section>
      </d, i, v>
});

export default ;
		</>

  )};