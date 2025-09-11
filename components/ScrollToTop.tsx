class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';


import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
=======
import { ChevronUp } from 'lucide-react';
origin/main

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {

=======export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);


const ScrollToTop: React.FC = () => {
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {;
        setIsVisible(false);      }







  useEffect__(() => {
    const _toggleVisibility = () => {

      if (window.pageYOffset > 300) {
=======>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsVisible(true);
      } else {
        setIsVisible(false);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
}
    window.addEventListener('scroll', toggleVisibility);

=======
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)




=======
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility)
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setIsVisible(false);      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)

      behavior: 'smooth'
    });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'})
  },

  return (
    <>
      {_isVisible && (
        <button
          onClick={scrollToTop}
          className=&quot;fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group&quot;
          aria-label=&quot;Scroll to top&quot;
        >
          <svg
            className=&quot;w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300&quot;
            fill=&quot;none&quot;
            stroke=&quot;currentColor&quot;
            viewBox=&quot;0 0 24 24&quot;
            xmlns=&quot;http://www.w3.org/2000/svg&quot;
          >
            <path
              strokeLinecap=&quot;round&quot;
              strokeLinejoin=&quot;round&quot;
              strokeWidth={2}
              d=&quot;M5 10l7-7m0 0l7 7m-7-7v18&quot;

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
origin/main

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);

const ScrollToTop: React.FC = () => {
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsVisible(true)
      } else {
        setIsVisible(false)
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
        setIsVisible(true);
      } else {
        setIsVisible(false);      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true)
      } else {
        setIsVisible(false)
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility)
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
        setIsVisible(false);      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);  }, []);        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
origin/main
origin/automation-improvements-final
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
ursor/integrate-build-improve-and-re-verify-8f7d
      top: 0
origin/main
      behavior: 'smooth'
    });
=======
=======

=======
      behavior: 'smooth'})  if (!isVisible) {
    return null;
  }


=======  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}

          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
          aria-label="Scroll to top"
        >


};
export default ScrollToTop;  );
};
export default ScrollToTop;

=======
}
export default ScrollToTop;  )
}
export default ScrollToTop;



;
  );
}
=======}
      behavior: 'smooth',
    });
      behavior: 'smooth'})
  };

export default ScrollToTop;
  )
};

export default ScrollToTop;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
}
==============
}
=======export default ScrollToTop;  )
}
export default ScrollToTop;

origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

export default ScrollToTop;
export default ScrollToTop;

=======
export default ScrollToTop;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
