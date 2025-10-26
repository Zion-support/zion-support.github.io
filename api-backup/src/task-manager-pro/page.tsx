'use client'
import React from 'react'
import {CheckSquare, Users, Zap, Brain, Target, BarChart, CheckCircle, Star, Phone} from 'lucide-react'
import { Link } from 'react-router-dom'
const TaskManagerProPage: React.FC = () => {
  const features = [
    {
      icon: CheckSquare,
      title: 'AI Task Prioritization',
      description: 'Intelligent task prioritization that analyzes deadlines, dependencies, and importance to optimize your workflow.',
      benefit:     ,
$4},
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and intelligent task assignment.',
      benefit:       ,
iconicon: Brain,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that considers your work patterns, energy levels, and optimal focus times.',
      benefit:       ,
iconicon: Zap,
      title: 'Automated Workflows',
      description: 'Create custom automation rules that trigger actions based on task completion, deadlines, and team updates.',
      benefit:       ,
iconicon: Target,
      title: 'Goal Tracking',
      description: 'Set and track SMART goals with AI insights on progress, roadblocks, and optimization opportunities.',
      benefit:       ,
iconicon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics on productivity patterns, team performance, and project success metrics.',
      benefit:     ,
$4}
  ]
  const pricingPlans = [
      name: 'Individual',
      price: '$19',
      period: '/month',
      description: 'Perfect for personal use',
      features: [
        'Unlimited personal tasks',
        'Basic AI prioritization',
        'Mobile app access',
        'Basic reporting',
        'Email support',
        '1 year data retention'
      ],
      popular: false,
    name: 'Team',
      price: '$49',
      description: 'Ideal for small teams',
        'Up to 10 team members',
        'Advanced AI features',
        'Team collaboration',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        '2 years data retention'
      popular: true,
    name: 'Enterprise',
      price: '$149',
      description: 'For large organizations',
        'Unlimited team members',
        'Premium AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Unlimited data retention',
        'Custom compliance'
  const integrations = [
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Microsoft Teams', icon: '👥', description: 'Collaboration platform' },
    { name: 'Google Workspace', icon: '📧', description: 'Productivity suite' },
    { name: 'Jira', icon: '🎯', description: 'Project management' },
    { name: 'Asana', icon: '📋', description: 'Task management' },
    { name: 'Trello', icon: '📌', description: 'Visual boards' },
    { name: 'Notion', icon: '📝', description: 'Documentation' },
    { name: 'GitHub', icon: '💻', description: 'Development workflow' }
  const testimonials = [
      name: 'Rachel Green',
      company: 'Marketing Agency',
      role: 'Project Manager',
      content: 'Task Manager Pro transformed our team productivity. We complete projects 40% faster with better quality.',
      rating: 5,
    name: 'Tom Anderson',
      company: 'Software Startup',
      role: 'CEO',
      content: 'The AI prioritization is incredible. It knows exactly what to focus on and when. Our team loves it.',
      name: 'Lisa Park',
      company: 'Consulting Firm',
      role: 'Operations Director',
      content: 'The automation features saved us 15 hours per week. We can now focus on high-value work.',
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <CheckSquare className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            Task Manager Pro
  
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            AI-Powered Productivity Platform,
  
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Supercharge your productivity with our AI-powered task management platform. 
            Get intelligent prioritization, automated workflows, and team collaboration 
            tools that help you achieve more in less time.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
            <$2 />
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
  
            <$2 />
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              Start Free Trial,
  
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">40%
            <div className="text-white font-semibold mb-2">More Productive
            <div className="text-gray-300 text-sm">With AI prioritization
            <div className="text-4xl font-bold text-purple-400 mb-2">60%
            <div className="text-white font-semibold mb-2">Team Efficiency
            <div className="text-gray-300 text-sm">Better collaboration tools
            <div className="text-4xl font-bold text-green-400 mb-2">70%
            <div className="text-white font-semibold mb-2">Less Manual Work
            <div className="text-gray-300 text-sm">With automation
            <div className="text-4xl font-bold text-orange-400 mb-2">85%
            <div className="text-white font-semibold mb-2">Goal Achievement
            <div className="text-gray-300 text-sm">With smart tracking
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center">
            Powerful Task Management Features,
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}
            ))}
        {/* Integrations Section */}
            Works with Your Tools
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-4xl mb-3">{integration.icon}
                <h3 className="text-lg font-bold text-white mb-2">{integration.name}
                <p className="text-gray-300 text-sm">{integration.description}
        {/* Pricing Section */}
            Simple, Transparent Pricing
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              < key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${$2 />
                plan.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}
                <p className="text-gray-300 mb-6">{plan.description}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}
                  <span className="text-gray-300">{plan.period}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                </ul>
                < className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${$2 />
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover: from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  Get Started,
  
        {/* Testimonials */}
            What Our Users Say
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"
                <div>
                  <div className="font-semibold text-white">{testimonial.name}
                  <div className="text-cyan-400 text-sm">{testimonial.role}
                  <div className="text-gray-400 text-sm">{testimonial.company}
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Supercharge Your Productivity?
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals using Task Manager Pro to achieve more, 
import { Link } from 'react-router-dom'
const TaskManagerProPage: React.FC = () => {
    const features = [],
  return (
    {// TODO: Add content
  }
}
  ico,
  n: CheckSquare,
      titl,
  e: 'AI Task Prioritization',
      descriptio,
  n: 'Intelligent task prioritization that analyzes deadlines, dependencies, and importance to optimize your workflow.',
      benefi,
  t: 'Increase productivity by 40%',
    },
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, shared workspaces, and intelligent task assignment.',
      benefit: 'Improve team efficiency by 60%',
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PagePage: React.FC = () => {
  return (
          <div>Coming Soon
  )
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24"></section>"
        <div className="text-center mb-16"></div>"
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>"
            <CheckSquare className="w-10 h-10 text-white" />
          </div>"
          < className="text-4xl,"$2 />
  md: text-6xl font-bold text-white mb-6"></h1>
// Task Manager Pro,
          </h1>"
          < className="text-xl,"$2 />
  md: text-2xl text-cyan-400 mb-8 font-medium"></p>
// AI-Powered Productivity Platform,
          </p>"
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"></p>
Supercharge your productivity with our AI-powered task management platform.
            Get intelligent prioritization, automated workflows, and team collaboration
            tools that help you achieve more in less time.
          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
            <$2 />
              href="tel:+13024640950" className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
// >
          "
          <Phone className="w-5 h-5 mr-2" />,
 Cal,
  l: (302) 464-0950
            </a>
            <$2 />
              href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
Start Free Trial,
            </Link>
        {/* Key Benefits */}"
        < className="grid grid-cols-1,"$2 />
  md:grid-cols-4 gap-8 mb-16"></div>"
          <div className="text-center"></div>"
            <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>"
            <div className="text-white font-semibold mb-2">More Productive</div>"
            <div className="text-gray-300 text-sm">With AI prioritization</div>"
            <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>"
            <div className="text-white font-semibold mb-2">Team Efficiency</div>"
            <div className="text-gray-300 text-sm">Better collaboration tools</div>"
            <div className="text-4xl font-bold text-green-400 mb-2">70%</div>"
            <div className="text-white font-semibold mb-2">Less Manual Work</div>"
            <div className="text-gray-300 text-sm">With automation</div>"
            <div className="text-4xl font-bold text-orange-400 mb-2">85%</div>"
            <div className="text-white font-semibold mb-2">Goal Achievement</div>"
            <div className="text-gray-300 text-sm">With smart tracking
        {/* Features Section */}"
        <section className="mb-16"></section>"
          < className="text-3xl,"$2 />
  md: text-4xl font-bold text-white mb-12 text-center"></h2>
// Powerful Task Management Features,
          </h2>"
          < className="grid grid-cols-1,$2 />
  md:grid-cols-2,"
  lg:grid-cols-3 gap-8">
            {features.map((feature, index) => ()}"
          < key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20,"$2 />
  hover:border-cyan-400/40 transition-all duration-300"></div>"
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" /></feature>"
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>"
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>"
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}
            ))}
        {/* Integrations Section */}
Works with Your Tools;"
          < className="grid grid-cols-2,"$2 />
  md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => ()}"
          < key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center,"$2 />
  hover:border-cyan-400/40 transition-all duration-300"></div>"
                <div className="text-4xl mb-3">{integration.icon}</div>"
                <h3 className="text-lg font-bold text-white mb-2">{integration.name}</h3>"
                <p className="text-gray-300 text-sm">{integration.description}
{/* Pricing Section */}
            Simple, Transparent Pricing;"
          < className="grid grid-cols-1,"$2 />
  md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => ()}
          < key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${}$2 />
  // TOD,
  O: Add content,
}
//                 plan.popular
//                   ? 'border-cyan-400 scale-105'
                  : 'border-slate-700,
  hover:border-cyan-500/50'`
              }`}>
                {plan.popular && ()}"
          <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
Most Popular
                )}"
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                <p className="text-gray-300 mb-6">{plan.description}</p>"
                <div className="mb-6"></div>"
                  <span className="text-4xl font-bold text-white">{plan.price}</span>"
                  <span className="text-gray-300">{plan.period}</span>"
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center text-gray-300"></li>"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                </ul>`
                < className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}$2 />
? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white,
  hover:from-cyan-500,
  hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400,
  hover:bg-cyan-400,
  hover: text-white'
                  Get Started,
                </button></button>
        {/* Testimonials */}
            What Our Users Say;"
          < className="grid grid-cols-1,"$2 />
  md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => ()}"
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20"></div>"
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => ()}"
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" /></Star>"
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"
                <div></div>"
                  <div className="font-semibold text-white">{testimonial.name}</div>"
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>"
                  <div className="text-gray-400 text-sm">{testimonial.company}
{/* CTA Section */}"
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20"></section>"
          < className="text-3xl,"$2 />
  md:text-4xl font-bold text-white mb-6">
            Ready to Supercharge Your Productivity?"
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals using Task Manager Pro to achieve more,
            work smarter, and reach their goals faster.
  )
}
export default TaskManagerProPage</div>
  </div>
  </div>
  </div>
  </div>
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </h2>
  </div>
  </div>
  </Link>
  </a>
  </div>
  </p>
  </p>
  </div>
  </section>
  </div>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></p></p></p></p></p></p></h3></h3></h3></section></section>