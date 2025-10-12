import React from 'react';
import { Brain, Zap, Shield, Globe, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface FuturisticServiceCardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  children,
  className = '',
  title,
  description
}) => {
  return (
    <div className={`enhanced-component ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default FuturisticServiceCard;