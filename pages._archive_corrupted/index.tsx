<<<<<<< HEAD


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
<h3 className=\"text-2xl font-bold text-gray-900 mb-4 text-center\">
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
<h3 className=\"text-2xl font-bold text-gray-900 mb-4 text-center\">;
import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Sidebar from '../src/components/Sidebar';
import SEOHead from '../src/components/seo/SEOHead';
import {ArrowRight,, CheckCircle,, Star,, Users,, Zap,, Shield,, Globe,, TrendingUp,, Award,, Clock,, Brain,, Cloud,, Database,, Network,, Target,, Phone,, Mail,, Menu,, Server,, Smartphone,, MapPin} from 'lucide-react';
const Home = memo(() => {;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = useCallback(() => {;
    setSidebarOpen(prev => !prev);
  }, []);
  const handleSidebarClose = useCallback(() => {;
    setSidebarOpen(false);
  }, []);
  const structuredData = {;
    "@context": ""https": //schema && schema.org",;
    "@type": "Organization",;
    "name": "Zion Tech Group",;
    "url": ""https": //ziontechgroup && ziontechgroup.com",;
    "logo": ""https": //ziontechgroup && ziontechgroup.com/logo && logo.png",;
    "description": "Leading provider of revolutionary AI services, IT solutions, and micro SaaS development",;
    "address": {;
      "@type": "PostalAddress",;
      "streetAddress": "364 E Main St STE 1008",;
      "addressLocality": "Middletown",;
      "addressRegion": "DE",;
      "postalCode": "19709",;
      "addressCountry": "US";
    },;
    "contactPoint": {;
      "@type": "ContactPoint",;
      "telephone": "+1-302-464-0950",;
      "contactType": "customer service",;
      "email": "kleber@ziontechgroup && ziontechgroup.com";
    },;
    "sameAs": [""https": //ziontechgroup && ziontechgroup.com";
    ],;
    "foundingDate": "2020",;
    "numberOfEmployees": "10-50",;
    "industry": "Technology Services",;
    "services": ["AI Services",;
      "IT Solutions", ;
      "Micro SaaS Development",;
      "Cloud Infrastructure",;
      "Cybersecurity",;
      "Digital Transformation";
    ]
};
  const stats = [{ "number": '500+', "label": 'Projects Completed' }
    { "number": '50+', "label": 'Happy Clients' }
    { "number": '99 && 99.9%', "label": 'Uptime Guarantee' }
    { "number": '24/7', "label": 'Support Available' }
  ];
  const services = [{;
      "title": 'AI Services',;
      "description": 'Cutting-edge artificial intelligence solutions',;
      "icon": Brai n,;
      "href": '/ai-services';
    },;
    {;
      "title": 'IT Services',;
      "description": 'Comprehensive IT infrastructure and cloud solutions',;
      "icon": Serve r,;
      "href": '/it-services';
    },;
    {;
      "title": 'Micro SaaS',;
      "description": 'Custom software-as-a-service applications',;
      "icon": Smartphon e,;
      "href": '/micro-saas';
    },;
    {;
      "title": 'All Services',;
      "description": 'Complete technology solutions overview',;
      "icon": Glob e,;
      "href": '/comprehensive-services';
    }
  ];
  const features = [{;
      "icon": Za p,;
      "title": 'Fast Delivery',;
      "description": 'Quick turnaround times without compromising quality'},;
    {;
      "icon": Shiel d,;
      "title": 'Enterprise Security',;
      "description": 'Bank-level security and compliance standards'},;
    {;
      "icon": User s,;
      "title": 'Expert Team',;
      "description": 'Dedicated professionals with years of experience'},;
    {;
      "icon": Glob e,;
      "title": 'Global Reach',;
      "description": 'Serving clients worldwide with local expertise'},;
  ];
  return (
    <>;
      <SEOHeadtitle="Zion Tech Group - Leading Technology Solutions Provider"
        description="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation."
        keywords="AI services, IT solutions, micro SaaS, technology consulting, digital transformation, cloud services, cybersecurity"
        structuredData={structuredData}
       />;
      <Navigation  />;
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose}  />;
      <main className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading">;
          <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8">;
            <div className="text-center">;
              <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6">;
                Transform Your Business with;
                <span className="text-blue-600"> Technology</span>;
              </h1>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">;
                Leading provider of revolutionary AI services, IT solutions, and;
                micro SaaS development. We help businesses innovate, scale, and;
                succeed in the digital age.;
              </p>;
              <div className="flex flex-col "sm": fle x-row gap-4 justify-center">;
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: b g-blue-700 transition-colors">;
                  Get Started;
                </Link>;
                <Link
                  href="/services-enhanced"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">;
                  View Services;
                </Link>;
                <button
                  onClick={handleSidebarToggle}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold "hover": b g-gray-50 transition-colors flex items-center justify-center"
                  aria-label="Open navigation menu"
                  aria-expanded={sidebarOpen}>;
                  Explore Services;
                </Link>;
              </div>;
              <div>;
                <h4 className="text-white font-semibold mb-4">Services</h4>;
                <ul className="space-y-2">;
                  <li><Link href="/services/ai-machine-learning" className="text-gray-400 "hover": tex t-white transition-colors text-sm">AI & Machine Learning</Link></li>;
                  <li><Link href="/services/micro-saas" className="text-gray-400 hover: tex t-white transition-colors text-sm">Micro SaaS Solutions</Link></li>;
                  <li><Link href="/services/ai-content-creation" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI Content Creation</Link></li>;
                  <li><Link href="/services/email-automation" className="text-gray-400 hover: tex t-white transition-colors text-sm">Email Automation</Link></li>;
                </ul>;
              </div>;
              <div>;
                <h4 className="text-white font-semibold mb-4">Contact</h4>;
                <div className="space-y-2 text-gray-400 text-sm">;
                  <p><strong>Phone:</strong> +1 302 464 0950</p>;
                  <p><strong>Email:</strong> kleber@ziontechgroup && ziontechgroup.com</p>;
                  <p><strong>Address:</strong> 364 E Main St STE 1008<br  />Middletown, DE 19709</p>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Stats Section */}
        <section className="py-20 bg-white">;
          <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8">;
            <div className="grid grid-cols-2 md: gri d-cols-4 gap-8">;
              {stats && stats.map((stat, index) => (;
                <div key={index} className="text-center">;
                  <div className="text-4xl font-bold text-blue-600 mb-2">;
                    {stat && stat.number}
                  </div>;
                  <div className="text-gray-600">{stat && stat.label}</div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Services Section */}
        <section className="py-20 bg-gray-50">;
          <div className="max-w-7xl mx-auto px-4 "sm": p x-6 lg: p x-8">;
            <div className="text-center mb-16">;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">;
                Our Services;
              </h2>;
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
                Comprehensive technology solutions designed to drive your;
                business forward;
              </p>;
            </div>;
            <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">;
              {services && services.map((service, index) => (;
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm "hover": shado w-md transition-shadow">;
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">;
                    <service && service.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service && service.title}</h3>;
                  <p className="text-gray-600 mb-6 text-center">{service && service.description}</p>;
                  {/* Pricing and Delivery */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">;
                    <div className="flex justify-between items-center mb-2">;
                      <span className="text-sm font-medium text-gray-700">Starting "Price": </span>;
                      <span className="text-lg font-bold text-blue-600">{service && service.pricing}</span>;
                    </div>;
                    <div className="flex justify-between items-center">;
                      <span className="text-sm font-medium text-gray-700">Delivery "Time": </span>;
                      <span className="text-sm text-gray-600">{service && service.delivery}</span>;
                    </div>;
                  </div>;
                  {/* Key Benefits */}
                  <div className="mb-6">;
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key "Benefits": </h4>;
                    <ul className="space-y-2">;
                      {service && service.benefits.map((benefit, benefitIndex) => (;
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">;
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
                          {benefit}
                        </li>;
                      ))}
<<<<<<< HEAD


=======
                    </ul>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                    {service.title}
                  </h3>
                  <p className=\"text-gray-600 mb-6 text-center\">
                    {service.description}
                  </p>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                  <Link href={service.href} className=\"block\">
                    <div className=\"w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold \"hover\": b g-blue-700 transition-colors text-center flex items-center justify-center\">
                  <Link href={service.href} className="block">
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold "hover": b g-blue-700 transition-colors text-center flex items-center justify-center">
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                      Learn More
                      <ArrowRight className=\"w-4 h-4 ml-2\"  />
                    </div>
                  </Link>
                </div>
                    </ul>;
                  </div>;
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">;
                    {service && service.title}
                  </h3>;
                  <p className=\"text-gray-600 mb-6 text-center\">;
                    {service && service.description}
                  </p>;
                  <Link href={service && service.href} className=\"block\">;
                    <div className=\"w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold \"hover\": b g-blue-700 transition-colors text-center flex items-center justify-center\">;
                  <Link href={service && service.href} className="block">;
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold "hover": b g-blue-700 transition-colors text-center flex items-center justify-center">;
                      Learn More;
                      <ArrowRight className=\"w-4 h-4 ml-2\"  />;
                    </div>;
                  </Link>;
                </div>;
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
<<<<<<< HEAD

=======
        <section className=\"py-20 bg-white\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8\">
            <div className=\"text-center mb-16\">
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">
                Why Choose Zion Tech Group?
              </h2>
              <p className=\"text-lg text-gray-600\">
                We deliver exceptional results through innovation, expertise,
                and dedication
              </p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 lg: gri d-cols-4 gap-8\">
            <div className="grid grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-4 gap-8">
=======
<<<<<<< HEAD
=======
            <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 lg: gri d-cols-4 gap-8\">
            <div className="grid grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-4 gap-8">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
            <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 lg: gri d-cols-4 gap-8\">
            <div className="grid grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-4 gap-8">
            <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 lg: gri d-cols-4 gap-8\">
            <div className="grid grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-4 gap-8">
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              {features.map((feature, index) => (
                <div key={index} className=\"text-center\">
                  <div className=\"bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center\">
                    <feature.icon className=\"w-8 h-8 text-blue-600\" />
                  </div>
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">
                    {feature.title}
                  </h3>
                  <p className=\"text-gray-600\">{feature.description}</p>
                </div>
        <section className=\"py-20 bg-white\">;
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8\">;
            <div className=\"text-center mb-16\">;
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">;
                Why Choose Zion Tech Group?;
              </h2>;
              <p className=\"text-lg text-gray-600\">;
                We deliver exceptional results through innovation, expertise,;
                and dedication;
              </p>;
            </div>;
            <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 lg: gri d-cols-4 gap-8\">;
            <div className="grid grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-4 gap-8">;
            <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 lg: gri d-cols-4 gap-8\">;
            <div className="grid grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-4 gap-8">;
            <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 lg: gri d-cols-4 gap-8\">;
            <div className="grid grid-cols-1 "md": gri d-cols-2 lg: gri d-cols-4 gap-8">;
              {features && features.map((feature, index) => (;
                <div key={index} className=\"text-center\">;
                  <div className=\"bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center\">;
                    <feature && feature.icon className=\"w-8 h-8 text-blue-600\" />;
                  </div>;
                  <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">;
                    {feature && feature.title}
                  </h3>;
                  <p className=\"text-gray-600\">{feature && feature.description}</p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Contact Information Section */}
<<<<<<< HEAD

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
        <section className=\"py-16 bg-gray-50\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8\">
            <div className=\"text-center mb-12\">
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Get In Touch</h2>
              <p className=\"text-lg text-gray-600\">Ready to start your next project? Contact us today.</p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <div className=\"grid grid-cols-1 md: gri d-cols-3 gap-8\">
              <div className=\"text-center\">
                <div className=\"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4\">
                  <Phone className=\"w-6 h-6 text-blue-600\"  />
            <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600"  />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                </div>
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Phone</h3>
                <a href=\"tel:+13024640950\" className=\"text-blue-600 hover: tex t-blue-700\">
                  +1 302 464 0950
                </a>
              </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              <div className=\"text-center\">
                <div className=\"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4\">
                  <Mail className=\"w-6 h-6 text-blue-600\"  />
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600"  />
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                </div>
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Email</h3>
                <a href=\"mailto: klebe r@ziontechgroup.com\" className=\"text-blue-600 hover: tex t-blue-700\">
                  kleber@ziontechgroup.com
                </a>
              </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              <div className=\"text-center\">
                <div className=\"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4\">
                  <MapPin className=\"w-6 h-6 text-blue-600\"  />
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-blue-600"  />
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                </div>
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Address</h3>
                <p className=\"text-gray-600\">
                  364 E Main St STE 1008<br  />
                  Middletown, DE 19709
                </p>
<<<<<<< HEAD


=======
                <ul className=\"space-y-2 mb-6\">
                <ul className="space-y-2 mb-6">
                <ul className=\"space-y-2 mb-6\">
                <ul className="space-y-2 mb-6">
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <ul className=\"space-y-2 mb-6\">
                <ul className="space-y-2 mb-6">
=======
<<<<<<< HEAD
=======
                <ul className=\"space-y-2 mb-6\">
                <ul className="space-y-2 mb-6">
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
                <ul className=\"space-y-2 mb-6\">
                <ul className="space-y-2 mb-6">
                <ul className=\"space-y-2 mb-6\">
                <ul className="space-y-2 mb-6">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=\"flex items-center gap-x-2\">
                      <CheckCircle className=\"h-4 w-4 text-blue-600\"  />
                      <span className=\"text-sm text-gray-700\">{feature}</span>
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                <div className=\"flex items-center justify-between mb-4\">
                  <div className=\"flex items-center space-x-2 text-sm text-gray-500\">
                    <Clock className=\"h-4 w-4\"  />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4"  />
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                    <span>{service.delivery}</span>
                  </div>
                  <div className=\"flex items-center space-x-2 text-sm text-gray-500\">
                    <DollarSign className=\"h-4 w-4\"  />
                    <span>{service.pricing}</span>
                  </div>
                </div>
=======
        <section className=\"py-16 bg-gray-50\">;
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8\">;
            <div className=\"text-center mb-12\">;
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Get In Touch</h2>;
              <p className=\"text-lg text-gray-600\">Ready to start your next project? Contact us today.</p>;
            </div>;
            <div className=\"grid grid-cols-1 md: gri d-cols-3 gap-8\">;
              <div className=\"text-center\">;
                <div className=\"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4\">;
                  <Phone className=\"w-6 h-6 text-blue-600\"  />;
            <div className="grid grid-cols-1 md: gri d-cols-3 gap-8">;
              <div className="text-center">;
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Phone className="w-6 h-6 text-blue-600"  />;
                </div>;
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Phone</h3>;
                <a href=\"tel:+13024640950\" className=\"text-blue-600 hover: tex t-blue-700\">;
                  +1 302 464 0950;
                </a>;
              </div>;
              <div className=\"text-center\">;
                <div className=\"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4\">;
                  <Mail className=\"w-6 h-6 text-blue-600\"  />;
              <div className="text-center">;
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <Mail className="w-6 h-6 text-blue-600"  />;
                </div>;
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Email</h3>;
                <a href=\"mailto: klebe r@ziontechgroup && ziontechgroup.com\" className=\"text-blue-600 hover: tex t-blue-700\">;
                  kleber@ziontechgroup && ziontechgroup.com;
                </a>;
              </div>;
              <div className=\"text-center\">;
                <div className=\"w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4\">;
                  <MapPin className=\"w-6 h-6 text-blue-600\"  />;
              <div className="text-center">;
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">;
                  <MapPin className="w-6 h-6 text-blue-600"  />;
                </div>;
                <h3 className=\"text-lg font-semibold text-gray-900 mb-2\">Address</h3>;
                <p className=\"text-gray-600\">;
                  364 E Main St STE 1008<br  />;
                  Middletown, DE 19709;
                </p>;
                <ul className=\"space-y-2 mb-6\">;
                <ul className="space-y-2 mb-6">;
                <ul className=\"space-y-2 mb-6\">;
                <ul className="space-y-2 mb-6">;
                <ul className=\"space-y-2 mb-6\">;
                <ul className="space-y-2 mb-6">;
                  {service && service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className=\"flex items-center gap-x-2\">;
                      <CheckCircle className=\"h-4 w-4 text-blue-600\"  />;
                      <span className=\"text-sm text-gray-700\">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <div className=\"flex items-center justify-between mb-4\">;
                  <div className=\"flex items-center space-x-2 text-sm text-gray-500\">;
                    <Clock className=\"h-4 w-4\"  />;
                <div className="flex items-center justify-between mb-4">;
                  <div className="flex items-center space-x-2 text-sm text-gray-500">;
                    <Clock className="h-4 w-4"  />;
                    <span>{service && service.delivery}</span>;
                  </div>;
                  <div className=\"flex items-center space-x-2 text-sm text-gray-500\">;
                    <DollarSign className=\"h-4 w-4\"  />;
                    <span>{service && service.pricing}</span>;
                  </div>;
                </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/index.tsx
                <Link
                  href=\"/contact\"
                  className=\"inline-flex items-center text-sm font-medium text-blue-600 \"hover\": tex t-blue-500\">;
                  Learn More;
                  <ArrowRight className=\"ml-1 h-4 w-4\"  />;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Testimonials Section */}
<<<<<<< HEAD


=======
        <section className=\"py-20 bg-gray-50\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
            <div className=\"text-center mb-16\">
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">What Our Clients Say</h2>
              <p className=\"text-xl text-gray-600\">
                Don\'t just take our word for it - hear from our satisfied clients
              </p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
              <div className=\"bg-white rounded-lg p-8 shadow-sm\">
                <div className=\"flex items-center mb-4\">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />
                  ))}
                </div>
                <p className=\"text-gray-600 mb-6\">
                  \"Zion Tech Group transformed our business with their AI-powered solutions. The ROI was immediate and the support is exceptional. Highly recommended!\"
                </p>
                <div className=\"flex items-center\">
                  <div className=\"w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4\">
                    <span className=\"text-white font-bold\">JS</span>
                  </div>
                  <div>
                    <h4 className=\"font-semibold text-gray-900\">John Smith</h4>
                    <p className=\"text-gray-500 text-sm\">CEO, TechCorp Solutions</p>
                  </div>
                </div>
              </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              <div className=\"bg-white rounded-lg p-8 shadow-sm\">
                <div className=\"flex items-center mb-4\">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-4">
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />
                  ))}
                </div>
                <p className=\"text-gray-600 mb-6\">
                  \"Their micro SaaS development team delivered exactly what we needed. The platform is scalable, secure, and user-friendly. Outstanding work!\"
                </p>
                <div className=\"flex items-center\">
                  <div className=\"w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4\">
                    <span className=\"text-white font-bold\">MJ</span>
                  </div>
                  <div>
                    <h4 className=\"font-semibold text-gray-900\">Maria Johnson</h4>
                    <p className=\"text-gray-500 text-sm\">CTO, InnovateNow Inc</p>
                  </div>
                </div>
              </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              <div className=\"bg-white rounded-lg p-8 shadow-sm\">
                <div className=\"flex items-center mb-4\">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-4">
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />
=======
        <section className=\"py-20 bg-gray-50\">;
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
            <div className=\"text-center mb-16\">;
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">What Our Clients Say</h2>;
              <p className=\"text-xl text-gray-600\">;
                Don\'t just take our word for it - hear from our satisfied clients;
              </p>;
            </div>;
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">;
              <div className=\"bg-white rounded-lg p-8 shadow-sm\">;
                <div className=\"flex items-center mb-4\">;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              <div className="bg-white rounded-lg p-8 shadow-sm">;
                <div className="flex items-center mb-4">;
                  {[...Array(5)].map((_, i) => (;
                    <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />;
                  ))}
                </div>;
                <p className=\"text-gray-600 mb-6\">;
                  \"Zion Tech Group transformed our business with their AI-powered solutions. The ROI was immediate and the support is exceptional. Highly recommended!\";
                </p>;
                <div className=\"flex items-center\">;
                  <div className=\"w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4\">;
                    <span className=\"text-white font-bold\">JS</span>;
                  </div>;
                  <div>;
                    <h4 className=\"font-semibold text-gray-900\">John Smith</h4>;
                    <p className=\"text-gray-500 text-sm\">CEO, TechCorp Solutions</p>;
                  </div>;
                </div>;
              </div>;
              <div className=\"bg-white rounded-lg p-8 shadow-sm\">;
                <div className=\"flex items-center mb-4\">;
              <div className="bg-white rounded-lg p-8 shadow-sm">;
                <div className="flex items-center mb-4">;
                  {[...Array(5)].map((_, i) => (;
                    <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />;
                  ))}
                </div>;
                <p className=\"text-gray-600 mb-6\">;
                  \"Their micro SaaS development team delivered exactly what we needed. The platform is scalable, secure, and user-friendly. Outstanding work!\";
                </p>;
                <div className=\"flex items-center\">;
                  <div className=\"w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-4\">;
                    <span className=\"text-white font-bold\">MJ</span>;
                  </div>;
                  <div>;
                    <h4 className=\"font-semibold text-gray-900\">Maria Johnson</h4>;
                    <p className=\"text-gray-500 text-sm\">CTO, InnovateNow Inc</p>;
                  </div>;
                </div>;
              </div>;
              <div className=\"bg-white rounded-lg p-8 shadow-sm\">;
                <div className=\"flex items-center mb-4\">;
              <div className="bg-white rounded-lg p-8 shadow-sm">;
                <div className="flex items-center mb-4">;
                  {[...Array(5)].map((_, i) => (;
                    <Star key={i} className=\"w-5 h-5 text-yellow-400 fill-current\" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/index.tsx
                  ))}
                </div>;
                <p className=\"text-gray-600 mb-6\">;
                  \"The IT infrastructure they built for us is rock-solid. 99 && 99.9% uptime and their support team is always available. Worth every penny!\";
                </p>;
                <div className=\"flex items-center\">;
                  <div className=\"w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4\">;
                    <span className=\"text-white font-bold\">DW</span>;
                  </div>;
                  <div>;
                    <h4 className=\"font-semibold text-gray-900\">David Wilson</h4>;
                    <p className=\"text-gray-500 text-sm\">IT Director, Global Enterprises</p>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* Contact Information Section */}
<<<<<<< HEAD


=======
        <section className=\"py-20 bg-white\">
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">
            <div className=\"text-center mb-16\">
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Get in Touch</h2>
              <p className=\"text-xl text-gray-600\">
                Ready to start your digital transformation journey? Contact us today.
              </p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
            <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">
              <div className=\"bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center\">
                <div className=\"p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4 w-fit\">
                  <Phone className=\"w-6 h-6 text-white\" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4 w-fit">
                  <Phone className="w-6 h-6 text-white" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Phone</h3>
                <p className=\"text-gray-600 mb-4\">Call us for immediate assistance</p>
                <a href=\"tel:+13024640950\" className=\"text-blue-600 font-semibold hover:text-blue-700 transition-colors\">
                  +1 302 464 0950
                </a>
              </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              <div className=\"bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center\">
                <div className=\"p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-4 w-fit\">
                  <Mail className=\"w-6 h-6 text-white\" />
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-4 w-fit">
                  <Mail className="w-6 h-6 text-white" />
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Email</h3>
                <p className=\"text-gray-600 mb-4\">Send us a message anytime</p>
                <a href=\"mailto:kleber@ziontechgroup.com\" className=\"text-blue-600 font-semibold hover:text-blue-700 transition-colors\">
                  kleber@ziontechgroup.com
                </a>
              </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
              <div className=\"bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center\">
                <div className=\"p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-4 w-fit\">
                  <MapPin className=\"w-6 h-6 text-white\" />
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-4 w-fit">
                  <MapPin className="w-6 h-6 text-white" />
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
                </div>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Address</h3>
                <p className=\"text-gray-600 mb-4\">Visit our headquarters</p>
                <address className=\"text-blue-600 font-semibold not-italic\">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </address>
              </div>
            </div>
          </div>
        </section>
=======
        <section className=\"py-20 bg-white\">;
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;
            <div className=\"text-center mb-16\">;
              <h2 className=\"text-3xl font-bold text-gray-900 mb-4\">Get in Touch</h2>;
              <p className=\"text-xl text-gray-600\">;
                Ready to start your digital transformation journey? Contact us today.;
              </p>;
            </div>;
            <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8\">;
              <div className=\"bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center\">;
                <div className=\"p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4 w-fit\">;
                  <Phone className=\"w-6 h-6 text-white\" />;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">;
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4 w-fit">;
                  <Phone className="w-6 h-6 text-white" />;
                </div>;
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Phone</h3>;
                <p className=\"text-gray-600 mb-4\">Call us for immediate assistance</p>;
                <a href=\"tel:+13024640950\" className=\"text-blue-600 font-semibold hover:text-blue-700 transition-colors\">;
                  +1 302 464 0950;
                </a>;
              </div>;
              <div className=\"bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center\">;
                <div className=\"p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-4 w-fit\">;
                  <Mail className=\"w-6 h-6 text-white\" />;
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">;
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-4 w-fit">;
                  <Mail className="w-6 h-6 text-white" />;
                </div>;
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Email</h3>;
                <p className=\"text-gray-600 mb-4\">Send us a message anytime</p>;
                <a href=\"mailto:kleber@ziontechgroup && ziontechgroup.com\" className=\"text-blue-600 font-semibold hover:text-blue-700 transition-colors\">;
                  kleber@ziontechgroup && ziontechgroup.com;
                </a>;
              </div>;
              <div className=\"bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center\">;
                <div className=\"p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-4 w-fit\">;
                  <MapPin className=\"w-6 h-6 text-white\" />;
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">;
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-4 w-fit">;
                  <MapPin className="w-6 h-6 text-white" />;
                </div>;
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">Address</h3>;
                <p className=\"text-gray-600 mb-4\">Visit our headquarters</p>;
                <address className=\"text-blue-600 font-semibold not-italic\">;
                  364 E Main St STE 1008<br />;
                  Middletown DE 19709;
                </address>;
              </div>;
            </div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/index.tsx
        {/* CTA Section */}
        <section className=\"py-20 bg-gradient-to-r from-blue-600 to-purple-600\">;
          <div className=\"max-w-7xl mx-auto px-4 \"sm\": p x-6 lg: p x-8 text-center\">;
            <h2 className=\"text-3xl font-bold text-white mb-6\">;
              Ready to Transform Your Business?;
            </h2>;
            <p className=\"text-xl text-blue-100 mb-8 max-w-2xl mx-auto\">;
              Let&apos;s discuss how our technology solutions can drive your;
              success. Get started with a free consultation.\';
            </p>;
            <div className=\"flex flex-col sm: fle x-row gap-4 justify-center\">;
              <Link
                href=\"/contact\"

import React,{ useState,useCallback,memo } from 'react'; import Link from 'next/link'; import Navigation from '../src/components/Navigation'; import Footer from '../src/components/Footer'; import Sidebar from '../src/components/Sidebar'; import SEOHead from '../src/components/seo/SEOHead'; import { ArrowRight,CheckCircle,Star,Users,Zap,Shield,Globe,TrendingUp,Award,Clock,Brain,Cloud,Database,Network,Target,Phone,Mail,Menu,Server,Smartphone,MapPin } from 'lucide-react'; const Home = memo(() => { const [sidebarOpen,setSidebarOpen] = useState(false); const handleSidebarToggle = useCallback(() => { setSidebarOpen(prev => !prev)},[]); const handleSidebarClose = useCallback(() => { setSidebarOpen(false)},[]); const structuredData = { "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of revolutionary AI services,IT solutions,and micro SaaS development","address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" },"contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup.com" },"sameAs": [ "https: ],"foundingDate": "2020","numberOfEmployees": "10-50","industry": "Technology Services","services": [ "AI Services","IT Solutions","Micro SaaS Development","Cloud Infrastructure","Cybersecurity","Digital Transformation" ] }; const stats = [ { number: '500+',label: 'Projects Completed' } { number: '50+',label: 'Happy Clients' } { number: '99.9%',label: 'Uptime Guarantee' } { number: '24/7',label: 'Support Available' } ]; const services = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions',icon: Brai n,href: '/ai-services' },{ title: 'IT Services',description: 'Comprehensive IT infrastructure and cloud solutions',icon: Serve r,href: '/it-services' },{ title: 'Micro SaaS',description: 'Custom software-as-a-service applications',icon: Smartphon e,href: '/micro-saas' },{ title: 'All Services',description: 'Complete technology solutions overview',icon: Glob e,href: '/comprehensive-services' } ]; const features = [ { icon: Za p,title: 'Fast Delivery',description: 'Quick turnaround times without compromising quality',},{ icon: Shiel d,title: 'Enterprise Security',description: 'Bank-level security and compliance standards',},{ icon: User s,title: 'Expert Team',description: 'Dedicated professionals with years of experience',},{ icon: Glob e,title: 'Global Reach',description: 'Serving clients worldwide with local expertise',},]; return ( <> <SEOHead title="Zion Tech Group - Leading Technology Solutions Provider" description="Transform your business with cutting-edge AI services,IT solutions,and micro SaaS development. Expert technology consulting and implementation." keywords="AI services,IT solutions,micro SaaS,technology consulting,digital transformation,cloud services,cybersecurity" structuredData={structuredData} /> <Navigation /> <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} /> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center"> <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Transform Your Business with <span className="text-blue-600"> Technology</span> </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. We help businesses innovate,scale,and succeed in the digital age. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: b g-blue-700 transition-colors" > Get Started </Link> <Link href="/services-enhanced" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors" > View Services </Link> <button onClick={handleSidebarToggle} className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: b g-gray-50 transition-colors flex items-center justify-center" aria-label="Open navigation menu" aria-expanded={sidebarOpen} > Explore Services </Link> </div> <div> <h4 className="text-white font-semibold mb-4">Services</h4> <ul className="space-y-2"> <li><Link href="/services/ai-machine-learning" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI & Machine Learning</Link></li> <li><Link href="/services/micro-saas" className="text-gray-400 hover: tex t-white transition-colors text-sm">Micro SaaS Solutions</Link></li> <li><Link href="/services/ai-content-creation" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI Content Creation</Link></li> <li><Link href="/services/email-automation" className="text-gray-400 hover: tex t-white transition-colors text-sm">Email Automation</Link></li> </ul> </div> <div> <h4 className="text-white font-semibold mb-4">Contact</h4> <div className="space-y-2 text-gray-400 text-sm"> <p><strong>Phone:</strong> +1 302 464 0950</p> <p><strong>Email:</strong> kleber@ziontechgroup.com</p> <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-4xl font-bold text-blue-600 mb-2"> {stat.number} </div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-lg text-gray-600 max-w-2xl mx-auto"> Comprehensive technology solutions designed to drive your business forward </p> </div> <div className="grid grid-cols-1 md: gri d-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shado w-md transition-shadow" > <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6"> <service.icon className="w-8 h-8 text-white" /> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3> <p className="text-gray-600 mb-6 text-center">{service.description}</p> {} <div className="mb-6 p-4 bg-gray-50 rounded-lg"> <div className="flex justify-between items-center mb-2"> <span className="text-sm font-medium text-gray-700">Starting Price:</span> <span className="text-lg font-bold text-blue-600">{service.pricing}</span> </div> <div className="flex justify-between items-center"> <span className="text-sm font-medium text-gray-700">Delivery Time:</span> <span className="text-sm text-gray-600">{service.delivery}</span> </div> </div> {} <div className="mb-6"> <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4> <ul className="space-y-2"> {service.benefits.map((benefit,benefitIndex) => ( <li key={benefitIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {benefit} </li> ))} </ul> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center"> {service.title} </h3> <p className="text-gray-600 mb-6 text-center"> {service.description} </p>
import React,{ useState,useCallback,memo } from 'react'; import Link from 'next/link'; import Navigation from '../src/components/Navigation'; import Footer from '../src/components/Footer'; import Sidebar from '../src/components/Sidebar'; import SEOHead from '../src/components/seo/SEOHead'; import { ArrowRight,CheckCircle,Star,Users,Zap,Shield,Globe,TrendingUp,Award,Clock,Brain,Cloud,Database,Network,Target,Phone,Mail,Menu,Server,Smartphone,MapPin } from 'lucide-react'; const Home = memo(() => { const [sidebarOpen,setSidebarOpen] = useState(false); const handleSidebarToggle = useCallback(() => { setSidebarOpen(prev => !prev)},[]); const handleSidebarClose = useCallback(() => { setSidebarOpen(false)},[]); const structuredData = { "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of revolutionary AI services,IT solutions,and micro SaaS development","address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" },"contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup.com" },"sameAs": [ "https: ],"foundingDate": "2020","numberOfEmployees": "10-50","industry": "Technology Services","services": [ "AI Services","IT Solutions","Micro SaaS Development","Cloud Infrastructure","Cybersecurity","Digital Transformation" ] }; const stats = [ { number: '500+',label: 'Projects Completed' } { number: '50+',label: 'Happy Clients' } { number: '99.9%',label: 'Uptime Guarantee' } { number: '24/7',label: 'Support Available' } ]; const services = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions',icon: Brai n,href: '/ai-services' },{ title: 'IT Services',description: 'Comprehensive IT infrastructure and cloud solutions',icon: Serve r,href: '/it-services' },{ title: 'Micro SaaS',description: 'Custom software-as-a-service applications',icon: Smartphon e,href: '/micro-saas' },{ title: 'All Services',description: 'Complete technology solutions overview',icon: Glob e,href: '/comprehensive-services' } ]; const features = [ { icon: Za p,title: 'Fast Delivery',description: 'Quick turnaround times without compromising quality',},{ icon: Shiel d,title: 'Enterprise Security',description: 'Bank-level security and compliance standards',},{ icon: User s,title: 'Expert Team',description: 'Dedicated professionals with years of experience',},{ icon: Glob e,title: 'Global Reach',description: 'Serving clients worldwide with local expertise',},]; return ( <> <SEOHead title="Zion Tech Group - Leading Technology Solutions Provider" description="Transform your business with cutting-edge AI services,IT solutions,and micro SaaS development. Expert technology consulting and implementation." keywords="AI services,IT solutions,micro SaaS,technology consulting,digital transformation,cloud services,cybersecurity" structuredData={structuredData} /> <Navigation /> <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} /> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center"> <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Transform Your Business with <span className="text-blue-600"> Technology</span> </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. We help businesses innovate,scale,and succeed in the digital age. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: b g-blue-700 transition-colors" > Get Started </Link> <Link href="/services-enhanced" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors" > View Services </Link> <button onClick={handleSidebarToggle} className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: b g-gray-50 transition-colors flex items-center justify-center" aria-label="Open navigation menu" aria-expanded={sidebarOpen} > Explore Services </Link> </div> <div> <h4 className="text-white font-semibold mb-4">Services</h4> <ul className="space-y-2"> <li><Link href="/services/ai-machine-learning" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI & Machine Learning</Link></li> <li><Link href="/services/micro-saas" className="text-gray-400 hover: tex t-white transition-colors text-sm">Micro SaaS Solutions</Link></li> <li><Link href="/services/ai-content-creation" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI Content Creation</Link></li> <li><Link href="/services/email-automation" className="text-gray-400 hover: tex t-white transition-colors text-sm">Email Automation</Link></li> </ul> </div> <div> <h4 className="text-white font-semibold mb-4">Contact</h4> <div className="space-y-2 text-gray-400 text-sm"> <p><strong>Phone:</strong> +1 302 464 0950</p> <p><strong>Email:</strong> kleber@ziontechgroup.com</p> <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-4xl font-bold text-blue-600 mb-2"> {stat.number} </div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-lg text-gray-600 max-w-2xl mx-auto"> Comprehensive technology solutions designed to drive your business forward </p> </div> <div className="grid grid-cols-1 md: gri d-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shado w-md transition-shadow" > <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6"> <service.icon className="w-8 h-8 text-white" /> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3> <p className="text-gray-600 mb-6 text-center">{service.description}</p> {} <div className="mb-6 p-4 bg-gray-50 rounded-lg"> <div className="flex justify-between items-center mb-2"> <span className="text-sm font-medium text-gray-700">Starting Price:</span> <span className="text-lg font-bold text-blue-600">{service.pricing}</span> </div> <div className="flex justify-between items-center"> <span className="text-sm font-medium text-gray-700">Delivery Time:</span> <span className="text-sm text-gray-600">{service.delivery}</span> </div> </div> {} <div className="mb-6"> <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4> <ul className="space-y-2"> {service.benefits.map((benefit,benefitIndex) => ( <li key={benefitIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {benefit} </li> ))} </ul> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center"> {service.title} </h3> <p className="text-gray-600 mb-6 text-center"> {service.description} </p>

=======
                className=\"bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: b g-gray-100 transition-colors\">;
                Get Free Consultation;
              </Link>;
              <Link href=\"/request-quote\" className=\"border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover: b g-white hover: tex t-blue-600 transition-colors\">;
                Request Quote;
              </Link>;
            </div>;
          </div>;
        </section>;
      </main>;
      <Footer  />;
    </>;
  ),;
});
export default Home;
<<<<<<< HEAD
import React,{ useState,useCallback,memo } from 'react'; import Link from 'next/link'; import Navigation from '../src/components/Navigation'; import Footer from '../src/components/Footer'; import Sidebar from '../src/components/Sidebar'; import SEOHead from '../src/components/seo/SEOHead'; import { ArrowRight,CheckCircle,Star,Users,Zap,Shield,Globe,TrendingUp,Award,Clock,Brain,Cloud,Database,Network,Target,Phone,Mail,Menu,Server,Smartphone,MapPin } from 'lucide-react'; const Home = memo(() => { const [sidebarOpen,setSidebarOpen] = useState(false); const handleSidebarToggle = useCallback(() => { setSidebarOpen(prev => !prev)},[]); const handleSidebarClose = useCallback(() => { setSidebarOpen(false)},[]); const structuredData = { "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of revolutionary AI services,IT solutions,and micro SaaS development","address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" },"contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup && ziontechgroup.com" },"sameAs": [ "https: ],"foundingDate": "2020","numberOfEmployees": "10-50","industry": "Technology Services","services": [ "AI Services","IT Solutions","Micro SaaS Development","Cloud Infrastructure","Cybersecurity","Digital Transformation" ] }; const stats = [ { number: '500+',label: 'Projects Completed' } { number: '50+',label: 'Happy Clients' } { number: '99 && 99.9%',label: 'Uptime Guarantee' } { number: '24/7',label: 'Support Available' } ]; const services = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions',icon: Brai n,href: '/ai-services' },{ title: 'IT Services',description: 'Comprehensive IT infrastructure and cloud solutions',icon: Serve r,href: '/it-services' },{ title: 'Micro SaaS',description: 'Custom software-as-a-service applications',icon: Smartphon e,href: '/micro-saas' },{ title: 'All Services',description: 'Complete technology solutions overview',icon: Glob e,href: '/comprehensive-services' } ]; const features = [ { icon: Za p,title: 'Fast Delivery',description: 'Quick turnaround times without compromising quality',},{ icon: Shiel d,title: 'Enterprise Security',description: 'Bank-level security and compliance standards',},{ icon: User s,title: 'Expert Team',description: 'Dedicated professionals with years of experience',},{ icon: Glob e,title: 'Global Reach',description: 'Serving clients worldwide with local expertise',},]; return ( <> <SEOHead title="Zion Tech Group - Leading Technology Solutions Provider" description="Transform your business with cutting-edge AI services,IT solutions,and micro SaaS development. Expert technology consulting and implementation." keywords="AI services,IT solutions,micro SaaS,technology consulting,digital transformation,cloud services,cybersecurity" structuredData={structuredData} /> <Navigation /> <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} /> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center"> <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Transform Your Business with <span className="text-blue-600"> Technology</span> </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. We help businesses innovate,scale,and succeed in the digital age. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: b g-blue-700 transition-colors" > Get Started </Link> <Link href="/services-enhanced" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors" > View Services </Link> <button onClick={handleSidebarToggle} className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: b g-gray-50 transition-colors flex items-center justify-center" aria-label="Open navigation menu" aria-expanded={sidebarOpen} > Explore Services </Link> </div> <div> <h4 className="text-white font-semibold mb-4">Services</h4> <ul className="space-y-2"> <li><Link href="/services/ai-machine-learning" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI & Machine Learning</Link></li> <li><Link href="/services/micro-saas" className="text-gray-400 hover: tex t-white transition-colors text-sm">Micro SaaS Solutions</Link></li> <li><Link href="/services/ai-content-creation" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI Content Creation</Link></li> <li><Link href="/services/email-automation" className="text-gray-400 hover: tex t-white transition-colors text-sm">Email Automation</Link></li> </ul> </div> <div> <h4 className="text-white font-semibold mb-4">Contact</h4> <div className="space-y-2 text-gray-400 text-sm"> <p><strong>Phone:</strong> +1 302 464 0950</p> <p><strong>Email:</strong> kleber@ziontechgroup && ziontechgroup.com</p> <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {stats && stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-4xl font-bold text-blue-600 mb-2"> {stat && stat.number} </div> <div className="text-gray-600">{stat && stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-lg text-gray-600 max-w-2xl mx-auto"> Comprehensive technology solutions designed to drive your business forward </p> </div> <div className="grid grid-cols-1 md: gri d-cols-3 gap-8"> {services && services.map((service,index) => ( <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shado w-md transition-shadow" > <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6"> <service && service.icon className="w-8 h-8 text-white" /> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service && service.title}</h3> <p className="text-gray-600 mb-6 text-center">{service && service.description}</p> {} <div className="mb-6 p-4 bg-gray-50 rounded-lg"> <div className="flex justify-between items-center mb-2"> <span className="text-sm font-medium text-gray-700">Starting Price:</span> <span className="text-lg font-bold text-blue-600">{service && service.pricing}</span> </div> <div className="flex justify-between items-center"> <span className="text-sm font-medium text-gray-700">Delivery Time:</span> <span className="text-sm text-gray-600">{service && service.delivery}</span> </div> </div> {} <div className="mb-6"> <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4> <ul className="space-y-2"> {service && service.benefits.map((benefit,benefitIndex) => ( <li key={benefitIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {benefit} </li> ))} </ul> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center"> {service && service.title} </h3> <p className="text-gray-600 mb-6 text-center"> {service && service.description} </p>;
import React,{ useState,useCallback,memo } from 'react'; import Link from 'next/link'; import Navigation from '../src/components/Navigation'; import Footer from '../src/components/Footer'; import Sidebar from '../src/components/Sidebar'; import SEOHead from '../src/components/seo/SEOHead'; import { ArrowRight,CheckCircle,Star,Users,Zap,Shield,Globe,TrendingUp,Award,Clock,Brain,Cloud,Database,Network,Target,Phone,Mail,Menu,Server,Smartphone,MapPin } from 'lucide-react'; const Home = memo(() => { const [sidebarOpen,setSidebarOpen] = useState(false); const handleSidebarToggle = useCallback(() => { setSidebarOpen(prev => !prev)},[]); const handleSidebarClose = useCallback(() => { setSidebarOpen(false)},[]); const structuredData = { "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of revolutionary AI services,IT solutions,and micro SaaS development","address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" },"contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup && ziontechgroup.com" },"sameAs": [ "https: ],"foundingDate": "2020","numberOfEmployees": "10-50","industry": "Technology Services","services": [ "AI Services","IT Solutions","Micro SaaS Development","Cloud Infrastructure","Cybersecurity","Digital Transformation" ] }; const stats = [ { number: '500+',label: 'Projects Completed' } { number: '50+',label: 'Happy Clients' } { number: '99 && 99.9%',label: 'Uptime Guarantee' } { number: '24/7',label: 'Support Available' } ]; const services = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions',icon: Brai n,href: '/ai-services' },{ title: 'IT Services',description: 'Comprehensive IT infrastructure and cloud solutions',icon: Serve r,href: '/it-services' },{ title: 'Micro SaaS',description: 'Custom software-as-a-service applications',icon: Smartphon e,href: '/micro-saas' },{ title: 'All Services',description: 'Complete technology solutions overview',icon: Glob e,href: '/comprehensive-services' } ]; const features = [ { icon: Za p,title: 'Fast Delivery',description: 'Quick turnaround times without compromising quality',},{ icon: Shiel d,title: 'Enterprise Security',description: 'Bank-level security and compliance standards',},{ icon: User s,title: 'Expert Team',description: 'Dedicated professionals with years of experience',},{ icon: Glob e,title: 'Global Reach',description: 'Serving clients worldwide with local expertise',},]; return ( <> <SEOHead title="Zion Tech Group - Leading Technology Solutions Provider" description="Transform your business with cutting-edge AI services,IT solutions,and micro SaaS development. Expert technology consulting and implementation." keywords="AI services,IT solutions,micro SaaS,technology consulting,digital transformation,cloud services,cybersecurity" structuredData={structuredData} /> <Navigation /> <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} /> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center"> <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Transform Your Business with <span className="text-blue-600"> Technology</span> </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. We help businesses innovate,scale,and succeed in the digital age. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: b g-blue-700 transition-colors" > Get Started </Link> <Link href="/services-enhanced" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors" > View Services </Link> <button onClick={handleSidebarToggle} className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: b g-gray-50 transition-colors flex items-center justify-center" aria-label="Open navigation menu" aria-expanded={sidebarOpen} > Explore Services </Link> </div> <div> <h4 className="text-white font-semibold mb-4">Services</h4> <ul className="space-y-2"> <li><Link href="/services/ai-machine-learning" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI & Machine Learning</Link></li> <li><Link href="/services/micro-saas" className="text-gray-400 hover: tex t-white transition-colors text-sm">Micro SaaS Solutions</Link></li> <li><Link href="/services/ai-content-creation" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI Content Creation</Link></li> <li><Link href="/services/email-automation" className="text-gray-400 hover: tex t-white transition-colors text-sm">Email Automation</Link></li> </ul> </div> <div> <h4 className="text-white font-semibold mb-4">Contact</h4> <div className="space-y-2 text-gray-400 text-sm"> <p><strong>Phone:</strong> +1 302 464 0950</p> <p><strong>Email:</strong> kleber@ziontechgroup && ziontechgroup.com</p> <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {stats && stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-4xl font-bold text-blue-600 mb-2"> {stat && stat.number} </div> <div className="text-gray-600">{stat && stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-lg text-gray-600 max-w-2xl mx-auto"> Comprehensive technology solutions designed to drive your business forward </p> </div> <div className="grid grid-cols-1 md: gri d-cols-3 gap-8"> {services && services.map((service,index) => ( <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shado w-md transition-shadow" > <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6"> <service && service.icon className="w-8 h-8 text-white" /> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service && service.title}</h3> <p className="text-gray-600 mb-6 text-center">{service && service.description}</p> {} <div className="mb-6 p-4 bg-gray-50 rounded-lg"> <div className="flex justify-between items-center mb-2"> <span className="text-sm font-medium text-gray-700">Starting Price:</span> <span className="text-lg font-bold text-blue-600">{service && service.pricing}</span> </div> <div className="flex justify-between items-center"> <span className="text-sm font-medium text-gray-700">Delivery Time:</span> <span className="text-sm text-gray-600">{service && service.delivery}</span> </div> </div> {} <div className="mb-6"> <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4> <ul className="space-y-2"> {service && service.benefits.map((benefit,benefitIndex) => ( <li key={benefitIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {benefit} </li> ))} </ul> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center"> {service && service.title} </h3> <p className="text-gray-600 mb-6 text-center"> {service && service.description} </p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages._archive_corrupted/index.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React,{ useState,useCallback,memo } from 'react'; import Link from 'next/link'; import Navigation from '../src/components/Navigation'; import Footer from '../src/components/Footer'; import Sidebar from '../src/components/Sidebar'; import SEOHead from '../src/components/seo/SEOHead'; import { ArrowRight,CheckCircle,Star,Users,Zap,Shield,Globe,TrendingUp,Award,Clock,Brain,Cloud,Database,Network,Target,Phone,Mail,Menu,Server,Smartphone,MapPin } from 'lucide-react'; const Home = memo(() => { const [sidebarOpen,setSidebarOpen] = useState(false); const handleSidebarToggle = useCallback(() => { setSidebarOpen(prev => !prev)},[]); const handleSidebarClose = useCallback(() => { setSidebarOpen(false)},[]); const structuredData = { "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of revolutionary AI services,IT solutions,and micro SaaS development","address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" },"contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup.com" },"sameAs": [ "https: ],"foundingDate": "2020","numberOfEmployees": "10-50","industry": "Technology Services","services": [ "AI Services","IT Solutions","Micro SaaS Development","Cloud Infrastructure","Cybersecurity","Digital Transformation" ] }; const stats = [ { number: '500+',label: 'Projects Completed' } { number: '50+',label: 'Happy Clients' } { number: '99.9%',label: 'Uptime Guarantee' } { number: '24/7',label: 'Support Available' } ]; const services = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions',icon: Brai n,href: '/ai-services' },{ title: 'IT Services',description: 'Comprehensive IT infrastructure and cloud solutions',icon: Serve r,href: '/it-services' },{ title: 'Micro SaaS',description: 'Custom software-as-a-service applications',icon: Smartphon e,href: '/micro-saas' },{ title: 'All Services',description: 'Complete technology solutions overview',icon: Glob e,href: '/comprehensive-services' } ]; const features = [ { icon: Za p,title: 'Fast Delivery',description: 'Quick turnaround times without compromising quality',},{ icon: Shiel d,title: 'Enterprise Security',description: 'Bank-level security and compliance standards',},{ icon: User s,title: 'Expert Team',description: 'Dedicated professionals with years of experience',},{ icon: Glob e,title: 'Global Reach',description: 'Serving clients worldwide with local expertise',},]; return ( <> <SEOHead title="Zion Tech Group - Leading Technology Solutions Provider" description="Transform your business with cutting-edge AI services,IT solutions,and micro SaaS development. Expert technology consulting and implementation." keywords="AI services,IT solutions,micro SaaS,technology consulting,digital transformation,cloud services,cybersecurity" structuredData={structuredData} /> <Navigation /> <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} /> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center"> <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Transform Your Business with <span className="text-blue-600"> Technology</span> </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. We help businesses innovate,scale,and succeed in the digital age. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: b g-blue-700 transition-colors" > Get Started </Link> <Link href="/services-enhanced" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors" > View Services </Link> <button onClick={handleSidebarToggle} className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: b g-gray-50 transition-colors flex items-center justify-center" aria-label="Open navigation menu" aria-expanded={sidebarOpen} > Explore Services </Link> </div> <div> <h4 className="text-white font-semibold mb-4">Services</h4> <ul className="space-y-2"> <li><Link href="/services/ai-machine-learning" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI & Machine Learning</Link></li> <li><Link href="/services/micro-saas" className="text-gray-400 hover: tex t-white transition-colors text-sm">Micro SaaS Solutions</Link></li> <li><Link href="/services/ai-content-creation" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI Content Creation</Link></li> <li><Link href="/services/email-automation" className="text-gray-400 hover: tex t-white transition-colors text-sm">Email Automation</Link></li> </ul> </div> <div> <h4 className="text-white font-semibold mb-4">Contact</h4> <div className="space-y-2 text-gray-400 text-sm"> <p><strong>Phone:</strong> +1 302 464 0950</p> <p><strong>Email:</strong> kleber@ziontechgroup.com</p> <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-4xl font-bold text-blue-600 mb-2"> {stat.number} </div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-lg text-gray-600 max-w-2xl mx-auto"> Comprehensive technology solutions designed to drive your business forward </p> </div> <div className="grid grid-cols-1 md: gri d-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shado w-md transition-shadow" > <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6"> <service.icon className="w-8 h-8 text-white" /> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3> <p className="text-gray-600 mb-6 text-center">{service.description}</p> {} <div className="mb-6 p-4 bg-gray-50 rounded-lg"> <div className="flex justify-between items-center mb-2"> <span className="text-sm font-medium text-gray-700">Starting Price:</span> <span className="text-lg font-bold text-blue-600">{service.pricing}</span> </div> <div className="flex justify-between items-center"> <span className="text-sm font-medium text-gray-700">Delivery Time:</span> <span className="text-sm text-gray-600">{service.delivery}</span> </div> </div> {} <div className="mb-6"> <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4> <ul className="space-y-2"> {service.benefits.map((benefit,benefitIndex) => ( <li key={benefitIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {benefit} </li> ))} </ul> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center"> {service.title} </h3> <p className="text-gray-600 mb-6 text-center"> {service.description} </p>
=======
<<<<<<< HEAD
=======
import React,{ useState,useCallback,memo } from 'react'; import Link from 'next/link'; import Navigation from '../src/components/Navigation'; import Footer from '../src/components/Footer'; import Sidebar from '../src/components/Sidebar'; import SEOHead from '../src/components/seo/SEOHead'; import { ArrowRight,CheckCircle,Star,Users,Zap,Shield,Globe,TrendingUp,Award,Clock,Brain,Cloud,Database,Network,Target,Phone,Mail,Menu,Server,Smartphone,MapPin } from 'lucide-react'; const Home = memo(() => { const [sidebarOpen,setSidebarOpen] = useState(false); const handleSidebarToggle = useCallback(() => { setSidebarOpen(prev => !prev)},[]); const handleSidebarClose = useCallback(() => { setSidebarOpen(false)},[]); const structuredData = { "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of revolutionary AI services,IT solutions,and micro SaaS development","address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" },"contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup.com" },"sameAs": [ "https: ],"foundingDate": "2020","numberOfEmployees": "10-50","industry": "Technology Services","services": [ "AI Services","IT Solutions","Micro SaaS Development","Cloud Infrastructure","Cybersecurity","Digital Transformation" ] }; const stats = [ { number: '500+',label: 'Projects Completed' } { number: '50+',label: 'Happy Clients' } { number: '99.9%',label: 'Uptime Guarantee' } { number: '24/7',label: 'Support Available' } ]; const services = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions',icon: Brai n,href: '/ai-services' },{ title: 'IT Services',description: 'Comprehensive IT infrastructure and cloud solutions',icon: Serve r,href: '/it-services' },{ title: 'Micro SaaS',description: 'Custom software-as-a-service applications',icon: Smartphon e,href: '/micro-saas' },{ title: 'All Services',description: 'Complete technology solutions overview',icon: Glob e,href: '/comprehensive-services' } ]; const features = [ { icon: Za p,title: 'Fast Delivery',description: 'Quick turnaround times without compromising quality',},{ icon: Shiel d,title: 'Enterprise Security',description: 'Bank-level security and compliance standards',},{ icon: User s,title: 'Expert Team',description: 'Dedicated professionals with years of experience',},{ icon: Glob e,title: 'Global Reach',description: 'Serving clients worldwide with local expertise',},]; return ( <> <SEOHead title="Zion Tech Group - Leading Technology Solutions Provider" description="Transform your business with cutting-edge AI services,IT solutions,and micro SaaS development. Expert technology consulting and implementation." keywords="AI services,IT solutions,micro SaaS,technology consulting,digital transformation,cloud services,cybersecurity" structuredData={structuredData} /> <Navigation /> <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} /> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center"> <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Transform Your Business with <span className="text-blue-600"> Technology</span> </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. We help businesses innovate,scale,and succeed in the digital age. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: b g-blue-700 transition-colors" > Get Started </Link> <Link href="/services-enhanced" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors" > View Services </Link> <button onClick={handleSidebarToggle} className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: b g-gray-50 transition-colors flex items-center justify-center" aria-label="Open navigation menu" aria-expanded={sidebarOpen} > Explore Services </Link> </div> <div> <h4 className="text-white font-semibold mb-4">Services</h4> <ul className="space-y-2"> <li><Link href="/services/ai-machine-learning" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI & Machine Learning</Link></li> <li><Link href="/services/micro-saas" className="text-gray-400 hover: tex t-white transition-colors text-sm">Micro SaaS Solutions</Link></li> <li><Link href="/services/ai-content-creation" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI Content Creation</Link></li> <li><Link href="/services/email-automation" className="text-gray-400 hover: tex t-white transition-colors text-sm">Email Automation</Link></li> </ul> </div> <div> <h4 className="text-white font-semibold mb-4">Contact</h4> <div className="space-y-2 text-gray-400 text-sm"> <p><strong>Phone:</strong> +1 302 464 0950</p> <p><strong>Email:</strong> kleber@ziontechgroup.com</p> <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-4xl font-bold text-blue-600 mb-2"> {stat.number} </div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-lg text-gray-600 max-w-2xl mx-auto"> Comprehensive technology solutions designed to drive your business forward </p> </div> <div className="grid grid-cols-1 md: gri d-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shado w-md transition-shadow" > <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6"> <service.icon className="w-8 h-8 text-white" /> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3> <p className="text-gray-600 mb-6 text-center">{service.description}</p> {} <div className="mb-6 p-4 bg-gray-50 rounded-lg"> <div className="flex justify-between items-center mb-2"> <span className="text-sm font-medium text-gray-700">Starting Price:</span> <span className="text-lg font-bold text-blue-600">{service.pricing}</span> </div> <div className="flex justify-between items-center"> <span className="text-sm font-medium text-gray-700">Delivery Time:</span> <span className="text-sm text-gray-600">{service.delivery}</span> </div> </div> {} <div className="mb-6"> <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4> <ul className="space-y-2"> {service.benefits.map((benefit,benefitIndex) => ( <li key={benefitIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {benefit} </li> ))} </ul> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center"> {service.title} </h3> <p className="text-gray-600 mb-6 text-center"> {service.description} </p>
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
import React,{ useState,useCallback,memo } from 'react'; import Link from 'next/link'; import Navigation from '../src/components/Navigation'; import Footer from '../src/components/Footer'; import Sidebar from '../src/components/Sidebar'; import SEOHead from '../src/components/seo/SEOHead'; import { ArrowRight,CheckCircle,Star,Users,Zap,Shield,Globe,TrendingUp,Award,Clock,Brain,Cloud,Database,Network,Target,Phone,Mail,Menu,Server,Smartphone,MapPin } from 'lucide-react'; const Home = memo(() => { const [sidebarOpen,setSidebarOpen] = useState(false); const handleSidebarToggle = useCallback(() => { setSidebarOpen(prev => !prev)},[]); const handleSidebarClose = useCallback(() => { setSidebarOpen(false)},[]); const structuredData = { "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of revolutionary AI services,IT solutions,and micro SaaS development","address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" },"contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup.com" },"sameAs": [ "https: ],"foundingDate": "2020","numberOfEmployees": "10-50","industry": "Technology Services","services": [ "AI Services","IT Solutions","Micro SaaS Development","Cloud Infrastructure","Cybersecurity","Digital Transformation" ] }; const stats = [ { number: '500+',label: 'Projects Completed' } { number: '50+',label: 'Happy Clients' } { number: '99.9%',label: 'Uptime Guarantee' } { number: '24/7',label: 'Support Available' } ]; const services = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions',icon: Brai n,href: '/ai-services' },{ title: 'IT Services',description: 'Comprehensive IT infrastructure and cloud solutions',icon: Serve r,href: '/it-services' },{ title: 'Micro SaaS',description: 'Custom software-as-a-service applications',icon: Smartphon e,href: '/micro-saas' },{ title: 'All Services',description: 'Complete technology solutions overview',icon: Glob e,href: '/comprehensive-services' } ]; const features = [ { icon: Za p,title: 'Fast Delivery',description: 'Quick turnaround times without compromising quality',},{ icon: Shiel d,title: 'Enterprise Security',description: 'Bank-level security and compliance standards',},{ icon: User s,title: 'Expert Team',description: 'Dedicated professionals with years of experience',},{ icon: Glob e,title: 'Global Reach',description: 'Serving clients worldwide with local expertise',},]; return ( <> <SEOHead title="Zion Tech Group - Leading Technology Solutions Provider" description="Transform your business with cutting-edge AI services,IT solutions,and micro SaaS development. Expert technology consulting and implementation." keywords="AI services,IT solutions,micro SaaS,technology consulting,digital transformation,cloud services,cybersecurity" structuredData={structuredData} /> <Navigation /> <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} /> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center"> <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Transform Your Business with <span className="text-blue-600"> Technology</span> </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. We help businesses innovate,scale,and succeed in the digital age. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: b g-blue-700 transition-colors" > Get Started </Link> <Link href="/services-enhanced" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors" > View Services </Link> <button onClick={handleSidebarToggle} className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: b g-gray-50 transition-colors flex items-center justify-center" aria-label="Open navigation menu" aria-expanded={sidebarOpen} > Explore Services </Link> </div> <div> <h4 className="text-white font-semibold mb-4">Services</h4> <ul className="space-y-2"> <li><Link href="/services/ai-machine-learning" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI & Machine Learning</Link></li> <li><Link href="/services/micro-saas" className="text-gray-400 hover: tex t-white transition-colors text-sm">Micro SaaS Solutions</Link></li> <li><Link href="/services/ai-content-creation" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI Content Creation</Link></li> <li><Link href="/services/email-automation" className="text-gray-400 hover: tex t-white transition-colors text-sm">Email Automation</Link></li> </ul> </div> <div> <h4 className="text-white font-semibold mb-4">Contact</h4> <div className="space-y-2 text-gray-400 text-sm"> <p><strong>Phone:</strong> +1 302 464 0950</p> <p><strong>Email:</strong> kleber@ziontechgroup.com</p> <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-4xl font-bold text-blue-600 mb-2"> {stat.number} </div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-lg text-gray-600 max-w-2xl mx-auto"> Comprehensive technology solutions designed to drive your business forward </p> </div> <div className="grid grid-cols-1 md: gri d-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shado w-md transition-shadow" > <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6"> <service.icon className="w-8 h-8 text-white" /> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3> <p className="text-gray-600 mb-6 text-center">{service.description}</p> {} <div className="mb-6 p-4 bg-gray-50 rounded-lg"> <div className="flex justify-between items-center mb-2"> <span className="text-sm font-medium text-gray-700">Starting Price:</span> <span className="text-lg font-bold text-blue-600">{service.pricing}</span> </div> <div className="flex justify-between items-center"> <span className="text-sm font-medium text-gray-700">Delivery Time:</span> <span className="text-sm text-gray-600">{service.delivery}</span> </div> </div> {} <div className="mb-6"> <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4> <ul className="space-y-2"> {service.benefits.map((benefit,benefitIndex) => ( <li key={benefitIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {benefit} </li> ))} </ul> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center"> {service.title} </h3> <p className="text-gray-600 mb-6 text-center"> {service.description} </p>
import React,{ useState,useCallback,memo } from 'react'; import Link from 'next/link'; import Navigation from '../src/components/Navigation'; import Footer from '../src/components/Footer'; import Sidebar from '../src/components/Sidebar'; import SEOHead from '../src/components/seo/SEOHead'; import { ArrowRight,CheckCircle,Star,Users,Zap,Shield,Globe,TrendingUp,Award,Clock,Brain,Cloud,Database,Network,Target,Phone,Mail,Menu,Server,Smartphone,MapPin } from 'lucide-react'; const Home = memo(() => { const [sidebarOpen,setSidebarOpen] = useState(false); const handleSidebarToggle = useCallback(() => { setSidebarOpen(prev => !prev)},[]); const handleSidebarClose = useCallback(() => { setSidebarOpen(false)},[]); const structuredData = { "@context": "https: "@type": "Organization","name": "Zion Tech Group","url": "https: "logo": "https: "description": "Leading provider of revolutionary AI services,IT solutions,and micro SaaS development","address": { "@type": "PostalAddress","streetAddress": "364 E Main St STE 1008","addressLocality": "Middletown","addressRegion": "DE","postalCode": "19709","addressCountry": "US" },"contactPoint": { "@type": "ContactPoint","telephone": "+1-302-464-0950","contactType": "customer service","email": "kleber@ziontechgroup.com" },"sameAs": [ "https: ],"foundingDate": "2020","numberOfEmployees": "10-50","industry": "Technology Services","services": [ "AI Services","IT Solutions","Micro SaaS Development","Cloud Infrastructure","Cybersecurity","Digital Transformation" ] }; const stats = [ { number: '500+',label: 'Projects Completed' } { number: '50+',label: 'Happy Clients' } { number: '99.9%',label: 'Uptime Guarantee' } { number: '24/7',label: 'Support Available' } ]; const services = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions',icon: Brai n,href: '/ai-services' },{ title: 'IT Services',description: 'Comprehensive IT infrastructure and cloud solutions',icon: Serve r,href: '/it-services' },{ title: 'Micro SaaS',description: 'Custom software-as-a-service applications',icon: Smartphon e,href: '/micro-saas' },{ title: 'All Services',description: 'Complete technology solutions overview',icon: Glob e,href: '/comprehensive-services' } ]; const features = [ { icon: Za p,title: 'Fast Delivery',description: 'Quick turnaround times without compromising quality',},{ icon: Shiel d,title: 'Enterprise Security',description: 'Bank-level security and compliance standards',},{ icon: User s,title: 'Expert Team',description: 'Dedicated professionals with years of experience',},{ icon: Glob e,title: 'Global Reach',description: 'Serving clients worldwide with local expertise',},]; return ( <> <SEOHead title="Zion Tech Group - Leading Technology Solutions Provider" description="Transform your business with cutting-edge AI services,IT solutions,and micro SaaS development. Expert technology consulting and implementation." keywords="AI services,IT solutions,micro SaaS,technology consulting,digital transformation,cloud services,cybersecurity" structuredData={structuredData} /> <Navigation /> <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} /> <main className="min-h-screen bg-white"> {} <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center"> <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6"> Transform Your Business with <span className="text-blue-600"> Technology</span> </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"> Leading provider of revolutionary AI services,IT solutions,and micro SaaS development. We help businesses innovate,scale,and succeed in the digital age. </p> <div className="flex flex-col sm: fle x-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover: b g-blue-700 transition-colors" > Get Started </Link> <Link href="/services-enhanced" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors" > View Services </Link> <button onClick={handleSidebarToggle} className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: b g-gray-50 transition-colors flex items-center justify-center" aria-label="Open navigation menu" aria-expanded={sidebarOpen} > Explore Services </Link> </div> <div> <h4 className="text-white font-semibold mb-4">Services</h4> <ul className="space-y-2"> <li><Link href="/services/ai-machine-learning" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI & Machine Learning</Link></li> <li><Link href="/services/micro-saas" className="text-gray-400 hover: tex t-white transition-colors text-sm">Micro SaaS Solutions</Link></li> <li><Link href="/services/ai-content-creation" className="text-gray-400 hover: tex t-white transition-colors text-sm">AI Content Creation</Link></li> <li><Link href="/services/email-automation" className="text-gray-400 hover: tex t-white transition-colors text-sm">Email Automation</Link></li> </ul> </div> <div> <h4 className="text-white font-semibold mb-4">Contact</h4> <div className="space-y-2 text-gray-400 text-sm"> <p><strong>Phone:</strong> +1 302 464 0950</p> <p><strong>Email:</strong> kleber@ziontechgroup.com</p> <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown,DE 19709</p> </div> </div> </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="grid grid-cols-2 md: gri d-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-4xl font-bold text-blue-600 mb-2"> {stat.number} </div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8"> <div className="text-center mb-16"> <h2 className="text-3xl font-bold text-gray-900 mb-4"> Our Services </h2> <p className="text-lg text-gray-600 max-w-2xl mx-auto"> Comprehensive technology solutions designed to drive your business forward </p> </div> <div className="grid grid-cols-1 md: gri d-cols-3 gap-8"> {services.map((service,index) => ( <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shado w-md transition-shadow" > <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6"> <service.icon className="w-8 h-8 text-white" /> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3> <p className="text-gray-600 mb-6 text-center">{service.description}</p> {} <div className="mb-6 p-4 bg-gray-50 rounded-lg"> <div className="flex justify-between items-center mb-2"> <span className="text-sm font-medium text-gray-700">Starting Price:</span> <span className="text-lg font-bold text-blue-600">{service.pricing}</span> </div> <div className="flex justify-between items-center"> <span className="text-sm font-medium text-gray-700">Delivery Time:</span> <span className="text-sm text-gray-600">{service.delivery}</span> </div> </div> {} <div className="mb-6"> <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4> <ul className="space-y-2"> {service.benefits.map((benefit,benefitIndex) => ( <li key={benefitIndex} className="flex items-center text-sm text-gray-600"> <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {benefit} </li> ))} </ul> </div>  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center"> {service.title} </h3> <p className="text-gray-600 mb-6 text-center"> {service.description} </p>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
