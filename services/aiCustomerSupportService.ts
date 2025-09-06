export interface Attachment {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  uploadedAt: Date;
  uploadedBy: string
}

export interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'technical' | 'billing' | 'feature_request' | 'bug_report' | 'general';
  customerId: string;
  assignedAgentId?: string;
  tags: string[];
  attachments: Attachment[];
  messages: TicketMessage[];
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  firstResponseTime?: number, // in minutes
  resolutionTime?: number, // in hours
}

export interface TicketMessage {
  id: string;
  content: string;
  senderType: 'customer' | 'agent' | 'system';
  senderId: string;
  isInternal: boolean;
  createdAt: Date;
  attachments: Attachment[]
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  company?: string;
  plan: 'free' | 'basic' | 'pro' | 'enterprise';
  totalTickets: number;
  resolvedTickets: number;
  averageResponseTime: number, // in minutes
  satisfactionScore: number, // 1-5
  lastContactDate: Date;
  createdAt: Date
}

export interface SupportAgent {
  id: string;
  name: string;
  email: string;
  role: 'tier1' | 'tier2' | 'tier3' | 'supervisor';
  skills: string[];
  isAvailable: boolean;
  currentTickets: number;
  maxTickets: number;
  performance: AgentPerformance
}

export interface AgentPerformance {
  ticketsResolved: number;
  averageResolutionTime: number, // in hours
  customerSatisfaction: number, // 1-5
  firstResponseTime: number, // in minutes
  escalationRate: number, // percentage
}

export interface ChatbotSession {
  id: string;
  customerId: string;
  startTime: Date;
  endTime?: Date;
  messages: ChatbotMessage[];
  intent: string;
  confidence: number;
  resolved: boolean;
  escalated: boolean;
  satisfaction: number, // 1-5
}

export interface ChatbotMessage {
  id: string;
  content: string;
  sender: 'customer' | 'bot';
  timestamp: Date;
  intent?: string;
  confidence?: number
}

export interface KnowledgeBaseArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  views: number;
  helpful: number;
  notHelpful: number;
  lastUpdated: Date;
  createdBy: string
}

export interface SupportAnalytics {
  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  averageResolutionTime: number;
  averageFirstResponseTime: number;
  customerSatisfaction: number;
  chatbotResolutionRate: number;
  topCategories: Array<{ category: string, count: number }>,
  agentPerformance: Array<{ agentId: string, ticketsResolved: number, satisfaction: number }>
}

export interface AIRecommendation {
  type: 'ticket_prioritization' | 'agent_assignment' | 'knowledge_base' | 'chatbot_improvement';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  confidence: number;
  actionItems: string[]
}

class AICustomerSupportService {
  private tickets: SupportTicket[] = [];
  private customers: Customer[] = [];
  private agents: SupportAgent[] = [];
  private chatbotSessions: ChatbotSession[] = [];
  private knowledgeBase: KnowledgeBaseArticle[] = [];
  private analytics: SupportAnalytics;
  constructor() {
    this.initializeSampleData();
    this.updateAnalytics()
  }

  private initializeSampleData() {
    // Initialize sample customers
    this.customers;
