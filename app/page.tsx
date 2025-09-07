<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ArrowRightIcon, 
  CheckCircleIcon, 
  SparklesIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI Solutions & IT Services',
  description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services. Transform your business with cutting-edge technology.',
  keywords: 'AI, artificial intelligence, technology solutions, cloud computing, cybersecurity, data analytics, digital transformation',
  openGraph: {
    title: 'Zion Tech Group - AI Solutions & IT Services',
    description: 'Leading provider of AI solutions, micro SaaS development, and enterprise IT services. Transform your business with cutting-edge technology.',
    type: 'website',
  },
};

export default function HomePage() {
  const services = [
    {
      icon: <CpuChipIcon className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Advanced AI and machine learning solutions to transform your business operations.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <CloudIcon className="w-8 h-8" />,
      title: "Micro SaaS",
      description: "Custom micro SaaS development and deployment services for modern businesses.",
      features: ["Custom Development", "Cloud Deployment", "Scalable Architecture", "API Integration"]
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "IT Services",
      description: "Comprehensive enterprise IT infrastructure and security solutions.",
      features: ["Infrastructure Management", "Cybersecurity", "Cloud Migration", "24/7 Support"]
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
              <SparklesIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Leading provider of AI solutions, micro SaaS development, and comprehensive enterprise IT services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/solutions"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let's discuss your project and create a custom solution that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/research"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Research
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
=======
<<<<<<< HEAD
export default function Home() { return (<main style={{padding:'2rem'}}><h1>Zion Tech Group</h1><p>Welcome.</p></main>) }
=======
import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD
interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef

function Card({ title, href, description, bullets = [], icon }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

function ServiceCard({ title, href, description, bullets = [], icon }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

<<<<<<< HEAD
export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with our comprehensive suite of intelligent services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus-visible:focus"
          >
            Explore Services
          </Link>
<<<<<<< HEAD
          <a
            href="https://ziontechgroup.com"
            target="_blank"
            rel="noopener noreferrer"
=======


=======
          <a 
            href="https://ziontechgroup.com" 


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus"
          >
            Visit Main Site
          </a>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12">
<<<<<<< HEAD
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for modern businesses, from AI-powered tools to complete IT infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Micro SaaS Solutions"
            href="/services/micro-saas"
            description="End-to-end product development with billing, auth, analytics and growth optimization"
            bullets={[
              "Custom SaaS development",
              "Payment integration",
              "User authentication",
              "Analytics dashboard",
              "API development"
            ]}
            icon="🚀"
          />
          <ServiceCard
            title="AI Services"
            href="/services/ai-services"
            description="Cutting-edge AI solutions for automation, analytics, and intelligent decision making"
            bullets={[
              "AI chatbots & assistants",
              "Machine learning models",
              "Natural language processing",
              "Computer vision",
              "Predictive analytics"
            ]}
            icon="🤖"
          />
          <ServiceCard
            title="IT Services"
            href="/services/it-services"
            description="Complete IT infrastructure, cloud migration, and digital transformation solutions"
            bullets={[
              "Cloud migration",
              "DevOps & CI/CD",
              "Infrastructure management",
              "Security solutions",
              "24/7 support"
            ]}
            icon="💻"
=======
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


          <Card 
            title="Micro SaaS" 
            href="/services/micro-saas" 
            description="End-to-end product engineering with billing, auth, analytics and growth." 
            icon="🚀" 
          />
          <Card 
            title="AI Services" 
            href="/services/ai-services" 
            description="LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps." 
            icon="🤖" 
          />
          <Card 
            title="IT Services" 
            href="/services/it-services" 
            description="Cloud migration, DevOps, SRE, security hardening and cost optimization." 
            icon="⚙️" 


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<<<<<<< HEAD
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
            <p className="text-gray-600">Tailored solutions that fit your specific business needs</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss your project and find the perfect solution for your business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quote
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
=======


          <FeatureCard 
            title="Fast Delivery" 
            description="Rapid prototyping and deployment with modern tools and practices." 
          />
          <FeatureCard 
            title="Scalable Architecture" 
            description="Built for growth with cloud-native, microservices architecture." 
          />
          <FeatureCard 
            title="24/7 Support" 
            description="Round-the-clock monitoring and support for your critical systems." 
          />
          <FeatureCard 
            title="Cost Effective" 
            description="Optimized solutions that reduce operational costs and improve efficiency." 


          />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}



function Card({ title, description, href, icon }: { 
  title: string; 
  description: string; 
  href: string; 
  icon: string; 
}) {
  return (
    <Link 
      href={href} 


      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}



function FeatureCard({ title, description }: { 
  title: string; 
  description: string; 
}) {


  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
>>>>>>> merged-prs-20250907-203621
>>>>>>> 0520e732de05ab9f8deabc8226d9d5953c358da4
