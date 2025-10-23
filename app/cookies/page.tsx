
const CookiesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Technology",
      description:
        "Cutting-edge solutions powered by the latest technology and AI.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized for speed and efficiency with real-time processing capabilities.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption and compliance standards.",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description:
        "Scale effortlessly across multiple regions with automatic load balancing.",
    },
  ];

  return (
    <React.Fragment>
      <Helmet>

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                Get Started
              </a>

                View All Services
              </a>
            </div>
          </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you implement this solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                Start Your Project
              </a>

                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CookiesPage;
