<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
export interface CustomerTicket {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface CustomerTicket {
export interface CustomerTicket {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  attachments: string[],
  conversation_history: CustomerMessage[];

========
  attachments: string[],
  conversation_history: CustomerMessage[];
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
}
<<<<<<< HEAD

=======
export interface CustomerMessage {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  ticket_id: string;
  sender_id: string;
  sender_type: 'customer' | 'agent' | 'ai';
=======

  attachments: string[]

  conversationHistory: CustomerMessage[]
}
export interface CustomerMessage {

export interface CustomerMessage {;
  id: string;
  ticketId: string;
  senderId: string;
  senderType: 'customer' | 'agent' | 'ai';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  message: string;
  timestamp: Date;
  attachments?: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

  intent: string,
  confidence: number;

========
  intent: string,
  confidence: number;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
}
<<<<<<< HEAD

=======
export interface CustomerProfile {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

  intent: string

  confidence: number
}
export interface CustomerProfile {

export interface CustomerProfile {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  email: string;
  name: string;
  phone?: string;
  company?: string;
  plan: string;
<<<<<<< HEAD
  total_tickets: number;
  resolved_tickets: number;
  averageResolutionTime: number;
  customer_satisfaction: number;
  last_contact: Date;
  preferences: {
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
    communication_channel: 'email' | 'chat' | 'phone';
    language: string,
    timezone: string;
  }
  tags: string[];
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
}
<<<<<<< HEAD

=======
export interface AIResponse {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  id: string;
  ticket_id: string;
  response: string;
  confidence: number;
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
  suggested_actions: string[];
  next_steps: string[];
  requiresHumanReview: boolean,
  generated_at: Date;
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
}
<<<<<<< HEAD

  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
=======
export interface CustomerServiceMetrics {
  total_tickets: number;
  open_tickets: number;
  resolved_tickets: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  averageResolutionTime: number;
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

    ticketsResolved: number
    averageResolutionTime: number,

    customerSatisfaction: number
  }>
<<<<<<< HEAD
}

  customerId: string;
=======
=======
========
    ticketsResolved: number
    averageResolutionTime: number,
    customerSatisfaction: number
  }>
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
  customer_satisfaction: number;
  firstResponseTime: number,
  ticketVolumeByCategory: Record < string, number>;
  agent_performance: Record < string, {
    tickets_resolved: number;
    averageResolutionTime: number,
    customer_satisfaction: number;
  }>;
}
export interface CustomerServiceRequest {
  customer_id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  totalTickets: number;
  resolvedTickets: number;
  averageResolutionTime: number;
  customerSatisfaction: number;
  lastContact: Date;
  preferences: {
    communicationChannel: 'email' | 'chat' | 'phone';

    language: string

    timezone: string
  }
  tags: string[]
}
export interface AIResponse {

export interface AIResponse {;
  id: string;
  ticketId: string;
  response: string;
  confidence: number;
  suggestedActions: string[];
  nextSteps: string[];

  requiresHumanReview: boolean

  generatedAt: Date
}
export interface CustomerServiceMetrics {

export interface CustomerServiceMetrics {;
  totalTickets: number;
  openTickets: number;
  resolvedTickets: number;
  averageResolutionTime: number;
  customerSatisfaction: number;

  firstResponseTime: number
  ticketVolumeByCategory: Record<string, number>;
  agentPerformance: Record<string, {
    ticketsResolved: number;
    averageResolutionTime: number

    customerSatisfaction: number
  }>
}
export interface CustomerServiceRequest {

export interface CustomerServiceRequest {;
  customerId: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

  attachments?: string[],
  preferred_channel?: 'email' | 'chat' | 'phone';

========
  attachments?: string[],
  preferred_channel?: 'email' | 'chat' | 'phone';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
}
<<<<<<< HEAD

  ticketId: string;
=======
export interface CustomerServiceResponse {
  ticket_id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  status: 'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated';
  ai_response?: AIResponse;
  estimatedResolutionTime: string;
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

<<<<<<< HEAD
  assignedAgent?: string
}

=======

  attachments?: string[]

  preferredChannel?: 'email' | 'chat' | 'phone'
}
export interface CustomerServiceResponse {

export interface CustomerServiceResponse {;
  ticketId: string;
  status: 'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated';
  aiResponse?: AIResponse;
  estimatedResolutionTime: string;

  nextSteps: string[]

  assignedAgent?: string
}
export class AICustomerServiceService {

export class AICustomerServiceService {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  private apiKey: string;

  private baseUrl: string
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey
    this.baseUrl = baseUrl
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  async createTicket(request: CustomerServiceRequest): Promise<CustomerServiceResponse> {
    try {

========
  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl
  }
  async createTicket(request: CustomerServiceRequest): Promise<CustomerServiceResponse> {
    try {
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this && this.apiKey}`};
        body: JSON && JSON.stringify(request)});
      if (!response && response.ok) {
        throw new Error(`Create ticket API error: ${response && response.statusText}`)
      }
      const data = await response && response.json();
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      return data
    } catch (error) {
      console && console.error('Error creating ticket:', error);
=======
  }
  async createTicket(request: CustomerServiceRequest): Promise<CustomerServiceResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets`, {
        method: 'POST'
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`}
        body: JSON.stringify(request)});
      if (!response.ok) {
        throw new Error(`Create ticket API error: ${response.statusText}`)
      }
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error creating ticket:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async getTicket(ticketId: string): Promise<CustomerTicket> {
    try {
<<<<<<< HEAD
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets/${ticketId}`, {
        headers: {
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Get ticket API error: ${response && response.statusText}`)
      }
      const data = await response && response.json();
      return {
        ...data;
        createdAt: new Date(data && data.createdAt);
        updatedAt: new Date(data && data.updatedAt);
        resolvedAt: data && data.resolvedAt ? new Date(data && data.resolvedAt) : undefined;
        conversationHistory: data && data.conversationHistory.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg && msg.timestamp)}))}
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
    } catch (error) {
      console && console.error('Error getting ticket:', error);
=======
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Get ticket API error: ${response.statusText}`)
      }
      const data = await response.json();
      return {
        ...data;
        createdAt: new Date(data.createdAt);
        updatedAt: new Date(data.updatedAt);
        resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined;
        conversationHistory: data.conversationHistory.map((msg: any) => ({
          ...msg
          timestamp: new Date(msg.timestamp)}))}
    } catch (error) {
      console.error('Error getting ticket:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async updateTicket(ticketId: string, updates: Partial<CustomerTicket>): Promise<CustomerTicket> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this && this.apiKey}`};
        body: JSON && JSON.stringify(updates)});
      if (!response && response.ok) {
        throw new Error(`Update ticket API error: ${response && response.statusText}`)
      }
      const data = await response && response.json();
      return {
        ...data;
        createdAt: new Date(data && data.createdAt);
        updatedAt: new Date(data && data.updatedAt);
        resolvedAt: data && data.resolvedAt ? new Date(data && data.resolvedAt) : undefined;
        conversationHistory: data && data.conversationHistory.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg && msg.timestamp)}))}
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
    } catch (error) {
      console && console.error('Error updating ticket:', error);
=======
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}`, {
        method: 'PATCH'
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`}
        body: JSON.stringify(updates)});
      if (!response.ok) {
        throw new Error(`Update ticket API error: ${response.statusText}`)
      }
      const data = await response.json();
      return {
        ...data;
        createdAt: new Date(data.createdAt);
        updatedAt: new Date(data.updatedAt);
        resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined;
        conversationHistory: data.conversationHistory.map((msg: any) => ({
          ...msg
          timestamp: new Date(msg.timestamp)}))}
    } catch (error) {
      console.error('Error updating ticket:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async addMessage(ticketId: string, message: Omit<CustomerMessage, 'id' | 'timestamp'>): Promise<CustomerMessage> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets/${ticketId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this && this.apiKey}`};
        body: JSON && JSON.stringify(message)});
      if (!response && response.ok) {
        throw new Error(`Add message API error: ${response && response.statusText}`)
      }
      const data = await response && response.json();
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      return {
        ...data;
        timestamp: new Date(data && data.timestamp)}
    } catch (error) {
      console && console.error('Error adding message:', error);
=======
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}/messages`, {
        method: 'POST'
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`}
        body: JSON.stringify(message)});
      if (!response.ok) {
        throw new Error(`Add message API error: ${response.statusText}`)
      }
      const data = await response.json();
      return {
        ...data;
        timestamp: new Date(data.timestamp)}
    } catch (error) {
      console.error('Error adding message:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async generateAIResponse(ticketId: string): Promise<AIResponse> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets/${ticketId}/ai-response`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`AI response API error: ${response && response.statusText}`)
      }
      const data = await response && response.json();
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      return {
        ...data;
        generatedAt: new Date(data && data.generatedAt)}
    } catch (error) {
      console && console.error('Error generating AI response:', error);
=======
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}/ai-response`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`AI response API error: ${response.statusText}`)
      }
      const data = await response.json();
      return {
        ...data;
        generatedAt: new Date(data.generatedAt)}
    } catch (error) {
      console.error('Error generating AI response:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async getCustomerProfile(customerId: string): Promise<CustomerProfile> {
    try {
<<<<<<< HEAD
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/customers/${customerId}`, {
        headers: {
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Get customer profile API error: ${response && response.statusText}`)
      }
      const data = await response && response.json();
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      return {
        ...data;
        lastContact: new Date(data && data.lastContact)}
    } catch (error) {
      console && console.error('Error getting customer profile:', error);
=======
      const response = await fetch(`${this.baseUrl}/api/customer-service/customers/${customerId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Get customer profile API error: ${response.statusText}`)
      }
      const data = await response.json();
      return {
        ...data;
        lastContact: new Date(data.lastContact)}
    } catch (error) {
      console.error('Error getting customer profile:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async getMetrics(timeframe: string = '30d'): Promise<CustomerServiceMetrics> {
    try {
<<<<<<< HEAD
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/metrics?timeframe=${timeframe}`, {
        headers: {
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Get metrics API error: ${response && response.statusText}`)
      }
      return await response && response.json()
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
    } catch (error) {
      console && console.error('Error getting metrics:', error);
=======
      const response = await fetch(`${this.baseUrl}/api/customer-service/metrics?timeframe=${timeframe}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Get metrics API error: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error getting metrics:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async searchTickets(query: string, filters?: Record<string, any>): Promise<CustomerTicket[]> {
    try {
      const params = new URLSearchParams({ query, ...filters });
<<<<<<< HEAD
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets/search?${params}`, {
        headers: {
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Search tickets API error: ${response && response.statusText}`)
      }
      const data = await response && response.json();
      return data && data.tickets.map((ticket: any) => ({
        ...ticket;
        createdAt: new Date(ticket && ticket.createdAt);
        updatedAt: new Date(ticket && ticket.updatedAt);
        resolvedAt: ticket && ticket.resolvedAt ? new Date(ticket && ticket.resolvedAt) : undefined;
        conversationHistory: ticket && ticket.conversationHistory.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg && msg.timestamp)}))}))
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
    } catch (error) {
      console && console.error('Error searching tickets:', error);
=======
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/search?${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Search tickets API error: ${response.statusText}`)
      }
      const data = await response.json();
      return data.tickets.map((ticket: any) => ({
        ...ticket;
        createdAt: new Date(ticket.createdAt);
        updatedAt: new Date(ticket.updatedAt);
        resolvedAt: ticket.resolvedAt ? new Date(ticket.resolvedAt) : undefined;
        conversationHistory: ticket.conversationHistory.map((msg: any) => ({
          ...msg
          timestamp: new Date(msg.timestamp)}))}))
    } catch (error) {
      console.error('Error searching tickets:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async autoAssignTickets(): Promise<{ assigned: number, failed: number }> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets/auto-assign`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`}});
      if (!response && response.ok) {
        throw new Error(`Auto assign tickets API error: ${response && response.statusText}`)
      }
      return await response && response.json()
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
    } catch (error) {
      console && console.error('Error auto-assigning tickets:', error);
=======
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/auto-assign`, {
        method: 'POST'
        headers: {
          'Authorization': `Bearer ${this.apiKey}`}});
      if (!response.ok) {
        throw new Error(`Auto assign tickets API error: ${response.statusText}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error auto-assigning tickets:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
  async generateCustomerServiceReport(timeframe: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {
    try {
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this && this.apiKey}`};
        body: JSON && JSON.stringify({ timeframe, format })});
      if (!response && response.ok) {
        throw new Error(`Generate report API error: ${response && response.statusText}`)
      }
      const data = await response && response.json();
      return data && data.downloadUrl
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
    } catch (error) {
      console && console.error('Error generating report:', error);
=======
      const response = await fetch(`${this.baseUrl}/api/customer-service/reports`, {
        method: 'POST'
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`}
        body: JSON.stringify({ timeframe, format })});
      if (!response.ok) {
        throw new Error(`Generate report API error: ${response.statusText}`)
      }
      const data = await response.json();
      return data.downloadUrl
    } catch (error) {
      console.error('Error generating report:', error);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      throw error
    }
  }
}
export const aiCustomerServiceService = new AICustomerServiceService(process.env.CUSTOMER_SERVICE_API_KEY |'');
<<<<<<< HEAD
<<<<<<<< HEAD:services/aiCustomerServiceService.ts

<<<<<<< HEAD
=======

export interface CustomerTicket {;
export const aiCustomerServiceService = new AICustomerServiceService(process.env.CUSTOMER_SERVICE_API_KEY || '');
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string,;
  customerId: string,;
  subject: string,;
  description: string,;
  priority: 'low' | 'medium' | 'high' | 'urgent',;
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed',;
  category: string,;
  assignedTo?: string,;
  createdAt: Date,;
  updatedAt: Date,;
  resolvedAt?: Date,;
  customerSatisfaction?: number,;
  tags: string[],;
  attachments: string[],;
  conversationHistory: CustomerMessage[];
<<<<<<< HEAD
=======

export const aiCustomerServiceService = new AICustomerServiceService(process && process.env.CUSTOMER_SERVICE_API_KEY || '');

=======
========
export const aiCustomerServiceService = new AICustomerServiceService(process && process.env.CUSTOMER_SERVICE_API_KEY || '');
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
  next_steps: string[],
  assigned_agent?: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
export class AICustomerServiceService {
  private api_key: string;
  private base_url: string,
  constructor (api_key: string, base_url: string = 'https://api.ziontechgroup.com') {
    this.api_key = api_key,
    this.base_url = base_url;
  }
  async create_ticket (request: CustomerServiceRequest): Promise < CustomerServiceResponse> {
    try {
      const response = await fetch (`${this.base_url}/api / customer - service / tickets`, {
        method: 'POST',
        headers: {
          'Content - Type': 'application / json_authorization': `Bearer ${this.api_key}`}
        body: JSON.stringify (request)});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Create ticket API error: ${response.status_text}`);
      }
      const data = await response.json ();
      return data;
    } catch (error) {
      console.error ('Error creating ticket:', error);
      throw error;
    }
  }
  async get_ticket (ticket_id: string): Promise < CustomerTicket> {
    try {
      const response = await fetch (`${this.base_url}/api / customer - service / tickets/${ticket_id}`, {
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Get ticket API error: ${response.status_text}`);
      }
      const data = await response.json ();
      return {
        ...data;
        created_at: new Date (data.created_at);
        updated_at: new Date (data.updated_at);
        resolved_at: data.resolved_at ? new Date (data.resolved_at) : undefined;
        conversation_history: data.conversation_history.map ((msg: any) => ({
          ...msg,
          timestamp: new Date (msg.timestamp)}))}
    } catch (error) {
      console.error ('Error getting ticket:', error);
      throw error;
    }
  }
  async update_ticket (ticket_id: string, updates: Partial < CustomerTicket>): Promise < CustomerTicket> {
    try {
      const response = await fetch (`${this.base_url}/api / customer - service / tickets/${ticket_id}`, {
        method: 'PATCH',
        headers: {
          'Content - Type': 'application / json_authorization': `Bearer ${this.api_key}`}
        body: JSON.stringify (updates)});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Update ticket API error: ${response.status_text}`);
      }
      const data = await response.json ();
      return {
        ...data;
        created_at: new Date (data.created_at);
        updated_at: new Date (data.updated_at);
        resolved_at: data.resolved_at ? new Date (data.resolved_at) : undefined;
        conversation_history: data.conversation_history.map ((msg: any) => ({
          ...msg,
          timestamp: new Date (msg.timestamp)}))}
    } catch (error) {
      console.error ('Error updating ticket:', error);
      throw error;
    }
  }
  async add_message (ticket_id: string, message: Omit < CustomerMessage, 'id' | 'timestamp'>): Promise < CustomerMessage> {
    try {
      const response = await fetch (`${this.base_url}/api / customer - service / tickets/${ticket_id}/messages`, {
        method: 'POST',
        headers: {
          'Content - Type': 'application / json_authorization': `Bearer ${this.api_key}`}
        body: JSON.stringify (message)});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Add message API error: ${response.status_text}`);
      }
      const data = await response.json ();
      return {
        ...data;
        timestamp: new Date (data.timestamp)}
    } catch (error) {
      console.error ('Error adding message:', error);
      throw error;
    }
  }
  async generateAIResponse (ticket_id: string): Promise < AIResponse> {
    try {
      const response = await fetch (`${this.base_url}/api / customer - service / tickets/${ticket_id}/ai - response`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`AI response API error: ${response.status_text}`);
      }
      const data = await response.json ();
      return {
        ...data;
        generated_at: new Date (data.generated_at)}
    } catch (error) {
      console.error ('Error generating AI response:', error);
      throw error;
    }
  }
  async getCustomerProfile (customer_id: string): Promise < CustomerProfile> {
    try {
      const response = await fetch (`${this.base_url}/api / customer - service / customers/${customer_id}`, {
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Get customer profile API error: ${response.status_text}`);
      }
      const data = await response.json ();
      return {
        ...data;
        last_contact: new Date (data.last_contact)}
    } catch (error) {
      console.error ('Error getting customer profile:', error);
      throw error;
    }
  }
  async get_metrics (timeframe: string = '30d'): Promise < CustomerServiceMetrics> {
    try {
      const response = await fetch (`${this.base_url}/api / customer - service / metrics?timeframe=${timeframe}`, {
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Get metrics API error: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      console.error ('Error getting metrics:', error);
      throw error;
    }
  }
  async search_tickets (query: string, filters?: Record < string, any>): Promise < CustomerTicket[]> {
    try {
      const params = new URLSearchParams ({ query, ...filters });
      const response = await fetch (`${this.base_url}/api / customer - service / tickets / search?${params}`, {
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Search tickets API error: ${response.status_text}`);
      }
      const data = await response.json ();
      return data.tickets.map ((ticket: any) => ({
        ...ticket;
        created_at: new Date (ticket.created_at);
        updated_at: new Date (ticket.updated_at);
        resolved_at: ticket.resolved_at ? new Date (ticket.resolved_at) : undefined;
        conversation_history: ticket.conversation_history.map ((msg: any) => ({
          ...msg,
          timestamp: new Date (msg.timestamp)}))}));
    } catch (error) {
      console.error ('Error searching tickets:', error);
      throw error;
    }
  }
  async autoAssignTickets (): Promise<{ assigned: number, failed: number }> {
    try {
      const response = await fetch (`${this.base_url}/api / customer - service / tickets / auto - assign`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.api_key}`}});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Auto assign tickets API error: ${response.status_text}`);
      }
      return await response.json ();
    } catch (error) {
      console.error ('Error auto - assigning tickets:', error);
      throw error;
    }
  }
  async generateCustomerServiceReport (timeframe: string, format: 'pdf' | 'csv' | 'excel'): Promise < string> {
    try {
      const response = await fetch (`${this.base_url}/api / customer - service / reports`, {
        method: 'POST',
        headers: {
          'Content - Type': 'application / json_authorization': `Bearer ${this.api_key}`}
        body: JSON.stringify ({ timeframe, format })});
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`Generate report API error: ${response.status_text}`);
      }
      const data = await response.json ();
      return data.download_url;
    } catch (error) {
      console.error ('Error generating report:', error);
      throw error;
    }
  }
}
export const aiCustomerServiceService = new AICustomerServiceService (process.env.CUSTOMER_SERVICE_API_KEY || '');
;
<<<<<<<< HEAD:services/aiCustomerServiceService.ts
<<<<<<< HEAD
export const aiCustomerServiceService = new AICustomerServiceService(process.env.CUSTOMER_SERVICE_API_KEY || '');

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

export interface CustomerTicket {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
export interface CustomerTicket {;
  id:string,;
  customerId:string,;
  subject:string,;
  description:string,;
  priority:'low' | 'medium' | 'high' | 'urgent',;
  status:'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed',;
  category:string,;
  assignedTo?:string,;
  createdAt:Date,;
  updatedAt:Date,;
  resolvedAt?:Date,;
  customerSatisfaction?:number,;
  tags:string[],;
  attachments:string[],;
  conversationHistory:CustomerMessage[];
}
;
export interface CustomerMessage {;
  id:string,;
  ticketId:string,;
  senderId:string,;
  senderType:'customer' | 'agent' | 'ai',;
  message:string,;
  timestamp:Date,;
  attachments?:string[],;
  sentiment:'positive' | 'neutral' | 'negative',;
  intent:string,;
  confidence:number;
}
;
export interface CustomerProfile {;
  id:string,;
  email:string,;
  name:string,;
  phone?:string,;
  company?:string,;
  plan:string,;
  totalTickets:number,;
  resolvedTickets:number,;
  averageResolutionTime:number,;
  customerSatisfaction:number,;
  lastContact:Date,;
  preferences:{;
    communicationChannel:'email' | 'chat' | 'phone',;
    language:string,;
    timezone:string;
  },;
  tags:string[];
}
;
export interface AIResponse {;
  id:string,;
  ticketId:string,;
  response:string,;
  confidence:number,;
  suggestedActions:string[],;
  nextSteps:string[],;
  requiresHumanReview:boolean,;
  generatedAt:Date;
}
;
export interface CustomerServiceMetrics {;
  totalTickets:number,;
  openTickets:number,;
  resolvedTickets:number,;
  averageResolutionTime:number,;
  customerSatisfaction:number,;
  firstResponseTime:number,;
  ticketVolumeByCategory:Record<string number>,;
  agentPerformance:Record<string {;
    ticketsResolved:number,;
    averageResolutionTime:number,;
    customerSatisfaction:number;
  }>,;}
;
export interface CustomerServiceRequest {;
  customerId:string,;
  subject:string,;
  description:string,;
  priority:'low' | 'medium' | 'high' | 'urgent',;
  category:string,;
  attachments?:string[],;
  preferredChannel?:'email' | 'chat' | 'phone';
}
;
export interface CustomerServiceResponse {;
  ticketId:string,;
  status:'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated',;
  aiResponse?:AIResponse,;
  estimatedResolutionTime:string,;
  nextSteps:string[],;
  assignedAgent?:string;
}
;
export class AICustomerServiceService {;
  private apiKey:string,;
  private baseUrl:string,;
;
  constructor(apiKey:string, baseUrl:string = 'https://api.ziontechgroup.com') {;
=======
}
;
export interface CustomerMessage {;
  id: string,;
  ticketId: string,;
  senderId: string,;
  senderType: 'customer' | 'agent' | 'ai',;
  message: string,;
  timestamp: Date,;
  attachments?: string[],;
  sentiment: 'positive' | 'neutral' | 'negative',;
  intent: string,;
  confidence: number;
}
;
export interface CustomerProfile {;
  id: string,;
  email: string,;
  name: string,;
  phone?: string,;
  company?: string,;
  plan: string,;
  totalTickets: number,;
  resolvedTickets: number,;
  averageResolutionTime: number,;
  customerSatisfaction: number,;
  lastContact: Date,;
  preferences: {;
    communicationChannel: 'email' | 'chat' | 'phone',;
    language: string,;
    timezone: string;
  },;
  tags: string[];
}
;
export interface AIResponse {;
  id: string,;
  ticketId: string,;
  response: string,;
  confidence: number,;
  suggestedActions: string[],;
  nextSteps: string[],;
  requiresHumanReview: boolean,;
  generatedAt: Date;
}
;
export interface CustomerServiceMetrics {;
  totalTickets: number,;
  openTickets: number,;
  resolvedTickets: number,;
  averageResolutionTime: number,;
  customerSatisfaction: number,;
  firstResponseTime: number,;
  ticketVolumeByCategory: Record<string number>,;
  agentPerformance: Record<string {;
    ticketsResolved: number,;
    averageResolutionTime: number,;
    customerSatisfaction: number;
  }>;
}
;
export interface CustomerServiceRequest {;
  customerId: string,;
  subject: string,;
  description: string,;
  priority: 'low' | 'medium' | 'high' | 'urgent',;
  category: string,;
  attachments?: string[],;
  preferredChannel?: 'email' | 'chat' | 'phone';
}
;
export interface CustomerServiceResponse {;
  ticketId: string,;
  status: 'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated',;
  aiResponse?: AIResponse,;
  estimatedResolutionTime: string,;
  nextSteps: string[],;
  assignedAgent?: string;
}
;
export class AICustomerServiceService {;
  private apiKey: string,;
  private baseUrl: string,;
  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    this.apiKey = apiKey,;
    this.baseUrl = baseUrl;
  }
;
<<<<<<< HEAD
  async createTicket(request:CustomerServiceRequest):Promise<CustomerServiceResponse> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets`, {;
        method:'POST',;
        headers:{;
          'Content-Type':'application/jsonAuthorization':`Bearer ${this.apiKey}`},;
        body:JSON.stringify(request)}),;
;
      if (!response.ok) {;
        throw new Error(`Create ticket API error:${response.statusText}`),;
      }
;
      const data = await response.json(),;
      return data,;
    } catch (error) {;
      console.error('Error creating ticket:', error),;
      throw error,;
    }
  }
;
  async getTicket(ticketId:string):Promise<CustomerTicket> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}`, {;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Get ticket API error:${response.statusText}`),;
=======
  async createTicket(request: CustomerServiceRequest): Promise<CustomerServiceResponse> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets`, {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`},;
        body: JSON.stringify(request)}),;
      if (!response.ok) {;
        throw new Error(`Create ticket API error: ${response.statusText}`);
      }
;
      const data = await response.json(),;
      return data;
    } catch (error) {;
      console.error('Error creating ticket:', error),;
      throw error;
    }
  }
;
  async getTicket(ticketId: string): Promise<CustomerTicket> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}`, {;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Get ticket API error: ${response.statusText}`);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
;
      const data = await response.json(),;
      return {;
        ...data,;
<<<<<<< HEAD
        createdAt:new Date(data.createdAt),;
        updatedAt:new Date(data.updatedAt),;
        resolvedAt:data.resolvedAt ? new Date(data.resolvedAt) :undefined,;
        conversationHistory:data.conversationHistory.map((msg:any) => ({;
          ...msg,;
          timestamp:new Date(msg.timestamp)}))},;
    } catch (error) {;
      console.error('Error getting ticket:', error),;
      throw error,;
    }
  }
;
  async updateTicket(ticketId:string, updates:Partial<CustomerTicket>):Promise<CustomerTicket> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}`, {;
        method:'PATCH',;
        headers:{;
          'Content-Type':'application/jsonAuthorization':`Bearer ${this.apiKey}`},;
        body:JSON.stringify(updates)}),;
;
      if (!response.ok) {;
        throw new Error(`Update ticket API error:${response.statusText}`),;
=======
        createdAt: new Date(data.createdAt),;
        updatedAt: new Date(data.updatedAt),;
        resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined,;
        conversationHistory: data.conversationHistory.map((msg: any) => ({;
          ...msg,;
          timestamp: new Date(msg.timestamp)}))}
    } catch (error) {;
      console.error('Error getting ticket:', error),;
      throw error;
    }
  }
;
  async updateTicket(ticketId: string, updates: Partial<CustomerTicket>): Promise<CustomerTicket> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}`, {;
        method: 'PATCH',;
        headers: {;
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`},;
        body: JSON.stringify(updates)}),;
      if (!response.ok) {;
        throw new Error(`Update ticket API error: ${response.statusText}`);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
;
      const data = await response.json(),;
      return {;
        ...data,;
<<<<<<< HEAD
        createdAt:new Date(data.createdAt),;
        updatedAt:new Date(data.updatedAt),;
        resolvedAt:data.resolvedAt ? new Date(data.resolvedAt) :undefined,;
        conversationHistory:data.conversationHistory.map((msg:any) => ({;
          ...msg,;
          timestamp:new Date(msg.timestamp)}))},;
    } catch (error) {;
      console.error('Error updating ticket:', error),;
      throw error,;
    }
  }
;
  async addMessage(ticketId:string, message:Omit<CustomerMessage 'id' | 'timestamp'>):Promise<CustomerMessage> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}/messages`, {;
        method:'POST',;
        headers:{;
          'Content-Type':'application/jsonAuthorization':`Bearer ${this.apiKey}`},;
        body:JSON.stringify(message)}),;
;
      if (!response.ok) {;
        throw new Error(`Add message API error:${response.statusText}`),;
=======
        createdAt: new Date(data.createdAt),;
        updatedAt: new Date(data.updatedAt),;
        resolvedAt: data.resolvedAt ? new Date(data.resolvedAt) : undefined,;
        conversationHistory: data.conversationHistory.map((msg: any) => ({;
          ...msg,;
          timestamp: new Date(msg.timestamp)}))}
    } catch (error) {;
      console.error('Error updating ticket:', error),;
      throw error;
    }
  }
;
  async addMessage(ticketId: string, message: Omit<CustomerMessage 'id' | 'timestamp'>): Promise<CustomerMessage> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}/messages`, {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`},;
        body: JSON.stringify(message)}),;
      if (!response.ok) {;
        throw new Error(`Add message API error: ${response.statusText}`);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
;
      const data = await response.json(),;
      return {;
        ...data,;
<<<<<<< HEAD
        timestamp:new Date(data.timestamp)},;
    } catch (error) {;
      console.error('Error adding message:', error),;
      throw error,;
    }
  }
;
  async generateAIResponse(ticketId:string):Promise<AIResponse> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}/ai-response`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`AI response API error:${response.statusText}`),;
=======
        timestamp: new Date(data.timestamp)}
    } catch (error) {;
      console.error('Error adding message:', error),;
      throw error;
    }
  }
;
  async generateAIResponse(ticketId: string): Promise<AIResponse> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/${ticketId}/ai-response`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`AI response API error: ${response.statusText}`);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
;
      const data = await response.json(),;
      return {;
        ...data,;
<<<<<<< HEAD
        generatedAt:new Date(data.generatedAt)},;
    } catch (error) {;
      console.error('Error generating AI response:', error),;
      throw error,;
    }
  }
;
  async getCustomerProfile(customerId:string):Promise<CustomerProfile> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/customers/${customerId}`, {;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Get customer profile API error:${response.statusText}`),;
=======
        generatedAt: new Date(data.generatedAt)}
    } catch (error) {;
      console.error('Error generating AI response:', error),;
      throw error;
    }
  }
;
  async getCustomerProfile(customerId: string): Promise<CustomerProfile> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/customers/${customerId}`, {;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Get customer profile API error: ${response.statusText}`);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
;
      const data = await response.json(),;
      return {;
        ...data,;
<<<<<<< HEAD
        lastContact:new Date(data.lastContact)},;
    } catch (error) {;
      console.error('Error getting customer profile:', error),;
      throw error,;
    }
  }
;
  async getMetrics(timeframe:string = '30d'):Promise<CustomerServiceMetrics> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/metrics?timeframe=${timeframe}`, {;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Get metrics API error:${response.statusText}`),;
      }
;
      return await response.json(),;
    } catch (error) {;
      console.error('Error getting metrics:', error),;
      throw error,;
    }
  }
;
  async searchTickets(query:string, filters?:Record<string any>):Promise<CustomerTicket[]> {;
    try {;
      const params = new URLSearchParams({ query, ...filters }),;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/search?${params}`, {;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Search tickets API error:${response.statusText}`),;
      }
;
      const data = await response.json(),;
      return data.tickets.map((ticket:any) => ({;
        ...ticket,;
        createdAt:new Date(ticket.createdAt),;
        updatedAt:new Date(ticket.updatedAt),;
        resolvedAt:ticket.resolvedAt ? new Date(ticket.resolvedAt) :undefined,;
        conversationHistory:ticket.conversationHistory.map((msg:any) => ({;
          ...msg,;
          timestamp:new Date(msg.timestamp)}))})),;
    } catch (error) {;
      console.error('Error searching tickets:', error),;
      throw error,;
    }
  }
;
  async autoAssignTickets():Promise<{ assigned:number, failed:number }> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/auto-assign`, {;
        method:'POST',;
        headers:{;
          'Authorization':`Bearer ${this.apiKey}`}}),;
;
      if (!response.ok) {;
        throw new Error(`Auto assign tickets API error:${response.statusText}`),;
      }
;
      return await response.json(),;
    } catch (error) {;
      console.error('Error auto-assigning tickets:', error),;
      throw error,;
    }
  }
;
  async generateCustomerServiceReport(timeframe:string, format:'pdf' | 'csv' | 'excel'):Promise<string> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/reports`, {;
        method:'POST',;
        headers:{;
          'Content-Type':'application/jsonAuthorization':`Bearer ${this.apiKey}`},;
        body:JSON.stringify({ timeframe, format })}),;
;
      if (!response.ok) {;
        throw new Error(`Generate report API error:${response.statusText}`),;
      }
;
      const data = await response.json(),;
      return data.downloadUrl,;
    } catch (error) {;
      console.error('Error generating report:', error),;
      throw error,;    }
  }
}
;
export const aiCustomerServiceService = new AICustomerServiceService(process.env.CUSTOMER_SERVICE_API_KEY || ''),
 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/services/aiCustomerServiceService.ts
=======
        lastContact: new Date(data.lastContact)}
    } catch (error) {;
      console.error('Error getting customer profile:', error),;
      throw error;
    }
  }
;
  async getMetrics(timeframe: string = '30d'): Promise<CustomerServiceMetrics> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/metrics?timeframe=${timeframe}`, {;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Get metrics API error: ${response.statusText}`);
      }
;
      return await response.json();
    } catch (error) {;
      console.error('Error getting metrics:', error),;
      throw error;
    }
  }
;
  async searchTickets(query: string, filters?: Record<string any>): Promise<CustomerTicket[]> {;
    try {;
      const params = new URLSearchParams({ query, ...filters }),;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/search?${params}`, {;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Search tickets API error: ${response.statusText}`);
      }
;
      const data = await response.json(),;
      return data.tickets.map((ticket: any) => ({;
        ...ticket,;
        createdAt: new Date(ticket.createdAt),;
        updatedAt: new Date(ticket.updatedAt),;
        resolvedAt: ticket.resolvedAt ? new Date(ticket.resolvedAt) : undefined,;
        conversationHistory: ticket.conversationHistory.map((msg: any) => ({;
          ...msg,;
          timestamp: new Date(msg.timestamp)}))}));
    } catch (error) {;
      console.error('Error searching tickets:', error),;
      throw error;
    }
  }
;
  async autoAssignTickets(): Promise<{ assigned: number, failed: number }> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/tickets/auto-assign`, {;
        method: 'POST',;
        headers: {;
          'Authorization': `Bearer ${this.apiKey}`}}),;
      if (!response.ok) {;
        throw new Error(`Auto assign tickets API error: ${response.statusText}`);
      }
;
      return await response.json();
    } catch (error) {;
      console.error('Error auto-assigning tickets:', error),;
      throw error;
    }
  }
;
  async generateCustomerServiceReport(timeframe: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {;
    try {;
      const response = await fetch(`${this.baseUrl}/api/customer-service/reports`, {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this.apiKey}`},;
        body: JSON.stringify({ timeframe, format })}),;
      if (!response.ok) {;
        throw new Error(`Generate report API error: ${response.statusText}`);
      }
;
      const data = await response.json(),;
      return data.downloadUrl;
    } catch (error) {;
      console.error('Error generating report:', error),;
      throw error;
    }
  }
}
;
export const aiCustomerServiceService = new AICustomerServiceService(process.env.CUSTOMER_SERVICE_API_KEY || '');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
