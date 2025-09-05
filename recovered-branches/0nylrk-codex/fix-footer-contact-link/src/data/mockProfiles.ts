
import { ProfileData } from "@/types/profile",
export const MOCK_PROFILES: Record<string ProfileData> = {
  "service-provider-1": {
    id: "service-provider-1",
    name: "TechSolutions Inc.",
    title: "Enterprise AI Integration Services",
    avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&h=200",
    coverImageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&h=600",
    bio: "Specializing in enterprise AI solutions with 10+ years of experience transforming businesses through technology.",
    location: "San Francisco, CA",    rating: 4.9,
    reviewCount: 124,
    aiScore: 95,
    profileType: &quot;service&quot; as &quot;service&quot; | &quot;talent&quot;,
    hourlyRate: 200,
    skills: [
      { name: &quot;AI Integration&quot;, level: 5, endorsements: 87 },
      { name: &quot;Machine Learning&quot;, level: 5, endorsements: 76 },
      { name: &quot;Cloud Infrastructure&quot;, level: 4, endorsements: 62 },
      { name: &quot;Enterprise Solutions&quot;, level: 5, endorsements: 93 },
      { name: &quot;Data Engineering&quot;, level: 4, endorsements: 54 },
      { name: &quot;API Development&quot;, level: 4, endorsements: 48 }],
    projects: [
      {
        id: &quot;p1&quot;,
        title: &quot;Healthcare AI Platform&quot;,
        description: &quot;Built an AI-powered system for medical diagnostics, reducing diagnosis time by 60%.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&h=300&quot;,
        tags: [&quot;Healthcare&quot;, &quot;AI&quot;, &quot;Machine Learning&quot;],
        date: &quot;Oct 2023&quot;
      },
      {
        id: &quot;p2&quot;,
        title: &quot;Financial Analytics Suite&quot;,
        description: &quot;Developed predictive models for investment analysis with 92% accuracy.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300&quot;,
        tags: [&quot;Finance&quot;, &quot;Analytics&quot;, &quot;Python&quot;],
        date: &quot;Jun 2023&quot;
      },
      {
        id: &quot;p3&quot;,
        title: &quot;Supply Chain Optimization&quot;,
        description: &quot;Implemented ML algorithms to optimize logistics, reducing costs by 28%.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1566177229896-4b748c0fc9c6?auto=format&fit=crop&w=500&h=300&quot;,
        tags: [&quot;Logistics&quot;, &quot;Optimization&quot;, &quot;AI&quot;],
        date: &quot;Jan 2023&quot;
      }
    ],
    experience: [
      {
        id: &quot;e1&quot;,
        role: &quot;Enterprise AI Solutions Provider&quot;,
        company: &quot;TechSolutions Inc.&quot;,
        description: &quot;Leading a team of 25 engineers developing cutting-edge AI solutions for Fortune 500 companies, specializing in custom ML models and enterprise integration.&quot;,
        startDate: &quot;Jan 2018&quot;,
        current: true
      },
      {
        id: &quot;e2&quot;,
        role: &quot;AI Research Partner&quot;,
        company: &quot;Stanford AI Lab&quot;,
        description: &quot;Collaborated with academic researchers to bring theoretical AI advances to practical business applications.&quot;,
        startDate: &quot;Mar 2016&quot;,
        endDate: &quot;Dec 2017&quot;
      }
    ],
    availability: {
      status: &quot;limited&quot;,
      nextAvailable: &quot;Jun 15, 2024&quot;,
      message: &quot;Currently booked for the next 3 weeks. Available for new projects starting mid-June.&quot;,
      availableHours: [
        { day: &quot;Monday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; },
        { day: &quot;Tuesday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; },
        { day: &quot;Wednesday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; },
        { day: &quot;Thursday&quot;, hours: &quot;9:00 AM - 5:00 PM&quot; },
        { day: &quot;Friday&quot;, hours: &quot;9:00 AM - 3:00 PM&quot; }
      ]
    }
  },
  &quot;talent-1&quot;: {
    id: &quot;talent-1&quot;,
    name: &quot;Alexandra Chen&quot;,
    title: &quot;Senior AI Engineer & Machine Learning Expert&quot;,
    avatarUrl: &quot;https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&quot;,
    coverImageUrl: &quot;https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&h=600&quot;,
    bio: &quot;AI specialist with expertise in computer vision and natural language processing.&quot;,
    location: &quot;Boston, MA&quot;,
    rating: 4.9,
    reviewCount: 43,
    aiScore: 97,
    profileType: &quot;talent&quot; as &quot;service&quot; | &quot;talent&quot;,
    hourlyRate: 150,
    skills: [
      { name: &quot;Machine Learning&quot;, level: 5, endorsements: 38 },
      { name: &quot;TensorFlow&quot;, level: 5, endorsements: 32 },
      { name: &quot;Python&quot;, level: 5, endorsements: 45 },
      { name: &quot;Computer Vision&quot;, level: 4, endorsements: 27 },
      { name: &quot;NLP&quot;, level: 4, endorsements: 21 },
      { name: &quot;Data Science&quot;, level: 5, endorsements: 39 }],
    projects: [
      {
        id: &quot;p1&quot;,
        title: &quot;Facial Recognition System&quot;,
        description: &quot;Built a state-of-the-art facial recognition system using deep learning.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=500&h=300&quot;,
        tags: [&quot;Computer Vision&quot;, &quot;Deep Learning&quot;, &quot;Python&quot;],
        date: &quot;Sep 2023&quot;
      },
      {
        id: &quot;p2&quot;,
        title: &quot;Sentiment Analysis API&quot;,
        description: &quot;Created an API for real-time sentiment analysis of customer feedback.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=500&h=300&quot;,
        tags: [&quot;NLP&quot;, &quot;API&quot;, &quot;Python&quot;],
        date: &quot;May 2023&quot;
      },
      {
        id: &quot;p3&quot;,
        title: &quot;Predictive Maintenance System&quot;,
        description: &quot;Developed ML models to predict equipment failures before they occur.&quot;,
        imageUrl: &quot;https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=500&h=300&quot;,
        tags: [&quot;Predictive Analytics&quot;, &quot;IoT&quot;, &quot;Machine Learning&quot;],
        date: &quot;Dec 2022&quot;
      }
    ],
    experience: [
      {
        id: &quot;e1&quot;,
        role: &quot;Senior AI Engineer&quot;,
        company: &quot;Innovate AI&quot;,
        description: &quot;Leading computer vision projects and mentoring junior engineers in deep learning techniques.&quot;,
        startDate: &quot;Mar 2021&quot;,
        current: true
      },
      {
        id: &quot;e2&quot;,
        role: &quot;Machine Learning Engineer&quot;,
        company: &quot;TechGiant Inc.&quot;,
        description: &quot;Developed and deployed ML models for product recommendation systems.&quot;,
        startDate: &quot;Jun 2018&quot;,
        endDate: &quot;Feb 2021&quot;
      },
      {
        id: &quot;e3&quot;,
        role: &quot;Data Scientist&quot;,
        company: &quot;DataCorp&quot;,
        description: &quot;Analyzed large datasets to extract business insights and develop predictive models.&quot;,
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

export const MOCK_PROFILES: Record<string, ProfileData> = {_"service-provider-1": {
    id: "service-provider-1", _name: "TechSolutions Inc.", _title: "Enterprise AI Integration Services", _avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&h=200", _coverImageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&h=600", _bio: "Specializing in enterprise AI solutions with 10+ years of experience transforming businesses through technology.", _location: "San Francisco, _CA", _rating: 4.9, _reviewCount: 124, _aiScore: 95, _profileType: "service" as "service" | "talent", _hourlyRate: 200, _skills: [
      { name: "AI Integration", _level: 5, _endorsements: 87},
      {_name: "Machine Learning", _level: 5, _endorsements: 76},
      {_name: "Cloud Infrastructure", _level: 4, _endorsements: 62},
      {_name: "Enterprise Solutions", _level: 5, _endorsements: 93},
      {_name: "Data Engineering", _level: 4, _endorsements: 54},
      {_name: "API Development", _level: 4, _endorsements: 48}],
    projects: [
      {_id: "p1", _title: "Healthcare AI Platform", _description: "Built an AI-powered system for medical diagnostics, _reducing diagnosis time by 60%.", _imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&h=300", _tags: ["Healthcare", _"AI", _"Machine Learning"], _date: "Oct 2023"},
      {_id: "p2", _title: "Financial Analytics Suite", _description: "Developed predictive models for investment analysis with 92% accuracy.", _imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&h=300", _tags: ["Finance", _"Analytics", _"Python"], _date: "Jun 2023"},
      {_id: "p3", _title: "Supply Chain Optimization", _description: "Implemented ML algorithms to optimize logistics, _reducing costs by 28%.", _imageUrl: "https://images.unsplash.com/photo-1566177229896-4b748c0fc9c6?auto=format&fit=crop&w=500&h=300", _tags: ["Logistics", _"Optimization", _"AI"], _date: "Jan 2023"}
    ],
    experience: [
      {_id: "e1", _role: "Enterprise AI Solutions Provider", _company: "TechSolutions Inc.", _description: "Leading a team of 25 engineers developing cutting-edge AI solutions for Fortune 500 companies, _specializing in custom ML models and enterprise integration.", _startDate: "Jan 2018", _current: true},
      {_id: "e2", _role: "AI Research Partner", _company: "Stanford AI Lab", _description: "Collaborated with academic researchers to bring theoretical AI advances to practical business applications.", _startDate: "Mar 2016", _endDate: "Dec 2017"}
    ],
    availability: {_status: "limited", _nextAvailable: "Jun 15, _2024", _message: "Currently booked for the next 3 weeks. Available for new projects starting mid-June.", _availableHours: [
        { day: "Monday", _hours: "9:00 AM - 5:00 PM"},
        {_day: "Tuesday", _hours: "9:00 AM - 5:00 PM"},
        {_day: "Wednesday", _hours: "9:00 AM - 5:00 PM"},
        {_day: "Thursday", _hours: "9:00 AM - 5:00 PM"},
        {_day: "Friday", _hours: "9:00 AM - 3:00 PM"}
      ]
    }
  },
  "talent-1": {_id: "talent-1", _name: "Alexandra Chen", _title: "Senior AI Engineer & Machine Learning Expert", _avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200", _coverImageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&h=600", _bio: "AI specialist with expertise in computer vision and natural language processing.", _location: "Boston, _MA", _rating: 4.9, _reviewCount: 43, _aiScore: 97, _profileType: "talent" as "service" | "talent", _hourlyRate: 150, _skills: [
      { name: "Machine Learning", _level: 5, _endorsements: 38},
      {_name: "TensorFlow", _level: 5, _endorsements: 32},
      {_name: "Python", _level: 5, _endorsements: 45},
      {_name: "Computer Vision", _level: 4, _endorsements: 27},
      {_name: "NLP", _level: 4, _endorsements: 21},
      {_name: "Data Science", _level: 5, _endorsements: 39}],
    projects: [
      {_id: "p1", _title: "Facial Recognition System", _description: "Built a state-of-the-art facial recognition system using deep learning.", _imageUrl: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=500&h=300", _tags: ["Computer Vision", _"Deep Learning", _"Python"], _date: "Sep 2023"},
      {_id: "p2", _title: "Sentiment Analysis API", _description: "Created an API for real-time sentiment analysis of customer feedback.", _imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=500&h=300", _tags: ["NLP", _"API", _"Python"], _date: "May 2023"},
      {_id: "p3", _title: "Predictive Maintenance System", _description: "Developed ML models to predict equipment failures before they occur.", _imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=500&h=300", _tags: ["Predictive Analytics", _"IoT", _"Machine Learning"], _date: "Dec 2022"}
    ],
    experience: [
      {_id: "e1", _role: "Senior AI Engineer", _company: "Innovate AI", _description: "Leading computer vision projects and mentoring junior engineers in deep learning techniques.", _startDate: "Mar 2021", _current: true},
      {_id: "e2", _role: "Machine Learning Engineer", _company: "TechGiant Inc.", _description: "Developed and deployed ML models for product recommendation systems.", _startDate: "Jun 2018", _endDate: "Feb 2021"},
      {_id: "e3", _role: "Data Scientist", _company: "DataCorp", _description: "Analyzed large datasets to extract business insights and develop predictive models.", _startDate: "Aug 2016", _endDate: "May 2018"}
    ],
    availability: {_status: "available", _message: "Open to new projects starting immediately. Prefer projects with 3+ month engagement.", _availableHours: [
        { day: "Monday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Tuesday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Wednesday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Thursday", _hours: "10:00 AM - 6:00 PM"},
        {_day: "Friday", _hours: "10:00 AM - 2:00 PM"}
      ]
    }
  }
},
