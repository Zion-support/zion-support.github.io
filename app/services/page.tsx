import React from 'react;

import EnhancedSEO from '../components/EnhancedSEO;
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckIcon,';
  StarIcon'}'
} from '@heroicons/react/24/outline;


const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />'
          title: 'Advanced Features','
          description: 'Cutting-edge technology for maximum efficiency'
  }
    },
    {
      icon: <Shield className="w-8 h-8" />'
          title: 'Secure & Reliable','
          description: 'Enterprise-grade security and 99.9% uptime'
  }
    },
    {
      icon: <Users className="w-8 h-8" />'
          title: 'Expert Support','
          description: '24/7 support from our team of specialists'
  }
    }
  ]
  return (
    
    <div>
      <EnhancedSEO />
      <div />
        {/* Hero Section */}
        <section>
        <div>
    <h1>Page
               <span>Solutions
              </span></h1>
            <p />
              Professional page services designed to help your business succeed and grow.
            </p>
            <div>
    <Link />
                Get Started
                <ArrowRight />
              </Link>
              <Link />
                View Demo
              </Link>
            </div>
          </div>
)
          {serviceCategories.map((category, categoryIndex) => {;
const Icon = category.icon
            return (
    
"
              <div>
    <div />
                  <div>
    <Icon />
        {/* Features Section */}
        <section>
        <div>
    <div />
              <h2 />
                Why Choose Our Page Services?
              </h2>
              <p />
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>

            <div />
              {features.map((feature, index) => (
                <div>
    <div />
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            )})}
        </div>
      </section>

        {/* CTA Section */}
        <section>
        <div>
    <h2 />
              Ready to Get Started?
            </h2>
            <p />'
              Let's discuss how our page services can help your business succeed.
            </p>
            <div>
    <Link />
                Contact Us
                <ArrowRight />
              </Link>
              <Link />
                View All Services
              </Link>
            </div>
        </div>
      </div>
      </section>
    </>
        <div>
    <h1>Page</h1>
          <p />
            This page is under construction. Please check back later.
          </p>
        </div>
        </div>
      </div>
  )};
'
const page = React.lazy(() => import('./page'))