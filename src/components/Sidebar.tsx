
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  Users,
  Award,
  ShoppingCart,
  HelpCircle,

export const Sidebar: React.FC = () => {
  const serviceCategories = [
    { title: 'AI & Machine Learning', icon: Brain,
      links: [{ name: 'AI Services Overview', href: '/ai-services' }, { name: 'AI Content Generator', href: '/services/ai-content-generator' }, { name: 'AI Project Management', href: '/services/ai-project-management' }, { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' }, { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' }
      ]}, { title: 'Cloud & Infrastructure',
      icon: Cloud, links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' }, { name: 'IT Infrastructure', href: '/it-services' }, { name: 'Cloud Migration', href: '/services/cloud-migration-services' }, { name: 'FinOps Advisor', href: '/services/finops-advisor' }
      ]}, { title: 'Cybersecurity',
      icon: Shield, links: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' }, { name: 'Security Headers & CSP', href: '/services/security-headers-csp' }, { name: 'Zero Trust Network', href: '/services/zero-trust-network-access' }, { name: 'DSR Privacy Portal', href: '/services/dsr-portal' }
      ]}, { title: 'Development',
      icon: Code, links: [
        { name: 'Micro SaaS Solutions', href: '/micro-saas' }, { name: 'Custom Development', href: '/services/custom-development' }, { name: 'API Development', href: '/services/api-development' }, { name: 'Mobile Apps', href: '/services/mobile-development' }
      ]}, { title: 'Data & Analytics',
      icon: Database, links: [
        { name: 'Data Analytics', href: '/services/data-analytics' }, { name: 'Business Intelligence', href: '/services/business-intelligence' }, { name: 'Data Governance', href: '/services/ai-data-governance-platform' }, { name: 'Predictive Analytics', href: '/services/ai-predictive-maintenance' }
      ]}, { title: 'Infrastructure',
      icon: Network, links: [
        { name: 'Network Solutions', href: '/services/network-solutions' }, { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' }, { name: 'Digital Twin Platform', href: '/services/digital-twin' }, { name: 'Smart City Infrastructure', href: '/services/ai-smart-city-infrastructure-management' }

      ]}
  ];&apos;
  const companyLinks = [

        <div>
          <h3 className=&apos;text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4&apos;>Services&apos;</h3>
          <div className=&apos;space-y-4&apos;>
            {serviceCategories.map((category, index) => (&apos}
              <div key={index} className=&apos;border border-gray-200 rounded-lg p-4&apos;>&apos;

                <div className=&apos;flex items-center mb-3&apos;>&apos;
                  <category.icon className=&apos;h-5 w-5 text-blue-600 mr-2&apos; />&apos;
                  <h4 className=&apos;text-sm font-medium text-gray-900&apos;>{category.title}&apos;</h4>
                </div>
                <ul className=&apos;space-y-2&apos;>
                  {category.links.map((link, linkIndex) => (&apos}
                    <li key={linkIndex}>
                      <Link
                        to={link.href}, {link.name}

                      </Link>
                    </li>

                  ))}
                </ul>;
              </div>;
            ))}, {link.name}

                </Link>
              </li>

            ))}, {link.name}

                </Link>
              </li>

            ))}

            </Link>
          </div>
        </div>
        {/* Contact Info */}
        <div className=&apos;bg-gray-50 rounded-lg p-4&apos;>&apos;

          <h3 className=&apos;text-sm font-semibold text-gray-900 mb-3&apos;>Contact Info&apos;</h3>
          <div className=&apos;space-y-2 text-sm text-gray-600&apos;>&apos;
            <p>📞 +1 302 464 0950</p>

            <p>✉️ kleber@ziontechgroup.com</p>
            <p>📍 Middletown, DE</p>
          </div>
        </div>
      </div>
    </aside>






