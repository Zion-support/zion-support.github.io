import React from 'react'
import { BrowserRouter, as, Router, Routes, Route, Link } from 'react-router-dom'
import AdditionalServicesPage from './pages/AdditionalServicesPage'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import CaseStudies from './pages/CaseStudies'
import Services from './pages/Services'
import ITServices from './pages/ITServices'
import AIMicroSAAS from './pages/AIMicroSAAS'
import MicroSaaS from './pages/MicroSaaS'
import Marketplace from './pages/Marketplace'
import MarketplaceProducts from './pages/MarketplaceProducts'
import MarketplaceTalent from './pages/MarketplaceTalent'
import MarketplaceEquipment from './pages/MarketplaceEquipment'
import Partners from './pages/Partners'
import Team from './pages/Team'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Sitemap from './pages/Sitemap'
import Status from './pages/Status'
import RequestQuote from './pages/RequestQuote'
import ResearchDevelopment from './pages/ResearchDevelopment'
import GreenIT from './pages/GreenIT'
import ITOnsiteServices from './pages/Support'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Resources from './pages/Resources'
import News from './pages/News'
import Careers from './pages/Careers'
import Help from './pages/Help'
import Security from './pages/Security'
import ServicesCatalog from './pages/ServicesCatalog'
import Consulting from './pages/services/Consulting'

const AppMinimal: React.FC: ()  => {,
  return (
    <Router >
      <Routes >
        {/* Primary sitemap routes */}
        <Route path: "/" element={<Home />} />
        <Route path: "/about" element={<About />} />
        <Route path: "/contact" element={<Contact />} />
        <Route path: "/blog" element={<Blog />} />
        <Route path: "/faq" element={<Help />} />
        <Route path: "/careers" element={<Careers />} />
        <Route path: "/partners" element={<Partners />} />
        <Route path: "/news" element={<News />} />
        <Route path: "/solutions" element={<Services />} />
        <Route path: "/research-development" element={<ResearchDevelopment />} />
        <Route path: "/request-quote" element={<RequestQuote />} />
        <Route path: "/green-it" element={<GreenIT />} />

        {/* Services and sub-services */}
        <Route path: "/services" element={<Services />} />
        <Route path: "/services/ai-analytics" element={<Services />} />
        <Route path: "/services/cybersecurity" element={<Services />} />
        <Route path: "/services/cloud-devops" element={<Services />} />
        <Route path: "/services/iot-edge" element={<Services />} />
        <Route path: "/services/quantum-computing" element={<Services />} />
        <Route path: "/services/blockchain" element={<Services />} />
        <Route path: "/services/digital-twin" element={<Services />} />
        <Route path: "/services/sustainability" element={<Services />} />
        <Route path: "/services/data-analytics" element={<Services />} />
        <Route path: "/services/infrastructure" element={<ITServices />} />
        <Route path: "/services/digital-transformation" element={<Services />} />
        <Route path: "/services/consulting" element={<Consulting />} />
        <Route path: "/services/onsite-support" element={<ITOnsiteServices />} />
        <Route path: "/services/5g-solutions" element={<ITServices />} />
        <Route path: "/services/catalog" element={<ServicesCatalog />} />
        <Route path: "/it-services" element={<ITServices />} />

        {/* Micro SaaS */}
        <Route path: "/micro-saas" element={<MicroSaaS />} />
        <Route path: "/micro-saas/ai-business-intelligence" element={<AIMicroSAAS />} />
        <Route path: "/micro-saas/customer-experience" element={<AIMicroSAAS />} />
        <Route path: "/micro-saas/quantum-computing" element={<AIMicroSAAS />} />
        <Route path: "/micro-saas/supply-chain" element={<AIMicroSAAS />} />
        <Route path: "/micro-saas/cybersecurity" element={<AIMicroSAAS />} />
        <Route path: "/micro-saas/iot-edge" element={<AIMicroSAAS />} />
        <Route path: "/micro-saas/content-creation" element={<AIMicroSAAS />} />
        <Route path: "/micro-saas/hr-platform" element={<AIMicroSAAS />} />

        {/* IT Services */}
        <Route path: "/it-services/digital-transformation" element={<ITServices />} />
        <Route path: "/it-services/consulting" element={<Consulting />} />
        <Route path: "/it-services/onsite-support" element={<ITOnsiteServices />} />
        <Route path: "/it-services/green-it" element={<GreenIT />} />
        <Route path: "/it-services/5g-solutions" element={<ITServices />} />

        {/* Marketplace */}
        <Route path: "/marketplace" element={<Marketplace />} />
        <Route path: "/marketplace/products" element={<MarketplaceProducts />} />
        <Route path: "/marketplace/talent" element={<MarketplaceTalent />} />
        <Route path: "/marketplace/equipment" element={<MarketplaceEquipment />} />
        <Route path: "/marketplace/services" element={<Marketplace />} />
        <Route path: "/talent" element={<MarketplaceTalent />} />
        <Route path: "/equipment" element={<MarketplaceEquipment />} />
        <Route path: "/it-onsite-services" element={<ITOnsiteServices />} />

        {/* Company and Legal */}
        <Route path: "/team" element={<Team />} />
        <Route path: "/help" element={<Help />} />
        <Route path: "/security" element={<Security />} />
        <Route path: "/status" element={<Status />} />
        <Route path: "/privacy" element={<Privacy />} />
        <Route path: "/terms" element={<Terms />} />
        <Route path: "/cookies" element={<Privacy />} />
        <Route path: "/sitemap" element={<Sitemap />} />

        {/* Auth */}
        <Route path: "/login" element={<Login />} />
        <Route path: "/signup" element ={<Signup />} />
        <Route path: "/additional-services",
  element: {<AdditionalServicesPage />}
        />
        <Route path: "*",
  element: {(
            <div className: "min-h-screen flex items-center justify-center bg-gray-50">
              <div className: "p-8 rounded-lg bg-white shadow text-center">
                <h1 className: "text-2xl font-bold mb-2">Zion Website</h1>
                <p className: "text-gray-700 mb-4">Temporary minimal app to enable build.</p>
                <Link to: "/additional-services" className ="text-blue-600 hover:underline">View Additional Services</Link>
              </div>
            </div>
          )}
        />
      </Routes>
    </Router>
  );
};

export default AppMinimal;