import { MailchimpService } from './MailchimpService';
const apiKey = $2;
const listId = $2;
export const mailchimpService =
  apiKey && listId ? new MailchimpService(apiKey, listId) : undefined,

export type { MailchimpMember } from './MailchimpService',
