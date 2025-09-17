import React from 'react';

export default function AIPlaybook2025(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full text-sm font-semibold mb-4">
          New Resource · 2025
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Playbook 2025</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          A practical guide to designing, deploying, and scaling AI systems that drive real business outcomes.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=900&q=80&auto=format&fit=crop"
              alt="AI Playbook 2025 Preview"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">What you'll learn</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Blueprints for AI product discovery and problem framing</li>
                <li>Evaluation frameworks: offline metrics, AB testing, and human-in-the-loop</li>
                <li>Productionizing: observability, safety, cost control, and governance</li>
                <li>Roadmaps and org patterns for AI platform teams</li>
              </ul>
              <a
                href="#download"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Get the PDF
              </a>
            </div>
          </div>
        </div>

        <section id="download" className="mt-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Download the AI Playbook 2025</h3>
            <p className="text-white/90 mb-6">Free, no email required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/assets/AI-Playbook-2025.pdf"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
                download
              >
                Download PDF
              </a>
              <a
                href="/pages/InnovativeServicesShowcase2025"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}