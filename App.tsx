<<<<<<< HEAD
<<<<<<< HEAD
import React, { JSX } from 'react';
<<<<<<< HEAD
=======
import React, { JSX } from 'react',
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { JSX } from 'react',
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

export default function App(): JSX.Element {
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
import React, { JSX } from 'react';

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

export default function App() {
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  return (
<<<<<<< HEAD
    <main>
      <h1>Hello App</h1>
    </main>
=======
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
<<<<<<< HEAD
    </ErrorBoundary>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  );
}
=======
    </ErrorBoundary>;
  );
}
=======
import React, { JSX } from 'react';

export default function App(): JSX.Element {
  return (
    <main>
      <h1>Hello App</h1>
    </main>
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
