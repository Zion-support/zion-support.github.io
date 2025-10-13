import React from 'react';
'use client';
interface MicroSAASCardProps {/* TODO: Fix JSX expression */}
<<<<<<< HEAD
  O: Add content,}
}
  servic,
  e: {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  titl,
  e: string,
    descriptio,
  n: string,
    ico,
  n: string,
    pric,
  e: string,,
    feature,
  s: string[],,
    benefit,
  s: string[]
    marketPrice?: string,,
    categor,
  y: string,,
    technologie,
  s: string[],,
    contactInf,
  o: string
    link?: string
    popular?: boolean,
  }
}
const MicroSAASCard: React.FC,
          <MicroSAASCardProps> = ({ service }) => {
    // TODO: Add content
  }
}
const MicroSAASCard: React.FC<MicroSAASCardProps> = () => {
=======
  O: Add content};
};
  servic,
  e: {/* TODO: Fix JSX expression */}
  O: Add content};
};
  titl,
  e: string;
    descriptio,
  n: string;
    ico,
  n: string;
    pric,
  e: string;,
    feature,
  s: string[];,
    benefit,
  s: string[];
    marketPrice?: string;,
    categor,
  y: string;,
    technologie,
  s: string[];,
    contactInf,
  o: string;
    link?: string;
    popular?: boolean}};
;
const MicroSAASCard: React.FC;
          <MicroSAASCardProps> = ({ service }) => {// TODO: Add content}
};
;
const MicroSAASCard: React.FC<MicroSAASCardProps> = () => {
return (
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
          <div>Coming Soon</div>
  )
          <div className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
<<<<<<< HEAD
=======
);
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      {service.popular && ()}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>"
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium"></span>
// Most Popular</span>
        </div>
      )}"
      <div className="text-center mb-4"></div>"
        <div className="text-4xl mb-3">{service.icon}</div>"
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>"
        <p className="text-gray-300 text-sm mb-4">{service.description}</p>"
        <div className="flex items-center justify-center space-x-2 mb-4"></div>"
          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
          {service.marketPrice && ()}"
          <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
          )};
        </div>"
        <div className="text-xs text-gray-400 mb-4"></div>"
          <span className="bg-gray-800 px-2 py-1 rounded">{service.category}</span>
        </div>
      </div>"
      <div className="space-y-4"></div>
        <div></div>"
          <h4 className="text-sm font-semibold text-white mb-2">Key,
  Features:</h4>"
          <ul className="space-y-1"></ul>
            {service.features.slice(0, 4).map((feature, index) => ()}"
          <li key={index} className="flex items-center text-xs text-gray-300"></li>"
                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                {feature}
              </li>
            ))};
          </ul>
        </div>
        <div></div>"
          <h4 className="text-sm font-semibold text-white mb-2">Benefit,
  s:</h4>"
          <ul className="space-y-1"></ul>
            {service.benefits.slice(0, 3).map((benefit, index) => ()}"
          <li key={index} className="flex items-center text-xs text-gray-300"></li>"
                <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" /></Star>
                {benefit}
              </li>
            ))};
          </ul>
        </div>"
        <div className="pt-4 border-t border-gray-700"></div>"
          <div className="text-xs text-gray-400 mb-2">Technologie,
  s:</div>"
          <div className="flex flex-wrap gap-1"></div>
            {service.technologies.slice(0, 3).map((tech, index) => ()}"
          <span key={index} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"></span>
                {tech}
              </span>
            ))};
          </div>
        </div>"
        <div className="pt-4"></div>
          <a></a>
            href={/* TODO: Fix JSX expression */}
  o:kleber@ziontechgroup.com'}"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg,
  hover:from-cyan-600,"
  hover: to-blue-700 transition-all duration-300 flex items-center justify-center text-sm font-medium"
// >
//             Get Started,"
          <ArrowRight className="w-4 h-4 ml-2" /></ArrowRight>
          </a>"
          <p className="text-xs text-gray-400 mt-2 text-center">{service.contactInfo}</p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
}
export default MicroSAASCard;"`
  </MicroSAASCardProps>
  </MicroSAASCardProps>
=======
  )};
export default MicroSAASCard;"`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
