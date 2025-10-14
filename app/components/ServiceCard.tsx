import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {href && (
        <a href={href} className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Learn More →
        </a>
      )}
    </div>
  );
}
