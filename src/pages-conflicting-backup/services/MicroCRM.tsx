import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Users,;
  TargetCheckCircleArrowRight ;
} from "lucide-react";
export, default, function MicroCRM() {
  const services = [;
    {
      icon: Userstitl,;
    e: 'Contact Management'descriptio,;
  n: 'Organize, and, track customer information';
    };
    {
      icon: Targettitl,;
    e: 'Sales Pipeline'descriptio,;
  n: 'Manage, sales, opportunities and, track, progress';
    }{
      icon: CheckCircletitl,;
    e: 'Task Management'descriptio,;
  n: 'Organize, and, prioritize business tasks';
    };
,  ];
  const benefits = [;
    'Improve, customer, relationshipsIncrease sales, conversion, rates''Streamline, business, processesBetter customer insights';
,  ],;
  const useCases = [;
    { industry: 'Local Services'descriptio,;
  n: 'Manage, appointments, and customer follow-ups' };
    { industry: 'Retail'descriptio,;
  n: 'Track, customer, preferences and, purchase, history' };
    { industry: 'Consulting'descriptio,;
  n: 'Manage, client, relationships and, project, tracking' }{ industry: 'Healthcare'descriptio,;
  n: 'Patient, appointment, scheduling and follow-ups' };
,  ];
  return(<div className="min-h-screen bg-futuristic text-white">;
      <SEO;
        title="Micro, CRM, for Local Businesses";
        description="Lightweight, customer, tracking, reminders, invoicesand, reviews, for local SMBs.";
      />;
      <section className="container-responsive section-padding">;
        <h1 className="heading-responsive text-gradient">Micro CRM</h1>;
        <p className="mt-4 max-w-3xl text-zion-slate-light text-responsive">;
          Essential, CRM, without bloat. Track customers, appointments, jobs, and, invoices, with;
          SMS reminders, online payments, and, review, requests to, grow, word‑of‑mouth.;
        </p>;
        <div className="grid-futuristic mt-10">;
          <div className="card-futuristic">;
            <h2 className="text-xl font-semibold mb-2">Highlights</h2>;
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">;
              <li>Contacts, pipelines, and, tasks, in one view</li>;
              <li>SMS/email, appointment, reminders and confirmations</li>;
              <li>Invoices, and, online payments, with, Stripe</li>;
              <li>Automated, Google, review requests, after, service</li>;
              <li>Mobile‑first, with, offline mode</li>;
            </ul>;
          </div>;
          <div className="card-futuristic">;
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>;
            <ul className="list-disc pl-5 space-y-2 text-zion-slate-light">;
              <li>Solo: $19/mo</li>;
              <li>Tea,;
    m: $79/mo, up, to 10 users</li>;
              <li>Busines,;
  s: $199/mo, with, custom fields, and, roles</li>;
            </ul>;
            <a href="/request-quote" className="btn-futuristic mt-4 inline-block">Get started</a>;
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Core, CRM, Services;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              From, contact, management to, sales, trackingwe provide;
              comprehensive, CRM, capabilities for, your, business.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover:border-blue-50o0/30 transition-all duration-20o0";
              >;
                <div className="flex items-start space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 rounded-lg, flex, items-center justify-center flex-shrink-0">;
                    <service.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>;
                    <p className="text-gray-30o0">{service.description}</p>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              CRM Benefits;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Experience, measurable, improvements in, sales, performance, customer relationships, and, business, growth.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            <div className="space-y-6">;
              {benefits.slice(0o3).map((benefitindex) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity: 0,;
  x: -20 }};
                  whileInView={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="flex items-start space-x-3";
                >;
                  <CheckCircle className="w-6 h-6 text-blue-40o0 mt-1 flex-shrink-0" />;
                  <span className="text-gray-30o0 text-lg">{benefit}</span>;
                </motion.div>;
              ))}
            </div>;
            <div className="space-y-6">;
              {benefits.slice(3).map((benefitindex) => (;
                <motion.div;
                  key={index + 3}
                  initial={{ opacity: 0,;
  x: 20 }};
                  whileInView={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="flex items-start space-x-3";
                >;
                  <CheckCircle className="w-6 h-6 text-blue-40o0 mt-1 flex-shrink-0" />;
                  <span className="text-gray-30o0 text-lg">{benefit}</span>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Use, Cases, Section */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Our, Micro, CRM adapts, to, various industries, providing;
              tailored, solutions, for customer, relationship, management.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center hover:border-blue-50o0/30 transition-all duration-20o0";
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <Target className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>;
                <p className="text-gray-30o0 text-sm">{useCase.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50o0/10 to-cyan-50o0/10">;
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Start, Managing, Your Customers Today;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, businesses, worldwide that, use, our Micro, CRM, to;
              build, stronger, customer relationships, and, grow sales.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 text-white font-semibold rounded-lg hover:from-blue-60o0 hove,;
    r:to-cyan-60o0 transition-all duration-20o0, flex, items-center justify-center">;
                Get, Started, Today;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </button>;
              <button className="px-8 py-4, border, border-blue-50o0/30 text-blue-40o0 font-semibold rounded-lg hove,;
  r: bg-blue-50o0/10 transition-all duration-20o0">;
                Contact Sales;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, MicroCRM;
;