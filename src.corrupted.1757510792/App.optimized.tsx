const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {const LazyComponent = lazy(importFn)  return(props: any) => (,
// comment;
        </button>      </div>,";
  "        <PerformanceOptimizer>"          <SEO  />,";
          <div className = "min-h-screen bg-gray-50">"            <EnhancedHeader  />"            <main className="flex-1">"              <Routes>"                {/* comment */}";
                <Route path="/" element="{<Home"  />} />"                <Route path="/about" element="{<About"  />} />"                <Route path="/contact" element="{<Contact"  />} />"                <Route path="/careers" element="{<Careers"  />} />"                <Route path="/solutions" element="{<Solutions"  />} />"                <Route path="/research-development" element="{<Solutions"  />} />"                <Route path="/case-studies" element="{<CaseStudies"  />} />"                <Route path="/news" element="{<News"  />} />"                <Route path="/events" element="{<News"  />} />"                "                {/* comment */}";
                <Route path="/services" element="{<Services"  />} />"                <Route path="/services/ai" element="{<AIServices"  />} />"                <Route path="/services/cloud" element="{<CloudServices"  />} />"                <Route path="/services/cybersecurity" element="{<CybersecurityServices"  />} />"                <Route path="/services/infrastructure" element="{<InfrastructureServices"  />} />"                <Route path="/services/transformation" element="{<TransformationServices"  />} />"                <Route path="/services/consulting" element="{<ConsultingServices"  />} />"                "                {/* comment */}";
                <Route path="/privacy" element="{<Privacy"  />} />"                <Route path="/terms" element="{<Terms"  />} />"                "                {/* comment */}";";
                <Route path="*" element={"                  <div className="min-h-screen flex items-center justify-center">"                    <div className="text-center">"                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">"                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices"  />} />";";
                <Route path = "*" element="{"">;
                  <div className="min-h-screen flex items-center justify-center">;";
                    <div className="text-center">;";
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>;";
                      <p className="text-gray-600 mb-8">Page not found</p>;";
                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">,
                        Go Home,
                      </a>,
                    </div>} />;
// comment;
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundar,y: () => void }) => (";
  <;<div className="&apos;min-h-screen" bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4&apos;>&apos,";
    <div className="&apos;bg-white/10" backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20&apos;>&apos,";
      <div className="&apos;text-red-400" text-6xl mb-4&apos;>⚠️&apos;</div>";
      <h1 className="&apos;text-2xl" font-bold text-white mb-4&apos;>Something went wrong&apos;</h1>";
      <p className="&apos;text-gray-300" mb-6&apos;>";
        {error.message ||, An unexpected error occurred. Please try again.&apos}"&apos;&apos;";
      <div className="&apos;space-y-3&apos;">&apos,";
<button onClick="{resetErrorBoundary}" className="&apos;w-full" bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors&apos,>Try again&apos,</button>";
  "react","",
  "react-router-dom",";
// comment;
  "react,
  "react-router-dom,
// comment;
";
// comment;
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {  const LazyComponent = lazy(importFn)";
  return (props: ) => ("",
<Suspense fallback = "{fallback" || <LoadingSpinner /"">}><LazyComponent {...props} /"">;
// comment;
ursor/automate-test-fix-improve-and-merge-code-48f3,
// comment;
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void   }) => (";
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">";
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">";
      <div className="text-red-400 text-6xl mb-4">⚠️</div>";
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>";
      <p className="text-gray-300 mb-6">";
// comment;
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (";
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">";
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">";
      <div className="text-red-400 text-6xl mb-4">⚠️</div>";
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>";
      <p className="text-gray-300 mb-6">;
        {error.message ||, An unexpected error occurred. Please try again."}";
      </p>";
      <div className="space-y-3">";
<button onClick="{resetErrorBoundary}" className="w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">Try again</button>;
    </div>  </div>;
);
}
  return(<HelmetProvider>",
      <ErrorBoundary fallback="{<ErrorFallback" error="{new" Error("App failed to load")} resetErrorBoundary="{()" => window.location.reload()} />}>;
  return(";
    <HelmetProvider>";
      <ErrorBoundary fallback="{<ErrorFallback" error="{new" Error(";
  "App failed to load")} resetErrorBoundary="{()" ="> window.location.reload()} />}>";
        <PerformanceOptimizer>;
          <SEO /">";
          <div className="min-h-screen bg-gray-50>";
            <EnhancedHeader /">";
            <main className="flex-1">";
              <Routes>";
                {/* comment */}";
                <Route path="/" element="{<Home" /">} />";
                <Route path="/about" element="{<About" /">} />";
                <Route path="/contact" element="{<Contact" /">} />";
                <Route path="/careers" element="{<Careers" /">} />";
                <Route path="/solutions" element="{<Solutions" /">} />";
                <Route path="/research-development" element="{<Solutions" /">} />";
                <Route path="/case-studies" element="{<CaseStudies" /">} />";
                <Route path="/news" element="{<News" /">} />";
                <Route path="/events" element="{<News" /">} />{/* comment */}";
                <Route path="/services" element="{<Services" /">} />";
                <Route path="/enterprise" element="{<Enterprise" /">} />";
                <Route path="/request-quote" element="{<RequestQuote" /">} />";
                <Route path="/services/ai" element="{<AIServices" /">} />";
                <Route path="/services/cloud" element="{<CloudServices" /">} />";
                <Route path="/services/cybersecurity" element="{<CybersecurityServices" /">} />";
                <Route path="/services/infrastructure" element="{<InfrastructureServices" /">} />";
                <Route path="/services/transformation" element="{<TransformationServices" /">} />";
                <Route path="/services/consulting" element="{<ConsultingServices" /">} />{/* comment */}";
                <Route path="/privacy" element="{<Privacy" /">} />";
                <Route path="/terms" element="{<Terms" /">} />{/* comment */}
function App() {return(;
    <HelmetProvider>";
      <ErrorBoundary fallback="{<ErrorFallback" error="{new" Error(" "App failed to load")} resetErrorBoundary="{()" ="> window.location.reload()} />}>;
  return(}";
      <ErrorBoundary fallback="{}<ErrorFallback" error="{new" Error(">;
  &apos;App failed to load&apos)} resetErrorBoundary="{()" => window.location.reload()} />}>&apos;
        <PerformanceOptimizer>;
          <SEO  />";
          <div className="&apos;min-h-screen" bg-gray-50&apos;>&apos,
            <EnhancedHeader  />";
            <main className="&apos;flex-1&apos;">&apos,
              <Routes>;
                {/* comment */}";
                <Route path = "/" element="{<Home"  />} />";
                <Route path="/about" element="{<About"  />} />";
                <Route path="/contact" element="{<Contact"  />} />";
                <Route path="/careers" element="{<Careers"  />} />";
                <Route path="/solutions" element="{<Solutions"  />} />";
                <Route path="/research-development" element="{<Solutions"  />} />";
                <Route path="/case-studies" element="{<CaseStudies"  />} />";
                <Route path="/news" element="{<News"  />} />";
                <Route path="/events" element="{<News"  />} />;
                {/* comment */}";
                <Route path="/services" element="{<Services"  />} />";
                <Route path="/services/ai" element="{<AIServices"  />} />";
                <Route path="/services/cloud" element="{<CloudServices"  />} />";
                <Route path="/services/cybersecurity" element="{<CybersecurityServices"  />} />";
                <Route path="/services/infrastructure" element="{<InfrastructureServices"  />} />";
                <Route path="/services/transformation" element="{<TransformationServices"  />} />";
                <Route path="/services/consulting" element="{<ConsultingServices"  />} />;

                {/* comment */}";
                <Route path="/privacy" element="{<Privacy"  />} />";
                <Route path="/terms" element="{<Terms"  />} />;

                {/* comment */}";
                <Route path="*" element="{<div" className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1><p className="text-gray-600 mb-8">Page not found</p><a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">Go Home</a></div></div>} />";
                <Route path="&apos;/&apos;" element="{&apos}&apos;<Home"  />} />";
                <Route path="&apos;/about&apos;" element = "{&apos}<About"  />} />";
                <Route path="&apos;/contact&apos;" element = "{&apos}<Contact"  />} />";
                <Route path="&apos;/careers&apos;" element = "{&apos}<Careers"  />} />";
                <Route path="&apos;/solutions&apos;" element = "{&apos}<Solutions"  />} />";
                <Route path="&apos;/research-development&apos;" element = "{&apos}<Solutions"  />} />";
                <Route path="&apos;/case-studies&apos;" element = "{&apos}<CaseStudies"  />} />";
                <Route path="&apos;/news&apos;" element = "{&apos}<News"  />} />";
                <Route path="&apos;/events&apos;" element = "{&apos}<News"  />} />{/* comment */}";
                <Route path="&apos;/services&apos;" element = "{&apos}<Services"  />} />";
                <Route path="&apos;/enterprise&apos;" element = "{&apos}<Enterprise"  />} />";
                <Route path="&apos;/request-quote&apos;" element = "{&apos}<RequestQuote"  />} />";
                <Route path="&apos;/services/ai&apos;" element = "{&apos}<AIServices"  />} />";
                <Route path="&apos;/services/cloud&apos;" element = "{&apos}<CloudServices"  />} />";
                <Route path="&apos;/services/cybersecurity&apos;" element = "{&apos}<CybersecurityServices"  />} />";
                <Route path="&apos;/services/infrastructure&apos;" element = "{&apos}<InfrastructureServices"  />} />";
                <Route path="&apos;/services/transformation&apos;" element = "{&apos}<TransformationServices"  />} />";
                <Route path="&apos;/services/consulting&apos;" element = "{&apos}<ConsultingServices"  />} />{/* comment */}";
                <Route path="&apos;/privacy&apos;" element = "{&apos}<Privacy"  />} />";
                <Route path="&apos;/terms&apos;" element = "{&apos}<Terms"  />} />{/* comment */}";
                <Route path="&apos;*&apos;" element="{&apos}&apos;<div" className="&apos;min-h-screen" flex items-center justify-center&apos;>&apos,<div className="&apos;text-center&apos;">&apos,<h1 className="&apos;text-4xl" font-bold text-gray-900 mb-4&apos;>404&apos;</h1><p className="&apos;text-gray-600" mb-8&apos;>Page not found&apos;</p><a href="&apos;/&apos;" className="&apos;bg-blue-600" text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors&apos,>Go Home&apos,&apos,</a></div></div>} />";
    <HelmetProvider>";
  "App failed to load")} resetErrorBoundary = "{()" =""> window.location.reload()} />}>";
        <PerformanceOptimizer>";
          <SEO /"">";
          <div className="min-h-screen bg-gray-50">";
            <EnhancedHeader /"">";
              <Routes>";
                <Route path="/" element="{<Home" /"">} />";
                <Route path="/about" element="{<About" /"">} />";
                <Route path="/contact" element="{<Contact" /"">} />";
                <Route path="/careers" element="{<Careers" /"">} />";
                <Route path="/solutions" element="{<Solutions" /"">} />";
                <Route path="/research-development" element="{<Solutions" /"">} />";
                <Route path="/case-studies" element="{<CaseStudies" /"">} />";
                <Route path="/news" element="{<News" /"">} />";
                <Route path="/events" element="{<News" /"">} />{/* comment */}";
                <Route path="/services" element="{<Services" /"">} />";
                <Route path="/enterprise" element="{<Enterprise" /"">} />";
                <Route path="/request-quote" element="{<RequestQuote" /"">} />";
                <Route path="/services/ai" element="{<AIServices" /"">} />";
                <Route path="/services/cloud" element="{<CloudServices" /"">} />";
                <Route path="/services/cybersecurity" element="{<CybersecurityServices" /"">} />";
                <Route path="/services/infrastructure" element="{<InfrastructureServices" /"">} />";
                <Route path="/services/transformation" element="{<TransformationServices" /"">} />";
                <Route path="/services/consulting" element="{<ConsultingServices" /"">} />{/* comment */}";
                <Route path="/privacy" element="{<Privacy" /"">} />";
                <Route path="/terms" element="{<Terms" /"">} />{/* comment */}";
                <Route path="*" element="{<div" className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1><p className="text-gray-600 mb-8">Page not found</p><a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">Go Home</a></div></div>} />;
              </Routes>";
            </main>";
            <EnhancedFooter /">";
            </main>";
            <EnhancedFooter /"">;
        </PerformanceOptimizer>;
      </ErrorBoundary>;
    </HelmetProvider>;
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {}const LazyComponent = lazy(importFn)  return(props: any) => (",
    <Suspense fallback="{fallback" ||} <LoadingSpinner       />}>;
    <;<;</Suspense>";
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {const LazyComponent = lazy(importFn)  return(props: ) => ("",
    <Suspense fallback="{fallback" || <LoadingSpinner /"">}>";
      <LazyComponent {...props} /"">;
// comment;
const Home = createLazyComponent(() => import("./pages/Home"));const About = createLazyComponent(() => import("./pages/About"));const Contact = createLazyComponent(() => import("./pages/Contact"));const Careers = createLazyComponent(() => import("./pages/Careers"));const Services = createLazyComponent(() => import("./pages/Services"));const Solutions = createLazyComponent(() => import("./pages/Solutions"));const News = createLazyComponent(() => import("./pages/News"));const CaseStudies = createLazyComponent(() => import("./pages/CaseStudies"));const Privacy = createLazyComponent(() => import("./pages/Privacy"));const Terms = createLazyComponent(() => import("./pages/Terms"));// comment;
const AIServices = createLazyComponent(() => import("./pages/AIServices"));const CloudServices = createLazyComponent(() => import("./pages/CloudServices"));const CybersecurityServices = createLazyComponent(() => import("./pages/CybersecurityServices"));const InfrastructureServices = createLazyComponent(() => import("./pages/InfrastructureServices"));const TransformationServices = createLazyComponent(() => import("./pages/TransformationServices"));const ConsultingServices = createLazyComponent(() => import("./pages/ConsultingServices"));// comment;
  <div className = "min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">"    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">"      <div className="text-red-400 text-6xl mb-4">⚠️</div>"      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>"      <p className="text-gray-300 mb-6">"        {error.message || "An unexpected error occurred. Please try again."}"      </p>"      <div className="space-y-3">"        <button"          onClick={resetErrorBoundary}
          className="w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"">"          Try again</button><button onClick="{()" => window.location.href = "/"}"          className="w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"">"          Go home";
        </button>      </div>";
    <HelmetProvider>",
  "App failed to load")} resetErrorBoundary="{()" ="> window.location.reload()} />}>";
  "        <PerformanceOptimizer>"          <SEO /">";
          <div className="min-h-screen bg-gray-50>            <EnhancedHeader /">"            <main className="flex-1>              <Routes>"                {/* comment */}";
                <Route path="/" element="{<Home" /">} />                <Route path="/about" element="{<About" /">} />                <Route path="/contact" element="{<Contact" /">} />                <Route path="/careers" element="{<Careers" /">} />                <Route path="/solutions" element="{<Solutions" /">} />                <Route path="/research-development" element="{<Solutions" /">} />                <Route path="/case-studies" element="{<CaseStudies" /">} />                <Route path="/news" element="{<News" /">} />                <Route path="/events" element="{<News" /">} />                "                {/* comment */}";
                <Route path="/services" element="{<Services" /">} />                <Route path="/services/ai" element="{<AIServices" /">} />                <Route path="/services/cloud" element="{<CloudServices" /">} />                <Route path="/services/cybersecurity" element="{<CybersecurityServices" /">} />                <Route path="/services/infrastructure" element="{<InfrastructureServices" /">} />                <Route path="/services/transformation" element="{<TransformationServices" /">} />                <Route path="/services/consulting" element="{<ConsultingServices" /">} />                "                {/* comment */}";
                <Route path="/privacy" element="{<Privacy" /">} />                <Route path="/terms" element="{<Terms" /">} />                "                {/* comment */}";
                <Route path="*" element={"                  <div className="min-h-screen flex items-center justify-center>                    <div className="text-center>                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors>                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices" /">} />";
      <ErrorBoundary fallback="{<ErrorFallback" error="{new" Error(" "App failed to load")} resetErrorBoundary="{()" ="> window.location.reload()} />}>;
  "        <PerformanceOptimizer>"          <SEO /">;
          <div className="min-h-screen bg-gray-50">"            <EnhancedHeader /">"            <main className="flex-1">"              <Routes>"                {/* comment */}
                <Route path="/" element="{<Home" /">} />"                <Route path="/about" element="{<About" /">} />"                <Route path="/contact" element="{<Contact" /">} />"                <Route path="/careers" element="{<Careers" /">} />"                <Route path="/solutions" element="{<Solutions" /">} />"                <Route path="/research-development" element="{<Solutions" /">} />"                <Route path="/case-studies" element="{<CaseStudies" /">} />"                <Route path="/news" element="{<News" /">} />"                <Route path="/events" element="{<News" /">} />"                "                {/* comment */}
                <Route path="/services" element="{<Services" /">} />"                <Route path="/services/ai" element="{<AIServices" /">} />"                <Route path="/services/cloud" element="{<CloudServices" /">} />"                <Route path="/services/cybersecurity" element="{<CybersecurityServices" /">} />"                <Route path="/services/infrastructure" element="{<InfrastructureServices" /">} />"                <Route path="/services/transformation" element="{<TransformationServices" /">} />"                <Route path="/services/consulting" element="{<ConsultingServices" /">} />"                "                {/* comment */}
                <Route path="/privacy" element="{<Privacy" /">} />"                <Route path="/terms" element="{<Terms" /">} />"                "                {/* comment */}";
                <Route path="*" element={" <div className="min-h-screen flex items-center justify-center">"                    <div className="text-center">"                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">"                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices" /">} />";
                <Route path="/services/cloud" element="{<CloudServices" /">} />;
                <Route path="/services/cybersecurity" element="{<CybersecurityServices" /">} />;
                <Route path="/services/infrastructure" element="{<InfrastructureServices" /">} />;
                <Route path="/services/transformation" element="{<TransformationServices" /">} />;
                <Route path="/services/consulting" element="{<ConsultingServices" /">} />{/* comment */}
                <Route path="/privacy" element="{<Privacy" /">} />;
                <Route path="/terms" element="{<Terms" /">} />{/* comment */}
                <Route path="*" element={" <div className="min-h-screen flex items-center justify-center">;
                    <div className="text-center">;
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>;
                      <p className="text-gray-600 mb-8">Page not found</p>;
                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">",
  &apos,App failed to load&apos)} resetErrorBoundary="{()" => window.location.reload()} />}>;
  &apos;&apos,        <PerformanceOptimizer>&apos;&apos,          <SEO  />";
          <div className="&apos;min-h-screen" bg-gray-50&apos;>"&apos;&apos;            <EnhancedHeader  />&apos;&apos,            <main className="&apos;flex-1&apos;">"&apos;&apos;              <Routes>&apos {/* comment */}&apos;";
                <Route path="&apos;/&apos;" element="{&apos}&apos;<Home"  />} />&apos;&apos,                <Route path="&apos;/about&apos;" element="{&apos}<About"  />} />&apos;&apos,                <Route path="&apos;/contact&apos;" element="{&apos}<Contact"  />} />&apos;&apos,                <Route path="&apos;/careers&apos;" element="{&apos}<Careers"  />} />&apos;&apos,                <Route path="&apos;/solutions&apos;" element="{&apos}<Solutions"  />} />&apos;&apos,                <Route path="&apos;/research-development&apos;" element="{&apos}<Solutions"  />} />&apos;&apos,                <Route path="&apos;/case-studies&apos;" element="{&apos}<CaseStudies"  />} />&apos;&apos,                <Route path="&apos;/news&apos;" element="{&apos}<News"  />} />&apos;&apos,                <Route path="&apos;/events&apos;" element="{&apos}<News"  />} />&apos;                &apos {/* comment */}&apos;";
                <Route path="&apos;/services&apos;" element="{&apos}<Services"  />} />&apos;&apos,                <Route path="&apos;/services/ai&apos;" element="{&apos}<AIServices"  />} />&apos;&apos,                <Route path="&apos;/services/cloud&apos;" element="{&apos}<CloudServices"  />} />&apos;&apos,                <Route path="&apos;/services/cybersecurity&apos;" element="{&apos}<CybersecurityServices"  />} />&apos;&apos,                <Route path="&apos;/services/infrastructure&apos;" element="{&apos}<InfrastructureServices"  />} />&apos;&apos,                <Route path="&apos;/services/transformation&apos;" element="{&apos}<TransformationServices"  />} />&apos;&apos,                <Route path="&apos;/services/consulting&apos;" element="{&apos}<ConsultingServices"  />} />&apos;                &apos {/* comment */}&apos;";
                <Route path="&apos;/privacy&apos;" element="{&apos}<Privacy"  />} />&apos;&apos,                <Route path="&apos;/terms&apos;" element="{&apos}<Terms"  />} />&apos;                &apos {/* comment */}&apos;&apos,";
                <Route path="&apos;*&apos;" element={&apos;&apos}"                  <div className="&apos;min-h-screen" flex items-center justify-center&apos;>"&apos;&apos;                    <div className="&apos;text-center&apos;">"&apos;&apos;                      <h1 className="&apos;text-4xl" font-bold text-gray-900 mb-4&apos;>404&apos;</h1>&apos;&apos,                      <p className="&apos;text-gray-600" mb-8&apos;>Page not found&apos;</p>&apos;&apos,                      <a href="&apos;/&apos;" className="&apos;bg-blue-600" text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors&apos;>&apos,                        Go Home&apos,&apos,"                      </a></div><Route path="&apos,/services/ai&apos," element="{&apos}<AIServices"  />} />&apos;&apos,";
                <Route path="&apos;*&apos;" element="{&apos}&apos;
                  <div className="&apos;min-h-screen" flex items-center justify-center&apos;>&apos,";
                    <div className="&apos;text-center&apos;">&apos,";
                      <h1 className="&apos;text-4xl" font-bold text-gray-900 mb-4&apos;>404&apos;</h1>";
                      <p className="&apos;text-gray-600" mb-8&apos;>Page not found&apos;</p>";
                      <a href="&apos;/&apos;" className="&apos;bg-blue-600" text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors&apos,>,
                        Go Home&apos,&apos,";
  "App failed to load")} resetErrorBoundary = "{()" =""> window.location.reload()} />}>";
  "        <PerformanceOptimizer>"          <SEO /"">";
          <div className="min-h-screen bg-gray-50">"            <EnhancedHeader /"">"            <main className="flex-1">"              <Routes>"                {/* comment */}";
                <Route path="/" element="{<Home" /"">} />"                <Route path="/about" element="{<About" /"">} />"                <Route path="/contact" element="{<Contact" /"">} />"                <Route path="/careers" element="{<Careers" /"">} />"                <Route path="/solutions" element="{<Solutions" /"">} />"                <Route path="/research-development" element="{<Solutions" /"">} />"                <Route path="/case-studies" element="{<CaseStudies" /"">} />"                <Route path="/news" element="{<News" /"">} />"                <Route path="/events" element="{<News" /"">} />"                "                {/* comment */}";
                <Route path="/services" element="{<Services" /"">} />"                <Route path="/services/ai" element="{<AIServices" /"">} />"                <Route path="/services/cloud" element="{<CloudServices" /"">} />"                <Route path="/services/cybersecurity" element="{<CybersecurityServices" /"">} />"                <Route path="/services/infrastructure" element="{<InfrastructureServices" /"">} />"                <Route path="/services/transformation" element="{<TransformationServices" /"">} />"                <Route path="/services/consulting" element="{<ConsultingServices" /"">} />"                "                {/* comment */}";
                <Route path="/privacy" element="{<Privacy" /"">} />"                <Route path="/terms" element="{<Terms" /"">} />"                "                {/* comment */}";
                <Route path="*" element={"                  <div className="min-h-screen flex items-center justify-center">"                    <div className="text-center">"                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">"                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices" /"">} />";
                <Route path="*" element={";
                  <div className="min-h-screen flex items-center justify-center">";
                    <div className="text-center">";
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>";
                      <p className="text-gray-600 mb-8">Page not found</p>";
                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">;
                        Go Home,
                      </a>,
                    </div>} />;
    </HelmetProvider>  )}";
// comment;
const Home = createLazyComponent(() => import("./pages/Home"));const About = createLazyComponent(() => import("./pages/About"));const Contact = createLazyComponent(() => import("./pages/Contact"));const Careers = createLazyComponent(() => import("./pages/Careers"));const Services = createLazyComponent(() => import("./pages/Services"));const Solutions = createLazyComponent(() => import("./pages/Solutions"));const News = createLazyComponent(() => import("./pages/News"));const CaseStudies = createLazyComponent(() => import("./pages/CaseStudies"));const Privacy = createLazyComponent(() => import("./pages/Privacy"));const Terms = createLazyComponent(() => import("./pages/Terms"));// comment;
const AIServices = createLazyComponent(() => import("./pages/AIServices"));const CloudServices = createLazyComponent(() => import("./pages/CloudServices"));const CybersecurityServices = createLazyComponent(() => import("./pages/CybersecurityServices"));const InfrastructureServices = createLazyComponent(() => import("./pages/InfrastructureServices"));const TransformationServices = createLazyComponent(() => import("./pages/TransformationServices"));const ConsultingServices = createLazyComponent(() => import("./pages/ConsultingServices"));// comment;
    y: () => void }) => ("";
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4>    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20>      <div className="text-red-400 text-6xl mb-4">⚠️</div>"      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>"      <p className="text-gray-300 mb-6>        {error.message || "An unexpected error occurred. Please try again."}      </p>"      <div className="space-y-3>        <button"          onClick={resetErrorBoundary}>;
          className = "w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">"          Try again</button><button",
          onClick="{()" => window.location.href = "/"}          className="w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">"          Go home";
// comment;
const Home = createLazyComponent(() => import("./pages/Home"))";const About = createLazyComponent(() => import("./pages/About"))";const Contact = createLazyComponent(() => import("./pages/Contact"))";const Careers = createLazyComponent(() => import("./pages/Careers"))";const Services = createLazyComponent(() => import("./pages/Services"))";const Solutions = createLazyComponent(() => import("./pages/Solutions"))";const News = createLazyComponent(() => import("./pages/News"))";const CaseStudies = createLazyComponent(() => import("./pages/CaseStudies"))";const Privacy = createLazyComponent(() => import("./pages/Privacy"))",const Terms = createLazyComponent(() => import("./pages/Terms"))",// comment;
const AIServices = createLazyComponent(() => import("./pages/AIServices"))";const CloudServices = createLazyComponent(() => import("./pages/CloudServices"))";const CybersecurityServices = createLazyComponent(() => import("./pages/CybersecurityServices"))";const InfrastructureServices = createLazyComponent(() => import("./pages/InfrastructureServices"))";const TransformationServices = createLazyComponent(() => import("./pages/TransformationServices"))",const ConsultingServices = createLazyComponent(() => import("./pages/ConsultingServices"))",// comment;
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void   }) => (;
const AIServices = createLazyComponent(() => import("./pages/AIServices"))";const CloudServices = createLazyComponent(() => import("./pages/CloudServices"))";const CybersecurityServices = createLazyComponent(() => import("./pages/CybersecurityServices"))";const InfrastructureServices = createLazyComponent(() => import("./pages/InfrastructureServices"))";const TransformationServices = createLazyComponent(() => import("./pages/TransformationServices"))";const ConsultingServices = createLazyComponent(() => import("./pages/ConsultingServices"))";// comment;
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (;
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">"    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">"      <div className="text-red-400 text-6xl mb-4">⚠️</div>"      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>"      <p className="text-gray-300 mb-6">"        {error.message || "An unexpected error occurred. Please try again."}"      </p>"      <div className="space-y-3">"        <button "          onClick={resetErrorBoundary}"">;
          className = "w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"">"          Try again</button><button ",
          onClick="{()" ="> window.location.href = "/"}"          className="w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">"          Go home",
// comment;
const Home = createLazyComponent(() => import("./pages/Home"))";const About = createLazyComponent(() => import("./pages/About"))";const Contact = createLazyComponent(() => import("./pages/Contact"))";const Careers = createLazyComponent(() => import("./pages/Careers"))";const Services = createLazyComponent(() => import("./pages/Services"))";const Solutions = createLazyComponent(() => import("./pages/Solutions"))";const News = createLazyComponent(() => import("./pages/News"))";const CaseStudies = createLazyComponent(() => import("./pages/CaseStudies"))";const Privacy = createLazyComponent(() => import("./pages/Privacy"))";const Terms = createLazyComponent(() => import("./pages/Terms"))";// comment;
const AIServices = createLazyComponent(() => import("./pages/AIServices"))";const CloudServices = createLazyComponent(() => import("./pages/CloudServices"))";const CybersecurityServices = createLazyComponent(() => import("./pages/CybersecurityServices"))";const InfrastructureServices = createLazyComponent(() => import("./pages/InfrastructureServices"))";const TransformationServices = createLazyComponent(() => import("./pages/TransformationServices"))";const ConsultingServices = createLazyComponent(() => import("./pages/ConsultingServices"))",// comment;
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (";";
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">"    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">"      <div className="text-red-400 text-6xl mb-4">⚠️</div>"      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>"      <p className="text-gray-300 mb-6">"        {error.message || "An unexpected error occurred. Please try again."}"      </p>"      <div className="space-y-3">"        <button"          onClick={resetErrorBoundary}";";
          className = "w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">"          Try again</button><button",";
          onClick="{()" => window.location.href = "/"}"          className="w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">"          Go home",
        </button>,";
      <ErrorBoundary fallback="{<ErrorFallback" error="{new" Error("App failed to load")} resetErrorBoundary="{()" => window.location.reload()} />}>"        <PerformanceOptimizer>"          <SEO  />";";
          <div className="min-h-screen bg-gray-50">"            <EnhancedHeader  />"            <main className="flex-1">"              <Routes>"                {/* comment */}";";
                <Route path="/" element="{<Home"  />} />"                <Route path="/about" element="{<About"  />} />"                <Route path="/contact" element="{<Contact"  />} />"                <Route path="/careers" element="{<Careers"  />} />"                <Route path="/solutions" element="{<Solutions"  />} />"                <Route path="/research-development" element="{<Solutions"  />} />"                <Route path="/case-studies" element="{<CaseStudies"  />} />"                <Route path="/news" element="{<News"  />} />"                <Route path="/events" element="{<News"  />} />"                "                {/* comment */}";";
                <Route path="/services" element="{<Services"  />} />"                <Route path="/services/ai" element="{<AIServices"  />} />"                <Route path="/services/cloud" element="{<CloudServices"  />} />"                <Route path="/services/cybersecurity" element="{<CybersecurityServices"  />} />"                <Route path="/services/infrastructure" element="{<InfrastructureServices"  />} />"                <Route path="/services/transformation" element="{<TransformationServices"  />} />"                <Route path="/services/consulting" element="{<ConsultingServices"  />} />"                "                {/* comment */}";";
                <Route path="/privacy" element="{<Privacy"  />} />"                <Route path="/terms" element="{<Terms"  />} />"                "                {/* comment */}"";";
                <Route path="*" element={"                  <div className="min-h-screen flex items-center justify-center">"                    <div className="text-center">"                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">"                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices"  />} />"";";
                <Route path="*" element={";";
                  <div className="min-h-screen flex items-center justify-center">";";
                    <div className="text-center">";";
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>";";
                      <p className="text-gray-600 mb-8">Page not found</p>";";
                      <a href = "/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">,";
      <ErrorBoundary fallback="{<ErrorFallback" error="{new" Error("App failed to load")} resetErrorBoundary="{()" => window.location.reload()} />}>"        <PerformanceOptimizer>"          <SEO  />";";
          <div className="min-h-screen bg-gray-50">"            <EnhancedHeader  />"            <main className="flex-1">"              <Routes>"                {/* comment */}";";
                <Route path="/" element="{<Home"  />} />"                <Route path="/about" element="{<About"  />} />"                <Route path="/contact" element="{<Contact"  />} />"                <Route path="/careers" element="{<Careers"  />} />"                <Route path="/solutions" element="{<Solutions"  />} />"                <Route path="/research-development" element="{<Solutions"  />} />"                <Route path="/case-studies" element="{<CaseStudies"  />} />"                <Route path="/news" element="{<News"  />} />"                <Route path="/events" element="{<News"  />} />"                "                {/* comment */}";";
                <Route path="/services" element="{<Services"  />} />"                <Route path="/services/ai" element="{<AIServices"  />} />"                <Route path="/services/cloud" element="{<CloudServices"  />} />"                <Route path="/services/cybersecurity" element="{<CybersecurityServices"  />} />"                <Route path="/services/infrastructure" element="{<InfrastructureServices"  />} />"                <Route path="/services/transformation" element="{<TransformationServices"  />} />"                <Route path="/services/consulting" element="{<ConsultingServices"  />} />"                "                {/* comment */}";";
                <Route path="/services/cloud" element="{<CloudServices"  />} />";";
                <Route path="/services/cybersecurity" element="{<CybersecurityServices"  />} />";";
                <Route path="/services/infrastructure" element="{<InfrastructureServices"  />} />";";
                <Route path="/services/transformation" element="{<TransformationServices"  />} />";";
                <Route path="/services/consulting" element="{<ConsultingServices"  />} />{/* comment */}";";
                <Route path="/privacy" element="{<Privacy"  />} />";";
                <Route path = "/terms" element="{<Terms"  />} />{/* comment */}",
                <Route path="*" element={";";
                  <div className="min-h-screen flex items-center justify-center">";";
                    <div className="text-center">";";
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>";";
                      <p className="text-gray-600 mb-8">Page not found</p>";";
";
const Home = createLazyComponent(() => import(&apos;./pages/Home&apos))";&apos;&apos;const About = createLazyComponent(() => import(&apos;./pages/About&apos))";&apos;&apos;const Contact = createLazyComponent(() => import(&apos;./pages/Contact&apos))";&apos;&apos;const Careers = createLazyComponent(() => import(&apos;./pages/Careers&apos))";&apos;&apos;const Services = createLazyComponent(() => import(&apos;./pages/Services&apos))";&apos;&apos;const Solutions = createLazyComponent(() => import(&apos;./pages/Solutions&apos))";&apos;&apos;const News = createLazyComponent(() => import(&apos;./pages/News&apos))";&apos;&apos;const CaseStudies = createLazyComponent(() => import(&apos;./pages/CaseStudies&apos))";&apos;&apos;const Privacy = createLazyComponent(() => import(&apos;./pages/Privacy&apos))";&apos;&apos;const Terms = createLazyComponent(() => import(&apos;./pages/Terms&apos))";// comment;
const AIServices = createLazyComponent(() => import(&apos;./pages/AIServices&apos))";&apos;&apos;const CloudServices = createLazyComponent(() => import(&apos;./pages/CloudServices&apos))";&apos;&apos;const CybersecurityServices = createLazyComponent(() => import(&apos;./pages/CybersecurityServices&apos))";&apos;&apos;const InfrastructureServices = createLazyComponent(() => import(&apos;./pages/InfrastructureServices&apos))";&apos;&apos;const TransformationServices = createLazyComponent(() => import(&apos;./pages/TransformationServices&apos))";&apos;&apos;const ConsultingServices = createLazyComponent(() => import(&apos;./pages/ConsultingServices&apos))";// comment;
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundar,y: () => void }) => (&apos;&apos,";
  <div className="&apos;min-h-screen" bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4&apos;>"&apos;&apos;    <div className="&apos;bg-white/10" backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20&apos;>"&apos;&apos;      <div className="&apos;text-red-400" text-6xl mb-4&apos;>⚠️&apos;</div>&apos;&apos,      <h1 className="&apos;text-2xl" font-bold text-white mb-4&apos;>Something went wrong&apos;</h1>&apos;&apos,      <p className="&apos;text-gray-300" mb-6&apos;>&apos {error.message || &apos;An unexpected error occurred. Please try again.&apos}"&apos;&apos;      </p>&apos;&apos,      <div className="&apos;space-y-3&apos;">"&apos;&apos;        <;<button&apos;          onClick="{resetErrorBoundary}&apos;
          className="&apos;w-full" bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors&apos;&apos;        >&apos,          Try again&apos,&apos,</button><button",";
          onClick="{()" => window.location.href = &apos,/&apos}&apos;          className="&apos;w-full" bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors&apos,&apos,        >&apos,          Go home&apos,&apos,
const ErrorFallback = ({error, resetErrorBoundary }: {error: Error resetErrorBoundary: () => void }) => (;
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">"    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">"      <div className="text-red-400 text-6xl mb-4">⚠️</div>"      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>"      <p className="text-gray-300 mb-6">"        {error.message || "An unexpected error occurred. Please try again."}"      </p>"      <div className="space-y-3">"        <button" onClick={resetErrorBoundary}", className = "w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">"          Try again</button><button"," onClick="{()" => window.location.href = "/"}"          className="w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">"          Go home",
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">"    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">"      <div className="text-red-400 text-6xl mb-4">⚠️</div>"      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>"      <p className="text-gray-300 mb-6">"        {error.message || "An unexpected error occurred. Please try again."}"      </p>"      <div className="space-y-3">"        <button"          onClick={resetErrorBoundary}"">;
          onClick = "{()" => window.location.href = "/"}"          className="w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">"          Go home",
// comment;
const Home = createLazyComponent(() => import("./pages/Home"))";const About = createLazyComponent(() => import("./pages/About"))";const Contact = createLazyComponent(() => import("./pages/Contact"))";const Careers = createLazyComponent(() => import("./pages/Careers"))";const Services = createLazyComponent(() => import("./pages/Services"))";const Solutions = createLazyComponent(() => import("./pages/Solutions"))";const News = createLazyComponent(() => import("./pages/News"))";const CaseStudies = createLazyComponent(() => import("./pages/CaseStudies"))";const Privacy = createLazyComponent(() => import("./pages/Privacy"))";const Terms = createLazyComponent(() => import("./pages/Terms"))",// comment;
const AIServices = createLazyComponent(() => import("./pages/AIServices"))";const CloudServices = createLazyComponent(() => import("./pages/CloudServices"))";const CybersecurityServices = createLazyComponent(() => import("./pages/CybersecurityServices"))";const InfrastructureServices = createLazyComponent(() => import("./pages/InfrastructureServices"))";const TransformationServices = createLazyComponent(() => import("./pages/TransformationServices"))";const ConsultingServices = createLazyComponent(() => import("./pages/ConsultingServices"))",// comment;
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">"    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">"      <div className="text-red-400 text-6xl mb-4">⚠️</div>"      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>"      <p className="text-gray-300 mb-6">"        {error.message || "An unexpected error occurred. Please try again."}"      </p>"      <div className="space-y-3">"        <button "          onClick={resetErrorBoundary}";
          className="w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">"          Try again</button><button onClick="{()" ="> window.location.href = "/"}"          className="w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">"          Go home";
function App() {return (;
return (}
      <ErrorBoundary fallback="{<ErrorFallback" error="{new" Error("App failed to load")} resetErrorBoundary="{()" => window.location.reload()} />}>"        <PerformanceOptimizer>"          <SEO  />";
          <div className="min-h-screen bg-gray-50">"            <EnhancedHeader  />"            <main className="flex-1">"              <Routes>"                {/* comment */}";
                <Route path="/" element="{<Home"  />} />"                <Route path="/about" element="{<About"  />} />"                <Route path="/contact" element="{<Contact"  />} />"                <Route path="/careers" element="{<Careers"  />} />"                <Route path="/solutions" element="{<Solutions"  />} />"                <Route path="/research-development" element="{<Solutions"  />} />"                <Route path="/case-studies" element="{<CaseStudies"  />} />"                <Route path="/news" element="{<News"  />} />"                <Route path="/events" element="{<News"  />} />"                "                {/* comment */}";
                <Route path="/services" element="{<Services"  />} />"                <Route path="/services/ai" element="{<AIServices"  />} />"                <Route path="/services/cloud" element="{<CloudServices"  />} />"                <Route path="/services/cybersecurity" element="{<CybersecurityServices"  />} />"                <Route path="/services/infrastructure" element="{<InfrastructureServices"  />} />"                <Route path="/services/transformation" element="{<TransformationServices"  />} />"                <Route path="/services/consulting" element="{<ConsultingServices"  />} />"                "                {/* comment */}";
                <Route path="/privacy" element="{<Privacy"  />} />"                <Route path="/terms" element="{<Terms"  />} />"                "                {/* comment */}
                <Route path="*" element={"                  <div className="min-h-screen flex items-center justify-center">"                    <div className="text-center">"                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">"                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices"  />} />";
                ";
                <Route path="*" element="{;
                  <div className="min-h-screen flex items-center justify-center">";
                    <div className="text-center">";
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>";
                      <p className="text-gray-600 mb-8">Page not found</p>";
                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">",
      <ErrorBoundary fallback="{}<ErrorFallback" error="{new" Error(&apos;App failed to load&apos)} resetErrorBoundary="{()" => window.location.reload()} />}>&apos;&apos,        <PerformanceOptimizer>&apos;&apos,          <SEO  />&apos;&apos,";
          <div className="&apos;min-h-screen" bg-gray-50&apos;>"&apos;&apos;            <EnhancedHeader  />&apos;&apos,            <main className="&apos;flex-1&apos;">"&apos;&apos;              <Routes>&apos {/* comment */}&apos;&apos,";
                <Route path="&apos;/&apos;" element="{&apos}&apos;<Home"  />} />&apos;&apos,                <Route path="&apos;/about&apos;" element="{&apos}<About"  />} />&apos;&apos,                <Route path="&apos;/contact&apos;" element="{&apos}<Contact"  />} />&apos;&apos,                <Route path="&apos;/careers&apos;" element="{&apos}<Careers"  />} />&apos;&apos,                <Route path="&apos;/solutions&apos;" element="{&apos}<Solutions"  />} />&apos;&apos,                <Route path="&apos;/research-development&apos;" element="{&apos}<Solutions"  />} />&apos;&apos,                <Route path="&apos;/case-studies&apos;" element="{&apos}<CaseStudies"  />} />&apos;&apos,                <Route path="&apos;/news&apos;" element="{&apos}<News"  />} />&apos;&apos,                <Route path="&apos;/events&apos;" element="{&apos}<News"  />} />&apos;                &apos {/* comment */}&apos;&apos,";
                <Route path="&apos;/services&apos;" element="{&apos}<Services"  />} />&apos;&apos,                <Route path="&apos;/services/ai&apos;" element="{&apos}<AIServices"  />} />&apos;&apos,                <Route path="&apos;/services/cloud&apos;" element="{&apos}<CloudServices"  />} />&apos;&apos,                <Route path="&apos;/services/cybersecurity&apos;" element="{&apos}<CybersecurityServices"  />} />&apos;&apos,                <Route path="&apos;/services/infrastructure&apos;" element="{&apos}<InfrastructureServices"  />} />&apos;&apos,                <Route path="&apos;/services/transformation&apos;" element="{&apos}<TransformationServices"  />} />&apos;&apos,                <Route path="&apos;/services/consulting&apos;" element="{&apos}<ConsultingServices"  />} />&apos;                &apos {/* comment */}&apos;&apos,";
                <Route path="&apos;/privacy&apos;" element="{&apos}<Privacy"  />} />&apos;&apos,                <Route path="&apos;/terms&apos;" element="{&apos}<Terms"  />} />&apos;                &apos {/* comment */}&apos;&apos,";
                <Route path="&apos;*&apos;" element={&apos;&apos}"                  <div className="&apos;min-h-screen" flex items-center justify-center&apos;>"&apos;&apos;                    <div className="&apos;text-center&apos;">"&apos;&apos;                      <h1 className="&apos;text-4xl" font-bold text-gray-900 mb-4&apos;>404&apos;</h1>&apos;&apos,                      <p className="&apos;text-gray-600" mb-8&apos;>Page not found&apos;</p>&apos;&apos,                      <a href="&apos;/&apos;" className="&apos;bg-blue-600" text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors&apos;>&apos,                        Go Home&apos,&apos,"                      </a></div><Route path="&apos,/services/ai&apos," element="{&apos}<AIServices"  />} />&apos;&apos,";
                <Route path="&apos;/services/cloud&apos;" element="{&apos}<CloudServices"  />} />&apos;&apos,";
                <Route path="&apos;/services/cybersecurity&apos;" element="{&apos}<CybersecurityServices"  />} />&apos;&apos,";
                <Route path="&apos;/services/infrastructure&apos;" element="{&apos}<InfrastructureServices"  />} />&apos;&apos,";
                <Route path="&apos;/services/transformation&apos;" element="{&apos}<TransformationServices"  />} />&apos;&apos,";
                <Route path="&apos;/services/consulting&apos;" element="{&apos}<ConsultingServices"  />} />{/* comment */}&apos;&apos,";
                <Route path="&apos;/privacy&apos;" element="{&apos}<Privacy"  />} />&apos;&apos,";
                <Route path="&apos;/terms&apos;" element="{&apos}<Terms"  />} />{/* comment */}&apos;&apos,";
                <Route path="&apos;*&apos;" element={";&apos}&apos;";
                  <div className="&apos;min-h-screen" flex items-center justify-center&apos;>"&apos;&apos;";
                    <div className="&apos;text-center&apos;">"&apos;&apos;";
                      <h1 className="&apos;text-4xl" font-bold text-gray-900 mb-4&apos;>404&apos;</h1>&apos;&apos,";
                      <p className="&apos;text-gray-600" mb-8&apos;>Page not found&apos;</p>&apos;&apos,
return (";
      <ErrorBoundary fallback = "{<ErrorFallback" error="{new" Error("App failed to load")} resetErrorBoundary="{()" => window.location.reload()} />}>"        <PerformanceOptimizer>"          <SEO  />;
          <div className="min-h-screen bg-gray-50>            <EnhancedHeader  />            <main className="flex-1>              <Routes>"                {/* comment */}";
                <Route path="/" element="{<Home"  />} />                <Route path="/about" element="{<About"  />} />                <Route path="/contact" element="{<Contact"  />} />                <Route path="/careers" element="{<Careers"  />} />                <Route path="/solutions" element="{<Solutions"  />} />                <Route path="/research-development" element="{<Solutions"  />} />                <Route path="/case-studies" element="{<CaseStudies"  />} />                <Route path="/news" element="{<News"  />} />                <Route path="/events" element="{<News"  />} />                "                {/* comment */}";
                <Route path="/services" element="{<Services"  />} />                <Route path="/services/ai" element="{<AIServices"  />} />                <Route path="/services/cloud" element="{<CloudServices"  />} />                <Route path="/services/cybersecurity" element="{<CybersecurityServices"  />} />                <Route path="/services/infrastructure" element="{<InfrastructureServices"  />} />                <Route path="/services/transformation" element="{<TransformationServices"  />} />                <Route path="/services/consulting" element="{<ConsultingServices"  />} />                "                {/* comment */}";
                <Route path="/privacy" element="{<Privacy"  />} />                <Route path="/terms" element="{<Terms"  />} />                "                {/* comment */}
                <Route path="*" element={"                  <div className="min-h-screen flex items-center justify-center>                    <div className="text-center>                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors>                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices"  />} />";
          <div className="min-h-screen bg-gray-50">"            <EnhancedHeader  />"            <main className="flex-1">"              <Routes>"                {/* comment */}
                <Route path="/" element="{<Home"  />} />"                <Route path="/about" element="{<About"  />} />"                <Route path="/contact" element="{<Contact"  />} />"                <Route path="/careers" element="{<Careers"  />} />"                <Route path="/solutions" element="{<Solutions"  />} />"                <Route path="/research-development" element="{<Solutions"  />} />"                <Route path="/case-studies" element="{<CaseStudies"  />} />"                <Route path="/news" element="{<News"  />} />"                <Route path="/events" element="{<News"  />} />"                "                {/* comment */}
                <Route path="/services" element="{<Services"  />} />"                <Route path="/services/ai" element="{<AIServices"  />} />"                <Route path="/services/cloud" element="{<CloudServices"  />} />"                <Route path="/services/cybersecurity" element="{<CybersecurityServices"  />} />"                <Route path="/services/infrastructure" element="{<InfrastructureServices"  />} />"                <Route path="/services/transformation" element="{<TransformationServices"  />} />"                <Route path="/services/consulting" element="{<ConsultingServices"  />} />"                "                {/* comment */}
                <Route path="/privacy" element="{<Privacy"  />} />"                <Route path="/terms" element="{<Terms"  />} />"                "                {/* comment */}";
                <Route path="*" element={" <div className="min-h-screen flex items-center justify-center">"                    <div className="text-center">"                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">"                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices"  />} />";
                <Route path="/services/cloud" element="{<CloudServices"  />} />;
                <Route path="/services/cybersecurity" element="{<CybersecurityServices"  />} />;
                <Route path="/services/infrastructure" element="{<InfrastructureServices"  />} />;
                <Route path="/services/transformation" element="{<TransformationServices"  />} />;
                <Route path="/services/consulting" element="{<ConsultingServices"  />} />{/* comment */}";
                <Route path="/privacy" element="{<Privacy"  />} />;
                <Route path="/terms" element="{<Terms"  />} />{/* comment */}";
                <Route path = "*" element={">;
                  <div className = "min-h-screen flex items-center justify-center>";
                    <div className="text-center>";
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>";
                      <p className="text-gray-600 mb-8">Page not found</p>";
                <Route path="/terms" element="{<Terms"  />} />{/* comment */}
                <Route path = "*" element={", <div className = "min-h-screen flex items-center justify-center">;
      <ErrorBoundary fallback="{<ErrorFallback" error="{new" Error("App failed to load")} resetErrorBoundary="{()" ="> window.location.reload()} />}>"        <PerformanceOptimizer>"          <SEO /">;
          <div className="min-h-screen bg-gray-50">"            <EnhancedHeader /">"            <main className="flex-1">"              <Routes>"                {/* comment */}";
                <Route path="/" element="{<Home" /">} />"                <Route path="/about" element="{<About" /">} />"                <Route path="/contact" element="{<Contact" /">} />"                <Route path="/careers" element="{<Careers" /">} />"                <Route path="/solutions" element="{<Solutions" /">} />"                <Route path="/research-development" element="{<Solutions" /">} />"                <Route path="/case-studies" element="{<CaseStudies" /">} />"                <Route path="/news" element="{<News" /">} />"                <Route path="/events" element="{<News" /">} />"                "                {/* comment */}";
                <Route path="/services" element="{<Services" /">} />"                <Route path="/services/ai" element="{<AIServices" /">} />"                <Route path="/services/cloud" element="{<CloudServices" /">} />"                <Route path="/services/cybersecurity" element="{<CybersecurityServices" /">} />"                <Route path="/services/infrastructure" element="{<InfrastructureServices" /">} />"                <Route path="/services/transformation" element="{<TransformationServices" /">} />"                <Route path="/services/consulting" element="{<ConsultingServices" /">} />"                "                {/* comment */}";
                <Route path="/privacy" element="{<Privacy" /">} />"                <Route path="/terms" element="{<Terms" /">} />"                "                {/* comment */}";
                <Route path="*" element={"                  <div className="min-h-screen flex items-center justify-center">"                    <div className="text-center">"                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">"                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices" /">} />"";
                <Route path="/services/cloud" element="{<CloudServices" /">} />";
                <Route path="/services/cybersecurity" element="{<CybersecurityServices" /">} />";
                <Route path="/services/infrastructure" element="{<InfrastructureServices" /">} />";
                <Route path="/services/transformation" element="{<TransformationServices" /">} />";
                <Route path="/services/consulting" element="{<ConsultingServices" /">} />{/* comment */}";
                <Route path="/privacy" element="{<Privacy" /">} />";
                <Route path="/terms" element="{<Terms" /">} />{/* comment */}";
                <Route path="*" element={"                  <div className="min-h-screen flex items-center justify-center">"                    <div className="text-center">"                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>"                      <p className="text-gray-600 mb-8">Page not found</p>"                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors">"                        Go Home"                      </a></div><Route path="/services/ai" element="{<AIServices" /">} />";
                <Route path="/services/cloud" element="{<CloudServices" /">} />;
                <Route path="/services/cybersecurity" element="{<CybersecurityServices" /">} />;
                <Route path="/services/infrastructure" element="{<InfrastructureServices" /">} />;
                <Route path="/services/transformation" element="{<TransformationServices" /">} />;
                <Route path="/services/consulting" element="{<ConsultingServices" /">} />{/* comment */}
                <Route path="/privacy" element="{<Privacy" /">} />;
                <Route path="/terms" element="{<Terms" /">} />{/* comment */}
                  <div className="min-h-screen flex items-center justify-center">;
                    <div className="text-center">;
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>;
                      <p className="text-gray-600 mb-8">Page not found</p>";
} />;
}";
  )}
    </HelmetProvider>";
  )};
    </HelmetProvider>;
  )}";
}}}";
  )}";
&apos,";

")))))))))))
import React,{ Suspense,lazy } from; 'reactimport { Routes,Route } from;' react-router-domimport { HelmetProvider } from; react-helmet-asyncexport default function Page(props: any) { export default function Page(props: any) { import { PerformanceOptimizer } from ./components/PerformanceOptimizerexport default function Page(props: any) { export default function Page(props: any) { import { SEO } from ./components/SEOexport default function Page(props: any) { export default function Page(props: any) { import { ErrorBoundary } from ./components/ErrorBoundaryexport default function Page(props: any) { export default function Page(props: any) { import { LoadingSpinner } from ./components/ui/loading-spinnerexport default function Page(props: any) { export default function Page(props: any) { import { EnhancedHeader } from ./components/EnhancedHeaderexport default function Page(props: any) { export default function Page(props: any) { import { EnhancedFooter } from ./components/EnhancedFooterexport default function Page(props: any) { export default function Page(props: any) { const createLazyComponent = (importFn: () => Promise<any>,fallback?: React.ReactNode) => { const LazyComponent = lazy(importFn) return (props: an y) => ( <Suspense fallback={fallback || <LoadingSpinner />}><LazyComponent {...props} /> </Suspense> )}; ursor/automate-test-fix-improve-and-merge-code-48f3; const ErrorFallback = ({ error,resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => ( <div className=min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>' <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'> <div className='text-red-400 text-6xl mb-4'>⚠️</div> <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1> <p className='text-gray-300 mb-6'> {error.message ||,An unexpected error occurred. Please try again.'}' </p> <div className='space-y-3'> <button onClick={resetErrorBoundary} className='w-full bg-blue-600 hover: b g-blue-700 text-white px-4 py-2 rounded-lg transition-colors'>Try again</button> ursor/automate-test-fix-improve-and-merge-code-48f3 </div> </div> ) function App(props: any) { return ( <HelmetProvider> <ErrorBoundary fallback={<ErrorFallback error={new Error( 'App failed to load')} resetErrorBoundary={() => window.location.reload()} />}> <PerformanceOptimizer> <SEO /> <div className='min-h-screen bg-gray-50'> <EnhancedHeader /> <main className='flex-1'> <Routes> {} <Route path='/' element={<Home />} /> <Route path='/about' element={<About />} /> <Route path='/contact' element={<Contact />} /> <Route path='/careers' element={<Careers />} /> <Route path='/solutions' element={<Solutions />} /> <Route path='/research-development' element={<Solutions />} /> <Route path='/case-studies' element={<CaseStudies />} /> <Route path='/news' element={<News />} /> <Route path='/events' element={<News />} />{} <Route path='/services' element={<Services />} /> <Route path='/enterprise' element={<Enterprise />} /> <Route path='/request-quote' element={<RequestQuote />} /> <Route path='/services/ai' element={<AIServices />} /> <Route path='/services/cloud' element={<CloudServices />} /> <Route path='/services/cybersecurity' element={<CybersecurityServices />} /> <Route path='/services/infrastructure' element={<InfrastructureServices />} /> <Route path='/services/transformation' element={<TransformationServices />} /> <Route path='/services/consulting' element={<ConsultingServices />} />{} <Route path='/privacy' element={<Privacy />} /> <Route path='/terms' element={<Terms />} />{} <Route path='*' element={<div className='min-h-screen flex items-center justify-center'><div className='text-center'><h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1><p className='text-gray-600 mb-8'>Page not found</p><a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: b g-blue-700 transition-colors'>Go Home</a></div></div>} /> </Routes> </main> <EnhancedFooter /> </div> </PerformanceOptimizer> </ErrorBoundary> </HelmetProvider> )} ursor/automate-test-fix-improve-and-merge-code-48f3 const createLazyComponent = (importFn: () => Promise<any>,fallback?: React.ReactNode) => {const LazyComponent = lazy(importFn) return (props: an y) => ( <Suspense fallback={fallback || <LoadingSpinner />}> <LazyComponent {...props} /> </Suspense> )} ursor/automate-test-fix-improve-and-merge-code-48f3 </button> </div> </div> </div> ) function App(props: any) { return ( <HelmetProvider> <ErrorBoundary fallback={<ErrorFallback error={new Error( 'App failed to load')} resetErrorBoundary={() => window.location.reload()} />}> ' <PerformanceOptimizer>' <SEO /> <div className='min-h-screen bg-gray-50'>' <EnhancedHeader />' <main className='flex-1'>' <Routes>' {} <Route path='/' element={<Home />} />' <Route path='/about' element={<About />} />' <Route path='/contact' element={<Contact />} />' <Route path='/careers' element={<Careers />} />' <Route path='/solutions' element={<Solutions />} />' <Route path='/research-development' element={<Solutions />} />' <Route path='/case-studies' element={<CaseStudies />} />' <Route path='/news' element={<News />} />' <Route path='/events' element={<News />} />' ' {} <Route path='/services' element={<Services />} />' <Route path='/services/ai' element={<AIServices />} />' <Route path='/services/cloud' element={<CloudServices />} />' <Route path='/services/cybersecurity' element={<CybersecurityServices />} />' <Route path='/services/infrastructure' element={<InfrastructureServices />} />' <Route path='/services/transformation' element={<TransformationServices />} />' <Route path='/services/consulting' element={<ConsultingServices />} />' ' {} <Route path='/privacy' element={<Privacy />} />' <Route path='/terms' element={<Terms />} />' ' {}' <Route path='*' element={' <div className='min-h-screen flex items-center justify-center'>' <div className='text-center'>' <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>' <p className='text-gray-600 mb-8'>Page not found</p>' <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: b g-blue-700 transition-colors'>' Go Home' </a></div><Route path='/services/ai' element={<AIServices />} />' <Route path='/services/cloud' element={<CloudServices />} /> <Route path='/services/cybersecurity' element={<CybersecurityServices />} /> <Route path='/services/infrastructure' element={<InfrastructureServices />} /> <Route path='/services/transformation' element={<TransformationServices />} /> <Route path='/services/consulting' element={<ConsultingServices />} />{} <Route path='/privacy' element={<Privacy />} /> <Route path='/terms' element={<Terms />} />{} <Route path='*' element={ <div className='min-h-screen flex items-center justify-center'> <div className='text-center'> <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1> <p className='text-gray-600 mb-8'>Page not found</p> <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: b g-blue-700 transition-colors'> Go Home </a> </div> } /> </Routes> </main> <EnhancedFooter /> </div> </PerformanceOptimizer> </ErrorBoundary> </HelmetProvider> )}; const Home = createLazyComponent(() => import('./pages/Home'))const About = createLazyComponent(() => import(./pages/About'))const Contact = createLazyComponent(() => import(./pages/Contact'))const Careers = createLazyComponent(() => import(./pages/Careers'))const Services = createLazyComponent(() => import(./pages/Services'))const Solutions = createLazyComponent(() => import(./pages/Solutions'))const News = createLazyComponent(() => import(./pages/News'))const CaseStudies = createLazyComponent(() => import(./pages/CaseStudies'))const Privacy = createLazyComponent(() => import(./pages/Privacy'))const Terms = createLazyComponent(() => import(./pages/Terms')) const AIServices = createLazyComponent(() => import('./pages/AIServices'))const CloudServices = createLazyComponent(() => import(./pages/CloudServices'))const CybersecurityServices = createLazyComponent(() => import(./pages/CybersecurityServices'))const InfrastructureServices = createLazyComponent(() => import(./pages/InfrastructureServices'))const TransformationServices = createLazyComponent(() => import(./pages/TransformationServices'))const ConsultingServices = createLazyComponent(() => import(./pages/ConsultingServices')) const ErrorFallback = ({ error,resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (' <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>' <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>' <div className='text-red-400 text-6xl mb-4'>⚠️</div>' <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>' <p className='text-gray-300 mb-6'>' {error.message || 'An unexpected error occurred. Please try again.'}' </p>' <div className='space-y-3'>' <button' onClick={resetErrorBoundary}'className=w-full bg-blue-600 hover: b g-blue-700 text-white px-4 py-2 rounded-lg transition-colors'' >' Try again</button><buttononClick={() => window.location.href = /'}' className='w-full bg-gray-700 hover: b g-gray-600 text-white px-4 py-2 rounded-lg transition-colors'' >' Go home' </button> </div> </div> </div> ) function App(props: any) { return ( <HelmetProvider> <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>' <PerformanceOptimizer>' <SEO />' <div className='min-h-screen bg-gray-50'>' <EnhancedHeader />' <main className='flex-1'>' <Routes>' {}' <Route path='/' element={<Home />} />' <Route path='/about' element={<About />} />' <Route path='/contact' element={<Contact />} />' <Route path='/careers' element={<Careers />} />' <Route path='/solutions' element={<Solutions />} />' <Route path='/research-development' element={<Solutions />} />' <Route path='/case-studies' element={<CaseStudies />} />' <Route path='/news' element={<News />} />' <Route path='/events' element={<News />} />' ' {}' <Route path='/services' element={<Services />} />' <Route path='/services/ai' element={<AIServices />} />' <Route path='/services/cloud' element={<CloudServices />} />' <Route path='/services/cybersecurity' element={<CybersecurityServices />} />' <Route path='/services/infrastructure' element={<InfrastructureServices />} />' <Route path='/services/transformation' element={<TransformationServices />} />' <Route path='/services/consulting' element={<ConsultingServices />} />' ' {}' <Route path='/privacy' element={<Privacy />} />' <Route path='/terms' element={<Terms />} />' ' {}'' <Route path='*' element={' <div className='min-h-screen flex items-center justify-center'>' <div className='text-center'>' <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>' <p className='text-gray-600 mb-8'>Page not found</p>' <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: b g-blue-700 transition-colors'>' Go Home' </a></div><Route path='/services/ai' element={<AIServices />} />'' <Route path='/services/cloud' element={<CloudServices />} />' <Route path='/services/cybersecurity' element={<CybersecurityServices />} />' <Route path='/services/infrastructure' element={<InfrastructureServices />} />' <Route path='/services/transformation' element={<TransformationServices />} />' <Route path='/services/consulting' element={<ConsultingServices />} />{}' <Route path='/privacy' element={<Privacy />} />' <Route path='/terms' element={<Terms />} />{}' <Route path='*' element={<div className=min-h-screen flex items-center justify-center'>' <div className='text-center'>' <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>' <p className='text-gray-600 mb-8'>Page not found</p>' <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: b g-blue-700 transition-colors'> Go Home </a> </div> } /> </Routes> </main> <EnhancedFooter /> </div> </PerformanceOptimizer> </ErrorBoundary> </HelmetProvider> )} </Route> </div> </Route> </div> </ErrorFallback> </buttononClick> </Route> </div> </Route> </div> </ErrorFallback> </any> </Route> </ErrorFallback> </any>