<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './src/components/ErrorBoundary';
import Header from './src/components/Header';
import Sidebar from './src/components/layout/Sidebar';
import Footer from './src/components/Footer';
import HomePage from './src/pages/Home';
import AboutPage from './src/pages/About';
import ContactPage from './src/pages/Contact';
import ServicesPage from './src/pages/Services';
import PricingPage from './src/pages/Pricing';
=======
import React, { JSX } from 'react';

>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27

<<<<<<< HEAD
export default function App() {
=======
export default function App(): React.JSX.Element {
=======
import React, { JSX } from 'react',

export default function App(): JSX.Element {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
  return (
    <main>
      <h1>Hello App</h1>
    </main>
  );
}