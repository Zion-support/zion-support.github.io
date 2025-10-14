import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ProjectManagementSAAS = () => {
  return (
    <>
      <Helmet >
        <title>Project Management SAAS - Zion Tech Group</>
        <meta name="description" content="Comprehensive project management solution for teams and organizations." />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center">
              <h1 >
                Project Management SAAS
              </>
              <p >
                Comprehensive project management solution for teams and organizations.
              </>
              <Link to="/contact">
                <FuturisticButton size="lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              </>
            </>
          </>
        </>
      </>
    </>
  );
};

export default ProjectManagementSAAS;
