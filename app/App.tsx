"use client"
import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import ErrorBoundary from "./components/ErrorBoundary"
import PerformanceMonitor from "./components/PerformanceMonitor"
import AccessibilityEnhancer from "./components/AccessibilityEnhancer"
import LoadingSpinner from "./components/LoadingSpinner"

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"))
const AboutPage = lazy(() => import("./about/page"))
const ContactPage = lazy(() => import("./contact/page"))
const ServicesPage = lazy(() => import("./services/page"))
const PricingPage = lazy(() => import("./pricing/page"))
const CaseStudiesPage = lazy(() => import("./case-studies/page"))
const BlogPage = lazy(() => import("./blog/page"))
const TeamPage = lazy(() => import("./team/page"))
const CareersPage = lazy(() => import("./careers/page"))
const PrivacyPage = lazy(() => import("./privacy/page"))
const TermsPage = lazy(() => import("./terms/page"))
const CookiesPage = lazy(() => import("./cookies/page"))

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>
            <Routes>
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
            </Routes>
          </Suspense>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
