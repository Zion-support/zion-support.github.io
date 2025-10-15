import React from 'react';;
import { Link } from 'react-router-dom';
import { Globe, Calendar, BarChart3, CheckCircle, ArrowRight, Target, Zap, Users, Image } from 'lucide-react';import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedSEO from '../components/EnhancedSEO';

import FuturisticCard from '../components/FuturisticCard',
      import FuturisticButton from '../components/FuturisticButton',
      import ResponsiveContainer from '../components/ResponsiveContainer',
      import EnhancedSEO from '../components/EnhancedSEO';
,
      const SocialMediaSchedulerPage = () => {"}
        "
  const features = [",
        "
    {""}
      title: "Multi-Platform Scheduling",""
      description: "Schedule posts across all major social media platforms from one dashboard",""
      icon: <Globe className="w-8 h-8" />,""
      benefits: ["Facebook", "Twitter", "Instagram", "edIn", "TikTok", "YouTube"]
    },",
        "
    {"}
        "
      title: "Content Calendar",""
      description: "Visual content calendar to plan and organize your social media strategy",""
      icon: <Calendar className="w-8 h-8" />,""
      benefits: ["Drag & drop scheduling", "Bulk upload", "Content templates", "Holiday planning"]
    },",
        "
    {"}
        "
      title: "Analytics & Insights",""
      description: "Comprehensive analytics to track performance and optimize your strategy",""
      icon: <className="w-8 h-8" />,""
      benefits: ["Engagement metrics", "Reach analysis", "Best time posting", "ROI tracking"]
    },",
        "
    {"}
        "
      title: "Content Creation Tools",""
      description: "Built-in tools for creating engaging visual content and captions",""
      icon: <Image className="w-8 h-8" />,""
      benefits: ["Image editor", "Video creator", "Caption generator", "Hashtag suggestions"]
    },",
        "
    {"}
        "
      title: "Team Collaboration",""
      description: "Collaborate with your team on content creation and approval workflows",""
      icon: <Users className="w-8 h-8" />,""
      benefits: ["Team management", "Approval workflows", "Content review", "Role permissions"]
    },",
        "
    {"}
        "
      title: "Automation & AI",""
      description: "AI-powered features to automate content creation and optimization",""
      icon: <className="w-8 h-8" />,""
      benefits: ["Auto-posting", "Content suggestions", "Optimal timing", "Trend analysis"]
    };
  ];
,
      const pricing = [",
        "
    {"}
        "
      name: "Starter",""
      price: "$29",""
      period: "per month",""
      description: "Perfect for small businesses and individuals",",
        "
      features: [",
        "
        "Up to 3 social accounts",""
        "30 posts per month",""
        "Basic analytics",""
        "Email support",""
        "Mobile app access";
      ],",
        "
      popular: false",
        "
    },",
        "
    {"}
        "
      name: "Professional",""
      price: "$79",""
      period: "per month",""
      description: "Ideal for growing businesses and agencies",",
        "
      features: [",
        "
        "Up to 10 social accounts",""
        "Unlimited posts",""
        "Advanced analytics",""
        "Team collaboration",""
        "Priority support",""
        "Content creation tools";
      ],",
        "
      popular: true",
        "
    },",
        "
    {"}
        "
      name: "Enterprise",""
      price: "$199",""
      period: "per month",""
      description: "For large organizations with advanced needs",",
        "
      features: [",
        "
        "Unlimited social accounts",""
        "White-label solution",""
        "Custom integrations",""
        "Dedicated support",""
        "Advanced security",""
        "Custom development";
      ],",
        "
      popular: false",
        "
    };
  ];
,
      const benefits = [",
        "
    {"}
        "
      title: "Save Time",""
      description: "Reduce social media management time by up to 70% with automation",""
      icon: <className="w-6 h-6" />",
        "
    },",
        "
    {""}
      title: "Increase Engagement",""
      description: "Boost engagement rates by 40% with optimized posting times",""
      icon: <Target className="w-6 h-6" />",
        "
    },",
        "
    {""}
      title: "Better Planning",""
      description: "Plan your content strategy with visual calendar and analytics",""
      icon: <Calendar className="w-6 h-6" />",
        "
    },",
        "
    {""}
      title: "Team Efficiency",""
      description: "Improve team collaboration and content approval workflows",""
      icon: <Users className="w-6 h-6" />""
    };

const SocialMediaSchedulerPage = () => {
  const features = [
    {
      title: "Multi-Platform Scheduling",";
      description: "Schedule posts across all major social media platforms from one dashboard",";
      icon: <Globe className ="w-8 h-8" />,";
      benefits: ["Facebook", "Twitter", "Instagram", "LinkedIn", "TikTok", "YouTube"]";
    },
    {
      title: "Content Calendar",";
      description: "Visual content calendar to plan and organize your social media strategy",";
      icon: <Calendar className ="w-8 h-8" />,";
      benefits: ["Drag & drop scheduling", "Bulk upload", "Content templates", "Holiday planning"]";
    },
    {
      title: "Analytics & Insights",";
      description: "Comprehensive analytics to track performance and optimize your strategy",";
      icon: <BarChart3 className ="w-8 h-8" />,";
      benefits: ["Engagement metrics", "Reach analysis", "Best time posting", "ROI tracking"]";
    },
    {
      title: "Content Creation Tools",";
      description: "Built-in tools for creating engaging visual content and captions",";
      icon: <Image className ="w-8 h-8" />,";
      benefits: ["Image editor", "Video creator", "Caption generator", "Hashtag suggestions"]";
    },
    {
      title: "Team Collaboration",";
      description: "Collaborate with your team on content creation and approval workflows",";
      icon: <Users className ="w-8 h-8" />,";
      benefits: ["Team management", "Approval workflows", "Content review", "Role permissions"]";
    },
    {
      title: "Automation & AI",";
      description: "AI-powered features to automate content creation and optimization",";
      icon: <Zap className ="w-8 h-8" />,";
      benefits: ["Auto-posting", "Content suggestions", "Optimal timing", "Trend analysis"]";
    }
  ];

  const pricing = [
    {
      name: "Starter",";
      price: "$29",";
      period: "per month",";
      description: "Perfect for small businesses and individuals",";
      features: [
        "Up to 3 social accounts",";
        "30 posts per month",";
        "Basic analytics",";
        "Email support",";
        "Mobile app access"";
      ],
      popular: false
    },
    {
      name: "Professional",";
      price: "$79",";
      period: "per month",";
      description: "Ideal for growing businesses and agencies",";
      features: [
        "Up to 10 social accounts",";
        "Unlimited posts",";
        "Advanced analytics",";
        "Team collaboration",";
        "Priority support",";
        "Content creation tools"";
      ],
      popular: true
    },
    {
      name: "Enterprise",";
      price: "$199",";
      period: "per month",";
      description: "For large organizations with advanced needs",";
      features: [
        "Unlimited social accounts",";
        "White-label solution",";
        "Custom integrations",";
        "Dedicated support",";
        "Advanced security",";
        "Custom development"";
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save Time",";
      description: "Reduce social media management time by up to 70% with automation",";
      icon: <Zap className ="w-6 h-6" />",
    },
    {
      title: "Increase Engagement",";
      description: "Boost engagement rates by 40% with optimized posting times",";
      icon: <Target className ="w-6 h-6" />",
    },
    {
      title: "Better Planning",";
      description: "Plan your content strategy with visual calendar and analytics",";
      icon: <Calendar className ="w-6 h-6" />",
    },
    {
      title: "Team Efficiency",";
      description: "Improve team collaboration and content approval workflows",";
      icon: <Users className ="w-6 h-6" />",
    }

  ];
,
      return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">",)
        "
      <EnhancedSEO",>
        "
        title="Social Media Scheduler - Zion Tech Group | Multi-Platform Social Media Management",
      description="Advanced social media scheduler with multi-platform posting, content calendar, _analytics, and team collaboration. Streamline your social media management.",
      keywords="social media scheduler, _social media management, _content calendar, _social media analytics, _team collaboration, social media automation",
      canonical="https://ziontechgroup.com/social-media-scheduler" />""
      {/* Hero Section */};
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">""
        <ResponsiveContainer className="text-center">""
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">",
        "
              Social Media Scheduler",
        "
            </span>",
        "
          </h1>",
        "
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",
        "
            Streamline your social media management with our comprehensive scheduler.",
        "
            Plan, _schedule, and analyze your content across all platforms from one dashboard.",
        "
          </p>",
        "
          <div className="flex flex-col sm:flex-row gap-4 justify-center">",
        "
            <FuturisticButton",>
        "
              href="/contact",
      variant="primary",
      size="lg",
      icon={<ArrowRight className="w-5 h-5" />};
            >",
        "
              Start Free Trial",
        "
            </FuturisticButton>",
        "
            <FuturisticButton",>
        "
              href="/demo",
      variant="outline",
      size="lg",
      icon={<Globe className="w-5 h-5" />};
            >",
        "
              Watch Demo",
        "
            </FuturisticButton>",
        "
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>",
        "
      {/* Features Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">",
        "
        <ResponsiveContainer>",
        "
          <div className="text-center mb-16">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">",
        "
              Powerful Social Media Features",
        "
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">",
        "
              Everything you need to manage your social media presence effectively.",
        "
            </p>",
        "
          </div>",
        "
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">""
            {features.map((feature, index) => (<FuturisticCard key={index} className="h-full">"")
                <div className="text-center mb-6">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">",
        "
                    {feature.icon};
                  </div>",
        "
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300 mb-4">{feature.description}</p>",
        "
                </div>",
        "
                <ul className="space-y-2">",
        "
                  {feature.benefits.map((benefit, benefitIndex) => (",)}
        "
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />",
        "
                      {benefit};
                    </li>",
        "
                  ))};
                </ul>",
        "
              </FuturisticCard>",
        "
            ))};
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>""
      {/* Pricing Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">",
        "
        <ResponsiveContainer>",
        "
          <div className="text-center mb-16">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">",
        "
              Simple, Transparent Pricing",
        "
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">",
        "
              Choose the plan that fits your social media needs. No hidden fees, no surprises.",
        "
            </p>",
        "
          </div>",
        "
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">",
        "
            {pricing.map((plan, index) => (",)}
        "
              <FuturisticCard key={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>",
        "
                {plan.popular && (",)}
        "
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">",
        "
                      Most Popular",
        "
                    </span>",
        "
                  </div>",
        "
                )};
                <div className="text-center mb-6">""
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>""
                  <div className="text-4xl font-bold text-cyan-400 mb-2">""
                    {plan.price};
                    <span className="text-lg text-gray-400">{plan.period}</span>",
        "
                  </div>",
        "
                  <p className="text-gray-300 text-sm">{plan.description}</p>",
        "
                </div>",
        "
                <ul className="space-y-3 mb-8">",
        "
                  {plan.features.map((feature, featureIndex) => (",)}
        "
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />",
        "
                      {feature};
                    </li>",
        "
                  ))};
                </ul>",
        "
                <FuturisticButton",>
        "
                  href="/contact",
      variant={plan.popular ? "primary" : "outline"},
      size="sm",
      className="w-full";
                >",
        "
                  Get Started",
        "
                </FuturisticButton>",
        "
              </FuturisticCard>",
        "
            ))};
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>""
      {/* Benefits Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">",
        "
        <ResponsiveContainer>",
        "
          <div className="text-center mb-16">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">",
        "
              Why Choose Our Social Media Scheduler?",
        "
            </h2>""
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">",
        "
              Join thousands of businesses who have streamlined their social media management with our scheduler.",
        "
            </p>",
        "
          </div>",
        "
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">",
        "
            {benefits.map((benefit, index) => (",)}
        "
              <div key={index} className="text-center">""
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">",
        "
                  {benefit.icon};
                </div>",
        "
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>""
                <p className="text-gray-300 text-sm">{benefit.description}</p>",
        "
              </div>",
        "
            ))};
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>""
      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">""
        <ResponsiveContainer className="text-center">""
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">",
        "
            Ready to Streamline Your Social Media?",
        "
          </h2>""
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",
        "
            Start your free trial today and see how our social media scheduler can transform your content strategy.",
        "
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">",
        "
            <FuturisticButton",>
        "
              href="/contact",
      variant="primary",
      size="lg",
      icon={<ArrowRight className="w-5 h-5" />};
            >",
        "
              Start Free Trial",
        "
            </FuturisticButton>",
        "
            <FuturisticButton",>
        "
              href="/demo",
      variant="outline",
      size="lg",
      icon={<Globe className="w-5 h-5" />};
            >",
        "
              Watch Demo",
        "
            </FuturisticButton>",
        "
          </div>",
        "
        </ResponsiveContainer>",
        "
      </section>",
        "
    </div>""
  )
    },
    {}
,
      export default SocialMediaSchedulerPage;
;

const ComponentName = () => {
  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">";
      <EnhancedSEO title ="Social Media Scheduler - Zion Tech Group | Multi-Platform Social Media Management"";
        description="Advanced social media scheduler with multi-platform posting, content calendar, _analytics, and team collaboration. Streamline your social media management."";
        keywords="social media scheduler, _social media management, _content calendar, _social media analytics, _team collaboration, social media automation"";
        canonical="https: //ziontechgroup.com/social-media-scheduler"",
      />

      {/* Hero Section */}
      <section className ="pt-20 pb-16 px-4 sm: px-6 lg:px-8">";
        <ResponsiveContainer className ="text-center">";
          <h1 className ="text-4xl md:text-6xl font-bold text-white mb-6">";
            <span className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">";
              Social Media Scheduler
            </span>
          </h1>
          <p className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">",
            Streamline your social media management with our comprehensive scheduler. 
            Plan, _schedule, and analyze your content across all platforms from one dashboard.
          </p>
          <div className ="flex flex-col sm: flex-row gap-4 justify-center">";
            <FuturisticButton href ="/contact"";
              variant="primary"";
              size="lg"",
              icon={<ArrowRight className ="w-5 h-5" />}";
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton href ="/demo"";
              variant="outline"";
              size="lg"";
              icon={<Globe className ="w-5 h-5" />}";
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className ="py-20 px-4 sm: px-6 lg:px-8">";
        <ResponsiveContainer>
          <div className ="text-center mb-16">";
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">";
              Powerful Social Media Features
            </h2>
            <p className ="text-xl text-gray-300 max-w-4xl mx-auto">";
              Everything you need to manage your social media presence effectively.
            </p>
          </div>
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">",
            {features.map((feature, index) => (<FuturisticCard key ={index} className="h-full">";
                <div className ="text-center mb-6">";
                  <div className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">";
                    {feature.icon}
                  </div>
                  <h3 className ="text-xl font-semibold text-white mb-3">{feature.title}</h3>";
                  <p className ="text-gray-300 mb-4">{feature.description}</p>";
                </div>
                <ul className ="space-y-2">";
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key ={benefitIndex} className="flex items-center text-sm text-gray-300">";
                      <CheckCircle className ="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />";
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className ="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">";
        <ResponsiveContainer>
          <div className ="text-center mb-16">";
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">",
              Simple, Transparent Pricing
            </h2>
            <p className ="text-xl text-gray-300 max-w-4xl mx-auto">";
              Choose the plan that fits your social media needs. No hidden fees, no surprises.
            </p>
          </div>
          <div className ="grid grid-cols-1 md: grid-cols-3 gap-8">",
            {pricing.map((plan, index) => (
              <FuturisticCard key ={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400'  ''}`}>";
                {plan.popular && (
                  <div className ="absolute -top-4 left-1/2 transform -translate-x-1/2">";
                    <span className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">";
                      Most Popular
                    </span>
                  </div>
                )}
                <div className ="text-center mb-6">";
                  <h3 className ="text-2xl font-bold text-white mb-2">{plan.name}</h3>";
                  <div className ="text-4xl font-bold text-cyan-400 mb-2">";
                    {plan.price}
                    <span className ="text-lg text-gray-400">{plan.period}</span>";
                  </div>
                  <p className ="text-gray-300 text-sm">{plan.description}</p>";
                </div>
                <ul className ="space-y-3 mb-8">";
                  {plan.features.map((feature, featureIndex) => (
                    <li key ={featureIndex} className="flex items-center text-sm text-gray-300">";
                      <CheckCircle className ="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />";
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton href ="/contact"";
                  variant={plan.popular ? "primary"  "outline"}";
                  size="sm"";
                  className="w-full"";
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className ="py-20 px-4 sm: px-6 lg:px-8">";
        <ResponsiveContainer>
          <div className ="text-center mb-16">";
            <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">";
              Why Choose Our Social Media Scheduler?
            </h2>
            <p className ="text-xl text-gray-300 max-w-4xl mx-auto">";
              Join thousands of businesses who have streamlined their social media management with our scheduler.
            </p>
          </div>
          <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">",
            {benefits.map((benefit, index) => (
              <div key ={index} className="text-center">";
                <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">";
                  {benefit.icon}
                </div>
                <h3 className ="text-lg font-semibold text-white mb-2">{benefit.title}</h3>";
                <p className ="text-gray-300 text-sm">{benefit.description}</p>";
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className ="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">";
        <ResponsiveContainer className ="text-center">";
          <h2 className ="text-3xl md:text-4xl font-bold text-white mb-6">";
            Ready to Streamline Your Social Media?
          </h2>
          <p className ="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">";
            Start your free trial today and see how our social media scheduler can transform your content strategy.
          </p>
          <div className ="flex flex-col sm:flex-row gap-4 justify-center">";
            <FuturisticButton href ="/contact"";
              variant="primary"";
              size="lg"",
              icon={<ArrowRight className ="w-5 h-5" />}";
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton href ="/demo"";
              variant="outline"";
              size="lg"";
              icon={<Globe className ="w-5 h-5" />}";
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SocialMediaSchedulerPage;

}

