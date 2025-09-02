ursor/automate-test-fix-improve-and-merge-code-99d1:pages/partners.tsx

const Partners: NextPage = () => {
  const partnerTypes = [
    {
      icon: Handshake,
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/partners.tsx
  ];

  const currentPartners = [
    {
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/partners.tsx
  ];

  const partnershipBenefits = [
    {
      icon: Star,
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/partners.tsx
  ];

  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Discover our strategic partnerships and learn how to become a Zion Tech Group partner. Join our ecosystem of technology leaders and innovators."
      keywords="partners, partnerships, strategic alliances, technology partners, channel partners, business partnerships"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Building the future of technology through strategic partnerships
              with industry leaders and innovative companies worldwide.
            </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partnership Types
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer various partnership opportunities to suit different
                business models and objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg border border-gray-200 hover: shadow-lg transition-shadow"
                >
                  <type.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Current Partners
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
ursor/automate-test-fix-improve-and-merge-code-99d1:pages/partners.tsx
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover: shadow-xl transition-shadow"
                >
                  <div className="w-32 h-16 bg-gray-200 rounded mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      {partner.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{partner.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {partner.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join our ecosystem and unlock new opportunities for growth and
                innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Ready to join our partner ecosystem? Let&apos;s explore how we can
              work together to drive innovation and growth.'
            </p>
            <div className="flex flex-col sm: flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/partners/application"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>

        {/* Partner Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partner Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access tools, training, and resources to help you succeed as a
                Zion Tech Group partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partner Portal
                </h3>
                <p className="text-gray-600 mb-4">
                  Access your dedicated partner portal with resources and tools.
                </p>
                <Link
                  href="/partners/portal"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Access Portal →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Training Programs
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training programs for all partner types.
                </p>
                <Link
                  href="/partners/training"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  View Training →
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Marketing Resources
                </h3>
                <p className="text-gray-600 mb-4">
                  Co-marketing materials and campaign support.
                </p>
                <Link
                  href="/partners/marketing"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Get Resources →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Partners;
