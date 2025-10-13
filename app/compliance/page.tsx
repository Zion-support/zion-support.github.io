import { Helmet , CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'react-helmet-async';';'import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react';'';
const PagePage: React.FC = () => {
  
  
  
const features = [
  
    {
  
      icon: FileCheck,
      title: 'Compliance Management',''      description: 'Comprehensive compliance management solutions for various industry standards',},''    {icon: Lock,
      title: 'Security Compliance',''      description: 'Ensure your systems meet the highest security and compliance standards',},''    {icon: Award,
      title: 'Certification Support',''      description: 'Get support for achieving and maintaining industry certifications',},''    {icon: Shield,
      title: 'Audit Readiness',''  ];];];
  const benefits = [
  
    'Advanced compliance technology integration',''    'Real-time compliance monitoring',''    'Enterprise-grade security and compliance',''    'Scalable and flexible compliance solutions',''    '24/7 technical support',''    'Easy integration with existing systems',''    'Cost-effective pricing plans',''        <title>Page | Zion Tech Group</title>
<meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />""<meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" /></Helmet>""
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">""<div className="max-w-7xl mx-auto">""<div className="text-center">""<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">""<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">""                Page
              </span>
<br />
<span className="text-white">Solutions</span></h1>""<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""              Transform your business with our advanced page solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">""<button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">""                Get Started
                <ArrowRight className="ml-2 h-5 w-5" /></button>""<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">""                Learn More
              </button></div>
</div></div>
</section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""              Why Choose Our Page?
            </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">""              Our page solutions deliver unmatched performance, security, and scalability.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">""            {features.map((feature, index) => (
  
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">""<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">""<feature.icon className="h-6 w-6 text-white" /></div>""<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""<p className="text-gray-300">{feature.description}</p></div>""            ))}
          </div></div>
</section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">""<div className="max-w-7xl mx-auto">""<div className="text-center mb-16">""<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">""              Key Benefits
            </h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">""              Experience the power of our page solutions for your business.
            </p></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">""            {benefits.map((benefit, index) => (
  
              <div key={index} className="flex items-start space-x-3">""<CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />""<p className="text-gray-300 text-lg">{benefit}</p>""<title>Compliance | Zion Tech Group</title>
<meta name="description" content="Professional Compliance services by Zion Tech Group. Advanced AI and IT solutions for your business." />""<meta name="keywords" content="compliance, regulatory compliance, IT services, Zion Tech Group, compliance management" />""<div className="container mx-auto px-4 py-16">""<div className="text-center mb-16">""<h1 className="text-5xl font-bold text-white mb-6">Compliance;</h1></""          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Ensure your business meets all regulatory and compliance requirements.</p>""            Powered by advanced AI technology and industry expertise.
          </p>
<p className="text-xl text-gray-300 max-w-3xl mx-auto">Our compliance solutions deliver unmatched performance, security, and scalability.</p></p>""</div>
<div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">,</div>""          {features.map((feature, index) => (
  
            <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover: bg-white/20 transition-all duration-300">,</div>""<feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />""<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""<p className="text-gray-300">{feature.description</p>}</p></div>""          ))}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">""<h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our Compliance Solutions?</h2></h2>""<div className="grid md: grid-cols-2 gap-6">,</div>""            {benefits.map((benefit, index) => (
  
              <div key={index}className="flex items-center space-x-3">""<CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />""<span className="text-gray-300">{benefit</span>}</span>"">>>>>>> origin/main
              </div>
            ))}
        <div className="text-center"></div>""<h2 className="text-3xl font-bold text-white mb-6">""    'Easy integration with existing systems',''    'Cost-effective pricing plans',''    'Proven track record of success'''  ]
  return() {features.map((feature, index) => ()
          ))}
        </div>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16" /></div>""<h2 className="text-3xl font-bold text-white text-center mb-8" /></h2>""            Why Choose Our Compliance Solutions?
          </h2>
<div className="grid md:grid-cols-2 gap-6" /></div>""            {benefits.map((benefit, index) => ()
            ))}
          </div></div>
<div className="text-center">""<h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2></h2>""<p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your compliance needs and get a customized solution.</p></p>""<div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>""<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>""<Phone className="mr-2 h-5 w-5" />""              Call Now;
  </
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>""<Mail className="mr-2 h-5 w-5" />""              Email Us;
  </
>>>>>>> origin/main
>>>>>>> origin/main
          </div></div>
</div></div>
}
export default CompliancePage;
  </button></button>
</h1>
<p className="text-xl text-purple-100 mb-8">""            Contact our experts to discuss your compliance needs and get a customized solution.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">""<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">""<Phone className="mr-2 h-5 w-5" />""              Call Now
              <Mail className="mr-2 h-5 w-5" />""              Email Us
  )
}
export default CompliancePage</div></div>;
</div></div>
</div></div>
</div></div>
</div></div>
</span></button>
</p></p>
</p></p>
</h1></h2>
</h2></h3>
>>>>>>> origin/main

>>>>>>> cursor/delete-records-a75e
}
