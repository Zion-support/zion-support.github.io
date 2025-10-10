#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Creating minimal working build...');

// Create a minimal working App.tsx
const minimalApp = `'use client';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';

// Minimal components
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-6">Zion Tech Group</h1>
      <p className="text-xl text-cyan-400 mb-8">Advanced AI and IT Solutions</p>
      <p className="text-gray-300 max-w-4xl mx-auto">
        Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
      </p>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
      <p className="text-xl text-cyan-400 mb-8">Innovation in Technology</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
      <p className="text-xl text-cyan-400 mb-8">Get in Touch</p>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
      <p className="text-xl text-cyan-400 mb-8">AI and IT Solutions</p>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen">
            <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

App.displayName = 'App';
export default App;
`;

// Create a minimal ErrorBoundary
const minimalErrorBoundary = `'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-300">Please refresh the page and try again</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
`;

try {
  // Write minimal App.tsx
  fs.writeFileSync('/workspace/App.tsx', minimalApp);
  console.log('✅ Created minimal App.tsx');
  
  // Write minimal ErrorBoundary
  fs.writeFileSync('/workspace/app/components/ErrorBoundary.tsx', minimalErrorBoundary);
  console.log('✅ Created minimal ErrorBoundary.tsx');
  
  // Create a minimal main.tsx
  const minimalMain = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;
  
  fs.writeFileSync('/workspace/main.tsx', minimalMain);
  console.log('✅ Created minimal main.tsx');
  
  // Create a minimal index.css
  const minimalCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
  
  fs.writeFileSync('/workspace/index.css', minimalCSS);
  console.log('✅ Created minimal index.css');
  
  console.log('🎉 Minimal working build created!');
  
} catch (error) {
  console.error('❌ Error creating minimal build:', error.message);
  process.exit(1);
}