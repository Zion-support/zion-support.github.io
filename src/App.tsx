import React, { Suspense, lazy, useEffect, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import { ErrorBoundary, setupGlobalErrorHandling, FallbackProps } from './components/ErrorHandling';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceWrapper from './components/PerformanceWrapper';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import EnhancedLoadingSpinner from './components/EnhancedLoadingSpinner';
import { SEO, HomePageSEO } from './components/SEO';
import EnhancedSEO from './components/EnhancedSEO';
import AccessibilityEnhancements from './components/AccessibilityEnhancements';
import PerformanceOptimizations from './components/PerformanceOptimizations';
import { NotificationToast } from './components/NotificationToast';
import PerformanceMonitor from './components/PerformanceMonitor';
import OptimizedSuspense from './components/OptimizedSuspense';
import PerformanceDashboard from './components/PerformanceDashboard';
import EnhancedNavigation from './components/EnhancedNavigation';
import { bundleOptimizer } from './utils/bundleOptimizer';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css';

// Service worker registration
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Type definitions
interface FallbackProps {
  resetErrorBoundary: () => void;
}

function RootErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="p-4 text-center space-y-2">
      <p>Something went wrong</p>
      <button onClick={resetErrorBoundary} className="underline">
        Retry
      </button>
    </div>
  );
}


// Create QueryClient instance with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Lazy load pages for better performance with error boundaries
const Home = lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Error loading Home page</div> })));
const About = lazy(() => import('./pages/About').catch(() => ({ default: () => <div>Error loading About page</div> })));
const Services = lazy(() => import('./pages/Services').catch(() => ({ default: () => <div>Error loading Services page</div> })));
const Contact = lazy(() => import('./pages/Contact').catch(() => ({ default: () => <div>Error loading Contact page</div> })));
const Pricing = lazy(() => import('./pages/Pricing').catch(() => ({ default: () => <div>Error loading Pricing page</div> })));
const NotFound = lazy(() => import('./pages/NotFound').catch(() => ({ default: () => <div>Error loading NotFound page</div> })));

// Additional pages from comprehensive improvements
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = lazy(() => import('./pages/EquipmentDetail'));
const Analytics = lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = lazy(() => import('./pages/MobileLaunchPage'));
// const CommunityPage = lazy(() => import('./pages/CommunityPage')); // Page not found
const Categories = lazy(() => import('./pages/Categories'));
const Blog = lazy(() => import('./pages/Blog'));
// const BlogPost = lazy(() => import('./pages/BlogPost')); // Page not found
const PartnersPage = lazy(() => import('./pages/Partners'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = lazy(() => import('./pages/ITOnsiteServicesPage'));
// const OpenAppRedirect = lazy(() => import('./pages/OpenAppRedirect')); // Page not found
const ContactPage = lazy(() => import('./pages/Contact'));
const ZionHireAI = lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuote'));
const ExpandedServicesPage = lazy(() => import('./pages/ExpandedServicesPage'));
const ServiceComparisonPage = lazy(() => import('./pages/ServiceComparisonPage'));
const ServiceCalculatorPage = lazy(() => import('./pages/ServiceCalculatorPage'));
const AllServicesOverviewPage = lazy(() => import('./pages/AllServicesOverviewPage'));
const ServiceAnalyticsDashboard = lazy(() => import('./pages/ServiceAnalyticsDashboard'));
const ServiceMarketplace = lazy(() => import('./pages/ServiceMarketplace'));

// Service Pages - Lazy loaded for better performance
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const CloudMigration = lazy(() => import('./pages/CloudMigration'));
const MobileDevelopment = lazy(() => import('./pages/MobileDevelopment'));

// Additional Pages - Lazy loaded for better performance
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Support = lazy(() => import('./pages/Support'));

// Additional missing components
const AllCategoriesPage = lazy(() => import('./pages/AllCategoriesPage'));
const SimpleSignup = lazy(() => import('./pages/SimpleSignup'));
const OAuthCallback = lazy(() => import('./pages/OAuthCallback'));
const MoreTalentsPage = lazy(() => import('./pages/MoreTalentsPage'));
const AdditionalTalentsPage = lazy(() => import('./pages/AdditionalTalentsPage'));
const NewProductsPage = lazy(() => import('./pages/NewProductsPage'));
const OpenAppRedirect = lazy(() => import('./pages/OpenAppRedirect'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const Help = lazy(() => import('./pages/Help'));
const FavoritesPage = lazy(() => import('./pages/Favorites'));
const WishlistPage = lazy(() => import('./pages/Wishlist'));
const CartPage = lazy(() => import('./pages/Cart'));
const Wallet = lazy(() => import('./pages/Wallet'));
const Profile = lazy(() => import('./pages/Profile'));
const RecommendationsPage = lazy(() => import('./pages/SavedTalentsPage'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Community Provider
const CommunityProvider = lazy(() => import('./context/CommunityContext').then(module => ({ default: module.CommunityProvider })));

const App = memo(() => {
  // Setup global error handling
  useEffect(() => {
    setupGlobalErrorHandling();
    // Initialize bundle optimization
    bundleOptimizer.preloadCriticalResources();
    // Register service worker
    registerServiceWorker();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <ThemeProvider>
            <AccessibilityEnhancer>
              <AccessibilityEnhancements>
                <Router>
                  <ScrollToTop />
                  <PerformanceWrapper>
                    <PerformanceOptimizer enableMonitoring={process.env.NODE_ENV === 'development'} />
                    
                    {/* Enhanced SEO Meta Tags */}
                    <EnhancedSEO />
                    
                    {/* Enhanced Navigation */}
                    <EnhancedNavigation />
                    
                    <div className="min-h-screen bg-background text-foreground pt-16" id="main-content">
                      <PerformanceOptimizations>
                        <OptimizedSuspense fallback={<EnhancedLoadingSpinner size="lg" text="Loading application..." />}>
                          <Routes>
                            {/* Main Routes */}
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/pricing" element={<Pricing />} />
                            
                            {/* Comprehensive Service Routes */}
                            <Route path="/match" element={<AIMatcherPage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/talent" element={<TalentDirectory />} />
                            <Route path="/talents" element={<TalentsPage />} />
                            <Route path="/services-page" element={<ServicesPage />} />
                            <Route path="/expanded-services" element={<ExpandedServicesPage />} />
                            <Route path="/all-services" element={<AllServicesOverviewPage />} />
                            <Route path="/service-comparison" element={<ServiceComparisonPage />} />
                            <Route path="/service-calculator" element={<ServiceCalculatorPage />} />
                            <Route path="/service-analytics" element={<ServiceAnalyticsDashboard />} />
                            <Route path="/service-marketplace" element={<ServiceMarketplace />} />
                            <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
                            <Route path="/categories" element={<Categories />} />
                            <Route path="/equipment" element={<EquipmentPage />} />
                            <Route path="/equipment/:id" element={<EquipmentDetail />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/mobile-launch" element={<MobileLaunchPage />} />
                            <Route path="/open-app" element={<OpenAppRedirect />} />
                            <Route path="/community" element={
                              <CommunityProvider>
                                <CommunityPage />
                              </CommunityProvider>
                            } />
                            <Route path="/partners" element={<PartnersPage />} />
                            <Route path="/zion-hire-ai" element={<ZionHireAI />} />
                            <Route path="/hire-ai" element={<ZionHireAI />} />
                            <Route path="/request-quote" element={<RequestQuotePage />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            
                            {/* Additional routes */}
                            <Route path="/categories/all" element={<AllCategoriesPage />} />
                            <Route path="/signup" element={<SimpleSignup />} />
                            <Route path="/oauth" element={<OAuthCallback />} />
                            <Route path="/more-talents" element={<MoreTalentsPage />} />
                            <Route path="/additional-talents" element={<AdditionalTalentsPage />} />
                            <Route path="/new-products" element={<NewProductsPage />} />
                            <Route path="/sitemap" element={<Sitemap />} />
                            <Route path="/help" element={<Help />} />
                            <Route path="/favorites" element={<FavoritesPage />} />
                            <Route path="/wishlist" element={<WishlistPage />} />
                            <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
                            <Route path="/wallet" element={<PrivateRoute><Wallet /></PrivateRoute>} />
                            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                            <Route path="/recommendations" element={<PrivateRoute><RecommendationsPage /></PrivateRoute>} />
                            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
                            <Route path="/forgot-password" element={<ForgotPassword />} />
                            <Route path="/reset-password/:token" element={<ResetPassword />} />
                            
                            {/* Service Routes */}
                            <Route path="/services/ai-services" element={<AIServices />} />
                            <Route path="/services/it-services" element={<ITServices />} />
                            <Route path="/services/micro-saas" element={<MicroSaaS />} />
                            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                            <Route path="/services/cloud-solutions" element={<CloudMigration />} />
                            <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                            
                            {/* Additional Routes */}
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/privacy" element={<Privacy />} />
                            <Route path="/terms" element={<Terms />} />
                            <Route path="/support" element={<Support />} />
                            
                            {/* 404 Route */}
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </OptimizedSuspense>
                      </PerformanceOptimizations>
                    </div>
                  </PerformanceWrapper>
                </Router>
                <NotificationToast />
                <PerformanceMonitor enableLogging={process.env.NODE_ENV === 'development'} />
                <PerformanceDashboard />
              </AccessibilityEnhancements>
            </AccessibilityEnhancer>
          </ThemeProvider>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </QueryClientProvider>
  );
});

App.displayName = 'App';

export default App;