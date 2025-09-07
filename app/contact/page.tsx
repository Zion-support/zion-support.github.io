import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI solutions, micro SaaS development, and enterprise IT services. Quick response guarantee.',
  keywords: 'contact, AI solutions, micro SaaS, IT services, consulting'
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our AI, micro SaaS, and IT solutions can accelerate your growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">hello@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Tech Street<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}