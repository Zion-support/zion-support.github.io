import React from 'react';
import ResponsiveContainer from '../components/ResponsiveContainer';

const TaskManagementSAAS = () => {
  return (
    <>
      <Helmet >
        <title>Task Management SAAS - Zion Tech Group</>
        <meta name="description" content="Efficient task and project management solution." />
      </>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer >
            <div className="text-center">
              <h1 >
                Task Management SAAS
              </>
              <p >
                Efficient task and project management solution.
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

export default TaskManagementSAAS;
