export interfaceUser {
  id: string;
  name: string;
  email: string;
  role:'admin' | 'user' | 'guest';
}

export interfaceService {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing:{
    starter: number;
    professional: number;
    enterprise: number;
  };
  icon: string;
}

export interfaceAnalytics Event {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interfaceContact Form {
  name: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
}

export interfaceBlog Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
}

export interfaceTestimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}