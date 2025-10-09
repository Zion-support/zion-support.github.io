'use client';


interface MicroSAASCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
    price: string;
    features: string[];
    benefits: string[];
    marketPrice?: string;
    category: string;
    technologies: string[];
    contactInfo: string;
    link?: string;
    popular?: boolean;
  }
}

const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ service }) => {
  return (
    <div>
      {service.popular && (
        <div>
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      
      <div>
        <div className="text-4xl mb-3">{service.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
        
        <div>
          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
          {service.marketPrice && (
            <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
          )}
        </div>
        <div>
          <span className="bg-gray-800 px-2 py-1 rounded">{service.category}</span>
        </div>
      </div>
      <div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center text-xs text-gray-300">
                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-center text-xs text-gray-300">
                <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-2">Technologies:</div>
          <div>
            {service.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <a
            href={service.link || 'mailto:kleber@ziontechgroup.com'}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center text-sm font-medium"
          >Get Started<ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <p className="text-xs text-gray-400 mt-2 text-center">{service.contactInfo}</p>
        </div>
      </div>
    </div>);
}
export default MicroSAASCard