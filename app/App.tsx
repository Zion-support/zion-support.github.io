<<<<<<< HEAD
"use client";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ContactPage = lazy(() => import("./contact/page"));
const ServicesPage = lazy(() => import("./services/page"));
const PricingPage = lazy(() => import("./pricing/page"));
const CaseStudiesPage = lazy(() => import("./case-studies/page"));
const BlogPage = lazy(() => import("./blog/page"));
const TeamPage = lazy(() => import("./team/page"));
const CareersPage = lazy(() => import("./careers/page"));
const PrivacyPage = lazy(() => import("./privacy/page"));
const TermsPage = lazy(() => import("./terms/page"));
const CookiesPage = lazy(() => import("./cookies/page"));

// 5G Solutions Pages
const FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));

=======
<<<<<<< HEAD
"use client"
import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Helmet } from "react-helmet-async"
import ErrorBoundary from "./components/ErrorBoundary"
import PerformanceMonitor from "./components/PerformanceMonitor"
import AccessibilityEnhancer from "./components/AccessibilityEnhancer"
// Lazy load pages for better performance
const  HomePage = lazy(() => import("./page"));"
const  AboutPage = lazy(() => import("./about/page"));"
const  ContactPage = lazy(() => import("./contact/page"));"
const  ServicesPage = lazy(() => import("./services/page"));"
const  PricingPage = lazy(() => import("./pricing/page"));"
const  CaseStudiesPage = lazy(() => import("./case-studies/page"));"
const  BlogPage = lazy(() => import("./blog/page"));"
const  TeamPage = lazy(() => import("./team/page"));"
const  CareersPage = lazy(() => import("./careers/page"));"
const  PrivacyPage = lazy(() => import("./privacy/page"));"
const  TermsPage = lazy(() => import("./terms/page"));"
const  CookiesPage = lazy(() => import("./cookies/page"));"
// 5G Solutions Pages
<<<<<<< HEAD
const FiveGDataAnalyticsPage = lazy(() => import("./5g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("./5g-edge-computing/page"));
const FiveGImplementationPage = lazy(() => import("./5g-implementation/page"));
const FiveGIoTSolutionsPage = lazy(() => import("./5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = lazy(() => import("./5g-mobile-applications/page"),
);
const FiveGNetworkInfrastructurePage = lazy(() => import("./5g-network-infrastructure/page"),
);
const FiveGPrivateNetworksPage = lazy(() => import("./5g-private-networks/page"),
);
const FiveGSmartCitySolutionsPage = lazy(() => import("./5g-smart-city-solutions/page"),
);
const FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
=======
const  FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));"
=======
"use client";";"
import React, { lazy, Suspense } from "react;";";";";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom;";";";";
import { HelmetProvider } from "react-helmet-async;";";";";
import ErrorBoundary from "./components/ErrorBoundary;";";";";
import PerformanceMonitor from "./components/PerformanceMonitor;";";";";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer;";";";";
// Lazy load pages for better performance"
const HomePage = lazy(() => import("./page"));";"
const AboutPage = lazy(() => import("./about/page"));";"
const ContactPage = lazy(() => import("./contact/page"));";"
const ServicesPage = lazy(() => import("./services/page"));";"
const PricingPage = lazy(() => import("./pricing/page"));";"
const CaseStudiesPage = lazy(() => import("./case-studies/page"));";"
const BlogPage = lazy(() => import("./blog/page"));";"
const TeamPage = lazy(() => import("./team/page"));";"
const CareersPage = lazy(() => import("./careers/page"));";"
const PrivacyPage = lazy(() => import("./privacy/page"));";"
const TermsPage = lazy(() => import("./terms/page"));";"
const CookiesPage = lazy(() => import("./cookies/page"));";";";";
// 5G Solutions Pages"
const FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));";
>>>>>>> main
>>>>>>> main
function App() {
  return (
    <Router>
      <HelmetProvider>
>>>>>>> main
        <ErrorBoundary>
<<<<<<< HEAD
          <PerformanceMonitor />
<<<<<<< HEAD
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
=======
          <AccessibilityEnhancer />
<<<<<<< HEAD
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
>>>>>>> main
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
=======
          <Suspense  fallback ={<div>Loading...</div>}>
            <Routes>
              <Route  path ="/" element={<HomePage />} />"
              <Route  path ="/about" element={<AboutPage />} />"
              <Route  path ="/contact" element={<ContactPage />} />"
              <Route  path ="/services" element={<ServicesPage />} />"
              <Route  path ="/pricing" element={<PricingPage />} />"
              <Route  path ="/case-studies" element={<CaseStudiesPage />} />"
              <Route  path ="/blog" element={<BlogPage />} />"
              <Route  path ="/team" element={<TeamPage />} />"
              <Route  path ="/careers" element={<CareersPage />} />"
              <Route  path ="/privacy" element={<PrivacyPage />} />"
              <Route  path ="/terms" element={<TermsPage />} />"
              <Route  path ="/cookies" element={<CookiesPage />} />"
              <Route  path ="/5g-solutions" element={<FiveGSolutionsPage />} />"
=======
          <PerformanceMonitor />";
          <AccessibilityEnhancer />";";
          <Suspense: fallback ={<div>Loading...</div>";";,";
}"
              <Route: path ="/about" element={<AboutPage />} />";"
              <Route: path ="/contact" element={<ContactPage />} />";"
              <Route: path ="/services" element={<ServicesPage />} />";"
              <Route: path ="/pricing" element={<PricingPage />} />";"
              <Route: path ="/case-studies" element={<CaseStudiesPage />} />";"
              <Route: path ="/blog" element={<BlogPage />} />";"
              <Route: path ="/team" element={<TeamPage />} />";"
              <Route: path ="/careers" element={<CareersPage />} />";"
              <Route: path ="/privacy" element={<PrivacyPage />} />";"
              <Route: path ="/terms" element={<TermsPage />} />";"
              <Route: path ="/cookies" element={<CookiesPage />} />";"
              <Route: path ="/5g-solutions" element={<FiveGSolutionsPage />} />";
>>>>>>> main
>>>>>>> main
            </Routes>
<<<<<<< HEAD
              </Suspense>
            </AccessibilityEnhancer>
          </ErrorBoundary>
        </BrowserRouter>
      </HelmetProvider>
    )
  }
  
  export default App
=======
          </Suspense>
        </ErrorBoundary>
      </HelmetProvider>
<<<<<<< HEAD
    </Router>
  )
}

export default App
=======
    </Router>";
  );";";
}";";";
export default App;"
>>>>>>> main
>>>>>>> main
