import React from 'react;'
const FuturisticServiceCard = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
