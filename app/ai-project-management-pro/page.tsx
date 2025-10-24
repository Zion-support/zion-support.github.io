'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Brain } from 'lucide-react'
const AIProjectManagementProPage: React.FC = () => {
  const features = [
    {
      icon: 'Brain'
    title: 'AI Project Planning'
      description: 'Intelligent project planning with AI-powered task breakdown, resource allocation, and timeline optimization.'
    }
  {
    icon: 'Users'
    title: 'Team Collaboration'
      description: 'Enhanced team collaboration with AI-powered communication, task assignment, and progress tracking.'
    }
  {
    icon: 'BarChart'
    title: 'Advanced Analytics'
      description: 'Comprehensive project analytics with AI insights, performance metrics, and predictive forecasting.'
    }
  {
    icon: 'Target'
    title: 'Smart Resource Management'
    description: 'AI-driven resource allocation and workload balancing for optimal team productivity.'}
    ];
  const benefits = [
    'Increase project success rate by 40%'
    'Reduce project delivery time by 25%'
    'Improve team productivity by 35%'
    'Minimize project risks with AI predictions'
    'Automated progress tracking'
    'Real-time collaboration tools'
    ];
  const pricing = [
  {
  name: 'Starter'
    price: '.99'
      period: '/month'
    description: 'Perfect for small teams and freelancers'
      features: [
        'Up to 5 projects'
        'Basic AI features'
        'Team collaboration'
        'Basic analytics'
    'Email support'
        ];
        }
    {
      name: 'Professional'
    price: '.99'
      period: '/month'
    description: 'Ideal for growing businesses'
      features: [
        'Up to 25 projects'
        'Advanced AI features'
        'Advanced analytics'
        'Priority support'
        'API access'
    'Custom integrations'
        ];
        }
    {
      name: 'Enterprise'
    price: 'Custom'
      period: ''
    description: 'For large organizations'
      features: [
        'Unlimited projects'
        'Full AI suite'
        'Custom integrations'
        'Dedicated support'
        'White-label solution'
    'SLA guarantee'
    ];
}
    ];
  return (
    <div className="...">
      {/* Hero Section */}
      <section className="...">
        <div className="...">
          <h1 className="...">
            AI Project Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pro</span>
          </h1>
          <p className="...">
            Transform project management with AI-powered automation. Plan, track, and deliver projects efficiently with our intelligent project management platform.
          </p>
          <div className="...">
            <Link
              href="/contact"
              className="...">
              Get Started
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link
              href="/ai-services"
              className="...">
              View All AI Services
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Smart Project Management Features
            </h2>
            <p className="...">
              Our AI project management platform provides everything you need to plan, execute, and deliver successful projects.
            </p>
          </div>
          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="...">
                <div className="...">
                  <div className="w-12 h-12 text-cyan-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <div>
              <h2 className="...">
                Why Choose Our AI Project Management?
              </h2>
              <p className="...">
                Our AI-powered project management helps you deliver projects on time, within budget, and with higher success rates.
              </p>
              <ul className="...">
                {benefits.map((benefit, index) => (
                  <li key={index} className="...">
                    <CheckCircle className="w-8 h-8" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="...">
              <div className="...">
                <div className="...">
                  <div className="...">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
                  <p className="...">
                    Our AI learns from your project patterns and automatically optimizes workflows, resource allocation, and timeline predictions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Simple, Transparent Pricing
            </h2>
            <p className="...">
              Choose the plan that fits your team size and project needs. All plans include our core AI features with no hidden fees.
            </p>
          </div>
          <div className="...">
            {pricing.map((plan, index) => (
              <div key={index} className="...">
                <div className="...">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="...">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="...">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="...">
                      <CheckCircle className="w-8 h-8" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="...">
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-8 h-8" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="...">
        <div className="...">
          <h2 className="...">
            Ready to Transform Your Project Management?
          </h2>
          <p className="...">
            Join thousands of teams already using our AI project management to deliver better projects faster.
          </p>
          <div className="...">
            <Link 
              href="/contact" 
              className="...">
              Start Free Trial
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link 
              href="/ai-services" 
              className="...">
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIProjectManagementProPage