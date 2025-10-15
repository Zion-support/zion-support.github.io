<<<<<<< HEAD
import React from 'react;'
import { ArrowRight } from 'lucide-react;'
import { CheckCircle } from 'lucide-react;'
import { Star } from 'lucide-react;'
import { Users } from 'lucide-react;'
import { Clock } from 'lucide-react;'
import { DollarSign } from 'lucide-react;'
import { Shield } from 'lucide-react;'
import { Code } from 'lucide-react;'
import { Database } from 'lucide-react;'
import { Mail } from 'lucide-react;'
import { Settings } from 'lucide-react;'
import { Target } from 'lucide-react;'
import { TrendingUp } from 'lucide-react;'
import { PieChart } from 'lucide-react;'
import { MessageSquare } from 'lucide-react;'
import { Heart } from 'lucide-react;'
import { Globe } from 'lucide-react;'
import { Smartphone } from 'lucide-react;'
import { Network } from 'lucide-react;'
import { Lock } from 'lucide-react;'
import { Cpu } from 'lucide-react;'
import { Wifi } from 'lucide-react;'
import { Building2 } from 'lucide-react;'
import { Briefcase } from 'lucide-react;'
import { Lightbulb } from 'lucide-react;'
import { Link } from 'react-router-dom;'
import EnhancedSEO from '../components/EnhancedSEO;'
const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,""
      title: 'Advanced Features',''
      description: 'Cutting-edge technology for maximum efficiency''
    },
    {
      icon: <Shield className="w-8 h-8" />,""
      title: 'Secure & Reliable',''
      description: 'Enterprise-grade security and 99.9% uptime''
    },
    {
      icon: <Users className="w-8 h-8" />,""
      title: 'Expert Support',''
      description: '24/7 support from our team of specialists''
    }
  ];
  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Transparent pricing for AI services, micro SAAS solutions, and IT infrastructure. Choose the plan that fits your business needs with 14-day free trials."
        />
        <meta
          name="keywords"
          content="AI services pricing, micro SAAS pricing, IT solutions pricing, business intelligence pricing, cybersecurity pricing, cloud storage pricing"
        />
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Simple,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Transparent
                </span>
                <br />Pricing
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your business. All plans include 14-day free trials, 
              no setup fees, and the flexibility to change anytime.
>>>>>>> origin/main
=======
    <></>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center">""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""
              Page
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">""
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
              Professional page services designed to help your business succeed and grow.
>>>>>>> main
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/demo""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View Demo
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </div>      </div>
=======
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""
                Why Choose Our Page Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">""
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              {features.map((feature, index) => (
                <div key={index} className="text-center">""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300">{feature.description}</p>""
                </div>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">""
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">""
              Let's discuss how our page services can help your business succeed.''
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/contact""
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group""
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />""
              </Link>
              <Link
                to="/services""
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300""
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
>>>>>>> origin/main
    </>
=======
    </div>
>>>>>>> main
  );
};
const page = React.lazy(() => import('./page'));''
export default page;
=======
import SEOHead from '../components/SEOHead';

const PagePage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="page - Zion Tech Group"
        description="Zion Tech Group page service page"

const PricingPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="pricing - Zion Tech Group - Zion Tech Group"";
        description="Zion Tech Group pricing service page"";

      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">pricing - Zion Tech Group</h1>";
          <p className ="text-gray-300">Coming soon...</p>";
        </div>
      </div>
    </>

  )
    },
    {}
export default PagePage;

  ),
};

>>>>>>> main
