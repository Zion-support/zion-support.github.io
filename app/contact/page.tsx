import React, {useState} from 'react'
import { Helmet } from 'react-helmet-async'
import {Phone, Mail, MapPin, Clock, Send} from 'lucide-react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ziontechgroup.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Tech Street, Innovation City',
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST'
    }
  ];

  const services = [
    'AI Solutions',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Data Analytics',
    'Web Development',
    'Mobile Development',
    'IT Consulting',
    'Other'
  ];
return (
    <>

      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our team for consultations, support, and project inquiries." />
        <meta name="keywords" content="contact, support, consultation, AI solutions, IT services, get in touch" />
      </Helmet>

      <Navigation />

              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Ready to transform your business? Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
<Footer />
    </>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default ContactPage
          </div>
</p></p></p></p>
