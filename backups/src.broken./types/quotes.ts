export interface QuoteFormData {
  serviceType: string;
  description: string;
  budget: string;
  timeline: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface QuoteRequest {
  id: string;
  serviceType: string;
  description: string;
  budget: string;
  timeline: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}
