import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Target, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  Star,
  Award,
  CheckCircle,
  TrendingUp,
  Settings,
  Database,
  Cloud,
  Code,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import LazyImage from '../components/LazyImage';

const ITStrategyConsultingPage = () => {
  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Digital Transformation Strategy",
      description: "Comprehensive roadmap for modernizing your technology infrastructure and processes"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Migration Planning",
      description: "Strategic planning and execution of cloud migration with minimal business disruption"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Assessment",
      description: "Complete security audit and implementation of robust cybersecurity frameworks"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "IT Infrastructure Optimization",
      description: "Performance analysis and optimization of your existing IT infrastructure"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Training & Development",
      description: "Comprehensive training programs to upskill your IT team and staff"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Technology Roadmap",
      description: "Long-term technology strategy aligned with your business objectives"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant solutions and digital health transformation",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "Finance",
      description: "Secure financial systems and regulatory compliance solutions",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      name: "Manufacturing",
      description: "Industry 4.0 implementation and smart manufacturing solutions",
      icon: <Settings className="w-8 h-8" />
    },
    {
      name: "Retail",
      description: "E-commerce platforms and omnichannel customer experiences",
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "Education",
      description: "Digital learning platforms and educational technology solutions",
      icon: <Brain className="w-8 h-8" />
    },
    {
      name: "Government",
      description: "Secure government systems and citizen service platforms",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current technology landscape, processes, and business objectives"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a detailed technology roadmap aligned with your business goals and industry best practices"
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Detailed project planning with timelines, resources, and risk mitigation strategies"
    },
    {
      step: "04",
      title: "Execution & Support",
      description: "Ongoing support and guidance throughout the implementation process with regular reviews"
    }
  ];

  const pricingPlans = [
    {
      name: "Strategy Session",
      price: "$2,500",
      period: "per session",
      description: "2-day intensive strategy workshop",
      features: [
        "Current state assessment",
        "Technology gap analysis",
        "Strategic recommendations",
        "Implementation roadmap",
        "Executive presentation",
        "30-day follow-up support"
      ],
      popular: false
    },
    {
      name: "Comprehensive Consulting",
      price: "$15,000",
      period: "/month",
      description: "3-6 month engagement",
      features: [
        "Full technology assessment",
        "Detailed strategy development",
        "Implementation planning",
        "Team training",
        "Ongoing support",
        "Monthly progress reviews",
        "Unlimited consultations"
      ],
      popular: true
    },
    {
      name: "Enterprise Transformation",
      price: "Custom",
      period: "pricing",
      description: "Large-scale digital transformation",
      features: [
        "Multi-year transformation roadmap",
        "Custom solution architecture",
        "Dedicated project team",
        "Change management support",
        "24/7 support",
        "Executive sponsorship",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Strategy Consulting - Digital Transformation & Technology Roadmap</title>
        <meta name="description" content="Transform your business with our IT strategy consulting services. Digital transformation, cloud migration, cybersecurity, and technology roadmap development for modern enterprises." />
        <meta name="keywords" content="IT consulting, digital transformation, technology strategy, cloud migration, cybersecurity consulting, IT roadmap, business technology" />
        <link rel="canonical" href="https://ziontechgroup.com/it-strategy-consulting" />
      </Helmet>

      <EnhancedSEO 
        title="IT Strategy Consulting - Digital Transformation & Technology Roadmap"
        description="Transform your business with our IT strategy consulting services. Digital transformation, cloud migration, cybersecurity, and technology roadmap development for modern enterprises."
        keywords="IT consulting, digital transformation, technology strategy, cloud migration, cybersecurity consulting, IT roadmap, business technology"
        canonical="https://ziontechgroup.com/it-strategy-consulting"
      />

      <ResponsiveContainer>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <FuturisticText 
              text="IT Strategy Consulting"
              className="text-5xl md:text-7xl font-bold mb-6"
            />
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with strategic IT consulting, 
              digital transformation, and technology roadmap development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/consultation', '_blank')}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
              >
                Get Free Assessment
              </FuturisticButton>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive IT Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic guidance to help your organization leverage technology for competitive advantage
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {services.map((service, index) => (
              <FuturisticCard key={index} className="p-8 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions for various industries and business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for delivering strategic IT consulting results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Consulting Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consulting engagement that best fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <FuturisticButton 
                  className="w-full py-3"
                  variant={plan.popular ? 'primary' : 'outline'}
                  onClick={() => window.open('https://ziontechgroup.com/consultation', '_blank')}
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <FuturisticCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert consultants help you develop a technology strategy 
              that drives business growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/consultation', '_blank')}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('tel:+13024640950', '_blank')}
              >
                Call +1 (302) 464-0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </section>
      </ResponsiveContainer>
    </div>
  );
};

export default ITStrategyConsultingPage;