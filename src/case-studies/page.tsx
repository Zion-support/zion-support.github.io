import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { ArrowLeft TrendingUp CheckCircle } from "lucide-react";
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
      id: 1,
      title: 'E-commerce Platform Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'AI-powered personalization and dynamic pricing optimization',
      results: {
        roi: '340%',
        conversion: '+85%',
        costReduction: '-65%',
        revenue: '+$2.3M'
      image: '🛒',
      description: 'Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.'
      id: 2,
      title: 'Financial Services Automation',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'AI-powered document processing and risk assessment automation',
      results: {
        roi: '280%',
        processingTime: '-80%',
        accuracy: '+95%',
        costSavings: '$1.8M'
      image: '🏦',
      description: 'Automated complex financial processes using advanced AI algorithms for document processing and risk assessment.'
      id: 3,
      title: 'Healthcare Data Analytics',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'AI-powered data integration and predictive analytics for treatment optimization',
      results: {
        roi: '420%',
        patientOutcomes: '+70%',
        efficiency: '+90%',
        costSavings: '$3.2M'
      image: '🏥',
      description: 'Revolutionized healthcare data management with AI-driven analytics and predictive treatment models.'
      id: 4,
      title: 'Manufacturing Optimization',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'AI-powered predictive maintenance and quality control automation',
      results: {
        roi: '310%',
        efficiency: '+75%',
        defects: '-90%',
        downtime: '-85%'
      image: '🏭',
      description: 'Optimized manufacturing processes using AI for predictive maintenance and automated quality control.'
  ];
  return (
    <React.Fragment></React.Fragment>
      <Helmet/>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI implementation case studies. See how we've helped companies achieve 300%+ ROI with our AI solutions." />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <header className="bg-white shadow-sm border-b"/>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"></div>
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home;
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6"/>
                Success Stories;</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"></p>
                Real results from real companies using our AI solutions;
              <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto"></p>
                Discover how leading companies across industries have transformed their operations;
                and achieved remarkable ROI with our cutting-edge AI technology.
        <section className="py-16"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
                <div, key={stud, y.i, d} classNam, e="b, g-white, rounded-lg, shadow-lg, overflow-hidden, hover:shado, w-xl, transition-shadow, duration-20, 0"></di, v>
                  <div className="p-8"></div>
                    <div className="flex items-center mb-4"></div>
                      <div, className="tex, t-4xl, mr-4">{stud, y.imag, e}</di, v>
                      <div></div>
                        <h3, className="tex, t-2xl, font-bold, text-gra, y-900, mb-1">{stud, y.titl, e}</h, 3>
                        <p, className="tex, t-blu, e-600, font-semibol, d">{stud, y.compan, y}</p>
                        <p, className="tex, t-gra, y-500, text-s, m">{stud, y.industr, y}</p>
                    <p, className="tex, t-gra, y-600, mb-6">{stud, y.descriptio, n}</p>
                    <div className="mb-6"></div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p, className="tex, t-gra, y-600, text-s, m">{stud, y.challeng, e}</p>
                    <div className="mb-6"></div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p, className="tex, t-gra, y-600, text-s, m">{stud, y.solutio, n}</p>
                    <div className="mb-6"></div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                      <div className="grid grid-cols-2 gap-4"></div>
                        <div className="text-center p-3 bg-green-50 rounded-lg"></div>
                          <div, className="tex, t-2xl, font-bold, text-gree, n-60, 0">{stud, y.result, s.ro, i}</di, v>
                          <div className="text-sm text-gray-600">ROI</div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg"></div>
                          <div className="text-2xl font-bold text-blue-600"></div>
                          <div className="text-sm text-gray-600"></div>
                    <div className="flex items-center justify-between"></div>
                      <Link;
                        to="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                        Learn More;</Link>
                      <div className="flex items-center text-green-600"></div>
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">Verified Results</span>
              ))}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Proven Track Record;
              <p className="text-xl text-gray-600"></p>
                Our AI solutions deliver consistent, measurable results;
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="text-4xl font-bold text-blue-600 mb-2">300%+</div>
                <div className="text-gray-600">Average ROI</div>
              <div className="text-center"></div>
                <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              <div className="text-center"></div>
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              <div className="text-center"></div>
                <div className="text-4xl font-bold text-orange-600 mb-2">$50M+</div>
                <div className="text-gray-600">Cost Savings Generated</div>
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4"></h2>
              Ready to Create Your Success Story?
            <p className="text-xl mb-8 text-blue-100"></p>
              Join the companies that have transformed their business with our AI solutions;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
                Start Your Project</Link>
                <TrendingUp className="w-4 h-4 ml-2" />
              <Link;
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                View Our Services;
  );</Link>
export default CaseStudiesPage;</Link>