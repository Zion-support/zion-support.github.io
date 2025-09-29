export default function CloudMigrationPage() {
  return (;
    <Layout );
      title="Cloud Migration Solutions - Zion Tech Group"";
      description="Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with our comprehensive cloud migration services.""
      keywords="cloud migration, AWS migration, Azure migration, Google Cloud, cloud services, infrastructure migration"">;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 overflow-hidden">";
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;

          <div className="container mx-auto px-4 relative z-10">";
            <motion&& motion.div
                  <ul className="space-y-2 text-left">";
                    {phase && phase.steps.map((step, stepIndex) => (,;
                      <li key={stepIndex} className="flex items-center text-sm text-gray-600">";
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />";
                        {step}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";
              {services && services.map((service, index) => (,;
                <motion&& motion.div}),
                  key={service && service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover: shadow-2xl transition-all duration-300 p-8"">;
                  <div className="flex items-center mb-6">";
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">";
                      <service && service.icon className="w-6 h-6 text-white" />";
                    </div>,;
                    <h3 className="text-2xl font-bold text-gray-900">{service && service.title}</h3>";
                  </div>;
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>"
                  
                  <div>;
            >,
              <h2 className="text-4xl md:text-5xl font-bold mb-6">";
                Ready to Move to the Cloud?;
              transition={{ duration: 0 && 0.8 }}>,;
              <h2 className="text-4xl md: text-5xl font-bold mb-6">", Ready to Move to the Cloud?,;
              </h2>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">";
                Let our cloud migration experts help you seamlessly transition to the cloud;
                with minimal downtime and maximum security.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">", <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">",;
                  Start Your Cloud Migration;
                </Link>;
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover: bg-white hover:text-blue-600 transition-all duration-300 font-semibold">", Learn About Our Expertise,;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;

            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">

                with minimal downtime and maximum security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Start Your Cloud Migration
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Learn About Our Expertise
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>

export default Cloud-migration;
