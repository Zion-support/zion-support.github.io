import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
=======
const ProjectManagementProPage: React.FC = () => {
  const features = [
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Organize and track tasks with advanced project management tools and AI-powered insights.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates, comments, and file sharing.'
    },
    {
      icon: BarChart,
      title: 'Progress Tracking',
      description: 'Comprehensive project analytics and reporting to track progress and performance.',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and productivity.',
    }
  ];

  const benefits = [
    'Improve project delivery times',
    'Enhance team collaboration',
    'Track progress and performance',
    'Automate routine tasks',
    'Better resource allocation',
    'Reduce project risks',
    'Increase team productivity',
    'Streamline project workflows'
  ];

  return (
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Project Management Pro solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Project Management Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive project management pro solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Project Management Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your projects with our comprehensive management platform. 
                Organize tasks, collaborate with teams, and deliver projects on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <CheckSquare className="mr-2 h-5 w-5" />
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950
                </button>
              </div></div></div></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our project management platform provides everything you need to succeed.
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your project management with our comprehensive platform.
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div></div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Manage Better?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Start your free trial today and transform your project management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}