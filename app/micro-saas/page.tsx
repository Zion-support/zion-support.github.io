import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Cloud, 
  BarChart3, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Globe, 
  Smartphone, 
  Monitor,
  Mic,
  PenTool,
  Video,
  FileText,
  Calendar,
  TrendingUp,
  Cpu,
  Brain
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics',
      price: 'From $299/month',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'API Integration'],
      href: '/zion-analytics-pro',
      featured: true
    },
    {
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response',
      price: 'From $499/month',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', '24/7 Support'],
      href: '/zion-security-shield',
      featured: true
    },
    {
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability',
      price: 'From $99/month',
      icon: <Cloud className="w-8 h-8" />,
      features: ['End-to-end Encryption', 'Unlimited Storage', 'File Sharing', 'Backup & Recovery'],
      href: '/zion-cloud-vault',
      featured: true
    },
    {
      name: 'Zion AI Voice Assistant Pro',
      description: 'Advanced AI voice assistant with natural language processing and multi-platform integration',
      price: 'From $79/month',
      icon: <Mic className="w-8 h-8" />,
      features: ['Voice Recognition', 'NLP Processing', 'Multi-platform', 'Smart Automation'],
      href: '/zion-ai-voice-assistant-pro',
      featured: true
    },
    {
      name: 'Zion AI Blockchain Analytics Pro',
      description: 'Comprehensive blockchain analytics platform with AI-powered insights and DeFi monitoring',
      price: 'From $299/month',
      icon: <Shield className="w-8 h-8" />,
      features: ['Multi-chain Support', 'DeFi Analytics', 'Smart Contract Security', 'Portfolio Management'],
      href: '/zion-ai-blockchain-analytics-pro',
      featured: true
    },
    {
      name: 'Zion AI Content Studio Pro',
      description: 'AI-powered content creation platform for generating, designing, and publishing content',
      price: 'From $149/month',
      icon: <PenTool className="w-8 h-8" />,
      features: ['AI Content Generation', 'Visual Design', 'Multi-channel Publishing', 'Brand Management'],
      href: '/zion-ai-content-studio-pro',
      featured: true
    },
    {
      name: 'Zion AI Video Generator',
      description: 'Create professional videos with AI-powered content generation and editing tools',
      price: 'From $199/month',
      icon: <Video className="w-8 h-8" />,
      features: ['AI Video Creation', 'Auto-editing', 'Multiple Formats', 'Brand Templates'],
      href: '/zion-ai-video-generator',
      featured: false
    },
    {
      name: 'Zion AI Invoice Generator',
      description: 'Automated invoice generation with smart templates and payment tracking',
      price: 'From $49/month',
      icon: <FileText className="w-8 h-8" />,
      features: ['Auto-generation', 'Payment Tracking', 'Tax Calculations', 'Multi-currency'],
      href: '/zion-ai-invoice-generator',
      featured: false
    },
    {
      name: 'Zion AI Customer Insights',
      description: 'Deep customer analytics and behavior prediction for better business decisions',
      price: 'From $149/month',
      icon: <Users className="w-8 h-8" />,
      features: ['Customer Analytics', 'Behavior Prediction', 'Segmentation', 'ROI Tracking'],
      href: '/zion-ai-customer-insights',
      featured: false
    },
    {
      name: 'Zion AI Project Manager Pro',
      description: 'AI-powered project management with intelligent task prioritization and resource allocation',
      price: 'From $99/month',
      icon: <Calendar className="w-8 h-8" />,
      features: ['AI Task Prioritization', 'Resource Optimization', 'Timeline Forecasting', 'Team Collaboration'],
      href: '/zion-ai-project-manager-pro',
      featured: false
    },
    {
      name: 'Zion AI Marketing Automation Pro',
      description: 'Complete marketing automation platform with AI-driven campaign optimization',
      price: 'From $199/month',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Email Automation', 'Social Media Scheduling', 'Lead Nurturing', 'A/B Testing'],
      href: '/zion-ai-marketing-automation-pro',
      featured: false
    },
    {
      name: 'Zion AI HR Assistant Pro',
      description: 'Intelligent HR management with AI-powered recruitment and employee analytics',
      price: 'From $129/month',
      icon: <Users className="w-8 h-8" />,
      features: ['AI Recruitment', 'Employee Analytics', 'Performance Tracking', 'Compliance Management'],
      href: '/zion-hr-assistant-pro',
      featured: false
    },
    {
      name: 'Zion AI Quantum Optimizer Pro',
      description: 'Revolutionary quantum computing optimization platform for complex problem solving',
      price: 'From $599/month',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Quantum Algorithms', 'Exponential Speedup', 'Complex Problem Solving', 'AI Optimization'],
      href: '/zion-ai-quantum-optimizer-pro',
      featured: true
    },
    {
      name: 'Zion AI Cyber Defense Matrix Pro',
      description: 'Advanced AI-powered cybersecurity platform with real-time threat detection and response',
      price: 'From $799/month',
      icon: <Shield className="w-8 h-8" />,
      features: ['AI Threat Detection', 'Zero-Trust Architecture', 'Automated Response', 'Compliance Management'],
      href: '/zion-ai-cyber-defense-matrix-pro',
      featured: true
    },
    {
      name: 'Zion AI Neural Interface Pro',
      description: 'Next-generation brain-computer interface for enhanced productivity and accessibility',
      price: 'From $399/month',
      icon: <Brain className="w-8 h-8" />,
      features: ['Neural Signal Processing', 'Thought-to-Text', 'Accessibility Tools', 'Productivity Enhancement'],
      href: '/zion-ai-neural-interface-pro',
      featured: false
    },
    {
      name: 'Zion AI Climate Solutions Pro',
      description: 'AI-powered climate monitoring and sustainability optimization platform',
      price: 'From $199/month',
      icon: <Globe className="w-8 h-8" />,
      features: ['Climate Monitoring', 'Carbon Tracking', 'Sustainability Analytics', 'Green Optimization'],
      href: '/zion-ai-climate-solutions-pro',
      featured: false
    },
    {
      name: 'Zion AI Space Analytics Pro',
      description: 'Advanced space data analytics and satellite monitoring platform',
      price: 'From $499/month',
      icon: <Globe className="w-8 h-8" />,
      features: ['Satellite Monitoring', 'Space Data Analytics', 'Orbital Tracking', 'Space Weather'],
      href: '/zion-ai-space-analytics-pro',
      featured: false
    }
  ];

  const stats = [
    { number: '80+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '15,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Business Software"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation."
        keywords="micro SAAS, business software, AI tools, automation, business solutions, software as a service"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our suite of ready-to-use micro SAAS solutions. 
            From analytics to automation, we have everything you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SAAS solutions designed to streamline your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  product.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{product.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={product.href}
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Learn More
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Journey
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;