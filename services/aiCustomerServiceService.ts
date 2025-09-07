export interface CustomerTicket {




export interface CustomerTicket {

export interface CustomerTicket {
export interface CustomerTicket {;
  id: string;
  customerId: string;
  subject: string,
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed';
  category: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  customerSatisfaction?: number;

  id: string;
  ticketId: string;
  senderId: string;
  senderType: 'customer' | 'agent' | 'ai';

  message: string;
  timestamp: Date;
  attachments?: string[];
  sentiment: 'positive' | 'neutral' | 'negative';


  tags: string[];  message: string;
  timestamp: Date;
  attachments?: string[];
  sentiment: 'positive' | 'neutral' | 'negative';}
export interface CustomerProfile {}
export interface CustomerProfile {
export interface AIResponse {
  id: string;
  ticket_id: string;
  response: string;
  confidence: number;










  suggested_actions: string[];
  next_steps: string[];
  requiresHumanReview: boolean,
  generated_at: Date;










}
export interface CustomerServiceMetrics {
  total_tickets: number;
  open_tickets: number;
  resolved_tickets: number;
  averageResolutionTime: number;






    ticketsResolved: number
    averageResolutionTime: number,

    customerSatisfaction: number
  }>

    ticketsResolved: number
    averageResolutionTime: number,
    customerSatisfaction: number
  }>





  customer_satisfaction: number;
}  customer_satisfaction: number;
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

}
export interface CustomerServiceRequest {
  customer_id: string;
  // TODO: Implement
}
export interface CustomerTicket {;
  id: string;,
  customerId: string;
  subject: string;,

  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';','
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed';'
  category: string;
  assignedTo?: string;
  createdAt: Date;,
  updatedAt: Date;

  resolvedAt?: Date;
  customerSatisfaction?: number;
  tags: string[];,

  attachments: string[],
  conversation_history: CustomerMessage[];}
}
}
export interface CustomerMessage {
  // TODO: Implement
}
  id: string;,
  ticket_id: string;
  sender_id: string;,'
  sender_type: 'customer' | 'agent' | 'ai';'
  message: string;,
  timestamp: Date;
  attachments?: string[];'
  sentiment: 'positive' | 'neutral' | 'negative';',
  intent: string,
  confidence: number;}

}

export interface CustomerProfile {
  // TODO: Implement
}

}
export interface CustomerProfile {}
export interface CustomerProfile {
  // TODO: Implement
}
  intent: string,
  confidence: number;}
}
}
export interface CustomerProfile {
  // TODO: Implement
}
  id: string;,
  email: string;
  name: string;
  phone?: string;
  company?: string;
  plan: string;,
  total_tickets: number;
  resolved_tickets: number;,
  averageResolutionTime: number;


  }
  tags: string[];,
  tags: string[];


}
export interface AIResponse {

}
  id: string;,
  ticket_id: string;
  response: string;,
  confidence: number;


  suggested_actions: string[];,
  next_steps: string[];
  requiresHumanReview: boolean,
  generated_at: Date;
}
}
}
export interface CustomerServiceMetrics {
  // TODO: Implement
}
  total_tickets: number;,
  open_tickets: number;
  resolved_tickets: number;,
  averageResolutionTime: number;

  }>
  customer_satisfaction: number;,
  firstResponseTime: number,
  ticketVolumeByCategory: Record < string, number>;
  agent_performance: Record < string, {

    tickets_resolved: number;,
  averageResolutionTime: number,
    customer_satisfaction: number;

  }>;
  customer_satisfaction: number;
}  customer_satisfaction: number;
  firstResponseTime: number,ticketVolumeByCategory: Record < string, number>;
  agent_performance: Record < string, {tickets_resolved: number;}
    averageResolutionTime: number,customer_satisfaction: number;}
  }>;}
export interface CustomerServiceRequest  {customer_id: string;}
}

export interface CustomerServiceRequest {

}
export interface CustomerServiceRequest {
  customerId: string;}
  ticketId: string;
export interface CustomerServiceResponse {
  ticket_id: string;
  status: 'created' | 'ai_responding' | 'assigned_to_agent' | 'escalated';

