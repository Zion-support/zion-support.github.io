import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import About from './pages/About';
import Blog from './pages/Blog';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto px-4 py-20">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-white mb-6">
                  Welcome to Zion Tech Group
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Revolutionary AI and technology solutions for the future
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="/about" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </a>
                  <a href="/blog" className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors">
                    Read Blog
                  </a>
                </div>
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;