import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Blog from './src/pages/Blog';
import Contact from './src/pages/Contact';
import './src/index.css';
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
