 private initializeSampleData () {
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

