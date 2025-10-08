import React from 'react';

export default function EnterprisePage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl mb-8">
                Transform your business with our cutting-edge enterprise solutions
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Enterprise Solutions
            </h2>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn more
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
