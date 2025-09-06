import React from 'react';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <h1>Welcome to Zion Holdings</h1>
      <p>Technology Solutions for the Future</p>
    </div>
  );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Card from './components/Card';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const Home = () => (
  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold mb-4 animate-fade-in">
          Zion Tech Group
        </h1>
        <p className="text-2xl text-gray-300 mb-8 animate-slide-up">
          Leading AI & Technology Solutions for a Smarter Future
        </p>
        <Button variant="primary" size="large" onClick={() => alert('Learn More!')}>
          Explore Our Services
        </Button>
      </div>

<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="AI Services"
          description="Transform your business with cutting-edge AI solutions."
          icon="✨"
        />
        <ServiceCard
          title="Cybersecurity"
          description="Protect your digital assets with advanced security solutions."
          icon="🔒"
        />
        <ServiceCard
          title="Cloud Infrastructure"
          description="Scale your operations with robust cloud solutions."
          icon="☁️"
        />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Innovation" description="Pioneering the next generation of technology." />
          <Card title="Expertise" description="Team of industry-leading professionals." />
          <Card title="Reliability" description="Trusted solutions for critical operations." />
          <Card title="Scalability" description="Solutions designed to grow with you." />
          <Card title="Security" description="Robust protection for all your data." />
          <Card title="Support" description="24/7 dedicated customer assistance." />
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                      </Routes>
                    </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
=======
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header />
          <div className="main-content">
            <Sidebar />
            <main className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
