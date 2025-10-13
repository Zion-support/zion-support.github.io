<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { ArrowRight } from 'lucide-react';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
import { Menu, X, ArrowRight } from 'lucide-react';
=======
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

interface MobilenavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Mobilenavigation({ className = '', children, ...props }: MobilenavigationProps) {
  return (
    <div className={`mobilenavigation-component ${className}`} {...props}>
      {children}
    </div>
  );
};


}