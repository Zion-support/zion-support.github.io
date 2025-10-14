import React from 'react;
import { Link } from 'react-router-dom;
import SEO from '../components/SEO;
import { DocumentTextIcon,
  CodeBracketIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,';
  MapPinIcon''
} from '@heroicons/react/24/outline;
export default function DocumentationPage() {
  
  const sections = [
    {
      icon: CodeBracketIcon,'
          title: 'API Documentation','
          description: 'Comprehensive API reference for all our services and integrations.'
  },
      links: ['
        { name: 'Authentication', href: '/docs/api/authentication' },'
        { name: 'AI Services API', href: '/docs/' },'
        { name: 'Cloud Management API', href: '/docs/' },'
        { name: 'Webhooks', href: '/docs/api/webhooks' }
      ]
    },
    {
      icon: CogIcon,'
          title: 'Integration Guides','
          description: 'Step-by-step guides for integrating our solutions with your systems.'
  },
      links: ['
        { name: 'Getting Started', href: '/docs/' },'
        { name: 'SDK Installation', href: '/docs/integration/sdk' },'
        { name: 'Configuration', href: '/docs/integration/configuration' },'
        { name: 'Best Practices', href: '/docs/' }
      ]
    },
    {
      icon: DocumentTextIcon,'
          title: 'User Guides','
          description: 'Detailed user guides for all our products and services.'
  },
      links: ['
        { name: 'AI Solutions Guide', href: '/docs/' },'
        { name: 'Cloud Infrastructure', href: '/docs/' },'
        { name: 'Cybersecurity Setup', href: '/docs/guides/cybersecurity' },'
        { name: 'Micro SaaS Development', href: '/docs/' }
      ]
    },
    {
      icon: QuestionMarkCircleIcon,'
          title: 'Troubleshooting','
          description: 'Common issues and solutions to help you resolve problems quickly.'
  },
      links: ['
        { name: 'FAQ', href: '/docs/troubleshooting/faq' },'
        { name: 'Error Codes', href: '/docs/' },'
        { name: 'Performance Issues', href: '/docs/troubleshooting/performance' },'
        { name: 'Contact Support', href: '/support' }
      ]
    }
  ]
  const quickStart = ['
    { step: 1,     title: 'Sign Up',     description: 'Create your account and get API credentials'
  } },'
    { step: 2,     title: 'Install SDK',     description: 'Install our SDK for your preferred language'
  } },'
    { step: 3,     title: 'Configure',     description: 'Set up your environment and configuration'
  } },'
    { step: 4,     title: 'Make API Call',     description: 'Start making API calls to our services'
  } }
  ]'
import { Helmet } from 'react-helmet-async;
const DocumentationPage: React.FC = () => {
  return (
    
    <div>
      <SEO />
      {/* Hero Section */}
      <section>
        <div>
    <div />
  </div>
  <div>
    <div />
            <div>
    <div />
                <DocumentTextIcon />
              </div>
  </div>
  <h1>Documentation
            </h1></h1>
            <p />
              Everything You Need to Get Started
            </p>
            <p />
              Comprehensive documentation, API references, and guides to help you 
              integrate and use our services effectively.
            </p>
            
            <div>
    <Link />
                Quick Start Guide
                <ArrowRightIcon />
              </Link>
              <Link />
                Get Support
                <ArrowRightIcon />
              </Link>
            </div>
        </div>
      </div>
      </section>
      {/* Quick Start Section */}
      <section>
        <div>
    <div />
            <h2 />
              Quick Start Guide
            </h2>
            <p />
              Get up and running with our services in just a few steps
            </p>
          </div>
          
          <div />
            {quickStart.map((step, index) => (
              <div>
    <div />
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>"
                <p>{step.description}</p>"
              </div>
))}
          </div>
        </div>
      </section>
      {/* Documentation Sections */}
      <section>
        <div>
    <div />
            <h2 />
              Documentation Sections
            </h2>
            <p />
              Browse our comprehensive documentation by category
            </p>
          </div>
          
          <div />
            {sections.map((section, index) => (
              <div>
    <div />
                  <div>
    <section />
                  </div>
                  <div />
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    <p className="text-gray-400">{section.description}</p>
                  </div>
  </div>
  <ul />
                  {section.links.map((link, linkIndex) => (
                    <li />
                      <Link />
                        <ArrowRightIcon />
                        {link.name}
                      </Link>
                    </li>
))}
                </ul>
              </div>
))}
          </div>
        </div>
      </section>
      {/* Code Examples Section */}
      <section>
        <div>
    <div />
            <h2 />
              Code Examples
            </h2>
            <p />
              Get started quickly with our code examples and sample implementations
            </p>
            
            <div>
    <h3 className="text-xl font-bold text-white mb-4">Basic API Call Example</h3>
              <pre />
                <code>{`// Initialize the client
const client = new ZionTechClient({'
  apiKey: 'your-api-key','
  environment: 'production;
});
// Make an API call
const response = await client.ai.generateText({'
  prompt: 'Hello, world!',
  maxTokens: 100
});
console.log(response.data)`}</code>
              </pre>
            </div>
            
            <div>
    <div />
                <h4 className="text-white font-semibold mb-2">JavaScript/Node.js</h4>
                <p className="text-gray-400 text-sm mb-4">Complete examples for web applications</p>
                <Link />
                  View Examples →
                </Link>
              </div>
              <div>
    <h4 className="text-white font-semibold mb-2">Python</h4>
                <p className="text-gray-400 text-sm mb-4">Python SDK and examples</p>
                <Link />
                  View Examples →
                </Link>
              </div>
              <div>
    <h4 className="text-white font-semibold mb-2">cURL</h4>
                <p className="text-gray-400 text-sm mb-4">Direct HTTP API calls</p>
                <Link />
                  View Examples →
                </Link>
              </div>
          </div>
        </div>
      </div>
      </section>
      {/* Contact Section */}
      <section>
        <div>
    <div />
            <h2 />
              Need Help?
            </h2>
            <p />'
              Can't find what you're looking for? Our support team is here to help
            </p>
            
            <div>
    <div />
                <PhoneIcon />
                <span>+1-302-464-0950</span>
              </div>
              <div>
    <EnvelopeIcon />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div>
    <MapPinIcon />
                <span>Middletown, DE</span>
              </div>
  </div>
  <div>
    <Link />
                Contact Support
              </Link>
              <Link />
                Get In Touch
              </Link>
            </div>
        </div>
      </div>
      </section>
    </>
  )}
'