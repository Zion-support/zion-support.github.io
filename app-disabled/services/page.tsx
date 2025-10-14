import React from 'react';
import { }
  3,;
  Circle,;
  Right,';
  } from 'lucide-react';
;
;
;
const ServicesPage: React.FC = () => {
  const services = [;
    // AI Services;
    {      ico,';
    n: title: 'AI Solutions,';
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.,';
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting],;
      price: Starting at $1,500';
      category: 'AI Services,;
        <title>Services - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive AI and IT services by Zion Tech Group" /></meta>;
      </Helmet>";
      <div className="container mx-auto px-4 py-20"></div>";
        <div className="text-center mb-16"></div>";
          <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>";
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;
            Comprehensive technology services designed to accelerate your digital transformation and drive business growth.;
          </p>;
        </div>;
        ";
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>;
          {services.map((service, index) => (";
}
}
            <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"></div>";
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"></div>;
                {service.icon}
              </div>";
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors"></h3>;
                {service.title}
              </h3>";
              <p className="text-gray-300 mb-6 leading-relaxed"></p>;
                {service.description}
              </p>";
              <ul className="space-y-2"></ul>;
                {
  service.features.map((feature, featureIndex) => (";
}
                  <li key={featureIndex} className="flex items-center text-gray-300"></li>";
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>;
                    {feature}
                  </li>;
                ))}
              </ul>;
";
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"></h3>;
                {service.title}
              </h3>;
              ";
              <p className="text-gray-300 mb-6 leading-relaxed"></p>;
                {service.description}
              </p>;
";
              <div className="mb-6"></div>";
                <div className="flex items-center gap-2 mb-2"></div>";
                  <span className="text-2xl font-bold text-white">{service.price}</span>;
                  {
  service.originalPrice && (";
}
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>;
                  )}
                </div>;
              </div>;
";
              <div className="mb-6"></div>";
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>";
                <ul className="space-y-2"></ul>;
                  {
  service.features.slice(0, 3).map((feature, featureIndex) => (";
}
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>";
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>;
                      {feature}
                    </li>;
                  ))}
                  {
  service.features.length > 3 && (";
                    <li className="text-sm text-gray-400"></li>;
}
                      +{service.features.length - 3} more features;
                    </li>;
                  )}
                </ul>;
              </div>;
              <a;
                href={service.path}";
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg";
              ></a>;
                Learn More;
              </a>;
            </div>;
          ))}
        </div>;
      </div>;
    </div>;
  );
}
'"