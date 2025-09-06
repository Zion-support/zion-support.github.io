<<<<<<< HEAD
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onMenuClick={() => {}} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Welcome to Zion Tech Group</h1>
        <p className="text-lg text-center text-foreground/80 mb-12">
          Your partner in advanced technology solutions, driving innovation and efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-secondary mb-4">AI & Automation</h2>
            <p className="text-foreground/70">
              Leverage cutting-edge Artificial Intelligence and automation to streamline your operations and unlock new possibilities.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Software Development</h2>
            <p className="text-foreground/70">
              From custom applications to enterprise-grade solutions, our expert developers build robust and scalable software.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Cloud Solutions</h2>
            <p className="text-foreground/70">
              Migrate, manage, and optimize your infrastructure in the cloud for unparalleled flexibility and performance.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
=======
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

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
  )
>>>>>>> origin/main
}

export default App;
