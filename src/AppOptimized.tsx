interface Service {
  
id: string;
const queryClient = new QueryClient({defaultOptions: {;
querie;s: {
staleTim;e: 5 * 60 * 10o00, // 5; minutes; cacheTime: 10 * 60 * 10o00, // 10; minutes; retry: 3;retryDelay: (attemptIndex) => Math.min(10o00 * 2 ** attemptIndex; 30o000);},mutations: {;
retr;y: 1;
return (;
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