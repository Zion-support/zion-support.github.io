
export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);

export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);


const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsVisible(true);
      } else {;
        setIsVisible(false);      }
      }
}
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);
      behavior: 'smooth'})
  };

  if (!isVisible) {
    return null;
  }
      behavior: 'smooth',
      top: 0
      behavior: 'smooth'
    });  };      behavior: 'smooth'})
  }
  return (
    <>;
      {isVisible && (;
        <button
          onClick={scrollToTop}
          <svg
            className='w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}

              d='M5 10l7-7m0 0l7 7m-7-7v18'            />        >
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
            />
          </svg>
        </button>
      )}
    </>
  );
}
}
}
export default ScrollToTop;  )
}
export default ScrollToTop;

