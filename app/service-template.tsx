<<<<<<< HEAD
import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
=======
import { Star } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

=======
import { ArrowRight } from 'lucide-react';
const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
interface ServiceTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceTemplate({ className = '', children, ...props }: ServiceTemplateProps) {
  return (
    <div className={`servicetemplate-component ${className}`} {...props}>
      {children}
    </div>
  );
}
