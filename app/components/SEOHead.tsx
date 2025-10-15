import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOHead({ className = '', children }: SEOHeadProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
