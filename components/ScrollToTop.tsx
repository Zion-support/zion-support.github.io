
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

const ScrollToTop: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {

      }
    };

    window.addEventListener('scroll', toggleVisibility);

  }, []);
  const scrollToTop = () => {
    window.scrollTo({

      top: 0

      behavior: 'smooth'
    });

  };

  if (!isVisible) {
    return null;
  }



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
origin/automation-improvements-final
      behavior: 'smooth',
      top: 0
      behavior: 'smooth'
    });  };      behavior: 'smooth'})
  }




  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group'
          aria-label='Scroll to top'





        >




        >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


          <svg
            className='w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}


          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"



};
export default ScrollToTop;  );
};
export default ScrollToTop;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5






>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export default ScrollToTop;  )
}
export default ScrollToTop;


origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

export default ScrollToTop;
export default ScrollToTop;






>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

