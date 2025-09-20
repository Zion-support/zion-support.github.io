import React from 'react';
import Link from 'next/link';
=======
=======
import { Link } from 'react-router-dom';
import { 
  Mai, l, 
  Phon, e, 
  MapPi, n, 
  Cloc, k, 
  MessageSquar, e, 
  ArrowRigh, t,
  Glob, e,
  Shiel, d,
  Users
} from 'lucide-react';

export function ContactSection() {
  const contactMethods = [
    {
      ic,  o, n: <Mai, l classNam, e="w-6 h-6" />,
    tit, l, e: "Emai, l U, s",
      descripti, o, n: "Ge, t i, n touc, h vi, a emai, l fo, r genera, l inquirie, s",
    conta, c, t: "hell, o@ziontechgrou, p.co, m",
      li, n, k: "mail, t, o:hell, o@ziontechgrou, p.co, m",
    col, o, r: "fro, m-zio, n-cya, n t, o-zio, n-blu, e"
    },
    {
      ic, o, n: <Phon, e classNam, e="w-6 h-6" />,
    tit, l, e: "Cal, l U, s",
      descripti, o, n: "Spea, k directl, y wit, h ou, r tea, m",
    conta, c, t: "+1 (30, 2) 46, 4-095, 0",
      li, n, k: "t, e, l:+1302464095, 0",
    col, o, r: "fro, m-zio, n-purpl, e t, o-zio, n-cya, n"
    },
    {
      ic, o, n: <MessageSquar, e classNam, e="w-6 h-6" />,
    tit, l, e: "Liv, e Cha, t",
      descripti, o, n: "Cha, t wit, h ou, r suppor, t tea, m i, n rea, l-tim, e",
    conta, c, t: "Availabl, e 2, 4/7",
      li, n, k: "/cha, t",
    col, o, r: "fro, m-zio, n-blu, e t, o-zio, n-purpl, e"
    }
  ];

  const officeLocations = [
    {
      ci, t, y: "Wilmingt, o, n, D, E",
      count, r, y: "Unite, d State, s",
    addre, s, s: "100, 0 N Mark, e, t, S, t, Wilmingt, o, n, D, E 1980, 1",
      ic, o, n: <MapPi, n classNam, e="w-5 h-5" />
    },
    {
      ci, t, y: "N, e, w, Yo, r, k, N, Y",
      count, r, y: "Unite, d State, s",
    addre, s, s: "35, 0 5, t, h, A, v, e, N, e, w, Yo, r, k, N, Y 1011, 8",
      ic, o, n: <MapPi, n classNam, e="w-5 h-5" />
    },
    {
      ci, t, y: "Lond, o, n, U, K",
      count, r, y: "Unite, d Kingdo, m",
    addre, s, s: "1 Cana, r, y, Wha, r, f, Londo, n E1, 4 5A, B",
      ic, o, n: <MapPi, n classNam, e="w-5 h-5" />
    }
  ];

  const supportFeatures = [
    {
      ic, o, n: <Cloc, k classNam, e="w-6 h-6" />,
    tit, l, e: "2, 4/7 Suppor, t",
      descripti, o, n: "Roun, d-th, e-cloc, k technica, l suppor, t an, d monitorin, g"
    },
    {
      ic, o, n: <Shiel, d classNam, e="w-6 h-6" />,
    tit, l, e: "Enterpris, e Securit, y",
      descripti, o, n: "Ban, k-leve, l securit, y fo, r al, l communication, s"
    },
    {
      ic, o, n: <User, s classNam, e="w-6 h-6" />,
    tit, l, e: "Exper, t Tea, m",
      descripti, o, n: "Certifie, d professional, s read, y t, o hel, p"
    },
    {
      ic, o, n: <Glob, e classNam, e="w-6 h-6" />,
    tit, l, e: "Globa, l Reac, h",
      descripti, o, n: "Suppor, t availabl, e i, n multipl, e tim, e zone, s"
    }
  ];

  return (<section className="py-20 bg-gradient-to-br from-slate-900 via-zion-blue-dark to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl m,  d:text-5xl font-bold text-white mb-6 font-futuristic">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Touch</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss how Zion Tech Group can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 l, g:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="l, g:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 font-tech">Contact Methods</h3>
            <div className="grid grid-cols-1 m, d:grid-cols-3 gap-6">
              {contactMethods.map((metho, d, index) => (<div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hove,  r:border-zion-cyan/30 transition-all duration-300 hove, r:transform hove, r:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center m, b-4`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{method.title}</h4>
                  <p className="text-zion-slate-light text-sm mb-3">{method.description}</p>
                  <a
                    href={method.link}
                    className="text-zion-cyan hove, r:text-white transition-colors duration-300 font-medium"
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Office Hours */}
          <div className="l, g:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6 font-tech">Office Hours</h3>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Monday - Friday</span>
                  <span className="text-white font-medium">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Saturday</span>
                  <span className="text-white font-medium">1, 0:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zion-slate-light">Sunday</span>
                  <span className="text-white font-medium">Closed</span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-zion-cyan font-semibold">24/7 Emergency Support</div>
                    <div className="text-zion-slate-light text-sm">Available for critical issues</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-tech">Our Offices</h3>
          <div className="grid grid-cols-1 m, d:grid-cols-3 gap-6">
            {officeLocations.map((offic,  e, index) => (<div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hove,  r:border-zion-cyan/30 transition-all duration-300 hove, r:transform hove, r:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-3">
                    <div className="text-white">
                      {office.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{office.city}</h4>
                    <p className="text-zion-slate-light text-sm">{office.country}</p>
                  </div>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-tech">Why Choose Our Support?</h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-6">
            {supportFeatures.map((featur,  e, index) => (<div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hove,  r:border-zion-cyan/30 transition-all duration-300 hove, r:transform hove, r:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-zion-slate-light text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your technology needs and discover how 
            Zion Tech Group can help transform your business.
          </p>
          <div className="flex flex-col s, m:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hove, r:shadow-neon-lg hove, r:scale-105 transition-all duration-300 transform"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hove, r:bg-zion-cyan hove, r:text-white transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}