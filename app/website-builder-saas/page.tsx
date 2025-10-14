import ResponsiveContainer from '../components/ResponsiveContainer';
const WebsiteBuilderSAAS = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Website Builder SAAS - Zion Tech Group</title>
        <meta name="description" content="Professional website builder with drag-and-drop functionality." />"
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <section className="py-20">"
          <ResponsiveContainer></ResponsiveContainer>
            <div className="text-center">"
              <h1>"','
                Website Builder SAAS;
              </h1>
              <p>"
                Professional website builder with drag-and-drop functionality.
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
export default WebsiteBuilderSAAS;