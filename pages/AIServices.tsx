import React from 'react';

      <div className="container mx-auto px-4 py-16>
        <div className=text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4>
            AI Services
          </h1>
          <p className=text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16>
          {aiServices.map((service, index) => (
            <div key={index} className=bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-blue-600 mb-4 />
              <h3 className=text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4>{service.description}</p>
              <ul className=space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700>
                    <CheckCircle className=w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16>
          {stats.map((stat, index) => (
            <div key={index} className=text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2>{stat.number}</div>
              <div className=text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center>
          <button className=bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}