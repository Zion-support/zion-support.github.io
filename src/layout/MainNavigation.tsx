
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface MainNavigationProps {
  onNavigate?: () => void;
}

export function MainNavigation({ onNavigate }: MainNavigationProps) {
  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <nav className="space-y-4">
      {/* Main Navigation Links */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
          Main Pages
        </h3>
        
        <Link
          to="/"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Home</span>
        </Link>
        
        <Link
          to="/about"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>About Us</span>
        </Link>
        
        <Link
          to="/services"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Services</span>
        </Link>
        
        <Link
          to="/case-studies"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Case Studies</span>
        </Link>
        
        <Link
          to="/careers"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Careers</span>
        </Link>
        
        <Link
          to="/news"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>News</span>
        </Link>
        
        <Link
          to="/events"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Events</span>
        </Link>
        
        <Link
          to="/contact"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Contact</span>
        </Link>
      </div>

      {/* Service Categories */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
          Services
        </h3>
        
        <Link
          to="/services#ai-ml"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>AI & Machine Learning</span>
        </Link>
        
        <Link
          to="/services#cybersecurity"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Cybersecurity</span>
        </Link>
        
        <Link
          to="/services#cloud"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Cloud Infrastructure</span>
        </Link>
        
        <Link
          to="/services#digital"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Digital Transformation</span>
        </Link>
        
        <Link
          to="/services#consulting"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Technology Consulting</span>
        </Link>
      </div>

      {/* Legal & Support */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
          Legal & Support
        </h3>
        
        <Link
          to="/privacy"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Privacy Policy</span>
        </Link>
        
        <Link
          to="/terms"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
          onClick={handleNavigate}
        >
          <span>Terms of Service</span>
        </Link>
        
        <a
          href="/sitemap"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
        >
          <span>Sitemap</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* External Resources */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
          Resources
        </h3>
        
        <a
          href="https://blog.ziontechgroup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
        >
          <span>Blog</span>
          <ExternalLink className="w-4 h-4" />
        </a>
        
        <a
          href="https://docs.ziontechgroup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
        >
          <span>Documentation</span>
          <ExternalLink className="w-4 h-4" />
        </a>
        
        <a
          href="https://support.ziontechgroup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
        >
          <span>Support Center</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
