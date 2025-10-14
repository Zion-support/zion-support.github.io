import ResponsiveContainer from '../components/ResponsiveContainer';
const EmployeeManagementSAAS = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Employee Management SAAS - Zion Tech Group</title>
        <meta name="description" content="Comprehensive HR and employee management platform." />"
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <section className="py-20">"
          <ResponsiveContainer></ResponsiveContainer>
            <div className="text-center">"
              <h1>"','
                Employee Management SAAS;
              </h1>
              <p>"
                Comprehensive HR and employee management platform.
              </p>
              <Link to="/contact">"
                <FuturisticButton size="lg">"
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />"
                </FuturisticButton>
              </Link>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};
export default EmployeeManagementSAAS;