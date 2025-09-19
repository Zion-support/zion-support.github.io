import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zion Tech Group</h1>
        <p>Revolutionary AI & Technology Solutions</p>
        <div className="hero-section">
          <h2>Transform Your Business with Cutting-Edge Technology</h2>
          <p>Leading provider of AI, quantum computing, space technology, and enterprise IT solutions.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </header>
      
      <main>
        <section className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI & Autonomous Systems</h3>
              <p>Advanced AI platforms and intelligent automation solutions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚛️</div>
              <h3>Quantum Computing</h3>
              <p>Next-generation quantum computing solutions for complex problems.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Space Technology</h3>
              <p>Satellite systems and advanced aerospace solutions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Enterprise IT</h3>
              <p>Infrastructure management and digital transformation services.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;