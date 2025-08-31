import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const SolutionsPage: NextPage = () => {
  const industrySolutions = [
    {
      title: "Healthcare Solutions",
      description: "Digital transformation for healthcare providers and organizations",
      solutions: [
        {
          name: "Electronic Health Records (EHR) System",
          description: "Comprehensive patient data management and healthcare workflow automation",
          benefits: ["Improved Patient Care", "Regulatory Compliance", "Data Security", "Interoperability"],
          technologies: ["HIPAA Compliant", "Cloud-based", "Mobile Access", "AI Integration"],
          pricing: "$15,000 - $75,000",
          link: "/solutions/healthcare-ehr"
        },
        {
          name: "Telemedicine Platform",
          description: "Complete virtual healthcare delivery system with video consultations",
          benefits: ["Remote Patient Care", "Reduced Wait Times", "Cost Savings", "Accessibility"],
          technologies: ["Video Conferencing", "Secure Messaging", "Payment Processing", "Prescription Management"],
          pricing: "$8,000 - $35,000",
          link: "/solutions/telemedicine"
        },
        {
          name: "Healthcare Analytics Dashboard",
          description: "AI-powered analytics for healthcare performance and patient outcomes",
          benefits: ["Predictive Analytics", "Performance Metrics", "Cost Optimization", "Quality Improvement"],
          technologies: ["Machine Learning", "Real-time Data", "Custom Reports", "Integration APIs"],
          pricing: "$5,000 - $25,000",
          link: "/solutions/healthcare-analytics"
        }
      ]
    },
    {
      title: "Financial Services Solutions",
      description: "Innovative fintech solutions for banks, credit unions, and financial institutions",
      solutions: [
        {
          name: "Digital Banking Platform",
          description: "Modern online and mobile banking solution with advanced features",
          benefits: ["24/7 Banking", "Enhanced Security", "Cost Reduction", "Customer Satisfaction"],
          technologies: ["Multi-factor Authentication", "Real-time Processing", "API Integration", "Compliance Ready"],
          pricing: "$25,000 - $100,000",
          link: "/solutions/digital-banking"
        },
        {
          name: "Payment Processing System",
          description: "Secure payment gateway with fraud detection and analytics",
          benefits: ["Secure Transactions", "Fraud Prevention", "Global Reach", "Real-time Analytics"],
          technologies: ["PCI DSS Compliant", "Machine Learning", "Multi-currency", "Mobile Payments"],
          pricing: "$10,000 - $50,000",
          link: "/solutions/payment-processing"
        },
        {
          name: "Investment Portfolio Management",
          description: "AI-powered investment management and portfolio optimization",
          benefits: ["Automated Trading", "Risk Management", "Performance Tracking", "Tax Optimization"],
          technologies: ["Algorithmic Trading", "Risk Analytics", "Tax Reporting", "Real-time Alerts"],
          pricing: "$20,000 - $80,000",
          link: "/solutions/portfolio-management"
        }
      ]
    },
    {
      title: "Manufacturing & Industry 4.0",
      description: "Smart manufacturing solutions for Industry 4.0 transformation",
      solutions: [
        {
          name: "Smart Factory Management System",
          description: "IoT-powered manufacturing automation and monitoring platform",
          benefits: ["Production Optimization", "Predictive Maintenance", "Quality Control", "Cost Reduction"],
          technologies: ["IoT Sensors", "Machine Learning", "Real-time Monitoring", "Predictive Analytics"],
          pricing: "$50,000 - $200,000",
          link: "/solutions/smart-factory"
        },
        {
          name: "Supply Chain Optimization",
          description: "End-to-end supply chain visibility and optimization platform",
          benefits: ["Inventory Optimization", "Demand Forecasting", "Cost Reduction", "Risk Management"],
          technologies: ["Blockchain", "AI/ML", "Real-time Tracking", "Analytics Dashboard"],
          pricing: "$30,000 - $120,000",
          link: "/solutions/supply-chain"
        },
        {
          name: "Quality Management System",
          description: "Automated quality control and compliance management",
          benefits: ["Quality Assurance", "Compliance Tracking", "Defect Prevention", "Process Improvement"],
          technologies: ["Computer Vision", "IoT Integration", "Compliance Reporting", "Real-time Alerts"],
          pricing: "$15,000 - $60,000",
          link: "/solutions/quality-management"
        }
      ]
    },
    {
      title: "Retail & E-commerce Solutions",
      description: "Omnichannel retail solutions for modern commerce",
      solutions: [
        {
          name: "Omnichannel Retail Platform",
          description: "Unified commerce solution for online and offline retail",
          benefits: ["Unified Customer Experience", "Inventory Synchronization", "Sales Growth", "Operational Efficiency"],
          technologies: ["Cloud-based", "Mobile POS", "Inventory Management", "Customer Analytics"],
          pricing: "$20,000 - $80,000",
          link: "/solutions/omnichannel-retail"
        },
        {
          name: "AI-Powered Recommendation Engine",
          description: "Personalized product recommendations and customer engagement",
          benefits: ["Increased Sales", "Customer Retention", "Personalization", "Conversion Optimization"],
          technologies: ["Machine Learning", "Real-time Processing", "A/B Testing", "Analytics Dashboard"],
          pricing: "$8,000 - $35,000",
          link: "/solutions/recommendation-engine"
        },
        {
          name: "Retail Analytics & Insights",
          description: "Comprehensive retail analytics and business intelligence platform",
          benefits: ["Data-driven Decisions", "Performance Optimization", "Customer Insights", "Revenue Growth"],
          technologies: ["Big Data Analytics", "Real-time Reporting", "Predictive Modeling", "Custom Dashboards"],
          pricing: "$12,000 - $50,000",
          link: "/solutions/retail-analytics"
        }
      ]
    },
    {
      title: "Education & EdTech Solutions",
      description: "Digital learning platforms and educational technology solutions",
      solutions: [
        {
          name: "Learning Management System (LMS)",
          description: "Comprehensive online learning platform for educational institutions",
          benefits: ["Flexible Learning", "Cost Reduction", "Scalability", "Student Engagement"],
          technologies: ["Cloud-based", "Mobile Learning", "Video Conferencing", "Assessment Tools"],
          pricing: "$10,000 - $40,000",
          link: "/solutions/lms-platform"
        },
        {
          name: "Virtual Classroom Platform",
          description: "Interactive virtual learning environment with real-time collaboration",
          benefits: ["Remote Learning", "Interactive Sessions", "Resource Sharing", "Attendance Tracking"],
          technologies: ["Video Streaming", "Screen Sharing", "Whiteboard Tools", "Breakout Rooms"],
          pricing: "$5,000 - $25,000",
          link: "/solutions/virtual-classroom"
        },
        {
          name: "Student Analytics & Assessment",
          description: "AI-powered student performance tracking and personalized learning",
          benefits: ["Personalized Learning", "Performance Tracking", "Early Intervention", "Data-driven Teaching"],
          technologies: ["Machine Learning", "Predictive Analytics", "Adaptive Learning", "Progress Tracking"],
          pricing: "$8,000 - $30,000",
          link: "/solutions/student-analytics"
        }
      ]
    },
    {
      title: "Real Estate & Property Management",
      description: "Digital solutions for real estate professionals and property managers",
      solutions: [
        {
          name: "Property Management Platform",
          description: "Complete property management solution for landlords and property managers",
          benefits: ["Automated Operations", "Tenant Management", "Financial Tracking", "Maintenance Coordination"],
          technologies: ["Cloud-based", "Mobile Apps", "Payment Processing", "Maintenance Tracking"],
          pricing: "$15,000 - $60,000",
          link: "/solutions/property-management"
        },
        {
          name: "Virtual Tour & 3D Visualization",
          description: "Immersive virtual tour platform for real estate marketing",
          benefits: ["Enhanced Marketing", "Remote Viewing", "Cost Savings", "Increased Engagement"],
          technologies: ["360° Photography", "3D Modeling", "VR/AR Integration", "Mobile Optimization"],
          pricing: "$8,000 - $35,000",
          link: "/solutions/virtual-tours"
        },
        {
          name: "Real Estate Analytics Platform",
          description: "Market analysis and investment insights for real estate professionals",
          benefits: ["Market Intelligence", "Investment Analysis", "Risk Assessment", "Competitive Advantage"],
          technologies: ["Big Data Analytics", "Market Forecasting", "Investment Modeling", "Custom Reports"],
          pricing: "$12,000 - $50,000",
          link: "/solutions/real-estate-analytics"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Head>
        <title>Industry Solutions - Zion Tech Solutions | Healthcare, Finance, Manufacturing & More</title>
        <meta name="description" content="Comprehensive industry-specific technology solutions for healthcare, financial services, manufacturing, retail, education, and real estate. Transform your industry with Zion Tech Solutions." />
        <meta name="keywords" content="healthcare solutions, fintech, manufacturing automation, retail technology, edtech, real estate software, industry 4.0, digital transformation" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry-Specific Technology Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tailored technology solutions designed for your specific industry needs. 
            From healthcare to manufacturing, we deliver innovative solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Industry Consultation
            </a>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="space-y-16">
          {industrySolutions.map((industry, industryIndex) => (
            <div key={industryIndex} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{industry.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{industry.description}</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {industry.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.name}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1 mb-4">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Starting Price:</span>
                        <span className="font-semibold text-purple-600">{solution.pricing}</span>
                      </div>
                      
                      <Link href={solution.link} className="w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors block">
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">See how our solutions have transformed businesses across industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Provider</h3>
              <p className="text-gray-600 mb-4">"Zion Tech's EHR system reduced our administrative overhead by 40% and improved patient care quality significantly."</p>
              <div className="text-sm text-blue-600 font-semibold">- Dr. Sarah Johnson, Medical Director</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing Company</h3>
              <p className="text-gray-600 mb-4">"Our smart factory implementation increased production efficiency by 35% and reduced maintenance costs by 50%."</p>
              <div className="text-sm text-green-600 font-semibold">- Mike Chen, Operations Manager</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Institution</h3>
              <p className="text-gray-600 mb-4">"The digital banking platform helped us increase customer satisfaction scores by 60% and reduce operational costs."</p>
              <div className="text-sm text-purple-600 font-semibold">- Lisa Rodriguez, CIO</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 mt-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can help you achieve your business goals. 
            Our experts are ready to provide a customized consultation for your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:no-underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolutionsPage;