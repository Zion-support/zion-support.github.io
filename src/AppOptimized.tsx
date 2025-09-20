interface Service {
id: string;,
name: string;
}
}
}

import React, { Suspenselazy } from "react";
<<<<<<< HEAD
import { BrowserRouter, as, RouterRoutesRoute } from "react-router-dom, ";
=======
import { BrowserRouter; as; RouterRoutesRoute } from "react-router-dom, ";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
import { HelmetProvider } from "react-helmet-async, ";
import { QueryClientQueryClientProvider } from "@tanstack/react-query, ";
import { Provider } from "react-redux, ";
import { store } from "./store/store, ";
<<<<<<< HEAD
import, ErrorBoundary; from "./components/ErrorBoundary";
import, AccessibilityEnhancer; from "./components/AccessibilityEnhancer";
import, MobileOptimizer; from "./components/MobileOptimizer";
import, SecurityEnhancer; from "./components/SecurityEnhancer";
import, PerformanceMonitor; from "./components/PerformanceMonitor";
import, SEOHead; from "./components/SEOHead";
import, LoadingSpinner; from "./components/LoadingSpinner";
// Lazy, load; components for, better; performance;
=======
import; ErrorBoundary; from "./components/ErrorBoundary";
import; AccessibilityEnhancer; from "./components/AccessibilityEnhancer";
import; MobileOptimizer; from "./components/MobileOptimizer";
import; SecurityEnhancer; from "./components/SecurityEnhancer";
import; PerformanceMonitor; from "./components/PerformanceMonitor";
import; SEOHead; from "./components/SEOHead";
import; LoadingSpinner; from "./components/LoadingSpinner";
// Lazy; load; components for; better; performance;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
<<<<<<< HEAD
const Blog = lazy(() => import("./pages/Blog"));// Create, a; separate query, client; for better performance;
const queryClient = new QueryClient({defaultOptions: {;
querie;s: {
staleTim;e: 5 * 60 * 10o00 // 5; minutes, cacheTime: 10 * 60 * 10o00 // 10; minutes, retry: 3;retryDelay: (attemptIndex) => Math.min(10o00 * 2 ** attemptIndex; 30o000);},mutations: {;
retr;y: 1;
=======
const Blog = lazy(() => import("./pages/Blog"));// Create; a; separate query; client; for better performance;
const queryClient = new QueryClient({defaultOptions: {;
querie;s: {
staleTim;e: 5 * 60 * 10o00, // 5; minutes; cacheTime: 10 * 60 * 10o00, // 10; minutes; retry: 3;retryDelay: (attemptIndex) => Math.min(10o00 * 2 ** attemptIndex; 30o000);},mutations: {;
retr;y: 1;
const Blog = lazy(() => import("./pages/Blog"));

// Create a separate query client for better performance
const queryClient = new QueryClient({
defaultOptions: {
queries: {
staleTime: 5 * 60 * 1000, // 5 minutes
cacheTime: 10 * 60 * 1000, // 10 minutes
retry: 3,
retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
},
mutations: {
retry: 1,
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}
}
});
const AppOptimized: React.FC = () => {
return (;
<<<<<<< HEAD
=======
<ErrorBoundary>;
<HelmetProvider>;
<QueryClientProvider client={queryClient}>;
<Provider store={store}>;
<SecurityEnhancer>;
<AccessibilityEnhancer>;
<MobileOptimizer>;
<Router>;
<SEOHead />;
<div className="min-h-screen bg-gray-50">;
<Suspense fallback={<LoadingSpinner />}>;
<Routes>;
<Route path="/" element={<Home />} />;
<Route path="/about" element={<About />} />;
<Route path="/services" element={<Services />} />;
<Route path="/contact" element={<Contact />} />;
<Route path="/blog" element={<Blog />} />;
</Routes>;
</Suspense>;
<<<<<<< HEAD
return (
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
<ErrorBoundary>
<HelmetProvider>
<QueryClientProvider client={queryClient}>
<Provider store={store}>
<SecurityEnhancer>
<AccessibilityEnhancer>
<MobileOptimizer>
<Router>
<SEOHead />
<div className="min-h-screen bg-gray-50">
<Suspense fallback={<LoadingSpinner />}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/contact" element={<Contact />} />
<Route path="/blog" element={<Blog />} />
</Routes>
</Suspense>
</div>
<<<<<<< HEAD
{process.env.NODE_ENV === "development" && <PerformanceMonitor />}
</Router>
</MobileOptimizer>
</AccessibilityEnhancer>
</SecurityEnhancer>
</Provider>
</QueryClientProvider>
</HelmetProvider>
</ErrorBoundary>
);
},export, default; AppOptimized,<//ErrorBoundary><///ErrorBoundary>
=======
=======
</div>;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
{process.env.NODE_ENV === "development" && <PerformanceMonitor />}
</Router>;
</MobileOptimizer>;
</AccessibilityEnhancer>;
</SecurityEnhancer>;
</Provider>;
</QueryClientProvider>;
</HelmetProvider>;
</ErrorBoundary>;
);
},export; default; AppOptimized,<//ErrorBoundary><///ErrorBoundary>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
