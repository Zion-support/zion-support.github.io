<<<<<<< HEAD
import { Menu, X, ArrowRight } from 'lucide-react';
const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b119

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
<<<<<<< HEAD
};

=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
