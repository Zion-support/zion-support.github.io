import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI solutions, micro SaaS development, and enterprise IT services. Quick response guarantee.',
  keywords: 'contact, AI solutions, micro SaaS, IT services, consulting'
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </div>
  );
}