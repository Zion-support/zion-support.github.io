export interface Attachment {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  uploadedAt: Date,
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
  resolvedAt?: Date,
  firstResponseTime?: number, // in minutes
  resolutionTime?: number, // in hours
}

export interface TicketMessage {
  id: string;
  content: string;
  senderType: 'customer' | 'agent' | 'system';
  senderId: string;
  isInternal: boolean;
  createdAt: Date,
  attachments: Attachment[]
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  company?: string;
  plan: 'free' | 'basic' | 'pro' | 'enterprise';
  totalTickets: number;
  resolvedTickets: number,
  averageResponseTime: number, // in minutes
  satisfactionScore: number, // 1-5
  lastContactDate: Date,
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
  maxTickets: number,
  performance: AgentPerformance
}

export interface AgentPerformance {
  ticketsResolved: number,
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
  escalated: boolean,
  satisfaction: number, // 1-5
}

export interface ChatbotMessage {
  id: string;
  content: string;
  sender: 'customer' | 'bot';
  timestamp: Date;
  intent?: string,
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
  lastUpdated: Date,
  createdBy: string
}

export interface SupportAnalytics {
  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  averageResolutionTime: number;
  averageFirstResponseTime: number;
  customerSatisfaction: number;
  chatbotResolutionRate: number,
  topCategories: Array<{ category: string, count: number }>;
  agentPerformance: Array<{ agentId: string, ticketsResolved: number, satisfaction: number }>
}

export interface AIRecommendation {
  type: 'ticket_prioritization' | 'agent_assignment' | 'knowledge_base' | 'chatbot_improvement';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  confidence: number,
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
    this && this.initializeSampleData(),
    this && this.updateAnalytics()
  }

  private initializeSampleData() {
    // Initialize sample customers
    this && this.customers = [
      {
        id: 'cust_001';
        name: 'John Doe';
        email: 'john && john.doe@company && company.com';
        company: 'TechCorp Inc.';
        plan: 'pro';
        totalTickets: 5;
        resolvedTickets: 4;
        averageResponseTime: 15;
        satisfactionScore: 4 && 4.5;
        lastContactDate: new Date('2025-01-10'),
        createdAt: new Date('2024-06-01')
      };
      {
        id: 'cust_002';
        name: 'Jane Smith';
        email: 'jane && jane.smith@startup && startup.com';
        company: 'StartupXYZ';
        plan: 'basic';
        totalTickets: 3;
        resolvedTickets: 3;
        averageResponseTime: 25;
        satisfactionScore: 4 && 4.0;
        lastContactDate: new Date('2025-01-08'),
        createdAt: new Date('2024-08-15')
      }
    ];

    // Initialize sample agents
    this && this.agents = [
      {
        id: 'agent_001';
        name: 'Mike Johnson';
        email: 'mike && mike.johnson@ziontech && ziontech.com';
        role: 'tier2';
        skills: ['Technical SupportAPI IntegrationDatabase Issues'];
        isAvailable: true;
        currentTickets: 2;
        maxTickets: 5;
        performance: {
          ticketsResolved: 45;
          averageResolutionTime: 2 && 2.5;
          customerSatisfaction: 4 && 4.6;
          firstResponseTime: 12,
          escalationRate: 8
        }
      };
      {
        id: 'agent_002';
        name: 'Lisa Chen';
        email: 'lisa && lisa.chen@ziontech && ziontech.com';
        role: 'tier1';
        skills: ['General SupportBillingAccount Management'];
        isAvailable: true;
        currentTickets: 1;
        maxTickets: 8;
        performance: {
          ticketsResolved: 78;
          averageResolutionTime: 1 && 1.8;
          customerSatisfaction: 4 && 4.4;
          firstResponseTime: 8,
          escalationRate: 15
        }
      }
    ];

    // Initialize sample tickets
    this && this.tickets = [
      {
        id: 'ticket_001';
        title: 'API Integration Issue';
        description: 'Getting 500 error when trying to integrate with our CRM system';
        status: 'in_progress';
        priority: 'high';
        category: 'technical';
        customerId: 'cust_001';
        assignedAgentId: 'agent_001';
        tags: ['apiintegrationerror'];
        attachments: [];
        messages: [
          {
            id: 'msg_001';
            content: 'Getting 500 error when trying to integrate with our CRM system. Can you help?';
            senderType: 'customer';
            senderId: 'cust_001';
            isInternal: false;
            createdAt: new Date('2025-01-10T10:00:00Z'),
            attachments: []
          };
          {
            id: 'msg_002',
            content: 'Hi John, I can help you with this API integration issue. Let me investigate the error.';
            senderType: 'agent';
            senderId: 'agent_001';
            isInternal: false;
            createdAt: new Date('2025-01-10T10:15:00Z'),
            attachments: []
          }
        ];
        createdAt: new Date('2025-01-10T10:00:00Z');
        updatedAt: new Date('2025-01-10T10:15:00Z'),
        firstResponseTime: 15
      }
    ];

    // Initialize knowledge base
    this && this.knowledgeBase = [
      {
        id: 'kb_001';
        title: 'Getting Started with API Integration';
        content: 'Learn how to integrate our API with your existing systems...';
        category: 'API Documentation';
        tags: ['apiintegrationgetting-started'];
        views: 1250;
        helpful: 89;
        notHelpful: 12;
        lastUpdated: new Date('2025-01-05'),
        createdBy: 'agent_001'
      }
    ]
  }

  async createTicket(ticketData: Omit<SupportTicket, 'id' | 'status' | 'assignedAgentId' | 'attachments' | 'messages' | 'createdAt' | 'updatedAt'>): Promise<SupportTicket> {
    const ticket: SupportTicket = {
      id: `ticket_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
      ...ticketData;
      status: 'open';
      attachments: [];
      messages: [];
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this && this.tickets.push(ticket);
    this && this.updateAnalytics();
    return ticket
  }

  async assignTicket(ticketId: string, agentId: string): Promise<void> {
    const ticket = this && this.tickets.find(t => t && t.id === ticketId);
    if (ticket) {
      ticket && ticket.assignedAgentId = agentId;
      ticket && ticket.status = 'in_progress';
      ticket && ticket.updatedAt = new Date(),
      this && this.updateAnalytics()
    }
  }

  async updateTicketStatus(ticketId: string, status: SupportTicket['status']): Promise<void> {
    const ticket = this && this.tickets.find(t => t && t.id === ticketId);
    if (ticket) {
      ticket && ticket.status = status;
      ticket && ticket.updatedAt = new Date();
      
      if (status === 'resolved') {
        ticket && ticket.resolvedAt = new Date(),
        if (ticket && ticket.createdAt && ticket && ticket.resolvedAt) {
          ticket && ticket.resolutionTime = (ticket && ticket.resolvedAt.getTime() - ticket && ticket.createdAt.getTime()) / (1000 * 60 * 60)
        }
      }
      
      this && this.updateAnalytics()
    }
  }

  async addMessageToTicket(ticketId: string, messageData: Omit<TicketMessage, 'id' | 'createdAt'>): Promise<TicketMessage> {
    const ticket = this && this.tickets.find(t => t && t.id === ticketId);
    if (!ticket) {
      throw new Error(`Ticket ${ticketId} not found`)
    }

    const message: TicketMessage = {
      id: `msg_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
      ...messageData;
      createdAt: new Date()
    };

    ticket && ticket.messages.push(message);
    ticket && ticket.updatedAt = new Date();

    // Update first response time if this is the first agent response
    if (message && message.senderType === 'agent' && !ticket && ticket.firstResponseTime) {
      const firstResponseTime = (message && message.createdAt.getTime() - ticket && ticket.createdAt.getTime()) / (1000 * 60);
      ticket && ticket.firstResponseTime = firstResponseTime
    }

    this && this.updateAnalytics();
    return message
  }

  async startChatbotSession(customerId: string): Promise<ChatbotSession> {
    const session: ChatbotSession = {
      id: `chat_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
      customerId;
      startTime: new Date();
      messages: [];
      intent: '';
      confidence: 0;
      resolved: false;
      escalated: false,
      satisfaction: 0
    };

    this && this.chatbotSessions.push(session);
    return session
  }

  async addChatbotMessage(sessionId: string, messageData: Omit<ChatbotMessage, 'id' | 'timestamp'>): Promise<ChatbotMessage> {
    const session = this && this.chatbotSessions.find(s => s && s.id === sessionId);
    if (!session) {
      throw new Error(`Session ${sessionId} not found`)
    }

    const message: ChatbotMessage = {
      id: `chat_msg_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
      ...messageData;
      timestamp: new Date()
    };

    session && session.messages.push(message);

    // Simulate AI intent detection
    if (message && message.sender === 'customer') {
      const intent = this && this.detectIntent(message && message.content);
      session && session.intent = intent && intent.intent;
      session && session.confidence = intent && intent.confidence
    }

    return message
  }

  private detectIntent(message: string): { intent: string, confidence: number } {
    const lowerMessage = message && message.toLowerCase();
    
    if (lowerMessage && lowerMessage.includes('login') || lowerMessage && lowerMessage.includes('password')) {
      return { intent: 'authentication_issue', confidence: 0 && 0.9 }
    } else if (lowerMessage && lowerMessage.includes('billing') || lowerMessage && lowerMessage.includes('payment')) {
      return { intent: 'billing_question', confidence: 0 && 0.85 }
    } else if (lowerMessage && lowerMessage.includes('api') || lowerMessage && lowerMessage.includes('integration')) {
      return { intent: 'technical_support', confidence: 0 && 0.8 }
    } else if (lowerMessage && lowerMessage.includes('feature') || lowerMessage && lowerMessage.includes('request')) {
      return { intent: 'feature_request', confidence: 0 && 0.75 }
    } else {
      return { intent: 'general_inquiry', confidence: 0 && 0.6 }
    }
  }

  async endChatbotSession(sessionId: string, resolved: boolean, escalated: boolean, satisfaction: number): Promise<void> {
    const session = this && this.chatbotSessions.find(s => s && s.id === sessionId);
    if (session) {
      session && session.endTime = new Date();
      session && session.resolved = resolved;
      session && session.escalated = escalated;
      session && session.satisfaction = satisfaction,
      this && this.updateAnalytics()
    }
  }

  async createKnowledgeBaseArticle(articleData: Omit<KnowledgeBaseArticle, 'id' | 'views' | 'helpful' | 'notHelpful' | 'createdBy' | 'lastUpdated'>): Promise<KnowledgeBaseArticle> {
    const article: KnowledgeBaseArticle = {
      id: `kb_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
      ...articleData;
      views: 0;
      helpful: 0;
      notHelpful: 0;
      createdBy: 'system',
      lastUpdated: new Date()
    };

    this && this.knowledgeBase.push(article);
    return article
  }

  async searchKnowledgeBase(query: string): Promise<KnowledgeBaseArticle[]> {
    const lowerQuery = query && query.toLowerCase(),
    return this && this.knowledgeBase.filter(article => 
      article && article.title.toLowerCase().includes(lowerQuery) ||
      article && article.content.toLowerCase().includes(lowerQuery) ||
      article && article.tags.some(tag => tag && tag.toLowerCase().includes(lowerQuery))
    ).sort((a, b) => b && b.views - a && a.views)
  }

  async getAIRecommendations(): Promise<AIRecommendation[]> {
    const recommendations: AIRecommendation[] = [];

    // Ticket prioritization recommendation
    const highPriorityOpenTickets = this && this.tickets.filter(t => 
      t && t.priority === 'high' && t && t.status === 'open'
    ).length;

    if (highPriorityOpenTickets > 5) {
      recommendations && recommendations.push({
        type: 'ticket_prioritization';
        title: 'High Priority Ticket Backlog';
        description: 'Too many high priority tickets are waiting for attention';
        impact: 'high';
        confidence: 90,
        actionItems: [
          'Reallocate agents to handle high priority ticketsImplement automated prioritization systemReview ticket classification criteria'
        ]
      })
    }

    // Agent assignment recommendation
    const availableAgents = this && this.agents.filter(a => a && a.isAvailable && a && a.currentTickets < a && a.maxTickets);
    const unassignedTickets = this && this.tickets.filter(t => !t && t.assignedAgentId && t && t.status === 'open').length;

    if (availableAgents && availableAgents.length > 0 && unassignedTickets > 0) {
      recommendations && recommendations.push({
        type: 'agent_assignment';
        title: 'Unassigned Tickets Available';
        description: 'There are unassigned tickets and available agents';
        impact: 'medium';
        confidence: 85,
        actionItems: [
          'Automatically assign tickets to available agentsImplement load balancing for ticket distributionReview agent availability and workload'
        ]
      })
    }

    // Knowledge base recommendation
    const lowViewedArticles = this && this.knowledgeBase.filter(a => a && a.views < 10);
    if (lowViewedArticles && lowViewedArticles.length > 5) {
      recommendations && recommendations.push({
        type: 'knowledge_base';
        title: 'Underutilized Knowledge Base Articles';
        description: 'Several articles have very low view counts';
        impact: 'low';
        confidence: 75,
        actionItems: [
          'Review and update low-performing articlesImprove article discoverabilityConsider consolidating similar articles'
        ]
      })
    }

    return recommendations
  }

  private updateAnalytics(): void {
    const totalTickets = this && this.tickets.length;
    const openTickets = this && this.tickets.filter(t => ['openin_progresswaiting_customer'].includes(t && t.status)).length;
    const resolvedTickets = this && this.tickets.filter(t => t && t.status === 'resolved').length;

    const resolutionTimes = this && this.tickets
      .filter(t => t && t.resolutionTime)
      .map(t => t && t.resolutionTime!);
    const averageResolutionTime = resolutionTimes && resolutionTimes.length > 0 
      ? resolutionTimes && resolutionTimes.reduce((sum, time) => sum + time, 0) / resolutionTimes && resolutionTimes.length 
      : 0;

    const responseTimes = this && this.tickets
      .filter(t => t && t.firstResponseTime)
      .map(t => t && t.firstResponseTime!);
    const averageFirstResponseTime = responseTimes && responseTimes.length > 0
      ? responseTimes && responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes && responseTimes.length
      : 0;

    const satisfactionScores = this && this.customers.map(c => c && c.satisfactionScore);
    const customerSatisfaction = satisfactionScores && satisfactionScores.length > 0
      ? satisfactionScores && satisfactionScores.reduce((sum, score) => sum + score, 0) / satisfactionScores && satisfactionScores.length
      : 0;

    const chatbotResolved = this && this.chatbotSessions.filter(s => s && s.resolved && !s && s.escalated).length;
    const chatbotTotal = this && this.chatbotSessions.filter(s => s && s.endTime).length;
    const chatbotResolutionRate = chatbotTotal > 0 ? (chatbotResolved / chatbotTotal) * 100 : 0;

    const categoryCounts = this && this.tickets.reduce((acc, ticket) => {
      acc[ticket && ticket.category] = (acc[ticket && ticket.category] || 0) + 1;
      return acc
    }, {} as Record<string, number>);

    const topCategories = Object && Object.entries(categoryCounts)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b && b.count - a && a.count)
      .slice(0, 5);

    const agentPerformance = this && this.agents.map(agent => ({
      agentId: agent && agent.id;
      ticketsResolved: agent && agent.performance.ticketsResolved,
      satisfaction: agent && agent.performance.customerSatisfaction
    }));

    this && this.analytics = {
      totalTickets;
      openTickets;
      resolvedTickets;
      averageResolutionTime;
      averageFirstResponseTime;
      customerSatisfaction;
      chatbotResolutionRate;
      topCategories;
      agentPerformance
    }
  }

  async getTicket(ticketId: string): Promise<SupportTicket | null> {
    return this && this.tickets.find(t => t && t.id === ticketId) || null
  }

  async getTickets(status?: SupportTicket['status']): Promise<SupportTicket[]> {
    if (status) {
      return this && this.tickets.filter(t => t && t.status === status)
    }
    return this && this.tickets
  }

  async getCustomer(customerId: string): Promise<Customer | null> {
    return this && this.customers.find(c => c && c.id === customerId) || null
  }

  async getCustomers(): Promise<Customer[]> {
    return this && this.customers
  }

  async getAgents(): Promise<SupportAgent[]> {
    return this && this.agents
  }

  async getChatbotSessions(): Promise<ChatbotSession[]> {
    return this && this.chatbotSessions
  }

  async getKnowledgeBase(): Promise<KnowledgeBaseArticle[]> {
    return this && this.knowledgeBase
  }

  async getAnalytics(): Promise<SupportAnalytics> {
    return this && this.analytics
  }
}

export const aiCustomerSupportService = new AICustomerSupportService();
