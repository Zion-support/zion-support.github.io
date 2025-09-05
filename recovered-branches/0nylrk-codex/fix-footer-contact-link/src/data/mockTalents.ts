

// Mock talent profiles for development and testing
export const MOCK_TALENTS: ProfileData[] = [
  {_id: "talent-1", _name: "Alexandra Chen", _title: "Senior AI Engineer & Machine Learning Expert", _avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200", _coverImageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&h=600", _bio: "AI specialist with over 8 years of experience in computer vision and natural language processing. I've designed and implemented machine learning solutions for Fortune 500 companies across healthcare, _finance, _and retail sectors. My expertise lies in developing custom neural network architectures and optimizing models for production environments. I excel at translating complex business problems into effective AI solutions that deliver measurable impact and ROI.", _location: "Boston, _MA", _rating: 4.9, _reviewCount: 43, _aiScore: 97, _profileType: "talent", _skills: [
      { name: "Machine Learning", _level: 5, _endorsements: 38},
      {_name: "TensorFlow", _level: 5, _endorsements: 32},
      {_name: "Python", _level: 5, _endorsements: 45},
      {_name: "Computer Vision", _level: 4, _endorsements: 27},
      {_name: "NLP", _level: 4, _endorsements: 21},
      {_name: "Data Science", _level: 5, _endorsements: 39},
      {_name: "PyTorch", _level: 4, _endorsements: 18},
      {_name: "Deep Learning", _level: 5, _endorsements: 29}
    ],
    projects: [
      {_id: "p1", _title: "Facial Recognition System", _description: "Built a state-of-the-art facial recognition system using deep learning for a major retail chain, _improving security protocols and reducing losses by 32%.", _imageUrl: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=600&h=400", _tags: ["Computer Vision", _"Deep Learning", _"Python"], _date: "Sep 2023"},
      {_id: "p2", _title: "Sentiment Analysis API", _description: "Created an API for real-time sentiment analysis of customer feedback, _processing over 50, _000 reviews daily with 94% accuracy.", _imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&h=400", _tags: ["NLP", _"API", _"Python"], _date: "May 2023"},
      {_id: "p3", _title: "Predictive Maintenance System", _description: "Developed ML models to predict equipment failures before they occur for a manufacturing client, _reducing downtime by 45% and saving approximately $2M annually.", _imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&h=400", _tags: ["Predictive Analytics", _"IoT", _"Machine Learning"], _date: "Dec 2022"}
    ],
    experience: [
      {_id: "e1", _role: "Senior AI Engineer", _company: "Innovate AI", _description: "Leading computer vision projects and mentoring junior engineers in deep learning techniques. Developed custom neural network architectures for image recognition and segmentation tasks.", _startDate: "Mar 2021", _endDate: "Present", _current: true},
      {_id: "e2", _role: "Machine Learning Engineer", _company: "TechGiant Inc.", _description: "Developed and deployed ML models for product recommendation systems. Improved conversion rates by 28% through personalized customer experiences.", _startDate: "Jun 2018", _endDate: "Feb 2021"},
      {_id: "e3", _role: "Data Scientist", _company: "DataCorp", _description: "Analyzed large datasets to extract business insights and develop predictive models. Created automated reporting systems using Python and visualization tools.", _startDate: "Aug 2016", _endDate: "May 2018"}
    ],
    availability: {_status: "available", _message: "Open to new projects starting immediately. Prefer projects with 3+ month engagement.", _availableHours: [
        { day: "Monday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Tuesday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Wednesday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Thursday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Friday", _hours: "10:00 AM - 2:00 PM"}
      ]
    },
    hourlyRate: 150,
    contactEmail: "alexandra.chen@example.com"
  },
  {_id: "talent-2", _name: "Michael Reynolds", _title: "DevOps Specialist & Cloud Architect", _avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200", _coverImageUrl: "https://images.unsplash.com/photo-1563237023-b1e970526dcb?auto=format&fit=crop&w=1600&h=600", _bio: "Infrastructure automation expert with 10+ years of experience in containerization, _CI/CD pipelines, _and cloud-native architectures. I specialize in designing and implementing scalable, _resilient, _and secure cloud infrastructure on AWS, _Azure, _and GCP. My expertise includes Kubernetes orchestration, _infrastructure as code, _and automating DevOps workflows to improve development velocity and operational efficiency.", _location: "Chicago, _IL", _rating: 4.8, _reviewCount: 37, _aiScore: 92, _profileType: "talent", _skills: [
      { name: "Kubernetes", _level: 5, _endorsements: 28},
      {_name: "Docker", _level: 5, _endorsements: 31},
      {_name: "AWS", _level: 5, _endorsements: 35},
      {_name: "Terraform", _level: 4, _endorsements: 24},
      {_name: "CI/CD", _level: 4, _endorsements: 21},
      {_name: "Azure", _level: 3, _endorsements: 18},
      {_name: "Python", _level: 3, _endorsements: 16},
      {_name: "Infrastructure as Code", _level: 5, _endorsements: 26}
    ],
    projects: [
      {_id: "p1", _title: "Cloud Migration & Modernization", _description: "Led migration of a legacy monolithic application to a microservices architecture on AWS, _reducing operational costs by 40% and improving deployment frequency.", _imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400", _tags: ["AWS", _"Kubernetes", _"Microservices"], _date: "Nov 2023"},
      {_id: "p2", _title: "DevOps Automation Pipeline", _description: "Implemented comprehensive CI/CD pipelines using GitHub Actions, _reducing deployment time from days to minutes and enabling 20+ deployments per day.", _imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&h=400", _tags: ["CI/CD", _"GitHub Actions", _"DevOps"], _date: "Jul 2023"}
    ],
    experience: [
      {_id: "e1", _role: "Lead DevOps Engineer", _company: "CloudScale Solutions", _description: "Architecting and implementing cloud-native infrastructure for enterprise clients. Leading a team of 5 DevOps engineers in building automated deployment pipelines and infrastructure management systems.", _startDate: "Jun 2020", _endDate: "Present", _current: true},
      {_id: "e2", _role: "Senior Cloud Architect", _company: "TechInfra Inc.", _description: "Designed and implemented multi-cloud infrastructure solutions using AWS, _Azure, _and GCP. Reduced infrastructure costs by 35% while improving system reliability and performance.", _startDate: "Feb 2017", _endDate: "May 2020"}
    ],
    availability: {_status: "limited", _message: "Limited availability for short-term consulting projects and infrastructure assessments.", _availableHours: [
        { day: "Monday", _hours: "1:00 PM - 5:00 PM"},
        {_day: "Wednesday", _hours: "1:00 PM - 5:00 PM"},
        {_day: "Friday", _hours: "1:00 PM - 5:00 PM"}
      ]
    },
    hourlyRate: 135,
    contactEmail: "michael.reynolds@example.com"
  },
  {_id: "talent-3", _name: "Priya Sharma", _title: "Data Scientist & Statistical Analyst", _avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200", _coverImageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&h=600", _bio: "PhD in Statistics with extensive experience in predictive modeling, _data visualization, _and business intelligence solutions. My work focuses on extracting actionable insights from complex datasets and developing statistical models that drive business decisions. I have particular expertise in time series analysis, _A/B testing methodologies, _and developing custom BI dashboards for executive teams.", _location: "Seattle, _WA", _rating: 4.9, _reviewCount: 29, _aiScore: 95, _profileType: "talent", _skills: [
      { name: "Statistical Analysis", _level: 5, _endorsements: 22},
      {_name: "Python", _level: 4, _endorsements: 19},
      {_name: "R", _level: 5, _endorsements: 25},
      {_name: "Tableau", _level: 5, _endorsements: 20},
      {_name: "SQL", _level: 4, _endorsements: 18},
      {_name: "Machine Learning", _level: 3, _endorsements: 15},
      {_name: "Data Visualization", _level: 5, _endorsements: 21},
      {_name: "Predictive Modeling", _level: 4, _endorsements: 17}
    ],
    projects: [
      {_id: "p1", _title: "Customer Segmentation Analysis", _description: "Conducted advanced customer segmentation for an e-commerce client, _leading to targeted marketing campaigns that increased conversion rates by 35%.", _imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400", _tags: ["Data Science", _"Market Analysis", _"R"], _date: "Oct 2023"},
      {_id: "p2", _title: "Sales Forecasting Model", _description: "Developed time series forecasting models to predict seasonal sales patterns, _resulting in 22% improvement in inventory management.", _imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400", _tags: ["Time Series", _"Forecasting", _"Python"], _date: "Apr 2023"},
      {_id: "p3", _title: "Executive Dashboard System", _description: "Created interactive BI dashboards using Tableau to visualize KPIs and metrics for C-suite executives, _improving data-driven decision making.", _imageUrl: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=600&h=400", _tags: ["Tableau", _"BI", _"Data Visualization"], _date: "Jan 2023"}
    ],
    experience: [
      {_id: "e1", _role: "Lead Data Scientist", _company: "Analytics Insight Group", _description: "Heading the data science team, _developing predictive models and analytics solutions for clients across retail, _healthcare, _and financial services.", _startDate: "Aug 2021", _endDate: "Present", _current: true},
      {_id: "e2", _role: "Senior Statistical Analyst", _company: "DataDriven Consulting", _description: "Conducted statistical analysis and designed experiments to extract insights from complex datasets. Created reporting dashboards and presented findings to executive stakeholders.", _startDate: "May 2018", _endDate: "Jul 2021"}
    ],
    availability: {_status: "unavailable", _nextAvailable: "June 15, _2025", _message: "Currently committed to a long-term project until mid-June 2025.", _availableHours: []},
    hourlyRate: 145,
    contactEmail: "priya.sharma@example.com"
  },
  {_id: "talent-4", _name: "James Wilson", _title: "Cybersecurity Expert & Ethical Hacker", _avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200", _coverImageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1600&h=600", _bio: "CISSP-certified security professional with 10+ years of experience in threat detection, _incident response, _and security architecture. I specialize in conducting penetration tests, _security assessments, _and implementing robust security controls across enterprise environments. My background includes securing critical infrastructure, _responding to major security incidents, _and training teams on security best practices.", _location: "Austin, _TX", _rating: 4.7, _reviewCount: 31, _aiScore: 91, _profileType: "talent", _skills: [
      { name: "Penetration Testing", _level: 5, _endorsements: 23},
      {_name: "Security Analysis", _level: 5, _endorsements: 20},
      {_name: "CISSP", _level: 5, _endorsements: 19},
      {_name: "Risk Management", _level: 4, _endorsements: 15},
      {_name: "Network Security", _level: 4, _endorsements: 17},
      {_name: "Incident Response", _level: 5, _endorsements: 21},
      {_name: "Security Architecture", _level: 4, _endorsements: 16},
      {_name: "Cloud Security", _level: 4, _endorsements: 14}
    ],
    projects: [
      {_id: "p1", _title: "Enterprise Security Assessment", _description: "Conducted comprehensive security assessment for a financial institution, _identifying and mitigating 24 critical vulnerabilities before they could be exploited.", _imageUrl: "https://images.unsplash.com/photo-1562813733-b31f1c218a51?auto=format&fit=crop&w=600&h=400", _tags: ["Security", _"Finance", _"Assessment"], _date: "Dec 2023"},
      {_id: "p2", _title: "Security Operations Center Design", _description: "Designed and implemented a 24/7 security operations center for a healthcare provider, _ensuring HIPAA compliance and protection of patient data.", _imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&h=400", _tags: ["SOC", _"Healthcare", _"HIPAA"], _date: "Aug 2023"}
    ],
    experience: [
      {_id: "e1", _role: "Chief Information Security Officer", _company: "SecureTech Solutions", _description: "Leading all aspects of information security strategy, _governance, _and operations. Managing a team of security professionals to protect digital assets and ensure regulatory compliance.", _startDate: "Oct 2021", _endDate: "Present", _current: true},
      {_id: "e2", _role: "Senior Security Consultant", _company: "CyberDefense Associates", _description: "Provided expert security consulting services to clients across various industries. Conducted penetration testing, _security audits, _and vulnerability assessments.", _startDate: "Jan 2019", _endDate: "Sep 2021"}
    ],
    availability: {_status: "available", _message: "Available for security audits, _penetration testing, _and security strategy consulting.", _availableHours: [
        { day: "Monday", _hours: "9:00 AM - 5:00 PM"},
        {_day: "Tuesday", _hours: "9:00 AM - 5:00 PM"},
        {_day: "Wednesday", _hours: "9:00 AM - 5:00 PM"},
        {_day: "Thursday", _hours: "9:00 AM - 5:00 PM"},
        {_day: "Friday", _hours: "9:00 AM - 5:00 PM"}
      ]
    },
    hourlyRate: 165,
    contactEmail: "james.wilson@example.com"
  },
  {_id: "talent-5", _name: "David Martinez", _title: "Full-Stack Developer & React Expert", _avatarUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=200&h=200", _coverImageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&h=600", _bio: "Full-stack developer with 7+ years of experience specializing in React, _Node.js, _and modern JavaScript frameworks. I build scalable, _responsive, _and user-friendly web applications with a focus on performance optimization and clean code. My expertise includes SPA architecture, _state management, _server-side rendering, _and integrating with various APIs and databases.", _location: "Miami, _FL", _rating: 4.8, _reviewCount: 42, _aiScore: 89, _profileType: "talent", _skills: [
      { name: "React", _level: 5, _endorsements: 35},
      {_name: "Node.js", _level: 4, _endorsements: 30},
      {_name: "TypeScript", _level: 5, _endorsements: 32},
      {_name: "MongoDB", _level: 4, _endorsements: 28},
      {_name: "GraphQL", _level: 4, _endorsements: 25},
      {_name: "Next.js", _level: 4, _endorsements: 26},
      {_name: "Redux", _level: 5, _endorsements: 29},
      {_name: "AWS", _level: 3, _endorsements: 18}
    ],
    projects: [
      {_id: "p1", _title: "E-Commerce Platform", _description: "Developed a responsive e-commerce platform using React and Node.js, _with features including user authentication, _product catalog, _shopping cart, _and payment integration.", _imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400", _tags: ["React", _"Node.js", _"E-Commerce"], _date: "Nov 2023"},
      {_id: "p2", _title: "Real-Time Analytics Dashboard", _description: "Built a real-time analytics dashboard using React, _Socket.io, _and D3.js, _allowing clients to monitor business metrics with live updates and interactive visualizations.", _imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400", _tags: ["React", _"Analytics", _"D3.js"], _date: "Jul 2023"},
      {_id: "p3", _title: "SaaS Application", _description: "Architected and developed a SaaS project management tool with React, _GraphQL, _and MongoDB, _featuring team collaboration tools, _task management, _and reporting.", _imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&h=400", _tags: ["SaaS", _"React", _"GraphQL"], _date: "Mar 2023"}
    ],
    experience: [
      {_id: "e1", _role: "Senior Frontend Developer", _company: "TechSolutions Inc.", _description: "Leading frontend development for multiple web applications, _implementing modern React patterns, _and optimizing application performance.", _startDate: "May 2021", _endDate: "Present", _current: true},
      {_id: "e2", _role: "Full-Stack Developer", _company: "WebInnovate", _description: "Developed full-stack web applications using React, _Node.js, _and MongoDB. Collaborated closely with designers and product managers to deliver features on schedule.", _startDate: "Jun 2018", _endDate: "Apr 2021"}
    ],
    availability: {_status: "limited", _message: "Available for part-time projects only (up to 20 hours per week).", _availableHours: [
        { day: "Tuesday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Thursday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Saturday", _hours: "12:00 PM - 4:00 PM"}
      ]
    },
    hourlyRate: 125,
    contactEmail: "david.martinez@example.com"
  }
];
