<<<<<<< HEAD
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
=======
import React from "react";
<<<<<<< HEAD
import;
=======
<<<<<<< HEAD
import 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  Brain,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
 from "lucide-react";
import { Link } from "react-router-dom";
const EnhancedServicesShowcase: React.FC = () => 
  const services = [,
    icon: Brain,
        title: "AI Solutions",
        description:
        "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
        features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
,
    ,
    icon: Shield,
        title: "Cybersecurity",
        description:
        "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
        features: [
        "Security Audits",
        "Threat Detection",
        "Data Protection",
        "Compliance Management",
      ],
,
    ,
    icon: Zap,
        title: "Cloud Infrastructure",
        description:
        "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.",
        features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Auto-scaling",
        "Disaster Recovery",
      ],
,
<<<<<<< HEAD
    
      icon: Globe,
=======
import { Link } from "react-router-dom";
//   Brain,
//   Shield,
//   Zap,
//   Globe,
//   CheckCircle,
//   ArrowRight,
} from "lucide-react";

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
//       icon: Brain,
//       title: "AI Solutions",
//       description:
        "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
//       features: [
//         "Machine Learning",
//         "Natural Language Processing",
//         "Computer Vision",
//         "Predictive Analytics",
//       ],
    },
    {
//       icon: Shield,
//       title: "Cybersecurity",
//       description:
//         "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
//       features: [
//         "Security Audits",
//         "Threat Detection",
//         "Data Protection",
//         "Compliance Management",
//       ],
    },
    {
//       icon: Zap,
//       title: "Cloud Infrastructure",
//       description:
//         "Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.",
//       features: [
//         "Cloud Migration",
//         "Infrastructure as Code",
//         "Auto-scaling",
//         "Disaster Recovery",
//       ],
    },
    {
//       icon: Globe,
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
      title: "Digital Transformation",
//       description:
        "Complete digital transformation services to modernize your business and stay competitive.",
<<<<<<< HEAD
      features: [
=======
    ,
    icon: Globe,
        title: "Digital Transformation",
        description:
        "Complete digital transformation services to modernize your business and stay competitive.",
        features: [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
        "Strategy Development",
        "Technology Integration",
        "Change Management",
        "Training & Support",
      ],
,
=======
//       features: [
//         "Strategy Development",
//         "Technology Integration",
//         "Change Management",
//         "Training & Support",
//       ],
    },
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  ];
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-4xl font-bold text-white mb-4"></h2>
            Our Core Services;
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Comprehensive AI and IT solutions designed to transform your;
            business and drive innovation;
          </p>
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
          
<<<<<<< HEAD
            <div;
              key={index}
              className="cyber-card p-8 group hover:scale-105 transition-transform"
=======
            <div>
  key={index}>
  className="cyber-card p-8 group hover:scale-105 transition-transform"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
            >
              <div className="flex items-center mb-4"></div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
//             Our Core Services
</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your
//             business and drive innovation
</p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
//             <div
              key={index}
              className="cyber-card p-8 group hover:scale-105 transition-transform"
//             >
              <div className="flex items-center mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                <service.icon className="h-12 w-12 text-cyan-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white"></h3>
                  {service.title}
<<<<<<< HEAD
                </h3>
  </div>
=======
</h3>
</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
              <p className="text-gray-300 mb-6">{service.description}</p>
<<<<<<< HEAD
              <div className="mb-6"></div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-3"></h4>
                  Key Features;
                </h4>
                <ul className="space-y-2"></ul>
                  
<<<<<<< HEAD
<<<<<<< HEAD
                    <li;
=======
                    <li
=======
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">
//                   Key Features
//                 </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
//                     <li
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-300"
//                     >
=======
                    <li>
  key={featureIndex}>
  className="flex items-center text-sm text-gray-300"
                    >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
<<<<<<< HEAD
                    </li>

                </ul>
  </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                Learn More;
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
  </div>  </div>
        <div className="text-center mt-16"></div>
<<<<<<< HEAD
<<<<<<< HEAD
          <Link;
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
=======
          <Link>
  to="/contact">
  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
          >
            Contact Us;
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
  </div>
  </div>
  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
          <Link
=======
//                     </li>
                  ))}
//                 </ul>
</div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
//                 Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
</button>
</div>
          ))}
</div>

        <div className="text-center mt-16">
//           <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
//           >
//             Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
</Link>
</div>
</div>
</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  );
}