import React from 'react'
import ServiceCard from './components/ServiceCard'
import FeaturedContent from './components/FeaturedContent'
import TestimonialCarousel from './components/TestimonialCarousel'
import FaqSection from './components/FaqSection'

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const About = React.lazy(() => import('./pages/AboutPage'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App = () => {
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
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </React.Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
