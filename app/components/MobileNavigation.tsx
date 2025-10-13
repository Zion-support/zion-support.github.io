<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import { Menu, X, ArrowRight } from 'lucide-react';
=======
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';

=======
import { ArrowRight } from 'lucide-react';import { Menu, X, ArrowRight } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

interface MobilenavigationProps {
  className?: string;
  children?: React.ReactNode;

  return null;
};

export default function Mobilenavigation({ className = '', children, ...props }: MobilenavigationProps) {
  return (
    <div className={`mobilenavigation-component ${className}`} {...props}>
      {children}
    </div>
  );
};


}