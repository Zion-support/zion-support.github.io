import React, { lazy, useEffect, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import { setupGlobalErrorHandling } from './components/ErrorHandling';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceWrapper from './components/PerformanceWrapper';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedLoadingSpinner from './components/EnhancedLoadingSpinner';
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
import { CommunityProvider } from './context/CommunityContext';
import './App.css';

// Service worker registration
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((_registration) => {
          // // console.log('SW registered: ', _registration);
        })
        .catch((_registrationError) => {
          // // console.log('SW registration failed: ', _registrationError);
        });
    });
  }
};

// Type definitions


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

// Lazy load pages for better performance with error boundaries and retry logic
const createLazyComponent = (importFn: () => Promise<unknown>, componentName: string) => 
  lazy(() => importFn().catch(() => ({ 
    default: () => (
      <div className="flex items-center justify-center min-h-[400px] p-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Failed to load {componentName}</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    ) 
  })));

const Home = createLazyComponent(() => import('./pages/Home'), 'Home');
const About = createLazyComponent(() => import('./pages/About'), 'About');
const Services = createLazyComponent(() => import('./pages/Services'), 'Services');
const Contact = createLazyComponent(() => import('./pages/Contact'), 'Contact');
const Pricing = createLazyComponent(() => import('./pages/Pricing'), 'Pricing');
const NotFound = createLazyComponent(() => import('./pages/NotFound'), 'NotFound');

// Additional pages from comprehensive improvements
const AIMatcherPage = createLazyComponent(() => import('./pages/AIMatcher'), 'AI Matcher');
const TalentDirectory = createLazyComponent(() => import('./pages/TalentDirectory'), 'Talent Directory');
const TalentsPage = createLazyComponent(() => import('./pages/TalentsPage'), 'Talents');
const ServicesPage = createLazyComponent(() => import('./pages/ServicesPage'), 'Services');
const EquipmentPage = createLazyComponent(() => import('./pages/EquipmentPage'), 'Equipment');
const EquipmentDetail = createLazyComponent(() => import('./pages/EquipmentDetail'), 'Equipment Detail');
const Analytics = createLazyComponent(() => import('./pages/Analytics'), 'Analytics');
const MobileLaunchPage = createLazyComponent(() => import('./pages/MobileLaunchPage'), 'Mobile Launch');
const Categories = createLazyComponent(() => import('./pages/Categories'), 'Categories');
const Blog = createLazyComponent(() => import('./pages/Blog'), 'Blog');
const PartnersPage = createLazyComponent(() => import('./pages/Partners'), 'Partners');
const Login = createLazyComponent(() => import('./pages/Login'), 'Login');
const Signup = createLazyComponent(() => import('./pages/Signup'), 'Signup');
const ITOnsiteServicesPage = createLazyComponent(() => import('./pages/ITOnsiteServicesPage'), 'IT Onsite Services');
const ZionHireAI = createLazyComponent(() => import('./pages/ZionHireAI'), 'Zion Hire AI');
const RequestQuotePage = createLazyComponent(() => import('./pages/RequestQuote'), 'Request Quote');
const ExpandedServicesPage = createLazyComponent(() => import('./pages/ExpandedServicesPage'), 'Expanded Services');
const ServiceComparisonPage = createLazyComponent(() => import('./pages/ServiceComparisonPage'), 'Service Comparison');
const ServiceCalculatorPage = createLazyComponent(() => import('./pages/ServiceCalculatorPage'), 'Service Calculator');
const AllServicesOverviewPage = createLazyComponent(() => import('./pages/AllServicesOverviewPage'), 'All Services');
const ServiceAnalyticsDashboard = createLazyComponent(() => import('./pages/ServiceAnalyticsDashboard'), 'Service Analytics');
const ServiceMarketplace = createLazyComponent(() => import('./pages/ServiceMarketplace'), 'Service Marketplace');

// Service Pages - Lazy loaded for better performance
const AIServices = createLazyComponent(() => import('./pages/AIServices'), 'AI Services');
const ITServices = createLazyComponent(() => import('./pages/ITServices'), 'IT Services');
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'), 'Micro SaaS');
const Cybersecurity = createLazyComponent(() => import('./pages/Cybersecurity'), 'Cybersecurity');
const CloudMigration = createLazyComponent(() => import('./pages/CloudMigration'), 'Cloud Migration');
const MobileDevelopment = createLazyComponent(() => import('./pages/MobileDevelopment'), 'Mobile Development');

// Additional Pages - Lazy loaded for better performance
const FAQ = createLazyComponent(() => import('./pages/FAQ'), 'FAQ');
const Privacy = createLazyComponent(() => import('./pages/Privacy'), 'Privacy');
const Terms = createLazyComponent(() => import('./pages/Terms'), 'Terms');
const Support = createLazyComponent(() => import('./pages/Support'), 'Support');

// Missing components that are referenced in routes
const AllCategoriesPage = createLazyComponent(() => import('./pages/AllCategoriesPage'), 'All Categories');
const SimpleSignup = createLazyComponent(() => import('./pages/SimpleSignup'), 'Simple Signup');
const OAuthCallback = createLazyComponent(() => import('./pages/OAuthCallback'), 'OAuth Callback');
const MoreTalentsPage = createLazyComponent(() => import('./pages/MoreTalentsPage'), 'More Talents');
const AdditionalTalentsPage = createLazyComponent(() => import('./pages/AdditionalTalentsPage'), 'Additional Talents');
const NewProductsPage = createLazyComponent(() => import('./pages/NewProductsPage'), 'New Products');
const OpenAppRedirect = createLazyComponent(() => import('./pages/OpenAppRedirect'), 'Open App Redirect');
const CommunityPage = createLazyComponent(() => import('./pages/CommunityPage'), 'Community');
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'), 'Sitemap');
const Help = createLazyComponent(() => import('./pages/Help'), 'Help');
const FavoritesPage = createLazyComponent(() => import('./pages/Favorites'), 'Favorites');
const WishlistPage = createLazyComponent(() => import('./pages/Wishlist'), 'Wishlist');
const CartPage = createLazyComponent(() => import('./pages/Cart'), 'Cart');
const Wallet = createLazyComponent(() => import('./pages/Wallet'), 'Wallet');
const Profile = createLazyComponent(() => import('./pages/Profile'), 'Profile');
const RecommendationsPage = createLazyComponent(() => import('./pages/RecommendationsPage'), 'Recommendations');
const Checkout = createLazyComponent(() => import('./pages/Checkout'), 'Checkout');
const ForgotPassword = createLazyComponent(() => import('./pages/ForgotPassword'), 'Forgot Password');
const ResetPassword = createLazyComponent(() => import('./pages/ResetPassword'), 'Reset Password');
const BlogPost = createLazyComponent(() => import('./pages/BlogPost'), 'Blog Post');

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
                            <Route path="/register" element={<Signup />} />
                            <Route path="/signup" element={<SimpleSignup />} />
                            <Route path="/oauth" element={<OAuthCallback />} />
                            <Route path="/talent" element={<TalentDirectory />} />
                            <Route path="/talents" element={<TalentsPage />} />
                            <Route path="/more-talents" element={<MoreTalentsPage />} />
                            <Route path="/additional-talents" element={<AdditionalTalentsPage />} />
                            <Route path="/services-page" element={<ServicesPage />} />
                            <Route path="/expanded-services" element={<ExpandedServicesPage />} />
                            <Route path="/all-services" element={<AllServicesOverviewPage />} />
                            <Route path="/service-comparison" element={<ServiceComparisonPage />} />
                            <Route path="/service-calculator" element={<ServiceCalculatorPage />} />
                            <Route path="/service-analytics" element={<ServiceAnalyticsDashboard />} />
                            <Route path="/service-marketplace" element={<ServiceMarketplace />} />
                            <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
                            <Route path="/it-onsite-services/:country" element={<ITOnsiteServicesPage />} />
                            <Route path="/categories" element={<Categories />} />
                            <Route path="/categories/all" element={<AllCategoriesPage />} />
                            <Route path="/equipment" element={<EquipmentPage />} />
                            <Route path="/equipment/:id" element={<EquipmentDetail />} />
                            <Route path="/new-products" element={<NewProductsPage />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/mobile-launch" element={<MobileLaunchPage />} />
                            <Route path="/open-app" element={<OpenAppRedirect />} />
                            <Route path="/community" element={
                              <CommunityProvider>
                                <CommunityPage />
                              </CommunityProvider>
                            } />
                            <Route path="/partners" element={<PartnersPage />} />
                            <Route path="/sitemap" element={<Sitemap />} />
                            <Route path="/help" element={<Help />} />
                            <Route path="/zion-hire-ai" element={<ZionHireAI />} />
                            <Route path="/hire-ai" element={<ZionHireAI />} />
                            <Route path="/request-quote" element={<RequestQuotePage />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
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