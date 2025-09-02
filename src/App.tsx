ursor/automate-test-fix-improve-and-merge-code-99d1
      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>
        <PerformanceOptimizer>
          <SEO />
          <div className="min-h-screen bg-gray-50">
            <EnhancedHeader />
            <div className="flex">
              <Sidebar />
              <main className="flex-1">
                <Routes>
                {/* Core Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<div className="p-8"><h1 className="text-3xl font-bold">Blog</h1><p className="text-gray-600 mt-2">Articles and insights from Zion Tech Group.</p></div>} />
                <Route path="/faq" element={<div className="p-8"><h1 className="text-3xl font-bold">FAQ</h1><p className="text-gray-600 mt-2">Frequently asked questions.</p></div>} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/partners" element={<div className="p-8"><h1 className="text-3xl font-bold">Partners</h1><p className="text-gray-600 mt-2">Our technology and delivery partners.</p></div>} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/research-development" element={<Solutions />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/news" element={<News />} />
                <Route path="/events" element={<News />} />
                <Route path="/team" element={<div className="p-8"><h1 className="text-3xl font-bold">Team</h1><p className="text-gray-600 mt-2">Meet the people behind Zion Tech Group.</p></div>} />
                <Route path="/help" element={<div className="p-8"><h1 className="text-3xl font-bold">Help Center</h1><p className="text-gray-600 mt-2">How can we help you?</p></div>} />
                <Route path="/security" element={<div className="p-8"><h1 className="text-3xl font-bold">Security</h1><p className="text-gray-600 mt-2">Our commitment to security.</p></div>} />
                <Route path="/status" element={<div className="p-8"><h1 className="text-3xl font-bold">Status</h1><p className="text-gray-600 mt-2">All systems operational.</p></div>} />
                <Route path="/sitemap" element={<div className="p-8"><h1 className="text-3xl font-bold">Sitemap</h1><p className="text-gray-600 mt-2">Browse all pages.</p></div>} />
                <Route path="/login" element={<div className="p-8"><h1 className="text-3xl font-bold">Login</h1></div>} />
                <Route path="/signup" element={<div className="p-8"><h1 className="text-3xl font-bold">Signup</h1></div>} />
                <Route path="/request-quote" element={<div className="p-8"><h1 className="text-3xl font-bold">Request a Quote</h1><p className="text-gray-600 mt-2">Tell us about your project.</p></div>} />
                <Route path="/green-it" element={<div className="p-8"><h1 className="text-3xl font-bold">Green IT</h1><p className="text-gray-600 mt-2">Sustainable technology initiatives.</p></div>} />
                <Route path="/marketplace" element={<div className="p-8"><h1 className="text-3xl font-bold">Marketplace</h1><p className="text-gray-600 mt-2">Explore products, talent, and services.</p></div>} />
                <Route path="/marketplace/products" element={<div className="p-8"><h1 className="text-2xl font-semibold">Products</h1></div>} />
                <Route path="/marketplace/talent" element={<div className="p-8"><h1 className="text-2xl font-semibold">Talent</h1></div>} />
                <Route path="/marketplace/equipment" element={<div className="p-8"><h1 className="text-2xl font-semibold">Equipment</h1></div>} />
                <Route path="/micro-saas" element={<div className="p-8"><h1 className="text-3xl font-bold">Micro SAAS</h1><p className="text-gray-600 mt-2">Curated micro SaaS solutions.</p></div>} />
                <Route path="/it-services" element={<div className="p-8"><h1 className="text-3xl font-bold">IT Services</h1><p className="text-gray-600 mt-2">Enterprise IT offerings.</p></div>} />
                
                {/* Services */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/ai" element={<AIServices />} />
                <Route path="/services/cloud" element={<CloudServices />} />
                <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
                <Route path="/services/infrastructure" element={<InfrastructureServices />} />
                <Route path="/services/transformation" element={<TransformationServices />} />
                <Route path="/services/consulting" element={<ConsultingServices />} />
                
                {/* Legal */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<div className="p-8"><h1 className="text-3xl font-bold">Cookies</h1></div>} />
                
                {/* 404 Fallback */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-gray-600 mb-8">Page not found</p>
                      <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
              </main>
            </div>
            <EnhancedFooter />
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>

