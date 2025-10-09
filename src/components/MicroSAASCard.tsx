import React from 'react';
interface MicroSAASCardProps {
  <MicroSAASCardProps> = ({ service }) => {<MicroSAASCardProps> = () => {
  return (
    <div className="microsaascard">
      {}
          <div>Coming Soon<div>
  )
          <div className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
      {service.popular && ()}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
<span>
      )}
      <div className="text-center mb-4">
        <div className="text-4xl mb-3">{service.icon}<div>
        <h3 className="text-xl font-bold text-white mb-2">{service.title}<h3>
        <p className="text-gray-300 text-sm mb-4">{service.description}<p>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-cyan-400">{service.price}<span>
          {service.marketPrice && ()}
          <span className="text-sm text-gray-500 line-through">{service.marketPrice}<span>
        <div>
        <div className="text-xs text-gray-400 mb-4">
          <span className="bg-gray-800 px-2 py-1 rounded">{service.category}<span>
      <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Features:<h4>
          <ul className="space-y-1">
            {service.features.slice(0, 4).map((feature, index) => ()}
          <li key={index} className="flex items-center text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                {feature}
              <li>
            ))}
          <ul>
          <h4 className="text-sm font-semibold text-white mb-2">Benefits:<h4>
            {service.benefits.slice(0, 3).map((benefit, index) => ()}
                <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                {benefit}
        <div className="pt-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">Technologies:<div>
          <div className="flex flex-wrap gap-1">
            {service.technologies.slice(0, 3).map((tech, index) => ()}
          <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                {tech}
        <div className="pt-4">
          <a
            href={service.link || 'mailto:kleber@ziontechgroup.com'}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm font-medium"
<ArrowRight className="w-4 h-4 ml-2" />
          <a>
          <p className="text-xs text-gray-400 mt-2 text-center">{service.contactInfo}<p>
  );
};
export default MicroSAASCard;