

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

import { ChevronUp } from 'lucide-react';
export default function ScrollToTop() {
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
export default function ScrollToTop() {;
  const [isVisible, setIsVisible] = useState(false);
=======


const ScrollToTop: React.FC = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {

      }
    };

    window.addEventListener('scroll', toggleVisibility);

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
=======
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsVisible(true);
      } else {
        setIsVisible(false);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
}
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

=======
    return () => window.removeEventListener('scroll', toggleVisibility)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }, []);
  const scrollToTop = () => {
    window.scrollTo({

=======
origin/main
origin/automation-improvements-final
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
ursor/integrate-build-improve-and-re-verify-8f7d
      top: 0
origin/main
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      behavior: 'smooth'
    });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  };

  if (!isVisible) {
    return null;
  }

      behavior: 'smooth',

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

=======
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
          aria-label="Scroll to top"
        >

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
=======
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default ScrollToTop;  )
}
export default ScrollToTop;

origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

export default ScrollToTop;
export default ScrollToTop;
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
