export const metadata = { title: 'Micro SaaS Development | Zion Tech Group' } export default /**
 * MicroSaaSPage - Function description
 */
function MicroSaaSPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>Micro SaaS Development</h1> <p style={{margin_top: 8, color: '#374151'}}>We design, build, launch and operate revenue - generating micro SaaS products end - to - end.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Core features" details={["Multi - tenant architecture", "Auth (email, OAuth)", "Billing (Stripe)", "Admin + analytics", "In - app onboarding"]} /> <Item title="Growth stack" details={["SEO - ready marketing site", "Blog + docs", "Email campaigns", "Referral + affiliates"]} /> <Item title="Ops & reliability" details={["CI / CD", "Observability", "Error budgets", "SLOs", "On - call setup"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="MVP Sprint" price="$8k–$20k" features={["2–4 weeks", "MVP scope", "Stripe billing", "Basic analytics"]} /> <Plan name="Growth" price="$20k–$60k" features={["6–10 weeks", "SEO + content", "CRM + email", "Observability"]} /> <Plan name="Scale" price="$60k+" features={["Custom roadmap", "SRE + security", "Multi - region", "SLAs"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}
};
import React from 'react';
import Link from 'next/link';

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
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}
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
        href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Quote Request - {name}"
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

function CTASection() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MicroSaaSPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Micro SaaS Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete SaaS development from concept to deployment. We build scalable, secure, and user-friendly micro SaaS applications that drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Consultation"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Build</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From simple tools to complex platforms, we create micro SaaS solutions that solve real business problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceFeature
            icon="📊"
            title="Analytics Dashboards"
            description="Real-time data visualization and business intelligence tools"
            benefits={[
              "Custom metrics & KPIs",
              "Real-time data processing",
              "Interactive charts & graphs",
              "Export capabilities",
              "Mobile-responsive design"
            ]}
          />
          <ServiceFeature
            icon="🔐"
            title="User Management"
            description="Complete authentication and authorization systems"
            benefits={[
              "Multi-factor authentication",
              "Role-based permissions",
              "Social login integration",
              "Password management",
              "Session management"
            ]}
          />
          <ServiceFeature
            icon="💳"
            title="Payment Processing"
            description="Secure billing and subscription management"
            benefits={[
              "Stripe integration",
              "Multiple payment methods",
              "Subscription management",
              "Invoice generation",
              "Tax calculation"
            ]}
          />
          <ServiceFeature
            icon="🔌"
            title="API Development"
            description="RESTful APIs and webhook integrations"
            benefits={[
              "RESTful API design",
              "GraphQL implementation",
              "API documentation",
              "Rate limiting",
              "Webhook support"
            ]}
          />
          <ServiceFeature
            icon="📱"
            title="Mobile Apps"
            description="Cross-platform mobile applications"
            benefits={[
              "iOS & Android support",
              "Offline functionality",
              "Push notifications",
              "App store optimization",
              "Performance optimization"
            ]}
          />
          <ServiceFeature
            icon="☁️"
            title="Cloud Deployment"
            description="Scalable cloud infrastructure and deployment"
            benefits={[
              "AWS/Azure/GCP deployment",
              "Auto-scaling",
              "CDN integration",
              "SSL certificates",
              "Monitoring & logging"
            ]}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use modern, proven technologies to build fast, secure, and scalable applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "React", icon: "⚛️", description: "Frontend framework" },
            { name: "Next.js", icon: "▲", description: "Full-stack framework" },
            { name: "Node.js", icon: "🟢", description: "Backend runtime" },
            { name: "PostgreSQL", icon: "🐘", description: "Database" },
            { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
            { name: "Redis", icon: "🔴", description: "Caching layer" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Stripe", icon: "💳", description: "Payment processing" },
            { name: "Auth0", icon: "🔐", description: "Authentication" },
            { name: "Vercel", icon: "▲", description: "Deployment" },
            { name: "GitHub", icon: "🐙", description: "Version control" }
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$5,000"
            period="project"
            description="Perfect for MVPs and simple applications"
            features={[
              "Up to 5 pages/screens",
              "Basic user authentication",
              "Simple database design",
              "Basic API endpoints",
              "Deployment setup",
              "3 months support"
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Professional"
            price="$15,000"
            period="project"
            description="Most popular for growing businesses"
            features={[
              "Up to 15 pages/screens",
              "Advanced user management",
              "Payment integration",
              "Admin dashboard",
              "API documentation",
              "6 months support",
              "Analytics integration"
            ]}
            popular={true}
            cta="Get Started"
          />
          <PricingTier
            name="Enterprise"
            price="$50,000"
            period="project"
            description="For complex, scalable applications"
            features={[
              "Unlimited pages/screens",
              "Multi-tenant architecture",
              "Advanced security features",
              "Custom integrations",
              "Performance optimization",
              "12 months support",
              "Dedicated project manager"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time and within budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery & Planning",
              description: "We analyze your requirements and create a detailed project plan with timelines and milestones."
            },
            {
              step: "02",
              title: "Design & Prototyping",
              description: "Our designers create wireframes and prototypes to visualize your application before development."
            },
            {
              step: "03",
              title: "Development & Testing",
              description: "We build your application using agile methodology with regular testing and quality assurance."
            },
            {
              step: "04",
              title: "Deployment & Launch",
              description: "We deploy your application to production and provide ongoing support and maintenance."
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

      {/* Case Studies */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses transform their ideas into successful SaaS applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce Analytics Platform",
              description: "Built a comprehensive analytics dashboard for an e-commerce business, resulting in 40% increase in conversion rates.",
              metrics: "40% conversion increase",
              tech: "React, Node.js, PostgreSQL"
            },
            {
              title: "Project Management Tool",
              description: "Developed a custom project management solution with team collaboration features and time tracking.",
              metrics: "50% productivity boost",
              tech: "Next.js, MongoDB, Stripe"
            },
            {
              title: "Customer Support Portal",
              description: "Created an AI-powered customer support platform with chatbot integration and ticket management.",
              metrics: "60% faster response time",
              tech: "React, Python, OpenAI API"
            }
          ].map((caseStudy, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{caseStudy.title}</h3>
              <p className="text-gray-600 mb-4">{caseStudy.description}</p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold text-green-600">Result: </span>
                  <span className="text-gray-700">{caseStudy.metrics}</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-blue-600">Tech Stack: </span>
                  <span className="text-gray-700">{caseStudy.tech}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your SaaS?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create a custom solution that drives your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Project Inquiry"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
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