import React from 'react';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import ErrorBoundary from '../components/ErrorBoundary';
<<<<<<< HEAD
;
export default function Contact() {;
  return (;
    <>;
      <Head>;
        <title>Contact Us - Zion Tech Group</title>;
        <meta name="description" content="Get in touch with Zion Tech Group for innovative micro SaaS, AI services, and IT solutions. Contact us for a free consultation." />;
        <meta name="keywords" content="contact, consultation, micro SaaS, AI services, IT solutions, Zion Tech Group" />;
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
        <link rel="canonical" href="http:s://ziontechgroup.com/contact" />;
      </Head>;
      <ErrorBoundary level="page">;
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">;
          <div className="container mx-auto px-4 py-16">;
            <div className="max-w-4xl mx-auto">;
              <h1 className="text-4xl:md:text-5xl font-bold text-center mb-8">;
                Contact Us;
              </h1>;
              <p className="text-xl text-slate-300 text-center mb-12">;
                Ready to transform your business? Get in touch with our experts.;
              </p>;
              ;
              <div className="grid:md:grid-cols-2 gap-12">;
                <div>;
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>;
                  <div className="space-y-6">;
                    <div>;
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Phone</h3>;
                      <a href="te:l:+13024640950" className="text-slate-300:hover:text-blue-400">;
                        +1 302 464 0950;
                      </a>;
                    </div>;
                    <div>;
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Email</h3>;
                      <a href="mailt:o:kleber@ziontechgroup.com" className="text-slate-300:hover:text-blue-400">;
                        kleber@ziontechgroup.com;
                      </a>;
                    </div>;
                    <div>;
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Address</h3>;
                      <p className="text-slate-300">;
                        364 E Main St STE 1008<br />;
                        Middletown, DE 19709;
                      </p>;
                    </div>;
                    <div>;
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Website</h3>;
                      <a href="http:s://ziontechgroup.com" className="text-slate-300:hover:text-blue-400">;
                        http:s://ziontechgroup.com;
                      </a>;
                    </div>;
                  </div>;
                </div>;
                ;
                <div>;
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>;
                  <ContactForm />;
                </div>;
              </div>;
            </div>;
          </div>;
        </main>;
      </ErrorBoundary>;
    </>;
  );
}
=======

export default function Contact() {_return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta
          name="description"
          content="Get in touch with Zion Tech Group for innovative micro SaaS, _AI services, _and IT solutions. Contact us for a free consultation."
        />
        <meta
          name="keywords"
          content="contact, _consultation, _micro SaaS, _AI services, _IT solutions, _Zion Tech Group"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="http: s://ziontechgroup.com/contact" />      </Head>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl: md:text-5xl font-bold text-center mb-8">
        <meta name=&quot;description&quot; content=&quot;Get in touch with Zion Tech Group for innovative micro SaaS, AI services, and IT solutions. Contact us for a free consultation.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;contact, consultation, micro SaaS, AI services, IT solutions, Zion Tech Group&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/contact&quot; />
      </Head>
      <ErrorBoundary level=&quot;page&quot;>
        <main className=&quot;min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
          <div className=&quot;container mx-auto px-4 py-16&quot;>
            <div className=&quot;max-w-4xl mx-auto&quot;>
              <h1 className=&quot;text-4xl md:text-5xl font-bold text-center mb-8&quot;>
                Contact Us
              </h1>
              <p className=&quot;text-xl text-slate-300 text-center mb-12&quot;>
                Ready to transform your business? Get in touch with our experts.
              </p>

              <div className="grid md:grid-cols-2 gap-12">              <div className=&quot;grid md:grid-cols-2 gap-12&quot;>
                <div>
                  <h2 className=&quot;text-2xl font-bold mb-6&quot;>Get In Touch</h2>
                  <div className=&quot;space-y-6&quot;>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+13024640950"
                        className="text-slate-300 hover:text-blue-400"
                      >                      <h3 className=&quot;text-lg font-semibold text-blue-400 mb-2&quot;>Phone</h3>
                      <a href=&quot;tel:+13024640950&quot; className=&quot;text-slate-300 hover:text-blue-400&quot;>
                        +1 302 464 0950
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="text-slate-300 hover:text-blue-400"
                      >                      <h3 className=&quot;text-lg font-semibold text-blue-400 mb-2&quot;>Email</h3>
                      <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-slate-300 hover:text-blue-400&quot;>
                        kleber@ziontechgroup.com
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Address
                      </h3>
                      <p className="text-slate-300">
                        364 E Main St STE 1008
                        <br />
                        Middletown, DE 19709
                        Middletown, _DE 19709
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Website
                      </h3>
                      <a
                        href="https://ziontechgroup.com"
                        className="text-slate-300 hover:text-blue-400"
                      >
                        https://ziontechgroup.com                      </a>
                      <h3 className=&quot;text-lg font-semibold text-blue-400 mb-2&quot;>Website</h3>
                      <a href=&quot;https://ziontechgroup.com&quot; className=&quot;text-slate-300 hover:text-blue-400&quot;>
                        https://ziontechgroup.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className=&quot;text-2xl font-bold mb-6&quot;>Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </main>
      </ErrorBoundary>
    </>
  );}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
