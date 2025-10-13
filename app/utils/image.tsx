import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ImageProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Image({ className = '', children, ...props }: ImageProps) {
  return (
    <div className={`image-component ${className}`} {...props}>
      {children}
    </div>
  );
}
