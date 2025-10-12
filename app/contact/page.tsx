import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Contact() {

=======
export default function ContactPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
export default ContactPage;
const ContactPage: React.FC = () => {
>>>>>>> origin/main
  return (
<<<<<<< HEAD

        <>
      <title>Contact - Zion Tech Group</title>

      </>
  );
}

=======
    <></>
      <Helmet></Helmet>
        <title>Contact - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD

            <h1 className="text-4xl font-bold text-white mb-6">Contact</h1>
            <p className="text-lg text-gray-300 mb-8">Professional contact services coming soon.</p>
            
              Contact Us

  );
=======
        <meta name="description" content="Professional contact by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Contact</h1>
          <p className="text-lg text-gray-300 mb-8">Professional contact coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations and support." /></meta>
      </Helmet>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="max-w-7xlmx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xlmd:text-6xl font-bold text-white  mb-6"></h1>
              Contact Us;
            </h1>
            <p className="text-xltext-gray-300 mb-8 max-w-3xl  mx-auto"></p>
              Ready to transform your business? Get in touch with our team of experts.
            </p>
            <div className="max-w-mdmx-auto"></div>
              <form className="space-y-4"></form>
                <input;
                  type="text"
                  placeholder="Your Name"
                  className="w-fullpx-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
                /></input>
                <input;
                  type="email"
                  placeholder="Your Email"
                  className="w-fullpx-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
                /></input>
                <textarea;
                  placeholder="Your Message"
                  rows={4}
                  className="w-fullpx-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
                /></textarea>
                <button;
                  type="submit"
                  className="w-fullbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                ></button>
                  Send Message;
                </button>
              </form>
            </div>
        </div>
    </>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
