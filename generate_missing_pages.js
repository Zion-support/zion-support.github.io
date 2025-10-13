import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the comprehensive audit report
const auditReport = JSON.parse(fs.readFileSync(path.join(__dirname, 'comprehensive_audit_report.json'), 'utf8'));

const missingPages = auditReport.missingPages;

// Template for AI service pages
const aiServiceTemplate = (serviceName, serviceTitle, description, features, benefits) => `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Zap, CheckCircle, Star, Users, Award } from "lucide-react";

export default function ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1).replace(/-/g, '')}Page() {
  const features = ${JSON.stringify(features, null, 2)};

  const benefits = ${JSON.stringify(benefits, null, 2)};

  const stats = [
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "50%", label: "Cost Reduction" },
    { number: "3x", label: "Faster Processing" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <>
      <Helmet>
        <title>${serviceTitle} - Zion Tech Group | AI Solutions</title>
        <meta
          name="description"
          content="${description}"
        />
        <meta
          name="keywords"
          content="${serviceName.replace(/-/g, ', ')}, AI solutions, artificial intelligence, automation, business intelligence"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                ${serviceTitle}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Key Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful capabilities that make our ${serviceTitle} solution stand out
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Choose Our Solution?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of implementing our ${serviceTitle} solution
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our ${serviceTitle} solution today and experience the power of AI-driven innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}`;

// Template for general service pages
const serviceTemplate = (serviceName, serviceTitle, description, features, benefits) => `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, CheckCircle, Star, Users, Award } from "lucide-react";

export default function ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1).replace(/-/g, '')}Page() {
  const features = ${JSON.stringify(features, null, 2)};

  const benefits = ${JSON.stringify(benefits, null, 2)};

  const stats = [
    { number: "99.9%", label: "Uptime SLA" },
    { number: "50%", label: "Cost Reduction" },
    { number: "3x", label: "Faster Delivery" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <>
      <Helmet>
        <title>${serviceTitle} - Zion Tech Group | IT Solutions</title>
        <meta
          name="description"
          content="${description}"
        />
        <meta
          name="keywords"
          content="${serviceName.replace(/-/g, ', ')}, IT solutions, technology services, business solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                ${serviceTitle}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Key Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive capabilities that make our ${serviceTitle} solution stand out
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Choose Our Solution?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of implementing our ${serviceTitle} solution
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn more about our ${serviceTitle} solution and how it can benefit your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}`;

// Generate content for different types of services
function generateServiceContent(serviceName) {
  const isAIService = serviceName.startsWith('ai-');
  const isZionService = serviceName.startsWith('zion-');
  const is5GService = serviceName.startsWith('5g-');
  
  let serviceTitle = serviceName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  let description = '';
  let features = [];
  let benefits = [];

  if (isAIService) {
    description = `Advanced AI-powered ${serviceTitle} solution that leverages cutting-edge artificial intelligence to transform your business operations and drive innovation.`;
    features = [
      { title: "AI-Powered Intelligence", description: "Leverage advanced machine learning algorithms for intelligent decision making" },
      { title: "Real-time Processing", description: "Process data and generate insights in real-time for immediate action" },
      { title: "Scalable Architecture", description: "Built to scale with your business growth and increasing data volumes" },
      { title: "Easy Integration", description: "Seamlessly integrate with your existing systems and workflows" },
      { title: "Advanced Analytics", description: "Comprehensive analytics and reporting capabilities for data-driven insights" },
      { title: "24/7 Monitoring", description: "Continuous monitoring and optimization of AI models and performance" }
    ];
    benefits = [
      { title: "Increased Efficiency", description: "Automate repetitive tasks and processes to improve operational efficiency" },
      { title: "Cost Reduction", description: "Reduce operational costs through intelligent automation and optimization" },
      { title: "Better Decision Making", description: "Make data-driven decisions with AI-powered insights and recommendations" },
      { title: "Competitive Advantage", description: "Stay ahead of the competition with cutting-edge AI technology" },
      { title: "Scalable Growth", description: "Scale your operations efficiently as your business grows" },
      { title: "Risk Mitigation", description: "Identify and mitigate risks through predictive analytics and monitoring" }
    ];
  } else if (isZionService) {
    description = `Zion ${serviceTitle} - A comprehensive solution designed to streamline your business operations and drive growth through innovative technology.`;
    features = [
      { title: "Enterprise-Grade Security", description: "Bank-level security measures to protect your data and operations" },
      { title: "User-Friendly Interface", description: "Intuitive design that makes complex tasks simple and accessible" },
      { title: "Customizable Workflows", description: "Tailor the solution to match your specific business processes" },
      { title: "Real-time Collaboration", description: "Enable seamless collaboration across teams and departments" },
      { title: "Advanced Reporting", description: "Comprehensive reporting and analytics for informed decision making" },
      { title: "24/7 Support", description: "Round-the-clock support to ensure your operations run smoothly" }
    ];
    benefits = [
      { title: "Streamlined Operations", description: "Simplify and optimize your business processes for maximum efficiency" },
      { title: "Improved Productivity", description: "Boost team productivity with powerful automation and collaboration tools" },
      { title: "Cost Savings", description: "Reduce operational costs through efficient resource management" },
      { title: "Better Customer Experience", description: "Deliver exceptional customer experiences with improved service delivery" },
      { title: "Data-Driven Insights", description: "Make informed decisions with comprehensive analytics and reporting" },
      { title: "Scalable Solution", description: "Grow your business with a solution that scales with your needs" }
    ];
  } else if (is5GService) {
    description = `Next-generation ${serviceTitle} powered by 5G technology to deliver ultra-fast, reliable, and scalable connectivity solutions for modern businesses.`;
    features = [
      { title: "Ultra-Fast Connectivity", description: "Experience lightning-fast speeds with 5G technology" },
      { title: "Low Latency", description: "Minimal delay for real-time applications and critical operations" },
      { title: "High Capacity", description: "Support for massive data volumes and concurrent connections" },
      { title: "Edge Computing", description: "Process data closer to the source for improved performance" },
      { title: "IoT Integration", description: "Seamlessly connect and manage IoT devices and sensors" },
      { title: "Future-Proof", description: "Built to support emerging technologies and future innovations" }
    ];
    benefits = [
      { title: "Enhanced Performance", description: "Dramatically improve application and service performance" },
      { title: "Real-time Capabilities", description: "Enable real-time applications and services" },
      { title: "IoT Enablement", description: "Unlock the full potential of IoT and smart devices" },
      { title: "Cost Efficiency", description: "Reduce infrastructure costs with efficient 5G solutions" },
      { title: "Competitive Edge", description: "Stay ahead with cutting-edge 5G technology" },
      { title: "Scalable Infrastructure", description: "Build a scalable foundation for future growth" }
    ];
  } else {
    description = `Professional ${serviceTitle} services designed to help your business achieve its goals through innovative technology solutions and expert guidance.`;
    features = [
      { title: "Expert Consultation", description: "Get guidance from experienced professionals in the field" },
      { title: "Custom Solutions", description: "Tailored solutions that meet your specific business needs" },
      { title: "Proven Methodologies", description: "Industry-proven approaches and best practices" },
      { title: "Comprehensive Support", description: "Full support throughout the implementation process" },
      { title: "Quality Assurance", description: "Rigorous testing and quality control measures" },
      { title: "Ongoing Maintenance", description: "Continuous support and maintenance services" }
    ];
    benefits = [
      { title: "Professional Expertise", description: "Leverage the knowledge and experience of industry experts" },
      { title: "Customized Approach", description: "Solutions tailored to your specific requirements and goals" },
      { title: "Proven Results", description: "Track record of successful implementations and satisfied clients" },
      { title: "Risk Mitigation", description: "Minimize risks through careful planning and execution" },
      { title: "Cost Optimization", description: "Optimize costs while maximizing value and results" },
      { title: "Long-term Partnership", description: "Build lasting relationships for ongoing success" }
    ];
  }

  return { serviceTitle, description, features, benefits };
}

// Create missing pages
let createdCount = 0;
let skippedCount = 0;

console.log(`Starting to create ${missingPages.length} missing pages...`);

for (const page of missingPages) {
  try {
    const pagePath = path.join(__dirname, 'app', page.substring(1), 'page.tsx');
    const pageDir = path.dirname(pagePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    
    // Check if page already exists
    if (fs.existsSync(pagePath)) {
      console.log(`Skipping ${page} - already exists`);
      skippedCount++;
      continue;
    }
    
    const { serviceTitle, description, features, benefits } = generateServiceContent(page);
    
    let template;
    if (page.startsWith('ai-') || page.startsWith('zion-') || page.startsWith('5g-')) {
      template = aiServiceTemplate(page, serviceTitle, description, features, benefits);
    } else {
      template = serviceTemplate(page, serviceTitle, description, features, benefits);
    }
    
    fs.writeFileSync(pagePath, template);
    console.log(`Created: ${page}`);
    createdCount++;
    
  } catch (error) {
    console.error(`Error creating ${page}:`, error.message);
  }
}

console.log(`\n=== PAGE GENERATION SUMMARY ===`);
console.log(`Total missing pages: ${missingPages.length}`);
console.log(`Pages created: ${createdCount}`);
console.log(`Pages skipped: ${skippedCount}`);
console.log(`Pages with errors: ${missingPages.length - createdCount - skippedCount}`);

console.log('\nPage generation completed!');