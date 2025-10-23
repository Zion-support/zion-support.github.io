import React from "react"
import { ArrowRight } from "lucide-react"
interface NeonButtonProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode;
  disabled?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
import {ArrowRight} from"lucide-react";
interface NeonButtonProp s {children?: React.ReactNode;
  class Nam e?: string;
  title?: string;
  description?: string;
  href?: string;
  onClick?: () =>voidvariant?:"primary" |"secondary" |"accent";
  size?:"sm" |"md" |"lg";
  icon?: React.ReactNode;
  disabled?: boolean;}
const NeonButton:React.FC<NeonButtonProp s>= ({children,
  href,
  onClick,
  variant="primary",
  size="md",
  className="",
  icon,
  disabled = false;
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const NeonButtonPage: React.FC  = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>NeonButton</title>
        <meta name="description" content="Advanced NeonButton solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, NeonButton, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">;
              NeonButton</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced NeonButton solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial</button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NeonButtonPage;
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  disabled= false}) => {constbaseClasses=
   "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300transformhover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-alloweddisabled: hover:scale-10 0";

  constsizeClasses= {
    sm:"px-4 py-2 text-sm",
    md:"px-6 py-3 text-base",
    lg:"px-8 py-4 text-lg"
 };

  constvariantClasses= {primary:
     "bg-gradient-to-r from-blue-600to-purple-600text-white shado w-lghover:shado w-blue-50 0/25 hover:shado w-2 xl",
    secondary:
     "bg-gradient-to-r from-purple-600to-pink-600text-white shado w-lghover:shado w-purple-50 0/25 hover:shado w-2 xl",
    accent:
      "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl"
  }

  const neonEffect =
    "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-sm before:transition-opacity before:duration-300 hover:before:opacity-70 before:-z-10"

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`
     "bg-gradient-to-r from-cyan-500to-blue-500text-white shado w-lghover:shado w-cyan-50 0/25 hover:shado w-2 xl"
 };

  constneonEffect=
   "before: absolutebefore:inset-0 before:rounded-lgbefore:bg-gradient-to-rbefore:from-blue-400 before:to-purple-400 before:opacity-0 before:blur-smbefore:transition-opacitybefore:duration-300 hover: before:opacity-70 before:-z-1 0";

  constbuttonClasses= `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${neonEffect} ${className}`;

  constcontent= (
  <di v>{icon&&<spanclassName="mr-2">{icon}</spa>}
      {children}
      {!icon && <ArrowRight className="w-5 h-5 ml-2" />}
    </div>
  )

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>
      {content}
    </button>
  )
}

export default NeonButton;
      <a href={href} className={buttonClasses}>{content}</a>a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClasses}>{content}</button>button>
      {!icon&&<ArrowRightclassName="w-5h-5ml-2"/>}
  </di>);

  if (hre f) {return (
    <ahref={href} className={buttonClasses}>{content}
    </a>);
  }

  return (
  < onClick={onClick} disabled={disabled} className={buttonClasses}></ onClick={onClick} disabled={disabled} className={buttonClasses}>{content}
  </butto>
  );
};

export default NeonButton;
