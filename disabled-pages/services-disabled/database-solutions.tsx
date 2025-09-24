import Link from 'next/link',
import Navigation from '../../components/Navigation',
import Footer from '../../components/Footer',
import SEOHead from '../../components/SEOHead',
import ErrorBoundary from '../../components/ErrorBoundary',
import {
  Database;
  Server;
  Shield;
  Zap;
  Users;
  BarChart3;
  Cloud;
  CheckCircle;
  ArrowRight;
  Globe;
  Lock;
  TrendingUp;
  Cpu;
  HardDrive;
  Network} from 'lucide-react',
export default function DatabaseSolutions() {
  const features = [
    {
      icon: Database;
      title: 'Database Design & Architecture';
      description: 'Custom database solutions designed for optimal performance and scalability',
};
    {
      icon: Server;
      title: 'Database Administration';
      description: '24/7 monitoring, maintenance, and optimization of your database systems'};
    {
      icon: Shield;
      title: 'Data Security & Backup';
      description: 'Enterprise-grade security with automated backup and disaster recovery',
};
    {
      icon: Zap;
      title: 'Performance Optimization';
      description: 'Advanced tuning and optimization for maximum database performance',
};
    {
      icon: Cloud;
      title: 'Cloud Database Migration';
      description: 'Seamless migration to cloud-based database solutions',
};
    {
      icon: BarChart3;
      title: 'Data Analytics & Reporting';
      description: 'Transform your data into actionable insights with advanced analytics',
}
  ],
  const databaseTypes = [
    {
      name: 'SQL Databases';
      description: 'MySQL, PostgreSQL, SQL Server, Oracle';
      icon: Database,
};
    {
      name: 'NoSQL Databases';
      description: 'MongoDB, Cassandra, Redis, DynamoDB';
      icon: HardDrive,
};
    {
      name: 'Cloud Databases';
      description: 'AWS RDS, Azure SQL, Google Cloud SQL';
      icon: Cloud,
};
    {
      name: 'In-Memory Databases';
      description: 'Redis, Memcached, Hazelcast';
      icon: Cpu,
}
  ],
  const benefits = [
    'Improved data performance and query optimization';
    'Enhanced data security and compliance';
    'Reduced operational costs and maintenance';
    'Scalable architecture for business growth';
    '24/7 monitoring and support';
    'Automated backup and disaster recovery'],
  return (
    <ErrorBoundary>,
      <SEOHead
        title="Database Solutions - Zion Tech Group",
        description="Expert database design, administration, and optimization services. We provide comprehensive database solutions for businesses of all sizes.",
        keywords="database solutions, database administration, data management, SQL, NoSQL, cloud databases, data optimization",
        canonicalUrl="https: //ziontechgroup.com/services/database-solutions",
       />,
      <Navigation  />,
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-90o0 via-blue-90o0 to-gray-90o0">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="text-center">,
            <div className="flex justify-center mb-6">,
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-2xl flex items-center justify-center">,
                <Database className="w-8 h-8 text-white"  />,
              </div>,
            </div>,
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">,
              Database Solutions,
            </h1>,
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">,
              Comprehensive database services including design, administration, optimization, and migration.,
              We help businesses manage their data efficiently and securely.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <Link
                href="/contact",
                className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg hover:shadow-cyan-50o0/25 flex items-center justify-center">,
                Get Started,
                <ArrowRight className="ml-2 w-5 h-5"  />,
              </Link>,
              <Link
                href="/case-studies",
                className="px-8 py-4 border border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover:bg-cyan-40o0 hover:text-gray-90o0 transition-all duration-30o0 flex items-center justify-center">,
                View Case Studies,
              </Link>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* Features Section */}
      <section className="py-20 bg-gray-50">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="text-center mb-16">,
            <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">,
              Comprehensive Database Services,
            </h2>,
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">,
              From design to deployment, we provide end-to-end database solutions,
              that scale with your business needs.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover: shadow-xl transition-shadow duration-30o0">,
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-lg flex items-center justify-center mb-6">,
                  <feature.icon className="w-6 h-6 text-white"  />,
                </div>,
                <h3 className="text-xl font-semibold text-gray-90o0 mb-4">,
                  {feature.title}
                </h3>,
                <p className="text-gray-60o0">,
                  {feature.description}
                </p>,
              </div>))}
          </div>,
        </div>,
      </section>,
      {/* Database Types Section */}
      <section className="py-20 bg-white">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="text-center mb-16">,
            <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">,
              Database Technologies We Support,
            </h2>,
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">,
              We work with all major database technologies to provide the best solution for your specific needs.,
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {databaseTypes.map((type, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-20o0 hover: border-cyan-40o0 transition-colors duration-30o0">,
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0/20 to-blue-60o0/20 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                  <type.icon className="w-8 h-8 text-cyan-60o0"  />,
                </div>,
                <h3 className="text-lg font-semibold text-gray-90o0 mb-2">,
                  {type.name}
                </h3>,
                <p className="text-gray-60o0 text-sm">,
                  {type.description}
                </p>,
              </div>))}
          </div>,
        </div>,
      </section>,
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-90o0 to-blue-90o0">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">,
            <div>,
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">,
                Why Choose Our Database Solutions?,
              </h2>,
              <p className="text-xl text-gray-30o0 mb-8">,
                Our expert team delivers database solutions that improve performance;
                enhance security, and reduce operational costs.,
              </p>,
              <div className="space-y-4">,
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">,
                    <CheckCircle className="w-6 h-6 text-cyan-40o0 flex-shrink-0"  />,
                    <span className="text-gray-30o0">{benefit}</span>,
                  </div>))}
              </div>,
            </div>,
            <div className="grid grid-cols-2 gap-6">,
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">,
                <TrendingUp className="w-8 h-8 text-cyan-40o0 mb-4"  />,
                <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>,
                <p className="text-gray-30o0 text-sm">Optimized queries and indexing for maximum speed</p>,
              </div>,
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">,
                <Lock className="w-8 h-8 text-cyan-40o0 mb-4"  />,
                <h3 className="text-xl font-semibold text-white mb-2">Security</h3>,
                <p className="text-gray-30o0 text-sm">Enterprise-grade security and compliance</p>,
              </div>,
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">,
                <Network className="w-8 h-8 text-cyan-40o0 mb-4"  />,
                <h3 className="text-xl font-semibold text-white mb-2">Scalability</h3>,
                <p className="text-gray-30o0 text-sm">Architecture that grows with your business</p>,
              </div>,
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">,
                <Users className="w-8 h-8 text-cyan-40o0 mb-4"  />,
                <h3 className="text-xl font-semibold text-white mb-2">Support</h3>,
                <p className="text-gray-30o0 text-sm">24/7 monitoring and expert support</p>,
              </div>,
            </div>,
          </div>,
        </div>,
      </section>,
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">,
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,
          <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-6">,
            Ready to Optimize Your Database?,
          </h2>,
          <p className="text-xl text-gray-60o0 mb-8">,
            Let our database experts help you design, implement, and optimize,
            the perfect database solution for your business.,
          </p>,
          <div className="flex flex-col sm: flex-row gap-4 justify-center">,
            <Link
              href="/contact",
              className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg hover:shadow-cyan-50o0/25 flex items-center justify-center">,
              Get Free Consultation,
              <ArrowRight className="ml-2 w-5 h-5"  />,
            </Link>,
            <Link
              href="/pricing",
              className="px-8 py-4 border border-gray-30o0 text-gray-70o0 font-semibold rounded-lg hover:bg-gray-10o0 transition-all duration-30o0 flex items-center justify-center">,
              View Pricing,
            </Link>,
          </div>,
        </div>,
      </section>,
      <Footer  />,
    </ErrorBoundary>),
}