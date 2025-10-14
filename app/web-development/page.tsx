import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Code, Globe, Smartphone, Database, Shield, Zap, Users, Clock, DollarSign } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const WebDevelopmentPage = () => {
  const services = [
    {
      id: 'frontend-development',
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Vue, and Angular.',
      icon: <Code className="w-8 h-8" />,
      features: ['React Applications', 'Vue.js Development', 'Angular Solutions', 'Progressive Web Apps'],
      price: 'Starting at $2,500'
    },
    {
      id: 'backend-development',
      title: 'Backend Development',
      description: 'Robust server-side applications and APIs for your business needs.',
      icon: <Database className="w-8 h-8" />,
      features: ['Node.js APIs', 'Python/Django', 'PHP/Laravel', 'Microservices'],
      price: 'Starting at $3,000'
    },
    {
      id: 'full-stack-development',
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend and everything in between.',
      icon: <Globe className="w-8 h-8" />,
      features: ['End-to-End Solutions', 'Database Design', 'API Integration', 'Deployment'],
      price: 'Starting at $5,000'
    },
    {
      id: 'ecommerce-development',
      title: 'E-commerce Development',
      description: 'Custom e-commerce platforms and online store solutions.',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['Custom Stores', 'Payment Integration', 'Inventory Management', 'Mobile Commerce'],
      price: 'Starting at $4,000'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your project'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your application using the latest technologies and best practices'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment to ensure everything works perfectly'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Development',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Scalable',
      description: 'Built with security and scalability in mind'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Experienced developers with proven track records'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock support and maintenance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern, responsive, and scalable web applications." />
        <meta name="keywords" content="web development, frontend development, backend development, full-stack development, e-commerce, React, Node.js, Python" />
      </Helmet>

      <ResponsiveContainer>
        {/* Hero Section */}
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Web Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your ideas into powerful web applications with our expert development team. 
            From simple websites to complex enterprise solutions, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <FuturisticButton size="lg">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
            </Link>
            <Link to="/demo">
              <FuturisticButton variant="outline" size="lg">
                View Portfolio <Globe className="w-5 h-5 ml-2" />
              </FuturisticButton>
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <FuturisticCard key={service.id} className="p-8">
                <div className="text-blue-400 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-blue-400 mb-6">{service.price}</div>
                <Link to="/contact">
                  <FuturisticButton className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-gray-400 text-sm">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Frontend</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>React/Next.js</li>
                  <li>Vue.js/Angular</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Backend</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Node.js/Python</li>
                  <li>Express.js/Django</li>
                  <li>PostgreSQL/MongoDB</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Cloud & DevOps</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>AWS/Azure/GCP</li>
                  <li>Docker/Kubernetes</li>
                  <li>CDN Services</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Tools & Testing</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Git/GitHub</li>
                  <li>Jest/Cypress</li>
                  <li>Webpack/Vite</li>
                  <li>Figma/Sketch</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="text-blue-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <FuturisticButton size="lg">
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
            </Link>
            <Link to="/demo">
              <FuturisticButton variant="outline" size="lg">
                View Our Work <Globe className="w-5 h-5 ml-2" />
              </FuturisticButton>
            </Link>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default WebDevelopmentPage;
