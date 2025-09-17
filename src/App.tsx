import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AppRouter from './components/Router';
import './index.css';

export default function App(): React.JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <Navigation />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}