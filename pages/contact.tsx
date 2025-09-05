import React from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout title="Contact Us - Zion Tech Group">
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h1>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 text-center mb-8">
              We'd love to hear from you! Please reach out using the information below or fill out the form.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-gray-800 font-semibold">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-600 mb-2" />
                <p className="text-gray-800 font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-600 mb-2" />
                <p className="text-gray-800 font-semibold">364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}