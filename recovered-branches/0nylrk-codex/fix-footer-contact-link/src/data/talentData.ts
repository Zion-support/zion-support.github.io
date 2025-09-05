
import { TalentProfile } from "@/types/talent",
// Sample talent profiles with realistic data for the talent directory
export const TALENT_PROFILES: TalentProfile[] = [
  {
    id: &quot;t-001&quot;,
    user_id: &quot;user-001&quot;,
    full_name: &quot;Alexandra Chen&quot;,
    professional_title: &quot;Senior AI Engineer & Machine Learning Expert&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;AI specialist with over 8 years of experience in computer vision and natural language processing. I've designed and implemented machine learning solutions for Fortune 500 companies across healthcare, finance, and retail sectors.&quot;,
    location: &quot;Boston, MA&quot;,
    skills: [&quot;Machine Learning&quot;, &quot;TensorFlow&quot;, &quot;Python&quot;, &quot;Computer Vision&quot;, &quot;NLP&quot;, &quot;Data Science&quot;, &quot;PyTorch&quot;, &quot;Deep Learning&quot;],
    hourly_rate: 150,
    years_experience: 8,
    average_rating: 4.9,
    rating_count: 43,
    availability_type: &quot;full_time&quot;,
    is_verified: true,
    key_projects: [
      {
        title: &quot;Facial Recognition System&quot;,
        description: &quot;Built a state-of-the-art facial recognition system using deep learning for a major retail chain, improving security protocols and reducing losses by 32%.&quot;
      },
      {
        title: &quot;Sentiment Analysis API&quot;,
        description: &quot;Created an API for real-time sentiment analysis of customer feedback, processing over 50,000 reviews daily with 94% accuracy.&quot;
      }
    ]
  },
  {
    id: &quot;t-002&quot;,
    user_id: &quot;user-002&quot;,
    full_name: &quot;Michael Reynolds&quot;,
    professional_title: &quot;DevOps Specialist & Cloud Architect&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;Infrastructure automation expert with 10+ years of experience in containerization, CI/CD pipelines, and cloud-native architectures. I specialize in designing and implementing scalable, resilient, and secure cloud infrastructure on AWS, Azure, and GCP.&quot;,
    location: &quot;Chicago, IL&quot;,
    skills: [&quot;Kubernetes&quot;, &quot;Docker&quot;, &quot;AWS&quot;, &quot;Terraform&quot;, &quot;CI/CD&quot;, &quot;Azure&quot;, &quot;Python&quot;, &quot;Infrastructure as Code&quot;],
    hourly_rate: 135,
    years_experience: 10,
    average_rating: 4.8,
    rating_count: 37,
    availability_type: &quot;part_time&quot;,
    is_verified: true,
    key_projects: [
      {
        title: &quot;Cloud Migration & Modernization&quot;,
        description: &quot;Led migration of a legacy monolithic application to a microservices architecture on AWS, reducing operational costs by 40% and improving deployment frequency.&quot;
      },
      {
        title: &quot;DevOps Automation Pipeline&quot;,
        description: &quot;Implemented comprehensive CI/CD pipelines using GitHub Actions, reducing deployment time from days to minutes and enabling 20+ deployments per day.&quot;
      }
    ]
  },
  {
    id: &quot;t-003&quot;,
    user_id: &quot;user-003&quot;,
    full_name: &quot;Priya Sharma&quot;,
    professional_title: &quot;Data Scientist & Statistical Analyst&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1580489944761-15a19d654955?auto=format&fit=crop&w=200&h=200&quot;, 
    bio: &quot;PhD in Statistics with extensive experience in predictive modeling, data visualization, and business intelligence solutions. My work focuses on extracting actionable insights from complex datasets and developing statistical models that drive business decisions.&quot;,
    location: &quot;Seattle, WA&quot;,
    skills: [&quot;Statistical Analysis&quot;, &quot;Python&quot;, &quot;R&quot;, &quot;Tableau&quot;, &quot;SQL&quot;, &quot;Machine Learning&quot;, &quot;Data Visualization&quot;, &quot;Predictive Modeling&quot;],
    hourly_rate: 145,
    years_experience: 7,
    average_rating: 4.9,
    rating_count: 29,
    availability_type: &quot;project&quot;,
    is_verified: false,
    key_projects: [
      {
        title: &quot;Customer Segmentation Analysis&quot;,
        description: &quot;Conducted advanced customer segmentation for an e-commerce client, leading to targeted marketing campaigns that increased conversion rates by 35%.&quot;
      },
      {
        title: &quot;Sales Forecasting Model&quot;,
        description: &quot;Developed time series forecasting models to predict seasonal sales patterns, resulting in 22% improvement in inventory management.&quot;
      }
    ]
  },
  {
    id: &quot;t-004&quot;,
    user_id: &quot;user-004&quot;,
    full_name: &quot;James Wilson&quot;,
    professional_title: &quot;Cybersecurity Expert & Ethical Hacker&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;CISSP-certified security professional with 10+ years of experience in threat detection, incident response, and security architecture. I specialize in conducting penetration tests, security assessments, and implementing robust security controls across enterprise environments.&quot;,
    location: &quot;Austin, TX&quot;,
    skills: [&quot;Penetration Testing&quot;, &quot;Security Analysis&quot;, &quot;CISSP&quot;, &quot;Risk Management&quot;, &quot;Network Security&quot;, &quot;Incident Response&quot;, &quot;Security Architecture&quot;, &quot;Cloud Security&quot;],
    hourly_rate: 165,
    years_experience: 12,
    average_rating: 4.7,
    rating_count: 31,
    availability_type: &quot;full_time&quot;,
    is_verified: true,
    key_projects: [
      {
        title: &quot;Enterprise Security Assessment&quot;,
        description: &quot;Conducted comprehensive security assessment for a financial institution, identifying and mitigating 24 critical vulnerabilities before they could be exploited.&quot;
      },
      {
        title: &quot;Security Operations Center Design&quot;,
        description: &quot;Designed and implemented a 24/7 security operations center for a healthcare provider, ensuring HIPAA compliance and protection of patient data.&quot;
      }
    ]
  },
  {
    id: &quot;t-005&quot;,
    user_id: &quot;user-005&quot;,
    full_name: &quot;David Martinez&quot;,
    professional_title: &quot;Full-Stack Developer & React Expert&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;Full-stack developer with 7+ years of experience specializing in React, Node.js, and modern JavaScript frameworks. I build scalable, responsive, and user-friendly web applications with a focus on performance optimization and clean code.&quot;,
    location: &quot;Miami, FL&quot;,
    skills: [&quot;React&quot;, &quot;Node.js&quot;, &quot;TypeScript&quot;, &quot;MongoDB&quot;, &quot;GraphQL&quot;, &quot;Next.js&quot;, &quot;Redux&quot;, &quot;AWS&quot;],
    hourly_rate: 125,
    years_experience: 7,
    average_rating: 4.8,
    rating_count: 42,
    availability_type: &quot;part_time&quot;,
    is_verified: false,
    key_projects: [
      {
        title: &quot;E-Commerce Platform&quot;,
        description: &quot;Developed a responsive e-commerce platform using React and Node.js, with features including user authentication, product catalog, shopping cart, and payment integration.&quot;
      },
      {
        title: &quot;Real-Time Analytics Dashboard&quot;,
        description: &quot;Built a real-time analytics dashboard using React, Socket.io, and D3.js, allowing clients to monitor business metrics with live updates and interactive visualizations.&quot;
      }
    ]
  },
  {
    id: &quot;t-006&quot;,
    user_id: &quot;user-006&quot;,
    full_name: &quot;Sarah Johnson&quot;,
    professional_title: &quot;AI Ethics Consultant & Policy Advisor&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;Former tech policy advisor with expertise in AI ethics, governance frameworks, and responsible AI development. I help organizations develop and implement ethical guidelines for AI systems, ensuring fair and transparent use of machine learning technologies.&quot;,
    location: &quot;Washington, DC&quot;,
    skills: [&quot;AI Ethics&quot;, &quot;Policy Development&quot;, &quot;Risk Assessment&quot;, &quot;Governance&quot;, &quot;Responsible AI&quot;, &quot;Compliance&quot;, &quot;Stakeholder Engagement&quot;, &quot;Research&quot;],
    hourly_rate: 180,
    years_experience: 9,
    average_rating: 4.9,
    rating_count: 21,
    availability_type: &quot;project&quot;,
    is_verified: true,
    key_projects: [
      {
        title: &quot;Ethical AI Framework&quot;,
        description: &quot;Developed a comprehensive ethical AI framework for a Fortune 100 company, establishing guidelines for responsible AI development and governance across their global operations.&quot;
      },
      {
        title: &quot;Algorithmic Impact Assessment&quot;,
        description: &quot;Conducted algorithmic impact assessments for public sector AI systems, ensuring fairness, transparency, and compliance with emerging regulatory requirements.&quot;
      }
    ]
  },
  {
    id: &quot;t-007&quot;, 
    user_id: &quot;user-007&quot;,
    full_name: &quot;Daniel Kim&quot;,
    professional_title: &quot;Computer Vision Engineer & Deep Learning Specialist&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;Computer vision engineer with expertise in developing advanced visual recognition systems using deep learning. My work spans object detection, image classification, and video analysis for applications in retail, manufacturing, and autonomous systems.&quot;,
    location: &quot;San Francisco, CA&quot;,
    skills: [&quot;Computer Vision&quot;, &quot;PyTorch&quot;, &quot;TensorFlow&quot;, &quot;Object Detection&quot;, &quot;Image Processing&quot;, &quot;C++&quot;, &quot;CUDA&quot;, &quot;Edge AI&quot;],
    hourly_rate: 155,
    years_experience: 6,
    average_rating: 4.7,
    rating_count: 26,
    availability_type: &quot;full_time&quot;,
    is_verified: true,
    key_projects: [
      {
        title: &quot;Retail Analytics System&quot;,
        description: &quot;Built a computer vision system for retail stores that analyzes customer behavior, tracks inventory, and provides real-time insights, increasing conversion rates by 18%.&quot;
      },
      {
        title: &quot;Manufacturing Defect Detection&quot;,
        description: &quot;Developed an automated visual inspection system that identifies manufacturing defects with 99.7% accuracy, reducing quality control costs by 45%.&quot;
      }
    ]
  },
  {
    id: &quot;t-008&quot;,
    user_id: &quot;user-008&quot;,
    full_name: &quot;Olivia Rodriguez&quot;,
    professional_title: &quot;Natural Language Processing Researcher&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;PhD in Computational Linguistics with 8+ years of experience in NLP research and applications. I specialize in sentiment analysis, text generation, language understanding, and multilingual NLP systems for enterprise applications.&quot;,
    location: &quot;Montreal, Canada&quot;,
    skills: [&quot;Natural Language Processing&quot;, &quot;BERT&quot;, &quot;Transformers&quot;, &quot;GPT&quot;, &quot;Python&quot;, &quot;Hugging Face&quot;, &quot;Language Models&quot;, &quot;Sentiment Analysis&quot;],
    hourly_rate: 160,
    years_experience: 8,
    average_rating: 4.8,
    rating_count: 34,
    availability_type: &quot;part_time&quot;,
    is_verified: true,
    key_projects: [
      {
        title: &quot;Multilingual Customer Service AI&quot;,
        description: &quot;Developed an NLP system supporting 14 languages for customer service applications, reducing response times by 62% and improving customer satisfaction scores.&quot;
      },
      {
        title: &quot;Sentiment Analysis for Social Listening&quot;,
        description: &quot;Created advanced sentiment analysis models for brand monitoring across social media platforms with nuanced emotion detection and competitor analysis.&quot;
      }
    ]
  },
  {
    id: &quot;t-009&quot;,
    user_id: &quot;user-009&quot;,
    full_name: &quot;Robert Zhang&quot;,
    professional_title: &quot;Quantum Machine Learning Researcher&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;Quantum computing researcher with focus on quantum machine learning algorithms and applications. My work bridges the gap between quantum computing theory and practical machine learning implementations for complex optimization problems.&quot;,
    location: &quot;Toronto, Canada&quot;,
    skills: [&quot;Quantum Computing&quot;, &quot;Quantum Machine Learning&quot;, &quot;Qiskit&quot;, &quot;PennyLane&quot;, &quot;Linear Algebra&quot;, &quot;Python&quot;, &quot;TensorFlow Quantum&quot;, &quot;Optimization&quot;],
    hourly_rate: 190,
    years_experience: 5,
    average_rating: 4.9,
    rating_count: 17,
    availability_type: &quot;project&quot;,
    is_verified: false,
    key_projects: [
      {
        title: &quot;Quantum Portfolio Optimization&quot;,
        description: &quot;Implemented quantum algorithms for financial portfolio optimization, achieving a 27% improvement in risk-adjusted returns compared to classical methods.&quot;
      },
      {
        title: &quot;Quantum ML for Drug Discovery&quot;,
        description: &quot;Applied quantum machine learning techniques to accelerate pharmaceutical drug discovery processes, reducing computational time for molecular simulations by 65%.&quot;
      }
    ]
  },
  {
    id: &quot;t-010&quot;,
    user_id: &quot;user-010&quot;,
    full_name: &quot;Emma Taylor&quot;,
    professional_title: &quot;AI Product Manager & Strategy Consultant&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1573497019236-61938a1a2cd2?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;Experienced product manager specializing in AI products and services. I bridge the gap between technical AI capabilities and business value, helping organizations define, develop, and deploy impactful machine learning solutions.&quot;,
    location: &quot;London, UK&quot;,
    skills: [&quot;Product Management&quot;, &quot;AI Strategy&quot;, &quot;User Research&quot;, &quot;Go-to-Market&quot;, &quot;Agile&quot;, &quot;Analytics&quot;, &quot;Stakeholder Management&quot;, &quot;Product Roadmap&quot;],
    hourly_rate: 140,
    years_experience: 9,
    average_rating: 4.8,
    rating_count: 39,
    availability_type: &quot;full_time&quot;,
    is_verified: true,
    key_projects: [
      {
        title: &quot;AI-Powered CRM Enhancement&quot;,
        description: &quot;Led product development for an AI enhancement to a major CRM platform, increasing sales team productivity by 32% and improving lead conversion rates by 28%.&quot;
      },
      {
        title: &quot;Predictive Analytics Platform&quot;,
        description: &quot;Developed product strategy and roadmap for a B2B predictive analytics platform, growing client base by 215% within 18 months of launch.&quot;
      }
    ]
  },
  {
    id: &quot;t-011&quot;,
    user_id: &quot;user-011&quot;,
    full_name: &quot;Marcus Johnson&quot;,
    professional_title: &quot;Reinforcement Learning Engineer&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;Specialist in reinforcement learning with applications in robotics, autonomous systems, and optimization problems. I develop RL algorithms that enable systems to learn optimal behaviors through interaction with their environment.&quot;,
    location: &quot;Berlin, Germany&quot;,
    skills: [&quot;Reinforcement Learning&quot;, &quot;Deep RL&quot;, &quot;PyTorch&quot;, &quot;TensorFlow&quot;, &quot;Robotics&quot;, &quot;Simulation&quot;, &quot;OpenAI Gym&quot;, &quot;Multi-agent Systems&quot;],
    hourly_rate: 150,
    years_experience: 6,
    average_rating: 4.7,
    rating_count: 23,
    availability_type: &quot;part_time&quot;,
    is_verified: true,
    key_projects: [
      {
        title: &quot;Autonomous Warehouse Robots&quot;,
        description: &quot;Designed reinforcement learning algorithms for a fleet of autonomous warehouse robots, improving picking efficiency by 42% and reducing errors by 67%.&quot;
      },
      {
        title: &quot;Energy Optimization System&quot;,
        description: &quot;Developed an RL-based system for optimizing energy consumption in large commercial buildings, reducing energy costs by 29% while maintaining comfort levels.&quot;
      }
    ]
  },
  {
    id: &quot;t-012&quot;,
    user_id: &quot;user-012&quot;,
    full_name: &quot;Sophia Lee&quot;,
    professional_title: &quot;Healthcare AI Specialist & Medical Imaging Expert&quot;,
    profile_picture_url: &quot;https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&quot;,
    bio: &quot;Medical imaging specialist with expertise in applying AI to healthcare challenges. I develop deep learning solutions for medical image analysis, diagnostics, and personalized treatment planning in clinical settings.&quot;,
    location: &quot;Boston, MA&quot;,
    skills: [&quot;Medical Imaging&quot;, &quot;Healthcare AI&quot;, &quot;Deep Learning&quot;, &quot;CNN&quot;, &quot;PyTorch&quot;, &quot;DICOM&quot;, &quot;Clinical Validation&quot;, &quot;Regulatory Compliance&quot;],
    hourly_rate: 170,
    years_experience: 8,
    average_rating: 4.9,
    rating_count: 27,
    availability_type: &quot;project&quot;,
    is_verified: true,
    key_projects: [
      {
        title: &quot;AI-Assisted Radiology Platform&quot;,
        description: &quot;Developed a deep learning system for detecting abnormalities in chest X-rays with 97% sensitivity, reducing radiologist workload by 35% and improving early detection rates.&quot;
      },
      {
        title: &quot;Cancer Treatment Response Prediction&quot;,
        description: &quot;Created ML models that predict patient response to specific cancer treatments based on medical imaging data, improving treatment selection and patient outcomes.&quot;
      }    ]
  }
],
