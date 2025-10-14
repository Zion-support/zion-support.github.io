import React from 'react'; import {Helmet, Brain, Bot, Bar Chart-3, Shield, Zap, Target }from 'react-helmet-async'; const AIServices Page: React.FC = ( )=> {const services = [ ]{icon: Brain, title: 'AIStrategy & Consulting', description: 'Developcomprehensive AIstrategiestailored toyourbusiness objectivesandindustry requirements.', features: ['AIReadiness Assessment', 'Technology Roadmap', 'ROIAnalysis', 'Implementation Planning' ]}, {icon: Bot, title: 'Conversational AI', description: 'Buildintelligentchatbots andvirtualassistants thatenhancecustomer experienceandautomate support.', features: ['Natural Language Processing', 'Multi-channel Integration', 'Sentiment Analysis', '24/7 Availability' ]}, {icon: Bar Chart-3, title: 'Predictive Analytics', description: 'Leveragemachinelearning topredicttrends, behaviors, andoutcomesfor betterdecisionmaking.', features: ['Data Mining', 'Pattern Recognition', 'Forecasting Models', 'Real-time Insights' ]}, {icon: Shield, title: 'AISecurity Solutions', description: 'Advanced AI-poweredsecuritysystems toprotectyour digitalassetsand detectthreatsin real-time.', features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Monitoring' ]}, {icon: Zap, title: 'Process Automation', description: 'Streamlineoperationswith intelligentautomationthat reducescostsand improves efficiency.', features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Quality Control' ]}, {icon: Target, title: 'Custom AI Development', description: 'Bespoke AI solutionsdesignedspecifically foryourunique businesschallengesand opportunities.', features: ['Custom Algorithms', 'APIDevelopment', 'Integration Services', 'Ongoing Support' ]} ]; return (
      <div className="min-h-screen bg-slate-9000-text-white"> 
      <Helmet> <title>AIServices - Zion Tech Group</title> <meta name="description"content="Comprehensive AI services including strategy consulting, machine learning, predictive analytics, and custom AI development solutions." /> <meta name="keywords"content="AI services, machine learning, artificial intelligence, predictive analytics, AI consulting, Zion Tech Group" /> 
      </Helmet> {/* Hero Section */ }, <section className="relative py 2 bg-gradient-to-brfrom-slate-900-via-purple-900-to-slate-900"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4-text-center"> <h1 className="text 5 xlmd:text-6-xlfont-boldmb-6-bg-gradient-to-r from-purple-400 to-cyan-400-bg-clip-text text-transparent"> AIServices </h1> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Transformyourbusiness with cutting-edgeartificialintelligence solutions. Fromstrategyto implementation, wedeliver AIthatdrives real results. </p> 
          
        </div>
      </div>
    </div> </section> {/* Services Grid */ }, <section className="py 20"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4"> 
            <div className="gridgrid cols 1-md:grid-cols-2-lg:grid-cols-3-gap-8"> {services.map ( (service, index )=> (<div y= {index }className="bg slate 8 rounded-xl p-8-borderborder-slate-7-hover:border-purple-5-transition-all duration-30000-hover:transformhover:scale-1"> 
          </div><div className="w 1 h 1 bg-gradient-to-rfrom-purple-5-to-cyan-5-rounded-lgflexitems-centerjustify-centermb-6"> <service.iconclassName="w 8 h-8 text-white"/> 
          </div> 
          </div> <h3 className="text 2 xlfont-bold text-white mb-4"> {service.title }</h3> <p className="text gray 30-mb-6"> {service.description }</p> <div className="mb 6"> <h 4-className="text whitefont-semiboldmb-3">Key Features</h 4> <ul className="space y 2"> {service.features.map ( (feature, feature Index )=> (<like y= {feature Index }className="text gray 30-text-smflexitems-center"> <div className="w 2 h-2-bg-purple-40-rounded-fullmr-3">
          </div> {feature }, </li> ) )}, </ul> 
          </div> 
          </div> <button className="w full bg gradient-to-r from-purple-6 to-cyan-6 text-white py-3-px-6-rounded-lgfont-semiboldhover:from-purple-7-hover:to-cyan-7-transition-all duration-30000"> Learn More </button> 
          </div> 
          </div> ) )}, 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> {/* CTASection */ }, <section className="py 20 bg-gradient-to-rfrom-purple-9/3 0-to-cyan-9/3 0"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4-text-center"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-6"> Readyto Harness the Powerof AI? </h2> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Let&apos;sdiscusshow our AI servicescantransform yourbusinessand giveyoua competitive edge. </p> <div className="flexflex colsm:flex rowgap-4-justify-center"> <button className="bg gradient to-r from-purple-6 to-cyan-6 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-purple-7-hover:to-cyan-7-transition-all duration-30000-transformhover:scale-1"> Start Your AI Journey </button> <button className="border 2 border white text-white px-8-py-4-rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9-transition-all duration-30000"> Schedule Consultation </button> 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> 
          </div> )}; export default AIServices Page;