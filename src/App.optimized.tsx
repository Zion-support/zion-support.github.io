<<<<<<< HEAD
import React, {Suspense, lazy } from;
  'react';
<<<<<<< HEAD
import { Routes, Route } from;""
  'react-router-dom';
import { HelmetProvider } from;""
=======
import {Routes, Route } from;"
  'react-router-dom';
import {HelmetProvider } from;"
>>>>>>> main
  'react-helmet-async';
<<<<<<< HEAD
export default function Page() {;
export default function Page() {;
// Core Components;
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
export default function Page() {;
export default function Page() {;
  import { SEO } from './components/SEO';
export default function Page() {;
export default function Page() {;
  import { ErrorBoundary } from './components/ErrorBoundary';
export default function Page() {;
export default function Page() {;
  import { LoadingSpinner  } from './components/ui/loading-spinner';
;
export default function Page() {;
export default function Page() {;
// Layout Components;
import { EnhancedHeader } from './components/EnhancedHeader';
export default function Page() {;
export default function Page() {;
  import { EnhancedFooter } from './components/EnhancedFooter';
;
export default function Page() {;
export default function Page() {;
// Optimized lazy loading with preloading hints;
<<<<<<< HEAD
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {  const LazyComponent = lazy(importFn);
  return (props: ) => ('
=======
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {  const LazyComponent = lazy(importFn);
  return (props: any) => (;
<Suspense fallback={fallback || <LoadingSpinner />}><LazyComponent {...props} />;
=======
export default function Page()   {// Core Components;
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
  import {SEO } from './components/SEO';
  import {ErrorBoundary } from './components/ErrorBoundary';
  import {LoadingSpinner  } from './components/ui/loading-spinner';
// Layout Components;
import {EnhancedHeader } from './components/EnhancedHeader';
  import {EnhancedFooter } from './components/EnhancedFooter';
// Optimized lazy loading with preloading hints;
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {const LazyComponent = lazy(importFn)
  return (props: ) => (
>>>>>>> main
<Suspense fallback={fallback || <LoadingSpinner /" >}><LazyComponent {...props} /" >
>>>>>>> main
    </Suspense>  )}
// Core pages with optimized imports;
ursor/automate-test-fix-improve-and-merge-code-48f3;
<<<<<<< HEAD
// Error Fallback Component"
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundar,
    y: () => void }) => (""
=======
// Error Fallback Component
const ErrorFallback = ({error, resetErrorBoundary }: {error: Error resetErrorBoundary: () => void }) => ("
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>"
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>"
      <div className='text-red-400 text-6xl mb-4'>⚠️</div>"
      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>"
      <p className='text-gray-300 mb-6'>"
=======
import React, { Suspense, lazy } from;
<<<<<<< HEAD
  &apos;react';
import { Routes, Route } from;
  &apos;react-router-dom';
import { HelmetProvider } from;
  &apos;react-helmet-async';&apos;&apos;
export default function Page() {}
export default function Page() ;{
// Core Components;
import { PerformanceOptimizer } from &apos;./components/PerformanceOptimizer';&apos;&apos;
export default function Page() {}
export default function Page() {
  import ;{ SEO } from &apos;./components/SEO';&apos;&apos;
export default function Page() {}
export default function Page() {
  import ;{ ErrorBoundary } from &apos;./components/ErrorBoundary';&apos;&apos;
export default function Page() {}
export default function Page() {
  import ;{ LoadingSpinner  } from &apos;./components/ui/loading-spinner';&apos;&apos;

export default function Page() {}
export default function Page() ;{
// Layout Components;
import { EnhancedHeader } from &apos;./components/EnhancedHeader';&apos;&apos;
export default function Page() {}
export default function Page() {
  import ;{ EnhancedFooter } from &apos;./components/EnhancedFooter';&apos;&apos;

export default function Page() {}
export default function Page() ;{
// Optimized lazy loading with preloading hints;}
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {}  const LazyComponent = lazy(importFn)
  return (props: any) => (
<Suspense fallback={fallback ||} <LoadingSpinner />}><LazyComponent {...props} />
    <;<;</Suspense>  )}
;
// Core pages with optimized imports;
ursor/automate-test-fix-improve-and-merge-code-48f3;
<<<<<<< HEAD
// Error Fallback Component;
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (;
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>;
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>;
      <div className='text-red-400 text-6xl mb-4'>⚠️</div>;
      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>;
      <p className='text-gray-300 mb-6'>;
        {error.message ||, An unexpected error occurred. Please try again.'}';
      </p>;
      <div className='space-y-3'>;
<button onClick={resetErrorBoundary} className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'>Try again</button>;
ursor/automate-test-fix-improve-and-merge-code-48f3;
    </div>  </div>;
);
function App() {;
  return(;
    <HelmetProvider>;
      <ErrorBoundary fallback={<ErrorFallback error={new Error(;
  'App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>;
        <PerformanceOptimizer>;
          <SEO />;
          <div className='min-h-screen bg-gray-50'>;
            <EnhancedHeader />;
            <main className='flex-1'>;
              <Routes>;
                {/* Core Pages */}
                <Route path='/' element={<Home />} />;
                <Route path='/about' element={<About />} />;
                <Route path='/contact' element={<Contact />} />;
                <Route path='/careers' element={<Careers />} />;
                <Route path='/solutions' element={<Solutions />} />;
                <Route path='/research-development' element={<Solutions />} />;
                <Route path='/case-studies' element={<CaseStudies />} />;
                <Route path='/news' element={<News />} />;
                <Route path='/events' element={<News />} />{/* Services */}
                <Route path='/services' element={<Services />} />;
                <Route path='/enterprise' element={<Enterprise />} />;
                <Route path='/request-quote' element={<RequestQuote />} />;
                <Route path='/services/ai' element={<AIServices />} />;
                <Route path='/services/cloud' element={<CloudServices />} />;
                <Route path='/services/cybersecurity' element={<CybersecurityServices />} />;
                <Route path='/services/infrastructure' element={<InfrastructureServices />} />;
                <Route path='/services/transformation' element={<TransformationServices />} />;
                <Route path='/services/consulting' element={<ConsultingServices />} />{/* Legal */}
                <Route path='/privacy' element={<Privacy />} />;
                <Route path='/terms' element={<Terms />} />{/* 404 Fallback */}
                <Route path='*' element={<div className='min-h-screen flex items-center justify-center'><div className='text-center'><h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1><p className='text-gray-600 mb-8'>Page not found</p><a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>Go Home</a></div></div>} />;
              </Routes>;
            </main>;
            <EnhancedFooter />;
          </div>;
        </PerformanceOptimizer>;
      </ErrorBoundary>;
    </HelmetProvider>;
  )}
ursor/automate-test-fix-improve-and-merge-code-48f3;
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {const LazyComponent = lazy(importFn)  return(props: any) => (;
    <Suspense fallback={fallback || <LoadingSpinner />}>;
      <LazyComponent {...props} />;
    </Suspense>;
  )}
// Core pages with optimized imports;
ursor/automate-test-fix-improve-and-merge-code-48f3;
        </button>      </div>;
    </div>;
  </div>;
);
function App() {;
return(;
    <HelmetProvider>;
      <ErrorBoundary fallback={<ErrorFallback error={new Error(;
  'App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>;
  '        <PerformanceOptimizer>'          <SEO />;
          <div className='min-h-screen bg-gray-50'>'            <EnhancedHeader />'            <main className='flex-1'>'              <Routes>'                {/* Core Pages */}
                <Route path='/' element={<Home />} />'                <Route path='/about' element={<About />} />'                <Route path='/contact' element={<Contact />} />'                <Route path='/careers' element={<Careers />} />'                <Route path='/solutions' element={<Solutions />} />'                <Route path='/research-development' element={<Solutions />} />'                <Route path='/case-studies' element={<CaseStudies />} />'                <Route path='/news' element={<News />} />'                <Route path='/events' element={<News />} />'                '                {/* Services */}
                <Route path='/services' element={<Services />} />'                <Route path='/services/ai' element={<AIServices />} />'                <Route path='/services/cloud' element={<CloudServices />} />'                <Route path='/services/cybersecurity' element={<CybersecurityServices />} />'                <Route path='/services/infrastructure' element={<InfrastructureServices />} />'                <Route path='/services/transformation' element={<TransformationServices />} />'                <Route path='/services/consulting' element={<ConsultingServices />} />'                '                {/* Legal */}
                <Route path='/privacy' element={<Privacy />} />'                <Route path='/terms' element={<Terms />} />'                '                {/* 404 Fallback */}';
                <Route path='*' element={'                  <div className='min-h-screen flex items-center justify-center'>'                    <div className='text-center'>'                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>'                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices />} />';
                <Route path='/services/cloud' element={<CloudServices />} />;
                <Route path='/services/cybersecurity' element={<CybersecurityServices />} />;
                <Route path='/services/infrastructure' element={<InfrastructureServices />} />;
                <Route path='/services/transformation' element={<TransformationServices />} />;
                <Route path='/services/consulting' element={<ConsultingServices />} />{/* Legal */}
                <Route path='/privacy' element={<Privacy />} />;
                <Route path='/terms' element={<Terms />} />{/* 404 Fallback */}
                <Route path='*' element={;
                  <div className='min-h-screen flex items-center justify-center'>;
                    <div className='text-center'>;
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>;
                      <p className='text-gray-600 mb-8'>Page not found</p>;
                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>;
                        Go Home;
                      </a>;
                    </div>;
} />;
              </Routes>;
            </main>;
            <EnhancedFooter />;
          </div>;
        </PerformanceOptimizer>;
      </ErrorBoundary>;
=======
// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundar,y: () => void }) => (
  <;<div className=&apos;min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4&apos;>&apos;'
    <div className=&apos;bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20&apos;>&apos;'
      <div className=&apos;text-red-400 text-6xl mb-4&apos;>⚠️&apos;</div>
      <h1 className=&apos;text-2xl font-bold text-white mb-4&apos;>Something went wrong&apos;</h1>
      <p className=&apos;text-gray-300 mb-6&apos;>
        {error.message ||, An unexpected error occurred. Please try again.&apos;}'&apos;&apos;
      </p>
      <div className=&apos;space-y-3&apos;>&apos;'
<button onClick={resetErrorBoundary} className=&apos;w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors&apos;>Try again&apos;</button>
=======
<<<<<<< HEAD
  'react';""
import { Routes, Route } from;""
  'react-router-dom';""
import { HelmetProvider } from;""
  'react-helmet-async';
export default function Page() {
// Core Components;""
import { PerformanceOptimizer } from './components/PerformanceOptimizer';""
  import { SEO } from './components/SEO';""
  import { ErrorBoundary } from './components/ErrorBoundary';""
  import { LoadingSpinner  } from './components/ui/loading-spinner';
// Layout Components;""
import { EnhancedHeader } from './components/EnhancedHeader';""
=======
  'react
import { Routes, Route } from;"
  'react-router-dom
import { HelmetProvider } from;"
  'react-helmet-async';
export default function Page() {
<<<<<<< HEAD
// Core Components;
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
  import { SEO } from './components/SEO';
  import { ErrorBoundary } from './components/ErrorBoundary';
  import { LoadingSpinner  } from './components/ui/loading-spinner';

// Layout Components;
import { EnhancedHeader } from './components/EnhancedHeader';
  import { EnhancedFooter } from './components/EnhancedFooter';

=======
// Core Components;"
import { PerformanceOptimizer } from './components/PerformanceOptimizer
  import { SEO } from './components/SEO
  import { ErrorBoundary } from './components/ErrorBoundary
  import { LoadingSpinner  } from './components/ui/loading-spinner';
// Layout Components;"
import { EnhancedHeader } from './components/EnhancedHeader
>>>>>>> main
  import { EnhancedFooter } from './components/EnhancedFooter';
>>>>>>> main
// Optimized lazy loading with preloading hints;
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {  const LazyComponent = lazy(importFn)
  return (props:  ) => (""
<Suspense fallback={fallback || <LoadingSpinner /"" >}><LazyComponent {...props} /"" >
    </Suspense>  )}
// Core pages with optimized imports;
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-48f3
// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void   }) => (
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>
      <div className='text-red-400 text-6xl mb-4'>⚠️</div>
      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>
      <p className='text-gray-300 mb-6'>
=======
ursor/automate-test-fix-improve-and-merge-code-48f3;
// Error Fallback Component""
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (""
>>>>>>> main
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>""
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>""
      <div className='text-red-400 text-6xl mb-4'>⚠️</div>""
      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>""
      <p className='text-gray-300 mb-6'>""
<<<<<<< HEAD
        {error.message ||, An unexpected error occurred. Please try again.'}
=======
>>>>>>> main
>>>>>>> main
        {error.message ||, An unexpected error occurred. Please try again.'}'
>>>>>>> main
      </p>""
      <div className='space-y-3'>""
<button onClick={resetErrorBoundary} className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'>Try again</button>
>>>>>>> main
ursor/automate-test-fix-improve-and-merge-code-48f3
    </div>  </div>
)
<<<<<<< HEAD
function App() {
  return(
    <HelmetProvider>'
      <ErrorBoundary fallback={<ErrorFallback error={new Error(""
  'App failed to load')} resetErrorBoundary={() =" > window.location.reload()} />}>
        <PerformanceOptimizer>"
          <SEO /" >""
          <div className='min-h-screen bg-gray-50>
            <EnhancedHeader /" >""
            <main className='flex-1'>
              <Routes>'
                {/* Core Pages */}""
                <Route path='/' element={<Home /" >} />""
                <Route path='/about' element={<About /" >} />""
                <Route path='/contact' element={<Contact /" >} />""
                <Route path='/careers' element={<Careers /" >} />""
                <Route path='/solutions' element={<Solutions /" >} />""
                <Route path='/research-development' element={<Solutions /" >} />""
                <Route path='/case-studies' element={<CaseStudies /" >} />""
                <Route path='/news' element={<News /" >} />""
                <Route path='/events' element={<News /" >} />{/* Services */}""
                <Route path='/services' element={<Services /" >} />""
                <Route path='/enterprise' element={<Enterprise /" >} />""
                <Route path='/request-quote' element={<RequestQuote /" >} />""
                <Route path='/services/ai' element={<AIServices /" >} />""
                <Route path='/services/cloud' element={<CloudServices /" >} />""
                <Route path='/services/cybersecurity' element={<CybersecurityServices /" >} />""
                <Route path='/services/infrastructure' element={<InfrastructureServices /" >} />""
                <Route path='/services/transformation' element={<TransformationServices /" >} />""
                <Route path='/services/consulting' element={<ConsultingServices /" >} />{/* Legal */}""
                <Route path='/privacy' element={<Privacy /" >} />""
                <Route path='/terms' element={<Terms /" >} />{/* 404 Fallback */}""
=======
<<<<<<< HEAD
function App() {return(
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error(" 'App failed to load')} resetErrorBoundary={() =" > window.location.reload()} />}>
=======
function App() {
<<<<<<< HEAD
  return(}
    <HelmetProvider>
      <ErrorBoundary fallback={}<ErrorFallback error={new Error(
  &apos;App failed to load&apos;)} resetErrorBoundary={() => window.location.reload()} />}>&apos;
>>>>>>> main
        <PerformanceOptimizer>
          <SEO />
          <div className=&apos;min-h-screen bg-gray-50&apos;>&apos;'
            <EnhancedHeader />
            <main className=&apos;flex-1&apos;>&apos;'
              <Routes>
                {/* Core Pages */}
                <Route path=&apos;/&apos; element={&apos;}&apos;<Home />} />
                <Route path=&apos;/about&apos; element={&apos;}<About />} />
                <Route path=&apos;/contact&apos; element={&apos;}<Contact />} />
                <Route path=&apos;/careers&apos; element={&apos;}<Careers />} />
                <Route path=&apos;/solutions&apos; element={&apos;}<Solutions />} />
                <Route path=&apos;/research-development&apos; element={&apos;}<Solutions />} />
                <Route path=&apos;/case-studies&apos; element={&apos;}<CaseStudies />} />
                <Route path=&apos;/news&apos; element={&apos;}<News />} />
                <Route path=&apos;/events&apos; element={&apos;}<News />} />{/* Services */}
                <Route path=&apos;/services&apos; element={&apos;}<Services />} />
                <Route path=&apos;/enterprise&apos; element={&apos;}<Enterprise />} />
                <Route path=&apos;/request-quote&apos; element={&apos;}<RequestQuote />} />
                <Route path=&apos;/services/ai&apos; element={&apos;}<AIServices />} />
                <Route path=&apos;/services/cloud&apos; element={&apos;}<CloudServices />} />
                <Route path=&apos;/services/cybersecurity&apos; element={&apos;}<CybersecurityServices />} />
                <Route path=&apos;/services/infrastructure&apos; element={&apos;}<InfrastructureServices />} />
                <Route path=&apos;/services/transformation&apos; element={&apos;}<TransformationServices />} />
                <Route path=&apos;/services/consulting&apos; element={&apos;}<ConsultingServices />} />{/* Legal */}
                <Route path=&apos;/privacy&apos; element={&apos;}<Privacy />} />
                <Route path=&apos;/terms&apos; element={&apos;}<Terms />} />{/* 404 Fallback */}
                <Route path=&apos;*&apos; element={&apos;}&apos;<div className=&apos;min-h-screen flex items-center justify-center&apos;>&apos;'<div className=&apos;text-center&apos;>&apos;'<h1 className=&apos;text-4xl font-bold text-gray-900 mb-4&apos;>404&apos;</h1><p className=&apos;text-gray-600 mb-8&apos;>Page not found&apos;</p><a href=&apos;/&apos; className=&apos;bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors&apos;>Go Home&apos;&apos;</a></div></div>} />
=======
  return(
    <HelmetProvider>""
      <ErrorBoundary fallback={<ErrorFallback error={new Error(""
  'App failed to load')} resetErrorBoundary={() ="" > window.location.reload()} />}>
        <PerformanceOptimizer>""
          <SEO /"" >""
          <div className='min-h-screen bg-gray-50'>""
            <EnhancedHeader /"" >""
            <main className='flex-1'>
              <Routes>""
                {/* Core Pages */}""
                <Route path='/' element={<Home /"" >} />""
                <Route path='/about' element={<About /"" >} />""
                <Route path='/contact' element={<Contact /"" >} />""
                <Route path='/careers' element={<Careers /"" >} />""
                <Route path='/solutions' element={<Solutions /"" >} />""
                <Route path='/research-development' element={<Solutions /"" >} />""
                <Route path='/case-studies' element={<CaseStudies /"" >} />""
                <Route path='/news' element={<News /"" >} />""
                <Route path='/events' element={<News /"" >} />{/* Services */}""
                <Route path='/services' element={<Services /"" >} />""
                <Route path='/enterprise' element={<Enterprise /"" >} />""
                <Route path='/request-quote' element={<RequestQuote /"" >} />""
                <Route path='/services/ai' element={<AIServices /"" >} />""
                <Route path='/services/cloud' element={<CloudServices /"" >} />""
                <Route path='/services/cybersecurity' element={<CybersecurityServices /"" >} />""
                <Route path='/services/infrastructure' element={<InfrastructureServices /"" >} />""
                <Route path='/services/transformation' element={<TransformationServices /"" >} />""
                <Route path='/services/consulting' element={<ConsultingServices /"" >} />{/* Legal */}""
                <Route path='/privacy' element={<Privacy /"" >} />""
                <Route path='/terms' element={<Terms /"" >} />{/* 404 Fallback */}""
>>>>>>> main
                <Route path='*' element={<div className='min-h-screen flex items-center justify-center'><div className='text-center'><h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1><p className='text-gray-600 mb-8'>Page not found</p><a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>Go Home</a></div></div>} />
>>>>>>> main
              </Routes>
<<<<<<< HEAD
            </main>'
            <EnhancedFooter /" >
=======
            </main>""
            <EnhancedFooter /"" >
>>>>>>> main
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  )}
ursor/automate-test-fix-improve-and-merge-code-48f3
<<<<<<< HEAD
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {const LazyComponent = lazy(importFn)  return(props: ) => ("
    <Suspense fallback={fallback || <LoadingSpinner /" >}>"
      <LazyComponent {...props} /" >
=======
<<<<<<< HEAD
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {}const LazyComponent = lazy(importFn)  return(props: any) => (
    <Suspense fallback={fallback ||} <LoadingSpinner />}>
      <LazyComponent {...props} />
    <;<;</Suspense>
=======
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {const LazyComponent = lazy(importFn)  return(props:  ) => (""
    <Suspense fallback={fallback || <LoadingSpinner /"" >}>""
      <LazyComponent {...props} /"" >
>>>>>>> main
    </Suspense>
>>>>>>> main
  )}
// Core pages with optimized imports
ursor/automate-test-fix-improve-and-merge-code-48f3
        </button>      </div>
    </div>
  </div>
)
<<<<<<< HEAD
function App() {
return(
    <HelmetProvider>"
      <ErrorBoundary fallback={<ErrorFallback error={new Error(""
  'App failed to load')} resetErrorBoundary={() =" > window.location.reload()} />}>""
  '        <PerformanceOptimizer>'          <SEO /" >""
          <div className='min-h-screen bg-gray-50>            <EnhancedHeader /" >'            <main className='flex-1>              <Routes>'                {/* Core Pages */}""
                <Route path='/' element={<Home /" >} />                <Route path='/about' element={<About /" >} />                <Route path='/contact' element={<Contact /" >} />                <Route path='/careers' element={<Careers /" >} />                <Route path='/solutions' element={<Solutions /" >} />                <Route path='/research-development' element={<Solutions /" >} />                <Route path='/case-studies' element={<CaseStudies /" >} />                <Route path='/news' element={<News /" >} />                <Route path='/events' element={<News /" >} />                '                {/* Services */}""
                <Route path='/services' element={<Services /" >} />                <Route path='/services/ai' element={<AIServices /" >} />                <Route path='/services/cloud' element={<CloudServices /" >} />                <Route path='/services/cybersecurity' element={<CybersecurityServices /" >} />                <Route path='/services/infrastructure' element={<InfrastructureServices /" >} />                <Route path='/services/transformation' element={<TransformationServices /" >} />                <Route path='/services/consulting' element={<ConsultingServices /" >} />                '                {/* Legal */}""
                <Route path='/privacy' element={<Privacy /" >} />                <Route path='/terms' element={<Terms /" >} />                '                {/* 404 Fallback */}
                <Route path='*' element={'                  <div className='min-h-screen flex items-center justify-center>                    <div className='text-center>                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors>                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices /" >} />'
                <Route path='/services/cloud' element={<CloudServices /" >} />""
                <Route path='/services/cybersecurity' element={<CybersecurityServices /" >} />""
                <Route path='/services/infrastructure' element={<InfrastructureServices /" >} />""
                <Route path='/services/transformation' element={<TransformationServices /" >} />""
                <Route path='/services/consulting' element={<ConsultingServices /" >} />{/* Legal */}""
                <Route path='/privacy' element={<Privacy /" >} />""
                <Route path='/terms' element={<Terms /" >} />{/* 404 Fallback */}""
=======
<<<<<<< HEAD
function App() {return(
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error(" 'App failed to load')} resetErrorBoundary={() =" > window.location.reload()} />}>"
  '        <PerformanceOptimizer>'          <SEO /" >"
          <div className='min-h-screen bg-gray-50'>'            <EnhancedHeader /" >'            <main className='flex-1'>'              <Routes>'                {/* Core Pages */}"
                <Route path='/' element={<Home /" >} />'                <Route path='/about' element={<About /" >} />'                <Route path='/contact' element={<Contact /" >} />'                <Route path='/careers' element={<Careers /" >} />'                <Route path='/solutions' element={<Solutions /" >} />'                <Route path='/research-development' element={<Solutions /" >} />'                <Route path='/case-studies' element={<CaseStudies /" >} />'                <Route path='/news' element={<News /" >} />'                <Route path='/events' element={<News /" >} />'                '                {/* Services */}"
                <Route path='/services' element={<Services /" >} />'                <Route path='/services/ai' element={<AIServices /" >} />'                <Route path='/services/cloud' element={<CloudServices /" >} />'                <Route path='/services/cybersecurity' element={<CybersecurityServices /" >} />'                <Route path='/services/infrastructure' element={<InfrastructureServices /" >} />'                <Route path='/services/transformation' element={<TransformationServices /" >} />'                <Route path='/services/consulting' element={<ConsultingServices /" >} />'                '                {/* Legal */}"
                <Route path='/privacy' element={<Privacy /" >} />'                <Route path='/terms' element={<Terms /" >} />'                '                {/* 404 Fallback */}'
                <Route path='*' element={' <div className='min-h-screen flex items-center justify-center'>'                    <div className='text-center'>'                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>'                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices /" >} />'
                <Route path='/services/cloud' element={<CloudServices /" >} />"
                <Route path='/services/cybersecurity' element={<CybersecurityServices /" >} />"
                <Route path='/services/infrastructure' element={<InfrastructureServices /" >} />"
                <Route path='/services/transformation' element={<TransformationServices /" >} />"
                <Route path='/services/consulting' element={<ConsultingServices /" >} />{/* Legal */}"
                <Route path='/privacy' element={<Privacy /" >} />"
                <Route path='/terms' element={<Terms /" >} />{/* 404 Fallback */}"
                <Route path='*' element={" <div className='min-h-screen flex items-center justify-center'>"
                    <div className='text-center'>"
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>"
                      <p className='text-gray-600 mb-8'>Page not found</p>"
                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>
=======
function App() {
<<<<<<< HEAD
return(}
    <HelmetProvider>
      <ErrorBoundary fallback={}<ErrorFallback error={new Error(
  &apos;App failed to load&apos;)} resetErrorBoundary={() => window.location.reload()} />}>
  &apos;&apos;'        <PerformanceOptimizer>&apos;&apos;'          <SEO />
          <div className=&apos;min-h-screen bg-gray-50&apos;>'&apos;&apos;            <EnhancedHeader />&apos;&apos;'            <main className=&apos;flex-1&apos;>'&apos;&apos;              <Routes>&apos;                {/* Core Pages */}&apos;
                <Route path=&apos;/&apos; element={&apos;}&apos;<Home />} />&apos;&apos;'                <Route path=&apos;/about&apos; element={&apos;}<About />} />&apos;&apos;'                <Route path=&apos;/contact&apos; element={&apos;}<Contact />} />&apos;&apos;'                <Route path=&apos;/careers&apos; element={&apos;}<Careers />} />&apos;&apos;'                <Route path=&apos;/solutions&apos; element={&apos;}<Solutions />} />&apos;&apos;'                <Route path=&apos;/research-development&apos; element={&apos;}<Solutions />} />&apos;&apos;'                <Route path=&apos;/case-studies&apos; element={&apos;}<CaseStudies />} />&apos;&apos;'                <Route path=&apos;/news&apos; element={&apos;}<News />} />&apos;&apos;'                <Route path=&apos;/events&apos; element={&apos;}<News />} />&apos;                &apos;                {/* Services */}&apos;
                <Route path=&apos;/services&apos; element={&apos;}<Services />} />&apos;&apos;'                <Route path=&apos;/services/ai&apos; element={&apos;}<AIServices />} />&apos;&apos;'                <Route path=&apos;/services/cloud&apos; element={&apos;}<CloudServices />} />&apos;&apos;'                <Route path=&apos;/services/cybersecurity&apos; element={&apos;}<CybersecurityServices />} />&apos;&apos;'                <Route path=&apos;/services/infrastructure&apos; element={&apos;}<InfrastructureServices />} />&apos;&apos;'                <Route path=&apos;/services/transformation&apos; element={&apos;}<TransformationServices />} />&apos;&apos;'                <Route path=&apos;/services/consulting&apos; element={&apos;}<ConsultingServices />} />&apos;                &apos;                {/* Legal */}&apos;
                <Route path=&apos;/privacy&apos; element={&apos;}<Privacy />} />&apos;&apos;'                <Route path=&apos;/terms&apos; element={&apos;}<Terms />} />&apos;                &apos;                {/* 404 Fallback */}&apos;&apos;'
                <Route path=&apos;*&apos; element={&apos;&apos;}'                  <div className=&apos;min-h-screen flex items-center justify-center&apos;>'&apos;&apos;                    <div className=&apos;text-center&apos;>'&apos;&apos;                      <h1 className=&apos;text-4xl font-bold text-gray-900 mb-4&apos;>404&apos;</h1>&apos;&apos;'                      <p className=&apos;text-gray-600 mb-8&apos;>Page not found&apos;</p>&apos;&apos;'                      <a href=&apos;/&apos; className=&apos;bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors&apos;>&apos;                        Go Home&apos;&apos;'                      </a></div><Route path=&apos;/services/ai&apos; element={&apos;}<AIServices />} />&apos;&apos;'
                <Route path=&apos;/services/cloud&apos; element={&apos;}<CloudServices />} />
                <Route path=&apos;/services/cybersecurity&apos; element={&apos;}<CybersecurityServices />} />
                <Route path=&apos;/services/infrastructure&apos; element={&apos;}<InfrastructureServices />} />
                <Route path=&apos;/services/transformation&apos; element={&apos;}<TransformationServices />} />
                <Route path=&apos;/services/consulting&apos; element={&apos;}<ConsultingServices />} />{/* Legal */}
                <Route path=&apos;/privacy&apos; element={&apos;}<Privacy />} />
                <Route path=&apos;/terms&apos; element={&apos;}<Terms />} />{/* 404 Fallback */}
                <Route path=&apos;*&apos; element={&apos;}&apos;
                  <div className=&apos;min-h-screen flex items-center justify-center&apos;>&apos;'
                    <div className=&apos;text-center&apos;>&apos;'
                      <h1 className=&apos;text-4xl font-bold text-gray-900 mb-4&apos;>404&apos;</h1>
                      <p className=&apos;text-gray-600 mb-8&apos;>Page not found&apos;</p>
                      <a href=&apos;/&apos; className=&apos;bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors&apos;>
                        Go Home&apos;&apos;
=======
return(
    <HelmetProvider>""
      <ErrorBoundary fallback={<ErrorFallback error={new Error(""
  'App failed to load')} resetErrorBoundary={() ="" > window.location.reload()} />}>""
  '        <PerformanceOptimizer>'          <SEO /"" >""
          <div className='min-h-screen bg-gray-50'>'            <EnhancedHeader /"" >'            <main className='flex-1'>'              <Routes>'                {/* Core Pages */}""
                <Route path='/' element={<Home /"" >} />'                <Route path='/about' element={<About /"" >} />'                <Route path='/contact' element={<Contact /"" >} />'                <Route path='/careers' element={<Careers /"" >} />'                <Route path='/solutions' element={<Solutions /"" >} />'                <Route path='/research-development' element={<Solutions /"" >} />'                <Route path='/case-studies' element={<CaseStudies /"" >} />'                <Route path='/news' element={<News /"" >} />'                <Route path='/events' element={<News /"" >} />'                '                {/* Services */}""
                <Route path='/services' element={<Services /"" >} />'                <Route path='/services/ai' element={<AIServices /"" >} />'                <Route path='/services/cloud' element={<CloudServices /"" >} />'                <Route path='/services/cybersecurity' element={<CybersecurityServices /"" >} />'                <Route path='/services/infrastructure' element={<InfrastructureServices /"" >} />'                <Route path='/services/transformation' element={<TransformationServices /"" >} />'                <Route path='/services/consulting' element={<ConsultingServices /"" >} />'                '                {/* Legal */}""
                <Route path='/privacy' element={<Privacy /"" >} />'                <Route path='/terms' element={<Terms /"" >} />'                '                {/* 404 Fallback */}'
                <Route path='*' element={'                  <div className='min-h-screen flex items-center justify-center'>'                    <div className='text-center'>'                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>'                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices /"" >} />'
                <Route path='/services/cloud' element={<CloudServices /"" >} />""
                <Route path='/services/cybersecurity' element={<CybersecurityServices /"" >} />""
                <Route path='/services/infrastructure' element={<InfrastructureServices /"" >} />""
                <Route path='/services/transformation' element={<TransformationServices /"" >} />""
                <Route path='/services/consulting' element={<ConsultingServices /"" >} />{/* Legal */}""
                <Route path='/privacy' element={<Privacy /"" >} />""
                <Route path='/terms' element={<Terms /"" >} />{/* 404 Fallback */}""
>>>>>>> main
                <Route path='*' element={""
                  <div className='min-h-screen flex items-center justify-center'>""
                    <div className='text-center'>""
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>""
                      <p className='text-gray-600 mb-8'>Page not found</p>""
                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
>>>>>>> main
                        Go Home
>>>>>>> main
                      </a>
                    </div>, } />
              </Routes>
<<<<<<< HEAD
            </main>'
            <EnhancedFooter /" >
=======
            </main>""
            <EnhancedFooter /"" >
>>>>>>> main
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
>>>>>>> main
    </HelmetProvider>  )}
;
<<<<<<< HEAD
// Core pages with optimized imports;"
const Home = createLazyComponent(() => import('./pages/Home'));const About = createLazyComponent(() => import('./pages/About'));const Contact = createLazyComponent(() => import('./pages/Contact'));const Careers = createLazyComponent(() => import('./pages/Careers'));const Services = createLazyComponent(() => import('./pages/Services'));const Solutions = createLazyComponent(() => import('./pages/Solutions'));const News = createLazyComponent(() => import('./pages/News'));const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));const Privacy = createLazyComponent(() => import('./pages/Privacy'));const Terms = createLazyComponent(() => import('./pages/Terms'));// Service pages';'
const AIServices = createLazyComponent(() => import('./pages/AIServices'));const CloudServices = createLazyComponent(() => import('./pages/CloudServices'));const CybersecurityServices = createLazyComponent(() => import('./pages/CybersecurityServices'));const InfrastructureServices = createLazyComponent(() => import('./pages/InfrastructureServices'));const TransformationServices = createLazyComponent(() => import('./pages/TransformationServices'));const ConsultingServices = createLazyComponent(() => import('./pages/ConsultingServices'));// Error Fallback Component';'
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundar,
    y: () => void }) => ('''
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4>    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20>      <div className='text-red-400 text-6xl mb-4'>⚠️</div>'      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>'      <p className='text-gray-300 mb-6>        {error.message || 'An unexpected error occurred. Please try again.'}      </p>'      <div className='space-y-3>        <button'          onClick={resetErrorBoundary};'
          className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors''        >'          Try again</button><button';'
          onClick={() => window.location.href = '/'}          className='w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors''        >'          Go home'
=======
<<<<<<< HEAD
// Core pages with optimized imports;""
const Home = createLazyComponent(() => import('./pages/Home'))';const About = createLazyComponent(() => import('./pages/About'))';const Contact = createLazyComponent(() => import('./pages/Contact'))';const Careers = createLazyComponent(() => import('./pages/Careers'))';const Services = createLazyComponent(() => import('./pages/Services'))';const Solutions = createLazyComponent(() => import('./pages/Solutions'))';const News = createLazyComponent(() => import('./pages/News'))';const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'))';const Privacy = createLazyComponent(() => import('./pages/Privacy'))';const Terms = createLazyComponent(() => import('./pages/Terms'))';// Service pages';'
<<<<<<< HEAD
const AIServices = createLazyComponent(() => import('./pages/AIServices'))';const CloudServices = createLazyComponent(() => import('./pages/CloudServices'))';const CybersecurityServices = createLazyComponent(() => import('./pages/CybersecurityServices'))';const InfrastructureServices = createLazyComponent(() => import('./pages/InfrastructureServices'))';const TransformationServices = createLazyComponent(() => import('./pages/TransformationServices'))';const ConsultingServices = createLazyComponent(() => import('./pages/ConsultingServices'))';// Error Fallback Component''
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void   }) => (''
=======
const AIServices = createLazyComponent(() => import('./pages/AIServices'))';const CloudServices = createLazyComponent(() => import('./pages/CloudServices'))';const CybersecurityServices = createLazyComponent(() => import('./pages/CybersecurityServices'))';const InfrastructureServices = createLazyComponent(() => import('./pages/InfrastructureServices'))';const TransformationServices = createLazyComponent(() => import('./pages/TransformationServices'))';const ConsultingServices = createLazyComponent(() => import('./pages/ConsultingServices'))';// Error Fallback Component';'
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (''
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>'    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>'      <div className='text-red-400 text-6xl mb-4'>⚠️</div>'      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>'      <p className='text-gray-300 mb-6'>'        {error.message || 'An unexpected error occurred. Please try again.'}'      </p>'      <div className='space-y-3'>'        <button '          onClick={resetErrorBoundary}'';'
          className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors''" >'          Try again</button><button ';'"
          onClick={() =" > window.location.href = '/'}'          className='w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors''        >'          Go home'"
=======
<<<<<<< HEAD
// Core pages with optimized imports;
<<<<<<< HEAD
const Home = createLazyComponent(() => import('./pages/Home'))';const About = createLazyComponent(() => import('./pages/About'))';const Contact = createLazyComponent(() => import('./pages/Contact'))';const Careers = createLazyComponent(() => import('./pages/Careers'))';const Services = createLazyComponent(() => import('./pages/Services'))';const Solutions = createLazyComponent(() => import('./pages/Solutions'))';const News = createLazyComponent(() => import('./pages/News'))';const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'))';const Privacy = createLazyComponent(() => import('./pages/Privacy'))';const Terms = createLazyComponent(() => import('./pages/Terms'))';// Service pages';
const AIServices = createLazyComponent(() => import('./pages/AIServices'))';const CloudServices = createLazyComponent(() => import('./pages/CloudServices'))';const CybersecurityServices = createLazyComponent(() => import('./pages/CybersecurityServices'))';const InfrastructureServices = createLazyComponent(() => import('./pages/InfrastructureServices'))';const TransformationServices = createLazyComponent(() => import('./pages/TransformationServices'))';const ConsultingServices = createLazyComponent(() => import('./pages/ConsultingServices'))';// Error Fallback Component';
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (';
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>'    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>'      <div className='text-red-400 text-6xl mb-4'>⚠️</div>'      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>'      <p className='text-gray-300 mb-6'>'        {error.message || 'An unexpected error occurred. Please try again.'}'      </p>'      <div className='space-y-3'>'        <button'          onClick={resetErrorBoundary}';
          className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'        >'          Try again</button><button';
          onClick={() => window.location.href = '/'}'          className='w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors'        >'          Go home';
        </button>;
      </div>;
    </div>;
  </div>;
);
function App() {;
return (;
    <HelmetProvider>;
      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>'        <PerformanceOptimizer>'          <SEO />';
          <div className='min-h-screen bg-gray-50'>'            <EnhancedHeader />'            <main className='flex-1'>'              <Routes>'                {/* Core Pages */}';
                <Route path='/' element={<Home />} />'                <Route path='/about' element={<About />} />'                <Route path='/contact' element={<Contact />} />'                <Route path='/careers' element={<Careers />} />'                <Route path='/solutions' element={<Solutions />} />'                <Route path='/research-development' element={<Solutions />} />'                <Route path='/case-studies' element={<CaseStudies />} />'                <Route path='/news' element={<News />} />'                <Route path='/events' element={<News />} />'                '                {/* Services */}';
                <Route path='/services' element={<Services />} />'                <Route path='/services/ai' element={<AIServices />} />'                <Route path='/services/cloud' element={<CloudServices />} />'                <Route path='/services/cybersecurity' element={<CybersecurityServices />} />'                <Route path='/services/infrastructure' element={<InfrastructureServices />} />'                <Route path='/services/transformation' element={<TransformationServices />} />'                <Route path='/services/consulting' element={<ConsultingServices />} />'                '                {/* Legal */}';
                <Route path='/privacy' element={<Privacy />} />'                <Route path='/terms' element={<Terms />} />'                '                {/* 404 Fallback */}';
                <Route path='*' element={'                  <div className='min-h-screen flex items-center justify-center'>'                    <div className='text-center'>'                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>'                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices />} />';
                <Route path='/services/cloud' element={<CloudServices />} />';
                <Route path='/services/cybersecurity' element={<CybersecurityServices />} />';
                <Route path='/services/infrastructure' element={<InfrastructureServices />} />';
                <Route path='/services/transformation' element={<TransformationServices />} />';
                <Route path='/services/consulting' element={<ConsultingServices />} />{/* Legal */}';
                <Route path='/privacy' element={<Privacy />} />';
                <Route path='/terms' element={<Terms />} />{/* 404 Fallback */}';
                <Route path='*' element={';
                  <div className='min-h-screen flex items-center justify-center'>';
                    <div className='text-center'>';
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>';
                      <p className='text-gray-600 mb-8'>Page not found</p>';
                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>;
                        Go Home;
                      </a>;
                    </div>;
} />;
              </Routes>;
            </main>;
            <EnhancedFooter />;
          </div>;
        </PerformanceOptimizer>;
      </ErrorBoundary>;
    </HelmetProvider>;
=======
<<<<<<< HEAD
const Home = createLazyComponent(() => import(&apos;./pages/Home&apos;))';&apos;&apos;const About = createLazyComponent(() => import(&apos;./pages/About&apos;))';&apos;&apos;const Contact = createLazyComponent(() => import(&apos;./pages/Contact&apos;))';&apos;&apos;const Careers = createLazyComponent(() => import(&apos;./pages/Careers&apos;))';&apos;&apos;const Services = createLazyComponent(() => import(&apos;./pages/Services&apos;))';&apos;&apos;const Solutions = createLazyComponent(() => import(&apos;./pages/Solutions&apos;))';&apos;&apos;const News = createLazyComponent(() => import(&apos;./pages/News&apos;))';&apos;&apos;const CaseStudies = createLazyComponent(() => import(&apos;./pages/CaseStudies&apos;))';&apos;&apos;const Privacy = createLazyComponent(() => import(&apos;./pages/Privacy&apos;))';&apos;&apos;const Terms = createLazyComponent(() => import(&apos;./pages/Terms&apos;))';// Service pages';&apos;&apos;
const AIServices = createLazyComponent(() => import(&apos;./pages/AIServices&apos;))';&apos;&apos;const CloudServices = createLazyComponent(() => import(&apos;./pages/CloudServices&apos;))';&apos;&apos;const CybersecurityServices = createLazyComponent(() => import(&apos;./pages/CybersecurityServices&apos;))';&apos;&apos;const InfrastructureServices = createLazyComponent(() => import(&apos;./pages/InfrastructureServices&apos;))';&apos;&apos;const TransformationServices = createLazyComponent(() => import(&apos;./pages/TransformationServices&apos;))';&apos;&apos;const ConsultingServices = createLazyComponent(() => import(&apos;./pages/ConsultingServices&apos;))';// Error Fallback Component';&apos;&apos;
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundar,y: () => void }) => (&apos;&apos;'
  <div className=&apos;min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4&apos;>'&apos;&apos;    <div className=&apos;bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20&apos;>'&apos;&apos;      <div className=&apos;text-red-400 text-6xl mb-4&apos;>⚠️&apos;</div>&apos;&apos;'      <h1 className=&apos;text-2xl font-bold text-white mb-4&apos;>Something went wrong&apos;</h1>&apos;&apos;'      <p className=&apos;text-gray-300 mb-6&apos;>&apos;        {error.message || &apos;An unexpected error occurred. Please try again.&apos;}'&apos;&apos;      </p>&apos;&apos;'      <div className=&apos;space-y-3&apos;>'&apos;&apos;        <;<button&apos;          onClick={resetErrorBoundary}&apos;';
          className=&apos;w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors&apos;&apos;        >&apos;          Try again&apos;&apos;</button><button';
          onClick={() => window.location.href = &apos;/&apos;}&apos;          className=&apos;w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors&apos;&apos;        >&apos;          Go home&apos;&apos;'
=======
const Home = createLazyComponent(() => import('./pages/Home'))';const About = createLazyComponent(() => import('./pages/About'))';const Contact = createLazyComponent(() => import('./pages/Contact'))';const Careers = createLazyComponent(() => import('./pages/Careers'))';const Services = createLazyComponent(() => import('./pages/Services'))';const Solutions = createLazyComponent(() => import('./pages/Solutions'))';const News = createLazyComponent(() => import('./pages/News'))';const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'))';const Privacy = createLazyComponent(() => import('./pages/Privacy'))';const Terms = createLazyComponent(() => import('./pages/Terms'))';// Service pages';'
const AIServices = createLazyComponent(() => import('./pages/AIServices'))';const CloudServices = createLazyComponent(() => import('./pages/CloudServices'))';const CybersecurityServices = createLazyComponent(() => import('./pages/CybersecurityServices'))';const InfrastructureServices = createLazyComponent(() => import('./pages/InfrastructureServices'))';const TransformationServices = createLazyComponent(() => import('./pages/TransformationServices'))';const ConsultingServices = createLazyComponent(() => import('./pages/ConsultingServices'))';// Error Fallback Component';'
<<<<<<< HEAD
const ErrorFallback = ({error, resetErrorBoundary }: {error: Error resetErrorBoundary: () => void }) => (''
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>'    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>'      <div className='text-red-400 text-6xl mb-4'>⚠️</div>'      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>'      <p className='text-gray-300 mb-6'>'        {error.message || 'An unexpected error occurred. Please try again.'}'      </p>'      <div className='space-y-3'>'        <button' onClick={resetErrorBoundary}'';' className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'' >'          Try again</button><button';' onClick={() => window.location.href = '/'}'          className='w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors''        >'          Go home'
=======
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (''
>>>>>>> main
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>'    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>'      <div className='text-red-400 text-6xl mb-4'>⚠️</div>'      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>'      <p className='text-gray-300 mb-6'>'        {error.message || 'An unexpected error occurred. Please try again.'}'      </p>'      <div className='space-y-3'>'        <button'          onClick={resetErrorBoundary}'';'
          className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors''        >'          Try again</button><button';'
          onClick={() => window.location.href = '/'}'          className='w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors''        >'          Go home'
=======
// Core pages with optimized imports;"
const Home = createLazyComponent(() => import('./pages/Home'))';const About = createLazyComponent(() => import('./pages/About'))';const Contact = createLazyComponent(() => import('./pages/Contact'))';const Careers = createLazyComponent(() => import('./pages/Careers'))';const Services = createLazyComponent(() => import('./pages/Services'))';const Solutions = createLazyComponent(() => import('./pages/Solutions'))';const News = createLazyComponent(() => import('./pages/News'))';const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'))';const Privacy = createLazyComponent(() => import('./pages/Privacy'))';const Terms = createLazyComponent(() => import('./pages/Terms'))';// Service pages
const AIServices = createLazyComponent(() => import('./pages/AIServices'))';const CloudServices = createLazyComponent(() => import('./pages/CloudServices'))';const CybersecurityServices = createLazyComponent(() => import('./pages/CybersecurityServices'))';const InfrastructureServices = createLazyComponent(() => import('./pages/InfrastructureServices'))';const TransformationServices = createLazyComponent(() => import('./pages/TransformationServices'))';const ConsultingServices = createLazyComponent(() => import('./pages/ConsultingServices'))';// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (''
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>'    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>'      <div className='text-red-400 text-6xl mb-4'>⚠️</div>'      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>'      <p className='text-gray-300 mb-6'>'        {error.message || 'An unexpected error occurred. Please try again.'}'      </p>'      <div className='space-y-3'>'        <button '          onClick={resetErrorBoundary}'
          className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors' >'          Try again</button><button 
          onClick={() =" > window.location.href = '/'}'          className='w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors''        >'          Go home'
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
        </button>
      </div>
    </div>
  </div>
)
<<<<<<< HEAD
function App() {return (
=======
function App() {
<<<<<<< HEAD
return (}
    <HelmetProvider>
      <ErrorBoundary fallback={}<ErrorFallback error={new Error(&apos;App failed to load&apos;)} resetErrorBoundary={() => window.location.reload()} />}>&apos;&apos;'        <PerformanceOptimizer>&apos;&apos;'          <SEO />&apos;&apos;'
          <div className=&apos;min-h-screen bg-gray-50&apos;>'&apos;&apos;            <EnhancedHeader />&apos;&apos;'            <main className=&apos;flex-1&apos;>'&apos;&apos;              <Routes>&apos;                {/* Core Pages */}&apos;&apos;'
                <Route path=&apos;/&apos; element={&apos;}&apos;<Home />} />&apos;&apos;'                <Route path=&apos;/about&apos; element={&apos;}<About />} />&apos;&apos;'                <Route path=&apos;/contact&apos; element={&apos;}<Contact />} />&apos;&apos;'                <Route path=&apos;/careers&apos; element={&apos;}<Careers />} />&apos;&apos;'                <Route path=&apos;/solutions&apos; element={&apos;}<Solutions />} />&apos;&apos;'                <Route path=&apos;/research-development&apos; element={&apos;}<Solutions />} />&apos;&apos;'                <Route path=&apos;/case-studies&apos; element={&apos;}<CaseStudies />} />&apos;&apos;'                <Route path=&apos;/news&apos; element={&apos;}<News />} />&apos;&apos;'                <Route path=&apos;/events&apos; element={&apos;}<News />} />&apos;                &apos;                {/* Services */}&apos;&apos;'
                <Route path=&apos;/services&apos; element={&apos;}<Services />} />&apos;&apos;'                <Route path=&apos;/services/ai&apos; element={&apos;}<AIServices />} />&apos;&apos;'                <Route path=&apos;/services/cloud&apos; element={&apos;}<CloudServices />} />&apos;&apos;'                <Route path=&apos;/services/cybersecurity&apos; element={&apos;}<CybersecurityServices />} />&apos;&apos;'                <Route path=&apos;/services/infrastructure&apos; element={&apos;}<InfrastructureServices />} />&apos;&apos;'                <Route path=&apos;/services/transformation&apos; element={&apos;}<TransformationServices />} />&apos;&apos;'                <Route path=&apos;/services/consulting&apos; element={&apos;}<ConsultingServices />} />&apos;                &apos;                {/* Legal */}&apos;&apos;'
                <Route path=&apos;/privacy&apos; element={&apos;}<Privacy />} />&apos;&apos;'                <Route path=&apos;/terms&apos; element={&apos;}<Terms />} />&apos;                &apos;                {/* 404 Fallback */}&apos;&apos;''
                <Route path=&apos;*&apos; element={&apos;&apos;}'                  <div className=&apos;min-h-screen flex items-center justify-center&apos;>'&apos;&apos;                    <div className=&apos;text-center&apos;>'&apos;&apos;                      <h1 className=&apos;text-4xl font-bold text-gray-900 mb-4&apos;>404&apos;</h1>&apos;&apos;'                      <p className=&apos;text-gray-600 mb-8&apos;>Page not found&apos;</p>&apos;&apos;'                      <a href=&apos;/&apos; className=&apos;bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors&apos;>&apos;                        Go Home&apos;&apos;'                      </a></div><Route path=&apos;/services/ai&apos; element={&apos;}<AIServices />} />&apos;&apos;''
                <Route path=&apos;/services/cloud&apos; element={&apos;}<CloudServices />} />&apos;&apos;'
                <Route path=&apos;/services/cybersecurity&apos; element={&apos;}<CybersecurityServices />} />&apos;&apos;'
                <Route path=&apos;/services/infrastructure&apos; element={&apos;}<InfrastructureServices />} />&apos;&apos;'
                <Route path=&apos;/services/transformation&apos; element={&apos;}<TransformationServices />} />&apos;&apos;'
                <Route path=&apos;/services/consulting&apos; element={&apos;}<ConsultingServices />} />{/* Legal */}&apos;&apos;'
                <Route path=&apos;/privacy&apos; element={&apos;}<Privacy />} />&apos;&apos;'
                <Route path=&apos;/terms&apos; element={&apos;}<Terms />} />{/* 404 Fallback */}&apos;&apos;'
                <Route path=&apos;*&apos; element={';&apos;}&apos;
                  <div className=&apos;min-h-screen flex items-center justify-center&apos;>'&apos;&apos;
                    <div className=&apos;text-center&apos;>'&apos;&apos;
                      <h1 className=&apos;text-4xl font-bold text-gray-900 mb-4&apos;>404&apos;</h1>&apos;&apos;'
                      <p className=&apos;text-gray-600 mb-8&apos;>Page not found&apos;</p>&apos;&apos;'
                      <a href=&apos;/&apos; className=&apos;bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors&apos;>
                        Go Home&apos;&apos;
=======
return (
<<<<<<< HEAD
    <HelmetProvider>'
      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>'        <PerformanceOptimizer>'          <SEO />''
          <div className='min-h-screen bg-gray-50>            <EnhancedHeader />            <main className='flex-1>              <Routes>'                {/* Core Pages */}'
                <Route path='/' element={<Home />} />                <Route path='/about' element={<About />} />                <Route path='/contact' element={<Contact />} />                <Route path='/careers' element={<Careers />} />                <Route path='/solutions' element={<Solutions />} />                <Route path='/research-development' element={<Solutions />} />                <Route path='/case-studies' element={<CaseStudies />} />                <Route path='/news' element={<News />} />                <Route path='/events' element={<News />} />                '                {/* Services */}'
                <Route path='/services' element={<Services />} />                <Route path='/services/ai' element={<AIServices />} />                <Route path='/services/cloud' element={<CloudServices />} />                <Route path='/services/cybersecurity' element={<CybersecurityServices />} />                <Route path='/services/infrastructure' element={<InfrastructureServices />} />                <Route path='/services/transformation' element={<TransformationServices />} />                <Route path='/services/consulting' element={<ConsultingServices />} />                '                {/* Legal */}'
                <Route path='/privacy' element={<Privacy />} />                <Route path='/terms' element={<Terms />} />                '                {/* 404 Fallback */}''
                <Route path='*' element={'                  <div className='min-h-screen flex items-center justify-center>                    <div className='text-center>                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors>                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices />} />'''
=======
<<<<<<< HEAD
    <HelmetProvider>""
=======
<<<<<<< HEAD
>>>>>>> main
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>'        <PerformanceOptimizer>'          <SEO />''
          <div className='min-h-screen bg-gray-50'>'            <EnhancedHeader />'            <main className='flex-1'>'              <Routes>'                {/* Core Pages */}''
                <Route path='/' element={<Home />} />'                <Route path='/about' element={<About />} />'                <Route path='/contact' element={<Contact />} />'                <Route path='/careers' element={<Careers />} />'                <Route path='/solutions' element={<Solutions />} />'                <Route path='/research-development' element={<Solutions />} />'                <Route path='/case-studies' element={<CaseStudies />} />'                <Route path='/news' element={<News />} />'                <Route path='/events' element={<News />} />'                '                {/* Services */}''
                <Route path='/services' element={<Services />} />'                <Route path='/services/ai' element={<AIServices />} />'                <Route path='/services/cloud' element={<CloudServices />} />'                <Route path='/services/cybersecurity' element={<CybersecurityServices />} />'                <Route path='/services/infrastructure' element={<InfrastructureServices />} />'                <Route path='/services/transformation' element={<TransformationServices />} />'                <Route path='/services/consulting' element={<ConsultingServices />} />'                '                {/* Legal */}''
                <Route path='/privacy' element={<Privacy />} />'                <Route path='/terms' element={<Terms />} />'                '                {/* 404 Fallback */}'''
                <Route path='*' element={' <div className='min-h-screen flex items-center justify-center'>'                    <div className='text-center'>'                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>'                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices />} />'''
>>>>>>> main
                <Route path='/services/cloud' element={<CloudServices />} />''
                <Route path='/services/cybersecurity' element={<CybersecurityServices />} />''
                <Route path='/services/infrastructure' element={<InfrastructureServices />} />''
                <Route path='/services/transformation' element={<TransformationServices />} />''
                <Route path='/services/consulting' element={<ConsultingServices />} />{/* Legal */}'
                <Route path='/privacy' element={<Privacy />} />''
<<<<<<< HEAD
                <Route path='/terms' element={<Terms />} />{/* 404 Fallback */}'
                <Route path='*' element={';'
                  <div className='min-h-screen flex items-center justify-center>''
                    <div className='text-center>''
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'''
                      <p className='text-gray-600 mb-8'>Page not found</p>'''
=======
                <Route path='/terms' element={<Terms />} />{/* 404 Fallback */}''
<<<<<<< HEAD
                <Route path='*' element={';' <div className='min-h-screen flex items-center justify-center'>''
=======
                <Route path='*' element={';'
=======
    <HelmetProvider>"
>>>>>>> main
      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() =" > window.location.reload()} />}>'        <PerformanceOptimizer>'          <SEO /" >''
          <div className='min-h-screen bg-gray-50'>'            <EnhancedHeader /" >'            <main className='flex-1'>'              <Routes>'                {/* Core Pages */}''"
                <Route path='/' element={<Home /" >} />'                <Route path='/about' element={<About /" >} />'                <Route path='/contact' element={<Contact /" >} />'                <Route path='/careers' element={<Careers /" >} />'                <Route path='/solutions' element={<Solutions /" >} />'                <Route path='/research-development' element={<Solutions /" >} />'                <Route path='/case-studies' element={<CaseStudies /" >} />'                <Route path='/news' element={<News /" >} />'                <Route path='/events' element={<News /" >} />'                '                {/* Services */}''"
                <Route path='/services' element={<Services /" >} />'                <Route path='/services/ai' element={<AIServices /" >} />'                <Route path='/services/cloud' element={<CloudServices /" >} />'                <Route path='/services/cybersecurity' element={<CybersecurityServices /" >} />'                <Route path='/services/infrastructure' element={<InfrastructureServices /" >} />'                <Route path='/services/transformation' element={<TransformationServices /" >} />'                <Route path='/services/consulting' element={<ConsultingServices /" >} />'                '                {/* Legal */}''"
                <Route path='/privacy' element={<Privacy /" >} />'                <Route path='/terms' element={<Terms /" >} />'                '                {/* 404 Fallback */}'''
<<<<<<< HEAD
                <Route path='*' element={'                  <div className='min-h-screen flex items-center justify-center'>'                    <div className='text-center'>'                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>'                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices /" >} />'''"
                <Route path='/services/cloud' element={<CloudServices /" >} />''"
                <Route path='/services/cybersecurity' element={<CybersecurityServices /" >} />''"
                <Route path='/services/infrastructure' element={<InfrastructureServices /" >} />''"
                <Route path='/services/transformation' element={<TransformationServices /" >} />''"
                <Route path='/services/consulting' element={<ConsultingServices /" >} />{/* Legal */}''"
                <Route path='/privacy' element={<Privacy /" >} />''"
                <Route path='/terms' element={<Terms /" >} />{/* 404 Fallback */}''"
                <Route path='*' element={';'
=======
                <Route path='*' element={'                  <div className='min-h-screen flex items-center justify-center'>'                    <div className='text-center'>'                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>'                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices /" >} />'''
                <Route path='/services/cloud' element={<CloudServices /" >} />''
                <Route path='/services/cybersecurity' element={<CybersecurityServices /" >} />''
                <Route path='/services/infrastructure' element={<InfrastructureServices /" >} />''
                <Route path='/services/transformation' element={<TransformationServices /" >} />''
                <Route path='/services/consulting' element={<ConsultingServices /" >} />{/* Legal */}''
                <Route path='/privacy' element={<Privacy /" >} />''
                <Route path='/terms' element={<Terms /" >} />{/* 404 Fallback */}''
                <Route path='*' element={
>>>>>>> main
>>>>>>> main
                  <div className='min-h-screen flex items-center justify-center'>''
>>>>>>> main
                    <div className='text-center'>''
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>''
                      <p className='text-gray-600 mb-8'>Page not found</p>''
>>>>>>> main
                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>
                        Go Home
>>>>>>> main
                      </a>
                    </div>, } />
              </Routes>
<<<<<<< HEAD
            </main>'
            <EnhancedFooter /" >
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
<<<<<<< HEAD
    </HelmetProvider>
  )}''
=======
    </HelmetProvider>"
  )};'
=======
            </main>""
            <EnhancedFooter /"" >
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
<<<<<<< HEAD
    </HelmetProvider>""
  )}';'
""
}}}
=======
<<<<<<< HEAD
    </HelmetProvider>
<<<<<<< HEAD
>>>>>>> main
  )}';
&apos;'
=======
  )}';'
=======
    </HelmetProvider>"
  )}
"
}}}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
