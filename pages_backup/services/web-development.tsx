import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Globe, Zap, Shield, BarChart3, Users, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';

const WebDevelopment: NextPage = () => {
  const webSolutions = [
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies.',
      features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Progressive Web Apps']
    },
    {
      icon: Zap,
      title: 'Backend Systems',
      description: 'Scalable and secure backend architectures for web applications.',
      features: ['Node.js/Express', 'Python/Django', 'Database Design', 'API Development']
    },
    {
      icon: Shield,
      title: 'E-commerce Solutions',
      description: 'Complete online store solutions with payment integration.',
      features: ['Shopping Cart', 'Payment Gateways', 'Inventory Management', 'Order Processing']
    },
    {
      icon: BarChart3,
      title: 'Performance Optimization',
      description: 'Fast, efficient web applications that provide excellent user experience.',
      features: ['SEO Optimization', 'Speed Optimization', 'Mobile Optimization', 'Analytics']
    }
  ];

  const technologies = [
    {
      category: 'Frontend',
      tools: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Sass']
    },
    {
      category: 'Backend',
      tools: ['Node.js', 'Python', 'Java', 'PHP', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'DevOps',
      tools: ['Docker', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions', 'CI/CD']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a comprehensive project plan.'
    },
    {
      number: '02',
      title: 'Design & UX',
      description: 'Creating intuitive user interfaces and exceptional user experiences.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building your web application using modern technologies and best practices.'
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing to ensure quality and performance.'
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'Smooth deployment and go-live with ongoing support.'
    }
  ];

  return (
    <>
      <Head>
        <title>Web Development Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Tech Group's web development services. Modern, responsive web applications built with cutting-edge technologies." />
        <meta name="keywords" content="web development, frontend development, backend development, React, Next.js, e-commerce, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-12 h-12" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Web Development Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Create stunning, high-performance web applications that engage your users 
              and drive business growth. From concept to deployment, we've got you covered.
            </p>
          </div>
        </section>

        {/* Web Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Web Development Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive web development services that help businesses 
                create powerful online presence and digital experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {webSolutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{solution.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Technologies We Use</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We leverage the latest technologies and frameworks to build modern, 
                scalable, and maintainable web applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {tech.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Development Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology that ensures successful project delivery 
                and maximum value for your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Zion Tech Group for Web Development?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We combine technical expertise with creative design to deliver web applications 
                that not only look great but also perform exceptionally well.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">User-Centric Design</h3>
                <p className="text-gray-600">
                  We prioritize user experience and create intuitive interfaces that 
                  engage and convert your visitors.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Performance Focused</h3>
                <p className="text-gray-600">
                  We build fast, efficient web applications that provide excellent 
                  user experience and SEO benefits.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Security First</h3>
                <p className="text-gray-600">
                  We implement robust security measures to protect your application 
                  and your users' data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Web Application?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your web development needs and create a solution 
              that helps you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"><span className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </span></Link>
              <Link href="/services"><span className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore All Services
              </span></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDevelopment;