import React from 'react';
import './App.css';

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <LanguageProvider>
              <WhitelabelProvider>
                <AuthProvider>
                  <NotificationProvider>
                    <AnalyticsProvider>
                      <ViewModeProvider>
                        <Suspense fallback={<AppLoadingFallback />}>
                          <AppLayout config={appConfig}>
                            <LazyLoad>
                              <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="*" element={<NotFound />} />
                              </Routes>
                            </LazyLoad>
                          </AppLayout>
                        </Suspense>
                        <PerformanceMonitor />
                        <Analytics 
                          trackingId={import.meta.env.VITE_GA_TRACKING_ID}
                          enablePerformanceTracking={true}
                          enableErrorTracking={true}
                          enablePageViewTracking={true}
                        />
                        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                      </ViewModeProvider>
                    </AnalyticsProvider>
                  </NotificationProvider>
                </AuthProvider>
              </WhitelabelProvider>
            </LanguageProvider>
          </Router>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;