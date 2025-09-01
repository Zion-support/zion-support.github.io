import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Import only the essential pages
const Home = React.lazy(() => import('./pages/Home'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
