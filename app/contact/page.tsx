import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPa g e: React.FC = () => {
return (
    <>
      <Helmet></Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultatio n s and support." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900">
        <div className="max-w-7xl mx-autop x-4sm:px-6lg:px-8pt-20pb-16">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-boldtext-whitemb-6">
              Contact Us
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
              Ready to transform your business? Get in touch with our team of experts.;
            </p>
            <div className="max-w-mdmx-auto">
              <form className="space-y-4">
                <input;
                  type="text"
                  placeholder="Your Name";
                  className="w-fullpx-4py-3rounded-lgbg-gray-800text-whiteborderborder-gray-600focus:border-cyan-400focus:outline-none"
                />
                <input;
                  type="email"
                  placeholder="Your Email";
                  className="w-fullpx-4py-3rounded-lgbg-gray-800text-whiteborderborder-gray-600focus:border-cyan-400focus:outline-none"
                />
                <textarea;
                  placeholder="Your Message";
                  rows={4}
                  className="w-fullpx-4py-3rounded-lgbg-gray-800text-whiteborderborder-gray-600focus:border-cyan-400focus:outline-none"
                />
                <button;
                  type="submit"
                  className="w-fullbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-3rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300"
                >
                  Send Message;
                </button>
              </form>
            </div>
        </div>
    </>
  );
};

export default ContactPa g e;