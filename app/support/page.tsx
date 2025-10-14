return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
"
      title: "Live Chat","
      description: "Get instant help from our support team","
      action: "Start Chat","
      color: "from-blue-500 to-cyan-500" },
    {
icon: Mail,"
      title: "Email Support","
      description: "Call us for immediate assistance","
      action: "Call Now","
      color: "from-green-500 to-emerald-500" },
    {
icon: Phone,"
      title: "Phone Support","
      description: "Call us for immediate assistance","
      action: "Call Now","
      color: "from-purple-500 to-pink-500" },
    {
      icon: BookOpen,"
      title: "Documentation","
      description: "Browse our comprehensive guides","
      action: "View Docs",
      color: 'from-orange-500 to-red-500'
    {'"
      icon: "Book",';'"
      title: "Documentation",';'"
      description: "Browse our comprehensive guides",';'"
      action: "View Docs",';'
      color: 'from-orange-500 to-red-500'';}
    }
  ];
  const faqs = [{ '"
      question: "How do I get started with your AI services?",';'
      answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll help you identify the best AI solutions for your business needs.''; }
    },
    { '"
      question: "What is your response time for support requests?",';'
      answer: 'We typically respond to support requests within 2-4 hours during business hours, and within 24 hours for non-urgent matters.''; }
    },
    { '"
      question: "Do you offer training for your solutions?",';'
      answer: 'Yes! We provide comprehensive training programs for all our solutions, including documentation, video tutorials, and live training sessions.''; }
    },
    { '"
      question: "What if I need custom development?",';'
      answer: 'We offer custom development services for unique requirements. Contact our team to discuss your specific needs and get a quote.''; }

    }
  ];
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Professional support services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Support</h1>
          <p className="text-lg text-gray-300 mb-8">Professional support services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
}
"
