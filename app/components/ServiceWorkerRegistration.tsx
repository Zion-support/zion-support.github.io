'use client';
import { CheckCircle, Phone, Mail, ArrowRight, Helmet } from 'lucide-react';
import React from 'react';
interface ServiceWorkerRegistrationProps {
  className?: string;
  children?: React.ReactNode;
}
const ServiceWorkerRegistration: React.FC<ServiceWorkerRegistrationProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default ServiceWorkerRegistration;
