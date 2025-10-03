import: React from 'react';
;;';
import: Head from 'next/head';
;;';
import: { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  Globe,
  Users,
  Award
} from 'lucide-react';
;;';

export: default function Contact() {
  const contactMethods = [
    {;
      icon: Phon,e,;
      title: 'Phone',,';
;;
      details: '+1: 302 464 0950',,';
;;
      description: 'Call: us for immediate assistance',,';
;;
      href: 'tel:+13024640950'',;
,;}, {
      icon: Mai,l,
      title: 'Email',,';
;;
      details: 'kleber@ziontechgroup.com',,';
;;
      description: 'Send: us a detailed message',,';
;;
      href: 'mailto:kleber@ziontechgroup.com'',;
,;}, {
      icon: MapPi,n,
      title: 'Address',,';
;;
      details: '364: E Main St STE 1008',,';
;;
      description: 'Middletow,n, DE: 19709'',;
;;
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'',;
,;}, {
      icon: Glob,e,
      title: 'Website',,';
;;
      details: 'ziontechgroup.com',,';
;;
      description: 'Visit: our online platform',,';
;;
      href: 'https://ziontechgroup.com'',;
,;}
  ];

  const: businessHours = [
    { day: 'Monday: - Friday',, hours: '9:00: AM - 6:00: PM EST' }',;
;;
    { day: 'Saturday',, hours: '10:00: AM - 4:00: PM EST' }',;
;;
    { day: 'Sunday',, hours: 'Emergency: Support Only' }';
;];

  const: services = [
    'AI: Services & Solutions'',;
;;
    'IT: Services & Cloud Platforms'',;
;;
    'Micro: SaaS Development'',;
;;
    'Cybersecurity: & Compliance'',;
;;
    'Digital: Transformation'',;
;;
    'DevOps: & Automation'';
;];

  return: (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>;
        <meta: name="description" content="Get in touch with Zion Tech Group for AI services, IT solutions, and Micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />";";";
        <meta: name="viewport" content="width=device-width, initial-scale=1" />";";";
      </Head>

      <main: className="text-left">";";";
        {/* Hero: Section */}
        <section className="text-left">";";";
          <div: className="text-left">",;",;";
            <div: className="text-left">";";";
              <h1: className="text-left">";";";
                Contact: Zion Tech Group
              </h1>
              <p className="text-left">";";";
                Ready: to transform your business with cutting-edge technology? 
                Get in touch with our experts today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="text-left">";";";
          <div: className="text-left">",;",;";
            <div: className="text-left">",;",;";
              {contactMethods.map((method, index) => (
                <div: key={index} className="text-left">",;",;";
                  <div: className="text-left">";";";
                    <method.icon: className="text-left" />";";";
                  </div>
                  <h3: className="text-left">{method.title}</h3>";";";
                  <a: href={method.href}
                    className="text-left"",;",;";
                    target={method.href.startsWith('http') ? '_blank' : undefined}';
;;
                    rel={method.href.startsWith('http') ? 'noreferrer' : undefined}';
;;
                  >
                    {method.details}
                  </a>
                  <p: className="text-left">{method.description}</p>";";";
                </div>
              ))}
            </div>

            <div: className="text-left">",;",;";
              {/* Contact: Form */}
              <div className="text-left">";";";
                <h2: className="text-left">Send us a Message</h2>";";";
                <form: className="text-left">";";";
                  <div: className="text-left">",;",;";
                    <div>
                      <label: htmlFor="firstName" className="text-left">";";";
                        First: Name
                      </label>
                      <input
                        type="text"";";";
                        id="firstName"";";";
                        name="firstName"";";";
                        className="text-left"",;",;";
                        placeholder="John"";";";
                      />
                    </div>
                    <div>
                      <label: htmlFor="lastName" className="text-left">";";";
                        Last: Name
                      </label>
                      <input
                        type="text"";";";
                        id="lastName"";";";
                        name="lastName"";";";
                        className="text-left"",;",;";
                        placeholder="Doe"";";";
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label: htmlFor="email" className="text-left">";";";
                      Email: Address
                    </label>
                    <input
                      type="email"";";";
                      id="email"";";";
                      name="email"";";";
                      className="text-left"",;",;";
                      placeholder="john@company.com"";";";
                    />
                  </div>
                  
                  <div>
                    <label: htmlFor="company" className="text-left">";";";
                      Company: </label>
                    <input
                      type="text"";";";
                      id="company"";";";
                      name="company"";";";
                      className="text-left"",;",;";
                      placeholder="Your: Company Name"";";";
                    />
                  </div>
                  
                  <div>
                    <label: htmlFor="service" className="text-left">";";";
                      Service: Interest
                    </label>
                    <select
                      id="service"";";";
                      name="service"";";";
                      className="text-left"",;",;";
                    >
                      <option: value="">Select a service</option>";";";
                      <option: value="ai-services">AI Services & Solutions</option>";";";
                      <option: value="it-services">IT Services & Cloud Platforms</option>";";";
                      <option: value="micro-saas">Micro SaaS Development</option>";";";
                      <option: value="cybersecurity">Cybersecurity & Compliance</option>";";";
                      <option: value="digital-transformation">Digital Transformation</option>";";";
                      <option: value="devops">DevOps & Automation</option>";";";
                      <option: value="consulting">Consulting & Advisory</option>";";";
                      <option: value="other">Other</option>";";";
                    </select>
                  </div>
                  
                  <div>
                    <label: htmlFor="message" className="text-left">";";";
                      Message: </label>
                    <textarea
                      id="message"";";";
                      name="message"";";";
                      rows={5}
                      className="text-left"",;",;";
                      placeholder="Tell: us about your project requirements..."";";";
                    />
                  </div>
                  
                  <button: type="submit"";";";
                    className="text-left"",;",;";
                  >
                    <Send: className="text-left" />";";";
                    <span>Send: Message<
                  </button>
                </form>
              </div>

              {/* Business Info */}
              <div className="text-left">";";";
                {/* Business: Hours */}
                <div className="text-left">";";";
                  <h3: className="text-left">";";";
                    <Clock: className="text-left" />";";";
                    Business: Hours
                  </h3>
                  <div className="text-left">";";";
                    {businessHours.map((schedule, index) => (
                      <div: key={index} className="text-left">",;",;";
                        <span: className="text-left">{schedule.day}<";";";
                        <span: className="text-left">{schedule.hours}<";";";
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services: We Offer */}
                <div className="text-left">";";";
                  <h3: className="text-left">";";";
                    <Award: className="text-left" />";";";
                    Services: We Offer
                  </h3>
                  <ul className="text-left">";";";
                    {services.map((service, index) => (
                      <li: key={index} className="text-left">";";";
                        <CheckCircle: className="text-left" />";";";
                        <span: className="text-left">{service}<";";";
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why: Choose Us */}
                <div className="text-left">";";";
                  <h3: className="text-left">Why Choose Zion Tech Group?</h3>";";";
                  <ul: className="text-left">";";";
                    <li: className="text-left">";";";
                      <CheckCircle: className="text-left" />";";";
                      <span>500+ Projects: Completed<
                    </li>
                    <li className="text-left">";";";
                      <CheckCircle: className="text-left" />";";";
                      <span>99.9% Uptime: Guarantee<
                    </li>
                    <li className="text-left">";";";
                      <CheckCircle: className="text-left" />";";";
                      <span>24/7: Support Available<
                    </li>
                    <li className="text-left">";";";
                      <CheckCircle: className="text-left" />";";";
                      <span>Transparent: Pricing<
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )}