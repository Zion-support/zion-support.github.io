import React from "react";"
import { Helmet } from "react-helmet-async";
const PagePage = () => {
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>Page - Zion Tech Group</title>"
        <meta name="description" content="Page - Zion Tech Group" />
      </Helmet>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>"
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-24" id="solutions">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your enterprise needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Autonomous Operations',
                description: 'Self-managing systems that optimize enterprise operations',
              },
              {
                title: 'Business Intelligence',
                description: 'Data-driven insights for strategic decision making',
              },
              {
                title: 'Cloud Services',
                description: 'Scalable and secure cloud infrastructure solutions',
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default PagePage;"
