import React from 'react';
import SEO from '../../components/SEO';
import AdvancedContactForm from '../../components/AdvancedContactForm';

export const metadata = {
  title: 'Contact Us - Zion Tech Group',
  description: 'Get in touch with our AI transformation experts. Free consultation and personalized recommendations for your business automation needs.',
  keywords: ['contact', 'consultation', 'AI automation', 'business transformation'],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Contact Us - Zion Tech Group"
        description="Get in touch with our AI transformation experts. Free consultation and personalized recommendations for your business automation needs."
        keywords="contact, consultation, AI automation, business transformation"
        url="/contact"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Transform Your Business Together
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to achieve 500%+ ROI with AI automation? Get a free consultation with our experts 
            and discover how AI can revolutionize your operations.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdvancedContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
            <p className="text-lg text-gray-600">
              Choose the communication method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Get detailed responses within 24 hours
              </p>
              <a href="mailto:contact@zion.app" className="text-purple-600 hover:text-purple-800 font-semibold">
                contact@zion.app
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our AI experts
              </p>
              <a href="tel:+15551234567" className="text-purple-600 hover:text-purple-800 font-semibold">
                +1 (555) 123-4567
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Schedule an in-person consultation
              </p>
              <address className="text-purple-600 font-semibold not-italic">
                123 Innovation Drive<br />
                Tech City, TC 12345
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our AI automation services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                How quickly can I see results from AI automation?
              </h3>
              <p className="text-gray-600">
                Most clients see initial improvements within 30-60 days, with full transformation results 
                typically achieved within 6-12 months. Our phased implementation approach ensures 
                continuous progress and early wins.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What's included in the free consultation?
              </h3>
              <p className="text-gray-600">
                Our free consultation includes a comprehensive assessment of your current operations, 
                identification of automation opportunities, preliminary ROI projections, and a 
                customized implementation roadmap. No obligation, just valuable insights.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you work with small businesses or only enterprises?
              </h3>
              <p className="text-gray-600">
                We work with businesses of all sizes, from startups to Fortune 500 companies. 
                Our AI automation solutions are scalable and can be tailored to fit any budget 
                and operational scale.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What industries do you specialize in?
              </h3>
              <p className="text-gray-600">
                We have extensive experience across manufacturing, healthcare, finance, retail, 
                technology, education, and government sectors. Our AI solutions are adaptable 
                to any industry's specific needs and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your AI Transformation?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join hundreds of companies that have achieved remarkable success with our AI automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}