import React from 'react;

import { Helmet } from 'react-helmet-async;

import { ArrowLeft, TrendingUp, CheckCircle } from lucide-react;

const CaseStudiesPage: React.FC = () => {;
<<<<<<< HEAD
const caseStudies = []
    {}
      i,
    d: 1,
      title: 'E-commerce Platform Transformation',
      company: 'TechRetail Inc.',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and high customer acquisition costs',
      solution: 'AI-powered personalization and dynamic pricing optimization',
      results: {}
=======

const caseStudies = [;;;

    {
      i,
    d: 1,
      title: 'E-commerce Platform Transformation,
      company: 'TechRetail Inc.,
      industry: 'E-commerce,
      challenge: 'Low conversion rates and high customer acquisition costs,
      solution: 'AI-powered personalization and dynamic pricing optimization,
      results: {
>>>>>>> origin/main
        ro,
    i: '340%,
        conversion: '+85%,
        costReduction: '-65%,
        revenue: +$2.3M
      },
      image: '🛒,
      description: Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.
    },
    {}
      id: 2,
<<<<<<< HEAD
      title: 'Financial Services Automation',
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      challenge: 'Manual processes causing delays and errors in loan processing',
      solution: 'AI-powered document processing and risk assessment automation',
      results: {}
=======
      title: 'Financial Services Automation,
      company: 'FinTech Solutions,
      industry: 'Financial Services,
      challenge: 'Manual processes causing delays and errors in loan processing,
      solution: 'AI-powered document processing and risk assessment automation,
      results: {
>>>>>>> origin/main
        ro,
    i: '280%,
        processingTime: '-80%,
        accuracy: '+95%,
        costSavings: $1.8M
      },
      image: '🏦,
      description: Automated complex financial processes using advanced AI algorithms for document processing and risk assessment.
    },
    {}
      id: 3,
<<<<<<< HEAD
      title: 'Healthcare Data Analytics',
      company: 'MedTech Innovations',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and inefficient treatment planning',
      solution: 'AI-powered data integration and predictive analytics for treatment optimization',
      results: {}
=======
      title: 'Healthcare Data Analytics,
      company: 'MedTech Innovations,
      industry: 'Healthcare,
      challenge: 'Fragmented patient data and inefficient treatment planning,
      solution: 'AI-powered data integration and predictive analytics for treatment optimization,
      results: {
>>>>>>> origin/main
        ro,
    i: '420%,
        patientOutcomes: '+70%,
        efficiency: '+90%,
        costSavings: $3.2M
      },
      image: '🏥,
      description: Revolutionized healthcare data management with AI-driven analytics and predictive treatment models.
    },
    {}
      id: 4,
<<<<<<< HEAD
      title: 'Manufacturing Optimization',
      company: 'AutoParts Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'AI-powered predictive maintenance and quality control automation',
      results: {}
=======
      title: 'Manufacturing Optimization,
      company: 'AutoParts Manufacturing,
      industry: 'Manufacturing,
      challenge: 'Production inefficiencies and quality control issues,
      solution: 'AI-powered predictive maintenance and quality control automation,
      results: {
>>>>>>> origin/main
        ro,
    i: '310%,
        efficiency: '+75%,
        defects: '-90%,
        downtime: -85%
      },
      image: '🏭,
      description: Optimized manufacturing processes using AI for predictive maintenance and automated quality control.
    }

  ];
<<<<<<< HEAD
  return (
    <React.Fragment></React>
      <Helmet></Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content=""Explore our successful AI implementation case studies. See how we've helped companies achieve 300%+ ROI with our AI solutions." /></meta>"
      </Helmet>
  return (<div></div>
        <title>Case Studies - Zion Tech Group<
        <meta name="description" content=""Explore our successful AI implementation case studies. See how we've helped companies achieve 300%+ ROI with our AI solutions."></meta>"
      <
      <div className=""min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>"
        {/* Header *
        <header className=""bg-white shadow-sm border-b"></header>"
          <div className=""max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-4"></div>"
          <div className=""max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
            <div className=""text-center"></div>"
              <h1 className=""text-4xl md:text-6xl font-bold mb-6"></h1>"
                Success Stories;
              <
              <p className=""text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"></p>"
                Real results from real companies using our AI solutions;
              <
              <p className=""text-lg mb-8 text-gray-300 max-w-4xl mx-auto"></p>"
                Discover how leading companies across industries have transformed their operations;
=======

  return (

    <React.Fragment>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI implementation case studies. See how we've helped companies achieve 300%+ ROI with our AI solutions. />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>        {/* Header *
        <header className="bg-white shadow-sm border-b>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-4>
            
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
            <div className="text-center>
              <h1 className="text-4xl md:text-6xl font-bold mb-6>
                Success Stories
              <
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto>
                Real results from real companies using our AI solutions
              <
              <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto>
                Discover how leading companies across industries have transformed their operations 
>>>>>>> origin/main
                and achieved remarkable ROI with our cutting-edge AI technology.
              <
            <
          <
        <
        {/* Case Studies Grid *
<<<<<<< HEAD
        <section className=""py-16"></section>"
          <div className=""max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>"
            <div className=""grid grid-cols-1 l,"></div>"
    g:grid-cols-2 gap-8">)
              {caseStudies.map((study) => (<div key={study.id} className=""bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"></div>"
                  <div className=""p-8"></div>"
                    <div className=""flex items-center mb-4"></div>"
                      <div className=""text-4xl mr-4">{study.image}<"
                      <div></div>
                        <h3 className=""text-2xl font-bold text-gray-900 mb-1">{study.title}<"
                        <p className=""text-blue-600 font-semibold">{study.company}<"
                        <p className=""text-gray-500 text-sm">{study.industry}<"
                      <
                    <
                    <p className=""text-gray-600 mb-6">{study.description}<"
                    <div className=""mb-6"></div>"
                      <h4 className=""font-semibold text-gray-900 mb-2">Challenge:<"
                      <p className=""text-gray-600 text-sm">{study.challenge}<"
                    <
                    <div className=""mb-6"></div>"
                      <h4 className=""font-semibold text-gray-900 mb-2">Solution:<"
                      <p className=""text-gray-600 text-sm">{study.solution}<"
                    <
                    <div className=""mb-6"></div>"
                      <h4 className=""font-semibold text-gray-900 mb-4">Results:<"
                      <div className=""grid grid-cols-2 gap-4"></div>"
                        <div className=""text-center p-3 bg-green-50 rounded-lg"></div>"
                          <div className=""text-2xl font-bold text-green-600">{study.results.roi}<"
                          <div className=""text-sm text-gray-600">ROI<"
                        <
                        <div className=""text-center p-3 bg-blue-50 rounded-lg"></div>"
                          <div className=""text-2xl font-bold text-blue-600">)"
=======
        <section className="py-16>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>
            <div className=grid grid-cols-1 l,
    g:grid-cols-2 gap-8>)
              {caseStudies.map((study) => (<div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200>
                  <div className="p-8>
                    <div className="flex items-center mb-4>
                      <div className="text-4xl mr-4>{study.image}<
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1>{study.title}<
                        <p className="text-blue-600 font-semibold>{study.company}<
                        <p className="text-gray-500 text-sm>{study.industry}<
                      <
                    <
                    <p className="text-gray-600 mb-6>{study.description}<
                    <div className="mb-6>
                      <h4 className="font-semibold text-gray-900 mb-2>Challenge:<
                      <p className="text-gray-600 text-sm>{study.challenge}<
                    <
                    <div className="mb-6>
                      <h4 className="font-semibold text-gray-900 mb-2>Solution:<
                      <p className="text-gray-600 text-sm>{study.solution}<
                    <
                    <div className="mb-6>
                      <h4 className="font-semibold text-gray-900 mb-4>Results:<
                      <div className="grid grid-cols-2 gap-4>
                        <div className="text-center p-3 bg-green-50 rounded-lg>
                          <div className="text-2xl font-bold text-green-600>{study.results.roi}<
                          <div className="text-sm text-gray-600>ROI<
                        <
                        <div className="text-center p-3 bg-blue-50 rounded-lg>
                          <div className="text-2xl font-bold text-blue-600>)
>>>>>>> origin/main
                            {Object.values(study.results)[1]}

                          <
<<<<<<< HEAD
                          <div className=""text-sm text-gray-600"></div>"
                            {Object.keys(study.results)[1].replace(/([A-Z])/g, ' $1').replace(/^.
=======
                          <div className="text-sm text-gray-600>
                            {Object.keys(study.results)[1].replace(/([A-Z])/g, ' $1).replace(/^.
>>>>>>> origin/main
                          <
                        <
                      <
                    <
<<<<<<< HEAD
                    <div className=""flex items-center justify-between"></div>"
                        Learn More;
                      <
                      <div className=""flex items-center text-green-600"></div>"
                        <CheckCircle className=""w-4 h-4 mr-1"></CheckCircle>"
                        <span className=""text-sm font-semibold">Verified Results<"
=======
                    <div className="flex items-center justify-between>
                      
                        Learn More
                      <
                      <div className="flex items-center text-green-600>
                        <CheckCircle className="w-4 h-4 mr-1 
                        <span className="text-sm font-semibold>Verified Results<
>>>>>>> origin/main
                      <
                    <
                  <
                <)
              ))}

            <
          <
        <
        {/* Stats Section *
<<<<<<< HEAD
        <section className=""py-16 bg-white"></section>"
          <div className=""max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>"
            <div className=""text-center mb-12"></div>"
              <h2 className=""text-3xl m,"></h2>"
    d:text-4xl font-bold text-gray-900 mb-4">
                Proven Track Record;
              <
              <p className=""text-xl text-gray-600"></p>"
                Our AI solutions deliver consistent, measurable results;
              <
            <
            <div className=""grid grid-cols-1 md: grid-cols-4 gap-8"></div>"
              <div className=""text-center"></div>"
                <div className=""text-4xl font-bold text-blue-600 mb-2">300%+<"
                <div className=""text-gray-600">Average ROI<"
              <
              <div className=""text-center"></div>"
                <div className=""text-4xl font-bold text-green-600 mb-2">150+<"
                <div className=""text-gray-600">Projects Completed<"
              <
              <div className=""text-center"></div>"
                <div className=""text-4xl font-bold text-purple-600 mb-2">95%<"
                <div className=""text-gray-600">Client Satisfaction<"
              <
              <div className=""text-center"></div>"
                <div className=""text-4xl font-bold text-orange-600 mb-2">$50M+<"
                <div className=""text-gray-600">Cost Savings Generated<"
=======
        <section className="py-16 bg-white>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8>
            <div className="text-center mb-12>
              <h2 className=text-3xl m,
    d:text-4xl font-bold text-gray-900 mb-4>
                Proven Track Record
              <
              <p className="text-xl text-gray-600>
                Our AI solutions deliver consistent, measurable results
              <
            <
            <div className="grid grid-cols-1 md: grid-cols-4 gap-8>
              <div className="text-center>
                <div className="text-4xl font-bold text-blue-600 mb-2>300%+<
                <div className="text-gray-600>Average ROI<
              <
              <div className="text-center>
                <div className="text-4xl font-bold text-green-600 mb-2>150+<
                <div className="text-gray-600>Projects Completed<
              <
              <div className="text-center>
                <div className="text-4xl font-bold text-purple-600 mb-2>95%<
                <div className="text-gray-600>Client Satisfaction<
              <
              <div className="text-center>
                <div className="text-4xl font-bold text-orange-600 mb-2>$50M+<
                <div className="text-gray-600>Cost Savings Generated<
>>>>>>> origin/main
              <
            <
          <
        <
        {/* CTA Section *
<<<<<<< HEAD
        <section className=""py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"></section>"
          <div className=""max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>"
            <h2 className=""text-3xl md:text-4xl font-bold mb-4"></h2>"
              Ready to Create Your Success Story?
            <
            <p className=""text-xl mb-8 text-blue-100"></p>"
              Join the companies that have transformed their business with our AI solutions;
            <
            <div className=""flex flex-col s,"></div>"
    m:flex-row gap-4 justify-center">
                Start Your Project;
                View Our Services;
=======
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center>
            <h2 className="text-3xl md:text-4xl font-bold mb-4>
              Ready to Create Your Success Story?
            <
            <p className="text-xl mb-8 text-blue-100>
              Join the companies that have transformed their business with our AI solutions
            <
            <div className=flex flex-col s,
    m:flex-row gap-4 justify-center>
              
                Start Your Project
                
                View Our Services
>>>>>>> origin/main
              </Link>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )};
<<<<<<< HEAD
              <
            <
          <
        <
      <
    <
  );
};
export default CaseStudiesPage;
=======

export default CaseStudiesPage;
>>>>>>> origin/main
