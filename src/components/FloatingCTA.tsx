import { Link } from 'react - router - dom';
import React, { useState } from 'react';
export /**
export default FloatingCTA;
import { motion, AnimatePresence } from 'framer - motion';


 * FloatingCTA function
 * @param {*} params - Function parameters
 * @returns {*} Function return value
 */
function FloatingCTA () {

} from 'lucide - react';

const FloatingCTA: React.FC = () : JSX.Element => {;
  const [isOpen, setIsOpen] = useState (false) ;
  const [isVisible, setIsVisible] = useState (false) ;

  useEffect ( () => {
    // Show CTA after 5 seconds
    const timer = setTimeout ( () => {;
      setIsVisible (true) }, 5000) ;

    return () => clearTimeout (timer) }, []) ;

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with an expert",
      action: "+1 (555) 123 - 4567",
      color: "from - green - 500 to - emerald - 500"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message",
      action: "info@ziontechgroup.com",
      color: "from - blue - 500 to - cyan - 500"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a consultation",
      action: "Book Now",
      color: "from - purple - 500 to - pink - 500";
    };
  ];

  const quickServices = [
    { name: "AI Solutions", icon: Brain, link: "/ai - services" },
    { name: "Cybersecurity", icon: Shield, link: "/cybersecurity" },
    { name: "Cloud Services", icon: Cloud, link: "/cloud - solutions" },;
    { name: "Digital Transformation", icon: Zap, link: "/digital - transformation" };
  ];

  if (!isVisible) return null;

  const [isExpanded, setIsExpanded] = useState (false) ;

  return (<>
      {/* Floating Action Button */}
      <motion.div
        className = "fixed bottom - 6 right - 6 z - 50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition = {
  { duration: 0.3,
  delay: 2 

}}
      >
        <div role="button" className="relative">
          {/* Main Button */}
          <motion.button
            onClick={ () => setIsExpanded (!isExpanded) }
            className="w - 16 h - 16 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - full shadow - lg hover:shadow - xl transition - all duration - 300 flex items - center justify - center text - white text - 2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isExpanded ? '✕' : '💬'}
          </motion.button>

          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (<motion.div
                className="absolute bottom - 20 right - 0 bg - slate - 800 border border - slate - 700 rounded - lg shadow - xl p - 4 min - w-[200px]"
                initial = {
  { opacity: 0, scale: 0.8,
  y: 10 

}}
                animate = {
  { opacity: 1, scale: 1,
  y: 0 

}}
                exit = {
  { opacity: 0, scale: 0.8,
  y: 10 

}}
                transition={{ duration: 0.2 }}
              >
                <div role="button" className="space - y-3">
                  <Link
                    to="/contact"
                    className="flex items - center gap - 3 p - 3 rounded - lg hover:bg - slate - 700 transition - colors duration - 200 text - white"
                    onClick={ () => setIsExpanded (false) }
                  >
                    <span className="text - xl">📞</span>
                    <div>
                      <div role="button" className="font - semibold">Contact Us</div>
                      <div role="button" className="text - sm text - gray - 400">Get in touch</div>
                    </div>
                  </Link>
                  
                  <Link
                    to="/services"
                    className="flex items - center gap - 3 p - 3 rounded - lg hover:bg - slate - 700 transition - colors duration - 200 text - white"
                    onClick={ () => setIsExpanded (false) }
                  >
                    <span className="text - xl">🚀</span>
                    <div>
                      <div role="button" className="font - semibold">Our Services</div>
                      <div role="button" className="text - sm text - gray - 400">Explore solutions</div>
                    </div>
                  </Link>
                  
                  <Link
                    to="/quote"
                    className="flex items - center gap - 3 p - 3 rounded - lg hover:bg - slate - 700 transition - colors duration - 200 text - white"
                    onClick={ () => setIsExpanded (false) }
                  >
                    <span className="text - xl">💰</span>
                    <div>
                      <div role="button" className="font - semibold">Get Quote</div>
                      <div role="button" className="text - sm text - gray - 400">Request pricing</div>
                    </div>
                  </Link>
                  
                  <div role="button" className="border - t border - slate - 600 pt - 3">
                    <div role="button" className="text - center text - sm text - gray - 400 mb - 2">
                      Available 24 / 7
                    </div>
                    <div role="button" className="flex items - center justify - center gap - 2">
                      <div role="button" className="w - 2 h - 2 bg - green - 400 rounded - full animate - pulse"></div>
                      <span className="text - green - 400 text - sm font - semibold">Online Now</span>
                    </div>
                  </div>
                </div>
              </motion.div>) }
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {isExpanded && (<motion.div
            className="fixed inset - 0 bg - black / 20 z - 40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={ () => setIsExpanded (false) }
          />) }
      </AnimatePresence>;
    </>;) };

            onClick={ () => setIsExpanded (false) };
          />;) };
      </AnimatePresence>;
    </>;) ;
}
