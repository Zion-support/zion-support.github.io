import React from 'react';
import { 
  Zap, 
  Users, 
  FileText, 
  BarChart3, 
  Calendar, 
  CreditCard, 
  MessageSquare, 
  CheckCircle, 
  Star,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  Database
} from 'lucide-react';

export default function MicroSAASServicesPage() {
  const microSAASServices = [
    {
      name: &quot;Project Management Hub&quot;,
      description: &quot;Lightweight, intuitive project management tool designed for small teams and startups. Streamline workflows, track progress, and collaborate effectively.&quot;,
      icon: <Users className=&quot;w-12 h-12 text-blue-500&quot; />,
      features: [
        &quot;Task management and assignment&quot;,
        &quot;Team collaboration tools&quot;,
        &quot;Time tracking and reporting&quot;,
        &quot;Project templates and workflows&quot;,
        &quot;File sharing and storage&quot;,
        &quot;Mobile app access&quot;,
        &quot;Integration with popular tools&quot;,
        &quot;Custom branding options&quot;
      ],
      pricing: {
        starter: &quot;$29/month&quot;,
        professional: &quot;$59/month&quot;,
        enterprise: &quot;$99/month&quot;
      },
      marketPrice: &quot;$50-100/month&quot;,
      useCases: [&quot;Small teams&quot;, &quot;Startups&quot;, &quot;Freelancers&quot;, &quot;Agencies&quot;, &quot;Remote teams&quot;],
      benefits: [
        &quot;50% cost savings vs competitors&quot;,
        &quot;Easy onboarding and adoption&quot;,
        &quot;Scalable as you grow&quot;,
        &quot;No long-term contracts&quot;,
        &quot;24/7 customer support&quot;
      ],
      website: &quot;https://ziontechgroup.com/project-management&quot;,
      freeTrial: &quot;14 days&quot;,
      setupTime: &quot;Under 1 hour&quot;
    },
    {
      name: &quot;Invoice & Billing System&quot;,
      description: &quot;Automated invoicing and payment processing platform with recurring billing, financial analytics, and tax calculations.&quot;,
      icon: <CreditCard className=&quot;w-12 h-12 text-green-500&quot; />,
      features: [
        &quot;Automated invoice generation&quot;,
        &quot;Payment processing integration&quot;,
        &quot;Recurring billing setup&quot;,
        &quot;Financial reporting dashboard&quot;,
        &quot;Tax calculations and compliance&quot;,
        &quot;Client portal access&quot;,
        &quot;Multi-currency support&quot;,
        &quot;Expense tracking&quot;
      ],
      pricing: {
        starter: &quot;$39/month&quot;,
        professional: &quot;$79/month&quot;,
        enterprise: &quot;$149/month&quot;
      },
      marketPrice: &quot;$60-120/month&quot;,
      useCases: [&quot;Freelancers&quot;, &quot;Small businesses&quot;, &quot;Consultants&quot;, &quot;Service providers&quot;, &quot;E-commerce&quot;],
      benefits: [
        &quot;Faster payment collection&quot;,
        &quot;Reduced administrative overhead&quot;,
        &quot;Better cash flow management&quot;,
        &quot;Professional client experience&quot;,
        &quot;Compliance automation&quot;
      ],
      website: &quot;https://ziontechgroup.com/invoice-billing&quot;,
      freeTrial: &quot;30 days&quot;,
      setupTime: &quot;Under 2 hours&quot;
    },
    {
      name: &quot;Social Media Scheduler&quot;,
      description: &quot;AI-powered social media management platform with content optimization, multi-platform posting, and performance analytics.&quot;,
      icon: <MessageSquare className=&quot;w-12 h-12 text-purple-500&quot; />,
      features: [
        &quot;Multi-platform posting (Instagram, Twitter, LinkedIn, Facebook)&quot;,
        &quot;AI content optimization&quot;,
        &quot;Content calendar management&quot;,
        &quot;Performance analytics dashboard&quot;,
        &quot;Team collaboration tools&quot;,
        &quot;Hashtag suggestions&quot;,
        &quot;Best time to post analysis&quot;,
        &quot;Competitor monitoring&quot;
      ],
      pricing: {
        starter: &quot;$49/month&quot;,
        professional: &quot;$99/month&quot;,
        enterprise: &quot;$199/month&quot;
      },
      marketPrice: &quot;$80-150/month&quot;,
      useCases: [&quot;Marketing teams&quot;, &quot;Influencers&quot;, &quot;Small businesses&quot;, &quot;Agencies&quot;, &quot;Content creators&quot;],
      benefits: [
        &quot;Save 10+ hours per week&quot;,
        &quot;Improve engagement rates&quot;,
        &quot;Consistent posting schedule&quot;,
        &quot;Data-driven content strategy&quot;,
        &quot;Multi-account management&quot;
      ],
      website: &quot;https://ziontechgroup.com/social-media-scheduler&quot;,
      freeTrial: &quot;7 days&quot;,
      setupTime: &quot;Under 30 minutes&quot;
    },
    {
      name: &quot;Customer Relationship Manager&quot;,
      description: &quot;Simple yet powerful CRM designed for growing businesses. Manage leads, track sales, and nurture customer relationships.&quot;,
      icon: <BarChart3 className=&quot;w-12 h-12 text-orange-500&quot; />,
      features: [
        &quot;Lead management and scoring&quot;,
        &quot;Sales pipeline tracking&quot;,
        &quot;Contact and company profiles&quot;,
        &quot;Email integration and tracking&quot;,
        &quot;Task and follow-up reminders&quot;,
        &quot;Sales reporting and analytics&quot;,
        &quot;Mobile app access&quot;,
        &quot;Custom fields and workflows&quot;
      ],
      pricing: {
        starter: &quot;$59/month&quot;,
        professional: &quot;$119/month&quot;,
        enterprise: &quot;$199/month&quot;
      },
      marketPrice: &quot;$100-200/month&quot;,
      useCases: [&quot;Sales teams&quot;, &quot;Small businesses&quot;, &quot;Startups&quot;, &quot;Consultants&quot;, &quot;Real estate&quot;],
      benefits: [
        &quot;Increase sales by 25%&quot;,
        &quot;Better lead conversion&quot;,
        &quot;Improved customer retention&quot;,
        &quot;Streamlined sales process&quot;,
        &quot;Data-driven insights&quot;
      ],
      website: &quot;https://ziontechgroup.com/crm&quot;,
      freeTrial: &quot;21 days&quot;,
      setupTime: &quot;Under 2 hours&quot;
    },
    {
      name: &quot;Email Marketing Platform&quot;,
      description: &quot;Professional email marketing solution with automation, segmentation, and advanced analytics for better campaign performance.&quot;,
      icon: <Mail className=&quot;w-12 h-12 text-indigo-500&quot; />,
      features: [
        &quot;Drag-and-drop email builder&quot;,
        &quot;Email automation workflows&quot;,
        &quot;Advanced segmentation&quot;,
        &quot;A/B testing capabilities&quot;,
        &quot;Performance analytics&quot;,
        &quot;Template library&quot;,
        &quot;Integration with popular tools&quot;,
        &quot;Compliance and deliverability&quot;
      ],
      pricing: {
        starter: &quot;$69/month&quot;,
        professional: &quot;$139/month&quot;,
        enterprise: &quot;$249/month&quot;
      },
      marketPrice: &quot;$120-250/month&quot;,
      useCases: [&quot;E-commerce&quot;, &quot;Marketing teams&quot;, &quot;Small businesses&quot;, &quot;Newsletters&quot;, &quot;Online courses&quot;],
      benefits: [
        &quot;Higher open and click rates&quot;,
        &quot;Automated customer journeys&quot;,
        &quot;Better ROI on campaigns&quot;,
        &quot;Professional email templates&quot;,
        &quot;Compliance automation&quot;
      ],
      website: &quot;https://ziontechgroup.com/email-marketing&quot;,
      freeTrial: &quot;14 days&quot;,
      setupTime: &quot;Under 1 hour&quot;
    },
    {
      name: &quot;Analytics Dashboard&quot;,
      description: &quot;Comprehensive business analytics platform with real-time insights, custom reports, and data visualization tools.&quot;,
      icon: <TrendingUp className=&quot;w-12 h-12 text-pink-500&quot; />,
      features: [
        &quot;Real-time data visualization&quot;,
        &quot;Custom dashboard builder&quot;,
        &quot;Automated reporting&quot;,
        &quot;Data integration capabilities&quot;,
        &quot;Performance tracking&quot;,
        &quot;Goal setting and monitoring&quot;,
        &quot;Export and sharing options&quot;,
        &quot;Mobile-responsive design&quot;
      ],
      pricing: {
        starter: &quot;$79/month&quot;,
        professional: &quot;$159/month&quot;,
        enterprise: &quot;$299/month&quot;
      },
      marketPrice: &quot;$150-300/month&quot;,
      useCases: [&quot;Business owners&quot;, &quot;Marketing teams&quot;, &quot;Analysts&quot;, &quot;Startups&quot;, &quot;E-commerce&quot;],
      benefits: [
        &quot;Data-driven decision making&quot;,
        &quot;Time savings on reporting&quot;,
        &quot;Better business insights&quot;,
        &quot;Improved performance tracking&quot;,
        &quot;Professional presentations&quot;
      ],
      website: &quot;https://ziontechgroup.com/analytics-dashboard&quot;,
      freeTrial: &quot;30 days&quot;,
      setupTime: &quot;Under 3 hours&quot;
    }
  ];

  const additionalMicroSAAS = [
    {
      name: &quot;Time Tracking Tool&quot;,
      description: &quot;Simple time tracking for teams and freelancers with project billing and productivity insights.&quot;,
      pricing: &quot;$19/month&quot;,
      icon: <Calendar className=&quot;w-8 h-8 text-blue-400&quot; />
    },
    {
      name: &quot;Knowledge Base Platform&quot;,
      description: &quot;Create and manage documentation, FAQs, and help articles for your customers and team.&quot;,
      pricing: &quot;$39/month&quot;,
      icon: <FileText className=&quot;w-8 h-8 text-green-400&quot; />
    },
    {
      name: &quot;Survey & Feedback Tool&quot;,
      description: &quot;Collect customer feedback, conduct surveys, and gather insights to improve your products and services.&quot;,
      pricing: &quot;$29/month&quot;,
      icon: <MessageSquare className=&quot;w-8 h-8 text-purple-400&quot; />
    },
    {
      name: &quot;Appointment Scheduler&quot;,
      description: &quot;Automated appointment booking system with calendar integration and reminder notifications.&quot;,
      pricing: &quot;$25/month&quot;,
      icon: <Calendar className=&quot;w-8 h-8 text-orange-400&quot; />
    }
  ];

  const stats = [
    { label: &quot;Active Users&quot;, value: &quot;10,000+&quot; },
    { label: &quot;Cost Savings&quot;, value: &quot;40-60%&quot; },
    { label: &quot;Setup Time&quot;, value: &quot;< 2 hours&quot; },
    { label: &quot;Customer Satisfaction&quot;, value: &quot;96%&quot; }
  ];

  const whyChooseUs = [
    {
      title: &quot;Affordable Pricing&quot;,
      description: &quot;Up to 60% savings compared to enterprise solutions without compromising on features.&quot;,
      icon: <TrendingUp className=&quot;w-8 h-8 text-green-400&quot; />
    },
    {
      title: &quot;Quick Setup&quot;,
      description: &quot;Get up and running in under 2 hours with our intuitive setup wizards and templates.&quot;,
      icon: <Zap className=&quot;w-8 h-8 text-blue-400&quot; />
    },
    {
      title: &quot;Scalable Solutions&quot;,
      description: &quot;Start small and scale up as your business grows. No long-term contracts or hidden fees.&quot;,
      icon: <Globe className=&quot;w-8 h-8 text-purple-400&quot; />
    },
    {
      title: &quot;24/7 Support&quot;,
      description: &quot;Round-the-clock customer support to help you succeed with our platforms.&quot;,
      icon: <Users className=&quot;w-8 h-8 text-orange-400&quot; />
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white&quot;>
      {/* Hero Section */}
      <div className=&quot;relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24&quot;>
          <div className=&quot;text-center&quot;>
            <div className=&quot;flex justify-center mb-6&quot;>
              <Zap className=&quot;w-20 h-20 text-yellow-400&quot; />
            </div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
              Micro SAAS Solutions
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Affordable, scalable software solutions that grow with your business. Professional-grade tools at startup-friendly prices.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <a 
                href=&quot;tel:+13024640950&quot;
                className=&quot;inline-flex items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-semibold transition-colors&quot;
              >
                <Phone className=&quot;w-5 h-5 mr-2&quot; />
                <span>Call Now: +1 302 464 0950</span>
              </Link>
              <a 
                href=&quot;mailto:kleber@ziontechgroup.com?subject=Micro%20SAAS%20Inquiry&quot;
                className=&quot;inline-flex items-center px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-lg font-semibold transition-colors&quot;
              >
                <Mail className=&quot;w-5 h-5 mr-2&quot; />
                <span>Get Started Today</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
          {stats.map((stat, index) => (
            <div key={index} className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-yellow-400 mb-2&quot;>{stat.value}</div>
              <div className=&quot;text-gray-300 text-sm&quot;>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Professional-grade software solutions designed specifically for growing businesses and startups.
          </p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
          {whyChooseUs.map((feature, index) => (
            <div key={index} className=&quot;text-center space-y-4&quot;>
              <div className=&quot;flex justify-center&quot;>
                {feature.icon}
              </div>
              <h3 className=&quot;text-lg font-semibold text-white&quot;>{feature.title}</h3>
              <p className=&quot;text-gray-300 text-sm&quot;>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Micro SAAS Services Grid */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
            Our Micro SAAS Portfolio
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Affordable software solutions that deliver enterprise-level functionality without the enterprise price tag.
          </p>
        </div>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;>
          {microSAASServices.map((service, index) => (
            <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105&quot;>
              <div className=&quot;space-y-6&quot;>
                <div className=&quot;flex items-center gap-4&quot;>
                  {service.icon}
                  <h3 className=&quot;text-2xl font-bold text-white&quot;>{service.name}</h3>
                </div>
                
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{service.description}</p>
                
                <div className=&quot;space-y-4&quot;>
                  <div>
                    <h4 className=&quot;text-lg font-semibold text-yellow-400 mb-3&quot;>Key Features:</h4>
                    <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-2&quot;>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=&quot;flex items-center gap-2 text-sm text-gray-300&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                    <div>
                      <h4 className=&quot;text-sm font-semibold text-yellow-400 mb-2&quot;>Pricing Plans:</h4>
                      <div className=&quot;space-y-1&quot;>
                        {Object.entries(service.pricing).map(([plan, price]) => (
                          <div key={plan} className=&quot;flex justify-between text-sm&quot;>
                            <span className=&quot;text-gray-400 capitalize&quot;>{plan}:</span>
                            <span className=&quot;text-green-400 font-semibold&quot;>{price}</span>
                          </div>
                        ))}
                      </div>
                      <div className=&quot;mt-2 text-xs text-gray-400&quot;>
                        Market price: <span className=&quot;line-through&quot;>{service.marketPrice}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className=&quot;text-sm font-semibold text-yellow-400 mb-2&quot;>Quick Info:</h4>
                      <div className=&quot;space-y-1 text-xs text-gray-300&quot;>
                        <div>Free Trial: {service.freeTrial}</div>
                        <div>Setup Time: {service.setupTime}</div>
                      </div>
                      <h4 className=&quot;text-sm font-semibold text-yellow-400 mb-2 mt-3&quot;>Best For:</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className=&quot;text-xs text-gray-300&quot;>• {useCase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className=&quot;text-sm font-semibold text-yellow-400 mb-2&quot;>Key Benefits:</h4>
                    <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-1&quot;>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=&quot;text-xs text-gray-300&quot;>• {benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className=&quot;pt-4 border-t border-white/20&quot;>
                    <div className=&quot;flex gap-3&quot;>
                      <a 
                        href={service.website}
                        className=&quot;flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-sm font-medium transition-colors&quot;
                      >
                        <span>Learn More</span>
                        <ExternalLink className=&quot;w-4 h-4&quot; />
                      </Link>
                      <a 
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className=&quot;inline-flex items-center justify-center px-4 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-lg text-sm font-medium transition-colors&quot;
                      >
                        <span>Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Micro SAAS Services */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
            More Micro SAAS Solutions
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Additional specialized tools to complement your business operations and drive growth.
          </p>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {additionalMicroSAAS.map((service, index) => (
            <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300&quot;>
              <div className=&quot;text-center space-y-4&quot;>
                <div className=&quot;flex justify-center&quot;>
                  {service.icon}
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>{service.name}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{service.description}</p>
                <div className=&quot;text-yellow-400 font-semibold&quot;>{service.pricing}</div>
                <a 
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                  className=&quot;inline-block w-full px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-sm font-medium transition-colors text-center&quot;
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Comparison */}
      <div className=&quot;bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border-t border-white/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;text-center space-y-12&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white&quot;>
              Affordable Pricing for Every Business
            </h2>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto&quot;>
              <div className=&quot;bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Starter</h3>
                <div className=&quot;text-4xl font-bold text-yellow-400 mb-6&quot;>$29<span className=&quot;text-lg text-gray-300&quot;>/month</span></div>
                <ul className=&quot;space-y-3 text-left&quot;>
                  <li className=&quot;flex items-center gap-2 text-gray-300&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>Up to 5 users</span>
                  </li>
                  <li className=&quot;flex items-center gap-2 text-gray-300&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>Core features</span>
                  </li>
                  <li className=&quot;flex items-center gap-2 text-gray-300&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>Email support</span>
                  </li>
                </ul>
              </div>
              
              <div className=&quot;bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/50 transform scale-105&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Professional</h3>
                <div className=&quot;text-4xl font-bold text-yellow-400 mb-6&quot;>$79<span className=&quot;text-lg text-gray-300&quot;>/month</span></div>
                <ul className=&quot;space-y-3 text-left&quot;>
                  <li className=&quot;flex items-center gap-2 text-gray-300&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>Up to 25 users</span>
                  </li>
                  <li className=&quot;flex items-center gap-2 text-gray-300&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>Advanced features</span>
                  </li>
                  <li className=&quot;flex items-center gap-2 text-gray-300&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
              
              <div className=&quot;bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20&quot;>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Enterprise</h3>
                <div className=&quot;text-4xl font-bold text-yellow-400 mb-6&quot;>$199<span className=&quot;text-lg text-gray-300&quot;>/month</span></div>
                <ul className=&quot;space-y-3 text-left&quot;>
                  <li className=&quot;flex items-center gap-2 text-gray-300&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>Unlimited users</span>
                  </li>
                  <li className=&quot;flex items-center gap-2 text-gray-300&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>All features</span>
                  </li>
                  <li className=&quot;flex items-center gap-2 text-gray-300&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                    <span>24/7 support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & CTA Section */}
      <div className=&quot;bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;text-center space-y-8&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white&quot;>
              Ready to Scale Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Start with our affordable micro SAAS solutions and scale up as your business grows. No long-term contracts, no hidden fees.
            </p>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto&quot;>
              <div className=&quot;text-center space-y-3&quot;>
                <div className=&quot;w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Phone className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Call Us</h3>
                <p className=&quot;text-gray-300&quot;>+1 302 464 0950</p>
                <p className=&quot;text-sm text-gray-400&quot;>Available Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className=&quot;text-center space-y-3&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Mail className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Email Us</h3>
                <p className=&quot;text-gray-300&quot;>kleber@ziontechgroup.com</p>
                <p className=&quot;text-sm text-gray-400&quot;>Response within 2 hours</p>
              </div>
              
              <div className=&quot;text-center space-y-3&quot;>
                <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <MapPin className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Visit Us</h3>
                <p className=&quot;text-gray-300&quot;>364 E Main St STE 1008</p>
                <p className=&quot;text-sm text-gray-400&quot;>Middletown, DE 19709</p>
              </div>
            </div>

            <div className=&quot;pt-8&quot;>
              <a 
                href=&quot;mailto:kleber@ziontechgroup.com?subject=Micro%20SAAS%20Consultation%20-%20Zion%20Tech%20Group&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105&quot;
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className=&quot;bg-gray-900 border-t border-white/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;>
            <div className=&quot;space-y-4&quot;>
              <h3 className=&quot;text-lg font-semibold text-white&quot;>Zion Tech Group</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
                Affordable micro SAAS solutions that scale with your business growth.
              </p>
            </div>
            
            <div className=&quot;space-y-4&quot;>
              <h4 className=&quot;text-md font-semibold text-white&quot;>Micro SAAS</h4>
              <ul className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <li><a href=&quot;/project-management&quot; className=&quot;hover:text-yellow-400 transition-colors&quot;>Project Management</Link></li>
                <li><a href=&quot;/invoice-billing&quot; className=&quot;hover:text-yellow-400 transition-colors&quot;>Invoice & Billing</Link></li>
                <li><a href=&quot;/social-media-scheduler&quot; className=&quot;hover:text-yellow-400 transition-colors&quot;>Social Media</Link></li>
                <li><a href=&quot;/crm&quot; className=&quot;hover:text-yellow-400 transition-colors&quot;>CRM</Link></li>
              </ul>
            </div>
            
            <div className=&quot;space-y-4&quot;>
              <h4 className=&quot;text-md font-semibold text-white&quot;>Company</h4>
              <ul className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <li><a href=&quot;/about&quot; className=&quot;hover:text-yellow-400 transition-colors&quot;>About Us</Link></li>
                <li><a href=&quot;/contact&quot; className=&quot;hover:text-yellow-400 transition-colors&quot;>Contact</Link></li>
                <li><a href=&quot;/careers&quot; className=&quot;hover:text-yellow-400 transition-colors&quot;>Careers</Link></li>
                <li><a href=&quot;/blog&quot; className=&quot;hover:text-yellow-400 transition-colors&quot;>Blog</Link></li>
              </ul>
            </div>
            
            <div className=&quot;space-y-4&quot;>
              <h4 className=&quot;text-md font-semibold text-white&quot;>Connect</h4>
              <div className=&quot;flex space-x-4&quot;>
                <a href=&quot;https://linkedin.com/company/ziontechgroup&quot; className=&quot;text-gray-400 hover:text-yellow-400 transition-colors&quot;>
                  <Linkedin className=&quot;w-5 h-5&quot; />
                </Link>
                <a href=&quot;https://twitter.com/ziontechgroup&quot; className=&quot;text-gray-400 hover:text-yellow-400 transition-colors&quot;>
                  <Twitter className=&quot;w-5 h-5&quot; />
                </Link>
                <a href=&quot;https://github.com/ziontechgroup&quot; className=&quot;text-gray-400 hover:text-yellow-400 transition-colors&quot;>
                  <Github className=&quot;w-5 h-5&quot; />
                </Link>
              </div>
            </div>
          </div>
          
          <div className=&quot;border-t border-white/20 mt-8 pt-8 text-center&quot;>
            <p className=&quot;text-gray-400 text-sm&quot;>
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href=&quot;/privacy&quot; className=&quot;hover:text-yellow-400 transition-colors ml-2&quot;>Privacy Policy</Link> | 
              <a href=&quot;/terms&quot; className=&quot;hover:text-yellow-400 transition-colors ml-2&quot;>Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}