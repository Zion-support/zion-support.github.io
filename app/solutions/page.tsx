// import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Building,
  Briefcase,
  Heart,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck
} from 'lucide-react';

export const metadata = {
  title: 'AI Solutions - Zion Tech Group | Enterprise AI Transformation',
  description: 'Comprehensive AI solutions for enterprise transformation. Quantum computing, autonomous operations, and AI-powered business intelligence solutions.',
  keywords: 'AI solutions, enterprise AI, quantum computing, autonomous operations, AI transformation, business intelligence',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            AI Solutions for Every Industry
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Transform your organization with cutting-edge AI solutions designed for your specific industry and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Custom Solution
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/case-studies" 
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions designed for your industry's unique challenges and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive AI transformation for large enterprises with complex operations and legacy systems.
              </p>
              <Link to="/enterprise" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Explore Enterprise Solutions
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SMB Solutions</h3>
              <p className="text-gray-600 mb-4">
                Cost-effective AI solutions designed for small and medium businesses to compete with larger enterprises.
              </p>
              <Link to="/solutions/smb" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                Explore SMB Solutions
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Startup Solutions</h3>
              <p className="text-gray-600 mb-4">
                AI-powered tools and platforms to help startups scale rapidly and compete in the market.
              </p>
              <Link to="/solutions/startup" className="text-purple-600 font-semibold hover:text-purple-700 flex items-center">
                Explore Startup Solutions
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare Solutions</h3>
              <p className="text-gray-600 mb-4">
                AI-driven healthcare solutions for improved patient outcomes and operational efficiency.
              </p>
              <Link to="/solutions/healthcare" className="text-red-600 font-semibold hover:text-red-700 flex items-center">
                Explore Healthcare Solutions
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Solutions</h3>
              <p className="text-gray-600 mb-4">
                Advanced AI solutions for financial services, risk management, and fraud detection.
              </p>
              <Link to="/solutions/financial" className="text-yellow-600 font-semibold hover:text-yellow-700 flex items-center">
                Explore Financial Solutions
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manufacturing Solutions</h3>
              <p className="text-gray-600 mb-4">
                Smart manufacturing solutions with predictive maintenance and quality optimization.
              </p>
              <Link to="/solutions/manufacturing" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center">
                Explore Manufacturing Solutions
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Retail Solutions</h3>
              <p className="text-gray-600 mb-4">
                AI-powered retail solutions for inventory management, customer experience, and sales optimization.
              </p>
              <Link to="/solutions/retail" className="text-pink-600 font-semibold hover:text-pink-700 flex items-center">
                Explore Retail Solutions
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education Solutions</h3>
              <p className="text-gray-600 mb-4">
                AI-enhanced educational platforms for personalized learning and administrative efficiency.
              </p>
              <Link to="/solutions/education" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center">
                Explore Education Solutions
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transportation Solutions</h3>
              <p className="text-gray-600 mb-4">
                Smart transportation solutions with route optimization and autonomous vehicle integration.
              </p>
              <Link to="/solutions/transportation" className="text-cyan-600 font-semibold hover:text-cyan-700 flex items-center">
                Explore Transportation Solutions
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technologies to power your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum AI Computing</h3>
              <p className="text-gray-600 mb-4">
                Leverage quantum-enhanced AI for unprecedented computational power and breakthrough performance.
              </p>
              <Link to="/services/quantum-ai" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Autonomous Enterprise</h3>
              <p className="text-gray-600 mb-4">
                Achieve 95% automation across your enterprise with self-managing AI systems.
              </p>
              <Link to="/services/autonomous-enterprise" className="text-purple-600 font-semibold hover:text-purple-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Business Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Advanced analytics and insights powered by next-generation AI technologies.
              </p>
              <Link to="/services/ai-business-intelligence" className="text-green-600 font-semibold hover:text-green-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade AI security frameworks and automated threat detection.
              </p>
              <Link to="/services/ai-cybersecurity" className="text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cloud AI Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Scalable, secure cloud infrastructure optimized for AI workloads and deployment.
              </p>
              <Link to="/services/cloud-ai" className="text-red-600 font-semibold hover:text-red-700">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Intelligence</h3>
              <p className="text-gray-600 mb-4">
                AI-powered data processing, analysis, and insights for informed decision-making.
              </p>
              <Link to="/services/data-analytics" className="text-indigo-600 font-semibold hover:text-indigo-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a custom AI solution designed specifically for your industry and business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Custom Solution
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/case-studies" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}