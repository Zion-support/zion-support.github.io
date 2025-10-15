"use client"""
import { Suspense, lazy } from "react"""
import { BrowserRouter, Routes, Route } from "react-router-dom"""
import { HelmetProvider } from "react-helmet-async"""
import ErrorBoundary from "./components/ErrorBoundary"""
import PerformanceMonitor from "./components/PerformanceMonitor"""
import AccessibilityEnhancer from "./components/AccessibilityEnhancer"""
import LoadingSpinner from "./components/LoadingSpinner"
"
// Lazy load pages for better performance""
const HomePage = lazy(() => import("./page"))""
const AboutPage = lazy(() => import("./about/page"))""
const ContactPage = lazy(() => import("./contact/page"))""
const ServicesPage = lazy(() => import("./services/page"))""
const PricingPage = lazy(() => import("./pricing/page"))""
const CaseStudiesPage = lazy(() => import("./case-studies/page"))""
const BlogPage = lazy(() => import("./blog/page"))""
const TeamPage = lazy(() => import("./team/page"))""
const CareersPage = lazy(() => import("./careers/page"))""
const PrivacyPage = lazy(() => import("./privacy/page"))""
const TermsPage = lazy(() => import("./terms/page"))""
const CookiesPage = lazy(() => import("./cookies/page"))

// 5G Solutions Pages

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>"
        <ErrorBoundary>""
          <Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>
            <Routes>"
              {/* Main Pages */}""
              <Route path="/" element={<HomePage />} />""
              <Route path="/about" element={<AboutPage />} />""
              <Route path="/contact" element={<ContactPage />} />""
              <Route path="/services" element={<ServicesPage />} />""
              <Route path="/pricing" element={<PricingPage />} />""
              <Route path="/case-studies" element={<CaseStudiesPage />} />""
              <Route path="/blog" element={<BlogPage />} />""
              <Route path="/team" element={<TeamPage />} />""
              <Route path="/careers" element={<CareersPage />} />""
              <Route path="/privacy" element={<PrivacyPage />} />""
              <Route path="/terms" element={<TermsPage />} />""
              <Route path="/cookies" element={<CookiesPage />} />
              "
              {/* Catch all route */}""
              <Route path="*" element={""
                <div className="min-h-screen flex items-center justify-center bg-slate-900">""
                  <div className="text-center">""
                    <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>""
                    <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>""
                    <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <PerformanceMonitor />
        <AccessibilityEnhancer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
"
export default App;""
