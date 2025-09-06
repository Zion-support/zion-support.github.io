
import React from 'react';
import Link from 'next/link';
ursor/automate-test-improve-and-merge-code-646c;
import Image from 'next/image';
import { LightBulbIcon,CpuChipIcon,GlobeAltIcon,ShieldCheckIcon,ChartBarIcon,UserGroupIcon,ArrowRightIcon,CheckCircleIcon,StarIcon,RocketLaunchIcon;
 } from '@heroicons/react/24/outline';
const features = [;
  {name: 'AI Solutions',description: 'Custom AI models, automation, and intelligent systems that transform your business operations.',icon: LightBulbIcon,color: 'blue';
  },{name: 'Micro SaaS',description: 'Scalable, secure micro SaaS products that solve specific business challenges.',icon: CpuChipIcon,color: 'purple';
  },{name: 'IT Services',description: 'Cloud migration, DevOps, SRE, and infrastructure management for enterprise scale.',icon: GlobeAltIcon,color: 'green';
  },{name: 'Security First',description: 'Advanced cybersecurity and data protection for enterprise-grade applications.',icon: ShieldCheckIcon,color: 'red';
  },{name: 'Analytics & Insights',description: 'Real-time data analysis and predictive modeling for informed decision making.',icon: ChartBarIcon,color: 'indigo';
  },{name: 'Team Collaboration',description: 'Seamless integration tools for distributed teams and remote work environments.',icon: UserGroupIcon,color: 'orange';
  }
];const stats = [;
  { label: 'Companies Served', value: '500+' },{ label: 'Projects Completed', value: '1,200+' },{ label: 'Years of Experience', value: '10+' },{ label: 'Countries', value: '25+' }
];const testimonials = [;
  {content: "Zion Tech Group transformed our AI infrastructure completely. Their solutions increased our efficiency by 300%.",author: "Sarah Johnson",role: "CTO, TechCorp",rating: 5;
  },{content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",author: "Michael Chen",role: "Founder, StartupXYZ",rating: 5;
  },{content: "Outstanding IT services and support. They helped us migrate to the cloud seamlessly.",author: "Emily Rodriguez",role: "IT Director, GlobalCorp",rating: 5;
  }
];export default function HomePage() {return (<div className="min-h-screen bg-white">;
import {
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  StarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';


const stats = [
  { label: 'Companies Served', value: '500+' },
  { label: 'Projects Completed', value: '1,200+' },
  { label: 'Years of Experience', value: '10+' },
  { label: 'Countries', value: '25+' }
];

const features = [
  {
    name: 'AI Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence solutions including machine learning, NLP, and computer vision.',
    href: '/services/ai-services',
    icon: CpuChipIcon,
    color: 'blue'
  },
  {
    name: 'Micro SaaS Development',
    description: 'Build and launch your next micro SaaS product with our full-stack development expertise and rapid deployment capabilities.',
    href: '/services/micro-saas',
    icon: RocketLaunchIcon,
    color: 'green'
  },
  {
    name: 'Enterprise IT',
    description: 'Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation solutions.',
    href: '/services/it-services',
    icon: ShieldCheckIcon,
    color: 'purple'
  }
];

const testimonials = [
  {
    content: "Zion Tech Group transformed our AI infrastructure completely. Their solutions increased our efficiency by 300%.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    rating: 5
  },
  {
    content: "The micro SaaS platform they built for us has been a game-changer. Highly recommend their services.",
    author: "Michael Chen",
    role: "Founder, StartupXYZ",
    rating: 5
  },
  {
    content: "Outstanding IT services and support. They helped us migrate to the cloud seamlessly.",
    author: "Emily Rodriguez",
    role: "IT Director, GlobalCorp",
    rating: 5
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">;
        <div className="absolute inset-0 bg-black/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">;
          <div className="text-center">;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8">;
              <RocketLaunchIcon className="h-4 w-4 mr-2" />;
              Trusted by 500+ companies worldwide;
            </div>;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">;
              Build and scale with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">;
                AI;
              </span>,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">;
                Micro SaaS;
              </span>{' '}
              and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">;
                Enterprise IT;
              </span>;
            </h1>;
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">;
              We design, build and operate production-grade platforms: AI copilots, data/ML pipelines,automation, cloud infrastructure, and secure micro SaaS products.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">;
              <Link;
                href="/services";
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1";
              >;
                Explore Services;
                <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />;
              </Link>;
              <Link;
                href="/contact";
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm";
              >;
                Get Started;
              </Link>;
            </div>;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Enterprise IT
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              We design, build and operate production-grade platforms: AI copilots, data/ML pipelines,
              automation, cloud infrastructure, and secure micro SaaS products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Services
                <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">;
              {stats.map((stat) => (<div key={stat.label} className="text-center">;
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>;
                  <div className="text-blue-200 text-sm">{stat.label}</div>;
                </div>;
              ))}
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Services Preview */}
      <div className="py-20 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
              Our Core Services;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We deliver enterprise-grade solutions that drive real business results across AI, micro SaaS, and IT services.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {features.slice(0, 3).map((feature) => (<div key={feature.name} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">;
                <div className={`inline-flex p-3 rounded-xl bg-${feature.color}-100 mb-6`}>;
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />;
                </div>;
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.name}</h3>;
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>;
                <Link;
                  href="/services";
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade solutions that drive real business results across AI, micro SaaS, and IT services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex p-3 rounded-xl bg-${feature.color}-100 mb-6`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <Link
                  href={feature.href}
                  className={`inline-flex items-center text-${feature.color}-600 font-semibold hover:text-${feature.color}-700 transition-colors`}
                >;
                  Learn More;
                  <ArrowRightIcon className="h-4 w-4 ml-2" />;
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;
function ServiceCard() {return (<Link;
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300";
    >;
      <div className="flex items-center mb-4">;
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>;
      {bullets.length > 0 && (<ul className="space-y-1">;
          {bullets.map((bullet, index) => (<li key={index} className="text-sm text-gray-600 flex items-center">;
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>;
              {bullet}
            </li>;
          ))}
        </ul>;
      )}
    </Link>;
  )}function ServiceCard() {return (<Link;
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300";
    >;
      <div className="flex items-center mb-4">;
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>;
      <div className="mt-4">;
        <span className="text-blue-600 font-medium text-sm hover:text-blue-800">;
          Learn more →;
        </span>;
      </div>;
    </Link>;
  )}export default function HomePage() {return (<div className="space-y-16">;
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">;
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">;
          Zion Tech Group;
        </h1>;
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">;
          Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with;
          our comprehensive suite of intelligent services.;
        </p>;
        <div className="flex flex-col sm:flex-row gap-4 justify-center">;
          <Link;
            href="/services";
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus-visible:focus";
          >;
            Explore Services;
          </Link>;
          <a;
            href="https://ziontechgroup.com";
            target="_blank";
            rel="noopener noreferrer";
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus";
          >;
            View Services;
            Visit Main Site;
ursor/automate-test-improve-and-merge-code-646c;
          </a>;
        </div>;
      </section>;
ursor/automate-test-improve-and-merge-code-646c;
      {/* Featured Services */}
      <section className="py-12">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            Our Core Services;
          </h2>;
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
            Comprehensive solutions for modern businesses, from AI-powered tools;
            to complete IT infrastructure.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <ServiceCard;
            title="Micro SaaS Solutions";
            href="/services/micro-saas";
            description="End-to-end product development with billing, auth, analytics and growth optimization";
            bullets={[;
              "Custom SaaS development","Payment integration","User authentication","Analytics dashboard","API development";
            ]}
            icon="🚀";
          />;
          <ServiceCard;
            title="AI Services";
            href="/services/ai-services";
            description="Cutting-edge AI solutions for automation, analytics, and intelligent decision making";
            bullets={[;
              "AI chatbots & assistants","Machine learning models","Natural language processing","Computer vision","Predictive analytics";
            ]}
            icon="🤖";
          />;
          <ServiceCard;
            title="IT Services";
            href="/services/it-services";
            description="Complete IT infrastructure, cloud migration, and digital transformation solutions";
            bullets={[;
              "Cloud migration","DevOps & CI/CD","Infrastructure management","Security solutions","24/7 support";
            ]}
            icon="💻";
          />;
          <Card;
            title="Blockchain";
            href="/services/blockchain";
            description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions.";
            icon="⛓️";
          />;
          <Card;
            title="Cybersecurity";
            href="/services/cybersecurity";
            description="Penetration testing, security audits, compliance and incident response.";
            icon="🔒";
          />;
          <Card;
            title="Cloud Services";
            href="/services/cloud-services";
            description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP.";
            icon="☁️";
          />;
      <section className="py-20 px-4 text-center">;
        <div className="container mx-auto max-w-6xl">;
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">;
            Zion Tech Group;
          </h1>;
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">;
            Leading AI & Technology Solutions for a Smarter Future;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              href="/services";
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors";
            >;
              Explore Services;
            </Link>;
            <Link;
              href="/contact";
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors";
            >;
              Get Started;
            </Link>;
          </div>;
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus";
          >;
            Visit Main Site;
          </a>;
        </div>;
      </section>;
      {/* Featured Services */}
      <section className="py-12">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            Our Core Services;
          </h2>;
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
            Comprehensive solutions for modern businesses, from AI-powered tools;
            to complete IT infrastructure.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <ServiceCard;
            title="Micro SaaS Solutions";
            href="/services/micro-saas";
            description="End-to-end product development with billing, auth, analytics and growth optimization";
            bullets={[;
              "Custom SaaS development","Payment integration","User authentication","Analytics dashboard","API development";
            ]}
            icon="🚀";
          />;
          <ServiceCard;
            title="AI Services";
            href="/services/ai-services";
            description="Cutting-edge AI solutions for automation, analytics, and intelligent decision making";
            bullets={[;
              "AI chatbots & assistants","Machine learning models","Natural language processing","Computer vision","Predictive analytics";
            ]}
            icon="🤖";
          />;
          <ServiceCard;
            title="IT Services";
            href="/services/it-services";
            description="Complete IT infrastructure, cloud migration, and digital transformation solutions";
            bullets={[;
              "Cloud migration","DevOps & CI/CD","Infrastructure management","Security solutions","24/7 support";
            ]}
            icon="💻";
          />;
          <ServiceCard;
            title="Blockchain";
            href="/services/blockchain";
            description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions.";
            icon="⛓️";
          />;
          <ServiceCard;
            title="Cybersecurity";
            href="/services/cybersecurity";
            description="Penetration testing, security audits, compliance and incident response.";
            icon="🔒";
          />;
          <ServiceCard;
            title="Cloud Services";
            href="/services/cloud-services";
            description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP.";
            icon="☁️";
          />;
        </div>;
      </section>;
      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 rounded-lg">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            Why Choose Zion Tech Group?;
          </h2>;
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
            We combine technical expertise with business acumen to deliver;
            solutions that drive real results.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          <div className="text-center p-6">;
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
              <span className="text-2xl">⚡</span>;
      <section className="py-16 px-4 bg-gray-50">;
        <div className="container mx-auto max-w-6xl">;
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Zion Tech Group?</h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center p-6">;
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl">⚡</span>;
              </div>;
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>;
              <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>;
          <div className="text-center p-6">;
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
              <span className="text-2xl">⚡</span>;
            </div>;
            <h3 className="text-lg font-semibold text-gray-900 mb-2">;
              Fast Delivery;
            </h3>;
            <p className="text-gray-600">;
              Rapid development and deployment with agile methodologies;
      <div className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We combine cutting-edge technology with deep industry expertise to deliver solutions that work.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="inline-flex p-4 rounded-full bg-blue-100 mb-6">;
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />;
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>;
              <p className="text-gray-600">Bank-level security with compliance certifications and audit trails.</p>;
            </div>;
            <div className="text-center">;
              <div className="inline-flex p-4 rounded-full bg-green-100 mb-6">;
                <ChartBarIcon className="h-8 w-8 text-green-600" />;
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Architecture</h3>;
              <p className="text-gray-600">Solutions that grow with your business and handle enterprise-scale loads.</p>;
            </div>;
            <div className="text-center">;
              <div className="inline-flex p-4 rounded-full bg-purple-100 mb-6">;
                <CpuChipIcon className="h-8 w-8 text-purple-600" />;
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Development</h3>;
              <p className="text-gray-600">Tailored solutions designed specifically for your unique requirements.</p>;
            </div>;
            <div className="text-center">;
              <div className="inline-flex p-4 rounded-full bg-orange-100 mb-6">;
                <UserGroupIcon className="h-8 w-8 text-orange-600" />;
              </div>;
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Support</h3>;
              <p className="text-gray-600">24/7 enterprise support with dedicated account managers.</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Contact CTA */}<section className="py-12">;
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">;
            Let's discuss your project and create a custom solution that drives;
            real business value. Our team has delivered 1000+ successful;
            projects across various industries.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a;
              href="tel:+13024640950";
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors";
            >;
              Call +1 302 464 0950;
            </a>;
            <a;
              href="mailto:kleber@ziontechgroup.com";
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors";
            >;
              Email Us;
            </a>;
          </div>;
          <div className="mt-6 text-sm text-gray-600">;
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>;
            <p className="mt-2 text-lg font-semibold text-blue-600">;
              Ready to transform your business? Get a free consultation today!;
            </p>;
      <section className="py-16 px-4">;
        <div className="container mx-auto max-w-4xl">;
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">;
            <h2 className="text-3xl font-bold text-gray-900 mb-4">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-600 mb-8">;
              Let's discuss how we can help you achieve your technology goals;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <a;
                href="tel:+13024640950";
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors";
              >;
                Call +1 302 464 0950;
              </a>;
              <a;
                href="mailto:kleber@ziontechgroup.com";
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors";
              >;
                Email Us;
              </a>;
            </div>;
            <div className="mt-6 text-sm text-gray-600">;
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>;
            </div>;
      <section className="py-12">;
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">;
            Let&apos;s discuss your project and create a custom solution that drives real business value.;
            Our team has delivered 1000+ successful projects across various industries.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a;
              href="tel:+13024640950";
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors";
            >;
              Call +1 302 464 0950;
            </a>;
            <a;
              href="mailto:kleber@ziontechgroup.com";
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors";
            >;
              Email Us;
            </a>;
          </div>;
          <div className="mt-6 text-sm text-gray-600">;
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>;
          </div>;
ursor/automate-test-improve-and-merge-code-646c;
        </div>;
      </section>;
    </div>;
  )}}function FeatureCard() {return (<div className="text-center p-6">;
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>;
      <p className="text-gray-600">{description}</p>;
    </div>;
  )}
ursor/automate-test-improve-and-merge-code-646c;
    </main>;
  )}
      {/* Testimonials */}
      <div className="py-20 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">;
              What Our Clients Say;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Don't just take our word for it. Here's what our clients have to say about working with us.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {testimonials.map((testimonial, index) => (<div key={index} className="bg-white p-8 rounded-2xl shadow-lg">;
                <div className="flex items-center mb-4">;
                  {[...Array(testimonial.rating)].map((_, i) => (<StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />;
                  ))}
                </div>;
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>;
                <div>;
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>;
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>;
                </div>;
              </div>;
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-blue-100 mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security with compliance certifications and audit trails.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-green-100 mb-6">
                <ChartBarIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Architecture</h3>
              <p className="text-gray-600">Solutions that grow with your business and handle enterprise-scale loads.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-purple-100 mb-6">
                <CpuChipIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Development</h3>
              <p className="text-gray-600">Tailored solutions designed specifically for your unique requirements.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-orange-100 mb-6">
                <UserGroupIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600">24/7 enterprise support with dedicated account managers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>;
        </div>;
      </div>;
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;
            Join hundreds of companies already using our AI-powered solutions to drive innovation and growth.;
            Let's build something amazing together.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              href="/contact";
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1";
            >;
              Start Your Project;
              <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />;
            </Link>;
            <Link;
              href="/services";
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200";
            >;
              View Our Services;
            </Link>;
          </div>;
        </div>;
      </div>;
      {/* CTA Section */}
      <section className="text-center py-16">;
        <h2 className="text-3xl font-bold text-gray-900 mb-6">;
          Ready to Transform Your Business?;
        </h2>;
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">;
          Let's discuss your project and create a custom solution that drives;
          real business value. Our team has delivered 1000+ successful;
          projects across various industries.;
        </p>;
        <Link;
          href="/contact";
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors";
        >;
          Get Started Today;
        </Link>;
      </section>;
    </div>;
  )}
export default function Home() {return (<div>;
      <h1>Zion Tech Group</h1>;
      <p>AI, Micro SaaS, and IT Services</p>;
    </div>;
  )}
      <div className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using our AI-powered solutions to drive innovation and growth.
            Let&apos;s build something amazing together.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
