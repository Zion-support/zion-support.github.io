import React from 'react';
interface ServiceCardProps {
  <ServiceCardProps> = ({ title, description, icon, className = '' }) => {<ServiceCardProps> = () => {
  return (
    <div className="servicecard">
      {}
    <div>
          <div>Coming Soon<div>
  )
          <article
className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}
      role="article"
<div className="mb-4 text-indigo-600" aria-hidden="true">
          {icon}
      )}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}<h3>
      <p className="text-gray-600">{description}<p>
  );
};
export default ServiceCard;
}