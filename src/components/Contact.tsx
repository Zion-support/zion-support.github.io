import React from "react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can help you achieve your goals.
              </p>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-20 px-4">
            <ContactForm />
          </section>

          {/* Contact Information Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Email Us</h3>
                  <p className="text-gray-300">hello@ziontechgroup.com</p>
                  <p className="text-gray-300">support@ziontechgroup.com</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">Mon-Fri 9AM-6PM EST</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Visit Us</h3>
                  <p className="text-gray-300">123 Innovation Drive</p>
                  <p className="text-gray-300">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;