<<<<<<< HEAD
<<<<<<< HEAD
"use client"
import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
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
function App() {
  return (
    <Router>
      <HelmetProvider>
        <ErrorBoundary>
<<<<<<< HEAD
          <PerformanceMonitor />
          <AccessibilityEnhancer />
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
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </HelmetProvider>
<<<<<<< HEAD
    </Router>
  )
=======
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

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-900">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
        </div>
      </Router>
    </HelmetProvider>
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
}

export default App
=======
    </Router>";
  );";";
}";";";
export default App;"
>>>>>>> main
