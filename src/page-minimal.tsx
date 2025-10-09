import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
const PageMinimalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page Minimal
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Blog Post
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This blog post is under development. Please check back soon for the full content.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default PageMinimalPage;