
// Lazy load all pages
const Home = React.lazy(() => import('./pages/Home.tsx'));
const About = React.lazy(() => import('./pages/about.tsx'));
const Contact = React.lazy(() => import('./pages/Contact.tsx'));
const Blog = React.lazy(() => import('./pages/Blog.tsx'));
const PartnersPage = React.lazy(() => import('./pages/Partners.tsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'));
const Careers = React.lazy(() => import('./pages/Careers.tsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.tsx'));
const Terms = React.lazy(() => import('./pages/Terms.tsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.tsx'));

// Services pages
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage.jsx'));

// Marketplace pages
const Marketplace = React.lazy(() => import('./pages/Marketplace.jsx'));

// Support pages
const Support = React.lazy(() => import('./pages/Support.tsx'));
const Security = React.lazy(() => import('./pages/Security.tsx'));
const SystemStatus = React.lazy(() => import('./pages/SystemStatus.tsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.tsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.tsx'));

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.tsx'));
const PartnersPage = lazy(() => import('./pages/Partners.tsx'));
const Login = lazy(() => import('./pages/Login.tsx'));
const FAQ = lazy(() => import('./pages/FAQ.tsx'));
const Careers = lazy(() => import('./pages/Careers.tsx'));

// Search and categories
const Search = React.lazy(() => import('./pages/Search.tsx'));
const Categories = React.lazy(() => import('./pages/Categories.tsx'));

// API Playground
const ApiPlayground = React.lazy(() => import('./pages/ApiPlayground.tsx'));
const ComprehensivePricing = React.lazy(() => import('./pages/ComprehensivePricing.jsx'));

// Loading component
const LoadingSpinner = () => ('
  <div className='flex items-center justify-center min-h-screen>

    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan'></div>
  </div>

);

// Simple Services page component

          Our{' '}



          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
            Services
          </span>

          <h3 className='text-xl font-bold text-white mb-4'>
            AI & Machine Learning
          </h3>""

          <p className='text-gray-300'>
            Cutting-edge artificial intelligence solutions for business
            automation and insights.
          </p>

          <p className='text-gray-300'>
            Advanced security solutions with zero-trust architecture and threat
            detection.
          </p>

          <p className='text-gray-300'>
            Scalable cloud infrastructure and automated deployment solutions.

          </p>
        </div>
      </div>
    </div>
  </div>
);


    <Router>
      <div className=&apos;min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light&apos;>&apos;


        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pricing" element={<ComprehensivePricing2027 />} />

              {/* Services routes */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/pricing" element={<ServicesPricingPage />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaasServicesPage />} />


              {/* Support routes */}
              <Route path="/support" element={<Support />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<SystemStatus />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Documentation routes */}
              <Route path="/docs" element={<Documentation />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              <Route path="/research" element={<Research />} />

              {/* Search and categories */}
              <Route path="/search" element={<Search />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/request-quote" element={<RequestQuote />} />

              {/* API Playground */}
              <Route path="/api-playground" element={<ApiPlayground />} />

              {/* Catch-all route for 404 */}
              <Route path="*" element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-zion-cyan mb-4">404 - Page Not Found</h1>
                    <p className="text-zion-slate-light mb-6">The page you're looking for doesn't exist.</p>
                    <a href="/" className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>

      </div>
    </Router>
  ) }


export default App;





