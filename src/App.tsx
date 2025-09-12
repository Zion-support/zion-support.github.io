<<<<<<< HEAD
import React from 'react'
import ServiceCard from './components/ServiceCard'
import FeaturedContent from './components/FeaturedContent'
import TestimonialCarousel from './components/TestimonialCarousel'
import FaqSection from './components/FaqSection'

function App() {
  const services = [
    {
      title: 'AI Automation',
      description: 'Streamline operations with intelligent workflows and autonomous agents.',
      icon: '🤖',
      features: [
        'Process automation with LLMs',
        'Agent orchestration',
        'Human-in-the-loop review'
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Reliable, scalable infrastructure with CI/CD and IaC best practices.',
      icon: '☁️',
      features: [
        'Kubernetes & serverless',
        'Observability & SRE',
        'Cost optimization'
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Defense-in-depth security to protect apps, data, and customers.',
      icon: '🛡️',
      features: [
        'Zero-trust frameworks',
        'Threat detection & response',
        'Compliance and audits'
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Modern data stacks with real-time insights and BI dashboards.',
      icon: '📊',
      features: [
        'ETL/ELT pipelines',
        'Semantic layers',
        'Decision intelligence'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Zion Tech Group</h1>
          <p className="mt-2 text-gray-600 text-lg">AI & Technology Solutions</p>
        </div>
      </header>

      <main>
        {/* Featured Content */}
        <FeaturedContent />
        {/* Services */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What We Do</h2>
              <p className="mt-3 text-gray-600">Practical innovation that moves your business forward.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <ServiceCard key={idx} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialCarousel />

        {/* FAQ */}
        <FaqSection />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
      </footer>
    </div>
  )
}

export default App
=======
import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/loading-spinner";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";

// Lazy load only the working pages
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <div className="App">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as components are fixed */}
          </Routes>
        </Suspense>
        
        <FloatingCTA />
        <Footer />
        
        <Toaster />
        <SonnerToaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
>>>>>>> origin/ziontechgroup-improvements
