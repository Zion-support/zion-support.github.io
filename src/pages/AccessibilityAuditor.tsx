import { Eye, CheckCircle, AlertTriangle, BarChart3, ArrowRight, Shield, Users, Zap } from 'lucide-react';
import { 
  Eye, 
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
      title: "Compliance Checking",
      description: "WCAG 2.1, Section 508, and international accessibility standards"
      title: "WCAG Compliance",
      description: "Full compliance with WCAG 2.1 AA and AAA standards"
      description: "AI-powered detection of accessibility barriers and violations"
      description: "Automated detection of accessibility violations and barriers"
    },
    {
      icon: Zap,
      title: "Real-time Testing",
      description: "Live accessibility testing and validation tools"
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Ensure compliance with ADA and other accessibility laws"
    },
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms for comprehensive accessibility review"
    "Web accessibility compliance",
    "Mobile app accessibility",
    "Document accessibility (PDFs, Word docs)",
    "Video and multimedia accessibility",
    "Form and input accessibility",
    "Navigation and keyboard accessibility",
    "Color contrast and visual accessibility",
    "Screen reader compatibility",
    "Voice recognition compatibility",
    "Cognitive accessibility features"
  ];

  const benefits = [
    "Ensure legal compliance and avoid lawsuits",
    "Improve user experience for all users",
    "Expand your audience reach",
    "Enhance brand reputation and trust",
    "Improve SEO and search rankings",
    "Reduce support requests and complaints"
  ];

  const auditProcess = [
    {
      title: "Initial Assessment",
      description: "Comprehensive review of current accessibility status",
      icon: Eye
    },
    {
      title: "Detailed Analysis",
      description: "In-depth examination of all accessibility issues",
      icon: BarChart3
    },
    {
      title: "Report Generation",
      description: "Detailed report with prioritized recommendations",
      icon: Target
    },
    {
      title: "Implementation Support",
      description: "Guidance and support for accessibility improvements",
      icon: Users
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Focus on real user experience and accessibility needs"
    },
    {
      icon: Globe,
      title: "Multi-platform",
      description: "Test websites, mobile apps, and desktop applications"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and alerting for accessibility issues"
    }
  ];

  const testingAreas = [
    {
      title: "Visual Accessibility",
      description: "Ensure content is accessible to users with visual impairments",
      icon: Eye,
      tests: ["Color contrast", "Text sizing", "Image alt text", "Focus indicators"]
    },
    {
      title: "Keyboard Navigation",
      description: "Verify all functionality is accessible via keyboard",
      icon: Zap,
      tests: ["Tab order", "Keyboard shortcuts", "Focus management", "Skip links"]
    },
    {
      title: "Screen Reader Support",
      description: "Optimize for screen reader and assistive technology users",
      icon: Users,
      tests: ["Semantic markup", "ARIA labels", "Content structure", "Navigation"]
    },
    {
      title: "Content Accessibility",
      description: "Ensure content is clear and understandable for all users",
      icon: CheckCircle,
      tests: ["Language clarity", "Reading level", "Multimedia alternatives", "Forms"]
    }
  ];

  const complianceStandards = [
    {
      name: "WCAG 2.1 AA",
      description: "Web Content Accessibility Guidelines 2.1 Level AA",
      status: "Full Compliance"
    },
    {
      name: "WCAG 2.1 AAA",
      description: "Web Content Accessibility Guidelines 2.1 Level AAA",
      status: "Enhanced Compliance"
    },
    {
      name: "ADA Title III",
      description: "Americans with Disabilities Act Title III",
      status: "Legal Compliance"
    },
    {
      name: "Section 508",
      description: "Federal accessibility requirements for government websites",
      status: "Government Compliance"
      metric: "100%",
      label: "WCAG Compliance",
      description: "Full accessibility standards compliance"
    },
    {
      metric: "50%",
      label: "User Reach",
      description: "Expand your audience with accessible design"
    },
    {
      metric: "90%",
      label: "Issue Detection",
      description: "Comprehensive accessibility issue identification"
    },
    {
      metric: "24/7",
      label: "Monitoring",
      description: "Continuous accessibility monitoring and alerts"
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
              className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
            >
              Get Accessibility Audit
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services/accessibility"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Accessibility Auditing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expert evaluation using industry-standard tools and methodologies
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
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
      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Focus
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored accessibility solutions for different business sectors
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Compliance Standards We Cover
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our audits ensure compliance with all major accessibility standards 
              and legal requirements.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make Your Digital Products Accessible?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ensure compliance and improve user experience for all users
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
            >
              View Pricing
}
}
