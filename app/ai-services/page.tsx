'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  BarChart, 
  Eye, 
  MessageCircle, 
  Shield, 
  Code, 
  FileText, 
  Image, 
  Video, 
  Mail, 
  Calendar, 
  DollarSign, 
  Users, 
  Star, 
  Clock, 
  TrendingUp,
  Phone,
  Globe
} from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Machine Learning Solutions',
      description: 'Build intelligent systems that learn and adapt to your business needs with custom ML models.',
      price: 'Starting at $2,500/month',
      features: [
        'Custom model development',
        'Predictive analytics',
        'Pattern recognition',
        'Automated decision making',
        'Real-time processing',
        'Model optimization'
      ],
      benefits: [
        'Increase efficiency by 40%',
        'Reduce manual errors by 85%',
        'Predict trends and patterns',
        'Automate complex processes'
      ],
      link: 'https://ziontechgroup.com/ai-machine-learning',
      category: 'Core AI'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI that handles customer queries, provides support, and automates interactions.',
      price: 'Starting at $199/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Integration with CRM',
        'Analytics dashboard',
        'Custom training'
      ],
      benefits: [
        '24/7 customer support',
        'Reduce support costs by 60%',
        'Improve response times',
        'Scale customer service'
      ],
      link: 'https://ziontechgroup.com/ai-chatbot',
      category: 'Customer Experience'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis for quality control, security, and automated visual inspection.',
      price: 'Starting at $1,500/month',
      features: [
        'Object detection',
        'Facial recognition',
        'Quality control automation',
        'Real-time video analysis',
        'Custom model training',
        'API integration'
      ],
      benefits: [
        'Automate visual inspections',
        'Improve quality control',
        'Reduce human error',
        'Enable 24/7 monitoring'
      ],
      link: 'https://ziontechgroup.com/ai-computer-vision',
      category: 'Visual Intelligence'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics & BI',
      description: 'Transform raw data into actionable insights with AI-powered analytics and business intelligence.',
      price: 'Starting at $899/month',
      features: [
        'Automated data analysis',
        'Predictive insights',
        'Custom dashboards',
        'Real-time reporting',
        'Data visualization',
        'Trend forecasting'
      ],
      benefits: [
        'Make data-driven decisions',
        'Discover hidden patterns',
        'Predict future trends',
        'Optimize business processes'
      ],
      link: 'https://ziontechgroup.com/ai-analytics',
      category: 'Data Intelligence'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Create high-quality content for blogs, marketing, and communications using advanced AI models.',
      price: 'Starting at $299/month',
      features: [
        'Blog post generation',
        'Marketing copy creation',
        'Email content optimization',
        'SEO-optimized content',
        'Multi-language support',
        'Brand voice customization'
      ],
      benefits: [
        'Save 80% content creation time',
        'Maintain consistent quality',
        'Scale content production',
        'Improve SEO performance'
      ],
      link: 'https://ziontechgroup.com/ai-content-generation',
      category: 'Content & Marketing'
    },
    {
      icon: Image,
      title: 'AI Image & Video Processing',
      description: 'Professional image and video editing powered by AI for marketing, social media, and presentations.',
      price: 'Starting at $199/month',
      features: [
        'Background removal',
        'Image enhancement',
        'Video editing automation',
        'Style transfer',
        'Object removal',
        'Batch processing'
      ],
      benefits: [
        'Professional results instantly',
        'No design skills required',
        'Save on expensive software',
        'Unlimited creative possibilities'
      ],
      link: 'https://ziontechgroup.com/ai-image-processing',
      category: 'Creative AI'
    },
    {
      icon: Mail,
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email marketing with personalization, optimization, and automated campaign management.',
      price: 'Starting at $399/month',
      features: [
        'AI subject line optimization',
        'Send time prediction',
        'Personalization engine',
        'A/B testing automation',
        'Content optimization',
        'Performance analytics'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Automate campaign optimization',
        'Improve conversion rates',
        'Save 10+ hours per week'
      ],
      link: 'https://ziontechgroup.com/ai-email-marketing',
      category: 'Marketing Automation'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and security monitoring powered by AI to protect your digital assets.',
      price: 'Starting at $1,999/month',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Automated response',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Incident management'
      ],
      benefits: [
        'Detect threats in real-time',
        'Reduce security risks by 90%',
        'Automate security responses',
        'Ensure compliance'
      ],
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      category: 'Security & Compliance'
    },
    {
      icon: Code,
      title: 'AI Code Assistant & Development',
      description: 'AI-powered development tools that help developers write better code, debug issues, and accelerate development.',
      price: 'Starting at $499/month',
      features: [
        'Code completion',
        'Bug detection',
        'Code review automation',
        'Documentation generation',
        'Refactoring suggestions',
        'Multi-language support'
      ],
      benefits: [
        'Write code 3x faster',
        'Reduce bugs by 70%',
        'Improve code quality',
        'Accelerate development cycles'
      ],
      link: 'https://ziontechgroup.com/ai-code-assistant',
      category: 'Development Tools'
    },
    {
      icon: Calendar,
      title: 'AI Smart Scheduling & Automation',
      description: 'Intelligent scheduling and workflow automation to optimize time management and business processes.',
      price: 'Starting at $149/month',
      features: [
        'Smart scheduling',
        'Workflow automation',
        'Task prioritization',
        'Resource optimization',
        'Calendar integration',
        'Conflict resolution'
      ],
      benefits: [
        'Eliminate scheduling conflicts',
        'Automate repetitive tasks',
        'Optimize resource allocation',
        'Improve productivity by 50%'
      ],
      link: 'https://ziontechgroup.com/ai-automation',
      category: 'Productivity & Automation'
    }
  ]

  const categories = [
    'All',
    'Core AI',
    'Customer Experience',
    'Visual Intelligence',
    'Data Intelligence',
    'Content & Marketing',
    'Creative AI',
    'Marketing Automation',
    'Security & Compliance',
    'Development Tools',
    'Productivity & Automation'
  ]

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions designed to solve real-world problems and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                500+ AI Projects Delivered
              </span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                4.9/5 Client Rating
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                24/7 AI Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">starting price</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                  <a
                    href="https://ziontechgroup.com/consultation"
                    className="flex-1 border border-white/30 text-white hover:bg-white/10 py-2 px-4 rounded-lg font-medium transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300">
              We combine cutting-edge AI technology with deep industry expertise to deliver real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert AI Team</h3>
              <p className="text-gray-300">PhD-level AI researchers and engineers with 10+ years of experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-300">Tailored AI solutions designed specifically for your business needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and data encryption.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Average 300% ROI and 50% efficiency improvement for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-300">
              From consultation to deployment, we guide you through every step of your AI journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery & Analysis</h3>
              <p className="text-gray-300">We analyze your business processes and identify AI opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Strategy & Planning</h3>
              <p className="text-gray-300">Develop a comprehensive AI strategy tailored to your goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Development & Testing</h3>
              <p className="text-gray-300">Build and rigorously test your AI solution with real data.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Deployment & Support</h3>
              <p className="text-gray-300">Deploy your AI solution and provide ongoing support and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI can solve your specific business challenges and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ziontechgroup.com/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free AI Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage