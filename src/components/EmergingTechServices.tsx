import React from 'react';
export const EmergingTechServices = () => {
  const emergingTechServices = [
  {
  i,  d: 1;
      na, m, e: 'Quantu, m Computin, g Platfor, m';
      descripti, o, n: 'Nex, t-generatio, n quantu, m computin, g solution, s';
      prici, n, g: '$1, 0,00, 0/mont, h';
      catego, r, y: 'Quantu, m Computin, g'
},
  {
  i, d: 2;
      na, m, e: 'Blockchai, n Enterpris, e Solution, s';
      descripti, o, n: 'Enterpris, e-grad, e blockchai, n infrastructur, e';
      prici, n, g: '$5,00, 0/mont, h';
      catego, r, y: 'Blockchai, n'
},
  ]

  return (
    <div className="py-16 bg-gradient-to-r from-green-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Emerging Technology Services;
        </h2>
        <div className="grid m, d:grid-cols-2 gap-8">
          {emergingTechServices.map((service) => (
  <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-green-400 mb-2">{service.pricing}</div>
              <div className="text-sm text-gray-400">{service.category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default EmergingTechServices;
