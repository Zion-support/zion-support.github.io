
import React, { useState, useEffect } from 'react;



const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener(scroll', toggleVisibility);
    return () => window.removeEventListener('scroll, toggleVisibility)
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth'})
  }

return (;
    <>
      {isVisible && (
        <button

=======

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
