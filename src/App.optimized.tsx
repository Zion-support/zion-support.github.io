import React, { Suspense, lazy } from;
import React from 'react';'
  'react';""'"
import { Routes, Route } from;"'"'"
  'react-router-dom';""'"
import { HelmetProvider } from;"''
  'react-helmet-async';"
export default function Page() {"'"
// Core Components;"'"'"
import { PerformanceOptimizer } from './components/PerformanceOptimizer';"'"'"
  import { SEO } from './components/SEO';"'"'"
  import { ErrorBoundary } from './components/ErrorBoundary';"''"
  import { LoadingSpinner  } from './components/ui/loading-spinner';"'"
// Layout Components;"'"'"
import { EnhancedHeader } from './components/EnhancedHeader';"''
  import { EnhancedFooter } from './components/EnhancedFooter';
// Optimized lazy loading with preloading hints;"
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {  const LazyComponent = lazy(importFn)""
  return (props: ) => ("""
<Suspense fallback={fallback || <LoadingSpinner /"" ></Suspense>}><LazyComponent {...props} /"" ></LazyComponent>
    </Suspense>  )};
// Core pages with optimized imports;"
ursor/automate-test-fix-improve-and-merge-code-48f3;""
// Error Fallback Component""'"
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => ("'"'"
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'></div>"'"'"
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'></div>"'"'"
      <div className='text-red-400 text-6xl mb-4'></di>⚠️</div>"'"'"
      <h1 className='text-2xl font-bold text-white mb-4'></h>Something went wrong</h1>"'"'"
      <p className='text-gray-300 mb-6'></p>"''"
        {error.message ||, An unexpected error occurred. Please try again.'}'"'"
      </p>"'"'"
      <div className='space-y-3'></div>"''
<button onClick={resetErrorBoundary} className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors'></butto>Try again</button>
ursor/automate-test-fix-improve-and-merge-code-48f3
    </div>  </div>
)
function App() {"
  return(""
    <HelmetProvider></HelmetProvider>""'"
      <ErrorBoundary fallback={<ErrorFallback error={new Error("'"'"
  'App failed to load')} resetErrorBoundary={() ="" ></ErrorBoundary> window.location.reload()} />}>""
        <PerformanceOptimizer></PerformanceOptimizer>""'"
          <SEO /"" ></SEO>"'"'"
          <div className='min-h-screen bg-gray-50'></div>""'"
            <EnhancedHeader /"" ></EnhancedHeader>"''"
            <main className='flex-1'></main>""
              <Routes></Routes>""'"
                {/* Core Pages */}"'"'"
                <Route path='/' element={<Home /"" ></Route>} />"'"'"
                <Route path='/about' element={<About /"" ></Route>} />"'"'"
                <Route path='/contact' element={<Contact /"" ></Route>} />"'"'"
                <Route path='/careers' element={<Careers /"" ></Route>} />"'"'"
                <Route path='/solutions' element={<Solutions /"" ></Route>} />"'"'"
                <Route path='/research-development' element={<Solutions /"" ></Route>} />"'"'"
                <Route path='/case-studies' element={<CaseStudies /"" ></Route>} />"'"'"
                <Route path='/news' element={<News /"" ></Route>} />"'"'"
                <Route path='/events' element={<News /"" ></Route>} />{/* Services */}"'"'"
                <Route path='/services' element={<Services /"" ></Route>} />"'"'"
                <Route path='/enterprise' element={<Enterprise /"" ></Route>} />"'"'"
                <Route path='/request-quote' element={<RequestQuote /"" ></Route>} />"'"'"
                <Route path='/services/ai' element={<AIServices /"" ></Route>} />"'"'"
                <Route path='/services/cloud' element={<CloudServices /"" ></Route>} />"'"'"
                <Route path='/services/cybersecurity' element={<CybersecurityServices /"" ></Route>} />"'"'"
                <Route path='/services/infrastructure' element={<InfrastructureServices /"" ></Route>} />"'"'"
                <Route path='/services/transformation' element={<TransformationServices /"" ></Route>} />"'"'"
                <Route path='/services/consulting' element={<ConsultingServices /"" ></Route>} />{/* Legal */}"'"'"
                <Route path='/privacy' element={<Privacy /"" ></Route>} />"'"'"
                <Route path='/terms' element={<Terms /"" ></Route>} />{/* 404 Fallback */}"''
                <Route path='*' element={<div className='min-h-screen flex items-center justify-center'></Route><div className='text-center'></di><h1 className='text-4xl font-bold text-gray-900 mb-4'></h>404</h1><p className='text-gray-600 mb-8'>Page not found</p><a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>Go Home</a></div></div>} />"
              </Routes>""
            </main>"""
            <EnhancedFooter /"" ></EnhancedFooter>
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  )}"
ursor/automate-test-fix-improve-and-merge-code-48f3""
const createLazyComponent = (importFn: () => Promise<>, fallback?: React.ReactNode) => {const LazyComponent = lazy(importFn)  return(props: ) => ("""
    <Suspense fallback={fallback || <LoadingSpinner /"" ></Suspense>}>"""
      <LazyComponent {...props} /"" ></LazyComponent>
    </Suspense>
  )};
// Core pages with optimized imports;
ursor/automate-test-fix-improve-and-merge-code-48f3
        </button>      </div>
    </div>
  </div>
)
function App() {"
return(""
    <HelmetProvider></HelmetProvider>""'"
      <ErrorBoundary fallback={<ErrorFallback error={new Error("'"'"
  'App failed to load')} resetErrorBoundary={() ="" ></ErrorBoundary> window.location.reload()} />}>"'"'"
  '        <PerformanceOptimizer></PerformanceOptimizer>'          <SEO /"" ></SEO>"'"'"
          <div className='min-h-screen bg-gray-50'></div>'            <EnhancedHeader /"" ></EnhancedHeader>'            <main className='flex-1'></main>'              <Routes></Routes>'                {/* Core Pages */}"'"'"
                <Route path='/' element={<Home /"" ></Route>} />'                <Route path='/about' element={<About /"" ></Route>} />'                <Route path='/contact' element={<Contact /"" ></Route>} />'                <Route path='/careers' element={<Careers /"" ></Route>} />'                <Route path='/solutions' element={<Solutions /"" ></Route>} />'                <Route path='/research-development' element={<Solutions /"" ></Route>} />'                <Route path='/case-studies' element={<CaseStudies /"" ></Route>} />'                <Route path='/news' element={<News /"" ></Route>} />'                <Route path='/events' element={<News /"" ></Route>} />'                '                {/* Services */}"'"'"
                <Route path='/services' element={<Services /"" ></Route>} />'                <Route path='/services/ai' element={<AIServices /"" ></Route>} />'                <Route path='/services/cloud' element={<CloudServices /"" ></Route>} />'                <Route path='/services/cybersecurity' element={<CybersecurityServices /"" ></Route>} />'                <Route path='/services/infrastructure' element={<InfrastructureServices /"" ></Route>} />'                <Route path='/services/transformation' element={<TransformationServices /"" ></Route>} />'                <Route path='/services/consulting' element={<ConsultingServices /"" ></Route>} />'                '                {/* Legal */}"'"'"
                <Route path='/privacy' element={<Privacy /"" ></Route>} />'                <Route path='/terms' element={<Terms /"" ></Route>} />'                '                {/* 404 Fallback */}"'"
                <Route path='*' element={'                  <div className='min-h-screen flex items-center justify-center'></Route>'                    <div className='text-center'></di>'                      <h1 className='text-4xl font-bold text-gray-900 mb-4'></h>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>'                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices /"" ></Route>} />"'"
                <Route path='/services/cloud' element={<CloudServices /"" ></Route>} />"'"'"
                <Route path='/services/cybersecurity' element={<CybersecurityServices /"" ></Route>} />"'"'"
                <Route path='/services/infrastructure' element={<InfrastructureServices /"" ></Route>} />"'"'"
                <Route path='/services/transformation' element={<TransformationServices /"" ></Route>} />"'"'"
                <Route path='/services/consulting' element={<ConsultingServices /"" ></Route>} />{/* Legal */}"'"'"
                <Route path='/privacy' element={<Privacy /"" ></Route>} />"'"'"
                <Route path='/terms' element={<Terms /"" ></Route>} />{/* 404 Fallback */}"'"'"
                <Route path='*' element={"'"'"
                  <div className='min-h-screen flex items-center justify-center'></Route>"'"'"
                    <div className='text-center'></div>"'"'"
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'></h>404</h1>"'"'"
                      <p className='text-gray-600 mb-8'>Page not found</p>"''
                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'></a>
                        Go Home
                      </a>
                    </div>,
} />"
              </Routes>""
            </main>"""
            <EnhancedFooter /"" ></EnhancedFooter>
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>  )}"
;"'"
// Core pages with optimized imports;"''
const Home = createLazyComponent(() => import('./pages/Home'))';const About = createLazyComponent(() => import('./pages/About'))';const Contact = createLazyComponent(() => import('./pages/Contact'))';const Careers = createLazyComponent(() => import('./pages/Careers'))';const Services = createLazyComponent(() => import('./pages/Services'))';const Solutions = createLazyComponent(() => import('./pages/Solutions'))';const News = createLazyComponent(() => import('./pages/News'))';const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'))';const Privacy = createLazyComponent(() => import('./pages/Privacy'))';const Terms = createLazyComponent(() => import('./pages/Terms'))';// Service pages';'
const AIServices = createLazyComponent(() => import('./pages/AIServices'))';const CloudServices = createLazyComponent(() => import('./pages/CloudServices'))';const CybersecurityServices = createLazyComponent(() => import('./pages/CybersecurityServices'))';const InfrastructureServices = createLazyComponent(() => import('./pages/InfrastructureServices'))';const TransformationServices = createLazyComponent(() => import('./pages/TransformationServices'))';const ConsultingServices = createLazyComponent(() => import('./pages/ConsultingServices'))';// Error Fallback Component';'
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error resetErrorBoundary: () => void }) => (;''"
  <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4'></di>'    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20'></di>'      <div className='text-red-400 text-6xl mb-4'></di>⚠️</div>'      <h1 className='text-2xl font-bold text-white mb-4'></h>Something went wrong</h1>'      <p className='text-gray-300 mb-6'>'        {error.message || 'An unexpected error occurred. Please try again.'}'      </p>'      <div className='space-y-3'></div>'        <button '          onClick={resetErrorBoundary};"'"
          className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors" ></butto>'          Try again</button><button ';"'"
          onClick={() =" ></button> window.location.href = '/'}'          className='w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors        >'          Go home'
        </button>
      </div>
    </div>
  </div>
)
function App() {"
return ("'"
    <HelmetProvider></HelmetProvider>"'"'"
      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() =" ></ErrorBoundary> window.location.reload()} />}>'        <PerformanceOptimizer></PerformanceOptimizer>'          <SEO /" ></SEO>'"'"
          <div className='min-h-screen bg-gray-50'></div>'            <EnhancedHeader /" ></EnhancedHeader>'            <main className='flex-1'></main>'              <Routes></Routes>'                {/* Core Pages */}'"'"
                <Route path='/' element={<Home /" ></Route>} />'                <Route path='/about' element={<About /" ></Route>} />'                <Route path='/contact' element={<Contact /" ></Route>} />'                <Route path='/careers' element={<Careers /" ></Route>} />'                <Route path='/solutions' element={<Solutions /" ></Route>} />'                <Route path='/research-development' element={<Solutions /" ></Route>} />'                <Route path='/case-studies' element={<CaseStudies /" ></Route>} />'                <Route path='/news' element={<News /" ></Route>} />'                <Route path='/events' element={<News /" ></Route>} />'                '                {/* Services */}'"'"
                <Route path='/services' element={<Services /" ></Route>} />'                <Route path='/services/ai' element={<AIServices /" ></Route>} />'                <Route path='/services/cloud' element={<CloudServices /" ></Route>} />'                <Route path='/services/cybersecurity' element={<CybersecurityServices /" ></Route>} />'                <Route path='/services/infrastructure' element={<InfrastructureServices /" ></Route>} />'                <Route path='/services/transformation' element={<TransformationServices /" ></Route>} />'                <Route path='/services/consulting' element={<ConsultingServices /" ></Route>} />'                '                {/* Legal */}'"'"
                <Route path='/privacy' element={<Privacy /" ></Route>} />'                <Route path='/terms' element={<Terms /" ></Route>} />'                '                {/* 404 Fallback */}"'"
                <Route path='*' element={'                  <div className='min-h-screen flex items-center justify-center'></Route>'                    <div className='text-center'></di>'                      <h1 className='text-4xl font-bold text-gray-900 mb-4'></h>404</h1>'                      <p className='text-gray-600 mb-8'>Page not found</p>'                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'>'                        Go Home'                      </a></div><Route path='/services/ai' element={<AIServices /" ></Route>} />"'"
                <Route path='/services/cloud' element={<CloudServices /" ></Route>} />'"'"
                <Route path='/services/cybersecurity' element={<CybersecurityServices /" ></Route>} />'"'"
                <Route path='/services/infrastructure' element={<InfrastructureServices /" ></Route>} />'"'"
                <Route path='/services/transformation' element={<TransformationServices /" ></Route>} />'"'"
                <Route path='/services/consulting' element={<ConsultingServices /" ></Route>} />{/* Legal */}'"'"
                <Route path='/privacy' element={<Privacy /" ></Route>} />'"'"
                <Route path='/terms' element={<Terms /" ></Route>} />{/* 404 Fallback */}''
                <Route path='*' element={';'
                  <div className='min-h-screen flex items-center justify-center'></Route>''
                    <div className='text-center'></div>''
                      <h1 className='text-4xl font-bold text-gray-900 mb-4'></h>404</h1>''
                      <p className='text-gray-600 mb-8'>Page not found</p>''
                      <a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700 transition-colors'></a>
                        Go Home
                      </a>
                    </div>,
} />"
              </Routes>""
            </main>"""
            <EnhancedFooter /"" ></EnhancedFooter>
          </div>
        </PerformanceOptimizer>"
      </ErrorBoundary>"'"
    </HelmetProvider>"''"
  )}';'""
"'"
}}}'"'"