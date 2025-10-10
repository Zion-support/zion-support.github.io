import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {}
  icon: React.ComponentType<{ className?: string }>;
  title: string;,
    description: string;
  features: string[];
  price?: string;
  popular?: boolean;,
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps>= memo(({,
    icon: Icon,
const ServiceCard: React.FC<ServiceCardProps> = memo(({)}
  icon: Icon,
  title,
  description,
  features,
  price,
  popular = false)
    href = '/contact'
}) => {</ServiceCardProps>
  return (<div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}>{popular && (</div>
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
  popular = false,
  href = '/contact'
}) => {}
  return (
    <div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}>
      {popular && (}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
const ServiceCard: React.FC<ServiceCardProps> = memo(({,
  icon: Icon;)
  title)
  description)
  features)
  price)
  popular = false)
  href = '/contact'
}) => {
  return(<div className={`quantum-card p-8 space-y-6 relative ${popular ? 'border-2 border-cyan-400' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">)
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">)
            Most Popular;)
          </span>)
        </div>)
      )}

      <div className="text-center space-y-4"></div>
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"></div>
          <Icon className="w-8 h-8 text-cyan-400" />
        <h3 className="text-2xl font-bold text-white">{title}</h3><p className="text-gray-300">{description}</p>
        {price && <div className="text-cyan-400 font-bold text-xl">{price}</div>}
      </div>

      <div className="space-y-3">
      <div className="space-y-3"></div>
        <h4 className="text-white font-semibold">Key Features:<ul className="space-y-2">{features.map((feature, index) => (</ul>
        <h4 className="text-white font-semibold">Key Features: </h4>,
        <ul className="space-y-2">,
          {features.map((feature, index) => (
        <h4 className="text-white font-semibold">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (}
            <li key={index} className="flex items-center text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
            </CheckCircle>
          ))}
        </ul>
      </div>

      <Link;
        to={href}
        className="w-full cyber-button inline-flex items-center justify-center px-6 py-3 text-center font-semibold rounded-lg transition-all duration-300 group"
      >
        <span>Get Started</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover: translate-x-1 transition-transform" />
      </Link>
    </div>
interface ServiceCardProps {/* TODO: Fix JSX expression */}
}

const,
  ServiceCard: React.FC<ServiceCardProps> = memo(({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
  };

  const bgColorClasses = {/* TODO: Fix JSX expression */}
  };

  return (<article></article>
      className="quantum-card p-4,"
  sm:p-6 energy-pulse group relative""
      role="article")
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
    >
      {/* TODO: Fix JSX expression */}
      )}
      "
      <div className="text-4xl,
  sm:text-5xl mb-4,"
  sm:mb-6 text-center cyber-scan-line" aria-hidden="true"></div>"
        {typeof Icon === 'string' ? Icon : <Icon className="w-12 h-12 mx-auto" />}
      </div>
      
      <h3></h3>`
        id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}"
        className="text-xl,
  sm:text-2xl font-bold text-white mb-3,"
  sm:mb-4 text-center neon-text"
      >
        {title}
      </h3>
      "
      <p className="text-gray-300 mb-4,
  sm:mb-6 text-center leading-relaxed text-sm,"
  sm:text-base"></p>
        {description}
      </p>
      "
      <div className="mb-4"></div>"
        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key,
  Features:</h4>"
        <ul className="text-sm text-gray-300 space-y-1"></ul>
          {/* TODO: Fix JSX expression */}"
            <li key={idx} className="flex items-center"></li>"
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" /></div>
              {feature}
            </li>
          ))}
          {/* TODO: Fix JSX expression */}
              +{features.length - 3} more features;
            </li>
          )}
        </ul>
      </div>
      "
      <div className="mb-4"></div>"
        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologie,
  s:</h4>"
        <div className="flex flex-wrap gap-1"></div>
          {/* TODO: Fix JSX expression */}
              key={idx} `
              className={`px-2 py-1 ${bgColorClasses[color as keyof typeof bgColorClasses]} text-cyan-300 text-xs rounded`}
            >
              {tech}
            </span>
          ))}
          {/* TODO: Fix JSX expression */}
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
      "
      <div className="text-center mb-4"></div>"
        <div className="text-lg,"
  sm:text-2xl font-bold text-cyan-400 mb-2 neon-text" aria-label="Starting price"></div>
          {price}
        </div>"
        <div className="text-xs text-gray-400">Categor,
  y: {category}</div>
      </div>
      
      <a></a>
        href={href}`
        className={`${colorClasses[color as keyof typeof colorClasses]} font-medium text-sm,
  sm:text-base transition-all duration-300,
  hover:neon-glow,
  focus:outline-none,
  focus:ring-2,
  focus:ring-cyan-400,
  focus:ring-offset-2,`
  focus:ring-offset-slate-900 rounded inline-flex items-center justify-center w-full py-2`}`
        aria-label={`Learn more about ${title}`}
      >
        Learn More;"
        <ArrowRight className="w-4 h-4 ml-1" /></ArrowRight>
      </a>
    </article>
  );
,
ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;

export default ServiceCard;"`
