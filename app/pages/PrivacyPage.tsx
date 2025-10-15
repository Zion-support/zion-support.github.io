import React from 'react';,;,;,;,
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ;
  ArrowRight, ;
  Shield,;
  Lock,;
  Eye,;
  Database,;
  Users,;
  Mail,;
  Phone,;
  Calendar,;
  CheckCircle,;
  AlertTriangle
} from 'lucide-react';

const PrivacyPage: React.FC = () => {;,;,;,;,
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {;
      title: 'Information We Collect',;,;,;,;,
      content: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, company information, and any other information you choose to provide.'
    },
    {;,;,;,;,
      title: 'How We Use Your Information',;,;,;,;,
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and communicate with you about products, services, and events.'
    },
    {;,;,;,;,
      title: 'Information Sharing and Disclosure',;,;,;,;,
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with service providers who assist us in operating our website and conducting our business.'
    },
    {;,;,;,;,
      title: 'Data Security',;,;,;,;,
      content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.'
    },
    {;,;,;,;,
      title: 'Your Rights and Choices',;,;,;,;,
      content: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below.'
    },
    {;,;,;,;,
      title: 'Cookies and Tracking Technologies',;,;,;,;,
      content: 'We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.'
    },
    {;,;,;,;,
      title: 'Third-Party Services',;,;,;,;,
      content: 'Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.'
    },
    {;,;,;,;,
      title: 'International Data Transfers',;,;,;,;,
      content: 'Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.'
    },
    {;,;,;,;,
      title: 'Children\'s Privacy',;,;,;,;,
      content: 'Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.'
    },
    {;,;,;,;,
      title: 'Changes to This Policy',;,;,;,;,
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.'
    }
  ];
;,;,;,;,
  const dataTypes = [
    {;
      icon: Users,;,;,;,;,
      title: 'Personal Information',;,;,;,;,
      description: 'Name, email, phone number, and other identifying information'
    },
    {;,;,;,;,
      icon: Database,;,;,;,;,
      title: 'Usage Data',;,;,;,;,
      description: 'Information about how you use our services and website'
    },
    {;,;,;,;,
      icon: Eye,;,;,;,;,
      title: 'Device Information',;,;,;,;,
      description: 'IP address, browser type, operating system, and device identifiers'
    },
    {;,;,;,;,
      icon: Calendar,;,;,;,;,
      title: 'Communication Data',;,;,;,;,
      description: 'Records of our communications with you'
    }
  ];
;,;,;,;,
  const yourRights = [
    'Access your personal information',
    'Correct inaccurate information',
    'Delete your personal information',
    'Object to processing of your information',
    'Data portability',
    'Withdraw consent',
    'Lodge a complaint with a supervisory authority'
  ];

  return ("
    <>"
      <Helmet></Helmet>"
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>"
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy explains our data practices." />"
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, privacy rights" />"
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet><//Helmet><///Helmet><////Helmet></////Helmet>

      {/* Hero Section */}"
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">"
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>"
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>

        <div className="container mx-auto px-4 relative z-10">"
          <div className="text-center max-w-4xl mx-auto">"
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>;,;";,
              Privacy"
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span><//span><///span>"
                {' '}Policy"
              </span><//span>"
            </h1>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>;
              Your privacy is important to us. This policy explains how we collect, use, ;";
              and protect your personal information when you use our services."
            </p>"
            <div className="flex items-center justify-center text-gray-400 mb-8">"
              <Calendar className="w-5 h-5 mr-2" />;";
              Last updated: {lastUpdated}"
            </div>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div><//div><///div><////div>
              <Link;";,
                to="/contact;";
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              ></Link"
>;,;";,
                Contact Us"
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link><//Link><///Link><////Link></////Link>
              <Link;";
                to="/terms;";
                className="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >"
                <Shield className="w-5 h-5 mr-2" />;,;,;,;,
                Terms of Service
              </Link><//Link><///Link><////Link></////Link>
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>

      {/* Data Types We Collect */}"
      <section className="py-20 bg-slate-800">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-white mb-4">Types of Data We Collect</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;
              We collect only the information necessary to provide and improve our services.
            </p><//p><///p><////p></////p>
          </div><//div><///div><////div></////div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {dataTypes.map((dataType, index) => ("
              <div key={index} className="bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">"
                  <dataType.icon className="w-8 h-8 text-white" />"
                </div>"
                <h3 className="text-xl font-semibold text-white mb-4">{dataType.title}</h3>"
                <p className="text-gray-300 leading-relaxed">{dataType.description}</p><//p><///p><////p></////p>
              </div><//div><///div><////div></////div>
            ))}
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>

      {/* Privacy Policy Content */}"
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">"
        <div className="container mx-auto px-4">"
          <div className="max-w-4xl mx-auto">"
            <div className="space-y-12"></div>"
              {sections.map((section, index) => ("
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl">"
                  <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>"
                  <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p><//p><///p><////p></////p>
                </div><//div><///div><////div></////div>
              ))}
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>

      {/* Your Rights */}"
      <section className="py-20 bg-slate-800">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-white mb-4">Your Privacy Rights</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;,;,;,;,
              You have control over your personal information. Here are your rights under applicable data protection laws.
            </p><//p><///p><////p></////p>
          </div><//div><///div><////div></////div>

          <div className="max-w-4xl mx-auto">"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>"
              {yourRights.map((right, index) => ("
                <div key={index} className="flex items-center bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">"
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />"
                  <span className="text-white font-medium">{right}</span><//span><///span><////span></////span>
                </div><//div><///div><////div></////div>
              ))}
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>

      {/* Contact Information */}"
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us About Privacy</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>;,;,;,;,
              If you have any questions about this privacy policy or our data practices, please contact us.
            </p><//p><///p><////p></////p>
          </div><//div><///div><////div></////div>

          <div className="max-w-4xl mx-auto">"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center">"
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>"
                <p className="text-gray-300 mb-4">Send us an email with your privacy concerns</p><//p><///p><////p></////p>
                <a;";,
                  href="mailto:privacy@ziontechgroup.com;";,
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                ></a"
>;,;,;,;,
                  privacy@ziontechgroup.com
                </a><//a><///a><////a></////a>
              </div><//div><///div><////div></////div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center">"
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>"
                <p className="text-gray-300 mb-4">Speak with our privacy team directly</p><//p><///p><////p></////p>
                <a;";
                  href="tel:+13024640950;";,
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                ></a"
><//a"
><///a"
><////a"
>
                  +1 302 464 0950
                </a><//a><///a><////a></////a>
              </div><//div><///div><////div></////div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 text-center">"
                <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                <h3 className="text-xl font-semibold text-white mb-2">Data Protection Officer</h3>"
                <p className="text-gray-300 mb-4">Contact our DPO for data protection matters</p><//p><///p><////p></////p>
                <a;";,
                  href="mailto:dpo@ziontechgroup.com;";,
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                ></a"
>;
                  dpo@ziontechgroup.com
                </a><//a><///a><////a></////a>
              </div><//div><///div><////div></////div>
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>

      {/* Important Notice */}"
      <section className="py-20 bg-slate-800">"
        <div className="container mx-auto px-4">"
          <div className="max-w-4xl mx-auto">"
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-8">"
              <div className="flex items-start">"
                <AlertTriangle className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0 mt-1" />"
                <div>"
                  <h3 className="text-xl font-semibold text-white mb-4">Important Notice</h3>"
                  <p className="text-gray-300 leading-relaxed mb-4"></p>;
                    This privacy policy is effective as of {lastUpdated}. We may update this policy from time to time ;
                    to reflect changes in our practices or for other operational, legal, or regulatory reasons. ;";
                    We will notify you of any material changes by posting the updated policy on our website."
                  </p>"
                  <p className="text-gray-300 leading-relaxed"></p>;
                    By continuing to use our services after any changes to this privacy policy, you acknowledge ;
                    that you have read and understood the updated policy.
                  </p><//p><///p><////p></////p>
                </div><//div><///div><////div></////div>
              </div><//div><///div><////div></////div>
            </div><//div><///div><////div></////div>
          </div><//div><///div><////div></////div>
        </div><//div><///div><////div></////div>
      </section><//section><///section><////section></////section>
    </>
  );
};

export default PrivacyPage;"