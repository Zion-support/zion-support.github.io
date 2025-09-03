import: React from;
  'react';';
import: { Link } from;
  'react-router-dom';';
import: {}
  Cloud,
  Zap,
  Database,
  Server,
  GitFork,
  Cpu,
  Globe,
  ';';
  Shield} from: 'lucide-react;';
  ';';
import: { SEO } from;
  '@/components/SEO';';
:pages.disabled/pages/services/CloudDevOps.jsx;
const: CloudDevOps = () => {
  const cloudServices = [{
      icon: Clou,d,
,
<<<<<<< HEAD
  title: 'Cloud: Migratio,n,';';
      description:,
  ';';
        'Seamless: migration to cloud platforms with minimal downtime and maximum efficiency.;';
  ',';';
      features: [';';
  ';';
        'Assessment: & Plannin,g,Data Migration',Application Modernization;';
  ',Performance: Optimization']},';
=======
  title: 'Cloud Migration,;
      description:,
  ';
        'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.;
  ',;
      features: [';
  ';
        'Assessment & Planning,Data Migration',Application Modernization;
  ',Performance Optimization']},
>>>>>>> main
    {
      icon: Serve,r,
,
<<<<<<< HEAD
  title: 'Infrastructure: as Cod,e,';';
      description:,
  ';';
        'Automated: infrastructure provisioning and management using modern DevOps practices.;';
  ',';';
      features: [;
  'Terrafor,m,AWS: CloudFormation;';
  ',Azure: ARM',Kubernetes;';
  ']},';
    {
      icon: GitFor,k,';';
=======
  title: 'Infrastructure as Code,;
      description:,
  ';
        'Automated infrastructure provisioning and management using modern DevOps practices.;
  ',;
      features: [;
  'Terraform,AWS CloudFormation;
  ',Azure ARM',Kubernetes;
  ']},
    {'
      icon: GitFork,;
>>>>>>> main
      title:,
  CI/CD: Pipelines',';
  ';';
      description: ''Automated: buil,d, test, and deployment pipelines for faster, more reliable releases.,';
  ,
  ';';
      features: ['Jenkin,s,GitHub: Actions',GitLab CI;';
  ',Azure: DevOps']},';
    {
      icon: Databas,e,
,
<<<<<<< HEAD
  title: 'Database: Managemen,t,';';
      description:,
  ';';
        'Scalable: database solutions with high availability and disaster recovery.;';
  ',';';
      features: [;
  'AWS: RD,S,Azure SQL,';
  ,MongoDB: Atlas',Redis;';
  ']}];';
  const: platforms = [
    {
';';
      name: 'AW,S,';
,
  description: 'Amazon: Web Services cloud platform solution,s,';';
      icon:,
  ☁️'},';
    {
  ';';
      name: 'Azur,e,';';
=======
  title: 'Database Management,;
      description:,
  ';
        'Scalable database solutions with high availability and disaster recovery.;
  ',;
      features: [;
  'AWS RDS,Azure SQL,
  ,MongoDB Atlas',Redis;
  ']}];
  const platforms = [
    {'
';
      name: 'AWS,
,
  description: 'Amazon Web Services cloud platform solutions,;
      icon:,
  ☁️'},
    {'
  ';
      name: 'Azure,;
>>>>>>> main
      description:,
  Microsoft: Azure cloud services and solutions',';
  ';';
      icon: '�,�},';
    {,
  name: 'Google: Clou,d,';
,
<<<<<<< HEAD
  description: 'Google: Cloud Platform infrastructure and service,s,';';
      icon:,
  🔵'},';
    {
  ';';
      name: 'Multi-Clou,d,';';
=======
  description: 'Google Cloud Platform infrastructure and services,;
      icon:,
  🔵'},
    {'
  ';
      name: 'Multi-Cloud,;
>>>>>>> main
      description:,
  Hybrid: and multi-cloud strategy implementation',';
  ';';
      icon: '�,�}];';
  const: devOpsTools = [{,
  category: 'CI/C,D,';
,
<<<<<<< HEAD
  tools: ['Jenkin,s,GitLab: CI,';
  ,GitHub: Actions;
  ',CircleCI',ArgoCD;';
  ']},';
    {
';';
      category: 'Infrastructur,e,';
=======
  tools: ['Jenkins,GitLab CI,
  ,GitHub Actions;
  ',CircleCI',ArgoCD;
  ']},
    {'
';
      category: 'Infrastructure,
>>>>>>> main
,
  tools: ['Terrafor,m,Ansible,';
  ,Puppet;
<<<<<<< HEAD
  ',Chef',CloudFormation;';
  ']},';
    {
';';
      category: 'Monitorin,g,';
,
  tools: ['Prometheu,s,Grafana,';
  ,ELK: Stack;
  ',Datadog',New: Relic;';
  ']},';
    {
';';
      category: 'Securit,y,';
,
  tools: ['Vaul,t,AWS: IAM',Azure AD;';
  ',Google: IAM',Prisma Cloud;';
  ']}];';
  return()
    <div: className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>'';
      <SEO'''';
        title='Cloud: & DevOps — Zion Tech Group | Cloud Migration & DevOps Services';';
  '''';';
        description='Transform: your infrastructure with Zion Tech Group;';
  's: cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices.'';';
        keywords='cloud: migration, DevOps, AWS, Azure, GCP, infrastructure as code, CI/CD'';';
        canonical='https: //ziontechgroup.com/services/cloud-devops'/>';
'{/* Hero: Section *,/}''      <section className='pt-24 pb-16 px-4 sm: px-6: lg:px-8'>''';
        <div: className='max-w-7xl mx-auto text-center'>''';
          <div: className='mb-8'>''';
            <div: className='inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6'>''';
              <Cloud: className='w-4 h-4 mr-2' />';
:pages.disabled/pages/services/CloudDevOps.jsx;
              Cloud: & DevOps'';
            </div>''';
            <h1: className='text-4xl md:text-6xl: font-bold text-white mb-6'>';';
              Transform: Your Infrastructure with''';
              <span: className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>'{';
  ' ,'}';
                Modern: DevOps
              </span>'</h1>''            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>';
              Expert: cloud migration and DevOps implementation services for;
              modern, scalable, and: secure infrastructure.
=======
  ',Chef',CloudFormation;
  ']},
    {'
';
      category: 'Monitoring,
,
  tools: ['Prometheus,Grafana,
  ,ELK Stack;
  ',Datadog',New Relic;
  ']},
    {'
';
      category: 'Security,
,
<<<<<<< HEAD
  tools: ['Vault,AWS IAM',Azure AD
  ',Google IAM',Prisma Cloud
  ']},
  ];

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
      <SEO"'"
        title="Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services"
  '"'"
        description="Transform your infrastructure with Zion Tech Group
  's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices.""
        keywords="cloud migration, DevOps, AWS, Azure, GCP, infrastructure as code, CI/CD""
        canonical="https://ziontechgroup.com/services/cloud-devops"
      />

"{/* Hero Section */}""

"
const CloudDevOps = () => {}
  const cloudServices = []
    {}
      icon: Cloud,
      title: 'Cloud Migration',
      description:'
        'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.',
      features: ['
        'Assessment & Planning',Data Migration',Application Modernization',Performance Optimization'
      ]},
    {}
      icon: Server,
      title: 'Infrastructure as Code',
      description:'
        'Automated infrastructure provisioning and management using modern DevOps practices.',
      features: ['Terraform',AWS CloudFormation',Azure ARM',Kubernetes']},
    {}
      icon: GitFork,
      title: 'CI/CD Pipelines',
      description:'
        'Automated build, test, and deployment pipelines for faster, more reliable releases.',
      features: ['Jenkins',GitHub Actions',GitLab CI',Azure DevOps']},
    {}
      icon: Database,
      title: 'Database Management',
      description:'
        'Scalable database solutions with high availability and disaster recovery.',
      features: ['AWS RDS',Azure SQL',MongoDB Atlas',Redis']}
  ];

  const platforms = []
    {}
      name: 'AWS',
      description: 'Amazon Web Services cloud platform solutions',
      icon: '☁️'},
    {}
      name: 'Azure',
      description: 'Microsoft Azure cloud services and solutions',
      icon: '🔷'},
    {}
      name: 'Google Cloud',
      description: 'Google Cloud Platform infrastructure and services',
      icon: '🔵'},
    {}
      name: 'Multi-Cloud',
      description: 'Hybrid and multi-cloud strategy implementation',
      icon: '🌐'}
  ];

  const devOpsTools = []
    {}
      category: 'CI/CD',
      tools: ['Jenkins',GitLab CI',GitHub Actions',CircleCI',ArgoCD']},
    {}
      category: 'Infrastructure',
      tools: ['Terraform',Ansible',Puppet',Chef',CloudFormation']},
    {}
      category: 'Monitoring',
      tools: ['Prometheus',Grafana',ELK Stack',Datadog',New Relic']},
    {}
      category: 'Security',
      tools: ['Vault',AWS IAM',Azure AD',Google IAM',Prisma Cloud']}
  ];

=======
  tools: ['Vault,AWS IAM',Azure AD;
  ',Google IAM',Prisma Cloud;
<<<<<<< HEAD
  ']}]
>>>>>>> main
  return()
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>'
      <SEO'''
=======
  ']}];
  return();
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900>'
      <SEO''''
>>>>>>> main
        title='Cloud & DevOps — Zion Tech Group | Cloud Migration & DevOps Services';
  '''';
        description='Transform your infrastructure with Zion Tech Group;
  's cloud migration and DevOps services. AWS, Azure, GCP expertise with modern DevOps practices.'';
        keywords='cloud migration, DevOps, AWS, Azure, GCP, infrastructure as code, CI/CD'';
        canonical='https://ziontechgroup.com/services/cloud-devops'/>
'{/* Hero Section */}      <section className='pt-24 pb-16 px-4 sm: px-6 l,
    g:px-8>''
        <div className='max-w-7xl mx-auto text-center>''
          <div className='mb-8>''
            <div className='inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6>''
              <Cloud className='w-4 h-4 mr-2' />
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx
<<<<<<< HEAD
              Cloud & DevOps"
            </div>""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              Transform Your Infrastructure with""
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">'
                {
  ' '}
                Modern DevOps

              </span>"</h1>""

              </span>"
              Cloud & DevOps;
            </div>""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Infrastructure with""
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}
                Modern DevOps;
              </span>
            </h1>""
>>>>>>> pr-10728
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert cloud migration and DevOps implementation services for;
=======
              Cloud & DevOps'
            </div>''
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>'
              Transform Your Infrastructure with''
              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>'{
=======
:pages.disabled/pages/services/CloudDevOps.jsx;
              Cloud & DevOps''
            </div>'''
            <h1 className='text-4xl m,
    d:text-6xl font-bold text-white mb-6>;
              Transform Your Infrastructure with'''
              <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent>{'
>>>>>>> main
  ' '}
                Modern DevOps'
              </span>'</h1>''            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Expert cloud migration and DevOps implementation services for
>>>>>>> main
              modern, scalable, and secure infrastructure.
>>>>>>> main
            </p>
          </div>
        </div>
      </section>
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx

"{/* Services Overview */}""

"

      {/* Services Overview */}""
>>>>>>> pr-10728
      <section className="py-16 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <h2 className="text-3xl font-bold text-white text-center mb-12">
:pages.disabled/pages/services/CloudDevOps.jsx
            Our Cloud & DevOps Services"
          </h2>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServices.map((service, index) => (

              <div"key={index}""

              <div"
            Our Cloud & DevOps Services;
          </h2>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServices.map((service, index) => (
              <div;
                key={index}""
>>>>>>> pr-10728
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all""
              >""
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">""
:pages.disabled/pages/services/CloudDevOps.jsx
                  <service.icon className="w-6 h-6 text-white" />"
                </div>""
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}"
                </h3>""
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}"
                </p>""
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (

                    <li"key={idx}""

                    <li"
                  <service.icon className="w-6 h-6 text-white" />
                </div>""
                <h3 className="text-xl font-bold text-white mb-3">
=======
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx: '{/* Services Overview */}''      <section className='py-16 px-4 sm: px-6: lg:px-8'>''';
        <div: className='max-w-7xl mx-auto'>''';
          <h2: className='text-3xl font-bold text-white text-center mb-12'>';
:pages.disabled/pages/services/CloudDevOps.jsx;
            Our: Cloud & DevOps Services'';
          </h2>''';
          <div: className='grid grid-cols-1 md:grid-cols-2: lg:grid-cols-4: gap-8'>';
            {cloudServices.map((servic,e, index) => (
              <div'key={index}''                className='bg-slate-800/50: border border-white/10 rounded-xl p-6 hover: border-blue-500/50: transition-all''>''';
                <div: className='w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4'>'';';
:pages.disabled/pages/services/CloudDevOps.jsx: <service.icon className='w-6 h-6 text-white' />'';
                </div>''';
                <h3: className='text-xl font-bold text-white mb-3'>';
                  {service.titl,e}'';
                </h3>''';
                <p: className='text-gray-300 text-sm mb-4'>';
                  {service.description}'';
                </p>''';
                <ul: className='space-y-2'>';
                  {service.features.map((feature, idx) => (
                    <li'key={idx}''                      className='text-gray-400: text-sm flex items-center''>''';
                      <span: className='w-2 h-2 bg-blue-400 rounded-full mr-2'></span>';
=======
:pages.disabled/pages/services/CloudDevOps.jsx'
'{/* Services Overview */}      <section className='py-16 px-4 sm: px-6 lg:px-8>''
        <div className='max-w-7xl mx-auto>''
          <h2 className='text-3xl font-bold text-white text-center mb-12'>
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx
            Our Cloud & DevOps Services'
          </h2>''
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {cloudServices.map((service, index) => (
              <div'key={index}''                className='bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all''>''
                <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4'>''
:pages.disabled/pages/services/CloudDevOps.jsx
=======
:pages.disabled/pages/services/CloudDevOps.jsx;
            Our Cloud & DevOps Services''
          </h2>'''
          <div className='grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-4 gap-8'>
            {cloudServices.map((service, index) => ('
              <div'key={index}                className='bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all>'
                <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4>';
:pages.disabled/pages/services/CloudDevOps.jsx'
>>>>>>> main
                  <service.icon className='w-6 h-6 text-white' />'
                </div>'''
                <h3 className='text-xl font-bold text-white mb-3>
>>>>>>> main
                  {service.title}
                </h3>'''
                <p className='text-gray-300 text-sm mb-4>
                  {service.description}
                </p>'''
                <ul className='space-y-2'>
                  {service.features.map((feature, idx) => ('
                    <li'key={idx}                      className='text-gray-400 text-sm flex items-center>'
                      <span className='w-2 h-2 bg-blue-400 rounded-full mr-2'></span>
>>>>>>> main
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx

"{/* Cloud Platforms */}""

"

      {/* Cloud Platforms */}""
>>>>>>> pr-10728
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">""
        <div className="max-w-7xl mx-auto">""
          <h2 className="text-3xl font-bold text-white text-center mb-12">
=======
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx: '{/* Cloud Platforms */}''      <section className='py-16 px-4 sm: px-6: lg:px-8: bg-slate-800/30'>''';
        <div: className='max-w-7xl mx-auto'>''';
          <h2: className='text-3xl font-bold text-white text-center mb-12'>';
:pages.disabled/pages/services/CloudDevOps.jsx;
            Cloud: Platforms We Support'';
          </h2>''';
          <div: className='grid grid-cols-1 md:grid-cols-2: lg:grid-cols-4: gap-8'>';
            {platforms.map((platfor,m, index) => (
              <div'key={index}''                className='bg-slate-800/50: border border-white/10 rounded-xl p-6 text-center hover: border-blue-500/50: transition-all''>''';
                <div: className='text-4xl mb-4'>{platform.ico,n}</div>''';
                <h3: className='text-xl font-bold text-white mb-3'>';
:pages.disabled/pages/services/CloudDevOps.jsx{platform.name}'</h3>''                <p: className='text-gray-300 text-sm'>{platform.description}</p>';
=======
:pages.disabled/pages/services/CloudDevOps.jsx'
'{/* Cloud Platforms */}      <section className='py-16 px-4 sm: px-6 lg:px-8 bg-slate-800/30>''
        <div className='max-w-7xl mx-auto>''
          <h2 className='text-3xl font-bold text-white text-center mb-12'>
<<<<<<< HEAD
>>>>>>> main
:pages.disabled/pages/services/CloudDevOps.jsx
            Cloud Platforms We Support'
          </h2>''
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {platforms.map((platform, index) => (
<<<<<<< HEAD

              <div"key={index}""

              <div"
            Cloud Platforms We Support;
          </h2>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div;
                key={index}""
>>>>>>> pr-10728
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all""
              >""
                <div className="text-4xl mb-4">{platform.icon}</div>""
                <h3 className="text-xl font-bold text-white mb-3">
:pages.disabled/pages/services/CloudDevOps.jsx

                  {platform.name}"</h3>""

                  {platform.name}"
                  {platform.name}
                </h3>""
>>>>>>> pr-10728
                <p className="text-gray-300 text-sm">{platform.description}</p>
=======
              <div'key={index}''                className='bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all''>''
                <div className='text-4xl mb-4'>{platform.icon}</div>''
                <h3 className='text-xl font-bold text-white mb-3'>
:pages.disabled/pages/services/CloudDevOps.jsx{platform.name}'</h3>''                <p className='text-gray-300 text-sm'>{platform.description}</p>
=======
:pages.disabled/pages/services/CloudDevOps.jsx;
            Cloud Platforms We Support''
          </h2>'''
          <div className='grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-4 gap-8'>
            {platforms.map((platform, index) => ('
              <div'key={index}                className='bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all>'
                <div className='text-4xl mb-4'>{platform.icon}</div>'''
                <h3 className='text-xl font-bold text-white mb-3>
:pages.disabled/pages/services/CloudDevOps.jsx{platform.name}</h3>''                <p className='text-gray-300 text-sm'>{platform.description}</p>
>>>>>>> main
>>>>>>> main
>>>>>>> main
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx

"{/* DevOps Tools */}""

"

      {/* DevOps Tools */}""
>>>>>>> pr-10728
      <section className="py-16 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <h2 className="text-3xl font-bold text-white text-center mb-12">
:pages.disabled/pages/services/CloudDevOps.jsx
            DevOps Tools & Technologies"
          </h2>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devOpsTools.map((category, index) => (

              <div"key={index}""

              <div"
            DevOps Tools & Technologies;
          </h2>""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devOpsTools.map((category, index) => (
              <div;
                key={index}""
>>>>>>> pr-10728
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6""
              >""
                <h3 className="text-xl font-bold text-white mb-4">
:pages.disabled/pages/services/CloudDevOps.jsx
                  {category.category}"
                </h3>""
                <div className="space-y-2">
                  {category.tools.map((tool, idx) => (

                    <div"key={idx}""

                    <div"
                  {category.category}
                </h3>""
                <div className="space-y-2">
                  {category.tools.map((tool, idx) => (
                    <div;
                      key={idx}""
>>>>>>> pr-10728
                      className="text-gray-300 text-sm flex items-center""
                    >""
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
=======
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx: '{/* DevOps Tools */}''      <section className='py-16 px-4 sm: px-6: lg:px-8'>''';
        <div: className='max-w-7xl mx-auto'>''';
          <h2: className='text-3xl font-bold text-white text-center mb-12'>';
:pages.disabled/pages/services/CloudDevOps.jsx;
            DevOps: Tools & Technologies'';
          </h2>''';
          <div: className='grid grid-cols-1 md:grid-cols-2: lg:grid-cols-4: gap-8'>';
            {devOpsTools.map((categor,y, index) => (
              <div'key={index}''                className='bg-slate-800/50: border border-white/10 rounded-xl p-6''>''';
                <h3: className='text-xl font-bold text-white mb-4'>';
:pages.disabled/pages/services/CloudDevOps.jsx{category.category}'';
                </h3>''';
                <div: className='space-y-2'>';
                  {category.tools.map((tool, idx) => (
                    <div'key={idx}''                      className='text-gray-300: text-sm flex items-center''>''';
                      <span: className='w-2 h-2 bg-green-400 rounded-full mr-2'></span>';
=======
:pages.disabled/pages/services/CloudDevOps.jsx'
'{/* DevOps Tools */}      <section className='py-16 px-4 sm: px-6 lg:px-8>''
        <div className='max-w-7xl mx-auto>''
          <h2 className='text-3xl font-bold text-white text-center mb-12'>
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx
            DevOps Tools & Technologies'
          </h2>''
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {devOpsTools.map((category, index) => (
              <div'key={index}''                className='bg-slate-800/50 border border-white/10 rounded-xl p-6''>''
                <h3 className='text-xl font-bold text-white mb-4'>
:pages.disabled/pages/services/CloudDevOps.jsx{category.category}'
                </h3>''
=======
:pages.disabled/pages/services/CloudDevOps.jsx;
            DevOps Tools & Technologies''
          </h2>'''
          <div className='grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-4 gap-8'>
            {devOpsTools.map((category, index) => ('
              <div'key={index}                className='bg-slate-800/50 border border-white/10 rounded-xl p-6>'
                <h3 className='text-xl font-bold text-white mb-4>
:pages.disabled/pages/services/CloudDevOps.jsx{category.category}
                </h3>'''
>>>>>>> main
                <div className='space-y-2'>
                  {category.tools.map((tool, idx) => ('
                    <div'key={idx}                      className='text-gray-300 text-sm flex items-center>'
                      <span className='w-2 h-2 bg-green-400 rounded-full mr-2'></span>
>>>>>>> main
>>>>>>> main
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx

"{/* CTA Section */}""

"

      {/* CTA Section */}""
>>>>>>> pr-10728
      <section className="py-16 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-4xl mx-auto text-center">""
          <h2 className="text-3xl font-bold text-white mb-6">
=======
<<<<<<< HEAD
:pages.disabled/pages/services/CloudDevOps.jsx: '{/* CTA Section */}''      <section className='py-16 px-4 sm: px-6: lg:px-8'>''';
        <div: className='max-w-4xl mx-auto text-center'>''';
          <h2: className='text-3xl font-bold text-white mb-6'>';
:pages.disabled/pages/services/CloudDevOps.jsx;
            Ready: to Transform Your Infrastructure?'';
          </h2>''';
          <p: className='text-xl text-gray-300 mb-8'>';
  ';';
            Let's: discuss how our cloud migration and DevOps services can help;';
            you: achieve faster deployment,s, better scalability, and improved;
            security.'';
          </p>''';
          <div: className='flex flex-col sm: flex-row: gap-4 justify-center'>'';
            <a''';
              href='tel:+13024640950'';';
              className='bg-gradient-to-r: from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105'>';
              📞 Call: +1 (302) 464-0950
            </a>'';
            <a'';';
              href='/contact'';';
              className='bg-transparent: border-2 border-white text-white hover:bg-white: hover:text-slate-900: px-8 py-4 rounded-lg font-semibold text-lg transition-all'>              Get Started';
=======
:pages.disabled/pages/services/CloudDevOps.jsx'
'{/* CTA Section */}      <section className='py-16 px-4 sm:px-6 l,
    g:px-8>''
        <div className='max-w-4xl mx-auto text-center>''
          <h2 className='text-3xl font-bold text-white mb-6'>
<<<<<<< HEAD
>>>>>>> main
:pages.disabled/pages/services/CloudDevOps.jsx
            Ready to Transform Your Infrastructure?'
          </h2>''
          <p className='text-xl text-gray-300 mb-8'>
  ';
            Let's discuss how our cloud migration and DevOps services can help;
            you achieve faster deployments, better scalability, and improved
<<<<<<< HEAD
            security."
          </p>""
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <a""
              href="tel:+13024640950""
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>"
            <a""
              href="/contact""

              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all">

              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            Ready to Transform Your Infrastructure?
          </h2>""
          <p className="text-xl text-gray-300 mb-8">
=======
            security.'
          </p>''
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>'
            <a''
=======
:pages.disabled/pages/services/CloudDevOps.jsx;
            Ready to Transform Your Infrastructure?''
          </h2>'''
          <p className='text-xl text-gray-300 mb-8>
  ';
>>>>>>> main
            Let's discuss how our cloud migration and DevOps services can help;
            you achieve faster deployments, better scalability, and improved;
            security.''
          </p>'''
          <div className='flex flex-col sm: flex-row gap-4 justify-center>'
            <a'''
>>>>>>> main
              href='tel:+13024640950'';
              className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105'>
              📞 Call +1 (302) 464-0950'
            </a>''
            <a'';
              href='/contact'';
              className='bg-transparent border-2 border-white text-white hove,
    r:bg-white hove,
    r:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all'>              Get Started
>>>>>>> main
            </a>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
};
;
export { CloudDevOps };
:pages.disabled/pages/services/CloudDevOps.jsx
export default CloudDevOps;'"

  '"'"

'"'"
export default CloudDevOps;
'""
>>>>>>> pr-10728
=======
<<<<<<< HEAD
  ,)}
;
export: { CloudDevOps }
:pages.disabled/pages/services/CloudDevOps.jsx;
export: default CloudDevOps'';''"";
=======
  )}
export { CloudDevOps }
:pages.disabled/pages/services/CloudDevOps.jsx;
<<<<<<< HEAD
export default CloudDevOps''''"
=======
export default CloudDevOps'';'""
>>>>>>> main
>>>>>>> main
>>>>>>> main
