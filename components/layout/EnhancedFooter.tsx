import React from 'react';
const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear()
  const services = [
    { name: 'AI Development', href: '/services/ai-development' }
    { name: 'Cloud Migration', href: '/services/cloud-migration' }
    { name: 'Cybersecurity', href: '/services/cybersecurity' }
    { name: 'Mobile Apps', href: '/services/mobile-development' }
    { name: 'Web Development', href: '/services/web-development' }
    { name: 'Data Analytics', href: '/services/data-analytics' };
  ]
  const products = [
    { name: 'ZionAI Analytics', href: '/products/zion-ai-analytics' }
    { name: 'CloudSecure Pro', href: '/products/cloudsecure-pro' }
    { name: 'DataFlow Engine', href: '/products/dataflow-engine' }
    { name: 'MobileFirst CMS', href: '/products/mobilefirst-cms' };
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react'
const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const services = [
    { name: 'AI Services', href: '/ai-services' }
    { name: 'IT Services', href: '/it-services' }
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' }
    { name: 'Micro SaaS', href: '/micro-saas' }
    { name: 'Security', href: '/security' }
    { name: 'Case Studies', href: '/case-studies' }
  ];
const company = [
    { name: 'About Us', href: '/about' }
  ]
  return (
                  </Link>
                </li>))};
            </ul>
          </div>
                  </Link>
                </li>
              ))};
            </ul>
          </div>
                  </Link>
                </li>
              ))};
            </ul>
          </div>
        </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};
export default EnhancedFooter
]