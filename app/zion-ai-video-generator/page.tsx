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
  const stats = [
    { number: "10,000+", label: "Videos Generated", icon: <Video className="w-6 h-6"> },"
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6"> },"
    { number: "50+", label: "Languages Supported", icon: <Globe className="w-6 h-6"> },"
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6"> }"
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
            
            <h1>  <span>Zion AI Video Generator
              </span></h1>
            
            <p />
              Transform text into stunning, professional videos in minutes. Our AI-powered platform creates engaging content with natural voiceovers, custom branding, and multiple formats.
            </p>
            
            <div>
    <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Play className="w-5 h-5">}"
              >
                Start Free Trial;
              </FuturisticButton>
              <FuturisticButton;
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Video className="w-5 h-5">}"
              >
                Watch Demo;
              </FuturisticButton>
            </div>
            {/* Stats */}
            <div />
              {stats.map((stat, index) => (
                <div>
    <div />
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>"
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>"
                </div>
              ))}      {/* Features Section */}
      <section />
        <ResponsiveContainer />
          <div>
    <h2 />
              Powerful AI Features
            </h2>
            <p />
              Our advanced AI technology handles every aspect of video creation, from script writing to final editing
            </p>
          </div>
          
          <div />
            {features.map((feature, index) => (
<FuturisticCard />
                <div />
                  {feature.icon}
                </div>
                <h3 />
                  {feature.title}
                </h3>
                <p />
                  {feature.description}
                </p>
                <div>
    <span />
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
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
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
                  <p>{feature.description}</p>"
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
        </ResponsiveContainer>
      </section>
    </div>
  );
};
'
const page = React.lazy(() => import('./page'))