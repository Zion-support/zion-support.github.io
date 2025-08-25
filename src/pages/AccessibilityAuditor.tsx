import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Eye, 
<<<<<<< HEAD
  Shield, 
  CheckCircle, 
  Users, 
  Scan, 
  FileText, 
  ArrowRight,
  Globe,
  Star,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Award
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AccessibilityAuditor: React.FC = () => {
  const features = [
    {
      icon: Scan,
      title: "Automated Scanning",
      description: "Comprehensive automated scans of your website to identify accessibility issues across all pages and components.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "WCAG Compliance",
      description: "Ensure compliance with WCAG 2.1 AA/AAA standards and other accessibility guidelines and regulations.",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Get comprehensive reports with actionable recommendations and step-by-step remediation guidance.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Eye,
      title: "Visual Testing",
      description: "Test color contrast, text readability, and visual elements for accessibility compliance.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Users,
      title: "User Experience Focus",
      description: "Ensure your website is accessible to users with disabilities, improving overall user experience.",
      color: "from-red-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Multi-page Analysis",
      description: "Scan entire websites, including dynamic content and interactive elements for comprehensive coverage.",
      color: "from-teal-500 to-blue-600"
    }
  ];

  const checkTypes = [
    {
      title: "WCAG 2.1 Compliance",
      items: ["Level A requirements", "Level AA requirements", "Level AAA requirements", "Success criteria validation"]
    },
    {
      title: "Keyboard Navigation",
      items: ["Tab order testing", "Focus indicators", "Keyboard shortcuts", "Skip links validation"]
    },
    {
      title: "Screen Reader Compatibility",
      items: ["Alt text validation", "ARIA labels", "Heading structure", "Form labels"]
    },
    {
      title: "Visual Accessibility",
      items: ["Color contrast ratios", "Text sizing", "Visual focus indicators", "Error identification"]
=======
  Accessibility, 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  BarChart3, 
  Users, 
  Globe,
  ArrowRight,
  Target,
  Clock,
  Star,
  FileText,
  Code,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';
=======
import { Shield, Eye, CheckCircle, AlertTriangle, Zap, Users, Globe, BarChart3, ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82

export default function AccessibilityAuditor() {
  const features = [
    {
      icon: Eye,
<<<<<<< HEAD
      title: 'Comprehensive Auditing',
      description: 'Complete accessibility evaluation across all digital touchpoints'
    },
    {
      icon: Shield,
      title: 'Compliance Standards',
      description: 'WCAG 2.1 AA/AAA, Section 508, and international accessibility standards'
    },
    {
      icon: BarChart3,
      title: 'Detailed Reporting',
      description: 'Comprehensive reports with actionable recommendations'
    },
    {
      icon: Users,
      title: 'User Experience',
      description: 'Focus on real user accessibility needs and experiences'
    }
  ];

  const auditTypes = [
    {
      title: 'Website Accessibility',
      description: 'Comprehensive evaluation of website accessibility',
      features: ['Navigation testing', 'Content readability', 'Form accessibility', 'Media accessibility']
    },
    {
      title: 'Mobile App Accessibility',
      description: 'Mobile application accessibility assessment',
      features: ['Touch targets', 'Screen reader support', 'Gesture navigation', 'Color contrast']
    },
    {
      title: 'Document Accessibility',
      description: 'PDF and document accessibility compliance',
      features: ['Text recognition', 'Structure tagging', 'Alt text', 'Reading order']
    },
    {
      title: 'Software Accessibility',
      description: 'Desktop and enterprise software evaluation',
      features: ['Keyboard navigation', 'Screen reader compatibility', 'Focus management', 'Error handling']
    }
  ];

  const benefits = [
    {
      metric: '100%',
      label: 'WCAG Compliance',
      description: 'Full accessibility standards compliance'
    },
    {
      metric: '24/7',
      label: 'Continuous Monitoring',
      description: 'Round-the-clock accessibility oversight'
    },
    {
      metric: '50+',
      label: 'Test Scenarios',
      description: 'Comprehensive testing coverage'
    },
    {
      metric: '99%',
      label: 'Issue Detection',
      description: 'High accuracy problem identification'
    }
  ];

  const industries = [
    {
      industry: 'E-commerce',
      focus: ['Product accessibility', 'Checkout process', 'Mobile shopping', 'Customer support']
    },
    {
      industry: 'Healthcare',
      focus: ['Patient portals', 'Medical forms', 'Emergency information', 'Telemedicine platforms']
    },
    {
      industry: 'Education',
      focus: ['Learning management systems', 'Course materials', 'Student portals', 'Assessment tools']
    },
    {
      industry: 'Financial Services',
      focus: ['Banking applications', 'Investment platforms', 'Insurance portals', 'Payment systems']
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
=======
      title: 'WCAG 2.1 Compliance',
      description: 'Full compliance with WCAG 2.1 AA standards for accessibility',
      benefits: ['Screen reader compatibility', 'Keyboard navigation support', 'Color contrast optimization']
    },
    {
      icon: Shield,
      title: 'Automated Testing',
      description: 'AI-powered automated accessibility testing and validation',
      benefits: ['Real-time scanning', 'Comprehensive reports', 'Issue prioritization']
    },
    {
      icon: CheckCircle,
      title: 'Manual Auditing',
      description: 'Expert manual accessibility audits by certified professionals',
      benefits: ['Human expertise', 'Context-aware analysis', 'Custom recommendations']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Accessibility improvements that also enhance performance',
      benefits: ['Faster loading times', 'Better SEO', 'Improved user experience']
    }
  ];

  const auditProcess = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of current accessibility status'
    },
    {
      step: '02',
      title: 'Automated Testing',
      description: 'AI-powered scanning for common accessibility issues'
    },
    {
      step: '03',
      title: 'Manual Review',
      description: 'Expert manual testing and validation'
    },
    {
      step: '04',
      title: 'Report & Recommendations',
      description: 'Detailed report with actionable improvement suggestions'
    },
    {
      step: '05',
      title: 'Implementation Support',
      description: 'Ongoing support for implementing accessibility improvements'
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <SEOHead 
        title="Accessibility Auditor | Zion Tech Group"
        description="Comprehensive accessibility auditing and compliance testing for your website. Ensure WCAG compliance and improve user experience for all users."
        keywords="accessibility auditor, WCAG compliance, web accessibility, accessibility testing, disability compliance"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Eye className="w-4 h-4" />
                Web Accessibility Testing
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Accessibility
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Auditor</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Ensure your website is accessible to everyone with our comprehensive accessibility auditing tools. 
                Identify issues, get actionable recommendations, and achieve WCAG compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center gap-2"
                >
                  Start Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/demo" 
                  className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200 inline-flex items-center gap-2"
                >
                  Try Demo
                  <Rocket className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Accessibility Testing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced tools and methodologies to ensure your website meets accessibility standards.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Check Types */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Check
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive accessibility testing across all key areas to ensure full compliance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {checkTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{type.title}</h3>
                  <div className="space-y-3">
                    {type.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Auditing Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, thorough, and actionable accessibility auditing in four steps.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Scan", description: "Automated scanning of your entire website" },
                { step: "2", title: "Analyze", description: "AI-powered analysis of accessibility issues" },
                { step: "3", title: "Report", description: "Detailed report with actionable recommendations" },
                { step: "4", title: "Support", description: "Ongoing support for remediation efforts" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Make Your Website Accessible to Everyone
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your accessibility audit today and ensure your website welcomes all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                Start Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/20 inline-flex items-center gap-2"
              >
                View Pricing
                <Star className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AccessibilityAuditor;
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                <Accessibility className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Accessibility Auditor
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Ensure your digital products are accessible to everyone. 
              Comprehensive auditing, compliance testing, and actionable recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                Try Demo
              </Link>
            </div>
          </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <Eye className="w-4 h-4 mr-2" />
              Accessibility Excellence
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Accessibility Auditor
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Ensure your digital products are accessible to everyone with our comprehensive 
            accessibility auditing services. From automated testing to expert manual reviews.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
            >
              Get Accessibility Audit
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services/accessibility"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Accessibility Auditing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expert evaluation using industry-standard tools and methodologies
=======
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Accessibility Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our accessibility auditor provides everything you need to make your digital products 
              inclusive and compliant with international standards.
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Audit Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized accessibility evaluation for all digital platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {auditTypes.map((audit, index) => (
              <div key={index} className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">{audit.title}</h3>
                <p className="text-gray-400 mb-6">{audit.description}</p>
                <ul className="space-y-2">
                  {audit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
=======
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Audit Performance Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantifiable results and comprehensive coverage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Focus
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored accessibility solutions for different business sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">{industry.industry}</h3>
                <ul className="space-y-2">
                  {industry.focus.map((focus, focusIndex) => (
                    <li key={focusIndex} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {focus}
                    </li>
                  ))}
                </ul>
=======
      {/* Audit Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Accessibility Audit Process
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A systematic approach to identifying and resolving accessibility issues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {auditProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500/30">
                  <span className="text-2xl font-bold text-blue-400">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Digital Products Accessible?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ensure compliance and improve user experience for all users
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Make Your Products Accessible?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join thousands of organizations that trust us to ensure their digital products 
            are accessible to everyone, regardless of ability.
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
            >
              Schedule Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
            >
              View Pricing
=======
              className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
            >
              Start Accessibility Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              View Case Studies
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> origin/cursor/website-audit-and-enhancement-1b0a
=======
}
>>>>>>> origin/cursor/website-audit-and-enhancement-1f82
