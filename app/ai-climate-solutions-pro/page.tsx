import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Leaf, Brain, Target, Zap, Shield, Users, Clock, DollarSign, Star, TrendingUp, BarChart3, FileText, Headphones, Mail, Phone, MapPin, Globe, Wind, Sun, Droplets, Thermometer } from 'lucide-react'

export default function AIClimateSolutionsProPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-green-500" />,
      title: 'Climate Prediction',
      description: 'Advanced AI models predict climate patterns, extreme weather events, and long-term environmental changes with 90% accuracy.',
      benefits: ['Weather forecasting', 'Climate modeling', 'Extreme event prediction', 'Seasonal forecasting']
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Carbon Footprint Analysis',
      description: 'AI-powered tools analyze and optimize carbon footprints across industries, identifying reduction opportunities.',
      benefits: ['Emissions tracking', 'Carbon accounting', 'Reduction strategies', 'Compliance reporting']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Renewable Energy Optimization',
      description: 'Optimize renewable energy systems using AI to maximize efficiency and minimize environmental impact.',
      benefits: ['Solar optimization', 'Wind farm management', 'Grid integration', 'Energy storage']
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      title: 'Environmental Monitoring',
      description: 'Real-time monitoring of air quality, water resources, and ecosystem health using IoT and AI.',
      benefits: ['Air quality tracking', 'Water monitoring', 'Biodiversity assessment', 'Pollution detection']
    }
  ]

  const solutions = [
    {
      title: 'Smart Cities',
      description: 'Transform urban environments into sustainable, efficient smart cities using AI-driven solutions.',
      impact: 'Reduce emissions by 40%',
      price: 'Starting at $25,000/month',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Agriculture',
      description: 'Optimize farming practices for sustainability and productivity using precision agriculture AI.',
      impact: 'Increase yield by 30%',
      price: 'Starting at $15,000/month',
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: 'Manufacturing',
      description: 'Green manufacturing solutions that reduce waste and optimize resource usage.',
      impact: 'Cut waste by 50%',
      price: 'Starting at $20,000/month',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Transportation',
      description: 'Optimize transportation networks for reduced emissions and improved efficiency.',
      impact: 'Reduce traffic by 25%',
      price: 'Starting at $18,000/month',
      icon: <Wind className="w-6 h-6" />
    }
  ]

  const benefits = [
    'Reduce carbon emissions by up to 60%',
    'Optimize energy consumption by 40%',
    'Improve air quality by 50%',
    'Increase renewable energy efficiency by 35%',
    'Enable real-time environmental monitoring',
    'Support regulatory compliance and reporting'
  ]

  const stats = [
    { number: '90%', label: 'Prediction Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '60%', label: 'Emission Reduction', icon: <Leaf className="w-6 h-6" /> },
    { number: '40%', label: 'Energy Savings', icon: <Zap className="w-6 h-6" /> },
    { number: '100+', label: 'Cities Served', icon: <Globe className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: 'Dr. Maria Santos',
      company: 'Green City Initiative',
      content: 'AI Climate Solutions Pro helped us reduce our city\'s carbon footprint by 45% in just 18 months.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'EcoManufacturing Corp',
      content: 'The environmental monitoring capabilities are outstanding. We\'ve achieved zero waste to landfill.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Sustainable Agriculture Co',
      content: 'Our crop yields increased by 35% while reducing water usage by 40%. Incredible results!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group | Sustainable AI Technology</title>
        <meta name="description" content="Revolutionary AI-powered climate solutions that help organizations reduce emissions, optimize energy usage, and build sustainable futures. Transform your environmental impact." />
        <meta name="keywords" content="AI climate solutions, environmental AI, sustainability, carbon reduction, renewable energy, climate tech, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Climate Solutions Pro</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Combat climate change with cutting-edge AI technology that optimizes sustainability, 
              reduces emissions, and builds a greener future for our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Green Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 group">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-green-400/20 to-cyan-400/20 group-hover:from-green-400/30 group-hover:to-cyan-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced Climate AI
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Powerful artificial intelligence technologies designed to address climate challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-cyan-500/20 inline-block">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Tailored climate solutions for every sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20 text-green-400 mr-3">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  <div className="text-green-400 font-medium text-sm">{solution.impact}</div>
                  <div className="text-white font-semibold">{solution.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose AI Climate Solutions Pro?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our platform combines advanced AI with environmental expertise to deliver 
                measurable climate impact and sustainable business growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-2xl p-8 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Start Your Climate Journey</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Free environmental assessment</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Custom implementation plan</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>24/7 climate monitoring</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Compliance reporting tools</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-green-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center mt-6"
              >
                Get Climate Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real impact from organizations committed to sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.3),transparent_50%)]"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Make a Climate Impact?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join the global movement towards sustainability with AI Climate Solutions Pro. 
                Together, we can build a greener, more sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Start Climate Assessment
                </Link>
                <Link
                  to="/ai-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
