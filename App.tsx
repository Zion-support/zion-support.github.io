import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./app/layout";

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* App content will be rendered here by the Layout component */}
          </div>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
