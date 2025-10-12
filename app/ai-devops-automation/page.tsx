'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AIDevOpsAutomationPage() {
  const features = [
    {
      title: 'Intelligent CI/CD Pipeline',
      description: 'AI-powered continuous integration and deployment with automatic testing, code quality checks, and smart rollback capabilities.',
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      benefits: ['Auto testing', 'Code quality checks', 'Smart rollbacks', 'Performance optimization']
    },
    {
      title: 'Predictive Infrastructure Monitoring',
      description: 'Advanced AI algorithms predict system failures, optimize resource allocation, and prevent downtime before it happens.',
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      benefits: ['Failure prediction', 'Resource optimization', 'Proactive alerts', 'Performance tuning']
    },
    {
      title: 'Automated Security Scanning',
      description: 'AI-driven security analysis that continuously scans for vulnerabilities, compliance issues, and potential threats.',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      benefits: ['Vulnerability scanning', 'Compliance monitoring', 'Threat detection', 'Auto remediation']
    },
    {
      title: 'Smart Resource Management',
      description: 'Intelligent auto-scaling and resource allocation based on real-time demand patterns and predictive analytics.',
      icon: <Server className="w-6 h-6 text-green-400" />,
      benefits: ['Auto-scaling', 'Cost optimization', 'Load balancing', 'Capacity planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 applications',
        'Basic CI/CD automation',
        'Standard monitoring',
        'Email support',
        'Basic security scanning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced features for growing companies',
      features: [
        'Up to 25 applications',
        'Advanced AI automation',
        'Predictive monitoring',
        'Priority support',
        'Advanced security',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited applications',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'DevOps Engineer',
      company: 'TechFlow Solutions',
      content: 'AI DevOps Automation reduced our deployment time by 80% and eliminated 95% of production issues. The predictive monitoring is incredible.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'CTO',
      company: 'InnovateLabs',
      content: 'The automated security scanning caught vulnerabilities we never would have found manually. Our security posture improved dramatically.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Platform Engineer',
      company: 'CloudScale Inc',
      content: 'Smart resource management reduced our cloud costs by 40% while improving performance. The AI optimization is game-changing.',
      rating: 5
    }
  ];

  const stats = [
    { number: '80%', label: 'Faster Deployments', icon: <Zap className="w-6 h-6" /> },
    { number: '95%', label: 'Issue Reduction', icon: <Shield className="w-6 h-6" /> },
    { number: '300+', label: 'Companies Using', icon: <Users className="w-6 h-6" /> },
    { number: '40%', label: 'Cost Reduction', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI DevOps Automation - Smart CI/CD & Infrastructure Management | Zion Tech Group</title>
        <meta name="description" content="Automate your DevOps with AI-powered CI/CD pipelines, predictive monitoring, and intelligent resource management. Deploy 80% faster with 95% fewer issues." />
        <meta name="keywords" content="AI DevOps, CI/CD automation, infrastructure monitoring, DevOps AI, deployment automation, cloud management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-devops-automation" />
      </Helmet>

      <FuturisticBackground variant="services">
        </Zap>
        </BarChart3>
        </Shield>
        </Server>
        </Zap>
        </Shield>
        </Users>
        </TrendingUp>
        </meta>
        </meta>
        </link>
        </ArrowRight>
        </CheckCircle>
        </CheckCircle>
        </Star>
        {/* Hero Section */}
        <section>
          <div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI DevOps Automation
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Revolutionize your DevOps with AI-powered CI/CD pipelines, predictive monitoring, 
                and intelligent resource management. Deploy 80% faster with 95% fewer issues.
              </p>
              <div>
                <FuturisticButton;
variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton;
variant="ghost"
                  size="lg"
                  onClick={() => window.open('#demo', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>

            {/* Stats */}
            <div>
              {stats.map((stat, index) => (
                <div>
                  <div>
                    {stat.icon}
                  </div>
                  <div>{stat.number}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge artificial intelligence meets DevOps expertise to automate your operations
              </p>
            </div>
            
            <div>
              {features.map((feature, index) => (
                <FuturisticCard key={index} variant="service" className="h-full">
                  <div>
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Scalable pricing options to match your DevOps needs
              </p>
            </div>

            <div>
              {pricingPlans.map((plan, index) => (
                <FuturisticCard;
key={index} 
                  variant={plan.popular ? "feature" : "service"} 
                  className={`h-full ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {plan.popular && (
                    <div>
                      <span>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div>
                      <span>{plan.price}</span>
                      <span>{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <FuturisticButton;
variant={plan.popular ? "primary" : "ghost"}
                    className="w-full"
                    onClick={() => window.open('/contact', '_blank')}
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Join hundreds of companies automating their DevOps
              </p>
            </div>

            <div>
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index} variant="testimonial" className="h-full">
                  <div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <footer>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </footer>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div>
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Automate Your DevOps?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free 14-day trial today. No credit card required. Join 300+ companies automating their DevOps.
              </p>
              <div>
                <FuturisticButton;
variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton;
variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
              <div>
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}