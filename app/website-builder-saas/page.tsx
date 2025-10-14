import ResponsiveContainer from '../components/ResponsiveContainer';

const WebsiteBuilderSAAS = () => {
  return (
    <></>
      <Helmet></Helmet>
        <title>Website Builder SAAS - Zion Tech Group</title>
        <meta name="description" content="Professional website builder with drag-and-drop functionality." /></meta>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="py-20"></section>
          <ResponsiveContainer></ResponsiveContainer>
            <div className="text-center"></div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
                Website Builder SAAS
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Professional website builder with drag-and-drop functionality.
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

export default WebsiteBuilderSAAS;
'