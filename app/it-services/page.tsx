
import React from 'react;'

import { Helmet } from 'react-helmet-async;'

import { Link } from 'react-router-dom;'

import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react;'

.

const ItServicesPage: React.FC = () => {const itServices = [,
    {
      titl,
    e: 'Cloud Infrastructure Management,'
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.,'
      icon: '☁️,'
      price: Starting at $2,500,
      features: ['Cloud migration strategy', 'Cost optimization', 'Security hardening', 24]'
      benefits: ['Reduce cloud costs by 30%', 'Improve performance by 40%', 'Ensure 99.9% uptime],
      marketPrice: $4,000-8,000,
      category: 'Cloud Services,'
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker],
    },
    {
      title: 'Cybersecurity Solutions,'
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.,'
      icon: '🔒,'
      price: Starting at $3,000,
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance management],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security costs by 50%', 'Ensure compliance],
      marketPrice: $5,000-12,000,
      category: 'Security,'
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust],
    },
    {
      title: DevOps & CI,
      descriptio,
    n: 'Automated deployment pipelines, infrastructure as code, and continuous integration services.,'
      icon: '🔄,'
      price: Starting at $2,000.
      features: [CI,
      benefit,]
    s: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity],
      marketPrice: $3,500-7,000,
      category: 'DevOps,'
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus],
    },
    {
      title: 'Database Administration,'
      description: 'Database design, optimization, backup, and maintenance for SQL and NoSQL databases.,'
      icon: '🗄️,'
      price: Starting at $1,500,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services],
      benefits: ['Improve query performance by 60%', 'Ensure data integrity', 'Reduce downtime],
      marketPrice: $2,500-5,000,
      category: 'Database,'
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch],
    },
    {
      title: 'Network Infrastructure,'
      description: 'Network design, implementation, and management for enterprise-grade connectivity.,'
      icon: '🌐,'
      price: Starting at $2,200,
      features: ['Network design', 'Router & switch config', 'VPN setup', 'Load balancing', 'Network monitoring],
      benefits: ['Improve network performance', 'Reduce latency by 40%', 'Ensure reliability],
      marketPrice: $3,500-6,000,
      category: 'Networking,'
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'MPLS],
    },
    {
      title: 'IT Support & Helpdesk,'
      description: 24,
      ico,
    n: '🛠️,'
      price: Starting at $1,200.
      features: [24,
      benefit,]
    s: ['Reduce downtime by 70%', 'Improve user satisfaction', 'Lower support costs],
      marketPrice: $2,000-4,000,
      category: 'Support,'
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Active Directory', 'Office 365],
    },
    {
      title: 'Data Analytics & BI,'
      description: 'Data warehouse design, ETL processes, and business intelligence dashboard development.,'
      icon: '📊,'
      price: Starting at $2,800,
      features: ['Data warehouse design', 'ETL development', 'Dashboard creation', 'Report automation', 'Data governance],
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Automate reporting],
      marketPrice: $4,500-9,000,
      category: 'Analytics,'
      technologies: ['Tableau', 'Power BI', 'Snowflake', 'Apache Airflow', 'Python],
    },
    {
      title: 'API Development & Integration,'
      description: 'Custom API development, third-party integrations, and microservices architecture.,'
      icon: '🔌,'
      price: Starting at $2,000,
      features: ['RESTful API design', 'GraphQL development', 'Third-party integrations', 'API documentation', 'Rate limiting],
      benefits: ['Improve system connectivity', 'Enable rapid development', 'Enhance scalability],
      marketPrice: $3,500-7,500,
      category: 'Integration,'
      technologies: ['Node.js', 'Python', 'GraphQL', 'Kong', 'Postman],
    },
    {
      title: 'Mobile App Development,'
      description: 'Native and cross-platform mobile application development for iOS and Android.,'
      icon: '📱,'
      price: Starting at $3,500,
      features: ['Native iOS/Android apps', 'Cross-platform development', UI]'
      benefits: ['Reach mobile users', 'Improve user engagement', 'Increase revenue],
      marketPrice: $6,000-15,000,
      category: 'Mobile,'
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin],
    },
    {
      title: 'Web Application Development,'
      description: 'Custom web applications, e-commerce solutions, and enterprise web platforms.,'
      icon: '💻,'
      price: Starting at $2,500,
      features: ['Custom web apps', 'E-commerce solutions', 'CMS development', 'Responsive design', 'SEO optimization],
      benefits: ['Improve online presence', 'Increase conversions', 'Enhance user experience],
      marketPrice: $4,000-10,000,
      category: 'Web Development,'
      technologies: ['React', 'Vue.js', 'Node.js', 'PHP', 'WordPress],
    },
    {
      title: 'IT Consulting & Strategy,'
      description: 'Technology roadmap development, digital transformation planning, and IT strategy consulting.,'
      icon: '💡,'
      price: Starting at $200,
      feature,
    s: ['Technology assessment', 'Digital transformation', 'IT strategy planning', 'Vendor evaluation', 'ROI analysis],
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Reduce risks],
      marketPrice: $300-500,
      categor,
    y: 'Consulting,'
      technologies: ['Strategic Planning', 'Architecture Design', 'Risk Assessment', 'ROI Analysis],
    },
    {
      title: 'Disaster Recovery & Backup,'
      description: 'Comprehensive backup solutions, disaster recovery planning, and business continuity services.,'
      icon: '🔄,'
      price: Starting at $1,800,
      features: ['Backup strategy', 'Disaster recovery planning', 'Data replication', 'Recovery testing', 'Business continuity],
      benefits: ['Minimize downtime', 'Protect critical data', 'Ensure business continuity],
      marketPrice: $3,000-6,000,
      category: 'Backup & Recovery,'
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'VMware],
    },
    {
      title: 'Blockchain Infrastructure,'
      description: 'Enterprise blockchain solutions, smart contract development, and decentralized application deployment.,'
      icon: '⛓️,'
      price: Starting at $4,500,
      features: ['Blockchain deployment', 'Smart contract development', 'DApp development', 'Node management', 'Security auditing],
      benefits: ['Enable decentralized solutions', 'Improve transparency', 'Reduce intermediaries],
      marketPrice: $8,000-25,000,
      category: 'Blockchain,'
      technologies: ['Ethereum', 'Hyperledger', 'Solidity', 'Web3', 'IPFS],
    },
    {
      title: 'IoT Platform Management,'
      description: 'Comprehensive IoT infrastructure management and device connectivity solutions.,'
      icon: '🌐,'
      price: Starting at $3,200,
      features: ['Device management', 'Data collection', 'Real-time monitoring', 'Edge computing', 'Security management],
      benefits: ['Enable IoT deployments', 'Improve operational efficiency', 'Reduce manual monitoring],
      marketPrice: $5,500-18,000,
      category: 'IoT,'
      technologies: ['AWS IoT', 'Azure IoT', 'MQTT', 'CoAP', 'Edge Computing],
    },
    {
      title: 'Edge Computing Infrastructure,'
      description: 'Distributed computing infrastructure for low-latency applications and edge data processing.,'
      icon: '⚡,'
      price: Starting at $3,800,
      features: ['Edge node deployment', 'Data processing', 'Content delivery', 'Load balancing', 'Monitoring],
      benefits: ['Reduce latency', 'Improve performance', 'Enable real-time applications],
      marketPrice: $6,500-20,000,
      category: 'Edge Computing,'
      technologies: ['Kubernetes', 'Docker', 'CDN', 'Edge Servers', '5G Networks],
    },
    {
      title: 'Quantum Computing Infrastructure,'
      description: 'Quantum computing platform setup and quantum algorithm development services.,'
      icon: '⚛️,'
      price: Starting at $8,000,
      features: ['Quantum hardware setup', 'Algorithm development', 'Quantum simulation', 'Hybrid systems', 'Research support],
      benefits: ['Enable quantum computing', 'Solve complex problems', 'Gain competitive advantage],
      marketPrice: $15,000-50,000,
      category: 'Quantum Computing,'
      technologies: ['IBM Qiskit', 'Google Cirq', 'Rigetti', 'IonQ', 'Quantum Simulators],
    },
    {
      title: '5G Network Implementation,'
      description: '5G network infrastructure deployment and optimization for enterprise applications.,'
      icon: '📡,'
      price: Starting at $5,500,
      features: ['5G network design', 'Infrastructure deployment', 'Performance optimization', 'Security implementation', 'Integration services],
      benefits: ['Enable high-speed connectivity', 'Support IoT applications', 'Improve mobile experience],
      marketPrice: $10,000-40,000,
      category: '5G Networks,'
      technologies: ['5G Core', 'RAN', 'Network Slicing', 'MEC', 'NFV],
    },
    {
      title: 'Microservices Architecture,'
      description: 'Modern microservices architecture design and implementation for scalable applications.,'
      icon: '🔧,'
      price: Starting at $3,500,
      features: ['Architecture design', 'Service decomposition', 'API gateway setup', 'Service mesh', 'Monitoring],
      benefits: ['Improve scalability', 'Enable rapid development', 'Reduce deployment risks],
      marketPrice: $6,000-20,000,
      category: 'Microservices,'
      technologies: ['Kubernetes', 'Docker', 'Istio', 'API Gateway', 'Service Mesh],
    },
    {
      title: 'Serverless Computing Platform,'
      description: 'Serverless architecture implementation and management for event-driven applications.,'
      icon: '☁️,'
      price: Starting at $2,800,
      features: ['Function deployment', 'Event handling', 'Auto-scaling', 'Cost optimization', 'Monitoring],
      benefits: ['Reduce infrastructure costs', 'Improve scalability', 'Simplify deployment],
      marketPrice: $4,500-15,000,
      category: 'Serverless,'
      technologies: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Serverless Framework],
    },
    {
      title: 'Data Lake Architecture,'
      description: 'Enterprise data lake design and implementation for big data analytics and storage.,'
      icon: '🏞️,'
      price: Starting at $4,200,
      features: ['Data lake design', 'Data ingestion', 'Storage optimization', 'Security implementation', 'Analytics setup],
      benefits: ['Centralize data storage', 'Enable advanced analytics', 'Improve data governance],
      marketPrice: $7,000-25,000,
      category: 'Data Architecture,'
      technologies: ['AWS S3', 'Azure Data Lake', 'Hadoop', 'Spark', 'Delta Lake],
    },
    {
      title: 'AI Infrastructure Setup,'
      description: AI,
      ico,
    n: '🤖,'
      price: Starting at $4,800,
      features: ['GPU cluster setup', 'ML pipeline deployment', 'Model serving', 'Data preprocessing', 'Monitoring],
      benefits: [Enable AI;
      marketPric,
    e: $8,000-30,000,
      category: 'AI Infrastructure,]'
      technologies: ['NVIDIA GPUs', 'Kubernetes', 'TensorFlow', 'PyTorch', 'MLflow],
    },
    {
      title: 'Hybrid Cloud Management,'
      description: 'Multi-cloud and hybrid cloud infrastructure management and optimization.,'
      icon: '☁️,'
      price: Starting at $3,600,
      features: ['Multi-cloud strategy', 'Cost optimization', 'Security management', 'Migration services', 'Monitoring],
      benefits: ['Optimize cloud costs', 'Improve reliability', 'Enable vendor flexibility],
      marketPrice: $6,500-22,000,
      category: 'Cloud Management,'
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'CloudFormation],
    },
    {
      title: 'Zero Trust Security Architecture,'
      description: 'Zero trust security model implementation for enterprise network protection.,'
      icon: '🔒,'
      price: Starting at $4,000,
      features: ['Identity verification', 'Network segmentation', 'Access control', 'Threat detection', 'Compliance],
      benefits: ['Improve security posture', 'Reduce attack surface', 'Ensure compliance],
      marketPrice: $7,500-25,000,
      category: 'Security Architecture,'
      technologies: ['Zero Trust', 'Identity Management', 'Network Security', 'SIEM', 'EDR],
    },
    {
      title: 'High-Performance Computing (HPC),'
      description: 'High-performance computing cluster setup and management for scientific and engineering workloads.,'
      icon: '💻,'
      price: Starting at $6,000,
      features: ['HPC cluster design', 'Job scheduling', 'Performance optimization', 'Storage management', 'Monitoring],
      benefits: ['Accelerate computations', 'Enable complex simulations', 'Improve research efficiency],
      marketPrice: $12,000-50,000,
      category: 'HPC,'
      technologies: ['Slurm', 'OpenMPI', 'CUDA', 'InfiniBand', 'Parallel File Systems],
    },
    {
      title: 'Content Delivery Network (CDN),'
      description: 'Global CDN implementation and optimization for improved content delivery performance.,'
      icon: '🌍,'
      price: Starting at $1,500,
      features: ['CDN setup', 'Content optimization', 'Caching strategy', 'Performance monitoring', 'Security],
      benefits: ['Improve load times', 'Reduce bandwidth costs', 'Enhance user experience],
      marketPrice: $2,500-10,000,
      category: 'CDN,'
      technologies: ['CloudFlare', 'AWS CloudFront', 'Azure CDN', 'Akamai', 'Fastly],
    },
    {
      title: 'Database Performance Optimization,'
      description: 'Database performance tuning and optimization for improved application performance.,'
      icon: '🗄️,'
      price: Starting at $2,200,
      features: ['Performance analysis', 'Query optimization', 'Index tuning', 'Capacity planning', 'Monitoring],
      benefits: ['Improve query performance', 'Reduce response times', 'Optimize resource usage],
      marketPrice: $4,000-15,000,
      category: 'Database Optimization,'
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch],
    },
    {
      title: 'API Gateway Management,'
      description: 'Enterprise API gateway setup and management for secure and scalable API operations.,'
      icon: '🚪,'
      price: Starting at $2,500,
      features: ['API gateway setup', 'Rate limiting', 'Authentication', 'Monitoring', 'Documentation],
      benefits: ['Centralize API management', 'Improve security', 'Enable API monetization],
      marketPrice: $4,500-18,000,
      category: 'API Management,'
      technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Apigee', 'Zuul],
    },
    {
      title: 'Container Orchestration,'
      description: 'Kubernetes and container orchestration platform setup and management.,'
      icon: '🐳,'
      price: Starting at $3,200,
      features: ['Kubernetes setup', 'Container management', 'Auto-scaling', 'Service mesh', 'Monitoring],
      benefits: ['Improve scalability', 'Simplify deployment', 'Enable microservices],
      marketPrice: $5,500-20,000,
      category: 'Containerization,'
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus],
    },
    {
      title: 'Real-time Data Streaming,'
      description: 'Real-time data streaming platform setup and management for live data processing.,'
      icon: '📊,'
      price: Starting at $2,800,
      features: ['Stream processing', 'Data pipelines', 'Real-time analytics', 'Event handling', 'Monitoring],
      benefits: ['Enable real-time insights', 'Improve decision making', 'Support live applications],
      marketPrice: $5,000-18,000,
      category: 'Streaming,'
      technologies: ['Apache Kafka', 'Apache Flink', 'Apache Storm', 'AWS Kinesis', 'Azure Stream Analytics],
    };
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud Solutions' },    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud, description: 'Seamless Migration },'
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development Operations },'
    { name: 'Database Services', href: '/database', icon: Database, description: 'Data Management },'
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security Solutions },'
    { name: 'Security Monitoring', href: '/security-monitoring', icon: Shield, description: '24/7 Security },'
    { name: 'Penetration Testing', href: '/penetration-testing', icon: Shield, description: 'Security Testing },'
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Infrastructure Setup },'
    { name: 'Managed IT Services', href: '/managed-it', icon: Settings, description: '24/7 IT Support },'
    { name: 'IT Consulting', href: '/it-consulting', icon: Globe, description: 'IT Strategy },'
    { name: 'Data Analytics', href: '/data-analytics', icon: Database, description: 'Business Intelligence },'
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'Mobile Apps },'
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Web Applications },'
    { name: 'Process Automation', href: '/process-automation', icon: Zap, description: 'Workflow Automation }',
  ];

  return (
    <div>
  );
    </div>
  );
  );
  );
    <React.Fragment>
    <div>
        <title>IT Services - Zion Tech Group<
        <meta name="description" content="Comprehensive IT services including cloud, security, DevOps, and infrastructure solutions for modern businesses. """
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, infrastructure, technology consulting .
      <"
""
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>"
        {/* Hero Section */}<""
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20>"""
          <div className="absolute inset-0 bg-black opacity-20><"""
          <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8><"""
            <div className="text-center><"""
              <h1 className="text-4xl md:text-6xl font-bold mb-6>
                Professional IT Services<"
              <""
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto>,
                Comprehensive technology solutions to power your business growth and digital transformation."
              <""
              <div className="flex flex-col sm:flex-row gap-4 justify-center><"""
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors>,
                  Get Free Assessment."
                <""
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors>,
                  View Our Portfolio.
                <
              <
            <
          <
        <
"
        {/* Key Benefits *""
        <section className="py-16 bg-white>"""
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8><"""
            <div className="text-center mb-12><"""
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4>,
                Why Choose Our IT Services?"
              <""
              <p className="text-xl text-gray-600>,
                Expert solutions delivered by certified professionals with proven track records,
              <
            <
            <div className=grid grid-cols-1 md:grid-cols-2 l,"
    g: grid-cols-4 gap-8><""
              <div className="text-center><"""
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4><",""
                  <Server className="w-8 h-8 text-blue-600,"
                <""
                <h3 className="text-xl font-semibold text-gray-900 mb-2>Certified Experts<"""
                <p className="text-gray-600>AWS, Microsoft, Cisco, and other industry certifications<"
              <""
              <div className="text-center><"""
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4><"""
                  <Shield className="w-8 h-8 text-green-600 ."
                <""
                <h3 className="text-xl font-semibold text-gray-900 mb-2>Enterprise Security<"""
                <p className="text-gray-600>Bank-level security with compliance and monitoring<"
              <""
              <div className="text-center><"""
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4><"""
                  <Cloud className="w-8 h-8 text-purple-600 ."
                <""
                <h3 className="text-xl font-semibold text-gray-900 mb-2>Cloud-First Approach<"""
                <p className="text-gray-600>Modern, scalable solutions built for the cloud<"
              <""
              <div className="text-center><"""
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4><"""
                  <Settings className="w-8 h-8 text-orange-600 ."
                <""
                <h3 className="text-xl font-semibold text-gray-900 mb-2>24/7 Support<"""
                <p className="text-gray-600>Round-the-clock monitoring and support services<
              <
            <
          <
        <

        {/* Services by Category *
        {categories.map(category => ("
""
          <section key={category} className="py-16 bg-gray-50>"""
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8><"""
              <div className="text-center mb-12><,
                <h2 className=text-3xl m,
    d: text-4xl font-bold text-gray-900 mb-4>
                  {category} Services."
                <""
                <p className="text-xl text-gray-600>,
                  Professional {category.toLowerCase()} solutions tailored to your business needs,
                <
              <
              <div className=grid grid-cols-1 md: grid-cols-2 l,
    g: grid-cols-3 gap-8>
                {itServices,
                  .filter(service => service.category === category);"
                  .map((service, index) => (<""
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow><"""
                      <div className="text-4xl mb-4>{service.icon}<"""
                      <h3 className="text-xl font-semibold text-gray-900 mb-3>{service.title}<"""
                      <p className="text-gray-600 mb-4>{service.description}<"
                      ""
                      <div className="mb-4><"""
                        <div className="flex items-center justify-between mb-2><"""
                          <span className="text-2xl font-bold text-blue-600>{service.price}<"""
                          <span className="text-sm text-gray-500>Market: {service.marketPrice}<"
                        <""
                        <div className="text-sm text-green-600 font-semibold>
                          Save up to 40% vs market rates<
                        <
                      <"
""
                      <div className="mb-4><"""
                        <h4 className="font-semibold text-gray-900 mb-2>Key Features: <"""
                        <ul className="space-y-1>)",""
                          {service.features.map((feature), featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-600>"""
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 .
                              {feature};
                            <);
                          ))};
                        <
                      <"
""
                      <div className="mb-4><"""
                        <h4 className="font-semibold text-gray-900 mb-2>Technologies: <"""
                        <div className="flex flex-wrap gap-2>,"
                          {service.technologies.map((tech), techIndex) => (<""
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded>
                              {tech};
                            <);
                          ))};
                        <
                      <"
""
                      <div className="mb-6><"""
                        <h4 className="font-semibold text-gray-900 mb-2>Business Benefits: <"""
                        <ul className="space-y-1>",""
                          {service.benefits.map((benefit), benefitIndex) => (<li key={benefitIndex} className="flex items-center text-sm text-gray-600>
                        Get Quote.
                      <
                    <
                  ))};
              <
            <
          <
        ))};"
        {/* Contact Section *""
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white>"""
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center><"""
            <h2 className="text-3xl md:text-4xl font-bold mb-4>
              Ready to Transform Your IT Infrastructure?"
            <""
            <p className="text-xl mb-8 text-blue-100>,
              Contact our certified IT experts for a free consultation and custom solution design."
            <""
            <div className="flex flex-col sm:flex-row gap-4 justify-center><"
              <a "",
                href="tel:+13024640950"","
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center.
              >
                📞 +1 302 464 0950.
              <"
              <a,""
                href="mailto:kleber@ziontechgroup.com,
                className=border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hove,
    r: text-blue-600 transition-colors.
              >,
                ✉️ kleber@ziontechgroup.com,
              <"
            <""
            <div className="mt-8 text-sm text-blue-200><
              <p>📍 364 E Main St STE 1008, Middletown DE 19709<
            <
          <
        <
      <
    <"
      <Helmet>        <title>IT Services - Zion Tech Group | Information Technology Solutions</title>""
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure management, and more. Expert IT support and consulting. />"""
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps />"
      </Helmet>""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>"""
        <section className="py-20 px-4>"""
          <div className="max-w-7xl mx-auto text-center>"""
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6>"","
              IT <span className="text-cyan-400>Services</span>"
            </h1>""
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>,
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth.
            </p>
          </div>"
        </section>""
        <section className="py-16 px-4>"""
          <div className="max-w-7xl mx-auto>"""
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8>,
              {itServices.map((service, index) => (

                <Link.
                  key={index};"
                  to={service.href};""
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover: border-cyan-400/40 transition-all duration-300 group,"
                >""
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover: text-cyan-300 transition-colors />"""
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors>
                    {service.name};"
                  </h3>""
                  <p className="text-gray-300 mb-4>{service.description}</p>"""
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors>"""
                    <span className="text-sm font-medium>Learn More</span>"""
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform />
                  </div>
                </Link>
              ))            </div>
          </div>
        </section>
      </div>
    </React.Fragment>),
  );};
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      description: 'Comprehensive 24/7 IT management and support for your business infrastructure.',
      icon: Settings,
      category: 'infrastructure',
      pricing: { starting: 199, period: 'month', perUser: true },
      features: [,
        '24/7 monitoring and support',
        'Proactive maintenance',
        'Security management',
        'Backup and disaster recovery',
        'Software updates',
        'Help desk support']
      ],
      benefits: [,
        'Reduce IT costs by 40%',
        'Minimize downtime by 90%',
        'Improve security posture',
        'Focus on core business']
      ],
      popular: true,
      rating: 4.9,
      users: 2500,
      link: 'https://ziontechgroup.com/managed-it-services',
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      icon: Cloud,
      category: 'cloud',
      pricing: { starting: 2999, period: 'project' },
      features: [,
        'Assessment and planning',
        'Data migration',
        'Application migration',
        'Security configuration',
        'Performance optimization',
        'Training and support']
      ],
      benefits: [,
        'Reduce infrastructure costs by 60%',
        'Improve scalability',
        'Enhance security',
        'Increase flexibility']
      ],
      popular: true,
      rating: 4.8,
      users: 1200,
      link: 'https://ziontechgroup.com/cloud-migration',
    },
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      icon: Shield,
      category: 'security',
      pricing: { starting: 149, period: 'month' },
      features: [,
        'Firewall management',
        'Endpoint protection',
        'Email security',
        'Network monitoring',
        'Vulnerability assessment',
        'Incident response']
      ],
      benefits: [,
        'Prevent 99.9% of threats',
        'Reduce security incidents by 95%',
        'Comply with regulations',
        'Protect sensitive data']
      ],
      popular: true,
      rating: 4.9,
      users: 3200,
      link: 'https://ziontechgroup.com/cybersecurity-suite',
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance.',
      icon: Network,
      category: 'infrastructure',
      pricing: { starting: 399, period: 'month' },
      features: [,
        'Network design and planning',
        'Hardware installation',
        'Configuration and optimization',
        'Monitoring and maintenance',
        'Troubleshooting',
        'Performance tuning']
      ],
      benefits: [,
        'Improve network performance by 80%',
        'Reduce connectivity issues by 90%',
        'Enhance security',
        'Support business growth']
      ],
      popular: false,
      rating: 4.7,
      users: 1800,
      link: 'https://ziontechgroup.com/network-infrastructure',
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      description: 'Reliable data protection with automated backups and rapid recovery solutions.',
      icon: Database,
'use client';

import React, { Helmet } from 'react-helmet-async'.
  return (
    <div>;
  );
    </div>;
  );
  );
  );
    <>
      <Helmet>
export default ItServicesPage.
import React from 'react'
import React, { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Cpu, DollarSign, Star, Clock, Users, Network, Settings } from 'lucide-react'.
import React, { Helmet } from 'react-helmet-async'.
import React, { Link } from 'react-router-dom'.
import React, { Helmet } from 'react-helmet-async'.
import React, { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Code } from 'lucide-react'.
import React, { Link } from 'react-router-dom'.
export default function ITServicesPage() {
  const services = ["
    {""
      icon: <Cloud className="w-8 h-8 text-blue-500" />,"
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,;
      duration: '2-4 weeks',;
    };
  ];
import React, { CheckCircle, ArrowRight, Server, Shield, Cloud, Database, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
import React, { Helmet } from 'react-helmet-async';
import React, { Link } from 'react-router-dom';
const ItServicesPage: React.FC = () => {
  const itServices = ["
    {,""
      icon: <Server className="w-8 h-8 text-blue-500" />,"
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support', 'Disaster recovery'],
      pricing: 'Starting at $299/month',
      category: 'Infrastructure',
    },"
    {""
      icon: <Shield className="w-8 h-8 text-red-500" />,"
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and data.',
      features: ['Security audits', 'Threat monitoring', 'Firewall management', 'Incident response', 'Compliance support'],
      pricing: 'Starting at $199/month',
      category: 'Security',
    },"
    {""
      icon: <Cloud className="w-8 h-8 text-green-500" />,"
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration and ongoing cloud infrastructure management.',
      features: ['Cloud strategy planning', 'Data migration', 'Cost optimization', 'Multi-cloud management', 'Backup solutions'],
      pricing: 'Starting at $399/month',
      category: 'Cloud',
    },"
    {""
      icon: <Database className="w-8 h-8 text-purple-500" />,"
      title: 'Database Administration',
      description: 'Expert database design, optimization, and maintenance services.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Monitoring & alerts'],
      pricing: 'Starting at $249/month',
      category: 'Database',
    },"
    {""
      icon: <Network className="w-8 h-8 text-orange-500" />,"
      title: 'Network Solutions',
      description: 'Complete network design, implementation, and management services.',
      features: ['Network design', 'Wireless solutions', 'VPN setup', 'Load balancing', 'Network security'],
      pricing: 'Starting at $179/month',
      category: 'Network',
    },"
    {""
      icon: <Settings className="w-8 h-8 text-yellow-500" />,"
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for your organization.',
      features: ['24/7 support', 'Remote assistance', 'Ticket management', 'Knowledge base', 'User training'],
      pricing: 'Starting at $99/month',
      category: 'Support'
    },
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Cloud', 'Database', 'Network', 'Support'];'

  const stats = [
    { number: '500+', label: 'Projects Completed' },'
    { number: '99.9%', label: 'Uptime Guarantee' },'
    { number: '50+', label: 'Expert Engineers' },'
    { number: '24/7', label: 'Support Available' }',
  ];

  const Component = () => {
  "
    return (""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>"
        <title>IT Services - Zion Tech Group</title>""
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and digital transformation." />"
      </Helmet>""
      <div className="container mx-auto px-4 py-20">"""
        <div className="text-center mb-16">"""
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">""",
            IT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>"
          </h1>""
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
            Comprehensive IT solutions to power your digital transformation,
          </p>"
        </div>""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
          {itServices.map((service, index) => (""
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover: bg-white/15 transition-all duration-300 group">"""
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon};"
              </div>""
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {service.title};"
              </h3>""
              <p className="text-gray-300 mb-6">{service.description}</p>"""
              <ul className="space-y-2 mb-6">,"
                {service.features.map((feature, featureIndex) => (""
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">"""
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature};
                  </li>
                ))};"
              </ul>""
              <div className="flex items-center justify-between mb-4">"""
                <span className="text-2xl font-bold text-white">{service.pricing}</span>"
                {service.popular && (""
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular.
                  </span>
                )};"
              </div>""
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">"
                <span>{service.duration}</span>""
                <div className="flex items-center">"""
                  <Clock className="w-4 h-4 text-blue-400 mr-1" />
                  Duration.
                </div>
              </div>
              <Link;"
                to={service.link};""
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
              >,"
                Learn More""
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>"*/
          {/* Stats Section */};""
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">,"
            {stats.map((stat, index) => (""
              <div key={index} className="text-center">"""
                <div className="text-3xl md: text-4xl font-bold text-white mb-2">{stat.number}</div>"""
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))};
          </div>
        </div>
      </section>,
  );"
      {/* Category Filter */};""
      <section className="py-10 px-4">"""
        <div className="max-w-7xl mx-auto">"""
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button.
                key={index};
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  category === 'All' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-white/10 text-gray-300 hover: bg-white/20'`
                }`};
              >
                {category};
              </button>
            ))};
          </div>
        </div>
      </section>"
      {/* Services Grid */};""
      <section className="py-20 px-4">"""
        <div className="max-w-7xl mx-auto">"""
          <div className="text-center mb-16">"""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>"""
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">,
              Comprehensive IT solutions tailored to your business needs,
            </p>"
          </div>""
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-20">,"
            {itServices.map((service, index) => (""
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover: bg-white/15 transition-all duration-300">"""
                <div className="mb-4">{service.icon}</div>"""
                <div className="mb-2">"""
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category};
                  </span>"
                </div>""
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>"""
                <p className="text-gray-300 mb-6">{service.description}</p>"""
                <div className="mb-6">"""
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>"""
                  <div className="text-gray-400 text-sm">per month</div>"
                </div>""
                <ul className="space-y-2 mb-8">,"
                  {service.features.map((feature, featureIndex) => (""
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">"""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature};
                    </li>
                  ))};
                </ul>"
                <Link ""
                  to="/contact"""
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >,"
                  Get Quote""
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))};
          </div>
        </div>
      </section>"
      {/* Why Choose Us Section */};""
      <section className="py-20 px-4">"""
        <div className="max-w-7xl mx-auto">"""
          <div className="text-center mb-16">"""
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>"""
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">,
              We deliver exceptional IT services with unmatched expertise and support.
            </p>"
          </div>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"""
            <div className="text-center">"""
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">"""
                <Users className="w-8 h-8 text-white" />"
              </div>""
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>"""
              <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions.</p>"
            </div>""
            <div className="text-center">"""
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">"""
                <Clock className="w-8 h-8 text-white" />"
              </div>""
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>"""
              <p className="text-gray-300">Round-the-clock monitoring and support to keep your systems running.</p>"
            </div>""
            <div className="text-center">"""
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">"""
                <Shield className="w-8 h-8 text-white" />"
              </div>""
              <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>"""
              <p className="text-gray-300">Enterprise-grade security measures to protect your valuable data.</p>"
            </div>""
            <div className="text-center">"""
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">"""
                <DollarSign className="w-8 h-8 text-white" />"
              </div>""
              <h3 className="text-xl font-semibold text-white mb-2">Cost Effective</h3>"""
              <p className="text-gray-300">Competitive pricing with transparent costs and no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>"
      {/* CTA Section */};""
      <section className="py-20 px-4">"""
        <div className="max-w-7xl mx-auto">"""
          <div className="text-center">"""
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">"""
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Upgrade Your IT Infrastructure?</h2>"""
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how we can optimize your IT operations."
              </p>""
              <div className="flex flex-col sm: flex-row gap-4 justify-center">"
                <Link ""
                  to="/contact" """
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >,
                  Get Free Consultation.
                </Link>"
                <Link "",
                  to="/about" "","
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >,
                  Learn About Us,
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
const ITServicesPage: React.FC = () => {
  const Component = () => {
  "
    return (""
    <div className="min-h-screen bg-gray-900 text-white py-20">"""
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">"""
        <h1 className="text-4xl font-bold mb-8">IT Services</h1>"""
        <div className="prose prose-invert max-w-none">"""
          <p className="text-lg text-gray-300 mb-6">,
            Comprehensive IT solutions for your business needs;
          </p>
        </div>
      </div>
      title: 'Database Management',
      description: 'Optimized database solutions for performance and reliability',
      category: 'Data',
      price: '$149/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
      benefits: ['High Performance', 'Data Integrity', 'Automated Backups', 'Expert Support'],
    },
    {
      icon: Code,
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment processes',
      category: 'Development',
      price: '$249/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      benefits: ['Faster Deployments', 'Reduced Errors', 'Team Collaboration', 'Continuous Integration'],
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      category: 'Development',
      price: '$399/month',
      features: ['iOS/Android Apps', 'Cross-platform', 'UI/UX Design', 'App Store Deployment'],
      benefits: ['Modern Design', 'High Performance', 'User Engagement', 'Market Ready'],
    },
    {
      icon: Lock,
      title: 'Network Security',
      description: 'Advanced network protection and monitoring',
      category: 'Security',
      price: '$179/month',
      features: ['VPN Setup', 'Network Monitoring', 'Access Control', 'Security Policies'],
      benefits: ['Secure Access', 'Real-time Monitoring', 'Compliance', 'Threat Prevention'],
    },
    {
      icon: TrendingUp,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmaps',
      category: 'Consulting',
      price: '$199/hour',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance'],
      benefits: ['Expert Advice', 'Cost Savings', 'Future-proofing', 'Competitive Advantage'],
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Complete system administration and maintenance',
      category: 'Infrastructure',
      price: '$899/month',
      features: ['Server Management', 'User Administration', 'System Updates', 'Performance Optimization'],
      benefits: ['Reliable Systems', 'Proactive Maintenance', 'Expert Support', 'Cost Efficiency'],
    };
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  const Component = () => {
  "
    return (""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">"
      <Navigation />""
      <main className="container mx-auto px-4 py-16 pt-24">"""
        <section className="text-center mb-16">"""
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">,
            IT Services."
          </h1>""
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
            Comprehensive IT solutions to power your business growth and digital transformation,
          </p>
        </section>"
        {/* Services Grid */};""
        <section className="mb-16">"""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {itServices.map((service, index) => (""
              <div key={index} className="cyber-card p-6 hover: scale-105 transition-all duration-300">"""
                <div className="flex items-center mb-4">"""
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">"""
                    <service.icon className="w-6 h-6 text-white" />
                  </div>"
                  <div>""
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>"""
                    <p className="text-sm text-cyan-400">{service.category}</p>
                  </div>"
                </div>""
                <p className="text-gray-300 mb-4">{service.description}</p>""
                <div className="mb-4">"""
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>"""
                  <ul className="text-sm text-gray-400 space-y-1">,"
                    {service.features.map((feature, idx) => (""
                      <li key={idx} className="flex items-center">"""
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature};
                      </li>
                    ))};
                  </ul>"
                </div>""
                <div className="mb-4">"""
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits: </h4>"""
                  <ul className="text-sm text-gray-400 space-y-1">,"
                    {service.benefits.slice(0, 3).map((benefit, idx) => (""
                      <li key={idx} className="flex items-center">"""
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit};
                      </li>
                    ))};
                  </ul>"
                </div>""
                <div className="mb-4">"""
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>"
                  <a ""
                    href="/contact" """
                    className="inline-flex items-center text-cyan-400 hover: text-cyan-300 font-medium""
                  >","
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))};
          </div>
        </section>"
        {/* Categories */};""
        <section className="mb-16">"""
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Categories</h2>"""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">,"
            {categories.map((category, index) => (""
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">"""
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">"""
                  <Cpu className="w-8 h-8 text-white" />"
                </div>""
                <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>"""
                <p className="text-gray-300 text-sm">"
                  {category === 'Infrastructure' && 'Cloud and server solutions'}'
                  {category === 'Security' && 'Cybersecurity and protection'}'
                  {category === 'Data' && 'Database and data management'}'
                  {category === 'Development' && 'Software and app development'}'
                  {category === 'Consulting' && 'Strategic IT consulting'}'
                </p>
              </div>
            ))};
          </div>
        </section>"
        {/* CTA Section */};""
        <section className="text-center">"""
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT?</h2>"""
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure."
          </p>""
          <div className="flex flex-col sm: flex-row gap-4 justify-center">"
            <a "",
              href="/contact" "","
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >,
              Get Started,
            </a>"
            <a ""
              href="/case-studies" """
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-white transition-all"
            >,
              View Case Studies;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ITServicesPage."
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>""
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and more. Transform your business with our expert IT solutions." />"""
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, DevOps, database management" />"""
        <meta property="og: title" content="IT Services - Zion Tech Group" />",""
        <meta property="og:description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and more." />"""
        <meta property="og: type" content="website" />"""
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />"""
        <script type="application/ld+json">"
          {JSON.stringify({,""
            "@context": "https://schema.org","""
            "@type": "Service","""
            "name": "IT Services","""
            "description": "Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and more","""
            "provider": {"""
              "@type": "Organization","""
              "name": "Zion Tech Group","""
              "url": "https: //ziontechgroup.com","
            },""
            "serviceType": "IT Services","""
            "areaServed": "Worldwide";
          })};
        </script>"
      </Helmet>""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        {/* Hero Section */};""
        <section className="relative py-20 overflow-hidden">"""
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>"""
          <div className="container mx-auto px-4 relative z-10">"""
            <div className="text-center max-w-4xl mx-auto">"""
              <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">"""
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">IT Services</span>"
              </h1>""
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT solutions to transform your business infrastructure and drive digital innovation."
              </p>""
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <Link ""
                  to="/contact"""
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                >"
                  Get Free Consultation""
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>"
                <Link "",
                  to="/pricing""",
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >,
                  View Pricing.
                </Link>
              </div>
            </div>
          </div>
        </section>"
        {/* Services Grid */};""
        <section className="py-20">"""
          <div className="container mx-auto px-4">"""
            <div className="text-center mb-16">"""
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">"","
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>"
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
                Comprehensive IT solutions designed to meet your business needs,
              </p>"
            </div>""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div ."
                  key={index};""
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover: border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105""
                >""
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon};"
                  </div>""
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title};"
                  </h3>""
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description};"
                  </p>""
                  <ul className="space-y-2 mb-6">,"
                    {service.features.map((feature, featureIndex) => (""
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">"""
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature};
                      </li>
                    ))};
                  </ul>
                  <Link ."
                    to={service.href};""
                    className="text-cyan-400 hover: text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                  >,
                    Learn More →
                  </Link>
                </div>
              ))};
            </div>
          </div>
        </section>"
        {/* Process */};""
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">"""
          <div className="container mx-auto px-4">"""
            <div className="text-center mb-16">"""
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">"","
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Process</span>"
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
                A proven methodology for delivering successful IT solutions,
              </p>"
            </div>""
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,"
              {process.map((step, index) => (""
                <div key={index} className="text-center group">"""
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover: scale-110 transition-transform duration-300">
                    {step.icon};"
                  </div>""
                  <div className="text-cyan-400 font-bold text-lg mb-2">{step.step}</div>"""
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>"""
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {step.description};
                  </p>
                </div>
              ))};
            </div>
          </div>
        </section>"
        {/* Technologies */};""
        <section className="py-20">"""
          <div className="container mx-auto px-4">"""
            <div className="text-center mb-16">"""
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">"","
                Technologies We <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Use</span>"
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
                Cutting-edge technologies and tools for modern IT solutions,
              </p>"
            </div>""
            <div className="grid grid-cols-2 md: grid-cols-4 lg:grid-cols-6 gap-6">,
              {technologies.map((tech, index) => (
                <div ."
                  key={index};""
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover: border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105 text-center""
                >""
                  <div className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {tech.icon};"
                  </div>""
                  <div className="text-white font-medium text-sm">{tech.name}</div>"""
                  <div className="text-gray-400 text-xs mt-1">{tech.category}</div>
                </div>
              ))};
            </div>
          </div>
        </section>"
        {/* Benefits */};""
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">"""
          <div className="container mx-auto px-4">"""
            <div className="text-center mb-16">"""
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">"","
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>"
              </h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
                The benefits of partnering with Zion Tech Group for your IT needs,
              </p>"
            </div>""
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,"
              {benefits.map((benefit, index) => (""
                <div key={index} className="text-center group">"""
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover: scale-110 transition-transform duration-300">
                    {benefit.icon};"
                  </div>""
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>"""
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description};
                  </p>
                </div>
              ))};
            </div>
          </div>
        </section>"
        {/* CTA Section */};""
        <section className="py-20">"""
          <div className="container mx-auto px-4">"""
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">"""
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>"""
              <div className="relative z-10">"""
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your IT Infrastructure?"
                </h2>""
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">"
                  Let's discuss how our IT services can optimize your systems and drive business growth.'"
                </p>""
                <div className="flex flex-col sm: flex-row gap-4 justify-center">"
                  <Link ""
                    to="/contact"""
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >,
                    Get Started Today.
                  </Link>"
                  <Link "",
                    to="/about"","
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >,
                    Learn More About Us,
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>;
  );"
};""`