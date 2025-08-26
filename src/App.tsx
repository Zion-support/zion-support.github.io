import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

// Import all page components
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Services } from './components/Services'
import { Solutions } from './components/Solutions'
import { Careers } from './components/Careers'
import { News } from './components/News'
import { Partners } from './components/Partners'
import { Privacy } from './components/Privacy'
import { Terms } from './components/Terms'
import { Sitemap } from './components/Sitemap'
import { Status } from './components/Status'
import { Team } from './components/Team'
import { Mission } from './components/Mission'
import { ResearchDevelopment } from './components/ResearchDevelopment'
import { CaseStudies } from './components/CaseStudies'
import { Events } from './components/Events'
import { Resources } from './components/Resources'
import { Blog } from './components/Blog'
import { Pricing } from './components/Pricing'
import { RequestQuote } from './components/RequestQuote'
import { Support } from './components/Support'
import { TalentDirectory } from './components/TalentDirectory'
import { Marketplace } from './components/Marketplace'
import { Enterprise } from './components/Enterprise'
import { Community } from './components/Community'
import { Developer } from './components/Developer'
import { NotFound } from './components/NotFound'

// Import service pages
import { AIServices } from './pages/services/AIServices'
import { CloudDevOps } from './pages/services/CloudDevOps'
import { Cybersecurity } from './pages/services/Cybersecurity'
import { DigitalTransformation } from './pages/services/DigitalTransformation'
import { EnterpriseIT } from './pages/services/EnterpriseIT'
import { GreenIT } from './pages/services/GreenIT'
import { ITInfrastructure } from './pages/services/ITInfrastructure'
import { QuantumComputing } from './pages/services/QuantumComputing'
import { SpaceTech } from './pages/services/SpaceTech'
import { BlockchainWeb3 } from './pages/services/BlockchainWeb3'
import { Consulting } from './pages/services/Consulting'
import { IoTServices } from './pages/services/IoTServices'
import { MicroSAAS } from './pages/services/MicroSAAS'
import { MobileServices } from './pages/services/MobileServices'

// Layout component with header, sidebar, and footer
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Layout><Home /></Layout>} />
      
      {/* Company pages */}
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/mission" element={<Layout><Mission /></Layout>} />
      <Route path="/team" element={<Layout><Team /></Layout>} />
      <Route path="/careers" element={<Layout><Careers /></Layout>} />
      <Route path="/partners" element={<Layout><Partners /></Layout>} />
      <Route path="/news" element={<Layout><News /></Layout>} />
      <Route path="/events" element={<Layout><Events /></Layout>} />
      
      {/* Services pages */}
      <Route path="/services" element={<Layout><Services /></Layout>} />
      <Route path="/services/ai" element={<Layout><AIServices /></Layout>} />
      <Route path="/services/cloud" element={<Layout><CloudDevOps /></Layout>} />
      <Route path="/services/cybersecurity" element={<Layout><Cybersecurity /></Layout>} />
      <Route path="/services/infrastructure" element={<Layout><ITInfrastructure /></Layout>} />
      <Route path="/services/transformation" element={<Layout><DigitalTransformation /></Layout>} />
      <Route path="/services/consulting" element={<Layout><Consulting /></Layout>} />
      <Route path="/services/quantum" element={<Layout><QuantumComputing /></Layout>} />
      <Route path="/services/space-tech" element={<Layout><SpaceTech /></Layout>} />
      <Route path="/services/blockchain" element={<Layout><BlockchainWeb3 /></Layout>} />
      <Route path="/services/iot" element={<Layout><IoTServices /></Layout>} />
      <Route path="/services/micro-saas" element={<Layout><MicroSAAS /></Layout>} />
      <Route path="/services/mobile" element={<Layout><MobileServices /></Layout>} />
      <Route path="/services/green-it" element={<Layout><GreenIT /></Layout>} />
      <Route path="/services/enterprise-it" element={<Layout><EnterpriseIT /></Layout>} />
      
      {/* Solutions pages */}
      <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
      <Route path="/enterprise" element={<Layout><Enterprise /></Layout>} />
      <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
      <Route path="/research-development" element={<Layout><ResearchDevelopment /></Layout>} />
      
      {/* Marketplace and Talent */}
      <Route path="/marketplace" element={<Layout><Marketplace /></Layout>} />
      <Route path="/talent" element={<Layout><TalentDirectory /></Layout>} />
      
      {/* Resources and Content */}
      <Route path="/resources" element={<Layout><Resources /></Layout>} />
      <Route path="/blog" element={<Layout><Blog /></Layout>} />
      <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
      
      {/* Community and Developer */}
      <Route path="/community" element={<Layout><Community /></Layout>} />
      <Route path="/developer" element={<Layout><Developer /></Layout>} />
      
      {/* Support and Contact */}
      <Route path="/support" element={<Layout><Support /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/request-quote" element={<Layout><RequestQuote /></Layout>} />
      
      {/* Legal and Utility pages */}
      <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
      <Route path="/terms" element={<Layout><Terms /></Layout>} />
      <Route path="/sitemap" element={<Layout><Sitemap /></Layout>} />
      <Route path="/status" element={<Layout><Status /></Layout>} />
      
      {/* 404 page */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  )
}
