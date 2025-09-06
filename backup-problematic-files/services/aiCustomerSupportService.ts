export interface Attachment {;
  id:string,;
  filename:string,;
  originalName:string,;
  mimeType:string,;
  size:number,;
  url:string,;
  uploadedAt:Date,;
  uploadedBy:string;

export interface SupportTicket {;
  id:string,;
  title:string,;
  description:string,;
  status: any
        lastContactDate:new Date('2025-01-10'
        createdAt:new Date('2024-06-01'
        id: any
        lastContactDate:new Date('2025-01-08'
        createdAt:new Date('2024-08-15'
        id: any
        skills:['Technical SupportAPI Integration', 'Database Issues'
        id: any
        skills:['General SupportBilling', 'Account Management'
        id: any
        tags:['apiintegration', 'error'
            id: any
            createdAt:new Date('2025-01-10T10: any
            content:'Hi John, I can help you with this API integration issue. Let me investigate the error.'
            senderType: any
            createdAt:new Date('2025-01-10T10: any
        createdAt:new Date('2025-01-10T10: any
        updatedAt:new Date('2025-01-10T10: any
        tags:['apiintegration', 'getting-started'
        lastUpdated:new Date('2025-01-05'
        createdBy: any
  async createTicket(ticketData: any
    const unassignedTickets = this.tickets.filter(t => !t.assignedAgentId && t.status = = 'open'
        type: any
    const openTickets = this.tickets.filter(t => ['openin_progress', 'waiting_customer'
    const resolvedTickets = this.tickets.filter(t => t.status = = 'resolved'
  async getTickets(status?:SupportTicket['status'
  id: 'msg 001', content: 'Getting 500 error when trying to integrate with our CRM system. Can you help?', senderType: 'customer', senderId: 'cust 001', isInternal: false, createdAt: new Date ('2025-01-10T10: any
  id: 'msg 002', content: 'Hi John, I can help you with this API integration issue. Let me investigate the error.', senderType: 'agent', senderId: 'agent 001', isInternal: false, createdAt: new Date ('2025-01-10T10: any
createdAt: new Date ('2025-01-10T10: any
updatedAt: new Date ('2025-01-10T10: any
if (status = = 'resolved'
intent: any
return this.knowledgeBase.filter (article => article.title.toLowerCase () .includes (lowerQuery) || article.content.toLowerCase () .includes (lowerQuery) || article.tags.some (tag => tag.toLowerCase () .includes (lowerQuery) //