import React from 'react'; import {Helmet, Map Pin, Clock, Users, Heart, Zap, Target }from 'react-helmet-async'; const Careers Page: React.FC = ( )=> {return (
      <div className="min-h-screen bg-gradient-to-brfrom-slate-90000-via-rose-9-to-slate-900"> 
      <Helmet> <title>Careers | Zion Tech Group</title> <meta name="description"content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." /> <meta name="keywords"content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" /> 
      </Helmet> 
        <div className="container mx-auto px 4 py-16"> {/* Hero Section */ }, 
          <div className="text-center"> mb 126"> <h1 className="text 5 xlfont-boldtext-whitemb-6"> Join Our <span className="text transparentbg clip-textbg-gradient-to-rfrom-rose-40 to-pink-4">Team</span> </h1> <p className="text xl text gray-300-mb-8-max-w-3xlmx-auto"> Bepartof ateamthat'sshapingthe futureof AI and IT solutions.'; Workoncutting-edgeprojectsand makeareal impact.; </p> 
          </div> 
          </div> {/* Why Work With Us */ }, <div className="mb 16"> <h2 className="text 3 xlfont-boldtext-whitetext-center mb-122">Why Work With Us?</h2> 
            <div className="grid md:grid cols 2-lg:grid-cols-4-gap-8"> {benefits.map ( (benefit, _index )=> {const Icon = benefit.icon; return (<div y= {_index }className="bg white/10 backdrop-blur-smrounded-xlp-6-borderborder-white/2 0-text-center"> 
          </div><div className="p 3 bg-gradient-to-rfrom-rose-5-to-pink-5-rounded-lgw-fitmx-automb-4"> <Iconclass Nam e="w 6-h-6 text-white"/> 
          </div> 
          </div> <h3 className="text xlfont semiboldtext-whitemb-3"> {benefit.title }</h3> <p className="text gray 30-text-sm"> {benefit.description }</p> 
          </div> 
          </div> )} )}, 
          
        </div>
      </div>
    </div> 
          </div> {/* Open Positions */ }, <div className="mb 16"> <h2 className="text 3 xlfont-boldtext-whitetext-center mb-122">Open Positions</h2> 
            <div className="grid md:grid cols 2-gap-6"> {open Positions.map ( (position, _index )=> (<div y= {_index }className="bg white/1 0 backdrop blur-smrounded-xlp-6-borderborder-white/20-hover:border-white/4 0-transition-all duration-30000"> 
          </div><div className="flexjustify betweenitems startmb-4"> <h3 className="text xlfont semiboldtext-white"> {position.title }</h3> <span className="bg gradient to-rfrom-rose-5-to-pink-5-text-whitepx-3-py-1-rounded-fulltext-sm"> {position.type }, </span> 
          </div> 
          </div> <div className="flexitems centertext gray-40-mb-3"> <Map PinclassName="w 4 h-4 mr-2"/> <span className="text sm"> {position.location }</span> <span className="mx 2">•</span> <span className="text sm"> {position.department }</span> 
          </div> 
          </div> <p className="text gray 30-mb-4"> {position.description }</p> <button className="w full bg gradient-to-r from-rose-5 to-pink-5 text-white py-2-px-4-rounded-lgfont-mediumhover:from-rose-6-hover:to-pink-6-transition-all duration-30000"> Apply Now; </button> 
          </div> 
          </div> ) )}, 
          
        </div>
      </div>
    </div> 
          </div> {/* Company Culture */ }, <div className="bg white/10 backdrop-blur-smrounded-xlp-8-borderborder-white/2 0-mb-1"> <h2 className="text 3 xlfont-boldtext-whitetext-centermb-8">Our Culture</h2> 
            <div className="grid md:grid cols 3-gap-8"> 
          <div className="text-center">"> <div className="p 4 bg-gradient-to-rfrom-rose-5-to-pink-5-rounded-fullw-fitmx-automb-4"> <Users className="w 8 h-8 text-white"/> 
          </div> 
          </div> <h3 className="text xlfont semiboldtext-whitemb-3">Collaborative</h3> <p className="text gray 30">Webelievein thepowerof teamworkandopen communicationtoachieve great things.</p> 
          </div> 
          </div> 
          <div className="text-center">"> <div className="p 4 bg-gradient-to-rfrom-rose-5-to-pink-5-rounded-fullw-fitmx-automb-4"> <Zapclass Nam e="w 8-h-8 text-white"/> 
          </div> 
          </div> <h3 className="text xlfont semiboldtext-whitemb-3">Innovative</h3> <p className="text gray 30">Weencouragecreative thinkingandembrace newtechnologiesto solvecomplexproblems.</p> 
          </div> 
          </div> 
          <div className="text-center">"> <div className="p 4 bg-gradient-to-rfrom-rose-5-to-pink-5-rounded-fullw-fitmx-automb-4"> <Targetclass Nam e="w 8-h-8 text-white"/> 
          </div> 
          </div> <h3 className="text xlfont semiboldtext-whitemb-3">Impact-Driven</h3> <p className="text gray 30">Wefocuson deliveringrealvalue toourclients andmakinga positive impact.</p> 
          
        </div>
      </div>
    </div> 
          
        </div>
      </div>
    </div> {/* CTASection */ }, 
          <div className="text-center">"> <div className="bg white/1 0 backdrop-blur-smrounded-xlp-8-borderborder-white/2 0-max-w-2xlmx-auto"> <h2 className="text 2 xlfont-bold text-white mb-4">Don't See Your Perfect Role?</h2>'; <p className="text gray 30-mb-6"> We'realwayslooking fortalentedindividuals. Sendusyour resumeandwe'llkeepyou inmindfor future opportunities.'; </p> <button className="bg gradient to-r from-rose-5 to-pink-5 text-white px-8-py-3-rounded-lgfont-semiboldhover:from-rose-6-hover:to-pink-6-transition-all duration-30000"> Send Resume; </button> 
          
        </div>
      </div>
    </div> 
          
        </div>
      </div>
    </div> )}; export default Careers Page;
