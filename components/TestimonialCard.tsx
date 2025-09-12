import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  className?: string;
}

export default function TestimonialCard({ 
  name, 
  role, 
  company, 
  content, 
  className = '' 
}: TestimonialCardProps) {
  return (
    <div className={`bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 ${className}`}>
      <p className="text-white mb-4 italic">"{content}"</p>
      <div className="text-sm">
        <div className="font-semibold text-white">{name}</div>
        <div className="opacity-75 text-white">{role}, {company}</div>
      </div>
    </div>
  );
}