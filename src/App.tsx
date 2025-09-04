import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ErrorBoundary from './utils/errorBoundary';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <HomePage  />
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;