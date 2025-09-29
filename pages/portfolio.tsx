import React from "react";
import Head from "next/head";
import Link from "next/link";

const caseStudies = [
  {
    id: "healthcare-diagnostics",
    title: "Healthcare Diagnostics Platform",
    category: "AI & Machine Learning",
    industry: "Healthcare",
    challenge: "Manual diagnostic processes were time-consuming and prone to human error, leading to delayed treatments and increased costs.",
    solution: "Developed a computer vision system using deep learning algorithms to analyze medical imaging data and provide accurate diagnostic recommendations.",
    results: [
      "95% accuracy in diagnostic predictions",
      "35% reduction in analysis time",
      "60% decrease in diagnostic errors",
      "$2M annual cost savings"
    ],
    technologies: ["TensorFlow", "OpenCV", "Python", "AWS SageMaker", "DICOM"],
    image: "🏥",
    color: "from-green-500 to-blue-600"
  },
  {
    id: "ecommerce-personalization",
    title: "E-commerce Personalization Engine",
    category: "AI & Machine Learning",
    industry: "Retail",
    challenge: "Low customer engagement and conversion rates due to generic product recommendations and poor user experience.",
    solution: "Built a sophisticated recommendation system using collaborative filtering and deep learning to deliver personalized product suggestions.",
    results: [
      "40% increase in customer engagement",
      "25% boost in sales revenue",
      "50% improvement in click-through rates",
      "30% increase in average order value"
    ],
    technologies: ["PyTorch", "Apache Spark", "Redis", "Kubernetes", "PostgreSQL"],
    image: "🛒",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: "enterprise-migration",
    title: "Enterprise Cloud Migration",
    category: "Cloud Infrastructure",
    industry: "Financial Services",
    challenge: "Legacy on-premise systems were expensive to maintain, lacked scalability, and posed security risks for a Fortune 500 company.",
    solution: "Executed a comprehensive cloud migration strategy with zero-downtime deployment and enhanced security measures.",
    results: [
      "45% reduction in infrastructure costs",
      "99.9% system uptime achieved",
      "50% faster deployment cycles",
      "100% compliance with security standards"
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "CloudFormation"],
    image: "🏢",
    color: "from-green-500 to-blue-600"
  },
  {
    id: "gaming-platform",
    title: "Multi-Cloud Gaming Platform",
    category: "Cloud Infrastructure",
    industry: "Gaming",
    challenge: "Traffic spikes during peak gaming hours caused server overloads and poor user experience, leading to player churn.",
    solution: "Designed an auto-scaling multi-cloud architecture that dynamically allocates resources based on real-time demand.",
    results: [
      "10x traffic handling capacity",
      "99.95% uptime during peak hours",
      "Sub-50ms latency maintained",
      "40% reduction in operational costs"
    ],
    technologies: ["AWS", "Google Cloud", "Kubernetes", "Redis", "Load Balancers"],
    image: "🎮",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: "fintech-security",
    title: "FinTech Security Platform",
    category: "Cybersecurity",
    industry: "Financial Technology",
    challenge: "High-risk financial transactions required advanced fraud detection and real-time security monitoring to prevent losses.",
    solution: "Implemented a zero-trust security architecture with AI-powered fraud detection and real-time risk assessment.",
    results: [
      "99.8% fraud detection accuracy",
      "85% reduction in false positives",
      "Real-time threat response",
      "$50M prevented fraud losses"
    ],
    technologies: ["Machine Learning", "Real-time Analytics", "Blockchain", "Zero Trust", "SIEM"],
    image: "🔒",
    color: "from-red-500 to-orange-600"
  },
  {
    id: "iot-analytics",
    title: "IoT Data Analytics Platform",
    category: "Data Analytics",
    industry: "Manufacturing",
    challenge: "Massive amounts of IoT sensor data from manufacturing equipment needed real-time processing and predictive maintenance insights.",
    solution: "Built a scalable data pipeline with real-time analytics and machine learning models for predictive maintenance.",
    results: [
      "90% reduction in unplanned downtime",
      "Real-time data processing at scale",
      "25% improvement in equipment efficiency",
      "$10M savings in maintenance costs"
    ],
    technologies: ["Apache Kafka", "Apache Spark", "TensorFlow", "InfluxDB", "Grafana"],
    image: "📊",
    color: "from-indigo-500 to-cyan-600"
  }
];

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Head>
        <title>Portfolio & Case Studies - Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our successful projects and case studies across AI, cloud infrastructure, cybersecurity, and data analytics. See how we've helped businesses transform."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Portfolio & Case Studies
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover how we've helped businesses across industries transform their operations with cutting-edge technology solutions. 
                From AI-powered diagnostics to cloud migration success stories.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">AI & Machine Learning</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Cloud Infrastructure</span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">Cybersecurity</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Data Analytics</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$500M+</div>
              <div className="text-gray-600">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Average Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-32 bg-gradient-to-r ${study.color} flex items-center justify-center text-4xl`}>
                    {study.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded">
                        {study.category}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">•</span>
                      <span className="text-sm text-gray-500 ml-2">{study.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                    
                    <div className="space-y-2 mb-4">
                      {study.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="text-gray-500 text-xs">+{study.technologies.length - 3} more</span>
                      )}
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all">
                      View Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Case Study */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded">
                    Featured Case Study
                  </span>
                  <span className="text-sm text-gray-500 ml-2">•</span>
                  <span className="text-sm text-gray-500 ml-2">Healthcare</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Diagnostics Platform</h2>
                <p className="text-lg text-gray-600 mb-6">
                  How we transformed medical diagnostics with AI, achieving 95% accuracy and reducing analysis time by 35%.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-600 text-sm">
                      Manual diagnostic processes were time-consuming and prone to human error, leading to delayed treatments and increased costs for a major hospital network.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-600 text-sm">
                      Developed a computer vision system using deep learning algorithms to analyze medical imaging data and provide accurate diagnostic recommendations in real-time.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">35%</div>
                    <div className="text-sm text-gray-600">Time Reduction</div>
                  </div>
                </div>

                <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Start Your Project
                </Link>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Results</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-medium text-gray-900">95% accuracy in diagnostic predictions</div>
                      <div className="text-sm text-gray-600">Surpassed human radiologist accuracy</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-medium text-gray-900">35% reduction in analysis time</div>
                      <div className="text-sm text-gray-600">From hours to minutes</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-medium text-gray-900">60% decrease in diagnostic errors</div>
                      <div className="text-sm text-gray-600">Improved patient outcomes</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <div className="font-medium text-gray-900">$2M annual cost savings</div>
                      <div className="text-sm text-gray-600">ROI achieved in 6 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600 text-sm">AI diagnostics, patient management, and medical imaging solutions</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Services</h3>
                <p className="text-gray-600 text-sm">Fraud detection, risk management, and regulatory compliance</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h3>
                <p className="text-gray-600 text-sm">IoT analytics, predictive maintenance, and process optimization</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Retail & E-commerce</h3>
                <p className="text-gray-600 text-sm">Personalization, inventory management, and customer analytics</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gaming & Entertainment</h3>
                <p className="text-gray-600 text-sm">Scalable platforms, real-time analytics, and user engagement</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 text-sm">Digital transformation, cloud migration, and process automation</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help you achieve similar results with your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}