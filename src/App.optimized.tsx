import React, { Suspense, lazy }  from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import './index.css';
import Header from './Header';
import Footer from './Footer';
const Blog = lazy(() => import('./pages/Blog'));
const LoadingSpinner = () => (,
  <div className="flex items-center justify-center min-h-screen">,
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>,
  </div>,
);
function App() {,
  return (,
    <Router>,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">,
        <Header />,
        <main className="flex-1">,
          <Suspense fallback={<LoadingSpinner />}>,
            <Routes>,
              <Route path="/*" element={<Blog />} />,
            </Routes>,
          </Suspense>,
        </main>,
        <Footer />,
      </div>,
    </Router>,
  );
}
export default App;