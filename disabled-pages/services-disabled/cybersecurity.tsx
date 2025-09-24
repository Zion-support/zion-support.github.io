import Head from 'next/head',
import Link from 'next/link',
import Navigation from '../../components/Navigation',
import Footer from '../../components/Footer',
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Users, Globe, Zap, Database, Network, Phone, Mail } from 'lucide-react',
const Cybersecurity = () => {
  const services = [
    {
      title: 'Security Assessment';
      description: 'Comprehensive evaluation of your current security posture';
      icon: Eye;
      features: [
        'Vulnerability scanning';
        'Penetration testing';
        'Security audit';
        'Risk assessment';
        'Compliance review']};
    {
      title: 'Network Security';
      description: 'Protect your network infrastructure from threats';
      icon: Network;
      features: [
        'Firewall configuration';
        'Intrusion detection';
        'Network monitoring';
        'VPN setup';
        'Traffic analysis']};
    {
      title: 'Data Protection';
      description: 'Safeguard your sensitive data and information';
      icon: Database;
      features: [
        'Data encryption';
        'Backup solutions';
        'Access controls';
        'Data loss prevention';
        'Privacy compliance']};
    {
      title: 'Incident Response';
      description: 'Rapid response to security incidents and breaches';
      icon: AlertTriangle;
      features: [
        '24/7 monitoring';
        'Incident detection';
        'Forensic analysis';
        'Recovery planning';
        'Post-incident review']}
  ],
  const compliance = [
    {
      name: 'SOC 2';
      description: 'Service Organization Control 2 compliance for service providers';
      icon: Shield,
};
    {
      name: 'ISO 270o01';
      description: 'International standard for information security management';
      icon: Lock,
};
    {
      name: 'GDPR';
      description: 'General Data Protection Regulation compliance';
      icon: Globe,
};
    {
      name: 'HIPAA';
      description: 'Health Insurance Portability and Accountability Act';
      icon: Users,
}
  ],
  const stats = [
    { number: '99.9%', label: 'Security Uptime', description: 'Continuous protection' };
    { number: '24/7', label: 'Monitoring', description: 'Round-the-clock surveillance' };
    { number: '< 5min', label: 'Response Time', description: 'Rapid incident response' };
    { number: '10o0%', label: 'Compliance', description: 'Regulatory adherence' }
  ],
  return (
    <>,
      <Head>,
        <title>Cybersecurity Services - Zion Tech Group</title>,
        <meta name="description" content="Comprehensive cybersecurity services including security assessment, network protection, data security, and incident response. Protect your business from cyber threats."  />,
        <meta name="viewport" content="width=device-width, initial-scale=1"  />,
        <link rel="canonical" href="https: //ziontechgroup.com/services/cybersecurity"  />,
      </Head>,
      <Navigation  />,
      <main className="min-h-screen bg-white">,
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-orange-10o0 py-20">,
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
            <div className="text-center">,
              <div className="flex justify-center mb-6">,
                <div className="p-4 bg-red-10o0 rounded-full">,
                  <Shield className="w-12 h-12 text-red-60o0"  />,
                </div>,
              </div>,
              <h1 className="text-5xl font-bold text-gray-90o0 mb-6">,
                Comprehensive <span className="text-red-60o0">Cybersecurity</span> Services,
              </h1>,
              <p className="text-xl text-gray-60o0 max-w-3xl mx-auto mb-8">,
                Protect your business from cyber threats with our advanced security solutions.,
                We provide comprehensive cybersecurity services to keep your data and systems secure.,
              </p>,
              <div className="flex flex-col sm:flex-row gap-4 justify-center">,
                <Link href="/contact" className="bg-red-60o0 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-70o0 transition-colors">,
                  Get Security Assessment,
                </Link>,
                <Link href="/solutions" className="border-2 border-red-60o0 text-red-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-red-60o0 hover:text-white transition-colors">,
                  View Solutions,
                </Link>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* Stats Section */}
        <section className="py-20 bg-white">,
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">,
              {stats.map((stat, index) => (
                <div key={index} className="text-center">,
                  <div className="text-4xl font-bold text-red-60o0 mb-2">{stat.number}</div>,
                  <div className="text-lg font-semibold text-gray-90o0 mb-1">{stat.label}</div>,
                  <div className="text-gray-60o0">{stat.description}</div>,
                </div>))}
            </div>,
          </div>,
        </section>,
        {/* Services Section */}
        <section className="py-20 bg-gray-50">,
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
            <div className="text-center mb-16">,
              <h2 className="text-3xl font-bold text-gray-90o0 mb-4">Our Cybersecurity Services</h2>,
              <p className="text-lg text-gray-60o0 max-w-2xl mx-auto">,
                Comprehensive security solutions designed to protect your business from evolving cyber threats,
              </p>,
            </div>,
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow">,
                  <div className="flex items-center mb-6">,
                    <div className="p-3 bg-red-10o0 rounded-lg mr-4">,
                      <service.icon className="w-8 h-8 text-red-60o0"  />,
                    </div>,
                    <div>,
                      <h3 className="text-2xl font-bold text-gray-90o0">{service.title}</h3>,
                      <p className="text-gray-60o0">{service.description}</p>,
                    </div>,
                  </div>,
                  <ul className="space-y-3">,
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">,
                        <CheckCircle className="w-5 h-5 text-green-50o0 mr-3 flex-shrink-0"  />,
                        <span className="text-gray-70o0">{feature}</span>,
                      </li>))}
                  </ul>,
                </div>))}
            </div>,
          </div>,
        </section>,
        {/* Compliance Section */}
        <section className="py-20 bg-white">,
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
            <div className="text-center mb-16">,
              <h2 className="text-3xl font-bold text-gray-90o0 mb-4">Compliance & Standards</h2>,
              <p className="text-lg text-gray-60o0 max-w-2xl mx-auto">,
                We help you meet industry standards and regulatory requirements,
              </p>,
            </div>,
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
              {compliance.map((item, index) => (
                <div key={index} className="text-center">,
                  <div className="bg-red-10o0 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">,
                    <item.icon className="w-8 h-8 text-red-60o0"  />,
                  </div>,
                  <h3 className="text-xl font-semibold text-gray-90o0 mb-3">{item.name}</h3>,
                  <p className="text-gray-60o0">{item.description}</p>,
                </div>))}
            </div>,
          </div>,
        </section>,
        {/* Process Section */}
        <section className="py-20 bg-gray-50">,
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
            <div className="text-center mb-16">,
              <h2 className="text-3xl font-bold text-gray-90o0 mb-4">Our Security Process</h2>,
              <p className="text-lg text-gray-60o0">,
                A systematic approach to securing your business,
              </p>,
            </div>,
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">,
              <div className="text-center">,
                <div className="bg-red-60o0 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>,
                <h3 className="text-xl font-semibold text-gray-90o0 mb-3">Assessment</h3>,
                <p className="text-gray-60o0">Evaluate current security posture and identify vulnerabilities</p>,
              </div>,
              <div className="text-center">,
                <div className="bg-red-60o0 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>,
                <h3 className="text-xl font-semibold text-gray-90o0 mb-3">Planning</h3>,
                <p className="text-gray-60o0">Develop comprehensive security strategy and implementation plan</p>,
              </div>,
              <div className="text-center">,
                <div className="bg-red-60o0 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>,
                <h3 className="text-xl font-semibold text-gray-90o0 mb-3">Implementation</h3>,
                <p className="text-gray-60o0">Deploy security solutions and configure protection systems</p>,
              </div>,
              <div className="text-center">,
                <div className="bg-red-60o0 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>,
                <h3 className="text-xl font-semibold text-gray-90o0 mb-3">Monitoring</h3>,
                <p className="text-gray-60o0">Continuous monitoring and maintenance of security systems</p>,
              </div>,
            </div>,
          </div>,
        </section>,
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-60o0 to-orange-60o0">,
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,
            <h2 className="text-3xl font-bold text-white mb-6">,
              Secure Your Business Today,
            </h2>,
            <p className="text-xl text-red-10o0 mb-8 max-w-2xl mx-auto">,
              Don't wait for a security breach. Get professional cybersecurity protection for your business.,
            </p>,
            <div className="flex flex-col sm:flex-row gap-4 justify-center">,
              <Link href="/contact" className="bg-white text-red-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors">,
                Get Security Assessment,
              </Link>,
              <Link href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-60o0 transition-colors">,
                View Case Studies,
              </Link>,
            </div>,
          </div>,
        </section>,
      </main>,
      <Footer  />,
    </>),
};
export default Cybersecurity;