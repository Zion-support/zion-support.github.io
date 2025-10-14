import React from 'react'; import {Helmet, Refresh Cw, Users, Target, Trending Up, Lightbulb, Check Circle }from 'react-helmet-async'; const Digital Transformation Page: React.FC = ( )=> {const services = [ ]{icon: Refresh Cw, title: 'Process Automation', description: 'Streamlineandautomate businessprocessesto improveefficiencyand reducemanualerrors.', features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring' ]}, {icon: Users, title: 'Change Management', description: 'Guideyourteam throughdigitaltransformation withcomprehensivechange management strategies.', features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics' ]}, {icon: Target, title: 'Strategic Planning', description: 'Developcomprehensivedigital transformationstrategiesaligned withyourbusiness objectives.', features: ['Digital Assessment', 'Technology Roadmap', 'ROIAnalysis', 'Implementation Planning' ]}, {icon: Trending Up, title: 'Performance Optimization', description: 'Optimizeyourdigital infrastructureandprocesses formaximumperformance and scalability.', features: ['Performance Analysis', 'System Optimization', 'Scalability Planning', 'Monitoring Setup' ]}, {icon: Lightbulb, title: 'Innovation Consulting', description: 'Identifyandimplement innovativetechnologiesto drivebusinessgrowth and competitiveness.', features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Implementation Support' ]}, {icon: Check Circle, title: 'Quality Assurance', description: 'Ensurethequality andreliabilityof yourdigitaltransformation initiatives.', features: ['Testing Strategies', 'Quality Metrics', 'Compliance Checking', 'Continuous Improvement' ]} ]; return (
      <div className="min-h-screen bg-slate-9000-text-white"> 
      <Helmet> <title>Digital Transformation - Zion Tech Group</title> <meta name="description"content="Comprehensive digital transformation services including process automation, change management, and strategic planning." /> <meta name="keywords"content="digital transformation, process automation, change management, strategic planning, innovation consulting, Zion Tech Group" /> 
      </Helmet> {/* Hero Section */ }, <section className="relativepy 20 bg-gradient-to-brfrom-slate-900-via-green-9-to-slate-900"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4-text-center"> <h1 className="text 5 xlmd:text-6-xlfont-boldmb-6-bg-gradient-to-rfrom-green-4-to-cyan-4-bg-clip-text text-transparent"> Digital Transformation </h1> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Transformyourbusiness withcomprehensivedigital solutions. Fromstrategyto implementation, weguideyou througheverystep ofyourdigital journey. </p> 
          
        </div>
      </div>
    </div> </section> {/* Services Grid */ }, <section className="py 20"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4"> 
            <div className="gridgrid cols 1-md:grid-cols-2-lg:grid-cols-3-gap-8"> {services.map ( (service, index )=> (<div y= {index }className="bg slate 8 rounded-xl p-8-borderborder-slate-7-hover:border-green-5-transition-all duration-30000-hover:transformhover:scale-1"> 
          </div><div className="w 1 h 1 bg-gradient-to-rfrom-green-5-to-cyan-5-rounded-lgflexitems-centerjustify-centermb-6"> <service.iconclassName="w 8 h-8 text-white"/> 
          </div> 
          </div> <h3 className="text 2 xlfont-bold text-white mb-4"> {service.title }</h3> <p className="text gray 30-mb-6"> {service.description }</p> <div className="mb 6"> <h 4-className="text whitefont-semiboldmb-3">Key Features</h 4> <ul className="space y 2"> {service.features.map ( (feature, feature Index )=> (<like y= {feature Index }className="text gray 30-text-smflexitems-center"> <Check Circle className="w 4 h-4-text-green-40-mr-3-flex-shrink-0"/> {feature }, </li> ) )}, </ul> 
          </div> 
          </div> <button className="w full bg gradient-to-r from-green-6 to-cyan-6 text-white py-3-px-6-rounded-lgfont-semiboldhover:from-green-7-hover:to-cyan-7-transition-all duration-30000"> Learn More </button> 
          </div> 
          </div> ) )}, 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> {/* CTASection */ }, <section className="py 20 bg-gradient-to-rfrom-green-9/3 0-to-cyan-9/3 0"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4-text-center"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-6"> Readyto Transform Your Business? </h2> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Let&apos;sdiscusshow ourdigitaltransformation servicescanmodernize youroperationsand drive growth. </p> <div className="flexflex colsm:flex rowgap-4-justify-center"> <button className="bg gradient to-r from-green-6 to-cyan-6 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-green-7-hover:to-cyan-7-transition-all duration-30000-transformhover:scale-1"> Start Your Transformation </button> <button className="border 2 border white text-white px-8-py-4-rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9-transition-all duration-30000"> Schedule Consultation </button> 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> 
          </div> )}; export default Digital Transformation Page;
