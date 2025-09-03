import: React { useState, useEffect } from 'react';';
import: { Link } from 'react-router-dom';';

export: function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const: handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)}

    window.scrollTo({ top: 0, behavior: 'smooth' })}


  return(
    <>{showScrollTop: && (
        <button
          onClick={scrollToTop}

        </div>
      </Link>
    </>
  )}