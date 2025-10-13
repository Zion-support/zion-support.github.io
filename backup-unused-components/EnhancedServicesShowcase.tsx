import React from 'react';
interface EnhancedServicesShowcaseProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedServicesShowcase({ className = '', children }: EnhancedServicesShowcaseProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
import React from "react"lucide-react";
import { Link } from ";
const EnhancedServicesShowcase: React.FC = () =>
  const services = [,
    icon: Brain,
        title: "AI Solutions"Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
        features: [
        ",
        "Natural Language Processing"Computer Vision",
        ",
      ],
,
    ,
    icon: Shield,
        title: "Cybersecurity"Comprehensive security solutions to protect your business from cyber threats and data breaches.",
        features: [
        ",
        "Threat Detection"Data Protection",
        ",
      ],
,
    ,
    icon: Zap,
        title: "Cloud Infrastructure"Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.",
        features: [
        ",
        "Infrastructure as Code"Auto-scaling",
        ",
      ],
,

      icon: Globe,
import { Link } from "react-router-dom"lucide-react";
const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
//       icon: Brain,
//       title: ",
//       description:
        "Cutting-edge artificial intelligence solutions to automate and optimize your business processes."Machine Learning",
//         ",
//         "Computer Vision"Predictive Analytics",
//       ],
    },
    {
//       icon: Shield,
//       title: ",
//       description:
//         "Comprehensive security solutions to protect your business from cyber threats and data breaches."Security Audits",
//         ",
//         "Data Protection"Compliance Management",
//       ],
    },
    {
//       icon: Zap,
//       title: ",
//       description:
//         "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs."Cloud Migration",
//         ",
//         "Auto-scaling"Disaster Recovery",
//       ],
    },
    {
//       icon: Globe,
      title: ",
//       description:
        "Complete digital transformation services to modernize your business and stay competitive."Digital Transformation",
        description:
        ",
        features: [
        "Strategy Development"Technology Integration",
        ",
        "Training & Support"Strategy Development",
//         ",
//         "Change Management"Training & Support",
//       ],
    },
  ];
  return (
    <div className="container mx-auto px-4 py-16"></div>
        <div className="text-4 xl font-bold text-white mb-4"></h2>
            Our Core Services;
          </h2>
          <p className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>

            <div;
              key={index}
              className="cyber-card p-8 group hover:scale-105 transition-transform"
            >
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="text-center mb-16">
          <h2 className="text-xl text-gray-300 max-w-3 xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your
//             business and drive innovation
</p>
</div>

        <div className="cyber-card p-8 group hover:scale-105 transition-transform"
//             >
              <div className="h-12 w-12 text-cyan-400 mr-4" />
                <h3 className="text-gray-300 mb-6">{service.description}</p>
              <div className="text-sm font-semibold text-cyan-400 mb-3"></h4>
                  Key Features;
                </h4>
                <ul className="mb-6">
                <h4 className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
//                     <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <CheckCircle className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                Learn More;
                <ArrowRight className="text-center mt-16"></div>
          <Link;
            to="
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit">
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
          </Link>
  </div>
  </div>
  </div>
          <Link
//                     </li>
                  ))}
//                 </ul>
</div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center" />
</button>
</div>
          ))}
</div>

        <div className="text-center mt-16"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" />
</Link>
</div>
</div>
</div>
  );
}
);
