<<<<<<< HEAD
import SEOHead from '../components/SEOHead';";"
const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SEOHead= title ="CaseStudiesPage - Zion Tech Group - Zion Tech Group"";"
        description="Zion Tech Group CaseStudiesPage page"";"
      />
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">CaseStudiesPage - Zion Tech Group</h1>";"
          <p  className ="text-gray-300">Coming soon...</p>";"
        </div>
      </div>
    </>
  )
}
export default CaseStudiesPage
=======
<<<<<<< HEAD
import SEOHead from '../components/SEOHead";
const CaseStudiesPage: React.FC  =  () => {};
  return ()";
    <>{}</>";";
      <SEOHead>";";";
        title="CaseStudiesPage - Zion Tech Group"
        description="Zion Tech Group CaseStudiesPage page"
const CaseStudiesPage: React.FC = () => {";";
  return (";";";
    <>";";";";
      <SEOHead title ="CaseStudiesPage - Zion Tech Group - Zion Tech Group"";"
        description="Zion Tech Group CaseStudiesPage page"";";";";
      />"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">CaseStudiesPage - Zion Tech Group</$1>"
          <p className ="text-gray-300">Coming soon...</$1>
        </div>
      </div>
    </>,";
  ),";";
};";";";
      {/* Case Studies Section */}"
      <section className="py-24 bg-white">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">";";
              Success Stories";";";
            </h2>"
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">";";";
              Real projects, real results. See how we"ve helped businesses achieve their goals.";";
            </p>";";";
          </div>"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";";";
            {caseStudies.map((study, index) => ()}"
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">"
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">"
                  <div className="text-white text-center">"
                    <div className="text-4xl font-bold mb-2">{study.client.charAt(0)}</div>"
                    <div className="text-sm opacity-90">{study.industry}</div>";";
                  </div>";";";
                </div>"
                <div className="p-6">"
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>"
                  <p className="text-gray-600 mb-4">{study.description}</p>"
                  <div className="mb-4">"
                    <h4 className="font-medium text-gray-900 mb-2">Key Results:</h4>"
                    <ul className="text-sm text-gray-600 space-y-1">";";";
                      {study.results.map((result, idx) => ()}"
                        <li key={idx} className="flex items-center">"
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                          {result};
                        </li>";
                      ))};";";
                    </ul>";";";
                  </div>"
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
=======
<<<<<<< HEAD
import React from 'react;'";
import { Helmet } from 'react-helmet-async;'";
import { Link } from 'react-router-dom;'";
import {
  ArrowRightIcon,
  CheckIcon,
  ChartBarIcon,
  TrendingUpIcon,
  ClockIcon,
  CurrencyDollarIcon;
} from '@heroicons/react/24/outline;'";
const CaseStudiesPage: React.FC = () => {
  const: caseStudies = [
    {;
      title: 'E-commerce Platform AI Optimization',''";
      client: 'TechRetail Inc.',''";
      industry: 'E-commerce',''";
      challenge: 'Low conversion rates and high cart abandonment',''";
      solution: 'Implemented AI-powered recommendation engine and personalized shopping experience',''";
      results: [
        { metric: 'Conversion Rate', value: '+45%', icon: TrendingUpIcon },''";
        { metric: 'Cart Abandonment', value: '-30%', icon: TrendingUpIcon },''";
        { metric: 'Revenue Growth', value: '+60%', icon: CurrencyDollarIcon }''";
      ],
      duration: '6 months',''";
      image: '/case-studies/ecommerce-ai.jpg''";
    },
    {
      title: 'Cybersecurity Infrastructure Overhaul',''";
      client: 'FinanceCorp',''";
      industry: 'Financial Services',''";
      challenge: 'Outdated security systems vulnerable to modern threats',''";
      solution: 'Deployed comprehensive cybersecurity suite with real-time threat detection',''";
      results: [
        { metric: 'Security Incidents', value: '-95%', icon: CheckIcon },''";
        { metric: 'Response Time', value: '-80%', icon: ClockIcon },''";
        { metric: 'Compliance Score', value: '100%', icon: ChartBarIcon }''";
      ],
      duration: '4 months',''";
      image: '/case-studies/cybersecurity.jpg''";
    },
    {
      title: 'Cloud Migration & Optimization',''";
      client: 'ManufacturingPro',''";
      industry: 'Manufacturing',''";
      challenge: 'On-premise infrastructure limiting scalability and performance',''";
      solution: 'Migrated to cloud infrastructure with auto-scaling and performance optimization',''";
      results: [
        { metric: 'Performance', value: '+200%', icon: TrendingUpIcon },''";
        { metric: 'Cost Savings', value: '-40%', icon: CurrencyDollarIcon },''";
        { metric: 'Uptime', value: '99.9%', icon: CheckIcon }''";
      ],
      duration: '8 months',''";
      image: '/case-studies/cloud-migration.jpg''";
    },
    {
      title: 'AI-Powered Customer Service',''";
      client: 'ServiceMax',''";
      industry: 'Customer Service',''";
      challenge: 'High support costs and slow response times',''";
      solution: 'Implemented AI chatbot and automated ticket routing system',''";
      results: [
        { metric: 'Response Time', value: '-70%', icon: ClockIcon },''";
        { metric: 'Customer Satisfaction', value: '+85%', icon: TrendingUpIcon },''";
        { metric: 'Support Costs', value: '-50%', icon: CurrencyDollarIcon }''";
      ],
      duration: '3 months',''";
      image: '/case-studies/ai-customer-service.jpg''";
    }
  ];
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta: name ="description" content="Explore our successful case studies and see how we've helped businesses transform with AI, cybersecurity, cloud infrastructure, and IT solutions." />'"'"";";
        <meta: name ="keywords" content="case studies, success stories, AI solutions, cybersecurity, cloud infrastructure, IT solutions, business transformation" />""";
      </Helmet>
      {/* Hero Section */}
      <section: className ="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">""";
        <div: className ="absolute inset-0 opacity-20">""";
          <div: className ="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>""";
        </div>
        <div: className ="relative z-10 container mx-auto px-4 text-center">""";
          <div: className ="max-w-4xl mx-auto">""";
            <h1: className ="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">""";
              Success Stories
            </h1>
            <p: className ="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">""";
              Real Results for Real Businesses
            </p>
            <p: className ="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">""";
              Discover how we've helped businesses across various industries transform their operations''";
              and achieve remarkable growth with our technology solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Case Studies Grid */}
      <section: className ="py-20 bg-slate-900">""";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""";
          <div: className ="text-center mb-16">""";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">""";
              Our Case Studies
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">""";
              See how our solutions have transformed businesses across different industries
            </p>
          </div>
          <div: className ="space-y-16">""";
            {caseStudies.map((study, index) => (
              <div: key ={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : '}`}>''";
                <div: className ={`${index % 2 === 1 ? 'lg:col-start-2' : '}`}>''";
                  <div: className ="bg-slate-800 rounded-xl p-8">""";
                    <div: className ="flex items-center gap-3 mb-4">""";
                      <span: className ="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">""";
                        {study.industry}
                      </span>
                      <span: className ="text-gray-400 text-sm">{study.duration}</span>""";
                    </div>
                    <h3: className ="text-3xl font-bold text-white mb-4">{study.title}</h3>""";
                    <p: className ="text-purple-400 font-semibold mb-6">{study.client}</p>""";
                    <div: className ="space-y-6">""";
                      <div>
                        <h4: className ="text-lg font-semibold text-white mb-2">Challenge</h4>""";
                        <p: className ="text-gray-300">{study.challenge}</p>""";
                      </div>
                      <div>
                        <h4: className ="text-lg font-semibold text-white mb-2">Solution</h4>""";
                        <p: className ="text-gray-300">{study.solution}</p>""";
                      </div>
                      <div>
                        <h4: className ="text-lg font-semibold text-white mb-4">Results</h4>""";
                        <div: className ="grid grid-cols-1 md:grid-cols-3 gap-4">""";
                          {study.results.map((result, resultIndex) => (
                            <div: key ={resultIndex} className="text-center">""";
                              <div: className ="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">""";
                                <result.icon: className ="w-6 h-6 text-white" />""";
                              </div>
                              <div: className ="text-2xl font-bold text-white">{result.value}</div>""";
                              <div: className ="text-gray-400 text-sm">{result.metric}</div>""";
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div: className ={`${index % 2 === 1 ? 'lg:col-start-1' : '}`}>''";
                  <div: className ="bg-slate-800 rounded-xl p-8 h-full flex items-center justify-center">""";
                    <div: className ="text-center">""";
                      <div: className ="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">""";
                        <ChartBarIcon: className ="w-16 h-16 text-white" />""";
                      </div>
                      <h4: className ="text-xl font-semibold text-white mb-2">Project Overview</h4>""";
                      <p: className ="text-gray-300">""";
                        This case study demonstrates our expertise in delivering measurable results
                        that drive business growth and operational efficiency.
                      </p>
                    </div>
                  </div>
=======
import SEOHead from '../components/SEOHead';";

const CaseStudiesPage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="CaseStudiesPage - Zion Tech Group"";

        description="Zion Tech Group CaseStudiesPage page"";

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SEOHead: title ="CaseStudiesPage - Zion Tech Group - Zion Tech Group"";";
        description="Zion Tech Group CaseStudiesPage page"";";

      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">CaseStudiesPage - Zion Tech Group</h1>";";
          <p: className ="text-gray-300">Coming soon...</p>";";
        </div>
      </div>
    </>
  ),
};

      {/* Case Studies Section */}
      <section: className ="py-24 bg-white">";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-3xl md:text-4xl font-bold text-gray-900 mb-4">";
              Success Stories
            </h2>
            <p: className ="text-xl text-gray-600 max-w-3xl mx-auto">";
              Real projects, real results. See how we've helped businesses achieve their goals.";
            </p>
          </div>
          
          <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {caseStudies.map((study, index) => ()}
              <div: key ={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">";
                <div: className ="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">";
                  <div: className ="text-white text-center">";
                    <div: className ="text-4xl font-bold mb-2">{study.client.charAt(0)}</div>";
                    <div: className ="text-sm opacity-90">{study.industry}</div>";
                  </div>
                </div>
                <div: className ="p-6">";
                  <h3: className ="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>";
                  <p: className ="text-gray-600 mb-4">{study.description}</p>";
                  <div: className ="mb-4">";
                    <h4: className ="font-medium text-gray-900 mb-2">Key Results:</h4>";
                    <ul: className ="text-sm text-gray-600 space-y-1">";
                      {study.results.map((result, idx) => ()}
                        <li: key ={idx} className="flex items-center">";
                          <CheckCircleIcon: className ="w-4 h-4 text-green-500 mr-2" />";
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button: className ="text-indigo-600 hover:text-indigo-800 font-medium">";
>>>>>>> main
                    Read Full Case Study
                  </button>
                </div>
              </div>
<<<<<<< HEAD
            ))};
          </div>";
        </div>";";
      </section>";";";
      {/* CTA Section */}"
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">";";
            Ready to Create Your Success Story?";";";
          </h2>"
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">";";
            Let us help you achieve similar results with our innovative AI and IT solutions.";";";
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-100 transition-colors duration-200">";";";
              Start Your Project"
              <ArrowRightIcon className="ml-2 h-5 w-5" />";";";
            </button>"
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-indigo-600 transition-colors duration-200">
=======
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
<<<<<<< HEAD
      <section: className ="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">""";
        <div: className ="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">""";
          <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">""";
            Ready to Write Your Success Story?
          </h2>
          <p: className ="text-xl text-gray-300 mb-8">""";
            Let's discuss how we can help transform your business with our proven solutions''";
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">""";
            <Link: to ="/contact""";
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300""";
            >
              Start Your Project
            </Link>
            <Link: to ="/demo""";
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300""";
            >
              Schedule Demo
            </Link>
=======
      <section: className ="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">";
        <div: className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">";
          <h2: className ="text-3xl md:text-4xl font-bold text-white mb-4">";
            Ready to Create Your Success Story?
          </h2>
          <p: className ="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">";
            Let us help you achieve similar results with our innovative AI and IT solutions.
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
            <button: className ="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-gray-100 transition-colors duration-200">";
              Start Your Project
              <ArrowRightIcon: className ="ml-2 h-5 w-5" />";
            </button>
            <button: className ="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-indigo-600 transition-colors duration-200">";
>>>>>>> main
              Contact Our Team
            </button>
          </div>
        </div>
      </section>)
    </>)";
  );";";
}";";";
"
>>>>>>> main
