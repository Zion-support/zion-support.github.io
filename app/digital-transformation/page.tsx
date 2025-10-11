import React from 'react';
import {    Target, TrendingUp, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-helmet-async';
const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization.',
      features: ['Workflow automation', 'RPA implementation', 'Process optimization', 'Integration services', 'Performance monitoring'],
      pricing: 'Starting at $1,999/month',
      popular: true,
      category: 'Automation'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Digital Workforce',
      description: 'Transform your team with digital tools and modern collaboration platforms.',
      features: ['Digital tools training', 'Collaboration platforms', 'Remote work solutions', 'Change management', 'User adoption'],
      pricing: 'Starting at $799/month',
      popular: false,
      category: 'Workforce'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Customer Experience',
      description: 'Enhance customer interactions with digital touchpoints and personalized experiences.',
      features: ['Digital touchpoints', 'Customer journey mapping', 'Personalization engines', 'Omnichannel solutions', 'Analytics & insights'],
      pricing: 'Starting at $1,499/month',
      popular: false,
      category: 'Experience'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Data Strategy',
      description: 'Leverage data as a strategic asset with advanced analytics and insights.',
      features: ['Data strategy planning', 'Analytics implementation', 'Data governance', 'Business intelligence', 'Predictive modeling'],
      pricing: 'Starting at $1,299/month',
      popular: false,
      category: 'Data'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital roadmap aligned with your business objectives.',
      features: ['Digital roadmap', 'Technology assessment', 'ROI planning', 'Implementation strategy', 'Change management'],
      pricing: 'Starting at $2,499',
      popular: true,
      category: 'Strategy'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      title: 'Innovation Labs',
      description: 'Foster innovation with dedicated labs and emerging technology exploration.',
      features: ['Innovation workshops', 'Emerging tech exploration', 'Prototype development', 'Pilot programs', 'Innovation metrics'],
      pricing: 'Starting at $3,999/month',
      popular: false,
      category: 'Innovation'
    }
  ];

  const transformationPhases = [
    {
      phase: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current state and digital readiness assessment.',
      duration: '2-4 weeks'
    },
    {
      phase: '02',
      title: 'Strategy Development',
      description: 'Create a detailed digital transformation roadmap aligned with business goals.',
      duration: '3-6 weeks'
    },
    {
      phase: '03',
      title: 'Implementation',
      description: 'Execute the transformation plan with phased rollout and change management.',
      duration: '3-12 months'
    },
    {
      phase: '04',
      title: 'Optimization',
      description: 'Continuous monitoring, optimization, and scaling of digital initiatives.',
      duration: 'Ongoing'
    }
  ];

  const stats = [
    { number: '150+', label: 'Transformations Completed' },
    { number: '35%', label: 'Average Efficiency Gain' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '95%', label: 'Client Satisfaction' }
  ];

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>Digital Transformation - Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>
      
      {/* Hero Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h1>
  
              Digital Transformation
            </h1>
            <p>
  
              Transform your business for the digital age with our comprehensive digital transformation services and solutions.
            </p>
            <div>
  
              <Link>
  
                Start Your Transformation
                <ArrowRight>
  
              </Link>
              <Link>
  
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div>
  
            {stats.map((stat, index) => (
              <div>
  
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Transformation Process</h2>
            <p>
  
              A proven methodology to ensure successful digital transformation
            </p>
          </div>
          
          <div>
  
            {transformationPhases.map((phase, index) => (
              <div>
  
                <div>
  
                  <span className="text-white font-bold text-xl">{phase.phase}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300 mb-4">{phase.description}</p>
                <div className="text-blue-300 text-sm font-medium">{phase.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transformation Services</h2>
            <p>
  
              Comprehensive solutions to modernize every aspect of your business
            </p>
          </div>
          
          <div>
  
            {transformationServices.map((service, index) => (
              <div>
  
                {service.popular && (
                  <div>
  
                    <span>
  
                      <Star>
  
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <div>
  
                  <span>
  
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div>
  
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div>
  
                    {service.pricing.includes('month') ? 'per month' : 'one-time setup'}
                  </div>
                </div>
                <ul>
  
                  {service.features.map((feature, featureIndex) => (
                    <li>
  
                      <CheckCircle>
  
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link>
  
                  Get Started
                  <ArrowRight>
  
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Digital Transformation?</h2>
            <p>
  
              We deliver transformation that drives real business value and competitive advantage
            </p>
          </div>
          
          <div>
  
            <div>
  
              <Lightbulb>
  
              <h3 className="text-xl font-semibold text-white mb-4">Innovation Focus</h3>
              <p className="text-gray-300">Cutting-edge solutions that keep you ahead of the competition and market trends.</p>
            </div>
            <div>
  
              <TrendingUp>
  
              <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">Track record of delivering measurable business outcomes and ROI improvements.</p>
            </div>
            <div>
  
              <Users>
  
              <h3 className="text-xl font-semibold text-white mb-4">Change Management</h3>
              <p className="text-gray-300">Comprehensive support to ensure smooth adoption and user engagement.</p>
            </div>
            <div>
  
              <Shield>
  
              <h3 className="text-xl font-semibold text-white mb-4">Security First</h3>
              <p className="text-gray-300">Built-in security and compliance measures throughout the transformation process.</p>
            </div>
            <div>
  
              <Clock>
  
              <h3 className="text-xl font-semibold text-white mb-4">Agile Approach</h3>
              <p className="text-gray-300">Flexible methodology that adapts to your business needs and timeline.</p>
            </div>
            <div>
  
              <DollarSign>
  
              <h3 className="text-xl font-semibold text-white mb-4">Cost Effective</h3>
              <p className="text-gray-300">Transparent pricing with clear ROI expectations and value delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <div>
  
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p>
  
                Get a free digital readiness assessment and discover your transformation opportunities.
              </p>
              <div>
  
                <Link>
  
                  Get Free Assessment
                </Link>
                <Link>
  
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;