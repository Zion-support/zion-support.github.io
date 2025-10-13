<<<<<<< HEAD
// import LoadingSpinner from "./components/LoadingSpinner"; // Removed unused import
interface LayoutProps {
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <BrowserRouter>
          <AnalyticsProvider>
            <EnhancedPerformanceMonitor showInProduction={false} />
            <Helmet>
              <title>Zion Tech Group - Advanced AI and IT Solutions</title>
              <meta
                name="description"
                content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses."
              />
              <meta
                name="keywords"
                content="AI solutions, IT services, digital transformation, business automation, technology consulting"
              />
            </Helmet>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
              <ImprovedNavigation />
              <main>{children}</main>
              <ImprovedFooter />
              {/* Sidebar */}
              <ImprovedSidebar 
                isOpen={isSidebarOpen} 
                onClose={() => setIsSidebarOpen(false)} 
              />
            </div>
          </AnalyticsProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
=======
import React from 'react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Layout
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/main
