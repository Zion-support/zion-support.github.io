import React from 'react';

export const LanguageSelector: React.FC = () => {
  return (
    <select className="bg-transparent border border-gray-300 rounded px-2 py-1">
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
    </select>
  );
};