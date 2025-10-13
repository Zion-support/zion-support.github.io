import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
// import LoadingSpinner from "./components/LoadingSpinner"; // Removed unused import
import AdvancedErrorBoundary from "./components/AdvancedErrorBoundary";
import PerformanceMonitor from "./components/PerformanceMonitor";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MobileNavigation from "./components/MobileNavigation";
import ImprovedNavigation from "./components/ImprovedNavigation";
import ImprovedFooter from "./components/ImprovedFooter";
import ImprovedSidebar from "./components/ImprovedSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <AdvancedErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <AnalyticsProvider>
            <EnhancedPerformanceMonitor showInProduction={false} />
            <PerformanceMonitor showInProduction={false} />
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
    </AdvancedErrorBoundary>
  );
};

export default Layout;
