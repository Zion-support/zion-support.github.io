'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIChatbotBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text">
            AI Chatbot Builder
          </h1>
          <p className="text-xl md:text-2xl text-purple-400 mb-8 font-medium neon-glow">
            Create Intelligent Chatbots for Customer Support & Sales
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Build powerful AI chatbots without coding. Our platform enables you to create intelligent 
            conversational agents for customer support, lead generation, and sales automation in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Try Free Demo
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-4">Drag & Drop Builder</h3>
              <p className="text-gray-300">
                Create sophisticated conversation flows with our intuitive visual builder. 
                No coding required - just drag, drop, and configure your chatbot logic.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300">
                Advanced NLP capabilities that understand context, intent, and sentiment 
                to provide human-like conversations and accurate responses.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Channel Support</h3>
              <p className="text-gray-300">
                Deploy your chatbot across websites, mobile apps, social media, 
                messaging platforms, and voice assistants with one click.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Analytics & Insights</h3>
              <p className="text-gray-300">
                Track conversation metrics, user satisfaction, conversion rates, 
                and performance analytics to optimize your chatbot continuously.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4">Lead Generation</h3>
              <p className="text-gray-300">
                Automatically capture leads, qualify prospects, and route them to 
                your sales team with intelligent lead scoring and CRM integration.
              </p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Integrations</h3>
              <p className="text-gray-300">
                Connect with your existing tools including CRM, helpdesk, payment 
                systems, and databases through our extensive integration library.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Perfect For Every Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Customer Support</h3>
              <p className="text-gray-300 mb-4">
                Provide 24/7 customer support with instant responses to common questions, 
                ticket creation, and seamless handoff to human agents when needed.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• FAQ automation</li>
                <li>• Ticket routing</li>
                <li>• Order status updates</li>
                <li>• Escalation management</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Sales & Marketing</h3>
              <p className="text-gray-300 mb-4">
                Generate leads, qualify prospects, and guide customers through your 
                sales funnel with intelligent conversation flows and personalized recommendations.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Lead qualification</li>
                <li>• Product recommendations</li>
                <li>• Appointment scheduling</li>
                <li>• Follow-up automation</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">E-commerce</h3>
              <p className="text-gray-300 mb-4">
                Enhance the shopping experience with product search, recommendations, 
                order tracking, and personalized assistance throughout the customer journey.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Product search & filters</li>
                <li>• Size & style recommendations</li>
                <li>• Order tracking</li>
                <li>• Return & exchange help</li>
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
              <p className="text-gray-300 mb-4">
                Provide patient support, appointment scheduling, symptom checking, 
                and medication reminders while maintaining HIPAA compliance.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Appointment booking</li>
                <li>• Symptom assessment</li>
                <li>• Medication reminders</li>
                <li>• Insurance verification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 1,000 conversations</li>
                <li>✓ Basic templates</li>
                <li>✓ Website integration</li>
                <li>✓ Email support</li>
                <li>✓ Basic analytics</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-purple-400">
              <div className="text-sm font-bold text-purple-400 mb-2">MOST POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$149<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Up to 10,000 conversations</li>
                <li>✓ Advanced templates</li>
                <li>✓ Multi-channel deployment</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Custom integrations</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$399<span className="text-lg text-gray-400">/month</span></div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>✓ Unlimited conversations</li>
                <li>✓ Custom development</li>
                <li>✓ White-label options</li>
                <li>✓ Dedicated support</li>
                <li>✓ Custom analytics</li>
                <li>✓ API access</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Start building your intelligent chatbot today with our free trial. 
            No credit card required - just powerful AI at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300"
            >
              📧 Email Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}