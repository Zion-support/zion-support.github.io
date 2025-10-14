import ResponsiveContainer from '../components/ResponsiveContainer';

const CustomerRelationshipSAAS = () => {
  return (
    <>
      <Helmet>
        <title>Customer Relationship SAAS - Zion Tech Group</title>
        <meta name="description" content="Advanced CRM solution for managing customer relationships and sales." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Customer Relationship SAAS
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced CRM solution for managing customer relationships and sales.
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

export default CustomerRelationshipSAAS;
