<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const FuturisticServiceCard: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="futuristicservicecard">
      <h2>FuturisticServiceCard</h2>
      <p>FuturisticServiceCard component.</p>
=======
  popular?: boolean;}

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({
  title;
  description,
  price,
  features,
  icon: Icon;
  color,
  href,
  popular = false;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    purple: {
    gradient: 'from-purple-500 to-cyan-500',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      hover: 'hover:border-purple-500/50',
      shadow: 'shadow-purple-500/20'},
    cyan: {
    gradient: 'from-cyan-500 to-blue-500',
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      hover: 'hover:border-cyan-500/50',
      shadow: 'shadow-cyan-500/20'},
    pink: {
    gradient: 'from-pink-500 to-purple-500',
      text: 'text-pink-400',
      border: 'border-pink-500/30',
      hover: 'hover:border-pink-500/50',
      shadow: 'shadow-pink-500/20'},
    blue: {
    gradient: 'from-blue-500 to-indigo-500',
      text: 'text-blue-400',
      border: 'border-blue-500/30',
      hover: 'hover:border-blue-500/50',
      shadow: 'shadow-blue-500/20'},
    green: {
    gradient: 'from-green-500 to-emerald-500',
      text: 'text-green-400',
      border: 'border-green-500/30',
      hover: 'hover:border-green-500/50',
      shadow: 'shadow-green-500/20'},
    orange: {
    gradient: 'from-orange-500 to-red-500',
      text: 'text-orange-400',
      border: 'border-orange-500/30',
      hover: 'hover:border-orange-500/50',
      shadow: 'shadow-orange-500/20',
interface FuturisticServiceCardProps {/* TODO: Fix JSX expression */}
}

const,
  FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
    },
    cya,
  n: {/* TODO: Fix JSX expression */}
    },
    pin,
  k: {/* TODO: Fix JSX expression */}
    },
    blu,
  e: {/* TODO: Fix JSX expression */}
    },
    gree,
  n: {/* TODO: Fix JSX expression */}
    },
    orang,
  e: {/* TODO: Fix JSX expression */}
    }
  };

  const currentColor = colorClasses[color];

  return(<div;)
      className={`relative group cursor-pointer transition-all duration-500 transform ${)}
        popular ? 'scale-105' : 'hover:scale-105'})

  return (<div></div>
      className={/* TODO: Fix JSX expression */}
      }`})
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"></div>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">Most Popular</div>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg"></div>
            Most Popular;
          </div>
        </div>
      )}

      {/* Card */}
      <div;
        className={`glass rounded-2xl p-8 border transition-all duration-500 ${}
          popular ? currentColor.border : 'border-white/10'}
        } ${currentColor.hover} ${
          isHovered ? `shadow-2 xl ${currentColor.shadow}` : 'shadow-lg'
        }`}
      >{/* Icon */}</div>
        <div className="relative mb-6"></div>
          <div
            className={`w-16 h-16 bg-gradient-to-r ${currentColor.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
              isHovered ? 'neon-cyan' : ''
            }`}
          ></div>
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover: opacity-100 transition-opacity duration-500"></div>,
        </div>,
,
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover: text-cyan-400 transition-colors duration-300">,
      {/* Popular Badge */}
      {/* TODO: Fix JSX expression */}
      )}

      {/* Card */}
      <div></div>
        className={/* TODO: Fix JSX expression */}
        } ${currentColor.hover} ${/* TODO: Fix JSX expression */}`
          isHovered ? `shadow-2xl ${currentColor.shadow}` : 'shadow-lg'`
        }`}
      >
        {/* Icon */}
        <div className="relative mb-6"></div>
          <div></div>`
            className={`w-16 h-16 bg-gradient-to-r ${currentColor.gradient} rounded-xl flex items-center justify-center mb-4 group-hove,
  r:scale-110 transition-transform duration-300 ${/* TODO: Fix JSX expression */}`
            }`}
          >"
            <Icon className="w-8 h-8 text-white" /></Icon>
          </div>
          
          {/* Animated Background */}"
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hove,"
  r:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Title */}"
        <h3 className="text-2xl font-bold text-white mb-3 group-hove,"
  r:text-cyan-400 transition-colors duration-300"></h3>
          {title}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">{/* Title */}</div><h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
        </h3>

            <li className="text-sm text-gray-400"></li>
              +{features.length - 4} more features;
        {/* Description */}"
        <p className="text-gray-300 mb-6 leading-relaxed"></p>
          {description}
        </p>

        {/* Price */}"
        <div className="mb-6"></div>`
          <div className={`text-3xl font-bold ${currentColor.text} mb-2`}></div>
            {price}
          </div>"
          <div className="text-sm text-gray-400">per month</div>
        </div>

        {/* Features */}"
        <ul className="space-y-3 mb-8"></ul>
          {/* TODO: Fix JSX expression */}"
            <li key={index} className="flex items-center text-sm text-gray-300"></li>"
              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
              {feature}
            </li>
          ))}
          {/* TODO: Fix JSX expression */}
              +{features.length - 4} more features;
            </li>
          )}
        </ul>

        {/* CTA Button */}
        <button></button>
          className={/* TODO: Fix JSX expression */}`
              : `border border-${color}-500 text-${color}-300,`
  hover:bg-${color}-500/20``
          } flex items-center justify-center group`}
        >
          Get Started;"
          <ArrowRight className="w-4 h-4 ml-2 group-hove,"
  r:translate-x-1 transition-transform" /></ArrowRight>
        </button>

        >
          Get Started;
          <ArrowRight className="w-4 h-4 ml-2 group-hover: translate-x-1 transition-transform" />,
        </button>,
,
        {/* Hover Effect Overlay */}
        <div></div>`
          className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hove,`
  r:opacity-5 rounded-2xl transition-opacity duration-500`}
        ></div>
      </div>

      {/* Glow Effect */}
        >{/* Glow Effect */}</div><div
        className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
      >);
};</div>
</div>
export default FuturisticServiceCard;</div>
      <div></div>`
        className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hove,`
  r:opacity-20 rounded-2xl blur-xl transition-opacity duration-500 -z-10`}
      ></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>FuturisticServiceCard | Zion Tech Group</title>
        <meta name="description" content="Professional FuturisticServiceCard services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="FuturisticServiceCard, AI solutions, IT services, Zion Tech Group, futuristicservicecard" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                FuturisticServiceCard
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced futuristicservicecard solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div></div></div></div>
          </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
};

<<<<<<< HEAD
export default FuturisticServiceCard;
=======
export default FuturisticServiceCard;"`
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
'use client'

import {ArrowRight, Brain} from 'lucide-react';

  const benefits = ['Advanced AI technology integration',
=======
const FuturisticServiceCardPage: React.FC = () => {
  const benefits = [
    'Advanced AI technology integration',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'];
  const features = [{icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',},
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',}];
  return (
<<<<<<< HEAD
    <title>5G Data Analytics - Zion Tech Group</title>
        <title>Futuristic Service Card | Zion Tech Group</title>

      {/* Hero Section */}
      <section className="w-5h-5ml-2"   /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />FuturisticServiceCard;
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <Helmet />
        <title   />Futuristic Service Card | Zion Tech Group</title>
        <meta name="description" content="Professional futuristic service card solutions by Zion Tech Group. Advanced AI and IT solutions for your business." / / />
        <meta name="keywords" content="futuristic service card, AI solutions, IT services, Zion Tech Group" / / />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent"  />FuturisticServiceCard
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </span>
              <br   /></br>
              <span className="w-5h-5ml-2"   />Solutions</span>
            </h1>
            <p className="w-5h-5ml-2">Transform your business with our advanced futuristic service card solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
<<<<<<< HEAD
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <button className="w-5h-5ml-2"   /></button>
                Get Started;
                <ArrowRight className="w-5h-5ml-2"   /></ArrowRight>
=======
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              </button>
              <button className="w-5h-5ml-2">Learn More;
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
<<<<<<< HEAD
      <section className="w-5h-5ml-2"   /></section>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2"   />Our Features;
            </h2>
            <p className="w-5h-5ml-2">Discover the powerful features that make our futuristic service card solutions stand out.
            </p>
          </div>;
        </div></section>
  )};export default FuturisticServiceCardPage

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
'use client'
import React from 'react'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  price?: string
  features: string[]
  popular?: boolean
  icon?: React.ComponentType<{ className?: string }>
  onSelect?: () => void
  className?: string
}

const FuturisticServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  features,
  popular = false,
  icon: Icon,
  onSelect,
  className = ''
}) => {
  return (
    <div className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 ${popular ? 'ring-2 ring-purple-500' : ''} ${className}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Popular
          </span>
=======
      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Our Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Discover the powerful features that make our futuristic service card solutions stand out.
            </p>
          </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
        </div>
      )}

      {Icon && (
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
      )}

      <h3 className="text-xl font-semibold text-white mb-4 text-center">{title}</h3>
      <p className="text-gray-300 mb-6 text-center">{description}</p>

      {price && (
        <div className="text-center mb-6">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-gray-400 text-sm ml-1">/month</span>
        </div>
      )}

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
      >
        Select Plan
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  )
}

export default FuturisticServiceCard
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
=======
import React from 'react';

const FuturisticServiceCard: React.FC<FuturisticServiceCardProps> = () => {
  return (
    <div className="futuristicservicecard">
      <h2>FuturisticServiceCard</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

<<<<<<< HEAD
export default FuturisticServiceCard;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
export default FuturisticServiceCardPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
