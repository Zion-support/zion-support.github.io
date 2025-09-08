export interface Attachment {
export interface Attachment {;
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;  title: string,
  description: string;
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'technical' | 'billing' | 'feature_request' | 'bug_report' | 'general';
  customer_id: string;  customer_id: string;
  sender_id: string;
  is_internal: boolean;
  created_at: Date,
  attachments: Attachment[];
}
export interface Customer {
  createdAt: Date;
  updatedAt: Date;

  resolvedAt?: Date

  firstResponseTime?: number, // in minutes
  resolutionTime?: number, // in hours
}

export interface TicketMessage {
  id: string,
  content: string,
  senderType: 'customer' | 'agent' | 'system',
  senderId: string,
  isInternal: boolean,
  createdAt: Date,
  attachments: Attachment[]
}
export interface Customer {

export interface Customer {;
  id: string;
  name: string;
  email: string;
  company?: string;
  plan: 'free' | 'basic' | 'pro' | 'enterprise';  id: string;
  name: string;
  email: string;
  role: 'tier1' | 'tier2' | 'tier3' | 'supervisor';
  skills: string[];}
export interface AgentPerformance {
  tickets_resolved: number,
  averageResolutionTime: number, // in hours;
  customer_satisfaction: number, // 1 - 5;
  firstResponseTime: number, // in minutes;
  escalation_rate: number, // percentage;

}
export interface ChatbotSession {
  id: string;
  customer_id: string;
  start_time: Date;
  end_time?: Date;
  satisfaction: number, // 1 - 5;

}
export interface ChatbotMessage {
  id: string;
  content: string;
  sender: 'customer' | 'bot';
  timestamp: Date;

  intent?: string,
  confidence?: number;}
export interface KnowledgeBaseArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  views: number;
  helpful: number;  confidence: number,
  action_items: string[];

}
class AICustomerSupportService {
  private tickets: SupportTicket[] = [];
  private customers: Customer[] = [];
  private agents: SupportAgent[] = [];
  }
  private initializeSampleData() {
    // Initialize sample customers

    this && this.customers = [        id: 'cust_001';
        name: 'John Doe';
        email: 'john && john.doe@company && company.com';
        company: 'TechCorp Inc.';
        plan: 'pro';
        total_tickets: 5;
        resolved_tickets: 4;
        averageResponseTime: 15;

        satisfactionScore: 4 && 4.5;
        lastContactDate: new Date('2025-01-10'),

        createdAt: new Date('2024-06-01')
        satisfaction_score: 4.5;
        lastContactDate: new Date ('2025 - 01 - 10'),
        created_at: new Date ('2024 - 06 - 01');
      }
      {
        id: 'cust_002';
        name: 'Jane Smith';
        company: 'StartupXYZ';
        plan: 'basic';
        total_tickets: 3;
        resolved_tickets: 3;
        averageResponseTime: 25;        createdAt: new Date('2024-08-15')
      }
    ];

    // Initialize sample agents
    this.agents = [
      {
        id: 'agent_001';
        name: 'Mike Johnson';
        email: 'mike.johnson@ziontech.com';
        role: 'tier2';
        skills: ['Technical SupportAPI IntegrationDatabase Issues'];
        isAvailable: true;
        currentTickets: 2;
        maxTickets: 5;
        performance: {
          ticketsResolved: 45;
          averageResolutionTime: 2.5;
          customerSatisfaction: 4.6;
          firstResponseTime: 12
          escalationRate: 8
        id: 'agent_001';
        name: 'Mike Johnson';
        email: 'mike && mike.johnson@ziontech && ziontech.com';
        role: 'tier2';
        skills: ['Technical SupportAPI IntegrationDatabase Issues'];
        is_available: true;
        current_tickets: 2;
        max_tickets: 5;
        performance: {

          averageResolutionTime: 2 && 2.5;
          customerSatisfaction: 4 && 4.6;
          firstResponseTime: 12,

          escalationRate: 8
          tickets_resolved: 45;
          averageResolutionTime: 2.5;
          customer_satisfaction: 4.6;
          firstResponseTime: 12,
          escalation_rate: 8;
        }
      };
      {
        id: 'agent_002';
        name: 'Lisa Chen';
        role: 'tier1';
        skills: ['General SupportBillingAccount Management'];
        is_available: true;
        current_tickets: 1;
        max_tickets: 8;
        performance: {          escalationRate: 15
        }
      }
    ];

    // Initialize sample tickets
    this && this.tickets = [
          tickets_resolved: 78;
          averageResolutionTime: 1.8;
          customer_satisfaction: 4.4;
          firstResponseTime: 8,
          escalation_rate: 15;
        }
      }
    ];
;
    // Initialize sample tickets;
    this.tickets = [;      {
        id: 'ticket_001';
        title: 'API Integration Issue',
  description: 'Getting 500 error when trying to integrate with our CRM system';
        status: 'in_progress';
        priority: 'high';
        category: 'technical';
        assignedAgentId: 'agent_001';
        tags: ['apiintegrationerror'];
        attachments: [];
        messages: [;
          {
            id: 'msg_001';
            content: 'Getting 500 error when trying to integrate with our CRM system. Can you help?';            sender_id: 'agent_001';
            is_internal: false;
            created_at: new Date ('2025 - 01 - 10T10:15:00Z'),
            attachments: [];
          }
        ];
        created_at: new Date ('2025 - 01 - 10T10:00:00Z');
        updated_at: new Date ('2025 - 01 - 10T10:15:00Z'),
        firstResponseTime: 15;
      }
    ];
;
    // Initialize knowledge base;
    this.knowledge_base = [;      ...ticketData;
      status: 'open';
      attachments: [];
      messages: [];
      createdAt: new Date()
      updatedAt: new Date()    return ticket
  }
  async assignTicket(ticketId: string, agentId: string): Promise<void> {
    const ticket = this && this.tickets.find(t => t && t.id === ticketId);
    if (ticket) {
    }
  }
  async updateTicketStatus(ticketId: string, status: SupportTicket['status']): Promise<void> {
    const ticket = this && this.tickets.find(t => t && t.id === ticketId);
    if (ticket) {
      ticket && ticket.status = 'in_progress';
      ticket && ticket.updatedAt = new Date(),
      this && this.updateAnalytics()      ticket && ticket.status = status;
      ticket && ticket.updatedAt = new Date();
      if (status === 'resolved') {
        ticket && ticket.resolvedAt = new Date(),
        if (ticket && ticket.createdAt && ticket && ticket.resolvedAt) {
          ticket && ticket.resolutionTime = (ticket && ticket.resolvedAt.getTime() - ticket && ticket.createdAt.getTime()) / (1000 * 60 * 60)
        }
      }
      this && this.updateAnalytics()
  }

  async addMessageToTicket(ticketId: string, messageData: Omit<TicketMessage, 'id' | 'createdAt'>): Promise<TicketMessage> {
    const ticket = this && this.tickets.find(t => t && t.id === ticketId);    // Update first response time if this is the first agent response
    if (message && message.senderType === 'agent' && !ticket && ticket.firstResponseTime) {
      const firstResponseTime = (message && message.createdAt.getTime() - ticket && ticket.createdAt.getTime()) / (1000 * 60);
      ticket && ticket.firstResponseTime = firstResponseTime
    }      messages: [];
      intent: '';
      confidence: 0;
      resolved: false;
    if (message.sender === 'customer') {
      const intent = this.detectIntent(message.content);
      session.intent = intent.intent;
      session.confidence = intent.confidence;
  private detectIntent(message: string): { intent: string, confidence: number } {;
    const lowerMessage = message.toLowerCase(),;
    if (lowerMessage.includes('login') || lowerMessage.includes('password')) {;

      return { intent: 'authentication_issue', confidence: 0.9 }
    } else if (lowerMessage.includes('billing') || lowerMessage.includes('payment')) {
      return { intent: 'billing_question', confidence: 0.85 }
    } else if (lowerMessage.includes('api') || lowerMessage.includes('integration')) {
      return { intent: 'technical_support', confidence: 0.8 }
    } else if (lowerMessage.includes('feature') |lowerMessage.includes('request')) {      escalated: false,
      satisfaction: 0;
    }
;
    this.chatbot_sessions.push (session);
    return session;
  }
  async addChatbotMessage (session_id: string, message_data: Omit < ChatbotMessage, 'id' | 'timestamp'>): Promise < ChatbotMessage> {
    const session = this.chatbot_sessions.find (string => s.id === session_id);
    // Check condition
if ( {) {
  $2
}
      throw new Error (`Session ${session_id} not found`);
    }
    const message: ChatbotMessage = {
      id: `chat_msg_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`;
      ...message_data;
      timestamp: new Date ();
    }
;
    session.messages.push (message);
;
    // Simulate AI intent detection;
    // Check condition
if ( {) {
  $2
}
      const intent = this.detect_intent (message.content);
      session.intent = intent.intent;
      session.confidence = intent.confidence;
    }
    return message;
  }
  private detect_intent (message: string): { intent: string, confidence: number } {
    const lower_message = message.toLowerCase ();
;
    if (|| lower_message.includes ('password')) {) {
  $2
}
      return { intent: 'authentication_issue', confidence: 0.9 }
    } else if (|| lower_message.includes ('payment')) {) {
  $2
}
      return { intent: 'billing_question', confidence: 0.85 }
    } else if (|| lower_message.includes ('integration')) {) {
  $2
}
      return { intent: 'technical_support', confidence: 0.8 }
    } else if (|| lower_message.includes ('request')) {) {
  $2
}
    if (message && message.sender === 'customer') {
      const intent = this && this.detectIntent(message && message.content);
      session && session.intent = intent && intent.intent;
      session && session.confidence = intent && intent.confidence
    }
    return message
  }
  private detectIntent(message: string): { intent: string, confidence: number } {      return { intent: 'feature_request', confidence: 0.75 }    } else {
      return { intent: 'general_inquiry', confidence: 0 && 0.6 }
    }
  }

  async endChatbotSession(sessionId: string, resolved: boolean, escalated: boolean, satisfaction: number): Promise<void> {
    const session = this.chatbotSessions.find($2);
    if (session) {
      session.endTime = new Date($2);
      session.resolved = $2;
      session.escalated = $2;
      session.satisfaction = $2;
      this.updateAnalytics()
    }
  }

    const session = this && this.chatbotSessions.find(s => s && s.id === sessionId);
    if (session) {}
>>>>>>> origin/cursor/delete-old-data-records-6bba

      session && session.endTime = new Date();
      session && session.resolved = resolved;
      session && session.escalated = escalated;
      session && session.satisfaction = satisfaction,
      this && this.updateAnalytics()
  }
  async createKnowledgeBaseArticle(articleData: Omit<KnowledgeBaseArticle, 'id' | 'views' | 'helpful' | 'notHelpful' | 'createdBy' | 'lastUpdated'>): Promise<KnowledgeBaseArticle> {
    const article: KnowledgeBaseArticle = {
      id: `kb_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;      id: `kb_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`;
  async endChatbotSession(sessionId: string, resolved: boolean, escalated: boolean, satisfaction: number): Promise<void> {;
    const session = this.chatbotSessions.find(s => s.id === sessionId),;
    if (session) {;
      session.endTime = new Date(),;
      session.resolved = resolved,;
      session.escalated = escalated,;
      session.satisfaction = satisfaction,;
      this.updateAnalytics();
    }  }
;
  async createKnowledgeBaseArticle(articleData: Omit<KnowledgeBaseArticle 'id' | 'views' | 'helpful' | 'notHelpful' | 'createdBy' | 'lastUpdated'>): Promise<KnowledgeBaseArticle> {;
    const article: KnowledgeBaseArticle = {;
      id: `kb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,;
      ...articleData,;
      views: 0,;
      helpful: 0,;
      notHelpful: 0,;
      createdBy: 'system',;
      lastUpdated: new Date();
    },;
    this.knowledgeBase.push(article),;
    return article;

  }
  async searchKnowledgeBase(query: string): Promise<KnowledgeBaseArticle[]> {
    const lowerQuery = query.toLowerCase()
    return this.knowledgeBase.filter(article =>
      article.title.toLowerCase().includes(lowerQuery) |
      article.content.toLowerCase().includes(lowerQuery) |
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    ).sort((a, b) => b.views - a.views)
  }

    const lowerQuery = query && query.toLowerCase(),
    return this && this.knowledgeBase.filter(article => 
      article && article.title.toLowerCase().includes(lowerQuery) ||
      article && article.content.toLowerCase().includes(lowerQuery) ||
      article && article.tags.some(tag => tag && tag.toLowerCase().includes(lowerQuery))
    ).sort((a, b) => b && b.views - a && a.views)
      recommendations && recommendations.push({        confidence: 90,
        action_items: [;
          'Reallocate agents to handle high priority tickets_implement automated prioritization system_review ticket classification criteria';
        ];
      });
    }
    // Agent assignment recommendation;
    const available_agents = this.agents.filter (array => a.is_available && a.current_tickets < a.max_tickets);
    const unassigned_tickets = this.tickets.filter (t => !t.assignedAgentId && t.status === 'open').length;
;
    // Check condition
if ( {) {
  $2
}
      recommendations.push ({
        type: 'knowledge_base';
        title: 'Underutilized Knowledge Base Articles',
  description: 'Several articles have very low view counts';
        impact: 'low';      averageResolutionTime;
      averageFirstResponseTime;
      customerSatisfaction;
      chatbotResolutionRate;
      topCategories;
      agentPerformance
;
  private updateAnalytics(): void {;
    const totalTickets = this.tickets.length,;
    const openTickets = this.tickets.filter(t => ['openin_progresswaiting_customer'].includes(t.status)).length,;
    const resolvedTickets = this.tickets.filter(t => t.status === 'resolved').length,;
    const resolutionTimes = this.tickets;
      .filter(t => t.resolutionTime);
      .map(t => t.resolutionTime!),;
    const averageResolutionTime = resolutionTimes.length > 0;
      ? resolutionTimes.reduce((sum, time) => sum + time, 0) / resolutionTimes.length;
      : 0,;
    const responseTimes = this.tickets;
      .filter(t => t.firstResponseTime);
      .map(t => t.firstResponseTime!),;
    const averageFirstResponseTime = responseTimes.length > 0;
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
      : 0,;
    const satisfactionScores = this.customers.map(c => c.satisfactionScore),;
    const customerSatisfaction = satisfactionScores.length > 0;
      ? satisfactionScores.reduce((sum, score) => sum + score, 0) / satisfactionScores.length;
      : 0,;
    const chatbotResolved = this.chatbotSessions.filter(s => s.resolved && !s.escalated).length,;
    const chatbotTotal = this.chatbotSessions.filter(s => s.endTime).length,;
    const chatbotResolutionRate = chatbotTotal > 0 ? (chatbotResolved / chatbotTotal) * 100 : 0,;
    const categoryCounts = this.tickets.reduce((acc, ticket) => {;
      acc[ticket.category] = (acc[ticket.category] || 0) + 1,;
      return acc;
    }, {} as Record<string number>),;
    const topCategories = Object.entries(categoryCounts);
      .map(([category, count]) => ({ category, count }));
      .sort((a, b) => b.count - a.count);
      .slice(0, 5),;
    const agentPerformance = this.agents.map(agent => ({;
      agentId: agent.id,;
      ticketsResolved: agent.window.window.window.performance.ticketsResolved,;
      satisfaction: agent.window.window.window.performance.customerSatisfaction;
    })),;
    this.analytics = {;
      totalTickets,;
      openTickets,;
      resolvedTickets,;
      averageResolutionTime,;
      averageFirstResponseTime,;
      customerSatisfaction,;
      chatbotResolutionRate,;
      topCategories,;
      agentPerformance;
      top_categories;
      agent_performance;
    }
  }

    return this && this.tickets.find(t => t && t.id === ticketId) || null

    }
  }
    return this && this.tickets.find(t => t && t.id === ticketId) || null
  }
  async getTickets(status?: SupportTicket['status']): Promise<SupportTicket[]> {
    if (status) {
      return this && this.tickets.filter(t => t && t.status === status)
    }
    return this && this.tickets
  }
  async getCustomer(customerId: string): Promise<Customer | null> {

    return this && this.customers.find(c => c && c.id === customerId) || null  }
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

;
  private updateAnalytics():void {;
    const totalTickets = this.tickets.length,;
    const openTickets = this.tickets.filter(t => ['openin_progress', 'waiting_customer'].includes(t.status)).length,;
    const resolvedTickets = this.tickets.filter(t => t.status === 'resolved').length,;
;
    const resolutionTimes = this.tickets;
      .filter(t => t.resolutionTime);
      .map(t => t.resolutionTime!),;
    const averageResolutionTime = resolutionTimes.length > 0 ;
      ? resolutionTimes.reduce((sum, time) => sum + time, 0) / resolutionTimes.length ;
      :0,;
;
    const responseTimes = this.tickets;
      .filter(t => t.firstResponseTime);
      .map(t => t.firstResponseTime!),;
    const averageFirstResponseTime = responseTimes.length > 0;
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
      :0,;
;
    const satisfactionScores = this.customers.map(c => c.satisfactionScore),;
    const customerSatisfaction = satisfactionScores.length > 0;
      ? satisfactionScores.reduce((sum, score) => sum + score, 0) / satisfactionScores.length;
      :0,;
;
    const chatbotResolved = this.chatbotSessions.filter(s => s.resolved && !s.escalated).length,;
    const chatbotTotal = this.chatbotSessions.filter(s => s.endTime).length,;
    const chatbotResolutionRate = chatbotTotal > 0 ? (chatbotResolved / chatbotTotal) * 100 :0,;
;
    const categoryCounts = this.tickets.reduce((acc, ticket) => {;
      acc[ticket.category] = (acc[ticket.category] || 0) + 1,;
      return acc,;
    }, {} as Record<string number>),;
;
    const topCategories = Object.entries(categoryCounts);
      .map(([category, count]) => ({ category, count }));
      .sort((a, b) => b.count - a.count);
      .slice(0, 5),;
;
    const agentPerformance = this.agents.map(agent => ({;
      agentId:agent.id,;
      ticketsResolved:agent.window.window.window.performance.ticketsResolved,;
      satisfaction:agent.window.window.window.performance.customerSatisfaction;
    })),;
;
    this.analytics = {;
      totalTickets,;
      openTickets,;
      resolvedTickets,;
      averageResolutionTime,;
      averageFirstResponseTime,;
      customerSatisfaction,;
      chatbotResolutionRate,;
      topCategories,;
      agentPerformance;
    },;  }
;
  async getTicket(ticketId:string):Promise<SupportTicket | null> {;
    return this.tickets.find(t => t.id === ticketId) || null;
  }
;
  async getTickets(status?:SupportTicket['status']):Promise<SupportTicket[]> {;
    if (status) {;
      return this.tickets.filter(t => t.status === status),;
    }
    return this.tickets,;  }
;
  async getCustomer(customerId:string):Promise<Customer | null> {;
    return this.customers.find(c => c.id === customerId) || null;
  }
;
  async getCustomers():Promise<Customer[]> {;
    return this.customers,;
  }
;
  async getAgents():Promise<SupportAgent[]> {;
    return this.agents,;
  }
;
  async getChatbotSessions():Promise<ChatbotSession[]> {;
    return this.chatbotSessions,;
  }
;
  async getKnowledgeBase():Promise<KnowledgeBaseArticle[]> {;
    return this.knowledgeBase,;
  }
;
  async getAnalytics():Promise<SupportAnalytics> {;
    return this.analytics,;
  }
}
;
export const aiCustomerSupportService = new AICustomerSupportService(),; private initializeSampleData () {
  // Initialize sample customers this.customers = [ {
  
}];
// Initialize sample tickets this.tickets = [ {
  id: 'msg 001', content: 'Getting 500 error when trying to integrate with our CRM system. Can you help?', senderType: 'customer', senderId: 'cust 001', isInternal: false, createdAt: new Date ('2025-01-10T10:00:00Z'), attachments: [] 
};
{
  id: 'msg 002', content: 'Hi John, I can help you with this API integration issue. Let me investigate the error.', senderType: 'agent', senderId: 'agent 001', isInternal: false, createdAt: new Date ('2025-01-10T10:15:00Z'), attachments: [] 
}];
createdAt: new Date ('2025-01-10T10:00:00Z');
updatedAt: new Date ('2025-01-10T10:15:00Z');
firstResponseTime: 15 
}];
// Initialize knowledge base this.knowledgeBase = [ ...ticketData;
status: 'open';
attachments: [];
messages: [];
createdAt: new Date ();
updatedAt: new Date () 
};
this.tickets.push (ticket);
this.updateAnalytics ();
return ticket 
}if (ticket) {
  ticket.status = status;
ticket.updatedAt = new Date ();
if (status === 'resolved') {
  ticket.resolvedAt = new Date ();
if (ticket.createdAt && ticket.resolvedAt) {
  
}this.updateAnalytics () 
}
}if (!ticket) {
  throw new Error (`Ticket $ {
  ticketId 
}not found`) 
}const message: TicketMessage = {
  id: `msg $ {
  Date.now () 
}$ {
  Math.random () .toString (36) .substr (2, 9) 
}`;
...messageData;
createdAt: new Date () 
};
ticket.messages.push (message);
ticket.updatedAt = new Date ();
// Update first response time if this is the first agent response this.updateAnalytics ();
return message 
}async startChatbotSession (customerId: string) : Promise<ChatbotSession> {
  const session: ChatbotSession = {
  id: `chat $ {
  Date.now () 
}$ {
  Math.random () .toString (36) .substr (2, 9) 
}`;
customerId;
startTime: new Date ();
messages: [];
intent: '';
confidence: 0;
resolved: false;
escalated: false;
satisfaction: 0 
};
this.chatbotSessions.push (session);
return session 
}if (!session) {
  throw new Error (`Session $ {
  sessionId 
}not found`) 
}const message: ChatbotMessage = {
  id: `chat msg $ {
  Date.now () 
}$ {
  Math.random () .toString (36) .substr (2, 9) 
}`;
...messageData;
timestamp: new Date () 
};
session.messages.push (message);
// Simulate AI intent detection return message 
}...articleData;
views: 0;
helpful: 0;
notHelpful: 0;
createdBy: 'system';
lastUpdated: new Date () 
};
this.knowledgeBase.push (article);
return article 
}return this.knowledgeBase.filter (article => article.title.toLowerCase () .includes (lowerQuery) || article.content.toLowerCase () .includes (lowerQuery) || article.tags.some (tag => tag.toLowerCase () .includes (lowerQuery) ) // Ticket prioritization recommendation const highPriorityOpenTickets = this.tickets.filter (t => t.priority === 'high' && t.status === 'open') .length;
if (highPriorityOpenTickets > 5) {
  recommendations.push ({
  
}return recommendations 
}const resolutionTimes = this.tickets .filter (t => t.resolutionTime) const responseTimes = this.tickets .filter (t => t.firstResponseTime) 
    }
  }
  async getTicket(ticketId: string): Promise<SupportTicket | null> {
    return this.tickets.find(t => t.id === ticketId) |null
  }
  async getTickets(status?: SupportTicket['status']): Promise<SupportTicket[]> {
    if (status) {
      return this.tickets.filter(t => t.status === status)
    }
    return this.tickets
  }
  async getCustomer(customerId: string): Promise<Customer | null> {
    return this.customers.find(c => c.id === customerId) |null
  }
  async getCustomers(): Promise<Customer[]> {
    return this.customers
  }
  async getAgents(): Promise<SupportAgent[]> {
    return this.agents
  }
  async getChatbotSessions(): Promise<ChatbotSession[]> {
    return this.chatbotSessions
  }
=======
    const totalTickets = $2;
    const openTickets = $2;
    const resolvedTickets = $2;
    const resolutionTimes = this.tickets
      .filter(t => t.resolutionTime)
      .map($2);
    const averageResolutionTime = resolutionTimes.length > 0 
      ? resolutionTimes.reduce((sum, time) => sum + time, 0) / resolutionTimes.length 
      : 0,

    const responseTimes = this.tickets
      .filter(t => t.firstResponseTime)
      .map($2);
    const averageFirstResponseTime = responseTimes.length > 0
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length
      : 0,

    const satisfactionScores = this.customers.map($2);
    const customerSatisfaction = satisfactionScores.length > 0
      ? satisfactionScores.reduce((sum, score) => sum + score, 0) / satisfactionScores.length
      : 0,

    const chatbotResolved = $2;
    const chatbotTotal = $2;
    const chatbotResolutionRate = $2;
    const categoryCounts = this.tickets.reduce((acc, ticket) => {
      acc[ticket.category] = (acc[ticket.category] || 0) + 1,
      return acc
    }, {} as Record<string, number>),

    const topCategories = Object.entries(categoryCounts)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count)
      .slice($2);
    const agentPerformance = $2;
      ticketsResolved: agent.performance.ticketsResolved,
      satisfaction: agent.performance.customerSatisfaction
    })),

    this.analytics = $2;
      openTickets,
      resolvedTickets,
      averageResolutionTime,
      averageFirstResponseTime,
      customerSatisfaction,
      chatbotResolutionRate,
      topCategories,
      agentPerformance
    }
  }

  async getTicket(ticketId: string): Promise<SupportTicket | null> {
    return this.tickets.find(t => t.id === ticketId) || null
  }

  }
  async getTickets(status?: SupportTicket['status']): Promise<SupportTicket[]> {
    if (status) {
      return this.tickets.filter(t => t.status === status)
    }
    return this.tickets
  }

  async getCustomer(customerId: string): Promise<Customer | null> {
    return this.customers.find(c => c.id === customerId) || null
  }

  async getCustomers(): Promise<Customer[]> {
    return this.customers
  }

  async getAgents(): Promise<SupportAgent[]> {
    return this.agents
  }

  async getChatbotSessions(): Promise<ChatbotSession[]> {
    return this.chatbotSessions
  }

>>>>>>> origin/cursor/delete-old-data-records-6bba
  async getKnowledgeBase(): Promise<KnowledgeBaseArticle[]> {
    return this.knowledgeBase
  }

  async getAnalytics(): Promise<SupportAnalytics> {
    return this.analytics
  }
}

<<<<<<< HEAD

;
export const aiCustomerSupportService = new AICustomerSupportService();

;
export const aiCustomerSupportService = new AICustomerSupportService();
;
export const aiCustomerSupportService = new AICustomerSupportService();
