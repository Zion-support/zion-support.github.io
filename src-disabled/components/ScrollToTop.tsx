<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
=======
import React, { useEffect, useState } from 'react;
import { ChevronUp } from lucide-react';

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
<<<<<<< HEAD
    };
};
=======
    }


}

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
export default ScrollToTop;