import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppHeader } from './layout/AppHeader.jsx'
import { Footer } from './components/Footer.jsx'
import { ChatAssistant } from './components/ChatAssistant.tsx'

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home.tsx"))
const About = lazy(() => import("./pages/About.tsx"))
const Contact = lazy(() => import("./pages/Contact.tsx"))
const BlogPage = lazy(() => import("./pages/BlogPage.tsx"))
const PartnersPage = lazy(() => import("./pages/Partners.tsx"))
const Login = lazy(() => import("./pages/Login.tsx"))
const FAQ = lazy(() => import("./pages/FAQ.tsx"))
const Careers = lazy(() => import("./pages/Careers.tsx"))
const Sitemap = lazy(() => import("./pages/Sitemap.jsx"))
const ComprehensivePricing = lazy(() => import("./pages/ComprehensivePricing2025.tsx"))

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <AppHeader />
        
        <main className="relative">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/pricing" element={<ComprehensivePricing />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  )
}

export default App