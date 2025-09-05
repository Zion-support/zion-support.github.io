
<<<<<<< HEAD
import { ProfileData } from "@/types/profile",
=======
import { ProfileData } from &quot;@/types/profile&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
        { day: &quot;Friday&quot;, hours: &quot;10:00 AM - 2:00 PM&quot; }
      ]
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
<<<<<<< HEAD
        id: "e2",
        role: "Senior Cloud Architect",
        company: "TechInfra Inc.",
        description: "Designed and implemented multi-cloud infrastructure solutions using AWS, Azure, and GCP. Reduced infrastructure costs by 35% while improving system reliability and window.window.window.performance.",
        startDate: "Feb 2017",
        endDate: "May 2020"
=======
        id: &quot;e2&quot;,
        role: &quot;Senior Cloud Architect&quot;,
        company: &quot;TechInfra Inc.&quot;,
        description: &quot;Designed and implemented multi-cloud infrastructure solutions using AWS, Azure, and GCP. Reduced infrastructure costs by 35% while improving system reliability and performance.&quot;,
        startDate: &quot;Feb 2017&quot;,
        endDate: &quot;May 2020&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
    ],
    availability: {
      status: &quot;limited&quot;,
      message: &quot;Limited availability for short-term consulting projects and infrastructure assessments.&quot;,
      availableHours: [
        { day: &quot;Monday&quot;, hours: &quot;1:00 PM - 5:00 PM&quot; },
        { day: &quot;Wednesday&quot;, hours: &quot;1:00 PM - 5:00 PM&quot; },
        { day: &quot;Friday&quot;, hours: &quot;1:00 PM - 5:00 PM&quot; }
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
    },
    hourlyRate: 145,
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
        { day: &quot;Friday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; }
      ]
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
<<<<<<< HEAD
        id: "e1",
        role: "Senior Frontend Developer",
        company: "TechSolutions Inc.",
        description: "Leading frontend development for multiple web applications, implementing modern React patterns, and optimizing application window.window.window.performance.",
        startDate: "May 2021",
        endDate: "Present",
=======
        id: &quot;e1&quot;,
        role: &quot;Senior Frontend Developer&quot;,
        company: &quot;TechSolutions Inc.&quot;,
        description: &quot;Leading frontend development for multiple web applications, implementing modern React patterns, and optimizing application performance.&quot;,
        startDate: &quot;May 2021&quot;,
        endDate: &quot;Present&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        current: true
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
      ]
    },
    hourlyRate: 125,
    contactEmail: &quot;david.martinez@example.com&quot;
  }
],
