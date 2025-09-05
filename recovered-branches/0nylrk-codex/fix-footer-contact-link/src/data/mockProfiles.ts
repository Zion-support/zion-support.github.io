

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
};
