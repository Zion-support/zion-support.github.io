'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 cursor/fix-errors-and-merge-to-main-f512;
        <BrowserRouter /><div className="App" /><PerformanceMonitor />
            <Suspense fallback={<div>Loading...</div>}>
              </Suspense><Routes>
                {/* Main Pages */}
                </Routes><Route path="/" element={<div>Home Page</div>} />
                </Route><Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
              </Routes>
            </Suspense>
// Import proper utilities;
import { performanceOptimizer, lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics , logger  } from "./utils/performanceOptimizer";
const App: React.FC = () => {
  useEffect(() => {
 origin/cursor/analyze-improve-and-deploy-application-1247;
 cursor/fix-errors-and-merge-to-main-f512
;