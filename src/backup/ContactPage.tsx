import React from 'react';
import SEO from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us - Zion Tech Group" 
        description="Get in touch with our team for inquiries and support." 
        keywords="contact, support, inquiries, Zion Tech Group"
        url="https://ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get in touch with our team for inquiries, support, or collaboration opportunities
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-3 bg-zion-blue border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:border-zion-cyan"
                      placeholder="Your message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-zion-cyan text-zion-blue-dark py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-cyan rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-zion-slate-light">contact@ziontechgroup.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-zion-slate-light">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-zion-slate-light">
                      123 Tech Street<br />
                      Innovation City, IC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}