import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import Layout from './app/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/case-studies" element={<div>Case Studies Page</div>} />
        <Route path="/enterprise" element={<div>Enterprise Page</div>} />
        <Route path="/team" element={<div>Team Page</div>} />
        <Route path="/ai-services" element={<div>AI Services Page</div>} />
        <Route path="/ai-marketing" element={<div>AI Marketing Page</div>} />
        <Route path="/ai-automation" element={<div>AI Automation Page</div>} />
        <Route path="/ai-healthcare" element={<div>AI Healthcare Page</div>} />
        <Route path="/ai-fintech" element={<div>AI Fintech Page</div>} />
        <Route path="/quantum-computing" element={<div>Quantum Computing Page</div>} />
        <Route path="/autonomous-systems" element={<div>Autonomous Systems Page</div>} />
        <Route path="/blockchain-web3" element={<div>Blockchain & Web3 Page</div>} />
        <Route path="/iot-edge-computing" element={<div>IoT & Edge Computing Page</div>} />
        <Route path="/business-intelligence" element={<div>Business Intelligence Page</div>} />
        <Route path="/it-services" element={<div>IT Services Page</div>} />
        <Route path="/cloud-services" element={<div>Cloud Services Page</div>} />
        <Route path="/cybersecurity" element={<div>Cybersecurity Page</div>} />
        <Route path="/micro-saas" element={<div>Micro SAAS Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/privacy" element={<div>Privacy Policy Page</div>} />
        <Route path="/terms" element={<div>Terms of Service Page</div>} />
        <Route path="/sitemap" element={<div>Sitemap Page</div>} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;