import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Code, 
  Terminal, 
  GitBranch, 
  Database, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star,
  Rocket,
  Target,
  Settings,
  Cloud,
  Lock,
  BarChart,
  Users,
  ArrowRight
} from 'lucide-react';

const DeveloperToolsPage: React.FC = () => {
  const tools = [
    {
      name: 'AI Code Generator',
      icon: Code,
      description: 'Generate high-quality code using AI with support for 50+ programming languages.',
      price: '$49/month',
      features: ['50+ Languages', 'Code Review', 'Bug Detection', 'Documentation', 'Refactoring'],
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      name: 'CI/CD Pipeline',
      icon: GitBranch,
      description: 'Automated continuous integration and deployment with intelligent testing and monitoring.',
      price: '$79/month',
      features: ['Auto Testing', 'Deployment', 'Monitoring', 'Rollback', 'Notifications'],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      name: 'Database Manager',
      icon: Database,
      description: 'AI-powered database management with optimization, security, and performance monitoring.',
      price: '$99/month',
      features: ['Query Optimization', 'Security Monitoring', 'Backup Automation', 'Performance Analytics', 'Schema Design'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      name: 'API Gateway',
      icon: Zap,
      description: 'Intelligent API management with rate limiting, authentication, and analytics.',
      price: '$89/month',
      features: ['Rate Limiting', 'Authentication', 'Analytics', 'Documentation', 'Versioning'],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      name: 'Security Scanner',
      icon: Shield,
      description: 'Automated security scanning and vulnerability detection for your codebase.',
      price: '$69/month',
      features: ['Vulnerability Detection', 'Dependency Scanning', 'Code Analysis', 'Compliance', 'Reports'],
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      name: 'Performance Monitor',
      icon: BarChart,
      description: 'Real-time application performance monitoring with AI-powered insights.',
      price: '$59/month',
      features: ['Real-time Monitoring', 'Performance Metrics', 'Alerting', 'Optimization Tips', 'Reports'],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Faster Development',
      description: 'Accelerate your development process with AI-powered tools and automation.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Keep your code secure with automated scanning and vulnerability detection.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Built for modern cloud environments with auto-scaling and high availability.'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing development workflow and tools.'
    },
    {
      icon: Target,
      title: 'Quality Assurance',
      description: 'Ensure code quality with automated testing and code review processes.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhance team productivity with collaborative tools and shared workspaces.'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Lead Developer, TechCorp',
      content: 'The AI code generator has revolutionized our development process. We write 3x faster with better quality code.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'DevOps Engineer, CloudTech',
      content: 'The CI/CD pipeline is incredibly robust. Deployments are now automated and error-free.',
      rating: 5
    },
    {
      name: 'Alex Rodriguez',
      role: 'CTO, StartupXYZ',
      content: 'The security scanner caught vulnerabilities we never knew existed. Essential for any development team.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            Developer Tools
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            AI-Powered Development Suite
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Complete development toolkit with AI-powered code generation, testing, and deployment automation. 
            Everything you need to build, test, and deploy modern applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Our Developer Tools
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Choose from our comprehensive suite of AI-powered development tools
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {tools.map((tool, index) => (
              <article key={index} className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">
                  <tool.icon className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">
                  {tool.name}
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  {tool.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text text-center">
                    {tool.price}
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <a 
                    href="/contact" 
                    className={`${tool.color} hover:opacity-80 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow`}
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Why Choose Our Developer Tools?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Experience the power of AI-driven development tools
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-4 sm:p-6 text-center">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">
                  <benefit.icon className="w-12 h-12 mx-auto text-cyan-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 neon-text">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            What Developers Say
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Join thousands of developers who have transformed their workflow
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
                <div className="font-semibold text-white text-sm sm:text-base">
                  {testimonial.name}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Developer-Friendly Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Choose the plan that fits your development needs
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Individual</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$49<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>✓ AI Code Generator</li>
                <li>✓ Basic CI/CD</li>
                <li>✓ Security Scanner</li>
                <li>✓ Email Support</li>
                <li>✓ 5 Projects</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card p-6 text-center border-2 border-cyan-400">
              <div className="text-sm font-bold text-cyan-400 mb-2">MOST POPULAR</div>
              <h3 className="text-xl font-bold text-white mb-4">Team</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>✓ All Developer Tools</li>
                <li>✓ Advanced CI/CD</li>
                <li>✓ Team Collaboration</li>
                <li>✓ Priority Support</li>
                <li>✓ 25 Projects</li>
                <li>✓ API Access</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-sm text-gray-300 space-y-2 mb-6">
                <li>✓ All Tools + Custom</li>
                <li>✓ Enterprise CI/CD</li>
                <li>✓ Advanced Security</li>
                <li>✓ 24/7 Support</li>
                <li>✓ Unlimited Projects</li>
                <li>✓ Custom Integrations</li>
                <li>✓ White-label Options</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 cyber-card">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 neon-text">
            Ready to Supercharge Your Development?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have already transformed their workflow with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400 space-y-1">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom tool configuration</p>
            <p>✓ 24/7 developer support</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;
