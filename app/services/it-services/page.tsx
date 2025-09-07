import React from 'react';
import Link from 'next/link';

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
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
        <div className="flex flex-wrap gap-1">
          {benefits.map((benefit, index) => (
            <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services Quote Request - {name}"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function ITServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete IT infrastructure, cloud solutions, and digital transformation services to modernize your business operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Consultation"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free IT Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITService
            title="Cloud Migration"
            description="Seamless migration to AWS, Azure, or Google Cloud with zero downtime and cost optimization"
            price="Starting at $5,000"
            features={[
              "Infrastructure assessment",
              "Migration planning & execution",
              "Data migration & validation",
              "Application modernization",
              "Cost optimization analysis"
            ]}
            benefits={["Reduced Costs", "Better Scalability", "Enhanced Security", "Improved Performance"]}
            icon="☁️"
            href="/services/cloud-migration"
          />
          <ITService
            title="DevOps & CI/CD"
            description="Automated deployment pipelines, infrastructure as code, and continuous integration"
            price="Starting at $3,000"
            features={[
              "CI/CD pipeline setup",
              "Infrastructure as code",
              "Container orchestration",
              "Automated testing",
              "Monitoring & alerting"
            ]}
            benefits={["Faster Deployments", "Reduced Errors", "Better Collaboration", "Automated Testing"]}
            icon="⚙️"
            href="/services/ci-cd-pipeline-builder"
          />
          <ITService
            title="Cybersecurity Suite"
            description="Comprehensive security assessment, implementation, and ongoing monitoring"
            price="Starting at $2,000"
            features={[
              "Security assessment & audit",
              "Penetration testing",
              "Vulnerability scanning",
              "Compliance management",
              "Security training & awareness"
            ]}
            benefits={["Enhanced Security", "Compliance", "Risk Reduction", "Peace of Mind"]}
            icon="🔒"
            href="/services/cybersecurity-suite"
          />
          <ITService
            title="Mobile Development"
            description="Native and cross-platform mobile app development for iOS and Android"
            price="Starting at $5,000"
            features={[
              "iOS & Android development",
              "Cross-platform solutions",
              "App store optimization",
              "Push notifications",
              "Analytics integration"
            ]}
            benefits={["Mobile Presence", "User Engagement", "Revenue Growth", "Brand Visibility"]}
            icon="📱"
            href="/services/mobile-development"
          />
          <ITService
            title="API Development"
            description="RESTful APIs, GraphQL, and microservices architecture for modern applications"
            price="Starting at $2,000"
            features={[
              "RESTful API design",
              "GraphQL implementation",
              "Microservices architecture",
              "API documentation",
              "Performance optimization"
            ]}
            benefits={["Better Integration", "Scalability", "Developer Experience", "Future-Proof"]}
            icon="🔗"
            href="/services/api-testing-suite"
          />
          <ITService
            title="Database Solutions"
            description="Database design, optimization, migration, and management services"
            price="Starting at $1,500"
            features={[
              "Database design & architecture",
              "Performance optimization",
              "Data migration",
              "Backup & recovery",
              "Monitoring & maintenance"
            ]}
            benefits={["Better Performance", "Data Security", "Scalability", "Reliability"]}
            icon="🗄️"
            href="/services/data-analytics"
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the latest technologies and frameworks to deliver cutting-edge solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Azure", icon: "🔵", description: "Microsoft cloud" },
            { name: "Google Cloud", icon: "🌐", description: "Google platform" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "Terraform", icon: "🏗️", description: "Infrastructure" },
            { name: "Jenkins", icon: "🔧", description: "CI/CD" },
            { name: "GitLab", icon: "🦊", description: "DevOps platform" },
            { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
            { name: "PostgreSQL", icon: "🐘", description: "SQL database" },
            { name: "Redis", icon: "🔴", description: "Caching" },
            { name: "Elasticsearch", icon: "🔍", description: "Search engine" }
          ].map((tech, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all IT services. Choose the plan that fits your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Basic"
            price="$2,000"
            period="month"
            description="Essential IT services for small businesses"
            features={[
              "Basic cloud setup",
              "Email & office solutions",
              "Basic security measures",
              "Monthly maintenance",
              "Email support"
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Professional"
            price="$8,000"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Advanced cloud solutions",
              "DevOps implementation",
              "Security monitoring",
              "24/7 support",
              "Performance optimization",
              "Backup & recovery"
            ]}
            popular={true}
            cta="Get Started"
          />
          <PricingTier
            name="Enterprise"
            price="$25,000"
            period="month"
            description="Complete IT transformation for large organizations"
            features={[
              "Custom infrastructure design",
              "Dedicated IT team",
              "Advanced security suite",
              "SLA guarantee",
              "Custom integrations",
              "White-label solutions"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure your IT infrastructure is robust, secure, and scalable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment & Planning",
              description: "We analyze your current IT infrastructure and create a comprehensive improvement plan."
            },
            {
              step: "02",
              title: "Design & Architecture",
              description: "Our experts design a scalable and secure IT architecture tailored to your needs."
            },
            {
              step: "03",
              title: "Implementation",
              description: "We implement the solution with minimal disruption to your business operations."
            },
            {
              step: "04",
              title: "Monitoring & Support",
              description: "Ongoing monitoring, maintenance, and support to ensure optimal performance."
            }
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your IT infrastructure and drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Project Inquiry"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your IT Transformation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}