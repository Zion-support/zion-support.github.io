import React from 'react'; import {Helmet, Cpu Chip Icon, Shield Check Icon, Rocket Launch Icon, Arrow Right Icon, User Group Icon }from 'react-helmet-async'; const stats = [ ]{label: 'Projects Completed', value: '500+', number: '500+' }, {label: 'Happy Clients', value: '200+', number: '200+' }, {label: 'Team Members', value: '50+', number: '50+' }, {label: 'Years Experience', value: '10+', number: '10+' } ]; const About Page: React.FC = ( )=> {const values = [ ]{icon: Cpu Chip Icon, title: 'Innovation First', description: 'Westayat theforefrontof technology, constantlyexploringnew AIand ITsolutions tosolvecomplex business challenges.' }, {icon: Shield Check Icon, title: 'Security & Trust', description: 'Yourdataand systemsareprotected with enterprise-gradesecuritymeasures andcompliancestandards.' }, {icon: User Group Icon, title: 'Client-Centric', description: 'Weprioritizeour clients\', success, workingcloselywith themtounderstand theiruniqueneeds anddelivertailored solutions.' }, {icon: Rocket Launch Icon, title: 'Results-Driven', description: 'Wemeasureour successbythe tangibleresultsand valuewedeliver toourclients\', businesses.' } ]; const team = [ ]{name: 'Dr. Kleber Santos', role: 'Founder & CE O', description: 'AIand Machine Learningexpert with 15+ yearsofexperience intechnologyleadership.', image: '/team/kleber.jpg' }, {name: 'Sarah Johnson', role: 'CT O', description: 'Cloudarchitecturespecialist withexpertisein scalablesystemdesign and implementation.', image: '/team/sarah.jpg' }, {name: 'Michael Chen', role: 'Headof AI Research', description: 'Ph Din Computer Science, leadingour AIresearchand development initiatives.', image: '/team/michael.jpg' }, {name: 'Emily Rodriguez', role: 'Cybersecurity Director', description: 'Cybersecurityexpertwith certificationsinethical hackingandsecurity architecture.', image: '/team/emily.jpg' } ]; return (
    <> 
      <Helmet> <title>About Us - Zion Tech Group</title> <meta name="description"content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting edge AI and IT solutions." /> <meta name="keywords"content="about us, team, mission, AI experts, IT professionals, Zion Tech Group" /> 
      </Helmet> 
      <div className="min-h-screen bg-slate-9000-text-white"> {/* Hero Section */ }, <section className="relative py 2 bg-gradient-to-brfrom-slate-900-via-purple-900-to-slate-900"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4-text-center"> <h1 className="text 5 xlmd:text-6-xlfont-boldmb-6-bg-gradient-to-r from-purple-400 to-cyan-400-bg-clip-text text-transparent"> About Zion Tech Group </h1> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Wearea teamofpassionate AIand ITexperts dedicatedtotransforming businessesthroughinnovative technology solutions. </p> 
          
        </div>
      </div>
    </div> </section> {/* Mission Section */ }, <section className="py 20"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4"> <div className="max w 4-xl mx-auto text-center"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-8"> Our Mission </h2> <p className="text xl text gray-300-mb-1-leading-relaxed"> Toempowerbusinesses with cutting-edge AI and IT solutionsthatdrive innovation, efficiency, and growth. Webelievetechnology shouldbeaccessible, secure, andtransformativefor organizationsofall sizes. </p> 
            <div className="grid md:grid cols 4-gap-8"> {stats.map ( (stat, index )=> (<div y= {index }className="text-center"> 
          </div><div className="text-4xl font-boldtext-purple-40-mb-2"> {stat.number }
          </div> <div className="text gray 30"> {stat.label }
          
        </div>
      </div>
    </div> ) )}, 
          
        </div>
      </div>
    </div> 
          
        </div>
      </div>
    </div> 
          </div> </section> {/* Values Section */ }, <section className="py 20 bg-slate-8/5 0"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4"> 
          <div className="text-center"> mb 126"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-6"> Our Values </h2> <p className="text xl text gray-300-max-w-3xlmx-auto"> Thesecorevalues guideeverythingwe doandshape ourapproachto client success. </p> 
          </div> 
          </div> 
            <div className="grid md:grid cols 2-lg:grid-cols-4-gap-8"> {values.map ( (value, index )=> (<div y= {index }className="text-center"> 
          </div><div className="w 1 h 1 bg-gradient-to-r from-purple-5-to-cyan-5-rounded-lgflexitems-centerjustify-centermx-automb-6"> <value.iconclassName="w 8 h-8 text-white"/> 
          </div> 
          </div> <h3 className="text xlfont bold text-white mb-4"> {value.title }</h3> <p className="text gray 30"> {value.description }</p> 
          </div> 
          </div> ) )}, 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> {/* Team Section */ }, <section className="py 20"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4"> 
          <div className="text-center"> mb 126"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-6"> Meet Our Team </h2> <p className="text xl text gray-300-max-w-3xlmx-auto"> Ourdiverseteam ofexpertsbrings togetherdecadesof experiencein AI, cloud computing, cybersecurity, andbusinesstransformation. </p> 
          </div> 
          </div> 
            <div className="grid md:grid cols 2-lg:grid-cols-4-gap-8"> {team.map ( (member, index )=> (<div y= {index }className="bg slate 8 rounded-xlp-6-text-centerborderborder-slate-7-hover:border-purple-5-transition-all duration-30000"> 
          </div><div className="w 2 h 2 bg-gradient-to-r from-purple-5-to-cyan-5-rounded-fullmx-automb-4-flexitems-centerjustify-center"> <User Group IconclassName="w 1 h-1 text-white"/> 
          </div> 
          </div> <h3 className="text xlfont boldtext-whitemb-2"> {member.name }</h3> <div className="text purple 40-font-semiboldmb-3"> {member.role }
          </div> <p className="text gray 30-text-sm"> {member.description }</p> 
          </div> 
          </div> ) )}, 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> {/* CTASection */ }, <section className="py 20 bg-gradient-to-rfrom-purple-9/3 0-to-cyan-9/3 0"> 
        <div className="container mx-auto px 4"> 
        <div className="container mx-auto px 4-text-center"> <h2 className="text 4 xlmd:text-5-xlfont-boldtext-whitemb-6"> Readyto Work With Us? </h2> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Let&apos;sdiscusshow ourteamcan helptransformyour businesswithcutting-edge AI and IT solutions. </p> <div className="flexflex colsm:flex rowgap-4-justify-center"> <button className="bg gradient to-r from-purple-6 to-cyan-6 text-white px-8 py-4 rounded-lg font-semiboldhover:from-purple-7-hover:to-cyan-7 transition-all duration-30000-transformhover:scale-1-flexitems-centerjustify-centergap-2"> Get Started <Arrow Right IconclassName="w 5 h-5"/> </button> <button className="border 2 border white text-white px-8-py-4-rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9-transition-all duration-30000"> View Our Work </button> 
          
        </div>
      </div>
    </div> 
          </div> 
          </div> </section> 
          </div> 
    </>
  )}; export default About Page;