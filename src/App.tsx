import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

// Lazy load only the pages that actually exist and work
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Team = React.lazy(() => import('./pages/Team'));
const News = React.lazy(() => import('./pages/News'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Status = React.lazy(() => import('./pages/Status'));
const Training = React.lazy(() => import('./pages/Training'));
const Community = React.lazy(() => import('./pages/Community'));
const Insights = React.lazy(() => import('./pages/Insights'));
const Support = React.lazy(() => import('./pages/Support'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-cyan"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-zion-slate-dark text-zion-slate-light">
        <AppHeader />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              <Route path="/community" element={<Community />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/support" element={<Support />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              
              {/* Catch all route for 404 */}
              <Route path="*" element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-zion-cyan mb-4">404</h1>
                    <p className="text-xl text-zion-slate-light mb-8">Page not found</p>
                    <a href="/" className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan/80 transition-colors">
                      Go Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;