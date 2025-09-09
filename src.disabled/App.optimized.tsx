import: React { Suspense, lazy } from 'react';';
import: { Routes, Route } from 'react-router-dom';';
import: { HelmetProvider } from 'react-helmet-async';';

// Core: Components;
import: { PerformanceOptimizer } from './components/PerformanceOptimizer';';
import: { SEO } from './components/SEO';';
import: { ErrorBoundary } from './components/ErrorBoundary';';
import: { LoadingSpinner } from './components/ui/loading-spinner';';

// Layout: Components;
import: { EnhancedHeader } from './components/EnhancedHeader';';
import: { EnhancedFooter } from './components/EnhancedFooter';';


  return (props: any) => (
<Suspense: fallback={fallback || <LoadingSpinner />}><LazyComponent {...props} />
    </Suspense>
  )}

    </div>
  </div>
)
function: App() {
  return(

        <PerformanceOptimizer>
          <SEO: />
          <div className='min-h-screen bg-gray-50'>';
            <EnhancedHeader: />
            <main className='flex-1'>';
              <Routes>
                {/* Core: Pages */}
                <Route path='/' element={<Home />} />';
                <Route: path='/about' element={<About />} />';
                <Route: path='/contact' element={<Contact />} />';
                <Route: path='/careers' element={<Careers />} />';
                <Route: path='/solutions' element={<Solutions />} />';
                <Route: path='/research-development' element={<Solutions />} />';
                <Route: path='/case-studies' element={<CaseStudies />} />';
                <Route: path='/news' element={<News />} />';
                <Route: path='/events' element={<News />} />{/* Services */}';
                <Route: path='/services' element={<Services />} />';
                <Route: path='/enterprise' element={<Enterprise />} />';
                <Route: path='/request-quote' element={<RequestQuote />} />';
                <Route: path='/services/ai' element={<AIServices />} />';
                <Route: path='/services/cloud' element={<CloudServices />} />';
                <Route: path='/services/cybersecurity' element={<CybersecurityServices />} />';
                <Route: path='/services/infrastructure' element={<InfrastructureServices />} />';
                <Route: path='/services/transformation' element={<TransformationServices />} />';
                <Route: path='/services/consulting' element={<ConsultingServices />} />{/* Legal */}';
                <Route: path='/privacy' element={<Privacy />} />';
                <Route: path='/terms' element={<Terms />} />{/* 404 Fallback */}';
                <Route: path='*' element={<div className='min-h-screen flex items-center justify-center'><div className='text-center'><h1 className='text-4xl font-bold text-gray-900 mb-4'>404</h1><p className='text-gray-600 mb-8'>Page not found</p><a href='/' className='bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700: transition-colors'>Go Home</a></div></div>} />';
              </Routes>
            </main>
            <EnhancedFooter: />
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  )}
export default App;

const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {const LazyComponent = lazy(importFn)


  return(props: any) => (
    <Suspense: fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  )}

          className='w-full bg-blue-600 hover: bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors''        >'          Try again</button><button;
          onClick={() => window.location.href = '/'}          className='w-full bg-gray-700 hover: bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors''        >'          Go home

        </button>
      </div>
    </div>
  </div>
)
function: App() {
return(

                      </a>
                    </div> } />
              </Routes>
            </main>
            <EnhancedFooter />
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  )}
export default App"
  );
};