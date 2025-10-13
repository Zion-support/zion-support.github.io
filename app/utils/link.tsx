import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


interface LinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Link({ className = '', children, ...props }: LinkProps) {
  return (
    <div className={`link-component ${className}`} {...props}>
      {children}
    </div>
  );
}
