import React from "react";
import SEOHead from "../components/SEOHead";

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: "AI Chatbot Builder Demo",
      description:
        "See how easy it is to create intelligent chatbots for your business",
      duration: "15 min",
      category: "AI Services",
      features: [
        "Natural Language Processing",
        "Multi-channel Support",
        "Analytics Dashboard",
      ],
    },
    {
      title: "Data Analytics Dashboard",
      description: "Experience our powerful analytics and visualization tools",
      duration: "20 min",
      category: "Data Analytics",
      features: [
        "Real-time Dashboards",
        "Custom Reports",
        "Predictive Analytics",
      ],
    },
    {
      title: "Cloud Infrastructure Demo",
      description: "Explore our scalable cloud solutions and management tools",
      duration: "25 min",
      category: "Cloud Computing",
      features: ["Auto-scaling", "Monitoring", "Security Features"],
    },
    {
      title: "AI Fraud Detection",
      description: "Witness real-time fraud detection in action",
      duration: "10 min",
      category: "AI Security",
      features: ["Real-time Analysis", "Machine Learning", "Alert System"],
    },
    {
      title: "API Development Platform",
      description: "See how to build and manage APIs with our platform",
      duration: "30 min",
      category: "Development",
      features: ["API Builder", "Testing Tools", "Documentation Generator"],
    },
    {
      title: "Digital Transformation Suite",
      description: "Complete digital transformation solution overview",
      duration: "45 min",
      category: "Strategy",
      features: [
        "Process Automation",
        "Workflow Management",
        "Integration Tools",
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Live Demos - Zion Tech Group"
        description="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business."
        keywords="AI demos, IT demos, live demonstrations, product demos, technology showcase"
        canonicalUrl="https://ziontechgroup.com/demo"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Live Product Demos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand. Watch live
              demonstrations and see how our technology can transform your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {demos.map((demo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {demo.category}
                  </span>
                  <span className="text-sm text-gray-500">{demo.duration}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {demo.title}
                </h3>
                <p className="text-gray-600 mb-4">{demo.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {demo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Watch Demo
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Schedule a Personal Demo
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Get a personalized demonstration tailored to your specific
              business needs and requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What to Expect:
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Personalized solution walkthrough
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Q&A session with our experts
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Custom use case scenarios
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Implementation roadmap
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Pricing and timeline discussion
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Available Time Slots:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">
                      10:00 AM - 2:00 PM EST
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Emergency Demos</span>
                    <span className="text-gray-600">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to See It in Action?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your personalized demo today and discover how our
              solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
