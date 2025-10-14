import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';import {ArrowRight, CheckCircle, Star, Users, Award, Zap} from 'lucide-react';
;
const HomePage: React.FC = () => {;
const features  = [{
      icon: Zap,
      title: AI-Powered Solutions','      description:'Cutting-edge artificial intelligence to automate and optimize your business processes.','      color:'from-blue-500 to-purple-600''},
    {icon: Users,
      title:'Expert Team','      description:'Experienced professionals dedicated to delivering exceptional results for your business.','      color:'from-green-500 to-teal-600''},
    {icon: Award,
      title:'Proven Results','      description:'Track record of successful projects and satisfied clients across various industries.','      color:'from-orange-500 to-red-600''};];
;
const services  = [{title:'AI Development','      description:'Custom AI solutions tailored to your business needs','      icon:'🤖','      href:'/services/ai-development''},
    {title:'Cloud Solutions','      description:'Scalable cloud infrastructure and migration services','      icon:'☁️','      href:'/services/cloud-solutions''},
    {title:'Cybersecurity','      description:'Comprehensive security solutions to protect your data','      icon:'🔒','      href:'/services/cybersecurity''},
    {title:'Data Analytics','      description:'Transform your data into actionable business insights','      icon:'📊','      href:'/services/data-analytics''};];
;
const testimonials  = [{name:'Sarah Johnson','      company:'TechCorp Inc.','      content:'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.','      rating: 5},
    {name:'Mike Chen','      company:'DataFlow Systems','      content:'Outstanding service and expertise. They delivered our project on time and within budget.','      rating: 5},
    {name:'Emily Rodriguez','      company:'CloudFirst Solutions','      content:'Professional team with deep technical knowledge. Highly recommended for any tech project.','      rating: 5};];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation." />
"        <meta name="keywords" content="AI, artificial intelligence, IT solutions, cloud computing, cybersecurity, data analytics, business automation" />"      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
"        <div className="container mx-auto px-4">"          <div className="max-w-4xl mx-auto text-center">
"            <h1 className="text-5xl md:text-6xl font-bold mb-6">"              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
"                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">"              Leading provider of cutting-edge technology solutions that drive innovation, 
              efficiency, and growth for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
"              <Link
                to="/contact""                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
"              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />"              </Link>
              <Link
                to="/demo"
"                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors duration-200""              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
"        <div className="container mx-auto px-4">"          <div className="text-center mb-16">
"            <h2 className="text-4xl font-bold text-gray-900 mb-4">"              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
"              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">"            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
"                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} mb-6`}>
`                  <feature.icon className="h-8 w-8 text-white" />"                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
"                  {feature.title}
                </h3>
                <p className="text-gray-600">"                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
"        <div className="container mx-auto px-4">"          <div className="text-center mb-16">
"            <h2 className="text-4xl font-bold text-gray-900 mb-4">"              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
"              Comprehensive technology solutions designed to meet your unique business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">"            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
"              >
                <div className="text-4xl mb-4">{service.icon}</div>"                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
"                  {service.title}
                </h3>
                <p className="text-gray-600">"                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
"        <div className="container mx-auto px-4">"          <div className="text-center mb-16">
"            <h2 className="text-4xl font-bold text-gray-900 mb-4">"              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
"              Don't just take our word for it. Here's what our satisfied clients have to say.'            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">"            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
"                <div className="flex items-center mb-4">"                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
"                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"                  "{testimonial.content}"
"                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>"                  <div className="text-gray-500">{testimonial.company}</div>
"                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">"        <div className="container mx-auto px-4 text-center">
"          <h2 className="text-4xl font-bold mb-6">"            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
"            Let's discuss how our AI and IT solutions can help you achieve your business goals.'          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"            <Link
              to="/contact"
"              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200""            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
"            </Link>
            <Link
              to="/services""              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors duration-200"
"            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
;
export default HomePage;