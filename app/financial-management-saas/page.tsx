import ResponsiveContainer from '../components/ResponsiveContainer';
const FinancialManagementSAAS = () => {
  return (
    <></>
      <Helmet></Helmet>
        <title>Financial Management SAAS - Zion Tech Group</title>
        <meta name="description" content="Professional financial management and accounting solution." /></meta>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20"></section>
          <ResponsiveContainer></ResponsiveContainer>
            <div className="text-center"></div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
                Financial Management SAAS
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Professional financial management and accounting solution.
              </p>
              <Link to="/contact"></Link>
                <FuturisticButton size="lg"></FuturisticButton>
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
                </FuturisticButton>
              </Link>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default FinancialManagementSAAS;
'