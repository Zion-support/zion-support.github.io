import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Award, BarChart3, Bot, Brain, Bug, CheckCircle, Clock, Code, Cpu, Cross, Deep, Eye, FileText, From, Globe, Grid, Image, Mail, MessageSquare, Mic, Minimize, Monitor, Network, Phone, Search, Server, Settings, Shield, Star, Target, TrendingUp, Users, Video, Zap, Heart, Satellite, Car, TreePine } from 'lucide-react';
import Navigation from '../src/components/Navigation';
import SiteFooter from '../src/components/SiteFooter';
export default function AIServices() {;
  const title = 'AI Services — Zion Tech Group';
  const description = 'Cutting-edge AI solutions including autonomous systems, MLOps, and intelligent automation.';

  const aiServices = [
    {
      title: 'RAG Platform-in-a-Box',
      description: 'Retrieval augmented generation stack with connectors, governance, and analytics',
      pricing: '$4,000 - $18,000/month',
      delivery: '4-8 weeks',
    },
    {
      title: 'MLOps as a Service',
      description: 'Training, evaluation, deployment, monitoring, and compliance',
      pricing: '$3,500 - $16,000/month',
      delivery: '4-8 weeks',
    },
  ];
  const aiTechnologies = [;
  {;
      name: 'Machine Learning',;
      icon: Brain,;
      description: 'Custom ML models and algorithms';,
},;
    {;
      name: 'Natural Language Processing',;
      icon: MessageSquare,;
      description: 'Text analysis and generation';,
},;
    {;
      name: 'Computer Vision',;
      icon: Eye,;
      description: 'Image and video processing';,
},;
    {;
      name: 'Deep Learning',;
      icon: Cpu,;
      description: 'Neural networks and deep architectures';,
},;
    {;
      name: 'Reinforcement Learning',;
      icon: Target,;
      description: 'Autonomous decision making';,
},;
    {;
      name: 'Generative AI',;
      icon: FileText,;
      description: 'Content creation and synthesis';
];
  const benefits = [;
  {;
      title: 'Increased Efficiency',;
      description: 'Automate repetitive tasks and processes',;
      icon: Zap,;
      stat: '80%';,
},;
    {;
      title: 'Cost Reduction',;
      description: 'Reduce operational costs through automation',;
      icon: TrendingUp,;
      stat: '60%';,
},;
    {;
      title: 'Enhanced Accuracy',;
      description: 'Minimize human errors with AI precision',;
      icon: Target,;
      stat: '95%';,
},;
    {;
      title: '24/7 Availability',;
      description: 'Round-the-clock AI-powered services',;
      icon: Clock,;
      stat: '99.9%';
];
  return (;
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />;
      </Head>;

      <Navigation />;

      {/* Hero Section */}
      <section className=bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm: py-32">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8>;
          <div className=mx-auto max-w-3xl text-center">;
            <div className="flex items-center justify-center mb-6>;
              <Brain className=h-12 w-12 text-blue-600 mr-4" />;
              <Award className="h-6 w-6 text-blue-600 mr-2 />;
              <span className=text-base font-semibold leading-7 text-blue-600">;
                AI Services;
              </span>;
            </div>;
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl>;
              Artificial Intelligence Solutions;
            </h1>;
            <p className=mt-6 text-lg leading-8 text-gray-600">;
              Transform your business with cutting-edge AI technologies. From quantum machine learning ;
              to consciousness simulation, we deliver next-generation intelligent solutions that drive ;
              innovation, efficiency, and competitive advantage across all industries.;
            </p>;
            <div className="mt-10 flex items-center justify-center gap-x-6>;
              <Link;
                href=/contact";
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover: bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600;
              >;
                Get Started;
                <ArrowRight className=ml-2 h-4 w-4 inline" />;
              </Link>;
              <Link;
                href="/pricing-guide";
                className=text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">;
                View Pricing <span aria-hidden="true>→</span>;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className=py-24 sm: py-32 bg-white">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8>;
          <div className=mx-auto max-w-2xl text-center mb-16">;
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl>;
              Why Choose Our AI Services?;
            </h2>;
            <p className=mt-6 text-lg leading-8 text-gray-600">;
              Proven results and measurable impact for your business;
            </p>;
          </div>;
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4>;
            {benefits.map((benefit, index) => (;
              <div key={index} className=text-center">;
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-4>;
                  <benefit.icon className=h-8 w-8 text-blue-600" />;
                </div>;
                <h3 className="text-2xl font-bold text-gray-900 mb-2>;
                  {benefit.stat}
                </h3>;
                <h4 className=text-lg font-semibold text-gray-900 mb-2">;
                  {benefit.title}
                </h4>;
                <p className="text-gray-600>{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* AI Technologies */}
      <section className=py-24 sm: py-32 bg-gray-50">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8>;
          <div className=mx-auto max-w-2xl text-center mb-16">;
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl>;
              AI Technologies We Master;
            </h2>;
            <p className=mt-6 text-lg leading-8 text-gray-600">;
              Cutting-edge AI technologies powering the future of business;
            </p>;
          </div>;
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3>;
            {aiTechnologies.map((tech, index) => (;
              <div;
                key={index}
                className=bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">;
                <div className="flex items-center mb-4>;
                  <div className=flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">;
                    <tech.icon className="h-6 w-6 text-blue-600 />;
                  </div>;
                  <h3 className=text-lg font-semibold text-gray-900 ml-4">;
                    {tech.name}
                  </h3>;
                </div>;
                <p className="text-gray-600>{tech.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* AI Services Grid */}
      <section className=py-24 sm: py-32 bg-white">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8>;
          <div className=mx-auto max-w-2xl text-center mb-16">;
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl>;
              Our AI Service Portfolio;
            </h2>;
            <p className=mt-6 text-lg leading-8 text-gray-600">;
              Comprehensive AI solutions tailored to your business needs. All;
              services include implementation, training, and ongoing support.;
              Contact us at{' '}
              <a;
                href="mailto:kleber@ziontechgroup.com;
                className=text-blue-600 hover:text-blue-500">;
                kleber@ziontechgroup.com;
              </a>{' '}
              or call{' '}
              <a;
                href="tel:+13024640950;
                className=text-blue-600 hover:text-blue-500">;
                +1 302 464 0950;
              </a>{' '}
              for custom pricing.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 gap-8 lg: grid-cols-2>;
            {aiServices.map((service, index) => (;
              <div;
                key={index}
                className=group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">;
                <div className="flex items-center gap-x-3 mb-6>;
                  <div className=flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">;
                    <service.icon className="h-7 w-7 text-white />;
                  </div>;
                  <div>;
                    <h3 className=text-xl font-semibold text-gray-900">;
                      {service.title}
                    </h3>;
                    <p className="text-sm text-blue-600 font-medium>;
                      {service.category}
                    </p>;
                  </div>;
                </div>;
                <p className=text-gray-600 mb-6">{service.description}</p>;
                <ul className="space-y-3 mb-6>;
                  {service.features.map((feature, featureIndex) => (;
                    <li;
                      key={featureIndex}
                      className=flex items-center gap-x-3">;
                      <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 />;
                      <span className=text-sm text-gray-700">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <div className="flex items-center justify-between>;
                  <div className=flex items-center space-x-4 text-sm text-gray-500">;
                    <div className="flex items-center space-x-1>;
                      <Clock className=h-4 w-4" />;
                      <span>{service.delivery}</span>;
                    </div>;
                    <div className="font-semibold text-blue-600>;
                      {service.pricing}
                    </div>;
                  </div>;
                  <Link;
                    href=/contact";
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover: text-blue-500 transition-colors group;
                  >;
                    Get Started;
                    <ArrowRight className=ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm: py-24>;
        <div className=mx-auto max-w-7xl px-6 lg:px-8">;
          <div className="mx-auto max-w-2xl text-center>;
            <h2 className=text-3xl font-bold tracking-tight text-white sm:text-4xl">;
              Ready to Transform Your Business with AI?;
            </h2>;
            <p className="mt-6 text-lg leading-8 text-blue-100>;
              Let's discuss how our AI solutions can drive your business;
              forward. Get a free consultation and custom proposal.;
            </p>;
            <div className=mt-10 flex items-center justify-center gap-x-6">;
              <Link;
                href="/contact;
                className=rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover: bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">;
                Schedule Consultation;
              </Link>;
              <a;
                href="tel:+13024640950;
                className=text-sm font-semibold leading-6 text-white hover:text-blue-100">;
                Call +1 302 464 0950 <span aria-hidden="true">→</span>;
              </a>;
            </div>;
          </div>;
        </div>;
      </section>;
      ;
      <SiteFooter />;
    </>;
  )}
  );,
}

