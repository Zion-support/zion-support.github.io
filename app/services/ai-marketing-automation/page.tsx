import React from 'react';'
import Link from 'next/link';

      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>"
      <p className="text-gray-600 mb-4">{description}</p>"
      <ul className="space-y-2">
        {benefits.map((benefit, index) => ("
          <li key={index} className="text-sm text-gray-600 flex items-center">"
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}


      {popular && ("
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular;
          </span>
        </div>
      )}"
      <div className="text-center mb-6">"
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>"
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}"
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>"
        <p className="text-gray-600">{description}</p>
      </div>"
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => ("
          <li key={index} className="flex items-center">"
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">"
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>"
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a"
        href="mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${}
          popular'
            ? 'bg-blue-600 text-white hover:bg-blue-700''
            : 'bg-gray-900 text-white hover:bg-gray-800'`
        }`}
      >
        Get Started;
      </a>
    </div>
  );
}


    </div>
  );
}'"`