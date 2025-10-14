import React from 'react';
import React from 'react';
import React from 'react';
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
import { ArrowRightIcon,
  CheckIcon,
  ChartBarIcon,
  TrendingUpIcon,
  ClockIcon,
  CurrencyDollarIcon
 } from "@heroicons/react/24/outline";

ursor/fix-errors-and-merge-to-main-94 a7
const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform AI Optimization",
      client: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Low conversion rates and high cart abandonment",
      solution: "Implemented AI-powered recommendation engine and personalized shopping experience",
      results: [
        { metric: "Conversion Rate", value: "+45%", icon: TrendingUpIcon },
        { metric: "Cart Abandonment", value: "-30%", icon: TrendingUpIcon },
        { metric: "Revenue Growth", value: "+60%", icon: CurrencyDollarIcon }
      ],
      duration: "6 months",
      image: "/case-studies/ecommerce-ai.jpg",
    },
    {
      title: "Cybersecurity Infrastructure Overhaul",
      client: "FinanceCorp",
      industry: "Financial Services",
      challenge: "Outdated security systems vulnerable to modern threats",
      solution: "Deployed comprehensive cybersecurity suite with real-time threat detection",
      results: [
        { metric: "Security Incidents", value: "-95%", icon: CheckIcon },
        { metric: "Response Time", value: "-80%", icon: ClockIcon },
        { metric: "Compliance Score", value: "100%", icon: ChartBarIcon }
      ],
      duration: "4 months",
      image: "/case-studies/cybersecurity.jpg",
    },
    {
      title: "Cloud Migration & Optimization",
      client: "ManufacturingPro",
      industry: "Manufacturing",
      challenge: "On-premise infrastructure limiting scalability and performance",
      solution: "Migrated to cloud infrastructure with auto-scaling and performance optimization",
      results: [
        { metric: "Performance", value: "+200%", icon: TrendingUpIcon },
        { metric: "Cost Savings", value: "-40%", icon: CurrencyDollarIcon },
        { metric: "Uptime", value: "99.9%", icon: CheckIcon }
      ],
      duration: "8 months",
      image: "/case-studies/cloud-migration.jpg",
    },
    {
      title: "AI-Powered Customer Service",
      client: "ServiceMax",
      industry: "Customer Service",
      challenge: "High support costs and slow response times",
      solution: "Implemented AI chatbot and automated ticket routing system",
      results: [
        { metric: "Response Time", value: "-70%", icon: ClockIcon },
        { metric: "Customer Satisfaction", value: "+85%", icon: TrendingUpIcon },
        { metric: "Support Costs", value: "-50%", icon: CurrencyDollarIcon }
      ],
      duration: "3 months",
      image: "/case-studies/ai-customer-service.jpg",
    }
  ];

  return (
    <>
      <Helmet >
        <title>Case Studies - Zion Tech Group</>
        <meta name="description" content="Explore our successful case studies and see how we've helped businesses transform with AI, cybersecurity, cloud infrastructure, and IT solutions." />
        <meta name="keywords" content="case studies, success stories, AI solutions, cybersecurity, cloud infrastructure, IT solutions, business transformation" />
      </>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div></>
        </>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4 xl mx-auto">
            <h1 >
              Success Stories
            </>
            <p >
              Real Results for Real Businesses
            </>
            <p >
              Discover how we've helped businesses across various industries transform their operations 
              and achieve remarkable growth with our technology solutions.
            </>
          </>
        </>
      </>
      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
              Our Case Studies
            </>
            <p >
              See how our solutions have transformed businesses across different industries
            </>
          </>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-slate-800 rounded-xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                        {study.industry}
                      </>
                      <span className="text-gray-400 text-sm">{study.duration}</>
                    </>
                    <h3 className="text-3 xl font-bold text-white mb-4">{study.title}</>
                    <p>{study.client}</>
                    <div className="space-y-6">
                      <div >
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</>
                        <p>{study.challenge}</>
                      </>
                      <div >
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</>
                        <p>{study.solution}</>
                      </>
                      <div >
                        <h4 className="text-lg font-semibold text-white mb-4">Results</>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                                <result .icon className="w-6 h-6 text-white" />
                              </>
                              <div>{result.value}</>
                              <div>{result.metric}</>
                            </>
                          ))}
                        </>
                      </>
                    </>
                  </>
                </>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-slate-800 rounded-xl p-8 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ChartBarIcon className="w-16 h-16 text-white" />
                      </>
                      <h4 className="text-xl font-semibold text-white mb-2">Project Overview</>
                      <p >
                        This case study demonstrates our expertise in delivering measurable results 
                        that drive business growth and operational efficiency.
                      </>
                    </>
                  </>
                </>
              </>
            ))}
          </>
        </>
      </>
ursor/fix-errors-and-merge-to-main-94 a7

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4 xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </>
          <p >
            Let's discuss how we can help transform your business with our proven solutions
          </>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </>
            <Link to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </>
          </>
        </>
      </>
    </>
  );
};

export default CaseStudiesPage;
