'use client'
import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  popular?: boolean;
  onClick?: () => void;
  className?: string;
}
;
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  price,
  popular = false,
  onClick,
  className =
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative ${className}`}>``
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"> " <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">"
            Most Popular
          </span>
        </div>);
      <div className="text-center mb-6"> " <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3> " <p className="text-gray-600 mb-4">{description}</p>"
        {price && (
          <div className="text-3xl font-bold text-blue-600 mb-2">}},"
    {price}</div> )" </div>"
      <ul className="space-y-3 mb-6">"
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">}}"
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> " <span className="text-gray-700">{feature}</span> " </li>"
        ));
      </ul>
      {onClick && (
        <button
          onClick={onClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
        >}}
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" /> " </button>)"
    </div>
  );
}
export default ServiceCard;