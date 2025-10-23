

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Optimization",
      company: "TechRetail Inc.",
      industry: "E-commerce",
      challenge: "Slow loading times and poor user experience affecting sales",
      solution: "Implemented AI-powered optimization and cloud infrastructure",
      results: {
        performance: "300% faster load times",
        conversion: "45% increase in conversions",
        revenue: "$2.5M additional revenue",
        satisfaction: "95% customer satisfaction",
      },
      image: "🛒",
      featured: true,
    },
    {
      id: 2,
      title: "Healthcare Data Analytics",
      company: "MediCare Solutions",
      industry: "Healthcare",
      challenge: "Inefficient patient data analysis and reporting",
      solution: "Custom AI analytics platform with real-time insights",
      results: {
        performance: "80% faster data processing",
        conversion: "60% reduction in analysis time",
        revenue: "$1.8M cost savings",
        satisfaction: "98% accuracy rate",
      },
      image: "🏥",
      featured: false,
    },
    {
      id: 3,
      title: "Financial Services Automation",
      company: "FinanceFlow Corp",
      industry: "Financial Services",
      challenge: "Manual processes causing delays and errors",
      solution: "AI-powered automation and workflow optimization",
      results: {
        performance: "90% process automation",
        conversion: "70% faster processing",
        revenue: "$3.2M operational savings",
        satisfaction: "99.5% accuracy rate",
      },
      image: "💼",
      featured: false,
    },
  ];

  return (
    <>
      <Helmet>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI
              and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View All Case Studies
              </button>{" "}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesPage;
