export interface CustomerTicket {
  id: string;
  customerId: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed';
  category: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  customerSatisfaction?: number;
  tags: string[];
  attachments: string[];
  conversationHistory: CustomerMessage[]
}

export interface CustomerMessage {
  id: string;
  ticketId: string;
  senderId: string;
  senderType: 'customer' | 'agent' | 'ai';
  message: string;
  timestamp: Date;
  attachments?: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  intent: string;
  confidence: number
}

export interface CustomerProfile {
  id: string;
  email: string;
  name: string;
  phone?: string;
  company?: string;
  plan: string;
  totalTickets: number;
  resolvedTickets: number;
  averageResolutionTime: number;
  customerSatisfaction: number;
  lastContact: Date;
  preferences: {
    communicationChannel: 'email' | 'chat' | 'phone';
    language: string;
    timezone: string
  };
  tags: string[]
}

export interface AIResponse {
  id: string;
  ticketId: string;
  response: string;
  confidence: number;
  suggestedActions: string[];
  nextSteps: string[];
  requiresHumanReview: boolean;
  generatedAt: Date
}

export interface CustomerServiceMetrics {
  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  averageResolutionTime: number;
  customerSatisfaction: number;
  firstResponseTime: number;
  ticketVolumeByCategory: Record<string, number>,
  agentPerformance: Record<string, {
    ticketsResolved: number;
    averageResolutionTime: number;
    customerSatisfaction: number
  }>
}

export interface CustomerServiceRequest {
  customerId: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  attachments?: string[];
  preferredChannel?: 'email' | 'chat' | 'phone'
}

export interface CustomerServiceResponse {
  ticketId: string;
  status: 'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated';
  aiResponse?: AIResponse;
  estimatedResolutionTime: string;
  nextSteps: string[];
  assignedAgent?: string
}

export class AICustomerServiceService {
  private apiKey: string;
  private baseUrl: string;
  constructor(apiKey: string, baseUrl: string;
