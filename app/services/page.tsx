import React from 'react';

import EnhancedSEO from '../components/EnhancedSEO';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon;'}
} from '@heroicons/react/24/outline';


const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Advanced Features",
      description: "Cutting-edge technology for maximum efficiency",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "24/7 support from our team of specialists",
    }
  ]
  return (
    <>
      <EnhancedSEO title="Page - Zion Tech Group"
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs."
        keywords="page, business solutions, technology services, professional services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7 xl mx-auto text-center">
            <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
              Page
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </>
            </>
            <p >
              Professional page services designed to help your business succeed and grow.
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
              <Link to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Demo
              </>
            </>
          </>
)
          {serviceCategories.map((category, categoryIndex) => {;
const Icon = category.icon
            return (
"
              <div key={categoryIndex} className="mb-20">
        <div></>
                  <div></>
                    <Icon className={`w-8 h-8 ${category.color}`} />
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
                Why Choose Our Page Services?
              </>
              <p >
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </>
            </>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div >
                    {feature.icon}
                  </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</>
                  <p>{feature.description}</>
                </>
              </>
            )})}
        </>
      </>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4 xl mx-auto text-center">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6">
              Ready to Get Started?
            </>
            <p >
              Let's discuss how our page services can help your business succeed.
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
              <Link to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Services
              </>
            </>
          </>
        </>
      </>
    </>
  )};

const page = React.lazy(() => import('./page'));
export default page;
ursor/fix-errors-and-merge-to-main-94 a7
