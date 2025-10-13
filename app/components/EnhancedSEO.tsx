import React from 'react';
<<<<<<< HEAD
=======
import EnhancedSEO from "../components/EnhancedSEO";
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

interface EnhancedseoProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Enhancedseo({ className = '', children, ...props }: EnhancedseoProps) {
  return (
    <div className={`enhancedseo-component ${className}`} {...props}>
      {children}
    </div>
=======
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Zion Tech Group - Advanced AI & IT Solutions",
  description = "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.",
  keywords = "AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology",
//   canonical
}) => {
  return (
//     <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
//     </Helmet>
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  );
}
