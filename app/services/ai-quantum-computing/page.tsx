import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Quantum Computing Services - Enterprise Quantum AI Solutions | Zion Tech Group',
  description: 'Transform your business with AI quantum computing services. Achieve 1000x faster processing, solve complex optimization problems, and gain competitive advantages.',
  keywords: 'quantum AI services, quantum computing, enterprise quantum solutions, AI optimization',
};

export default function AIQuantumComputingServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            AI Quantum Computing Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Revolutionize your business operations with the power of quantum AI. 
            Solve previously impossible problems, achieve unprecedented processing speeds, 
            and gain competitive advantages that transform your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose AI Quantum Computing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quantum AI solutions deliver unprecedented computational power and 
              optimization capabilities that transform how businesses operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-6xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1000x Faster Processing</h3>
              <p className="text-gray-600">
                Solve complex optimization problems in milliseconds that would take 
                traditional computers weeks to complete.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect Optimization</h3>
              <p className="text-gray-600">
                Achieve optimal solutions for supply chains, financial modeling, 
                and resource allocation with quantum precision.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Advantage</h3>
              <p className="text-gray-600">
                Gain market leadership with quantum AI capabilities that your 
                competitors can't match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quantum AI Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the quantum AI solution that fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <QuantumServiceCard
              title="Quantum Optimization Starter"
              price="$9,999"
              description="Perfect for small to medium businesses looking to optimize specific processes."
              features={[
                "Supply chain optimization",
                "Financial modeling",
                "Resource allocation",
                "Basic quantum algorithms",
                "Monthly optimization reports",
                "Email support"
              ]}
              benefits={[
                "50% faster processing",
                "30% cost reduction",
                "Improved efficiency",
                "Basic quantum insights"
              ]}
              popular={false}
              icon="⚛️"
            />

            <QuantumServiceCard
              title="Enterprise Quantum AI"
              price="$49,999"
              description="Comprehensive quantum AI solution for large enterprises with complex needs."
              features={[
                "Advanced quantum algorithms",
                "Real-time optimization",
                "Multi-department integration",
                "Custom quantum models",
                "24/7 monitoring",
                "Priority support",
                "Quarterly strategy sessions",
                "Performance analytics"
              ]}
              benefits={[
                "1000x faster processing",
                "85% cost reduction",
                "99.9% uptime guarantee",
                "Competitive advantage"
              ]}
              popular={true}
              icon="🚀"
            />

            <QuantumServiceCard
              title="Quantum AI Transformation"
              price="Custom Pricing"
              description="Complete organizational transformation with full quantum AI integration."
              features={[
                "Full quantum AI platform",
                "Custom algorithm development",
                "Enterprise-wide integration",
                "Dedicated quantum team",
                "24/7 expert support",
                "Strategic consulting",
                "Change management",
                "Training and upskilling"
              ]}
              benefits={[
                "Unlimited processing power",
                "Industry leadership position",
                "Future-proof technology",
                "Maximum ROI potential"
              ]}
              popular={false}
              icon="🌟"
            />
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Results: TechCorp Success Story
            </h2>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">$50M</div>
                <div className="text-purple-200">Annual Cost Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-purple-200">System Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000x</div>
                <div className="text-purple-200">Processing Speed</div>
              </div>
            </div>
            
            <blockquote className="text-xl italic text-center mb-6">
              "The AI quantum computing transformation has been nothing short of revolutionary. 
              We've not only achieved our cost reduction goals but have positioned ourselves 
              as the market leader in our industry."
            </blockquote>
            <cite className="text-purple-200 text-center block">
              — Sarah Chen, CTO, TechCorp
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with Quantum AI?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the quantum revolution and gain competitive advantages that will 
            transform your industry. Our expert team is ready to help you implement 
            quantum AI solutions that deliver immediate and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuantumServiceCard({ title, price, description, features, benefits, popular, icon }) {
  return (
    <div className={`border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
      popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white hover:border-purple-300'
    }`}>
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-900">{price}</span>
      </div>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <span className="text-purple-500 mr-2">→</span>
              <span className="text-gray-600 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Link
        href="/contact"
        className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}