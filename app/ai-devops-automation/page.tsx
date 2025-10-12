import React  from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Zap, Shield, BarChart3, CheckCircle, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AIDevOpsAutomationPage() {
  const features = [
    {
      title: 'Intelligent CI/CD Pipeline',
      description: 'AI-powered continuous integration and deployment with automatic testing, code quality checks, and smart rollback capabilities.',
      icon: <Zap className="w-6h-6text-yellow-400" />,
      benefits: ['Auto testing', 'Code quality checks', 'Smart rollbacks', 'Performance optimization']
    },
    {
      title: 'Predictive Infrastructure Monitoring',
      description: 'Advanced AI algorithms predict system failures, optimize resource allocation, and prevent downtime before it happens.',
      icon: <BarChart3 className="w-6h-6text-blue-400" />,
      benefits: ['Failure prediction', 'Resource optimization', 'Proactive alerts', 'Performance tuning']
    },
    {
      title: 'Automated Security Scanning',
      description: 'AI-driven security analysis that continuously scans for vulnerabilities, compliance issues, and potential threats.',
      icon: <Shield className="w-6h-6text-red-400" />,
      benefits: ['Vulnerability scanning', 'Compliance monitoring', 'Threat detection', 'Auto remediation']
    },
    {
      title: 'Smart Resource Management',
      description: 'Intelligent auto-scaling and resource allocation based on real-time demand patterns and predictive analytics.',
      icon: <Server className="w-6h-6text-green-400" />,
      benefits: ['Auto-scaling', 'Cost optimization', 'Load balancing', 'Capacity planning']
    }
  ];
  const pricingPlans = [
    {
      name: 'Startup',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 applications',
        'Basic CI/CD automation',
        'Standard monitoring',
        'Email support',
        'Basic security scanning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced features for growing companies',
      features: [
        'Up to 25 applications',
        'Advanced AI automation',
        'Predictive monitoring',
        'Priority support',
        'Advanced security',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited applications',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Advanced security'
      ],
      popular: false
    }
  ];
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'DevOps Engineer',
      company: 'TechFlow Solutions',
      content: 'AI DevOps Automation reduced our deployment time by 80% and eliminated 95% of production issues. The predictive monitoring is incredible.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'CTO',
      company: 'InnovateLabs',
      content: 'The automated security scanning caught vulnerabilities we never would have found manually. Our security posture improved dramatically.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Platform Engineer',
      company: 'CloudScale Inc',
      content: 'Smart resource management reduced our cloud costs by 40% while improving performance. The AI optimization is game-changing.',
      rating: 5
    }
  ];
  const stats = [

                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5h-5ml-2" />
                </FuturisticButton>

                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick="{()" =  />window.open('#demo', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>

              {features.map((feature, index) => (
                <FuturisticCard key="{index}" variant="service" className="h-full" />

              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  key="{index}" 
                  variant="{plan.popular" ? "feature" : "service"} 
                  className="{`h-full" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} />
                  {plan.popular && (

              {testimonials.map((testimonial, index) => (
                <FuturisticCard key="{index}" variant="testimonial" className="h-full" />
                  <div className="flex items-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-4 h-4text-yellow-400fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6italic"  />"{testimonial.content}"
                  </blockquote>
                  <footer />
                    <p className="font-semiboldtext-white">
              {testimonial.name}</p>
                    <p className="text-gray-400text-sm">
              {testimonial.role}</p>
                    <p className="text-gray-500text-sm">
              {testimonial.company}</p>
                  </footer>
                </FuturisticCard>

              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16lg:py-20px-4" />
          <div className="max-w-7xlmx-auto">
            <FuturisticCard variant="feature" className="text-center" />
              <h2 className="text-2 xl sm:text-3 xl md:text-4xl font-bold text-white mb-4"  />Ready to Automate Your DevOps?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xlmx-auto">
              Start your free 14-day trial today. No credit card required. Join 300+ companies automating their DevOps.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick="{()" =>window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
              <div className="mt-8text-white/80text-sm">
                <p />✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </FuturisticBackground>

  );
}
