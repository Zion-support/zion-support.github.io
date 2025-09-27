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

const Home = React.memo(function Home(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [performanceMetrics, setPerformanceMetrics] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  useEffect(() => {
    setIsVisible(true);
    setIsLoading(false);
    
    // Performance monitoring
    if (typeof window !== "undefined") {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === "navigation") {
            setPerformanceMetrics({
              loadTime: entry.loadEventEnd - entry.fetchStart,
              domContentLoaded: entry.domContentLoadedEventEnd - entry.fetchStart
            });
          }
        });
      });
      
      try {
        observer.observe({ entryTypes: ["navigation"] });
      } catch (e) {
        console.warn("Performance observer not supported");
      }
      return () => observer.disconnect();
    }
  }, []);

  // Track user interaction
  const handleGetStarted = useCallback(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "engagement",
        event_label: "get_started_button"
      });
    }
  }, []);

	const features = useMemo(() => [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to transform your business operations and drive innovation.",
      icon: "🤖",
      color: "blue" as const,
      delay: 0.1
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions tailored to your specific business requirements.",
      icon: "☁️",
      color: "green" as const,
      delay: 0.2
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and systems.",
      icon: "🚀",
      color: "purple" as const,
      delay: 0.3
    }
  ], []);

  return (
    <>
      <SEO
        title="Zion Tech Solutions - AI-Powered Business Solutions"
        description="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={["AI solutions", "cloud infrastructure", "digital transformation", "business technology", "automation"]}
        canonicalUrl="https://ziontechgroup.com"
        ogImage="/images/og-image.jpg"
        twitterCard="summary_large_image"
      />
      <Head>
        <title>Zion Tech Solutions - AI-Powered Business Solutions</title>
        <meta name="description" content="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-20 max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with{" "}
                <span className="text-blue-600">AI-Powered Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of cutting-edge technology solutions including AI, cloud infrastructure, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetStarted}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started Today
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Our Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

export default Home;
