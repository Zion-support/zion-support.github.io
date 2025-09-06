
export interface Attachment {;

      }
    ]
  }



  async createTicket(ticketData: Omit<SupportTicket, 'id' | 'status' | 'assignedAgentId' | 'attachments' | 'messages' | 'createdAt' | 'updatedAt'>): Promise<SupportTicket> {
    const ticket: SupportTicket = {
      id: `ticket_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      ...ticketData;
      status: 'open';
      attachments: [];
      messages: [];
      createdAt: new Date()
      updatedAt: new Date()
    }
    this.tickets.push(ticket);
    this.updateAnalytics();
    return ticket
  }
  async assignTicket(ticketId: string, agentId: string): Promise<void> {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.assignedAgentId = agentId;
      ticket.status = 'in_progress';
      ticket.updatedAt = new Date()
      this.updateAnalytics()
    }
  }
  async updateTicketStatus(ticketId: string, status: SupportTicket['status']): Promise<void> {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.status = status;
      ticket.updatedAt = new Date();
      if (status === 'resolved') {
        ticket.resolvedAt = new Date()
        if (ticket.createdAt && ticket.resolvedAt) {
          ticket.resolutionTime = (ticket.resolvedAt.getTime() - ticket.createdAt.getTime()) / (1000 * 60 * 60)
=======
;
  async createTicket(ticketData: Omit<SupportTicket 'id' | 'status' | 'assignedAgentId' | 'attachments' | 'messages' | 'createdAt' | 'updatedAt'>): Promise<SupportTicket> {;
    const ticket: SupportTicket = {;
      id: `ticket_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,;
      ...ticketData,;
      status: 'open',;
      attachments: [],;
      messages: [],;
      createdAt: new Date(),;
      updatedAt: new Date();
    },;
    this.tickets.push(ticket),;
    this.updateAnalytics(),;
    return ticket;
  }
;
  async assignTicket(ticketId: string, agentId: string): Promise<void> {;
    const ticket = this.tickets.find(t => t.id === ticketId),;
    if (ticket) {;
      ticket.assignedAgentId = agentId,;
      ticket.status = 'in_progress',;
      ticket.updatedAt = new Date(),;
      this.updateAnalytics();
    }
  }
;
  async updateTicketStatus(ticketId: string, status: SupportTicket['status']): Promise<void> {;
    const ticket = this.tickets.find(t => t.id === ticketId),;
    if (ticket) {;
      ticket.status = status,;
      ticket.updatedAt = new Date(),;
      if (status === 'resolved') {;
        ticket.resolvedAt = new Date(),;
        if (ticket.createdAt && ticket.resolvedAt) {;
          ticket.resolutionTime = (ticket.resolvedAt.getTime() - ticket.createdAt.getTime()) / (1000 * 60 * 60);


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      }
      this.updateAnalytics()
    }
  }



  async addMessageToTicket(ticketId: string, messageData: Omit<TicketMessage, 'id' | 'createdAt'>): Promise<TicketMessage> {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (!ticket) {
      throw new Error(`Ticket ${ticketId} not found`)
    }
    const message: TicketMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      ...messageData;
      createdAt: new Date()
    }
    ticket.messages.push(message);
    ticket.updatedAt = new Date();
    // Update first response time if this is the first agent response
    if (message.senderType === 'agent' && !ticket.firstResponseTime) {
      const firstResponseTime = (message.createdAt.getTime() - ticket.createdAt.getTime()) / (1000 * 60);
      ticket.firstResponseTime = firstResponseTime
    }
    this.updateAnalytics();
    return message
  }
  async startChatbotSession(customerId: string): Promise<ChatbotSession> {
    const session: ChatbotSession = {
      id: `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      customerId;
      startTime: new Date();
      messages: [];
      intent: '';
      confidence: 0;
      resolved: false;
      escalated: false
      satisfaction: 0
    }
    this.chatbotSessions.push(session);
    return session
  }
  async addChatbotMessage(sessionId: string, messageData: Omit<ChatbotMessage, 'id' | 'timestamp'>): Promise<ChatbotMessage> {
    const session = this.chatbotSessions.find(s => s.id === sessionId);
    if (!session) {
      throw new Error(`Session ${sessionId} not found`)
    }
    const message: ChatbotMessage = {
      id: `chat_msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      ...messageData;
      timestamp: new Date()
    }
    session.messages.push(message);
    // Simulate AI intent detection
    if (message.sender === 'customer') {
      const intent = this.detectIntent(message.content);
      session.intent = intent.intent;
      session.confidence = intent.confidence
=======
;
  async addMessageToTicket(ticketId: string, messageData: Omit<TicketMessage 'id' | 'createdAt'>): Promise<TicketMessage> {;
    const ticket = this.tickets.find(t => t.id === ticketId),;
    if (!ticket) {;
      throw new Error(`Ticket ${ticketId} not found`);
    }
;
    const message: TicketMessage = {;
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,;
      ...messageData,;
      createdAt: new Date();
    },;
    ticket.messages.push(message),;
    ticket.updatedAt = new Date(),;
    // Update first response time if this is the first agent response;
    if (message.senderType === 'agent' && !ticket.firstResponseTime) {;
      const firstResponseTime = (message.createdAt.getTime() - ticket.createdAt.getTime()) / (1000 * 60),;
      ticket.firstResponseTime = firstResponseTime;
    }
;
    this.updateAnalytics(),;
    return message;
  }
;
  async startChatbotSession(customerId: string): Promise<ChatbotSession> {;
    const session: ChatbotSession = {;
      id: `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,;
      customerId,;
      startTime: new Date(),;
      messages: [],;
      intent: '',;
      confidence: 0,;
      resolved: false,;
      escalated: false,;
      satisfaction: 0;
    },;
    this.chatbotSessions.push(session),;
    return session;
  }
;
  async addChatbotMessage(sessionId: string, messageData: Omit<ChatbotMessage 'id' | 'timestamp'>): Promise<ChatbotMessage> {;
    const session = this.chatbotSessions.find(s => s.id === sessionId),;
    if (!session) {;
      throw new Error(`Session ${sessionId} not found`);
    }
;
    const message: ChatbotMessage = {;
      id: `chat_msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,;
      ...messageData,;
      timestamp: new Date();
    },;
    session.messages.push(message),;
    // Simulate AI intent detection;
    if (message.sender === 'customer') {;
      const intent = this.detectIntent(message.content),;
      session.intent = intent.intent,;
      session.confidence = intent.confidence;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    return message
  }


  private detectIntent(message: string): { intent: string, confidence: number } {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('login') || lowerMessage.includes('password')) {

=======
;
  private detectIntent(message: string): { intent: string, confidence: number } {;
    const lowerMessage = message.toLowerCase(),;
    if (lowerMessage.includes('login') || lowerMessage.includes('password')) {;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      return { intent: 'authentication_issue', confidence: 0.9 }
    } else if (lowerMessage.includes('billing') |lowerMessage.includes('payment')) {
      return { intent: 'billing_question', confidence: 0.85 }
    } else if (lowerMessage.includes('api') |lowerMessage.includes('integration')) {
      return { intent: 'technical_support', confidence: 0.8 }
    } else if (lowerMessage.includes('feature') |lowerMessage.includes('request')) {
      return { intent: 'feature_request', confidence: 0.75 }
    } else {
      return { intent: 'general_inquiry', confidence: 0.6 }
    }
  }



  async endChatbotSession(sessionId: string, resolved: boolean, escalated: boolean, satisfaction: number): Promise<void> {
    const session = this.chatbotSessions.find(s => s.id === sessionId);
    if (session) {
      session.endTime = new Date();
      session.resolved = resolved;
      session.escalated = escalated;
      session.satisfaction = satisfaction
      this.updateAnalytics()
    }
  }
  async createKnowledgeBaseArticle(articleData: Omit<KnowledgeBaseArticle, 'id' | 'views' | 'helpful' | 'notHelpful' | 'createdBy' | 'lastUpdated'>): Promise<KnowledgeBaseArticle> {
    const article: KnowledgeBaseArticle = {
      id: `kb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      ...articleData;
      views: 0;
      helpful: 0;
      notHelpful: 0;
      createdBy: 'system'
      lastUpdated: new Date()
    }
    this.knowledgeBase.push(article);
    return article
=======
;
  async endChatbotSession(sessionId: string, resolved: boolean, escalated: boolean, satisfaction: number): Promise<void> {;
    const session = this.chatbotSessions.find(s => s.id === sessionId),;
    if (session) {;
      session.endTime = new Date(),;
      session.resolved = resolved,;
      session.escalated = escalated,;
      session.satisfaction = satisfaction,;
      this.updateAnalytics();
    }
  }
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
  async searchKnowledgeBase(query: string): Promise<KnowledgeBaseArticle[]> {
    const lowerQuery = query.toLowerCase()
    return this.knowledgeBase.filter(article =>
      article.title.toLowerCase().includes(lowerQuery) |
      article.content.toLowerCase().includes(lowerQuery) |
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    ).sort((a, b) => b.views - a.views)
  }



  async getAIRecommendations(): Promise<AIRecommendation[]> {
    const recommendations: AIRecommendation[] = [];
    // Ticket prioritization recommendation
    const highPriorityOpenTickets = this.tickets.filter(t =>
      t.priority === 'high' && t.status === 'open'
    ).length;
    if (highPriorityOpenTickets > 5) {
      recommendations.push({
        type: 'ticket_prioritization';
        title: 'High Priority Ticket Backlog';
        description: 'Too many high priority tickets are waiting for attention';
        impact: 'high';
        confidence: 90
        actionItems: [
          'Reallocate agents to handle high priority ticketsImplement automated prioritization systemReview ticket classification criteria'
        ]
      })
    }
    // Agent assignment recommendation
    const availableAgents = this.agents.filter(a => a.isAvailable && a.currentTickets < a.maxTickets);
    const unassignedTickets = this.tickets.filter(t => !t.assignedAgentId && t.status === 'open').length;
    if (availableAgents.length > 0 && unassignedTickets > 0) {
      recommendations.push({
        type: 'agent_assignment';
        title: 'Unassigned Tickets Available';
        description: 'There are unassigned tickets and available agents';
        impact: 'medium';
        confidence: 85
        actionItems: [
          'Automatically assign tickets to available agentsImplement load balancing for ticket distributionReview agent availability and workload'
        ]
      })
    }
    // Knowledge base recommendation
    const lowViewedArticles = this.knowledgeBase.filter(a => a.views < 10);
    if (lowViewedArticles.length > 5) {
      recommendations.push({
        type: 'knowledge_base';
        title: 'Underutilized Knowledge Base Articles';
        description: 'Several articles have very low view counts';
        impact: 'low';
        confidence: 75
        actionItems: [
          'Review and update low-performing articlesImprove article discoverabilityConsider consolidating similar articles'
        ]
      })
=======
;
  async getAIRecommendations(): Promise<AIRecommendation[]> {;
    const recommendations: AIRecommendation[] = [],;
    // Ticket prioritization recommendation;
    const highPriorityOpenTickets = this.tickets.filter(t =>;
      t.priority === 'high' && t.status === 'open';
    ).length,;
    if (highPriorityOpenTickets > 5) {;
      recommendations.push({;
        type: 'ticket_prioritization',;
        title: 'High Priority Ticket Backlog',;
        description: 'Too many high priority tickets are waiting for attention',;
        impact: 'high',;
        confidence: 90,;
        actionItems: [;
          'Reallocate agents to handle high priority ticketsImplement automated prioritization systemReview ticket classification criteria';
        ];
      });
    }
;
    // Agent assignment recommendation;
    const availableAgents = this.agents.filter(a => a.isAvailable && a.currentTickets < a.maxTickets),;
    const unassignedTickets = this.tickets.filter(t => !t.assignedAgentId && t.status === 'open').length,;
    if (availableAgents.length > 0 && unassignedTickets > 0) {;
      recommendations.push({;
        type: 'agent_assignment',;
        title: 'Unassigned Tickets Available',;
        description: 'There are unassigned tickets and available agents',;
        impact: 'medium',;
        confidence: 85,;
        actionItems: [;
          'Automatically assign tickets to available agentsImplement load balancing for ticket distributionReview agent availability and workload';
        ];
      });
    }
;
    // Knowledge base recommendation;
    const lowViewedArticles = this.knowledgeBase.filter(a => a.views < 10),;
    if (lowViewedArticles.length > 5) {;
      recommendations.push({;
        type: 'knowledge_base',;
        title: 'Underutilized Knowledge Base Articles',;
        description: 'Several articles have very low view counts',;
        impact: 'low',;
        confidence: 75,;
        actionItems: [;
          'Review and update low-performing articlesImprove article discoverabilityConsider consolidating similar articles';
        ];
      });


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
    return recommendations
  }



  private updateAnalytics(): void {
    const totalTickets = this.tickets.length;
    const openTickets = this.tickets.filter(t => ['openin_progresswaiting_customer'].includes(t.status)).length;
    const resolvedTickets = this.tickets.filter(t => t.status === 'resolved').length;
    const resolutionTimes = this.tickets
      .filter(t => t.resolutionTime)
      .map(t => t.resolutionTime!);
    const averageResolutionTime = resolutionTimes.length > 0
      ? resolutionTimes.reduce((sum, time) => sum + time, 0) / resolutionTimes.length
      : 0;
    const responseTimes = this.tickets
      .filter(t => t.firstResponseTime)
      .map(t => t.firstResponseTime!);
    const averageFirstResponseTime = responseTimes.length > 0
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length
      : 0;
    const satisfactionScores = this.customers.map(c => c.satisfactionScore);
    const customerSatisfaction = satisfactionScores.length > 0
      ? satisfactionScores.reduce((sum, score) => sum + score, 0) / satisfactionScores.length
      : 0;
    const chatbotResolved = this.chatbotSessions.filter(s => s.resolved && !s.escalated).length;
    const chatbotTotal = this.chatbotSessions.filter(s => s.endTime).length;
    const chatbotResolutionRate = chatbotTotal > 0 ? (chatbotResolved / chatbotTotal) * 100 : 0;
    const categoryCounts = this.tickets.reduce((acc, ticket) => {
      acc[ticket.category] = (acc[ticket.category] |0) + 1;
      return acc
    }, {} as Record<string, number>);
    const topCategories = Object.entries(categoryCounts)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    const agentPerformance = this.agents.map(agent => ({
      agentId: agent.id;
      ticketsResolved: agent.performance.ticketsResolved
      satisfaction: agent.performance.customerSatisfaction
    }));
    this.analytics = {
      totalTickets;
      openTickets;
      resolvedTickets;
      averageResolutionTime;
      averageFirstResponseTime;
      customerSatisfaction;
      chatbotResolutionRate;
      topCategories;
      agentPerformance
=======
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  async getKnowledgeBase(): Promise<KnowledgeBaseArticle[]> {
    return this.knowledgeBase
  }
  async getAnalytics(): Promise<SupportAnalytics> {
    return this.analytics
  }
}


=======
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const aiCustomerSupportService = new AICustomerSupportService();

=======
;
export const aiCustomerSupportService = new AICustomerSupportService();
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
