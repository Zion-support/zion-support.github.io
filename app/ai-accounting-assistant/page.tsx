import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
export default function AIAccountingAssistantZionTechGroup() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
=======
import { Calculator, BarChart, FileText, Shield, Zap, CheckCircle } from 'lucide-react';

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    { icon: Calculator, title: 'Automated Bookkeeping', description: 'AI-powered automated bookkeeping and transaction categorization.' ,},
    { icon: BarChart, title: 'Financial Analytics', description: 'Advanced financial reporting and analytics with AI insights.' ,},
    { icon: FileText, title: 'Tax Preparation', description: 'Automated tax preparation and compliance management.' ,},
    { icon: Shield, title: 'Audit Trail', description: 'Complete audit trail and compliance tracking for financial records.' ,},
    { icon: Zap, title: 'Invoice Processing', description: 'Automated invoice processing and payment tracking.' ,},
    { icon: CheckCircle, title: 'Compliance', description: 'Ensure compliance with accounting standards and regulations.' ,}
  ];

  return (
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Ai Accounting Assistant solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Accounting Assistant</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai accounting assistant solutions designed to meet your business needs.
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Accounting Assistant</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Streamline your accounting with AI-powered financial management tools.</p>
            </div></div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
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