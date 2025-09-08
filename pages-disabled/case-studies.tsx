import _React from 'react'; import Head from 'next/head'; export default function CaseStudiesPage() {; const caseStudies = [; {; "title": 'Global E-commerce Platform Automation',; "company": 'TechRetail Inc.',; "industry": 'E-commerce',; "challenge": 'Managing 10,000+ daily orders across multiple regions with manual processes',; "solution": 'Implemented autonomous order processing,inventory management,and customer service automation',; "results": [; '99.9% order accuracy',; '60% reduction in processing time',; '40% cost savings',; '24/7 automated operations'; ],; "technologies": ['AI Order Processing','Inventory Automation','Customer Service Bots','Real-time Analytics'];},; {; "title": 'Financial Services Compliance Automation',; "company": 'SecureBank Ltd.',; "industry": 'Financial Services',; "challenge": 'Complex regulatory compliance requiring constant monitoring and reporting',; "solution": 'Built autonomous compliance monitoring system with real-time risk assessment and automated reporting',; "results": [; '100% compliance rate maintained',; '90% faster regulatory reporting',; 'Real-time risk detection',; 'Automated audit trails'; ],; "technologies": ['Compliance Monitoring','Risk Assessment AI','Automated Reporting','Audit Automation'];},; {; "title": 'Healthcare Data Processing Automation',; "company": 'MediTech Solutions',; "industry": 'Healthcare',; "challenge": 'Processing millions of patient records while maintaining HIPAA compliance',; "solution": 'Developed secure,autonomous data processing pipeline with privacy-preserving AI',; "results": [; '10x faster data processing',; 'Zero HIPAA violations',; '99.99% data accuracy',; 'Automated quality checks'; ],; "technologies": ['HIPAA-Compliant AI','Data Pipeline Automation','Privacy-Preserving ML','Quality Assurance'];},; {; "title": 'Manufacturing Quality Control',; "company": 'Precision Manufacturing Co.',; "industry": 'Manufacturing',; "challenge": 'Manual quality inspection causing delays and inconsistent results',; "solution": 'Implemented computer vision and AI-powered quality control automation',; "results": [; '95% defect detection rate',; '80% faster inspection process',; 'Zero production delays',; 'Continuous quality improvement'; ],; "technologies": ['Computer Vision AI','Quality Control Automation','Predictive Maintenance','Real-time Monitoring'];} ]; const industries = ['All','E-commerce','Financial Services','Healthcare','Manufacturing','Technology','Education']; return (; <> <Head> <title>Case Studies | Zion Tech Group - Success Stories & Automation Results></div> <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's autonomous automation solutions have transformed businesses across industries." /> <meta property=""og": title" content="Case Studies - Zion Tech Group" /> <meta property="og:description" content="Success stories and automation results from real businesses." /> <meta name="twitter:card" content="summary_large_image" /> ></div> <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white"> <main className="container mx-auto px-6 py-12"> <nav className="mb-8"> <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors"> ← Back to Home; ></div> ></div> <header className="text-center mb-16"> <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"> Success Stories; ></div> <p className="text-xl text-white/80 max-w-3xl mx-auto"> Discover how Zion Tech Group's autonomous automation solutions have transformed ; businesses across industries,delivering measurable results and competitive advantages.; ></div> ></div> {} <section className="mb-12"> <div className="flex flex-wrap gap-3 justify-center"> {industries.map(industry => (; <button; key={industry} className="px-4 py-2 rounded-lg border border-white/20 text-white/80 "hover": border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"> {industry} ></div> ))} ></div> ></div> {} <section className="mb-20"> <div className="grid grid-cols-1 "lg": grid-cols-2 gap-8"> {caseStudies.map((study,index) => (; <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 "hover": border-cyan-400/30 transition-all duration-300"> <div className="flex items-center gap-3 mb-4"> <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30"> {study.industry} ></div> <span className="text-white/60 text-sm">{study.company}></div> ></div> <h3 className="text-2xl font-bold mb-4 text-white">{study.title}></div> <div className="mb-6"> <h4 className="font-semibold text-fuchsia-400 mb-2">The Challenge></div> <p className="text-white/80 text-sm">{study.challenge}></div> ></div> <div className="mb-6"> <h4 className="font-semibold text-green-400 mb-2">Our Solution></div> <p className="text-white/80 text-sm">{study.solution}></div> ></div> <div className="mb-6"> <h4 className="font-semibold text-blue-400 mb-2">Results></div> <ul className="space-y-1"> {study.results.map((result,resultIndex) => (; <li key={resultIndex} className="text-white/80 text-sm">• {result}></div> ))} ></div> ></div> <div> <h4 className="font-semibold text-purple-400 mb-2">Technologies Used></div> <div className="flex flex-wrap gap-2"> {study.technologies.map((tech,techIndex) => (; <span key={techIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20"> {tech} ></div> ))} ></div> ></div> ></div> ))} ></div> ></div> {} <section className="mb-20"> <h2 className="text-3xl font-bold mb-12 text-center text-white">Collective Impact></div> <div className="grid grid-cols-1 "md": grid-cols-4 gap-8"> <div className="text-center"> <div className="text-4xl font-bold text-cyan-400 mb-2">500+></div> <div className="text-white/70 text-sm">Automation Projects></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-fuchsia-400 mb-2">$50M+></div> <div className="text-white/70 text-sm">Cost Savings Generated></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-green-400 mb-2">99.9%></div> <div className="text-white/70 text-sm">Average Success Rate></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-blue-400 mb-2">24/7></div> <div className="text-white/70 text-sm">Automated Operations></div> ></div> ></div> ></div> {} <section className="text-center"> <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20"> <h2 className="text-3xl font-bold mb-6 text-white">Ready to Write Your Success Story?></div> <p className="text-white/80 mb-8 max-w-2xl mx-auto"> Join the hundreds of companies that have transformed their operations with ; Zion Tech Group's autonomous automation solutions.; ></div> <div className="flex flex-col "sm": flex-row gap-4 justify-center"> <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"> Start Your Project; ></div> <a href="/services" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"> Explore Services; ></div> ></div> ></div> ></div> ></div> ></div> ></div> );}import _React from 'react'; import Head from 'next/head'; export default function CaseStudiesPage() {; const caseStudies = [; {; "title": 'Global E-commerce Platform Automation',; "company": 'TechRetail Inc.',; "industry": 'E-commerce',; "challenge": 'Managing 10,000+ daily orders across multiple regions with manual processes',; "solution": 'Implemented autonomous order processing,inventory management,and customer service automation',; "results": [; '99.9% order accuracy',; '60% reduction in processing time',; '40% cost savings',; '24/7 automated operations'; ],; "technologies": ['AI Order Processing','Inventory Automation','Customer Service Bots','Real-time Analytics'];},; {; "title": 'Financial Services Compliance Automation',; "company": 'SecureBank Ltd.',; "industry": 'Financial Services',; "challenge": 'Complex regulatory compliance requiring constant monitoring and reporting',; "solution": 'Built autonomous compliance monitoring system with real-time risk assessment and automated reporting',; "results": [; '100% compliance rate maintained',; '90% faster regulatory reporting',; 'Real-time risk detection',; 'Automated audit trails'; ],; "technologies": ['Compliance Monitoring','Risk Assessment AI','Automated Reporting','Audit Automation'];},; {; "title": 'Healthcare Data Processing Automation',; "company": 'MediTech Solutions',; "industry": 'Healthcare',; "challenge": 'Processing millions of patient records while maintaining HIPAA compliance',; "solution": 'Developed secure,autonomous data processing pipeline with privacy-preserving AI',; "results": [; '10x faster data processing',; 'Zero HIPAA violations',; '99.99% data accuracy',; 'Automated quality checks'; ],; "technologies": ['HIPAA-Compliant AI','Data Pipeline Automation','Privacy-Preserving ML','Quality Assurance'];},; {; "title": 'Manufacturing Quality Control',; "company": 'Precision Manufacturing Co.',; "industry": 'Manufacturing',; "challenge": 'Manual quality inspection causing delays and inconsistent results',; "solution": 'Implemented computer vision and AI-powered quality control automation',; "results": [; '95% defect detection rate',; '80% faster inspection process',; 'Zero production delays',; 'Continuous quality improvement'; ],; "technologies": ['Computer Vision AI','Quality Control Automation','Predictive Maintenance','Real-time Monitoring'];} ]; const industries = ['All','E-commerce','Financial Services','Healthcare','Manufacturing','Technology','Education']; return (; <> <Head> <title>Case Studies | Zion Tech Group - Success Stories & Automation Results></div> <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's autonomous automation solutions have transformed businesses across industries." /> <meta property=""og": title" content="Case Studies - Zion Tech Group" /> <meta property="og:description" content="Success stories and automation results from real businesses." /> <meta name="twitter:card" content="summary_large_image" /> ></div> <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white"> <main className="container mx-auto px-6 py-12"> <nav className="mb-8"> <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors"> ← Back to Home; ></div> ></div> <header className="text-center mb-16"> <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"> Success Stories; ></div> <p className="text-xl text-white/80 max-w-3xl mx-auto"> Discover how Zion Tech Group's autonomous automation solutions have transformed ; businesses across industries,delivering measurable results and competitive advantages.; ></div> ></div> {} <section className="mb-12"> <div className="flex flex-wrap gap-3 justify-center"> {industries.map(industry => (; <button; key={industry} className="px-4 py-2 rounded-lg border border-white/20 text-white/80 "hover": border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"> {industry} ></div> ))} ></div> ></div> {} <section className="mb-20"> <div className="grid grid-cols-1 "lg": grid-cols-2 gap-8"> {caseStudies.map((study,index) => (; <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 "hover": border-cyan-400/30 transition-all duration-300"> <div className="flex items-center gap-3 mb-4"> <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30"> {study.industry} ></div> <span className="text-white/60 text-sm">{study.company}></div> ></div> <h3 className="text-2xl font-bold mb-4 text-white">{study.title}></div> <div className="mb-6"> <h4 className="font-semibold text-fuchsia-400 mb-2">The Challenge></div> <p className="text-white/80 text-sm">{study.challenge}></div> ></div> <div className="mb-6"> <h4 className="font-semibold text-green-400 mb-2">Our Solution></div> <p className="text-white/80 text-sm">{study.solution}></div> ></div> <div className="mb-6"> <h4 className="font-semibold text-blue-400 mb-2">Results></div> <ul className="space-y-1"> {study.results.map((result,resultIndex) => (; <li key={resultIndex} className="text-white/80 text-sm">• {result}></div> ))} ></div> ></div> <div> <h4 className="font-semibold text-purple-400 mb-2">Technologies Used></div> <div className="flex flex-wrap gap-2"> {study.technologies.map((tech,techIndex) => (; <span key={techIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20"> {tech} ></div> ))} ></div> ></div> ></div> ))} ></div> ></div> {} <section className="mb-20"> <h2 className="text-3xl font-bold mb-12 text-center text-white">Collective Impact></div> <div className="grid grid-cols-1 "md": grid-cols-4 gap-8"> <div className="text-center"> <div className="text-4xl font-bold text-cyan-400 mb-2">500+></div> <div className="text-white/70 text-sm">Automation Projects></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-fuchsia-400 mb-2">$50M+></div> <div className="text-white/70 text-sm">Cost Savings Generated></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-green-400 mb-2">99.9%></div> <div className="text-white/70 text-sm">Average Success Rate></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-blue-400 mb-2">24/7></div> <div className="text-white/70 text-sm">Automated Operations></div> ></div> ></div> ></div> {} <section className="text-center"> <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20"> <h2 className="text-3xl font-bold mb-6 text-white">Ready to Write Your Success Story?></div> <p className="text-white/80 mb-8 max-w-2xl mx-auto"> Join the hundreds of companies that have transformed their operations with ; Zion Tech Group's autonomous automation solutions.; ></div> <div className="flex flex-col "sm": flex-row gap-4 justify-center"> <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"> Start Your Project; ></div> <a href="/services" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"> Explore Services; ></div> ></div> ></div> ></div> ></div> ></div> ></div> );}

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare AI Platform Transformation',
      client: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Manual patient data processing and delayed diagnosis workflows',
      solution: 'AI-powered diagnostic platform with automated data processing',
      results: [
        { metric: '85%', description: 'Reduction in diagnosis time' }, { metric: '60%', description: 'Improvement in accuracy' }, { metric: '40%', description: 'Cost savings' }
      ],
      technologies: ['AI/ML', 'Cloud Computing', 'Data Analytics'],
      duration: '6 months',
      team: '12 specialists',
      image: '/case-studies/healthcare-ai.jpg',
      featured: true
    }, {
      id: 2,
      title: 'E-commerce Platform Modernization',
      client: 'Retail Chain',
      industry: 'Retail',
      challenge: 'Legacy system limitations and poor customer experience',
      solution: 'Modern e-commerce platform with AI recommendations',
      results: [
        { metric: '150%', description: 'Increase in online sales' }, { metric: '70%', description: 'Faster page load times' }, { metric: '90%', description: 'Customer satisfaction improvement' }
      ],
      technologies: ['React', 'Node.js', 'AI/ML', 'Cloud'],
      duration: '8 months',
      team: '15 specialists',
      image: '/case-studies/ecommerce.jpg',
      featured: false
    }, {
      id: 3,
      title: 'Financial Services Digital Transformation',
      client: 'Regional Bank',
      industry: 'Finance',
      challenge: 'Outdated banking systems and compliance requirements',
      solution: 'Digital banking platform with advanced security',
      results: [
        { metric: '200%', description: 'Increase in digital transactions' }, { metric: '50%', description: 'Reduction in operational costs' }, { metric: '100%', description: 'Compliance achievement' }
      ],
      technologies: ['Blockchain', 'Security', 'Cloud', 'Mobile'],
      duration: '10 months',
      team: '20 specialists',
      image: '/case-studies/finance.jpg',
      featured: false
    }, {
      id: 4,
      title: 'Manufacturing IoT Integration',
      client: 'Industrial Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Manual production monitoring and inefficiencies',
      solution: 'IoT-enabled smart manufacturing system',
      results: [
        { metric: '75%', description: 'Improvement in production efficiency' }, { metric: '80%', description: 'Reduction in downtime' }, { metric: '30%', description: 'Energy savings' }
      ],
      technologies: ['IoT', 'AI/ML', 'Cloud', 'Analytics'],
      duration: '7 months',
      team: '18 specialists',
      image: '/case-studies/manufacturing.jpg',
      featured: false
    }, {
      id: 5,
      title: 'Education Platform Development',
      client: 'University System',
      industry: 'Education',
      challenge: 'Fragmented learning management systems',
      solution: 'Unified AI-powered learning platform',
      results: [
        { metric: '120%', description: 'Increase in student engagement' }, { metric: '65%', description: 'Improvement in learning outcomes' }, { metric: '45%', description: 'Reduction in administrative workload' }
      ],
      technologies: ['AI/ML', 'Cloud', 'Mobile', 'Analytics'],
      duration: '9 months',
      team: '14 specialists',
      image: '/case-studies/education.jpg',
      featured: false
    }, {
      id: 6,
      title: 'Government Services Digitalization',
      client: 'City Government',
      industry: 'Government',
      challenge: 'Paper-based processes and citizen service delays',
      solution: 'Digital citizen services platform',
      results: [
        { metric: '90%', description: 'Reduction in processing time' }, { metric: '85%', description: 'Citizen satisfaction improvement' }, { metric: '60%', description: 'Cost reduction' }
      ],
      technologies: ['Cloud', 'Security', 'Mobile', 'Analytics'],
      duration: '12 months',
      team: '25 specialists',
      image: '/case-studies/government.jpg',
      featured: false
    }
  ];

import React from \'react\'; import Head from \'next/head\'; export default function CaseStudiesPage() {; const caseStudies = [; {; \"title\": \'Global E-commerce Platform Automation\',; \"company\": \'TechRetail Inc.\',; \"industry\": \'E-commerce\',; \"challenge\": \'Managing 10,000+ daily orders across multiple regions with manual processes\',; \"solution\": \'Implemented autonomous order processing,inventory management,and customer service automation\',; \"results\": [; \'99.9% order accuracy\',; \'60% reduction in processing time\',; \'40% cost savings\',; \'24/7 automated operations\'; ],; \"technologies\": [\'AI Order Processing\',\'Inventory Automation\',\'Customer Service Bots\',\'Real-time Analytics\'];},; {; \"title\": \'Financial Services Compliance Automation\',; \"company\": \'SecureBank Ltd.\',; \"industry\": \'Financial Services\',; \"challenge\": \'Complex regulatory compliance requiring constant monitoring and reporting\',; \"solution\": \'Built autonomous compliance monitoring system with real-time risk assessment and automated reporting\',; \"results\": [; \'100% compliance rate maintained\',; \'90% faster regulatory reporting\',; \'Real-time risk detection\',; \'Automated audit trails\'; ],; \"technologies\": [\'Compliance Monitoring\',\'Risk Assessment AI\',\'Automated Reporting\',\'Audit Automation\'];},; {; \"title\": \'Healthcare Data Processing Automation\',; \"company\": \'MediTech Solutions\',; \"industry\": \'Healthcare\',; \"challenge\": \'Processing millions of patient records while maintaining HIPAA compliance\',; \"solution\": \'Developed secure,autonomous data processing pipeline with privacy-preserving AI\',; \"results\": [; \'10x faster data processing\',; \'Zero HIPAA violations\',; \'99.99% data accuracy\',; \'Automated quality checks\'; ],; \"technologies\": [\'HIPAA-Compliant AI\',\'Data Pipeline Automation\',\'Privacy-Preserving ML\',\'Quality Assurance\'];},; {; \"title\": \'Manufacturing Quality Control\',; \"company\": \'Precision Manufacturing Co.\',; \"industry\": \'Manufacturing\',; \"challenge\": \'Manual quality inspection causing delays and inconsistent results\',; \"solution\": \'Implemented computer vision and AI-powered quality control automation\',; \"results\": [; \'95% defect detection rate\',; \'80% faster inspection process\',; \'Zero production delays\',; \'Continuous quality improvement\'; ],; \"technologies\": [\'Computer Vision AI\',\'Quality Control Automation\',\'Predictive Maintenance\',\'Real-time Monitoring\'];} ]; const industries = [\'All\',\'E-commerce\',\'Financial Services\',\'Healthcare\',\'Manufacturing\',\'Technology\',\'Education\']; return (; <> <Head> <title>Case Studies | Zion Tech Group - Success Stories & Automation Results></div> <meta name=\"description\" content=\"Explore real-world case studies showcasing how Zion Tech Group\'s autonomous automation solutions have transformed businesses across industries.\" /> <meta property=\""og\": title\" content=\"Case Studies - Zion Tech Group\" /> <meta property=\"og:description\" content=\"Success stories and automation results from real businesses.\" /> <meta name=\"twitter:card\" content=\"summary_large_image\" /> ></div> <div className=\"min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white\"> <main className=\"container mx-auto px-6 py-12\"> <nav className=\"mb-8\"> <a href=\"/\" className=\"text-cyan-400 hover:text-cyan-300 transition-colors\"> ← Back to Home; ></div> ></div> <header className=\"text-center mb-16\"> <h1 className=\"text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent\"> Success Stories; ></div> <p className=\"text-xl text-white/80 max-w-3xl mx-auto\"> Discover how Zion Tech Group\'s autonomous automation solutions have transformed ; businesses across industries,delivering measurable results and competitive advantages.; ></div> ></div> {} <section className=\"mb-12\"> <div className=\"flex flex-wrap gap-3 justify-center\"> {industries.map(industry => (; <button; key={industry} className=\"px-4 py-2 rounded-lg border border-white/20 text-white/80 \"hover\": border-cyan-400/50 hover:text-cyan-400 transition-all duration-300\"> {industry} ></div> ))} ></div> ></div> {} <section className=\"mb-20\"> <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-8\"> {caseStudies.map((study,index) => (; <div key={index} className=\"bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 \"hover\": border-cyan-400/30 transition-all duration-300\"> <div className=\"flex items-center gap-3 mb-4\"> <span className=\"px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30\"> {study.industry} ></div> <span className=\"text-white/60 text-sm\">{study.company}></div> ></div> <h3 className=\"text-2xl font-bold mb-4 text-white\">{study.title}></div> <div className=\"mb-6\"> <h4 className=\"font-semibold text-fuchsia-400 mb-2\">The Challenge></div> <p className=\"text-white/80 text-sm\">{study.challenge}></div> ></div> <div className=\"mb-6\"> <h4 className=\"font-semibold text-green-400 mb-2\">Our Solution></div> <p className=\"text-white/80 text-sm\">{study.solution}></div> ></div> <div className=\"mb-6\"> <h4 className=\"font-semibold text-blue-400 mb-2\">Results></div> <ul className=\"space-y-1\"> {study.results.map((result,resultIndex) => (; <li key={resultIndex} className=\"text-white/80 text-sm\">• {result}></div> ))} ></div> ></div> <div> <h4 className=\"font-semibold text-purple-400 mb-2\">Technologies Used></div> <div className=\"flex flex-wrap gap-2\"> {study.technologies.map((tech,techIndex) => (; <span key={techIndex} className=\"px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20\"> {tech} ></div> ))} ></div> ></div> ></div> ))} ></div> ></div> {} <section className=\"mb-20\"> <h2 className=\"text-3xl font-bold mb-12 text-center text-white\">Collective Impact></div> <div className=\"grid grid-cols-1 \"md\": grid-cols-4 gap-8\"> <div className=\"text-center\"> <div className=\"text-4xl font-bold text-cyan-400 mb-2\">500+></div> <div className=\"text-white/70 text-sm\">Automation Projects></div> ></div> <div className=\"text-center\"> <div className=\"text-4xl font-bold text-fuchsia-400 mb-2\">$50M+></div> <div className=\"text-white/70 text-sm\">Cost Savings Generated></div> ></div> <div className=\"text-center\"> <div className=\"text-4xl font-bold text-green-400 mb-2\">99.9%></div> <div className=\"text-white/70 text-sm\">Average Success Rate></div> ></div> <div className=\"text-center\"> <div className=\"text-4xl font-bold text-blue-400 mb-2\">24/7></div> <div className=\"text-white/70 text-sm\">Automated Operations></div> ></div> ></div> ></div> {} <section className=\"text-center\"> <div className=\"bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20\"> <h2 className=\"text-3xl font-bold mb-6 text-white\">Ready to Write Your Success Story?></div> <p className=\"text-white/80 mb-8 max-w-2xl mx-auto\"> Join the hundreds of companies that have transformed their operations with ; Zion Tech Group\'s autonomous automation solutions.; ></div> <div className=\"flex flex-col \"sm\": flex-row gap-4 justify-center\"> <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300\"> Start Your Project; ></div> <a href=\"/services\" className=\"px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300\"> Explore Services; ></div> ></div> ></div> ></div> ></div> ></div> ></div> );}
import _React from 'react'; import Head from 'next/head'; export default function CaseStudiesPage() {; const caseStudies = [; {; "title": 'Global E-commerce Platform Automation',; "company": 'TechRetail Inc.',; "industry": 'E-commerce',; "challenge": 'Managing 10,000+ daily orders across multiple regions with manual processes',; "solution": 'Implemented autonomous order processing,inventory management,and customer service automation',; "results": [; '99.9% order accuracy',; '60% reduction in processing time',; '40% cost savings',; '24/7 automated operations'; ],; "technologies": ['AI Order Processing','Inventory Automation','Customer Service Bots','Real-time Analytics'];},; {; "title": 'Financial Services Compliance Automation',; "company": 'SecureBank Ltd.',; "industry": 'Financial Services',; "challenge": 'Complex regulatory compliance requiring constant monitoring and reporting',; "solution": 'Built autonomous compliance monitoring system with real-time risk assessment and automated reporting',; "results": [; '100% compliance rate maintained',; '90% faster regulatory reporting',; 'Real-time risk detection',; 'Automated audit trails'; ],; "technologies": ['Compliance Monitoring','Risk Assessment AI','Automated Reporting','Audit Automation'];},; {; "title": 'Healthcare Data Processing Automation',; "company": 'MediTech Solutions',; "industry": 'Healthcare',; "challenge": 'Processing millions of patient records while maintaining HIPAA compliance',; "solution": 'Developed secure,autonomous data processing pipeline with privacy-preserving AI',; "results": [; '10x faster data processing',; 'Zero HIPAA violations',; '99.99% data accuracy',; 'Automated quality checks'; ],; "technologies": ['HIPAA-Compliant AI','Data Pipeline Automation','Privacy-Preserving ML','Quality Assurance'];},; {; "title": 'Manufacturing Quality Control',; "company": 'Precision Manufacturing Co.',; "industry": 'Manufacturing',; "challenge": 'Manual quality inspection causing delays and inconsistent results',; "solution": 'Implemented computer vision and AI-powered quality control automation',; "results": [; '95% defect detection rate',; '80% faster inspection process',; 'Zero production delays',; 'Continuous quality improvement'; ],; "technologies": ['Computer Vision AI','Quality Control Automation','Predictive Maintenance','Real-time Monitoring'];} ]; const industries = ['All','E-commerce','Financial Services','Healthcare','Manufacturing','Technology','Education']; return (; <> <Head> <title>Case Studies | Zion Tech Group - Success Stories & Automation Results></div> <meta name="description" content="Explore real-world case studies showcasing how Zion Tech Group's autonomous automation solutions have transformed businesses across industries." /> <meta property=""og": title" content="Case Studies - Zion Tech Group" /> <meta property="og:description" content="Success stories and automation results from real businesses." /> <meta name="twitter:card" content="summary_large_image" /> ></div> <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white"> <main className="container mx-auto px-6 py-12"> <nav className="mb-8"> <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors"> ← Back to Home; ></div> ></div> <header className="text-center mb-16"> <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"> Success Stories; ></div> <p className="text-xl text-white/80 max-w-3xl mx-auto"> Discover how Zion Tech Group's autonomous automation solutions have transformed ; businesses across industries,delivering measurable results and competitive advantages.; ></div> ></div> {} <section className="mb-12"> <div className="flex flex-wrap gap-3 justify-center"> {industries.map(industry => (; <button; key={industry} className="px-4 py-2 rounded-lg border border-white/20 text-white/80 "hover": border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"> {industry} ></div> ))} ></div> ></div> {} <section className="mb-20"> <div className="grid grid-cols-1 "lg": grid-cols-2 gap-8"> {caseStudies.map((study,index) => (; <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 "hover": border-cyan-400/30 transition-all duration-300"> <div className="flex items-center gap-3 mb-4"> <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30"> {study.industry} ></div> <span className="text-white/60 text-sm">{study.company}></div> ></div> <h3 className="text-2xl font-bold mb-4 text-white">{study.title}></div> <div className="mb-6"> <h4 className="font-semibold text-fuchsia-400 mb-2">The Challenge></div> <p className="text-white/80 text-sm">{study.challenge}></div> ></div> <div className="mb-6"> <h4 className="font-semibold text-green-400 mb-2">Our Solution></div> <p className="text-white/80 text-sm">{study.solution}></div> ></div> <div className="mb-6"> <h4 className="font-semibold text-blue-400 mb-2">Results></div> <ul className="space-y-1"> {study.results.map((result,resultIndex) => (; <li key={resultIndex} className="text-white/80 text-sm">• {result}></div> ))} ></div> ></div> <div> <h4 className="font-semibold text-purple-400 mb-2">Technologies Used></div> <div className="flex flex-wrap gap-2"> {study.technologies.map((tech,techIndex) => (; <span key={techIndex} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20"> {tech} ></div> ))} ></div> ></div> ></div> ))} ></div> ></div> {} <section className="mb-20"> <h2 className="text-3xl font-bold mb-12 text-center text-white">Collective Impact></div> <div className="grid grid-cols-1 "md": grid-cols-4 gap-8"> <div className="text-center"> <div className="text-4xl font-bold text-cyan-400 mb-2">500+></div> <div className="text-white/70 text-sm">Automation Projects></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-fuchsia-400 mb-2">$50M+></div> <div className="text-white/70 text-sm">Cost Savings Generated></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-green-400 mb-2">99.9%></div> <div className="text-white/70 text-sm">Average Success Rate></div> ></div> <div className="text-center"> <div className="text-4xl font-bold text-blue-400 mb-2">24/7></div> <div className="text-white/70 text-sm">Automated Operations></div> ></div> ></div> ></div> {} <section className="text-center"> <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20"> <h2 className="text-3xl font-bold mb-6 text-white">Ready to Write Your Success Story?></div> <p className="text-white/80 mb-8 max-w-2xl mx-auto"> Join the hundreds of companies that have transformed their operations with ; Zion Tech Group's autonomous automation solutions.; ></div> <div className="flex flex-col "sm": flex-row gap-4 justify-center"> <a href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"> Start Your Project; ></div> <a href="/services" className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"> Explore Services; ></div> ></div> ></div> ></div> ></div> ></div> ></div> );}

  const stats = [
    { number: '200+', label: 'Projects Completed', icon: TrendingUp }, { number: '95%', label: 'Client Satisfaction', icon: Award }, { number: '50+', label: 'Industries Served', icon: Target }, { number: '24/7', label: 'Support Available', icon: Clock } ];

  return (
    <MainLayout
      title="Case Studies - Zion Tech Group"
      description="Explore our successful digital transformation projects and technology solutions. See how we've helped businesses across industries achieve their goals."
      keywords="case studies, success stories, digital transformation, technology solutions, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries transform their operations, 
              improve efficiency, and achieve remarkable results through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study */}, {featuredCase && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Case Study</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.div
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Award className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-lg font-semibold">Featured Project</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredCase.industry}
                      </span>
                      <span className="text-gray-500 text-sm">Featured</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredCase.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      <strong>Client:</strong> {featuredCase.client}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{featuredCase.challenge}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{featuredCase.solution}</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {featuredCase.results.map((result, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
                          <div className="text-sm text-gray-600">{result.description}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={`/case-studies/${featuredCase.id}`} className="group">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}, {/* Case Studies Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All Case Studies</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularCases.map((study, index) => (
                <motion.div
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Award className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {study.challenge}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{result.metric}</div>
                          <div className="text-xs text-gray-600">{result.description}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                    
                    <Link href={`/case-studies/${study.id}`} className="group">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="group">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services" className="group">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-medium transition-colors flex items-center gap-2">
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )};

export default CaseStudies;