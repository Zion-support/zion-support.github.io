import { Link } from 'react-router-dom';


export default function SupportPage() {
  const faqs = [
    {
      q: 'How do I open a support ticket?',
      a: 'Email kleber@ziontechgroup.com with a clear subject and any logs or screenshots. For critical issues, call +1 302 464 0950.'
    },
    {
      q: 'What SLAs do you offer?',
      a: 'Standard (best-effort), Priority (8h response), and Enterprise (1h response, 24/7).'
    },
    {
      q: 'Do you support on-prem and VPC deployments?',
      a: 'Yes. We support on-premises, VPC, and hybrid with secure access and change management.'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Support</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We respond fast and fix issues for good. Pick the channel that works best for you.</p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-medium">kleber@ziontechgroup.com</a>
            <p className="text-gray-600 mt-2">Ideal for non-urgent requests and feature questions.</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-medium">+1 302 464 0950</a>
            <p className="text-gray-600 mt-2">Use for urgent incidents. Available 24/7 for Enterprise SLAs.</p>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Knowledge Base</h3>
            <Link to="/guides" className="text-blue-600 hover:text-blue-700 font-medium">Implementation Guides</Link>
            <p className="text-gray-600 mt-2">How-tos, architecture patterns, and best practices.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="divide-y border rounded-xl overflow-hidden">
            {faqs.map((f, i) => (
              <div key={i} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

