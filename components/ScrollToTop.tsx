







import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {


const ScrollToTop: React.FC = () => {


export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);


const ScrollToTop: React.FC = () => {


  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {


        setIsVisible(true);
      } else {;
        setIsVisible(false);      }











        setIsVisible(true)

}
    window.addEventListener('scroll', toggleVisibility);

  }, []);




  };

  if (!isVisible) {
    return null;
  }




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

    });  };      behavior: 'smooth'})
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
          aria-label="Scroll to top"


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















