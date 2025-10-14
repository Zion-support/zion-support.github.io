import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { Users } from 'lucide-react';
import { Clock } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Code } from 'lucide-react';
import { Database } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Target } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { PieChart } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Network } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Wifi } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO;

const Page = () => {
  const features = [
    {
    icon: <CheckCircle className=';w-8 h-8"  / />,'
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
  ];

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
      </section>

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
              ))}
            </div>
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
      </section>

      </div>
    </div>
  );
};
'
const page = React.lazy(() => import('./page'))