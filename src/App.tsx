import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

// Import all page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Solutions from './pages/Solutions'
import ResearchDevelopment from './pages/ResearchDevelopment'
import CaseStudies from './pages/CaseStudies'
import News from './pages/News'
import Events from './pages/Events'
import Services from './pages/Services'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

// Service-specific pages
import AI from './pages/services/AI'
import Cloud from './pages/services/Cloud'
import Cybersecurity from './pages/services/Cybersecurity'
import DigitalTransformation from './pages/services/DigitalTransformation'
import QuantumComputing from './pages/services/QuantumComputing'

// Enterprise pages
// import Enterprise from './pages/Enterprise'
// import Partners from './pages/Partners'
// import Team from './pages/Team'
// import Mission from './pages/Mission'
// import Leadership from './pages/Leadership'

// Resource pages
// import Resources from './pages/Resources'
// import Blog from './pages/Blog'
// import HelpCenter from './pages/HelpCenter'
// import WhitePapers from './pages/WhitePapers'
// import Tutorials from './pages/Tutorials'
// import Webinars from './pages/Webinars'
// import Training from './pages/Training'

// Marketplace pages
// import Marketplace from './pages/Marketplace'
// import TalentDirectory from './pages/TalentDirectory'
// import Profile from './pages/Profile'

// Admin and dashboard pages
// import Dashboard from './pages/Dashboard'
// import Admin from './pages/Admin'
// import Analytics from './pages/Analytics'

// Auth pages
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pt-20">
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/research-development" element={<ResearchDevelopment />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Service routes */}
            <Route path="/services/ai" element={<AI />} />
            <Route path="/services/cloud" element={<Cloud />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/services/quantum-computing" element={<QuantumComputing />} />
            
            {/* Enterprise routes */}
            {/* <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/team" element={<Team />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/leadership" element={<Leadership />} /> */}
            
            {/* Resource routes */}
            {/* <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/white-papers" element={<WhitePapers />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/training" element={<Training />} /> */}
            
            {/* Marketplace routes */}
            {/* <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/talent" element={<TalentDirectory />} />
            <Route path="/profile" element={<Profile />} /> */}
            
            {/* Dashboard routes */}
            {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/analytics" element={<Analytics />} /> */}
            
            {/* Auth routes */}
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
