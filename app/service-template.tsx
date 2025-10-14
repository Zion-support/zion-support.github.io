import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

  title,
  description,
  icon,
  benefits,
  features,
  pricing,
  seoTitle,
  seoDescription,
  seoKeywords;
}: ServicePageProps) {
  return (
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title>App - Zion Tech Group</title>
        <meta name="description" content="Professional app services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">App</h1>
          <p className="text-lg text-gray-300 mb-8">Professional app services coming soon.</p>
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
    <div>Content</div>
  );
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title>Service Template - Zion Tech Group</title>"
        <meta name="description" content="Professional service template services by Zion Tech Group." />
      </Helmet> }
      { /* Hero Section */ }"
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"
        <div className="max-w-6xl mx-auto text-center"></div>"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">

            Service Template;
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Professional service template services;
            designed to help your business grow and succeed.;
          </p>
        </div>
      </section>
      { /* Content Section */ }
            Service Template</h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Professional service template services

            designed to help your business grow and succeed.</p></div></section>{ /* Content Section */ }"
      <section className="py-16 px-4">"
        <div className="max-w-6xl mx-auto"></div>"
          <div className="grid md:grid-cols-2 gap-12 items-center"></div>

            <div></div>"
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>""
              <p className="text-lg text-gray-600 mb-6">"
                We provide comprehensive service template;
                solutions tailored to your specific needs and requirements.;
              </p>"
              <ul className="space-y-3">""
                <li className="flex items-center">""
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Custom solutions;
                </li>"
                <li className="flex items-center">""
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Expert consultation;
                </li>"
                <li className="flex items-center">""
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Ongoing support;
                </li>
              </ul>
            </div>"
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white"></div>""
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>""
              <p className="mb-6">"
                Ready to transform your business with our service template services?;
              </p>
              <a;"
                href="$1"""
                className="$1""
              >
                Contact Us;
              </a>
            </div>
          </div>
        </div>
      </section>

      { /* CTA Section */ }"
      <section className="py-16 px-4 bg-blue-600">"
        <div className="max-w-4xl mx-auto text-center"></div>"
          <h2 className="text-3xl font-bold text-white mb-6">

            Ready to Get Started?;
          </h2>"
          <p className="text-xl text-blue-100 mb-8">"
          </h2>"
          <p className="text-xl text-blue-100 mb-8">"
            Let"s discuss how our service template"
            services can help you achieve your goals.;
          </p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            </div></div><Link to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-center justify-center">
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More
            </Link>
          </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><div />
            </div></div><h2 className="text-3 xl font-boldtext-white mb-6"  >Key Benefits</h2>
            <ul className="w-5 h-5 ml-2" />
              {benefits.map((benefit, index) => (
                <li key="{index}" className="flexitems-start" />
                  <CheckCircle className="w-5 h-5 ml-2" />
                  <span className="text-gray-300"  >{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div />
            </div></div><h2 className="text-3 xl font-boldtext-white mb-6"  >Features</h2>
            <ul className="w-5 h-5 ml-2" />
              {features.map((feature, index) => (
                <li key="{index}" className="flexitems-start" />
                  <CheckCircle className="w-5 h-5 ml-2" />
                  <span className="text-gray-300"  >{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          </div></div><h2 className="text-3 xl font-boldtext-white mb-4"  >Pricing</h2>
          <p className="text-2 xl font-boldtext-cyan-400 mb-6">{pricing}</p>
          <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Contact Us for Details
        </Link>
      </div>
    </div>
  )
}
    </>;
);
};
