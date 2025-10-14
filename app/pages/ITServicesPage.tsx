import React from 'react'; import {Helmet, Server, Cloud, Shield, Wrench, Monitor, Database }from 'react-helmet-async'; const ITServices Page: React.FC = ( )=> {const services = [ ]{icon: Server, title: 'Infrastructure Management', description: 'Comprehensive IT infrastructure setup, maintenance, andoptimizationfor maximum performance.', features: ['Server Configuration', 'Network Setup', 'Hardware Maintenance', 'Performance Monitoring' ]}, {icon: Cloud, title: 'Cloud Solutions', description: 'Migratetothe cloudwithour expertcloudarchitecture andmanagementservices.', features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation' ]}, {icon: Shield, title: 'Cybersecurity', description: 'Protectyourbusiness withadvancedsecurity solutionsandthreat monitoring.', features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance Management' ]}, {icon: Wrench, title: 'Technical Support', description: '24/7-technicalsupport andmaintenanceto keepyoursystems running smoothly.', features: ['24/7 Monitoring', 'Remote Support', 'Preventive Maintenance', 'Emergency Response' ]}, {icon: Monitor, title: 'System Integration', description: 'Seamlesslyintegratedifferent systemsandapplications forimprovedefficiency.', features: ['APIIntegration', 'Data Migration', 'System Customization', 'Workflow Automation' ]}, {icon: Database, title: 'Data Management', description: 'Secureandefficient data storage, backup, andrecoverysolutions.', features: ['Database Design', 'Data Backup', 'Recovery Planning', 'Data Security' ]} ]; return (
      <div className="min-h-screen bg-slate-9000-text-white"> 
      <Helmet> <title>ITServices - Zion Tech Group</title> <meta name="description"content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." /> <meta name="keywords"content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support, Zion Tech Group" /> 
      </Helmet> {/* Hero Section */ }, <section className="relativepy 20 bg-gradient-to-brfrom-slate-900-via-cyan-9-to-slate-900"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4-text-center"> <h1 className="text 5 xlmd:text-6-xlfont-boldmb-6-bg-gradient-to-rfrom-cyan-400-to-purple-400-bg-clip-text text-transparent"> ITServices </h1> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Comprehensive IT solutionstokeep yourbusinessrunning smoothlyandsecurely. Frominfrastructureto cloud, we&apos;vegotyou covered. </p> 
          
        </div>
      </div>
    </div> </section> {/* Services Grid */ }, <section className="py 20"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4"> 
            <div className="gridgrid cols 1-md:grid-cols-2-lg:grid-cols-3-gap-8"> {services.map ( (service, index )=> (<div y= {index }className="bg slate 8 rounded-xl p-8-borderborder-slate-7-hover:border-cyan-5-transition-all duration-30000-hover:transformhover:scale-1"> 
          </div><div className="w 1 h 1 bg-gradient-to-rfrom-cyan-500-to-purple-5-rounded-lgflexitems-centerjustify-centermb-6"> <service.iconclassName="w 8 h-8 text-white"/> 
          </div> 
          </div> <h3 className="text 2 xlfont-bold text-white mb-4"> {service.title }</h3> <p className="text gray 30-mb-6"> {service.description }</p> <div className="mb 6"> <h 4-className="text whitefont-semiboldmb-3">Key Features</h 4> <ul className="space y 2"> {service.features.map ( (feature, feature Index )=> (<like y= {feature Index }className="text gray 30-text-smflexitems-center"> <div className="w 2 h-2-bg-cyan-40-rounded-fullmr-3">
          </div> {feature }, </li> ) )}, </ul> 
          </div> 
          </div> <button className="w full bg gradient-to-r from-cyan-6 to-purple-600 text-white py-3-px-6-rounded-lgfont-semiboldhover:from-cyan-7-hover:to-purple-7-transition-all duration-30000"> Learn More </button> 
          </div> 
          </div> ) )}, 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> {/* CTASection */ }, <section className="py 20 bg-gradient-to-rfrom-cyan-9/3 0-to-purple-9/3 0"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4-text-center"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-6"> Readyto Optimize Your IT Infrastructure? </h2> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Let&apos;sdiscusshow our IT servicescanimprove yourbusinessoperations and security. </p> <div className="flexflex colsm:flex rowgap-4-justify-center"> <button className="bg gradient to-r from-cyan-6 to-purple-600 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-cyan-7-hover:to-purple-7-transition-all duration-30000-transformhover:scale-1"> Get Started </button> <button className="border 2 border white text-white px-8-py-4-rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9-transition-all duration-30000"> Schedule Consultation </button> 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> 
          </div> )}; export default ITServices Page;