import { Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import HomePage from "./app/pages/HomePage";
import AboutPage from "./app/pages/AboutPage";
import ServicesPage from "./app/pages/ServicesPage";
import ContactPage from "./app/pages/ContactPage";

// Import components
import Navigation from "./app/components/Navigation";
import Sidebar from "./app/components/Sidebar";
import Footer from "./app/components/Footer";
import GlobalErrorBoundary from "./app/components/GlobalErrorBoundary";
import ErrorBoundary from "./app/components/ErrorBoundary";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import LoadingFallback from "./app/components/LoadingFallback";

// Import additional pages
import PricingPage from "./app/pages/PricingPage";
import CaseStudiesPage from "./app/pages/CaseStudiesPage";
import BlogPage from "./app/pages/BlogPage";
import TeamPage from "./app/pages/TeamPage";
import CareersPage from "./app/pages/CareersPage";
import PrivacyPage from "./app/pages/PrivacyPage";
import TermsPage from "./app/pages/TermsPage";
import CookiesPage from "./app/pages/CookiesPage";
import AIServicesPage from "./app/pages/AIServicesPage";
import AISolutionsPage from "./app/pages/AISolutionsPage";
import ITServicesPage from "./app/pages/ITServicesPage";
import CloudInfrastructurePage from "./app/pages/CloudInfrastructurePage";
import DigitalTransformationPage from "./app/pages/DigitalTransformationPage";
import FiveGSolutionsPage from "./app/pages/FiveGSolutionsPage";
import MicroSAASSolutionsPage from "./app/pages/MicroSAASSolutionsPage";
import AIContentGeneratorPage from "./app/pages/AIContentGeneratorPage";
import DataAnalyticsPage from "./app/pages/DataAnalyticsPage";
import WebDevelopmentPage from "./app/pages/WebDevelopmentPage";
import MobileDevelopmentPage from "./app/pages/MobileDevelopmentPage";
import DatabaseManagementPage from "./app/pages/DatabaseManagementPage";
import NetworkInfrastructurePage from "./app/pages/NetworkInfrastructurePage";
import PartnershipsPage from "./app/pages/PartnershipsPage";
import HelpPage from "./app/pages/HelpPage";
import APIDocsPage from "./app/pages/APIDocsPage";

function App() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreload = document.createElement("link");
      fontPreload.rel = "preload";
      fontPreload.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
      fontPreload.as = "style";
      document.head.appendChild(fontPreload);
    };

    preloadCriticalResources();
  }, []);

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Sidebar />

            <main className="flex-1">
              <ErrorBoundary>
                <PerformanceMonitor />
                <AccessibilityEnhancer />

                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    {/* Main Pages */}
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

                    {/* AI Services */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/ai-solutions" element={<AISolutionsPage />} />

                    {/* IT Services */}
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route
                      path="/cloud-infrastructure"
                      element={<CloudInfrastructurePage />}
                    />
                    <Route
                      path="/digital-transformation"
                      element={<DigitalTransformationPage />}
                    />

                    {/* 5G Solutions */}
                    <Route
                      path="/5g-solutions"
                      element={<FiveGSolutionsPage />}
                    />

                    {/* Micro SaaS Solutions */}
                    <Route
                      path="/micro-saas-solutions"
                      element={<MicroSAASSolutionsPage />}
                    />
                    <Route
                      path="/ai-content-generator"
                      element={<AIContentGeneratorPage />}
                    />

                    {/* Service-specific Pages */}
                    <Route
                      path="/data-analytics"
                      element={<DataAnalyticsPage />}
                    />
                    <Route
                      path="/web-development"
                      element={<WebDevelopmentPage />}
                    />
                    <Route
                      path="/mobile-development"
                      element={<MobileDevelopmentPage />}
                    />
                    <Route
                      path="/database-management"
                      element={<DatabaseManagementPage />}
                    />
                    <Route
                      path="/network-infrastructure"
                      element={<NetworkInfrastructurePage />}
                    />
                    <Route
                      path="/partnerships"
                      element={<PartnershipsPage />}
                    />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/api-docs" element={<APIDocsPage />} />

                    {/* Catch all route */}
                    <Route
                      path="*"
                      element={
                        <div className="min-h-screen flex items-center justify-center">
                          <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                              404
                            </h1>
                            <p className="text-gray-600 mb-8">Page not found</p>
                            <a
                              href="/"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              Go back home
                            </a>
                          </div>
                        </div>
                      }
                    />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>

            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
