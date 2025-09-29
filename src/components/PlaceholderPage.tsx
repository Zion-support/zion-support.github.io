import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {description && <p className="text-xl text-gray-300">{description}</p>}
        <p className="text-gray-400 mt-4">This page is under development.</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;