import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

export default function TestimonialCard({ 
  quote, 
  author, 
  position, 
  company, 
  image 
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-center mb-6">
        <div className="flex text-yellow-400 text-2xl">
          {'★'.repeat(5)}
        </div>
      </div>
      <blockquote className="text-lg text-gray-700 mb-6 italic">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{position}, {company}</div>
        </div>
      </div>
    </div>
  );
}