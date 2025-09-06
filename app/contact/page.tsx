export const metadata = {
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',
  keywords: 'contact, support, AI services, micro SaaS, IT services, consulting'
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI and technology? Let's discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              We'd love to hear about your project and how we can help you achieve your goals.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-300">hello@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Response</h2>
            <p className="text-gray-300 mb-6">
              We typically respond to all inquiries within one business day.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Emergency Support</h3>
                <p className="text-gray-300">24/7 for critical issues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}