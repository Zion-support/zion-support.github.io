import React, { useState, useEffect } from 'react';
import './App.css';

interface AppState {
  isLoading: boolean;
  error: string | null;
  data: any;
}

export default function App(): React.JSX.Element {
  const [state, setState] = useState<AppState>({
    isLoading: false,
    error: null,
    data: null
  });

  useEffect(() => {
    // Simulate loading data
    setState(prev => ({ ...prev, isLoading: true }));
    
    const timer = setTimeout(() => {
      setState(prev => ({ 
        ...prev, 
        isLoading: false, 
        data: { message: 'Welcome to Zion Tech Group!' }
      }));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleError = (error: string): void => {
    setState(prev => ({ ...prev, error, isLoading: false }));
  };

  if (state.isLoading) {
    return (
      <div className="app-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="app-container">
        <div className="error-message">
          <h2>Error</h2>
          <p>{state.error}</p>
          <button onClick={() => handleError('')}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Zion Tech Group</h1>
        <p>Advanced Technology Solutions</p>
      </header>
      
      <main className="app-main">
        <section className="hero-section">
          <h2>{state.data?.message || 'Welcome!'}</h2>
          <p>Empowering businesses with cutting-edge technology solutions</p>
        </section>
        
        <section className="features-section">
          <div className="feature-grid">
            <div className="feature-card">
              <h3>AI Solutions</h3>
              <p>Advanced artificial intelligence and machine learning services</p>
            </div>
            <div className="feature-card">
              <h3>Cloud Infrastructure</h3>
              <p>Scalable and secure cloud computing solutions</p>
            </div>
            <div className="feature-card">
              <h3>Blockchain Technology</h3>
              <p>Decentralized applications and smart contracts</p>
            </div>
            <div className="feature-card">
              <h3>Cybersecurity</h3>
              <p>Comprehensive security solutions for modern businesses</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
      </footer>
    </div>
  );
}

