import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and digital transformation solutions for modern businesses.',
  keywords: 'IT services, cloud migration, cybersecurity, infrastructure, digital transformation, IT consulting'
};

interface ITServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  href: string;
}

function ITService({ title, description, price, features, benefits, icon, href }: ITServiceProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
    </Link>
  );
}

interface PlanProps {
  name: string;
  price: string;
  duration: string;
  features: string[];
}

function Plan({ name, price, duration, features }: PlanProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">{duration}</div>
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/contact"
        className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
}

export default function ITServicesPage() {
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.",
      price: "From $15k",
      features: ["AWS/Azure/GCP Migration", "Zero Downtime", "Security Compliance", "Cost Optimization"],
      benefits: ["Reduced Infrastructure Costs", "Improved Scalability", "Enhanced Security", "Better Performance"],
      icon: "☁️",
      href: "/contact"
    },
    {
      title: "DevOps & SRE",
      description: "Implement DevOps best practices and Site Reliability Engineering to ensure your systems run smoothly.",
      price: "From $10k",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Automated Deployments"],
      benefits: ["Faster Deployments", "Reduced Downtime", "Better Monitoring", "Improved Team Productivity"],
      icon: "🔧",
      href: "/contact"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions and compliance management.",
      price: "From $8k",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      benefits: ["Enhanced Security", "Regulatory Compliance", "Risk Mitigation", "Peace of Mind"],
      icon: "🛡️",
      href: "/contact"
    },
    {
      title: "Infrastructure Management",
      description: "Manage and optimize your IT infrastructure for maximum performance and reliability.",
      price: "From $5k",
      features: ["24/7 Monitoring", "Performance Optimization", "Capacity Planning", "Disaster Recovery"],
      benefits: ["Improved Uptime", "Cost Savings", "Better Performance", "Reduced Risk"],
      icon: "🏗️",
      href: "/contact"
    }
  ];

  const plans = [
    {
      name: "Assessment",
      price: "$4k–$10k",
      duration: "2 weeks",
      features: ["Cloud review", "Security audit", "Performance analysis", "Roadmap creation"]
    },
    {
      name: "Implementation",
      price: "$15k–$50k",
      duration: "4–8 weeks",
      features: ["Infrastructure setup", "CI/CD implementation", "Monitoring setup", "Team training"]
    },
    {
      name: "Managed Services",
      price: "$5k+/mo",
      duration: "Ongoing",
      features: ["24/7 monitoring", "SLO management", "Cost optimization", "Regular reports"]
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Transform your IT infrastructure with our comprehensive services. From cloud migration to cybersecurity, we provide end-to-end solutions that drive business growth.
        </p>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of IT services to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ITService key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Plan key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our certified professionals have years of experience in cloud technologies, cybersecurity, and infrastructure management.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                We've successfully completed hundreds of projects for businesses of all sizes, from startups to enterprises.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Our team is available around the clock to ensure your systems run smoothly and securely.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost-Effective</h3>
              <p className="text-gray-600">
                We help you optimize costs while improving performance and security across your IT infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how our IT services can help your business achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}