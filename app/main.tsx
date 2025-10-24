<<<<<<< HEAD:app/main.tsx
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
const features = [
    {
      icon: "🚀",
      title: "Professional",
      description: "Professional innovation labs solutions"
    },
    {
      icon: "⚡",
      title: "Fast & Reliable",
      description: "Quick and efficient service delivery"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Comprehensive analytics and insights"
    },
    {
<<<<<<< HEAD:app/main.tsx
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    },
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success',
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" >
      <Helmet>
        <title>MainPage - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, business solutions, technology" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-7xl mx-auto" >
          <div className="text-center" >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" >Main</span>
              <br />
              <span className="text-white" >Solutions</span>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" >Transform your business with our advanced main solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" >
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"  aria-label="Action button">Get Started</button>
                <ArrowRight className="ml-2 h-5 w-5"  />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"  aria-label="Action button">Learn More</button>
          </div>
        </div>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-7xl mx-auto" >
          <div className="text-center mb-16" >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" >Why Choose Our Main?</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" >Our main solutions deliver unmatched performance, security, and scalability.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >{features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4" >
                  <feature.icon className="h-6 w-6 text-white"  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" >{feature.title}</h3>
                <p className="text-gray-300" >{feature.description}</p>
            ))}
          </div>
        </div>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" >
        <div className="max-w-7xl mx-auto" >
          <div className="text-center mb-16" >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" >Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" >Experience the power of our main solutions for your business.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >{benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3" >
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0"  />
                <p className="text-gray-300 text-lg" >{benefit}</p>
            ))}
          </div>
        </div>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-4xl mx-auto text-center" >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" >Ready to Get Started?</h2>h2>
            <p className="text-xl text-purple-100 mb-8" >Contact our experts to discuss your main needs and get a customized solution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" >
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"  aria-label="Action button">
                <Phone className="mr-2 h-5 w-5"  />
                Call Now
  </
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"  aria-label="Action button">
                <Mail className="mr-2 h-5 w-5"  />
                Email Us
  </
            </div>
        </div></div></div></div></div></div></div></div>
      </section>
  )
}
;
          </div>
        </div>
      </section>
    </div>
  ;
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a086:app/innovation-labs/page.tsx


export default Innovationlab;s;
=======
    'Proven track record of success'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<Helmet><>
</Helmet>
<title>Main | Zion Tech Group</title><>
<//title>
<meta name="description" content="Professional Main services by Zion Tech Group. Advanced AI and IT solutions for your business." /><>
</meta name="description" content="Professional Main services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<meta name="keywords" content="main, AI solutions, IT services, Zion Tech Group, main" /><>
</meta name="keywords" content="main, AI solutions, IT services, Zion Tech Group, main" />
</Helmet><//Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"><>
</section className="relative py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center"></div><>
<//div>
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><>
<//h1>
<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Main
  </h1><>
<//h1>
<br /><>
</br />
<span className="text-white">Solutions</span><>
<//span>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced main solutions.</p><//p>
              Powered by cutting-edge AI technology and industry expertise.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button><//button>
                Get Started</button><>
<//button>
<ArrowRight className="ml-2 h-5 w-5" /><>
</ArrowRight className="ml-2 h-5 w-5" />
</button><>
<//button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button><//button>
                Learn More</button><>
<//button>
</h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
              Why Choose Our Main?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Our main solutions deliver unmatched performance, security, and scalability.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
            {features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div><>
<//div>
<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div><>
<//div>
<feature.icon className="h-6 w-6 text-white" /><>
</feature.icon className="h-6 w-6 text-white" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><>
<//h3>
<p className="text-gray-300">{feature.description}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"><>
</section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
              Key Benefits</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Experience the power of our main solutions for your business.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div><//div>
            {benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="flex items-start space-x-3"></div><>
<//div>
<CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" /><>
</CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
<p className="text-gray-300 text-lg">{benefit}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"><>
</section className="py-20 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h1><//h1>
              Ready to Get Started?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-purple-100 mb-8"></p><//p>
              Contact our experts to discuss your main needs and get a customized solution.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Phone className="mr-2 h-5 w-5" /></Phone className="mr-2 h-5 w-5" />
                Call Now
  </h1><>
<//h1>
<button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button><>
<//button>
<Mail className="mr-2 h-5 w-5" /></Mail className="mr-2 h-5 w-5" />
                Email Us
  </h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><//div>
  )
}
export default MainPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-be4b
