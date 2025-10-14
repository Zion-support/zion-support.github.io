import ResponsiveContainer from '../components/ResponsiveContainer';

const SocialMediaManagementSAAS = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Management SAAS - Zion Tech Group</title>
        <meta name="description" content="Complete social media management and marketing solution." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Social Media Management SAAS
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete social media management and marketing solution.
              </p>
              <Link to="/contact">
                <FuturisticButton size="lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </Link>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default SocialMediaManagementSAAS;
