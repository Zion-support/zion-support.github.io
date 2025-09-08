import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Initialize React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-blue-900 text-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">Zion App</h1>
              <p className="text-blue-200">Build placeholder to restore Netlify deployment.</p>
            </div>
          </div>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;