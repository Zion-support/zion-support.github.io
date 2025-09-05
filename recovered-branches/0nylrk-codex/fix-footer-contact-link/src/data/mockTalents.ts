
<<<<<<< HEAD
import { ProfileData } from "@/types/profile",;
;
// Mock talent profiles for development and testing;
export const MOCK_TALENTS:ProfileData[] = [;
  {;
    id:"talent-1",;
    name:"Alexandra Chen",;
    title:"Senior AI Engineer & Machine Learning Expert",;
    avatarUrl:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200",;
    coverImageUrl:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&h=600",;
    bio:"AI specialist with over 8 years of experience in computer vision and natural language processing. I've designed and implemented machine learning solutions for Fortune 500 companies across healthcare, finance, and retail sectors. My expertise lies in developing custom neural network architectures and optimizing models for production environments. I excel at translating complex business problems into effective AI solutions that deliver measurable impact and ROI.",;
    location:"Boston, MA",;
    rating:4.9,;
    reviewCount:43,;
    aiScore:97,;
    profileType:"talent",;
    skills:[;
      { name:"Machine Learning", level:5, endorsements:38 },;
      { name:"TensorFlow", level:5, endorsements:32 },;
      { name:"Python", level:5, endorsements:45 },;
      { name:"Computer Vision", level:4, endorsements:27 },;
      { name:"NLP", level:4, endorsements:21 },;
      { name:"Data Science", level:5, endorsements:39 },;
      { name:"PyTorch", level:4, endorsements:18 },;
      { name:"Deep Learning", level:5, endorsements:29 }
    ],;
    projects:[;
      {;
        id:"p1",;
        title:"Facial Recognition System",;
        description:"Built a state-of-the-art facial recognition system using deep learning for a major retail chain, improving security protocols and reducing losses by 32%.",;
        imageUrl:"https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=600&h=400",;
        tags:["Computer Vision", "Deep Learning", "Python"],;
        date:"Sep 2023";
      },;
      {;
        id:"p2",;
        title:"Sentiment Analysis API",;
        description:"Created an API for real-time sentiment analysis of customer feedback, processing over 50,000 reviews daily with 94% accuracy.",;
        imageUrl:"https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&h=400",;
        tags:["NLP", "API", "Python"],;
        date:"May 2023";
      },;
      {;
        id:"p3",;
        title:"Predictive Maintenance System",;
        description:"Developed ML models to predict equipment failures before they occur for a manufacturing client, reducing downtime by 45% and saving approximately $2M annually.",;
        imageUrl:"https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&h=400",;
        tags:["Predictive Analytics", "IoT", "Machine Learning"],;
        date:"Dec 2022";
      }
    ],;
    experience:[;
      {;
        id:"e1",;
        role:"Senior AI Engineer",;
        company:"Innovate AI",;
        description:"Leading computer vision projects and mentoring junior engineers in deep learning techniques. Developed custom neural network architectures for image recognition and segmentation tasks.",;
        startDate:"Mar 2021",;
        endDate:"Present",;
        current:true;
      },;
      {;
        id:"e2",;
        role:"Machine Learning Engineer",;
        company:"TechGiant Inc.",;
        description:"Developed and deployed ML models for product recommendation systems. Improved conversion rates by 28% through personalized customer experiences.",;
        startDate:"Jun 2018",;
        endDate:"Feb 2021";
      },;
      {;
        id:"e3",;
        role:"Data Scientist",;
        company:"DataCorp",;
        description:"Analyzed large datasets to extract business insights and develop predictive models. Created automated reporting systems using Python and visualization tools.",;
        startDate:"Aug 2016",;
        endDate:"May 2018";
      }
    ],;
    availability:{;
      status:"available",;
      message:"Open to new projects starting immediately. Prefer projects with 3+ month engagement.",;
      availableHours:[;
        { day:"Monday", hours:"10:00 AM - 6:00 PM" },;
        { day:"Tuesday", hours:"10:00 AM - 6:00 PM" },;
        { day:"Wednesday", hours:"10:00 AM - 6:00 PM" },;
        { day:"Thursday", hours:"10:00 AM - 6:00 PM" },;
        { day:"Friday", hours:"10:00 AM - 2:00 PM" }
      ];
    },;
    hourlyRate:150,;
    contactEmail:"alexandra.chen@example.com";
  },;
  {;
    id:"talent-2",;
    name:"Michael Reynolds",;
    title:"DevOps Specialist & Cloud Architect",;
    avatarUrl:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200",;
    coverImageUrl:"https://images.unsplash.com/photo-1563237023-b1e970526dcb?auto=format&fit=crop&w=1600&h=600",;
    bio:"Infrastructure automation expert with 10+ years of experience in containerization, CI/CD pipelines, and cloud-native architectures. I specialize in designing and implementing scalable, resilient, and secure cloud infrastructure on AWS, Azure, and GCP. My expertise includes Kubernetes orchestration, infrastructure as code, and automating DevOps workflows to improve development velocity and operational efficiency.",;
    location:"Chicago, IL",;
    rating:4.8,;
    reviewCount:37,;
    aiScore:92,;
    profileType:"talent",;
    skills:[;
      { name:"Kubernetes", level:5, endorsements:28 },;
      { name:"Docker", level:5, endorsements:31 },;
      { name:"AWS", level:5, endorsements:35 },;
      { name:"Terraform", level:4, endorsements:24 },;
      { name:"CI/CD", level:4, endorsements:21 },;
      { name:"Azure", level:3, endorsements:18 },;
      { name:"Python", level:3, endorsements:16 },;
      { name:"Infrastructure as Code", level:5, endorsements:26 }
    ],;
    projects:[;
      {;
        id:"p1",;
        title:"Cloud Migration & Modernization",;
        description:"Led migration of a legacy monolithic application to a microservices architecture on AWS, reducing operational costs by 40% and improving deployment frequency.",;
        imageUrl:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400",;
        tags:["AWS", "Kubernetes", "Microservices"],;
        date:"Nov 2023";
      },;
      {;
        id:"p2",;
        title:"DevOps Automation Pipeline",;
        description:"Implemented comprehensive CI/CD pipelines using GitHub Actions, reducing deployment time from days to minutes and enabling 20+ deployments per day.",;
        imageUrl:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&h=400",;
        tags:["CI/CD", "GitHub Actions", "DevOps"],;
        date:"Jul 2023";
      }
    ],;
    experience:[;
      {;
        id:"e1",;
        role:"Lead DevOps Engineer",;
        company:"CloudScale Solutions",;
        description:"Architecting and implementing cloud-native infrastructure for enterprise clients. Leading a team of 5 DevOps engineers in building automated deployment pipelines and infrastructure management systems.",;
        startDate:"Jun 2020",;
        endDate:"Present",;
        current:true;
      },;
      {;
        id:"e2",;
        role:"Senior Cloud Architect",;
        company:"TechInfra Inc.",;
        description:"Designed and implemented multi-cloud infrastructure solutions using AWS, Azure, and GCP. Reduced infrastructure costs by 35% while improving system reliability and window.window.window.performance.",;
        startDate:"Feb 2017",;
        endDate:"May 2020";
      }
    ],;
    availability:{;
      status:"limited",;
      message:"Limited availability for short-term consulting projects and infrastructure assessments.",;
      availableHours:[;
        { day:"Monday", hours:"1:00 PM - 5:00 PM" },;
        { day:"Wednesday", hours:"1:00 PM - 5:00 PM" },;
        { day:"Friday", hours:"1:00 PM - 5:00 PM" }
      ];
    },;
    hourlyRate:135,;
    contactEmail:"michael.reynolds@example.com";
  },;
  {;
    id:"talent-3",;
    name:"Priya Sharma",;
    title:"Data Scientist & Statistical Analyst",;
    avatarUrl:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200",;
    coverImageUrl:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&h=600",;
    bio:"PhD in Statistics with extensive experience in predictive modeling, data visualization, and business intelligence solutions. My work focuses on extracting actionable insights from complex datasets and developing statistical models that drive business decisions. I have particular expertise in time series analysis, A/B testing methodologies, and developing custom BI dashboards for executive teams.",;
    location:"Seattle, WA",;
    rating:4.9,;
    reviewCount:29,;
    aiScore:95,;
    profileType:"talent",;
    skills:[;
      { name:"Statistical Analysis", level:5, endorsements:22 },;
      { name:"Python", level:4, endorsements:19 },;
      { name:"R", level:5, endorsements:25 },;
      { name:"Tableau", level:5, endorsements:20 },;
      { name:"SQL", level:4, endorsements:18 },;
      { name:"Machine Learning", level:3, endorsements:15 },;
      { name:"Data Visualization", level:5, endorsements:21 },;
      { name:"Predictive Modeling", level:4, endorsements:17 }
    ],;
    projects:[;
      {;
        id:"p1",;
        title:"Customer Segmentation Analysis",;
        description:"Conducted advanced customer segmentation for an e-commerce client, leading to targeted marketing campaigns that increased conversion rates by 35%.",;
        imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",;
        tags:["Data Science", "Market Analysis", "R"],;
        date:"Oct 2023";
      },;
      {;
        id:"p2",;
        title:"Sales Forecasting Model",;
        description:"Developed time series forecasting models to predict seasonal sales patterns, resulting in 22% improvement in inventory management.",;
        imageUrl:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",;
        tags:["Time Series", "Forecasting", "Python"],;
        date:"Apr 2023";
      },;
      {;
        id:"p3",;
        title:"Executive Dashboard System",;
        description:"Created interactive BI dashboards using Tableau to visualize KPIs and metrics for C-suite executives, improving data-driven decision making.",;
        imageUrl:"https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=600&h=400",;
        tags:["Tableau", "BI", "Data Visualization"],;
        date:"Jan 2023";
      }
    ],;
    experience:[;
      {;
        id:"e1",;
        role:"Lead Data Scientist",;
        company:"Analytics Insight Group",;
        description:"Heading the data science team, developing predictive models and analytics solutions for clients across retail, healthcare, and financial services.",;
        startDate:"Aug 2021",;
        endDate:"Present",;
        current:true;
      },;
      {;
        id:"e2",;
        role:"Senior Statistical Analyst",;
        company:"DataDriven Consulting",;
        description:"Conducted statistical analysis and designed experiments to extract insights from complex datasets. Created reporting dashboards and presented findings to executive stakeholders.",;
        startDate:"May 2018",;
        endDate:"Jul 2021";
      }
    ],;
    availability:{;
      status:"unavailable",;
      nextAvailable:"June 15, 2025",;
      message:"Currently committed to a long-term project until mid-June 2025.",;
      availableHours:[];
    },;
    hourlyRate:145,;
    contactEmail:"priya.sharma@example.com";
  },;
  {;
    id:"talent-4",;
    name:"James Wilson",;
    title:"Cybersecurity Expert & Ethical Hacker",;
    avatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",;
    coverImageUrl:"https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1600&h=600",;
    bio:"CISSP-certified security professional with 10+ years of experience in threat detection, incident response, and security architecture. I specialize in conducting penetration tests, security assessments, and implementing robust security controls across enterprise environments. My background includes securing critical infrastructure, responding to major security incidents, and training teams on security best practices.",;
    location:"Austin, TX",;
    rating:4.7,;
    reviewCount:31,;
    aiScore:91,;
    profileType:"talent",;
    skills:[;
      { name:"Penetration Testing", level:5, endorsements:23 },;
      { name:"Security Analysis", level:5, endorsements:20 },;
      { name:"CISSP", level:5, endorsements:19 },;
      { name:"Risk Management", level:4, endorsements:15 },;
      { name:"Network Security", level:4, endorsements:17 },;
      { name:"Incident Response", level:5, endorsements:21 },;
      { name:"Security Architecture", level:4, endorsements:16 },;
      { name:"Cloud Security", level:4, endorsements:14 }
    ],;
    projects:[;
      {;
        id:"p1",;
        title:"Enterprise Security Assessment",;
        description:"Conducted comprehensive security assessment for a financial institution, identifying and mitigating 24 critical vulnerabilities before they could be exploited.",;
        imageUrl:"https://images.unsplash.com/photo-1562813733-b31f1c218a51?auto=format&fit=crop&w=600&h=400",;
        tags:["Security", "Finance", "Assessment"],;
        date:"Dec 2023";
      },;
      {;
        id:"p2",;
        title:"Security Operations Center Design",;
        description:"Designed and implemented a 24/7 security operations center for a healthcare provider, ensuring HIPAA compliance and protection of patient data.",;
        imageUrl:"https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&h=400",;
        tags:["SOC", "Healthcare", "HIPAA"],;
        date:"Aug 2023";
      }
    ],;
    experience:[;
      {;
        id:"e1",;
        role:"Chief Information Security Officer",;
        company:"SecureTech Solutions",;
        description:"Leading all aspects of information security strategy, governance, and operations. Managing a team of security professionals to protect digital assets and ensure regulatory compliance.",;
        startDate:"Oct 2021",;
        endDate:"Present",;
        current:true;
      },;
      {;
        id:"e2",;
        role:"Senior Security Consultant",;
        company:"CyberDefense Associates",;
        description:"Provided expert security consulting services to clients across various industries. Conducted penetration testing, security audits, and vulnerability assessments.",;
        startDate:"Jan 2019",;
        endDate:"Sep 2021";
      }
    ],;
    availability:{;
      status:"available",;
      message:"Available for security audits, penetration testing, and security strategy consulting.",;
      availableHours:[;
        { day:"Monday", hours:"9:00 AM - 5:00 PM" },;
        { day:"Tuesday", hours:"9:00 AM - 5:00 PM" },;
        { day:"Wednesday", hours:"9:00 AM - 5:00 PM" },;
        { day:"Thursday", hours:"9:00 AM - 5:00 PM" },;
        { day:"Friday", hours:"9:00 AM - 5:00 PM" }
      ];
    },;
    hourlyRate:165,;
    contactEmail:"james.wilson@example.com";
  },;
  {;
    id:"talent-5",;
    name:"David Martinez",;
    title:"Full-Stack Developer & React Expert",;
    avatarUrl:"https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=200&h=200",;
    coverImageUrl:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&h=600",;
    bio:"Full-stack developer with 7+ years of experience specializing in React, Node.js, and modern JavaScript frameworks. I build scalable, responsive, and user-friendly web applications with a focus on performance optimization and clean code. My expertise includes SPA architecture, state management, server-side rendering, and integrating with various APIs and databases.",;
    location:"Miami, FL",;
    rating:4.8,;
    reviewCount:42,;
    aiScore:89,;
    profileType:"talent",;
    skills:[;
      { name:"React", level:5, endorsements:35 },;
      { name:"Node.js", level:4, endorsements:30 },;
      { name:"TypeScript", level:5, endorsements:32 },;
      { name:"MongoDB", level:4, endorsements:28 },;
      { name:"GraphQL", level:4, endorsements:25 },;
      { name:"Next.js", level:4, endorsements:26 },;
      { name:"Redux", level:5, endorsements:29 },;
      { name:"AWS", level:3, endorsements:18 }
    ],;
    projects:[;
      {;
        id:"p1",;
        title:"E-Commerce Platform",;
        description:"Developed a responsive e-commerce platform using React and Node.js, with features including user authentication, product catalog, shopping cart, and payment integration.",;
        imageUrl:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400",;
        tags:["React", "Node.js", "E-Commerce"],;
        date:"Nov 2023";
      },;
      {;
        id:"p2",;
        title:"Real-Time Analytics Dashboard",;
        description:"Built a real-time analytics dashboard using React, Socket.io, and D3.js, allowing clients to monitor business metrics with live updates and interactive visualizations.",;
        imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",;
        tags:["React", "Analytics", "D3.js"],;
        date:"Jul 2023";
      },;
      {;
        id:"p3",;
        title:"SaaS Application",;
        description:"Architected and developed a SaaS project management tool with React, GraphQL, and MongoDB, featuring team collaboration tools, task management, and reporting.",;
        imageUrl:"https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&h=400",;
        tags:["SaaS", "React", "GraphQL"],;
        date:"Mar 2023";
      }
    ],;
    experience:[;
      {;
        id:"e1",;
        role:"Senior Frontend Developer",;
        company:"TechSolutions Inc.",;
        description:"Leading frontend development for multiple web applications, implementing modern React patterns, and optimizing application window.window.window.performance.",;
        startDate:"May 2021",;
        endDate:"Present",;
        current:true;
      },;
      {;
        id:"e2",;
        role:"Full-Stack Developer",;
        company:"WebInnovate",;
        description:"Developed full-stack web applications using React, Node.js, and MongoDB. Collaborated closely with designers and product managers to deliver features on schedule.",;
        startDate:"Jun 2018",;
        endDate:"Apr 2021";
      }
    ],;
    availability:{;
      status:"limited",;
      message:"Available for part-time projects only (up to 20 hours per week).",;
      availableHours:[;
        { day:"Tuesday", hours:"10:00 AM - 6:00 PM" },;
        { day:"Thursday", hours:"10:00 AM - 6:00 PM" },;
        { day:"Saturday", hours:"12:00 PM - 4:00 PM" }
      ];
    },;
    hourlyRate:125,;
    contactEmail:"david.martinez@example.com";
=======
import { ProfileData } from "@/types/profile",
// Mock talent profiles for development and testing
export const MOCK_TALENTS: ProfileData[] = [
  {
    id: &quot;talent-1&quot;,
    name: &quot;Alexandra Chen&quot;,
    title: &quot;Senior AI Engineer & Machine Learning Expert&quot;,
    avatarUrl: &quot;https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&quot;,
    coverImageUrl: &quot;https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&h=600&quot;,
    bio: &quot;AI specialist with over 8 years of experience in computer vision and natural language processing. I've designed and implemented machine learning solutions for Fortune 500 companies across healthcare, finance, and retail sectors. My expertise lies in developing custom neural network architectures and optimizing models for production environments. I excel at translating complex business problems into effective AI solutions that deliver measurable impact and ROI.&quot;,
    location: &quot;Boston, MA&quot;,
    rating: 4.9,
    reviewCount: 43,
    aiScore: 97,
    profileType: &quot;talent&quot;,
    skills: [
      { name: &quot;Machine Learning&quot;, level: 5, endorsements: 38 },
      { name: &quot;TensorFlow&quot;, level: 5, endorsements: 32 },
      { name: &quot;Python&quot;, level: 5, endorsements: 45 },
      { name: &quot;Computer Vision&quot;, level: 4, endorsements: 27 },
      { name: &quot;NLP&quot;, level: 4, endorsements: 21 },
      { name: &quot;Data Science&quot;, level: 5, endorsements: 39 },
      { name: &quot;PyTorch&quot;, level: 4, endorsements: 18 },
      { name: &quot;Deep Learning&quot;, level: 5, endorsements: 29 }
    ],
    projects: [
      {
        id: &quot;p1&quot;,
        title: &quot;Facial Recognition System&quot;,
        description: &quot;Built a state-of-the-art facial recognition system using deep learning for a major retail chain, improving security protocols and reducing losses by 32%.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;Computer Vision&quot;, &quot;Deep Learning&quot;, &quot;Python&quot;],
        date: &quot;Sep 2023&quot;
      },
      {
        id: &quot;p2&quot;,
        title: &quot;Sentiment Analysis API&quot;,
        description: &quot;Created an API for real-time sentiment analysis of customer feedback, processing over 50,000 reviews daily with 94% accuracy.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;NLP&quot;, &quot;API&quot;, &quot;Python&quot;],
        date: &quot;May 2023&quot;
      },
      {
        id: &quot;p3&quot;,
        title: &quot;Predictive Maintenance System&quot;,
        description: &quot;Developed ML models to predict equipment failures before they occur for a manufacturing client, reducing downtime by 45% and saving approximately $2M annually.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;Predictive Analytics&quot;, &quot;IoT&quot;, &quot;Machine Learning&quot;],
        date: &quot;Dec 2022&quot;
      }
    ],
    experience: [
      {
        id: &quot;e1&quot;,
        role: &quot;Senior AI Engineer&quot;,
        company: &quot;Innovate AI&quot;,
        description: &quot;Leading computer vision projects and mentoring junior engineers in deep learning techniques. Developed custom neural network architectures for image recognition and segmentation tasks.&quot;,
        startDate: &quot;Mar 2021&quot;,
        endDate: &quot;Present&quot;,
        current: true
      },
      {
        id: &quot;e2&quot;,
        role: &quot;Machine Learning Engineer&quot;,
        company: &quot;TechGiant Inc.&quot;,
        description: &quot;Developed and deployed ML models for product recommendation systems. Improved conversion rates by 28% through personalized customer experiences.&quot;,
        startDate: &quot;Jun 2018&quot;,
        endDate: &quot;Feb 2021&quot;
      },
      {
        id: &quot;e3&quot;,
        role: &quot;Data Scientist&quot;,
        company: &quot;DataCorp&quot;,
        description: &quot;Analyzed large datasets to extract business insights and develop predictive models. Created automated reporting systems using Python and visualization tools.&quot;,
        startDate: &quot;Aug 2016&quot;,
        endDate: &quot;May 2018&quot;
      }
    ],
    availability: {
      status: &quot;available&quot;,
      message: &quot;Open to new projects starting immediately. Prefer projects with 3+ month engagement.&quot;,
      availableHours: [
        { day: &quot;Monday&quot;, hours: &quot;10:00 AM - 6:00 PM&quot; },
        { day: &quot;Tuesday&quot;, hours: &quot;10:00 AM - 6:00 PM&quot; },
        { day: &quot;Wednesday&quot;, hours: &quot;10:00 AM - 6:00 PM&quot; },
        { day: &quot;Thursday&quot;, hours: &quot;10:00 AM - 6:00 PM&quot; },
        { day: &quot;Friday&quot;, hours: &quot;10:00 AM - 2:00 PM&quot; }      ]
    },
    hourlyRate: 150,
    contactEmail: &quot;alexandra.chen@example.com&quot;
  },
  {
    id: &quot;talent-2&quot;,
    name: &quot;Michael Reynolds&quot;,
    title: &quot;DevOps Specialist & Cloud Architect&quot;,
    avatarUrl: &quot;https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200&quot;,
    coverImageUrl: &quot;https://images.unsplash.com/photo-1563237023-b1e970526dcb?auto=format&fit=crop&w=1600&h=600&quot;,
    bio: &quot;Infrastructure automation expert with 10+ years of experience in containerization, CI/CD pipelines, and cloud-native architectures. I specialize in designing and implementing scalable, resilient, and secure cloud infrastructure on AWS, Azure, and GCP. My expertise includes Kubernetes orchestration, infrastructure as code, and automating DevOps workflows to improve development velocity and operational efficiency.&quot;,
    location: &quot;Chicago, IL&quot;,
    rating: 4.8,
    reviewCount: 37,
    aiScore: 92,
    profileType: &quot;talent&quot;,
    skills: [
      { name: &quot;Kubernetes&quot;, level: 5, endorsements: 28 },
      { name: &quot;Docker&quot;, level: 5, endorsements: 31 },
      { name: &quot;AWS&quot;, level: 5, endorsements: 35 },
      { name: &quot;Terraform&quot;, level: 4, endorsements: 24 },
      { name: &quot;CI/CD&quot;, level: 4, endorsements: 21 },
      { name: &quot;Azure&quot;, level: 3, endorsements: 18 },
      { name: &quot;Python&quot;, level: 3, endorsements: 16 },
      { name: &quot;Infrastructure as Code&quot;, level: 5, endorsements: 26 }
    ],
    projects: [
      {
        id: &quot;p1&quot;,
        title: &quot;Cloud Migration & Modernization&quot;,
        description: &quot;Led migration of a legacy monolithic application to a microservices architecture on AWS, reducing operational costs by 40% and improving deployment frequency.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;AWS&quot;, &quot;Kubernetes&quot;, &quot;Microservices&quot;],
        date: &quot;Nov 2023&quot;
      },
      {
        id: &quot;p2&quot;,
        title: &quot;DevOps Automation Pipeline&quot;,
        description: &quot;Implemented comprehensive CI/CD pipelines using GitHub Actions, reducing deployment time from days to minutes and enabling 20+ deployments per day.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;CI/CD&quot;, &quot;GitHub Actions&quot;, &quot;DevOps&quot;],
        date: &quot;Jul 2023&quot;
      }
    ],
    experience: [
      {
        id: &quot;e1&quot;,
        role: &quot;Lead DevOps Engineer&quot;,
        company: &quot;CloudScale Solutions&quot;,
        description: &quot;Architecting and implementing cloud-native infrastructure for enterprise clients. Leading a team of 5 DevOps engineers in building automated deployment pipelines and infrastructure management systems.&quot;,
        startDate: &quot;Jun 2020&quot;,
        endDate: &quot;Present&quot;,
        current: true
      },
      {
        id: "e2",
        role: "Senior Cloud Architect",
        company: "TechInfra Inc.",
        description: "Designed and implemented multi-cloud infrastructure solutions using AWS, Azure, and GCP. Reduced infrastructure costs by 35% while improving system reliability and window.window.window.performance.",
        startDate: "Feb 2017",
        endDate: "May 2020"      }
    ],
    availability: {
      status: &quot;limited&quot;,
      message: &quot;Limited availability for short-term consulting projects and infrastructure assessments.&quot;,
      availableHours: [
        { day: &quot;Monday&quot;, hours: &quot;1:00 PM - 5:00 PM&quot; },
        { day: &quot;Wednesday&quot;, hours: &quot;1:00 PM - 5:00 PM&quot; },
        { day: &quot;Friday&quot;, hours: &quot;1:00 PM - 5:00 PM&quot; }
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
    contactEmail: &quot;michael.reynolds@example.com&quot;
  },
  {
    id: &quot;talent-3&quot;,
    name: &quot;Priya Sharma&quot;,
    title: &quot;Data Scientist & Statistical Analyst&quot;,
    avatarUrl: &quot;https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&quot;,
    coverImageUrl: &quot;https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&h=600&quot;,
    bio: &quot;PhD in Statistics with extensive experience in predictive modeling, data visualization, and business intelligence solutions. My work focuses on extracting actionable insights from complex datasets and developing statistical models that drive business decisions. I have particular expertise in time series analysis, A/B testing methodologies, and developing custom BI dashboards for executive teams.&quot;,
    location: &quot;Seattle, WA&quot;,
    rating: 4.9,
    reviewCount: 29,
    aiScore: 95,
    profileType: &quot;talent&quot;,
    skills: [
      { name: &quot;Statistical Analysis&quot;, level: 5, endorsements: 22 },
      { name: &quot;Python&quot;, level: 4, endorsements: 19 },
      { name: &quot;R&quot;, level: 5, endorsements: 25 },
      { name: &quot;Tableau&quot;, level: 5, endorsements: 20 },
      { name: &quot;SQL&quot;, level: 4, endorsements: 18 },
      { name: &quot;Machine Learning&quot;, level: 3, endorsements: 15 },
      { name: &quot;Data Visualization&quot;, level: 5, endorsements: 21 },
      { name: &quot;Predictive Modeling&quot;, level: 4, endorsements: 17 }
    ],
    projects: [
      {
        id: &quot;p1&quot;,
        title: &quot;Customer Segmentation Analysis&quot;,
        description: &quot;Conducted advanced customer segmentation for an e-commerce client, leading to targeted marketing campaigns that increased conversion rates by 35%.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;Data Science&quot;, &quot;Market Analysis&quot;, &quot;R&quot;],
        date: &quot;Oct 2023&quot;
      },
      {
        id: &quot;p2&quot;,
        title: &quot;Sales Forecasting Model&quot;,
        description: &quot;Developed time series forecasting models to predict seasonal sales patterns, resulting in 22% improvement in inventory management.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;Time Series&quot;, &quot;Forecasting&quot;, &quot;Python&quot;],
        date: &quot;Apr 2023&quot;
      },
      {
        id: &quot;p3&quot;,
        title: &quot;Executive Dashboard System&quot;,
        description: &quot;Created interactive BI dashboards using Tableau to visualize KPIs and metrics for C-suite executives, improving data-driven decision making.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;Tableau&quot;, &quot;BI&quot;, &quot;Data Visualization&quot;],
        date: &quot;Jan 2023&quot;
      }
    ],
    experience: [
      {
        id: &quot;e1&quot;,
        role: &quot;Lead Data Scientist&quot;,
        company: &quot;Analytics Insight Group&quot;,
        description: &quot;Heading the data science team, developing predictive models and analytics solutions for clients across retail, healthcare, and financial services.&quot;,
        startDate: &quot;Aug 2021&quot;,
        endDate: &quot;Present&quot;,
        current: true
      },
      {
        id: &quot;e2&quot;,
        role: &quot;Senior Statistical Analyst&quot;,
        company: &quot;DataDriven Consulting&quot;,
        description: &quot;Conducted statistical analysis and designed experiments to extract insights from complex datasets. Created reporting dashboards and presented findings to executive stakeholders.&quot;,
        startDate: &quot;May 2018&quot;,
        endDate: &quot;Jul 2021&quot;
      }
    ],
    availability: {
      status: &quot;unavailable&quot;,
      nextAvailable: &quot;June 15, 2025&quot;,
      message: &quot;Currently committed to a long-term project until mid-June 2025.&quot;,
      availableHours: []
    },    hourlyRate: 145,
    contactEmail: &quot;priya.sharma@example.com&quot;
  },
  {
    id: &quot;talent-4&quot;,
    name: &quot;James Wilson&quot;,
    title: &quot;Cybersecurity Expert & Ethical Hacker&quot;,
    avatarUrl: &quot;https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&quot;,
    coverImageUrl: &quot;https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1600&h=600&quot;,
    bio: &quot;CISSP-certified security professional with 10+ years of experience in threat detection, incident response, and security architecture. I specialize in conducting penetration tests, security assessments, and implementing robust security controls across enterprise environments. My background includes securing critical infrastructure, responding to major security incidents, and training teams on security best practices.&quot;,
    location: &quot;Austin, TX&quot;,
    rating: 4.7,
    reviewCount: 31,
    aiScore: 91,
    profileType: &quot;talent&quot;,
    skills: [
      { name: &quot;Penetration Testing&quot;, level: 5, endorsements: 23 },
      { name: &quot;Security Analysis&quot;, level: 5, endorsements: 20 },
      { name: &quot;CISSP&quot;, level: 5, endorsements: 19 },
      { name: &quot;Risk Management&quot;, level: 4, endorsements: 15 },
      { name: &quot;Network Security&quot;, level: 4, endorsements: 17 },
      { name: &quot;Incident Response&quot;, level: 5, endorsements: 21 },
      { name: &quot;Security Architecture&quot;, level: 4, endorsements: 16 },
      { name: &quot;Cloud Security&quot;, level: 4, endorsements: 14 }
    ],
    projects: [
      {
        id: &quot;p1&quot;,
        title: &quot;Enterprise Security Assessment&quot;,
        description: &quot;Conducted comprehensive security assessment for a financial institution, identifying and mitigating 24 critical vulnerabilities before they could be exploited.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1562813733-b31f1c218a51?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;Security&quot;, &quot;Finance&quot;, &quot;Assessment&quot;],
        date: &quot;Dec 2023&quot;
      },
      {
        id: &quot;p2&quot;,
        title: &quot;Security Operations Center Design&quot;,
        description: &quot;Designed and implemented a 24/7 security operations center for a healthcare provider, ensuring HIPAA compliance and protection of patient data.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;SOC&quot;, &quot;Healthcare&quot;, &quot;HIPAA&quot;],
        date: &quot;Aug 2023&quot;
      }
    ],
    experience: [
      {
        id: &quot;e1&quot;,
        role: &quot;Chief Information Security Officer&quot;,
        company: &quot;SecureTech Solutions&quot;,
        description: &quot;Leading all aspects of information security strategy, governance, and operations. Managing a team of security professionals to protect digital assets and ensure regulatory compliance.&quot;,
        startDate: &quot;Oct 2021&quot;,
        endDate: &quot;Present&quot;,
        current: true
      },
      {
        id: &quot;e2&quot;,
        role: &quot;Senior Security Consultant&quot;,
        company: &quot;CyberDefense Associates&quot;,
        description: &quot;Provided expert security consulting services to clients across various industries. Conducted penetration testing, security audits, and vulnerability assessments.&quot;,
        startDate: &quot;Jan 2019&quot;,
        endDate: &quot;Sep 2021&quot;
      }
    ],
    availability: {
      status: &quot;available&quot;,
      message: &quot;Available for security audits, penetration testing, and security strategy consulting.&quot;,
      availableHours: [
        { day: &quot;Monday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; },
        { day: &quot;Tuesday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; },
        { day: &quot;Wednesday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; },
        { day: &quot;Thursday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; },
        { day: &quot;Friday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; }      ]
    },
    hourlyRate: 165,
    contactEmail: &quot;james.wilson@example.com&quot;
  },
  {
    id: &quot;talent-5&quot;,
    name: &quot;David Martinez&quot;,
    title: &quot;Full-Stack Developer & React Expert&quot;,
    avatarUrl: &quot;https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=200&h=200&quot;,
    coverImageUrl: &quot;https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&h=600&quot;,
    bio: &quot;Full-stack developer with 7+ years of experience specializing in React, Node.js, and modern JavaScript frameworks. I build scalable, responsive, and user-friendly web applications with a focus on performance optimization and clean code. My expertise includes SPA architecture, state management, server-side rendering, and integrating with various APIs and databases.&quot;,
    location: &quot;Miami, FL&quot;,
    rating: 4.8,
    reviewCount: 42,
    aiScore: 89,
    profileType: &quot;talent&quot;,
    skills: [
      { name: &quot;React&quot;, level: 5, endorsements: 35 },
      { name: &quot;Node.js&quot;, level: 4, endorsements: 30 },
      { name: &quot;TypeScript&quot;, level: 5, endorsements: 32 },
      { name: &quot;MongoDB&quot;, level: 4, endorsements: 28 },
      { name: &quot;GraphQL&quot;, level: 4, endorsements: 25 },
      { name: &quot;Next.js&quot;, level: 4, endorsements: 26 },
      { name: &quot;Redux&quot;, level: 5, endorsements: 29 },
      { name: &quot;AWS&quot;, level: 3, endorsements: 18 }
    ],
    projects: [
      {
        id: &quot;p1&quot;,
        title: &quot;E-Commerce Platform&quot;,
        description: &quot;Developed a responsive e-commerce platform using React and Node.js, with features including user authentication, product catalog, shopping cart, and payment integration.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;React&quot;, &quot;Node.js&quot;, &quot;E-Commerce&quot;],
        date: &quot;Nov 2023&quot;
      },
      {
        id: &quot;p2&quot;,
        title: &quot;Real-Time Analytics Dashboard&quot;,
        description: &quot;Built a real-time analytics dashboard using React, Socket.io, and D3.js, allowing clients to monitor business metrics with live updates and interactive visualizations.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;React&quot;, &quot;Analytics&quot;, &quot;D3.js&quot;],
        date: &quot;Jul 2023&quot;
      },
      {
        id: &quot;p3&quot;,
        title: &quot;SaaS Application&quot;,
        description: &quot;Architected and developed a SaaS project management tool with React, GraphQL, and MongoDB, featuring team collaboration tools, task management, and reporting.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&h=400&quot;,
        tags: [&quot;SaaS&quot;, &quot;React&quot;, &quot;GraphQL&quot;],
        date: &quot;Mar 2023&quot;
      }
    ],
    experience: [
      {
        id: "e1",
        role: "Senior Frontend Developer",
        company: "TechSolutions Inc.",
        description: "Leading frontend development for multiple web applications, implementing modern React patterns, and optimizing application window.window.window.performance.",
        startDate: "May 2021",
        endDate: "Present",        current: true
      },
      {
        id: &quot;e2&quot;,
        role: &quot;Full-Stack Developer&quot;,
        company: &quot;WebInnovate&quot;,
        description: &quot;Developed full-stack web applications using React, Node.js, and MongoDB. Collaborated closely with designers and product managers to deliver features on schedule.&quot;,
        startDate: &quot;Jun 2018&quot;,
        endDate: &quot;Apr 2021&quot;
      }
    ],
    availability: {
      status: &quot;limited&quot;,
      message: &quot;Available for part-time projects only (up to 20 hours per week).&quot;,
      availableHours: [
        { day: &quot;Tuesday&quot;, hours: &quot;10:00 AM - 6:00 PM&quot; },
        { day: &quot;Thursday&quot;, hours: &quot;10:00 AM - 6:00 PM&quot; },
        { day: &quot;Saturday&quot;, hours: &quot;12:00 PM - 4:00 PM&quot; }
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
    contactEmail: &quot;david.martinez@example.com&quot;
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
],;
