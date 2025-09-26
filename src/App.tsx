import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';
// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <div className='App min-h-screen flex flex-col'>
      <Navigation />
      <main className='flex-1'>
        <Suspense fallback={<LoadingSpinner text="Loading page..." />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;