
import { ProfileData } from &quot;@/types/profile&quot;;

export const MOCK_PROFILES: Record<string, ProfileData> = {
  &quot;service-provider-1&quot;: {
    id: &quot;service-provider-1&quot;,
    name: &quot;TechSolutions Inc.&quot;,
    title: &quot;Enterprise AI Integration Services&quot;,
    avatarUrl: &quot;https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&h=200&quot;,
    coverImageUrl: &quot;https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&h=600&quot;,
    bio: &quot;Specializing in enterprise AI solutions with 10+ years of experience transforming businesses through technology.&quot;,
    location: &quot;San Francisco, CA&quot;,
    rating: 4.9,
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
      ]
    }
  }
};
