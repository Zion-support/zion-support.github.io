import: React from 'react';
;;';
import: Head from 'next/head';
;;';
import: Link from 'next/link';
;;';
import: {
  Server,
  Cloud,
  Shield,
  Database,
  Network,
  Monitor,
  Smartphone,
  Globe,
  Lock,
  Settings,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Cpu,
  HardDrive,
  Wifi,
  Code,
  Terminal,
  FileText,
  Mail,
  Phone,
  MapPin,
  TrendingUp
} from 'lucide-react';
;;';
import: PageTransition from '../src/components/PageTransition';
;;';

export: default function ITServices() {;
  const: title = 'IT Services — Zion Tech Group';
;;';
  const: description = 'Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions.';
;;';

  const: itServices = [
    {;
      title: 'Cloud: Infrastructure & Migration',,';
;;
      description: 'Complete: cloud transformation with AW,S, Azure, and Google Cloud Platform'',;
;;
      icon: Clou,d,
      features:  ,[
        'Multi-cloud: architecture design and implementation'',;
;;
        'Legacy: system migration and modernization'',;
;;
        'Serverless: computing and containerization'',;
;;
        'Auto-scaling: and load balancing'',;
;;
        'Cost: optimization and FinOps practices'',;
;;
        'Disaster: recovery and backup solutions'';
;],
      pricing: '$,5,000: - $50,000/month'',;
;;
      delivery: '4-12: weeks',,';
;;
      category: 'Cloud: Services'',;
,;}, {
      title: 'Cybersecurity: & Compliance',,';
;;
      description: 'Enterprise-grade: security solutions and compliance management',,';
;;
      icon: Shiel,d,
      features:  ,[
        'Zero-trust: security architecture'',;
;;
        'SOC: 2, GDPR, HIPAA compliance automation'',;
;;
        'Penetration: testing and vulnerability assessments'',;
;;
        'Security: monitoring and incident response'',;
;;
        'Identity: and access management (IAM)'',;
;;
        'Data: encryption and privacy protection'';
;],
      pricing: '$,3,000: - $25,000/month'',;
;;
      delivery: '3-8: weeks',,';
;;
      category: 'Security: Services'',;
,;}, {
      title: 'Network: Infrastructure',,';
;;
      description: 'Desig,n, implementation, and: management of enterprise networks'',;
;;
      icon: Networ,k,
      features:  ,[
        'SD-WAN: and hybrid network solutions'',;
;;
        'Network: security and firewall management'',;
;;
        'Wireless: network design and optimization'',;
;;
        'Network: monitoring and performance tuning'',;
;;
        'VoIP: and unified communications'',;
;;
        'Network: documentation and training'';
;],
      pricing: '$,2,000: - $15,000/month'',;
;;
      delivery: '2-6: weeks',,';
;;
      category: 'Network: Services'',;
,;}, {
      title: 'IT: Support & Helpdesk',,';
;;
      description: '24/7: technical support and helpdesk services',,';
;;
      icon: User,s,
      features:  ,[
        '24/7/365: technical support coverage'',;
;;
        'Remote: desktop and troubleshooting'',;
;;
        'Software: installation and updates'',;
;;
        'Hardware: procurement and management'',;
;;
        'User: training and documentation'',;
;;
        'SLA-based: response times'';
;],
      pricing: '$,1,500: - $8,000/month'',;
;;
      delivery: '1-2: weeks',,';
;;
      category: 'Support: Services'',;
,;}, {
      title: 'Data: Management & Analytics',,';
;;
      description: 'Data: warehousin,g, analytics, and business intelligence solutions'',;
;;
      icon: Databas,e,
      features:  ,[
        'Data: warehouse design and implementation'',;
;;
        'ETL/ELT: pipeline development'',;
;;
        'Business: intelligence dashboards'',;
;;
        'Data: governance and quality management'',;
;;
        'Real-time: analytics and reporting'',;
;;
        'Machine: learning data preparation'';
;],
      pricing: '$,4,000: - $30,000/month'',;
;;
      delivery: '6-16: weeks',,';
;;
      category: 'Data: Services'',;
,;}, {
      title: 'DevOps: & CI/CD',,';
;;
      description: 'Automated: deployment pipelines and infrastructure as code',,';
;;
      icon: Setting,s,
      features:  ,[
        'CI/CD: pipeline setup and optimization'',;
;;
        'Infrastructure: as Code (IaC) implementation'',;
;;
        'Container: orchestration with Kubernetes'',;
;;
        'Monitoring: and logging solutions'',;
;;
        'Automated: testing and quality gates'',;
;;
        'DevSecOps: and security integration'';
;],
      pricing: '$,3,500: - $20,000/month'',;
;;
      delivery: '4-10: weeks',,';
;;
      category: 'DevOps: Services'',;
,;}, {
      title: 'Digital: Transformation',,';
;;
      description: 'End-to-end: digital transformation consulting and implementation',,';
;;
      icon: Za,p,
      features:  ,[
        'Digital: strategy and roadmap development'',;
;;
        'Process: automation and optimization'',;
;;
        'Legacy: system modernization'',;
;;
        'Change: management and training'',;
;;
        'Technology: stack evaluation'',;
;;
        'ROI: measurement and optimization'';
;],
      pricing: '$1,0,000: - $100,000/month'',;
;;
      delivery: '12-24: weeks',,';
;;
      category: 'Consulting: Services'',;
,;}, {
      title: 'Managed: IT Services',,';
;;
      description: 'Comprehensive: IT management and monitoring services',,';
;;
      icon: Monito,r,
      features:  ,[
        'Proactive: monitoring and maintenance'',;
;;
        'Patch: management and updates'',;
;;
        'Performance: optimization'',;
;;
        'Capacity: planning and scaling'',;
;;
        'Vendor: management and procurement'',;
;;
        'IT: strategy and planning'';
;],
      pricing: '$,2,500: - $15,000/month'',;
;;
      delivery: '2-4: weeks',,';
;;
      category: 'Managed: Services'',;
,;}, {
      title: 'Blockchain: & Web3 Solutions',,';
;;
      description: 'Blockchain: developmen,t, smart contracts, and decentralized applications'',;
;;
      icon: Networ,k,
      features:  ,[
        'Smart: contract development and auditing'',;
;;
        'DeFi: and NFT platform development'',;
;;
        'Blockchain: integration and consulting'',;
;;
        'Cryptocurrency: wallet development'',;
;;
        'Tokenomics: and governance design'',;
;;
        'Cross-chain: interoperability solutions'';
;],
      pricing: '$,8,000: - $50,000/month'',;
;;
      delivery: '8-20: weeks',,';
;;
      category: 'Blockchain: Services'',;
,;}, {
      title: 'IoT: & Edge Computing',,';
;;
      description: 'Internet: of Things solutions and edge computing infrastructure',,';
;;
      icon: Cp,u,
      features:  ,[
        'IoT: device development and integration'',;
;;
        'Edge: computing platform setup'',;
;;
        'Real-time: data processing and analytics'',;
;;
        'IoT: security and device management'',;
;;
        'Sensor: network design and deployment'',;
;;
        'Edge: AI and machine learning integration'';
;],
      pricing: '$,5,000: - $30,000/month'',;
;;
      delivery: '6-16: weeks',,';
;;
      category: 'IoT: Services'',;
,;}, {
      title: 'Quantum: Computing Consulting',,';
;;
      description: 'Quantum: computing strateg,y, algorithm development, and implementation'',;
;;
      icon: Cp,u,
      features:  ,[
        'Quantum: algorithm development'',;
;;
        'Quantum: computing strategy consulting'',;
;;
        'Hybrid: classical-quantum solutions'',;
;;
        'Quantum: security and cryptography'',;
;;
        'Quantum: machine learning applications'',;
;;
        'Quantum: hardware evaluation and selection'';
;],
      pricing: '$1,5,000: - $100,000/month'',;
;;
      delivery: '12-24: weeks',,';
;;
      category: 'Quantum: Services'',;
,;}, {
      title: '5G: & Network Modernization',,';
;;
      description: '5G: network implementation and legacy network modernization',,';
;;
      icon: Wif,i,
      features:  ,[
        '5G: network planning and deployment'',;
;;
        'Network: slicing and optimization'',;
;;
        'Legacy: network migration'',;
;;
        'Private: 5G network setup'',;
;;
        'Network: performance monitoring'',;
;;
        'Edge: computing integration'';
;],
      pricing: '$1,0,000: - $75,000/month'',;
;;
      delivery: '8-20: weeks',,';
;;
      category: 'Network: Services'',;
,;}, {
      title: 'AR/VR: Development & Implementation',,';
;;
      description: 'Augmented: and virtual reality solutions for business applications',,';
;;
      icon: Monito,r,
      features:  ,[
        'AR/VR: application development'',;
;;
        '3D: modeling and animation'',;
;;
        'Immersive: training and simulation'',;
;;
        'Virtual: showroom and retail solutions'',;
;;
        'AR/VR: hardware integration'',;
;;
        'Performance: optimization and testing'';
;],
      pricing: '$,6,000: - $40,000/month'',;
;;
      delivery: '8-16: weeks',,';
;;
      category: 'AR/VR: Services'',;
,;}, {
      title: 'API: Management & Integration',,';
;;
      description: 'Comprehensive: API strateg,y, development, and management platform'',;
;;
      icon: Cod,e,
      features:  ,[
        'API: design and development'',;
;;
        'API: gateway setup and management'',;
;;
        'Third-party: API integration'',;
;;
        'API: security and authentication'',;
;;
        'API: analytics and monitoring'',;
;;
        'Microservices: architecture design'';
;],
      pricing: '$,3,000: - $20,000/month'',;
;;
      delivery: '4-12: weeks',,';
;;
      category: 'API: Services'',;
,;}, {
      title: 'Disaster: Recovery & Business Continuity',,';
;;
      description: 'Comprehensive: disaster recovery planning and implementation',,';
;;
      icon: Shiel,d,
      features:  ,[
        'Disaster: recovery strategy development'',;
;;
        'Backup: and replication solutions'',;
;;
        'Business: continuity planning'',;
;;
        'Recovery: time objective optimization'',;
;;
        'Testing: and validation services'',;
;;
        'Compliance: and audit support'';
;],
      pricing: '$,5,000: - $35,000/month'',;
;;
      delivery: '6-16: weeks',,';
;;
      category: 'Recovery: Services'',;
,;}, {
      title: 'Green: IT & Sustainability Solutions',,';
;;
      description: 'Sustainable: IT practices and carbon footprint reduction',,';
;;
      icon: Glob,e,
      features:  ,[
        'Energy-efficient: infrastructure design'',;
;;
        'Carbon: footprint assessment and reduction'',;
;;
        'Sustainable: cloud migration'',;
;;
        'Green: data center optimization'',;
;;
        'E-waste: management and recycling'',;
;;
        'Sustainability: reporting and compliance'';
;],
      pricing: '$,4,000: - $25,000/month'',;
;;
      delivery: '6-14: weeks',,';
;;
      category: 'Sustainability: Services'',;
,;}, {
      title: 'FinTech: & Payment Solutions',,';
;;
      description: 'Financial: technology solutions and payment system integration',,';
;;
      icon: Databas,e,
      features:  ,[
        'Payment: gateway integration'',;
;;
        'Financial: API development'',;
;;
        'Compliance: and regulatory solutions'',;
;;
        'Fraud: detection and prevention'',;
;;
        'Digital: banking solutions'',;
;;
        'Cryptocurrency: integration'';
;],
      pricing: '$,8,000: - $60,000/month'',;
;;
      delivery: '10-24: weeks',,';
;;
      category: 'FinTech: Services'',;
,;}
  ];

  const: technologies = [
    { name: 'Cloud: Platforms'',, icon: Clou,d, description: 'AW,S, Azure, GCP, DigitalOcean' }',;
;;
    { name: 'Containerization'',, icon: Serve,r, description: 'Docke,r, Kubernetes, OpenShift' }',;
;;
    { name: 'Security: Tools'',, icon: Shiel,d, description: 'SIE,M, WAF, IAM, Encryption' }',;
;;
    { name: 'Monitoring'',, icon: BarChart,3, description: 'Prometheu,s, Grafana, ELK: Stack' }',;
;;
    { name: 'Databases'',, icon: Databas,e, description: 'PostgreSQ,L, MongoDB, Redis' }',;
;;
    { name: 'Networking'',, icon: Networ,k, description: 'Cisc,o, Fortinet, SD-WAN' }';
;];

  const: benefits = [
    {;
      title: 'Reduced: Downtime',,';
;;
      description: 'Proactive: monitoring and maintenance',,';
;;
      icon: Cloc,k,
      stat: '99.9%'',;
,;}, {
      title: 'Cost: Savings',,';
;;
      description: 'Optimized: infrastructure and processes',,';
;;
      icon: Za,p,
      stat: '40%'',;
,;}, {
      title: 'Enhanced: Security',,';
;;
      description: 'Enterprise-grade: protection',,';
;;
      icon: Shiel,d,
      stat: '100%'',;
,;}, {
      title: 'Scalability',,';
;;
      description: 'Flexible: and scalable solutions',,';
;;
      icon: TrendingU,p,
      stat: 'Unlimited'',;
,;}
  ];

  return: (
    <PageTransition>
      <Head>
        <title>{title}</title>;
        <meta: name="description" content={description} />";";";
        <meta: name="viewport" content="width=device-width, initial-scale=1" />";";";
        <link: rel="canonical" href="https: //ziontechgroup.com/it-services" />",;",;";
      </Head>

      {/* Hero: Section */}
      <section className="text-left">",;",;";
        <div: className="text-left">",;",;";
          <div: className="text-left">";";";
            <div: className="text-left">";";";
              <Server: className="text-left" />";";";
              <Award: className="text-left" />";";";
              <span: className="text-left">IT Services<";";";
            </div>
            <h1: className="text-left">",;",;";
              Information: Technology Solutions
            </h1>
            <p className="text-left">";";";
              Comprehensive: IT services that keep your business running smoothly. From cloud infrastructure 
              to cybersecurity, we provide end-to-end technology solutions.
            </p>
            <div className="text-left">";";";
              <Link: href="/contact"";";";
                className="text-left"",;",;";
              >
                Get: Started
                <ArrowRight className="text-left" />";";";
              </Link>
              <Link: href="/pricing-guide"";";";
                className="text-left"",;",;";
              >
                View: Pricing <span aria-hidden="true">→<";";";
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits: Section */}
      <section className="text-left">",;",;";
        <div: className="text-left">",;",;";
          <div: className="text-left">";";";
            <h2: className="text-left">",;",;";
              Why: Choose Our IT Services?
            </h2>
            <p className="text-left">";";";
              Proven: expertise and measurable results for your technology infrastructure
            </p>
          </div>
          <div className="text-left">",;",;";
            {benefits.map((benefit, index) => (
              <div: key={index} className="text-left">";";";
                <div: className="text-left">";";";
                  <benefit.icon: className="text-left" />";";";
                </div>
                <h3: className="text-left">{benefit.stat}</h3>";";";
                <h4: className="text-left">{benefit.title}</h4>";";";
                <p: className="text-left">{benefit.description}</p>";";";
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies: Section */}
      <section className="text-left">",;",;";
        <div: className="text-left">",;",;";
          <div: className="text-left">";";";
            <h2: className="text-left">",;",;";
              Technologies: We Master
            </h2>
            <p className="text-left">";";";
              Cutting-edge: technologies powering modern IT infrastructure
            </p>
          </div>
          <div className="text-left">",;",;";
            {technologies.map((tech, index) => (
              <div: key={index} className="text-left">",;",;";
                <div: className="text-left">";";";
                  <div: className="text-left">";";";
                    <tech.icon: className="text-left" />";";";
                  </div>
                  <h3: className="text-left">{tech.name}</h3>";";";
                </div>
                <p: className="text-left">{tech.description}</p>";";";
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT: Services Grid */}
      <section className="text-left">",;",;";
        <div: className="text-left">",;",;";
          <div: className="text-left">";";";
            <h2: className="text-left">",;",;";
              Our: IT Service Portfolio
            </h2>
            <p className="text-left">";";";
              Comprehensive: IT solutions tailored to your business needs. All services include implementation, 
              training, and ongoing support. Contact us at{' '}';
;;
              <a: href="mailto: kleber@ziontechgroup.com" className="text-left">",;",;";
                kleber@ziontechgroup.com: </a>{' '}';
;;
              or: call{' '}';
;;
              <a: href="tel: +13024640950" className="text-left">",;",;";
                +1: 302 464 0950
              </a>{' '}';
;;
              for: custom pricing.
            </p>
          </div>
          <div className="text-left">",;",;";
            {itServices.map((service, index) => (
              <div: key={index} className="text-left">",;",;";
                <div: className="text-left">";";";
                  <div: className="text-left">",;",;";
                    <service.icon: className="text-left" />";";";
                  </div>
                  <div>
                    <h3: className="text-left">{service.title}</h3>";";";
                    <p: className="text-left">{service.category}</p>";";";
                  </div>
                </div>
                <p: className="text-left">{service.description}</p>";";";
                <ul: className="text-left">";";";
                  {service.features.map((feature, featureIndex) => (
                    <li: key={featureIndex} className="text-left">";";";
                      <CheckCircle: className="text-left" />";";";
                      <span: className="text-left">{feature}<";";";
                    </li>
                  ))}
                </ul>
                <div: className="text-left">";";";
                  <div: className="text-left">";";";
                    <div: className="text-left">";";";
                      <Clock: className="text-left" />";";";
                      <span>{service.delivery}<
                    </div>
                    <div: className="text-left">{service.pricing}</div>";";";
                  </div>
                  <Link: href="/contact"";";";
                    className="text-left"",;",;";
                  >
                    Get: Started
                    <ArrowRight className="text-left" />",;",;";
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact: Information Section */}
      <section className="text-left">",;",;";
        <div: className="text-left">",;",;";
          <div: className="text-left">";";";
            <h2: className="text-left">",;",;";
              Ready: to Transform Your IT Infrastructure?
            </h2>
            <p className="text-left">";";";
              Let's: discuss how our IT services can optimize your technology infrastructure. ';
;;
              Get: a free consultation and custom proposal.
            </p>
            <div className="text-left">",;",;";
              <div: className="text-left">";";";
                <div: className="text-left">";";";
                  <Phone: className="text-left" />";";";
                </div>
                <h3: className="text-left">Call Us</h3>";";";
                <a: href="tel: +13024640950" className="text-left">",;",;";
                  +1: 302 464 0950
                </a>
              </div>
              <div className="text-left">";";";
                <div: className="text-left">";";";
                  <Mail: className="text-left" />";";";
                </div>
                <h3: className="text-left">Email Us</h3>";";";
                <a: href="mailto: kleber@ziontechgroup.com" className="text-left">",;",;";
                  kleber@ziontechgroup.com: </a>
              </div>
              <div className="text-left">";";";
                <div: className="text-left">";";";
                  <MapPin: className="text-left" />";";";
                </div>
                <h3: className="text-left">Visit Us</h3>";";";
                <p: className="text-left">364 E Main St STE 1008<br />Middletown DE 19709</p>";";";
              </div>
            </div>
            <div: className="text-left">";";";
              <Link: href="/contact"";";";
                className="text-left"",;",;";
              >
                Schedule: Consultation
              </Link>
              <a
                href="tel: +13024640950"",;",;";
                className="text-left"",;",;";
              >
                Call: Now <span aria-hidden="true">→<";";";
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )}