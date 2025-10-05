import ArrowRight from 'next/link';
import { ArrowRight, User } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & IT Services | Zion Tech Group - Enterprise Solutions',
  description: 'Comprehensive AI services, micro SaaS solutions, and IT consulting. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT consulting, cloud migration, DevOps, enterprise software, automation'
};

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Data Analytics',
  description: 'Transform data into actionable insights with predictive modeling and real-time dashboards',
  icon: '📊',
  features: [
        'Predictive Analytics & Forecasting',
        'Real-time Business Intelligence',
        'Machine Learning Model Development',
        'Data Visualization & Reporting',
        'Custom Analytics Solutions'
      ],
  href: '/services/ai-data-analytics'
    },
    {
      title: 'AI Workflow Automation',
  description: 'Automate business processes with intelligent workflow design and smart triggers',
  icon: '⚡',
  features: [
        'Process Automation Design',
        'Intelligent Document Processing',
        'Business Rule Engine Development',
        'Workflow Optimization',
        'Integration & Orchestration'
      ],
  href: '/services/ai-workflow-automation'
    },
    {
      title: 'AI Virtual Assistant',
  description: '24/7 intelligent customer support with natural language processing',
  icon: '🤖',
  features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Intelligent Routing',
        'Sentiment Analysis',
        'Continuous Learning Systems'
      ],
  href: '/services/ai-virtual-assistant'
    },
    {
      title: 'Autonomous Business Operations',
  description: 'Self-managing AI systems that operate entire business processes autonomously',
  icon: '🧠',
  features: [
        'Autonomous Process Management',
        'Predictive Maintenance',
        'Intelligent Resource Allocation',
        'Self-healing Systems',
        'Continuous Optimization'
      ],
  href: '/services/autonomous-operations'
    },
    {
      title: 'Generative AI Solutions',
  description: 'Create, innovate, and generate novel solutions with cutting-edge generative intelligence',
  icon: '✨',
  features: [
        'Content Generation Systems',
        'Creative AI Applications',
        'Multimodal Generation',
        'Adaptive Learning Systems',
        'Innovation Automation'
      ],
  href: '/services/generative-ai'
    },
    {
      title: 'Cloud Migration & DevOps',
  description: 'Seamless cloud transitions and optimized DevOps practices for modern infrastructure',
  icon: '☁️',
  features: [
        'Cloud Architecture Design',
        'Migration Strategy & Execution',
        'CI/CD Pipeline Development',
        'Infrastructure as Code',
        'Monitoring & Observability'
      ],
  href: '/services/cloud-migration'
    },
    {
      title: 'Micro SaaS Development',
  description: 'Custom micro SaaS solutions designed for specific business needs and rapid deployment',
  icon: '🔧',
  features: [
        'Rapid Prototype Development',
        'Scalable Architecture Design',
        'API Development & Integration',
        'User Experience Optimization',
        'Performance Monitoring'
      ],
  href: '/services/micro-saas'
    },
    {
      title: 'Enterprise AI Consulting',
  description: 'Strategic AI implementation guidance for enterprise-scale digital transformation',
  icon: '🎯',
  features: [
        'AI Strategy Development',
        'Technology Roadmap Planning',
        'Change Management',
        'ROI Optimization',
        'Compliance & Governance'
      ],
  href: '/services/ai-consulting'
    },
    {
      title: 'Cybersecurity & AI Security',
  description: 'Advanced security solutions powered by AI for comprehensive threat protection',
  icon: '🛡️',
  features: [
        'AI-Powered Threat Detection',
        'Security Orchestration',
        'Vulnerability Assessment',
        'Incident Response Automation',
        'Compliance Management'
      ],
  href: '/services/ai-security'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section>
        <div>
          <h1>
            AI & IT Services
          </h1>
          <p>
            Transform your business with cutting-edge AI solutions, micro SaaS development, 
            and enterprise IT services that drive growth and innovation.
          </p>
          <div>
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div>
          <div>
            <h2>
              Our Comprehensive Services
            </h2>
            <p>
              From AI-powered analytics to autonomous business operations, we provide 
              end-to-end technology solutions that deliver measurable results.
            </p>
          </div>

          <div>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300 group"
              >
                <div>
                  {service.icon}
                </div>
                <h3>
                  {service.title}
                </h3>
                <p>
                  {service.description}
                </p>
                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <ArrowRight
                  href={service.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </ArrowRight>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section>
        <div>
          <div>
            <h2>
              Proven Results
            </h2>
            <p>
              Our clients achieve remarkable improvements across key business metrics
            </p>
          </div>

          <div>
            <div>
              <div>89%</div>
              <p>Efficiency Improvement</p>
              <p>Average client performance boost</p>
            </div>
            <div>
              <div>$2.3B</div>
              <p>Cost Savings Generated</p>
              <p>Across all client implementations</p>
            </div>
            <div>
              <div>156%</div>
              <p>Average ROI</p>
              <p>Within first year of implementation</p>
            </div>
            <div>
              <div>500+</div>
              <p>Projects Delivered</p>
              <p>Successful implementations worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
        <div>
          <div>
            <h2>
              Our Proven Process
            </h2>
            <p>
              We follow a systematic approach to ensure successful project delivery and maximum ROI
            </p>
          </div>

          <div>
            <div>
              <div>1</div>
              <h3>Discovery & Analysis</h3>
              <p>Comprehensive assessment of your current systems, requirements, and opportunities for improvement.</p>
            </div>
            <div>
              <div>2</div>
              <h3>Strategy & Design</h3>
              <p>Custom solution design and implementation strategy tailored to your specific business needs.</p>
            </div>
            <div>
              <div>3</div>
              <h3>Implementation</h3>
              <p>Agile development and deployment with continuous testing and optimization throughout the process.</p>
            </div>
            <div>
              <div>4</div>
              <h3>Optimization</h3>
              <p>Ongoing monitoring, support, and optimization to ensure continued performance and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
          <h2>
            Ready to Transform Your Business?
          </h2>
          <p>
            Let's discuss how our AI and technology solutions can accelerate your growth and drive innovation
          </p>
          <div>
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}