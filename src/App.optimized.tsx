

export default function Page() {
export default function Page() {
// Core Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';


export default function Page() {
export default function Page() {
// Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';


export default function Page() {
export default function Page() {
// Optimized lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
import React { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
;

    </Suspense>  )}
// Core pages with optimized imports;
ursor/automate-test-fix-improve-and-merge-code-48f3;

// Error Fallback Component

    </div>
  </div>
);

// Optimized lazy loading with preloading hints;
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {  const LazyComponent = lazy(importFn)
  return (props:  ) => (""
<Suspense fallback={fallback || <LoadingSpinner /"" >}><LazyComponent {...props} /"" >
    </Suspense>  )}
// Core pages with optimized imports;

  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>""
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>""
      <div className='text-red-400 text-6xl mb-4'>⚠️</div>""
      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>""
      <p className='text-gray-300 mb-6'>""


        {error.message ||, An unexpected error occurred. Please try again.'}'

      </p>""
      <div className='space-y-3'>""
<button onClick={resetErrorBoundary} className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'>Try again</button>

ursor/automate-test-fix-improve-and-merge-code-48f3
    </div>  </div>
)


        <PerformanceOptimizer>
          <SEO />
          <div className=&apos;min-h-screen bg-gray-50&apos;>&apos;

            <EnhancedHeader />
            <main className=&apos;flex-1&apos;>&apos;
              <Routes>
                {/* Core Pages */}

                <Route path='*' element={<div className='min-h-screen flex items-center justify-center'><div className='text-center'><h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1><p className='text-gray-600 mb-8'>Page not found</p><a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>Go Home</a></div></div>} />


              </Routes>

          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>

      <LazyComponent {...props} />
    <;<;</Suspense>

    </Suspense>

  )}
// Core pages with optimized imports

                <Route path='*' element={""
                  <div className='min-h-screen flex items-center justify-center'>""
                    <div className='text-center'>""
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>""
                      <p className='text-gray-600 mb-8'>Page not found</p>""
                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>

                        Go Home

                      </a>
                    </div> } />
              </Routes>

          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>

    </HelmetProvider>  )}
;

        </button>;
      </div>;
    </div>;
  </div>;
);

                        Go Home;
                      </a>;
                    </div>} />;
              </Routes>;
            </main>;
            <EnhancedFooter />;
          </div>;
        </PerformanceOptimizer>;
      </ErrorBoundary>;
    </HelmetProvider>;

  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'>'    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'>'      <div className='text-red-400 text-6xl mb-4'>⚠️</div>'      <h1 className='text-2xl font-bold text-white mb-4'>Something went wrong</h1>'      <p className='text-gray-300 mb-6'>'        {error.message || 'An unexpected error occurred. Please try again.'}'      </p>'      <div className='space-y-3'>'        <button'          onClick={resetErrorBoundary}'';'
          className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors''        >'          Try again</button><button';'
          onClick={() => window.location.href = '/'}'          className='w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors''        >'          Go home'






        </button>
      </div>
    </div>
  </div>
)

                
                {/* Legal */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* 404 Fallback */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-gray-600 mb-8">Page not found</p>
                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">

                <Route path='/services/cloud' element={<CloudServices />} />''
                <Route path='/services/cybersecurity' element={<CybersecurityServices />} />''
                <Route path='/services/infrastructure' element={<InfrastructureServices />} />''
                <Route path='/services/transformation' element={<TransformationServices />} />''
                <Route path='/services/consulting' element={<ConsultingServices />} />{/* Legal */}'
                <Route path='/privacy' element={<Privacy />} />''

      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() =" > window.location.reload()} />}>'        <PerformanceOptimizer>'          <SEO /" >''
          <div className='min-h-screen bg-gray-50'>'            <EnhancedHeader /" >'            <main className='flex-1'>'              <Routes>'                {/* Core Pages */}''"
                <Route path='/' element={<Home /" >} />'                <Route path='/about' element={<About /" >} />'                <Route path='/contact' element={<Contact /" >} />'                <Route path='/careers' element={<Careers /" >} />'                <Route path='/solutions' element={<Solutions /" >} />'                <Route path='/research-development' element={<Solutions /" >} />'                <Route path='/case-studies' element={<CaseStudies /" >} />'                <Route path='/news' element={<News /" >} />'                <Route path='/events' element={<News /" >} />'                '                {/* Services */}''"
                <Route path='/services' element={<Services /" >} />'                <Route path='/services/ai' element={<AIServices /" >} />'                <Route path='/services/cloud' element={<CloudServices /" >} />'                <Route path='/services/cybersecurity' element={<CybersecurityServices /" >} />'                <Route path='/services/infrastructure' element={<InfrastructureServices /" >} />'                <Route path='/services/transformation' element={<TransformationServices /" >} />'                <Route path='/services/consulting' element={<ConsultingServices /" >} />'                '                {/* Legal */}''"
                <Route path='/privacy' element={<Privacy /" >} />'                <Route path='/terms' element={<Terms /" >} />'                '                {/* 404 Fallback */}'''


                  <div className='min-h-screen flex items-center justify-center'>''

                    <div className='text-center'>''
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1>''
                      <p className='text-gray-600 mb-8'>Page not found</p>''

                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>

                        Go Home

                      </a>

              </Routes>

  )}';
&apos;'









