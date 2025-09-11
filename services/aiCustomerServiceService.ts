  attachments: string[],
  conversation_history: CustomerMessage[];

  conversationHistory: CustomerMessage[]
}
export interface CustomerMessage {

export interface CustomerMessage {;
  id: string;
  ticketId: string;
  senderId: string;
  senderType: 'customer' | 'agent' | 'ai';
=======  message: string;
  timestamp: Date;
  attachments?: string[];
  sentiment: 'positive' | 'neutral' | 'negative';
  intent: string,
  confidence: number;

}
export interface CustomerProfile {

  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  category: string;
  preferredChannel?: 'email' | 'chat' | 'phone'
}
export interface CustomerServiceResponse {

export interface CustomerServiceResponse {;
  ticketId: string;
=======

  attachments?: string[],
  preferred_channel?: 'email' | 'chat' | 'phone';

}
export interface CustomerServiceResponse {
  ticket_id: string;  status: 'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated';
  ai_response?: AIResponse;
  estimatedResolutionTime: string;

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

  }
}
export interface CustomerServiceResponse {
  ticket_id: string;
  status: 'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated';
  ai_response?: AIResponse;
  estimatedResolutionTime: string;

  constructor(apiKey: string, baseUrl: string = 'https://api && api.ziontechgroup.com') {
    this && this.apiKey = apiKey,
    this && this.baseUrl = baseUrl

  }
  async createTicket(request: CustomerServiceRequest): Promise<CustomerServiceResponse> {
    try {
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this && this.apiKey}`};
        body: JSON && JSON.stringify(request)});
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this && this.apiKey}`};
        body: JSON && JSON.stringify(request)});

      if (!response && response.ok) {
        throw new Error(`Create ticket API error: ${response && response.statusText}`)
      }

      const data = await response && response.json();

      return data
    } catch (error) {
=======
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets/${ticketId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${this && this.apiKey}`};
        body: JSON && JSON.stringify(message)});

      if (!response && response.ok) {
        throw new Error(`Add message API error: ${response && response.statusText}`)
      const data = await response && response.json();
      return {
        ...data;
        timestamp: new Date(data && data.timestamp)}
    } catch (error) {
      console && console.error('Error adding message:', error);
      const data = await response && response.json();

      return {
        ...data;
        timestamp: new Date(data && data.timestamp)}
    } catch (error) {
      console && console.error('Error adding message:', error);
      throw error
    }
  }
  async generateAIResponse(ticketId: string): Promise<AIResponse> {
    try {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const response = await fetch(`${this && this.baseUrl}/api/customer-service/tickets/${ticketId}/ai-response`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this && this.apiKey}`}});

      if (!response && response.ok) {
        throw new Error(`AI response API error: ${response && response.statusText}`)
      const data = await response && response.json();
      return {
        ...data;
        generatedAt: new Date(data && data.generatedAt)}
    } catch (error) {
      console && console.error('Error generating AI response:', error);
      const data = await response && response.json();

      return {
        ...data;
        generatedAt: new Date(data && data.generatedAt)}
    } catch (error) {
      console && console.error('Error generating AI response:', error);
      throw error
    }
  }
  async getCustomerProfile(customerId: string): Promise<CustomerProfile> {
    try {
