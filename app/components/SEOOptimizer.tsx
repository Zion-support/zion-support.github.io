<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      icon: "Cloud"
    },
    {
      title: "Security Solutions",
      description: "Advanced security and compliance",
      icon: "Shield"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your cloud performance",
      icon: "Zap"
    }
  ];
=======
import { Code } from 'lucide-react';
import { Cloud } from 'lucide-react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
interface SEOOptimizerProps {
  children: React.ReactNode;
=======
import React from 'react';

interface SeooptimizerProps {
  className?: string;
  children?: React.ReactNode;
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
}

export default function Seooptimizer({ className = '', children, ...props }: SeooptimizerProps) {
  return (
    <div className={`seooptimizer-component ${className}`} {...props}>
      {children}
    </div>
  );
}
