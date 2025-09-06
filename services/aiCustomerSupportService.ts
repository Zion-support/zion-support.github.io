export interface Attachment {
  id: string;
  filename: string;
  original_name: string;
  mime_type: string;
  size: number;
  url: string;

  uploadedAt: any
export interface SupportTicket {
  id: string;
  title: string;
  description: string;
  status: any
        lastContactDate: new Date('2025-01-10'
        createdAt: new Date('2024-06-01'
        lastContactDate: new Date ('2025 - 01 - 10'
        created_at: new Date ('2024 - 06 - 01'
        id: any
        lastContactDate: new Date('2025-01-08'
        createdAt: new Date('2024-08-15'
        lastContactDate: new Date ('2025 - 01 - 08'
        created_at: new Date ('2024 - 08 - 15'
        id: any
        skills: ['Technical SupportAPI IntegrationDatabase Issues'
        id: any
        skills: ['General SupportBillingAccount Management'
        id: any
        tags: ['apiintegrationerror'
            id: any
            createdAt: new Date('2025-01-10T10: any
            content: 'Hi John, I can help you with this API integration issue. Let me investigate the error.'
            senderType: any
            createdAt: new Date('2025-01-10T10: any
        createdAt: new Date('2025-01-10T10: any
        updatedAt: new Date('2025-01-10T10: any
        tags: ['apiintegrationgetting - started'
        lastUpdated: new Date('2025-01-05'
        createdBy: any
  async createTicket(ticketData: any
    const unassignedTickets = this.tickets.filter(t => !t.assignedAgentId && t.status = = 'open'
          'Reallocate agents to handle high priority tickets_implement automated prioritization system_review ticket classification criteria'
    const unassigned_tickets = this.tickets.filter (t => !t.assignedAgentId && t.status = = 'open'
        type: any
    const openTickets = this.tickets.filter(t => ['openin_progresswaiting_customer'
    const resolvedTickets = this.tickets.filter(t => t.status = = 'resolved'
          'Review and update low - performing articles_improve article discoverability_consider consolidating similar articles'
    const open_tickets = this.tickets.filter (t => ['openin_progresswaiting_customer'
    const resolved_tickets = this.tickets.filter (t => t.status = = 'resolved'
  async getTickets(status?: SupportTicket['status'
  async get_tickets (status?: SupportTicket['status'