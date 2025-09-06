
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-4">
              Leading technology solutions for modern businesses. We provide comprehensive micro SaaS, AI, IT, blockchain, and data analytics services.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">📧 kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">📞 +1 302 464 0950</p>
              <p className="text-gray-400 text-sm">📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>

          {/* Services */}
          <div>
            </ul>
          </div>
        </div>

