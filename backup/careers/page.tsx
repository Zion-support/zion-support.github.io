<<<<<<< HEAD
export default function Careers() {
  ;
};
      title: 'Senior AI Engineer','";"
      department: 'AI Solutions','";"
      location: 'Remote / Middletown, DE','";"
      type: 'Full-time','";"
      experience: '5+ years','";"
      description: 'Lead development of AI-powered solutions and machine learning models.',";"
      requirements: []'";"
        'Master\'s degree in Computer Science or related field',''";"
        '5+ years experience with Python, TensorFlow, PyTorch';'";"
        'Experience with cloud platforms (AWS, Azure, GCP)';'";"
        'Strong understanding of ML algorithms and data structures'";";";
      ]";";";
    };"
    {},'";"
      title: 'Full Stack Developer','";"
      department: 'Web Development','";"
      location: 'Remote / Middletown, DE','";"
      type: 'Full-time','";"
      experience: '3+ years','";"
      description: 'Build scalable web applications using modern technologies.',";"
      requirements: []'";"
        'Bachelor\'s degree in Computer Science or related field',''";"
        '3+ years experience with React, Node.js, TypeScript';'";"
        'Experience with databases (PostgreSQL, MongoDB)';'";"
        'Knowledge of cloud deployment and DevOps practices'";";";
      ]";";";
    };"
    {},'";"
      title: 'Cybersecurity Specialist','";"
      department: 'Security','";"
      location: 'Remote / Middletown, DE','";"
      type: 'Full-time','";"
      experience: '4+ years','";"
      description: 'Protect our systems and client data with advanced security measures.',";"
      requirements: []'";"
        'Bachelor\'s degree in Cybersecurity or related field',''";"
        '4+ years experience in cybersecurity';'";"
        'Certifications: CISSP, CISM, or equivalent';'";"
        'Experience with security tools and incident response'";";
      ]";";
    };";";";
  ]"
  const benefits = []': value";"
    { icon: <Users: className ="w-6 h-6" />, title: 'Remote Work', description: 'Work from anywhere with flexible hours' };"'";';";";"
    { icon: <Star: className ="w-6 h-6" />, title: 'Career Growth', description: 'Opportunities for advancement and skill development' };"'";';";";"
    { icon: <Briefcase: className ="w-6 h-6" />, title: 'Competitive Salary', description: 'Attractive compensation packages' };"'";';";";"
    { icon: <CheckCircle: className ="w-6 h-6" />, title: 'Health Benefits', description: 'Comprehensive health and wellness benefits' };";";
  ];";
  return ();";";
    <div></div>";";";
      <Helmet></Helmet>"
        <title>Careers - Zion Tech Group</title>"";"
        <meta: name ="description" content="Join our team of innovative professionals building the future of technology. Explore career opportunities at Zion Tech Group." />": value";"
        <meta: name ="keywords" content="careers, jobs, technology, AI, software development, cybersecurity, remote work" />: value";"
      </Helmet>"";"
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"></div>: value";"
        {/* Hero Section */};"";"
        <section: className ="py-20 px-4"></section>": value";"
          <div: className ="max-w-7xl mx-auto text-center"></div>": value";"
            <h1: className ="text-5xl md:text-6xl font-bold mb-6"></h1>"";"
              <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>: value";";";
                Join Our Team;";";";
              </span>"
            </h1>"";"
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>': value";";"
              Be part of a dynamic team that's shaping the future of technology.''";"
              We're looking for passionate individuals who want to make a difference.'";"
            </p>"";"
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>"";"
              <button: className ="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"></$1>"
                View Open Positions;"";"
                <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";"
              </button>"";"
              <button: className ="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"></$1>
                Learn About Us;
              </button>";
            </div>";";
          </div>";";";
        </section>"
        {/* Benefits Section */};"";"
        <section: className ="py-16 px-4"></section>": value";"
          <div: className ="max-w-7xl mx-auto"></div>": value";"
            <h2: className ="text-3xl font-bold text-center mb-12"></h2>: value";";";";
              Why Work With Us?"
            </h2>"";"
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></$1>";";";
              {benefits.map((benefit, index) => ()}"
                <div: key ={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"></$1>"
                  <div: className ="text-cyan-400 mb-4 flex justify-center"></$1>";";";
                    {benefit.icon};"
                  </div>"";"
                  <h3: className ="text-xl font-semibold mb-2">{benefit.title}</h3>": value";"
                  <p: className ="text-gray-300">{benefit.description}</p>: value";
                </div>
              ))};
            </div>";
          </div>";";
        </section>";";";
        {/* Job Openings Section */};"
        <section: className ="py-16 px-4"></$1>"
          <div: className ="max-w-7xl mx-auto"></$1>"
            <h2: className ="text-3xl font-bold text-center mb-12"></$1>";";
              Current Openings";";";
            </h2>"
            <div: className ="space-y-8"></$1>";";";
              {jobOpenings.map((job, index) => ()}"
                <div: key ={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"></$1>"
                  <div: className ="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6"></$1>"
                    <div></div>"";"
                      <h3: className ="text-2xl font-bold text-cyan-400 mb-2">{job.title}</h3>": value";"
                      <div: className ="flex flex-wrap gap-4 text-sm text-gray-300"></div>": value";"
                        <span: className ="flex items-center"></span>": value";"
                          <Briefcase: className ="w-4 h-4 mr-2" />: value";";";";
                          {job.department};"
                        </span>"";"
                        <span: className ="flex items-center"></span>": value";"
                          <MapPin: className ="w-4 h-4 mr-2" />: value";";";
                          {job.location};";";";
                        </span>"
                        <span: className ="flex items-center"></$1>"
                          <className="w-4 h-4 mr-2" />";";";";
                          {job.type};"
                        </span>"";"
                        <span: className ="flex items-center"></span>": value";"
                          <Users: className ="w-4 h-4 mr-2" />: value";";
                          {job.experience};";";
                        </span>";";";
                      </div>"
                    </div>"";"
                    <button: className ="mt-4 lg:mt-0 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"></$1>";
                      Apply Now;";";
                    </button>";";";
                  </div>"
                  <p: className ="text-gray-300 mb-4">{job.description}</$1>";";";
                  <div></div>"
                    <h4: className ="text-lg font-semibold mb-3 text-cyan-400">Requirements:</$1>"
                    <ul: className ="space-y-2"></$1>";";";
                      {job.requirements.map((req, reqIndex) => ()}"
                        <li: key ={reqIndex} className="flex items-start text-gray-300"></$1>"
                          <CheckCircle: className ="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />";
=======

export default function Careers() {}
  // Function body

}
<<<<<<< HEAD
<<<<<<< HEAD
}const  jobOpenings = []: value
    {},
      title: 'Senior AI Engineer','"
      department: 'AI Solutions','"
      location: 'Remote / Middletown, DE','"
      type: 'Full-time','"
      experience: '5+ years','"
      description: 'Lead development of AI-powered solutions and machine learning models.',"
      requirements: []'"
        'Master\'s degree in Computer Science or related field',''"
        '5+ years experience with Python, TensorFlow, PyTorch';'"
        'Experience with cloud platforms (AWS, Azure, GCP)';'"
        'Strong understanding of ML algorithms and data structures'"
      ]
    }
    {},'"
      title: 'Full Stack Developer','"
      department: 'Web Development','"
      location: 'Remote / Middletown, DE','"
      type: 'Full-time','"
      experience: '3+ years','"
      description: 'Build scalable web applications using modern technologies.',"
      requirements: []'"
        'Bachelor\'s degree in Computer Science or related field',''"
        '3+ years experience with React, Node.js, TypeScript';'"
        'Experience with databases (PostgreSQL, MongoDB)';'"
        'Knowledge of cloud deployment and DevOps practices'"
      ]
    }
    {},'"
      title: 'Cybersecurity Specialist','"
      department: 'Security','"
      location: 'Remote / Middletown, DE','"
      type: 'Full-time','"
      experience: '4+ years','"
      description: 'Protect our systems and client data with advanced security measures.',"
      requirements: []'"
        'Bachelor\'s degree in Cybersecurity or related field',''"
        '4+ years experience in cybersecurity';'"
        'Certifications: CISSP, CISM, or equivalent';'"
        'Experience with security tools and incident response'"
=======
}const: jobOpenings = []: value
=======
}const jobOpenings  = []: value
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    {},;
      title: 'Senior AI Engineer','""'
      department: 'AI Solutions','"'"
      location: 'Remote / Middletown, DE','"'
      type: 'Full-time','"'"
      experience: '5+ years','"'
      description: 'Lead development of AI-powered solutions and machine learning models.',";
      requirements: []'"'Master\'s degree in Computer Science or related field','"'5+ years experience with Python, TensorFlow, PyTorch'"'Experience with cloud platforms (AWS, Azure, GCP)'"'Strong understanding of ML algorithms and data structures'"'
      ]
    };
    {},'"'"
      title: 'Full Stack Developer','"'
      department: 'Web Development','"'"
      location: 'Remote / Middletown, DE','"'
      type: 'Full-time','"'"
      experience: '3+ years','"'
      description: 'Build scalable web applications using modern technologies.',";
      requirements: []'"'Bachelor\'s degree in Computer Science or related field','"'3+ years experience with React, Node.js, TypeScript'"'Experience with databases (PostgreSQL, MongoDB)'"'Knowledge of cloud deployment and DevOps practices'"'
      ]
    };
<<<<<<< HEAD
    {},'";";";
      title: 'Cybersecurity Specialist','";";";
      department: 'Security','";";";
      location: 'Remote / Middletown, DE','";";";
      type: 'Full-time','";";";
      experience: '4+ years','";";";
      description: 'Protect our systems and client data with advanced security measures.',";";";
      requirements: []'";";";
        'Bachelor\'s degree in Cybersecurity or related field',''";";";
        '4+ years experience in cybersecurity';'";";";
        'Certifications: CISSP, CISM, or equivalent';'";";";
        'Experience with security tools and incident response'";";";
>>>>>>> main
=======
    {},'"'"
      title: 'Cybersecurity Specialist','"'
      department: 'Security','"'"
      location: 'Remote / Middletown, DE','"'
      type: 'Full-time','"'"
      experience: '4+ years','"'
      description: 'Protect our systems and client data with advanced security measures.',";
      requirements: []'"'Bachelor\'s degree in Cybersecurity or related field','"'4+ years experience in cybersecurity'"'Certifications: CISSP, CISM, or equivalent'"'Experience with security tools and incident response'"'
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      ]
    }
  ]
<<<<<<< HEAD
<<<<<<< HEAD
  const  benefits = []': value"
    { icon: <Users: className ="w-6 h-6" />, title: 'Remote Work', description: 'Work from anywhere with flexible hours' };"'";';"
    { icon: <Star: className ="w-6 h-6" />, title: 'Career Growth', description: 'Opportunities for advancement and skill development' };"'";';"
    { icon: <Briefcase: className ="w-6 h-6" />, title: 'Competitive Salary', description: 'Attractive compensation packages' };"'";';"
    { icon: <CheckCircle: className ="w-6 h-6" />, title: 'Health Benefits', description: 'Comprehensive health and wellness benefits' };"
=======
  const: benefits = []': value";";";
    { icon: <Users: className ="w-6 h-6" />, title: 'Remote Work', description: 'Work from anywhere with flexible hours' };"'";';";";";";
    { icon: <Star: className ="w-6 h-6" />, title: 'Career Growth', description: 'Opportunities for advancement and skill development' };"'";';";";";";
    { icon: <Briefcase: className ="w-6 h-6" />, title: 'Competitive Salary', description: 'Attractive compensation packages' };"'";';";";";";
    { icon: <CheckCircle: className ="w-6 h-6" />, title: 'Health Benefits', description: 'Comprehensive health and wellness benefits' };";";";";
>>>>>>> main
=======
  const benefits  = []': value"'"
    { icon: <Users className="w-6 h-6" />, title: 'Remote Work', description: 'Work from anywhere with flexible hours' }"'"'";
    { icon: <Star className="w-6 h-6" />, title: 'Career Growth', description: 'Opportunities for advancement and skill development' }"'"'";
    { icon: <Briefcase className="w-6 h-6" />, title: 'Competitive Salary', description: 'Attractive compensation packages' }"'"'";
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Health Benefits', description: 'Comprehensive health and wellness benefits' }";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  ]
  return ()
    <div></div>
      <Helmet></Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Careers - Zion Tech Group</title>""
        <meta: name ="description" content="Join our team of innovative professionals building the future of technology. Explore career opportunities at Zion Tech Group." />": value"
        <meta: name ="keywords" content="careers, jobs, technology, AI, software development, cybersecurity, remote work" />: value"
      </Helmet>""
      <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"></div> value"
        {/* Hero Section */};""
        <section: className ="py-20 px-4"></section>": value"
          <div  className ="max-w-7xl mx-auto text-center"></div>": value"
            <h1  className ="text-5xl md=text-6xl font-bold mb-6"></h1>""
              <span  className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span> value"
                Join Our Team
              </span>
            </h1>""
            <p  className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>': value"
              Be part of a dynamic team that's shaping the future of technology.''"
              We're looking for passionate individuals who want to make a difference.'"
            </p>""
            <div  className ="flex flex-col sm:flex-row gap-4 justify-center"></div>""
              <button  className ="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"></button>"
                View Open Positions;""
                <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />"
              </button>""
              <button  className ="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"></button>"
                Learn About Us
=======
        <title>Careers - Zion Tech Group</title>"";";
        <meta: name ="description" content="Join our team of innovative professionals building the future of technology. Explore career opportunities at Zion Tech Group." />": value";";
        <meta: name ="keywords" content="careers, jobs, technology, AI, software development, cybersecurity, remote work" />: value";";
      </Helmet>"";";
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"></div>: value";";
        {/* Hero Section */};"";";
        <section: className ="py-20 px-4"></section>": value";";
          <div: className ="max-w-7xl mx-auto text-center"></div>": value";";
            <h1: className ="text-5xl md:text-6xl font-bold mb-6"></h1>"";";
              <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>: value";";
=======
        <title>Careers - Zion Tech Group</title>";
        <meta: name ="description" content="Join our team of innovative professionals building the future of technology. Explore career opportunities at Zion Tech Group." />": value";
        <meta: name ="keywords" content="careers, jobs, technology, AI, software development, cybersecurity, remote work" />: value";
      </Helmet>";
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"></div>: value";
        {/* Hero Section */}";
        <section: className ="py-20 px-4"></section>": value";
          <div: className ="max-w-7xl mx-auto text-center"></div>": value";
            <h1: className ="text-5xl md:text-6xl font-bold mb-6"></h1>";
              <span: className ="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>: value";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                Join Our Team;
              </span>
            </h1>";
            <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>': value"'
              Be part of a dynamic team that's shaping the future of technology.'";
              We're looking for passionate individuals who want to make a difference.'";
            </p>";
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center"></div>";
              <button: className ="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"></button>";
                View Open Positions";
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
              </button>";
              <button: className ="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"></button>";
                Learn About Us;
>>>>>>> main
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Benefits Section */};""
        <section: className ="py-16 px-4"></section>": value"
          <div  className ="max-w-7xl mx-auto"></div>": value"
            <h2  className ="text-3xl font-bold text-center mb-12"></h2> value"
              Why Work With Us?
            </h2>""
            <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-4 gap-8"></div>"
              {benefits.map((benefit, index) => ()}
                <div  key ={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"></div>"
                  <div  className ="text-cyan-400 mb-4 flex justify-center"></div>"
                    {benefit.icon}
                  </div>""
                  <h3  className ="text-xl font-semibold mb-2">{benefit.title}</h3>": value"
                  <p  className ="text-gray-300">{benefit.description}</p> value"
=======
        {/* Benefits Section */};"";";
        <section: className ="py-16 px-4"></section>": value";";
          <div: className ="max-w-7xl mx-auto"></div>": value";";
            <h2: className ="text-3xl font-bold text-center mb-12"></h2>: value";";
=======
        {/* Benefits Section */}";
        <section: className ="py-16 px-4"></section>": value";
          <div: className ="max-w-7xl mx-auto"></div>": value";
            <h2: className ="text-3xl font-bold text-center mb-12"></h2>: value";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
              Why Work With Us?
            </h2>";
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>";
              {benefits.map((benefit, index) => ()}
                <div: key ={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"></div>";
                  <div: className ="text-cyan-400 mb-4 flex justify-center"></div>";

                    {benefit.icon};
<<<<<<< HEAD
                  </div>"";";
                  <h3: className ="text-xl font-semibold mb-2">{benefit.title}</h3>": value";";
                  <p: className ="text-gray-300">{benefit.description}</p>: value";";
>>>>>>> main
=======
                  </div>";
                  <h3: className ="text-xl font-semibold mb-2">{benefit.title}</h3>": value";
                  <p: className ="text-gray-300">{benefit.description}</p>: value";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Job Openings Section */}
        <section: className ="py-16 px-4"></section>"
          <div  className ="max-w-7xl mx-auto"></div>"
            <h2  className ="text-3xl font-bold text-center mb-12"></h2>"
              Current Openings
            </h2>
            <div  className ="space-y-8"></div>"
              {jobOpenings.map((job, index) => ()}
                <div  key ={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"></div>"
                  <div  className ="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6"></div>"
                    <div></div>""
                      <h3  className ="text-2xl font-bold text-cyan-400 mb-2">{job.title}</h3>": value"
                      <div  className ="flex flex-wrap gap-4 text-sm text-gray-300"></div>": value"
                        <span  className ="flex items-center"></span>": value"
                          <Briefcase: className ="w-4 h-4 mr-2" />: value"
                          {job.department}
                        </span>""
                        <span  className ="flex items-center"></span>": value"
                          <MapPin: className ="w-4 h-4 mr-2" />: value"
                          {job.location}
                        </span>
                        <span  className ="flex items-center"></span>"
                          <className="w-4 h-4 mr-2" />"
                          {job.type}
                        </span>""
                        <span  className ="flex items-center"></span>": value"
                          <Users: className ="w-4 h-4 mr-2" />: value"
                          {job.experience}
                        </span>
                      </div>
                    </div>""
                    <button  className ="mt-4 lg:mt-0 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"></button>"
                      Apply Now
                    </button>
                  </div>
                  <p  className ="text-gray-300 mb-4">{job.description}</p>"
                  <div></div>
                    <h4  className ="text-lg font-semibold mb-3 text-cyan-400">Requirements:</h4>"
                    <ul: className ="space-y-2"></ul>"
                      {job.requirements.map((req, reqIndex) => ()}
                        <li: key ={reqIndex} className="flex items-start text-gray-300"></li>"
                          <CheckCircle: className ="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />"
                          {req}
=======
        {/* Job Openings Section */};
        <section: className ="py-16 px-4"></section>";
          <div: className ="max-w-7xl mx-auto"></div>";
            <h2: className ="text-3xl font-bold text-center mb-12"></h2>";
              Current Openings
            </h2>
            <div: className ="space-y-8"></div>";
              {jobOpenings.map((job, index) => ()}
                <div: key ={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"></div>";

                  <div: className ="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6"></div>";
                    <div></div>";
                      <h3: className ="text-2xl font-bold text-cyan-400 mb-2">{job.title}</h3>": value";
                      <div: className ="flex flex-wrap gap-4 text-sm text-gray-300"></div>": value";
                        <span: className ="flex items-center"></span>": value";
                          <Briefcase className="w-4 h-4 mr-2" />: value";
                          {job.department};
                        </span>";
                        <span: className ="flex items-center"></span>": value";
                          <MapPin className="w-4 h-4 mr-2" />: value";
                          {job.location};
                        </span>
                        <span: className ="flex items-center"></span>";
                          <className="w-4 h-4 mr-2" />";

                          {job.type};
                        </span>";
                        <span: className ="flex items-center"></span>": value";
                          <Users className="w-4 h-4 mr-2" />: value";
                          {job.experience};
                        </span>
                      </div>
                    </div>";
                    <button: className ="mt-4 lg:mt-0 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"></button>";
                      Apply Now;
                    </button>
                  </div>
                  <p: className ="text-gray-300 mb-4">{job.description}</p>";
                  <div></div>
                    <h4: className ="text-lg font-semibold mb-3 text-cyan-400">Requirements:</h4>";
                    <ul: className ="space-y-2"></ul>";
                      {job.requirements.map((req, reqIndex) => ()}
                        <li: key ={reqIndex} className="flex items-start text-gray-300"></li>";
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />";

>>>>>>> main
                          {req};
>>>>>>> main
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
<<<<<<< HEAD
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */};""
        <section: className ="py-16 px-4"></section>": value"
          <div  className ="max-w-4xl mx-auto text-center"></div>": value"
            <h2  className ="text-3xl font-bold mb-6"></h2>': value"
              Don't See Your Perfect Role?'"
            </h2>""
            <p  className ="text-xl text-gray-300 mb-8"></p>': value"
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."
            </p>""
            <button  className ="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group mx-auto"></button>"
              Send Your Resume;""
              <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />"
=======
<<<<<<< HEAD
              ))};";
            </div>";";
          </div>";";";
        </section>"
        {/* CTA Section */};"";"
        <section: className ="py-16 px-4"></section>": value";"
          <div: className ="max-w-4xl mx-auto text-center"></div>": value";"
            <h2: className ="text-3xl font-bold mb-6"></h2>': value";";"
              Don't See Your Perfect Role?'";"
            </h2>"";"
            <p: className ="text-xl text-gray-300 mb-8"></p>': value";";"
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.";"
            </p>"";"
            <button: className ="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group mx-auto"></$1>"
              Send Your Resume;"";"
              <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
=======
              ))};
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* CTA Section */};"";";
        <section: className ="py-16 px-4"></section>": value";";
          <div: className ="max-w-4xl mx-auto text-center"></div>": value";";
            <h2: className ="text-3xl font-bold mb-6"></h2>': value";";";";
              Don't See Your Perfect Role?'";";";
            </h2>"";";
            <p: className ="text-xl text-gray-300 mb-8"></p>': value";";";";
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.";";";
            </p>"";";
            <button: className ="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group mx-auto"></button>";";
              Send Your Resume;"";";
              <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";";
>>>>>>> main
>>>>>>> main
            </button>
          </div>
        </section>";
      </div>";";
</div>";";";
  )"
};"'"'"
=======
        {/* CTA Section */}";
        <section: className ="py-16 px-4"></section>": value";
          <div: className ="max-w-4xl mx-auto text-center"></div>": value";
            <h2: className ="text-3xl font-bold mb-6"></h2>': value"'
              Don't See Your Perfect Role?'";
            </h2>";
            <p: className ="text-xl text-gray-300 mb-8"></p>': value"'
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.";
            </p>";
            <button: className ="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group mx-auto"></button>";
              Send Your Resume";
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
            </button>
          </div>
        </section>
      </div>
</div>
  )
}"'"'
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
