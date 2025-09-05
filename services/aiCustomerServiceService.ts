<<<<<<< HEAD
export interface CustomerTicket {
  id: string,
  customerId: string,
  subject: string,
  description: string,
  priority: 'low' | 'medium' | 'high' | 'urgent',
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed',
  category: string,
  assignedTo?: string,
  createdAt: Date,
  updatedAt: Date,
  resolvedAt?: Date,
  customerSatisfaction?: number,
  tags: string[],
  attachments: string[],
  conversationHistory: CustomerMessage[]
}

export interface CustomerMessage {
  id: string,
  ticketId: string,
  senderId: string,
  senderType: 'customer' | 'agent' | 'ai',
  message: string,
  timestamp: Date,
  attachments?: string[],
  sentiment: 'positive' | 'neutral' | 'negative',
  intent: string,
  confidence: number
}

export interface CustomerProfile {
  id: string,
  email: string,
  name: string,
  phone?: string,
  company?: string,
  plan: string,
  totalTickets: number,
  resolvedTickets: number,
  averageResolutionTime: number,
  customerSatisfaction: number,
  lastContact: Date,
  preferences: {
    communicationChannel: 'email' | 'chat' | 'phone',
    language: string,
    timezone: string
  },
  tags: string[]
}

export interface AIResponse {
  id: string,
  ticketId: string,
  response: string,
  confidence: number,
  suggestedActions: string[],
  nextSteps: string[],
  requiresHumanReview: boolean,
  generatedAt: Date
}

export interface CustomerServiceMetrics {
  totalTickets: number,
  openTickets: number,
  resolvedTickets: number,
  averageResolutionTime: number,
  customerSatisfaction: number,
  firstResponseTime: number,
  ticketVolumeByCategory: Record<string number>,
  agentPerformance: Record<string {
    ticketsResolved: number,
    averageResolutionTime: number,
    customerSatisfaction: number
  }>
}

export interface CustomerServiceRequest {
  customerId: string,
  subject: string,
  description: string,
  priority: 'low' | 'medium' | 'high' | 'urgent',
  category: string,
  attachments?: string[],
  preferredChannel?: 'email' | 'chat' | 'phone'
}

export interface CustomerServiceResponse {
  ticketId: string,
  status: 'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated',
  aiResponse?: AIResponse,
  estimatedResolutionTime: string,
  nextSteps: string[],
  assignedAgent?: string
}

export class AICustomerServiceService {
  private apiKey: string,
  private baseUrl: string,

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey,
    this.baseUrl = baseUrl
  }

  async createTicket(request: CustomerServiceRequest): Promise<CustomerServiceResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`},
        body: JSON.stringify(request)}),

      if (!response.ok) {
        throw new Error(`Create ticket API error: ${response.statusText}`)
      }

      const data = await response.json(),
      return data
    } catch (error) {
      console.error('Error creating ticket:', error),
      throw error
    }
  }

  async getTicket(ticketId: string): Promise<CustomerTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Get ticket API error: ${response.statusText}`)
      }

      const data = await response.json(),
      return {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
        resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined,
        conversationHistory: data.conversationHistory.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)}))}
    } catch (error) {
      console.error('Error getting ticket:', error),
      throw error
    }
  }

  async updateTicket(ticketId: string, updates: Partial<CustomerTicket>): Promise<CustomerTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`},
        body: JSON.stringify(updates)}),

      if (!response.ok) {
        throw new Error(`Update ticket API error: ${response.statusText}`)
      }

      const data = await response.json(),
      return {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
        resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined,
        conversationHistory: data.conversationHistory.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)}))}
    } catch (error) {
      console.error('Error updating ticket:', error),
      throw error
    }
  }

  async addMessage(ticketId: string, message: Omit<CustomerMessage 'id' | 'timestamp'>): Promise<CustomerMessage> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`},
        body: JSON.stringify(message)}),

      if (!response.ok) {
        throw new Error(`Add message API error: ${response.statusText}`)
      }

      const data = await response.json(),
      return {
        ...data,
        timestamp: new Date(data.timestamp)}
    } catch (error) {
      console.error('Error adding message:', error),
      throw error
    }
  }

  async generateAIResponse(ticketId: string): Promise<AIResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}/ai-response`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`AI response API error: ${response.statusText}`)
      }

      const data = await response.json(),
      return {
        ...data,
        generatedAt: new Date(data.generatedAt)}
    } catch (error) {
      console.error('Error generating AI response:', error),
      throw error
    }
  }

  async getCustomerProfile(customerId: string): Promise<CustomerProfile> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/customers/${customerId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Get customer profile API error: ${response.statusText}`)
      }

      const data = await response.json(),
      return {
        ...data,
        lastContact: new Date(data.lastContact)}
    } catch (error) {
      console.error('Error getting customer profile:', error),
      throw error
    }
  }

  async getMetrics(timeframe: string = '30d'): Promise<CustomerServiceMetrics> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/metrics?timeframe=${timeframe}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Get metrics API error: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error getting metrics:', error),
      throw error
    }
  }

  async searchTickets(query: string, filters?: Record<string any>): Promise<CustomerTicket[]> {
    try {
      const params = new URLSearchParams({ query, ...filters }),
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/search?${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Search tickets API error: ${response.statusText}`)
      }

      const data = await response.json(),
      return data.tickets.map((ticket: any) => ({
        ...ticket,
        createdAt: new Date(ticket.createdAt),
        updatedAt: new Date(ticket.updatedAt),
        resolvedAt: ticket.resolvedAt ? new Date(ticket.resolvedAt) : undefined,
        conversationHistory: ticket.conversationHistory.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)}))}))
    } catch (error) {
      console.error('Error searching tickets:', error),
      throw error
    }
  }

  async autoAssignTickets(): Promise<{ assigned: number, failed: number }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/auto-assign`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}}),

      if (!response.ok) {
        throw new Error(`Auto assign tickets API error: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error auto-assigning tickets:', error),
      throw error
    }
  }

  async generateCustomerServiceReport(timeframe: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`},
        body: JSON.stringify({ timeframe, format })}),

      if (!response.ok) {
        throw new Error(`Generate report API error: ${response.statusText}`)
      }

      const data = await response.json(),
      return data.downloadUrl
    } catch (error) {
      console.error('Error generating report:', error),
      throw error
    }
  }
}

export const aiCustomerServiceService = new AICustomerServiceService(process.env.CUSTOMER_SERVICE_API_KEY || ''),
=======
export interface CustomerTicket {_id: string;
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
  conversationHistory: CustomerMessage[];}

export interface CustomerMessage {_id: string;
  ticketId: string;
  senderId: string;
  senderType: 'customer' | 'agent' | 'ai';
  message: string;
  timestamp: Date;
  attachments?: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  intent: string;
  confidence: number;}

export interface CustomerProfile {_id: string;
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
    timezone: string;};
  tags: string[];
}

export interface AIResponse {_id: string;
  ticketId: string;
  response: string;
  confidence: number;
  suggestedActions: string[];
  nextSteps: string[];
  requiresHumanReview: boolean;
  generatedAt: Date;}

export interface CustomerServiceMetrics {_totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  averageResolutionTime: number;
  customerSatisfaction: number;
  firstResponseTime: number;
  ticketVolumeByCategory: Record<string, _number>;
  agentPerformance: Record<string, _{
    ticketsResolved: number;
    averageResolutionTime: number;
    customerSatisfaction: number;}>;
}

export interface CustomerServiceRequest {_customerId: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  attachments?: string[];
  preferredChannel?: 'email' | 'chat' | 'phone';}

export interface CustomerServiceResponse {_ticketId: string;
  status: 'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated';
  aiResponse?: AIResponse;
  estimatedResolutionTime: string;
  nextSteps: string[];
  assignedAgent?: string;}

export class AICustomerServiceService {_private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, _baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;}

  async createTicket(request: CustomerServiceRequest): Promise<CustomerServiceResponse> {_try {
      const _response = await fetch(`${this.baseUrl}/api/customer-service/tickets`, {_method: 'POST', _headers: {
          'Content-Type': 'application/json', _'Authorization': `Bearer ${this.apiKey}`},
        body: JSON.stringify(request)});

      if (!response.ok) {_throw new Error(`Create ticket API error: ${response.statusText}`);
      }

      const _data = await response.json();
      return data;
    } catch (error) {_throw error;}
  }

  async getTicket(ticketId: string): Promise<CustomerTicket> {_try {
      const _response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${_ticketId}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Get ticket API error: ${response.statusText}`);
      }

      const _data = await response.json();
      return {_...data, _createdAt: new Date(data.createdAt), _updatedAt: new Date(data.updatedAt), _resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined, _conversationHistory: data.conversationHistory.map(_(msg: unknown) => ({
          ...msg, _timestamp: new Date(msg.timestamp)}))};
    } catch (error) {_throw error;}
  }

  async updateTicket(ticketId: string, updates: Partial<CustomerTicket>): Promise<CustomerTicket> {_try {
      const _response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${_ticketId}`, {_method: 'PATCH', _headers: {
          'Content-Type': 'application/json', _'Authorization': `Bearer ${this.apiKey}`},
        body: JSON.stringify(updates)});

      if (!response.ok) {_throw new Error(`Update ticket API error: ${response.statusText}`);
      }

      const _data = await response.json();
      return {_...data, _createdAt: new Date(data.createdAt), _updatedAt: new Date(data.updatedAt), _resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined, _conversationHistory: data.conversationHistory.map(_(msg: unknown) => ({
          ...msg, _timestamp: new Date(msg.timestamp)}))};
    } catch (error) {_throw error;}
  }

  async addMessage(ticketId: string, message: Omit<CustomerMessage, 'id' | 'timestamp'>): Promise<CustomerMessage> {_try {
      const _response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${_ticketId}/messages`, {_method: 'POST', _headers: {
          'Content-Type': 'application/json', _'Authorization': `Bearer ${this.apiKey}`},
        body: JSON.stringify(message)});

      if (!response.ok) {_throw new Error(`Add message API error: ${response.statusText}`);
      }

      const _data = await response.json();
      return {_...data, _timestamp: new Date(data.timestamp)};
    } catch (error) {_throw error;}
  }

  async generateAIResponse(ticketId: string): Promise<AIResponse> {_try {
      const _response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${_ticketId}/ai-response`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`AI response API error: ${response.statusText}`);
      }

      const _data = await response.json();
      return {_...data, _generatedAt: new Date(data.generatedAt)};
    } catch (error) {_throw error;}
  }

  async getCustomerProfile(customerId: string): Promise<CustomerProfile> {_try {
      const _response = await fetch(`${this.baseUrl}/api/customer-service/customers/${_customerId}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Get customer profile API error: ${response.statusText}`);
      }

      const _data = await response.json();
      return {_...data, _lastContact: new Date(data.lastContact)};
    } catch (error) {_throw error;}
  }

  async getMetrics(timeframe: string = '30d'): Promise<CustomerServiceMetrics> {_try {
      const _response = await fetch(`${this.baseUrl}/api/customer-service/metrics?timeframe=${_timeframe}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Get metrics API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_throw error;}
  }

  async searchTickets(query: string, filters?: Record<string, any>): Promise<CustomerTicket[]> {_try {
      const _params = new URLSearchParams({ query, _...filters});
      const _response = await fetch(`${_this.baseUrl}/api/customer-service/tickets/search?${_params}`, {_headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Search tickets API error: ${response.statusText}`);
      }

      const _data = await response.json();
      return data.tickets.map(_(ticket: unknown) => ({_...ticket, _createdAt: new Date(ticket.createdAt), _updatedAt: new Date(ticket.updatedAt), _resolvedAt: ticket.resolvedAt ? new Date(ticket.resolvedAt) : undefined, _conversationHistory: ticket.conversationHistory.map(_(msg: unknown) => ({
          ...msg, _timestamp: new Date(msg.timestamp)}))}));
    } catch (error) {_throw error;}
  }

  async autoAssignTickets(): Promise<{_assigned: number; failed: number}> {_try {
      const _response = await fetch(`${this.baseUrl}/api/customer-service/tickets/auto-assign`, {_method: 'POST', _headers: {
          'Authorization': `Bearer ${this.apiKey}`}});

      if (!response.ok) {_throw new Error(`Auto assign tickets API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {_throw error;}
  }

  async generateCustomerServiceReport(timeframe: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {_try {
      const _response = await fetch(`${this.baseUrl}/api/customer-service/reports`, {_method: 'POST', _headers: {
          'Content-Type': 'application/json', _'Authorization': `Bearer ${this.apiKey}`},
        body: JSON.stringify({_timeframe, _format})});

      if (!response.ok) {_throw new Error(`Generate report API error: ${response.statusText}`);
      }

      const _data = await response.json();
      return data.downloadUrl;
    } catch (error) {_throw error;}
  }
}

export const _aiCustomerServiceService = new AICustomerServiceService(process.env.CUSTOMER_SERVICE_API_KEY || '');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
