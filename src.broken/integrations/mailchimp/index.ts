
const _apiKey =
  import.meta.env.VITE_MAILCHIMP_API_KEY ||
  (import.meta.env as any).NEXT_PUBLIC_MAILCHIMP_API_KEY ||
  process.env.MAILCHIMP_API_KEY;

const _listId =
  import.meta.env.VITE_MAILCHIMP_LIST_ID ||
  (import.meta.env as any).NEXT_PUBLIC_MAILCHIMP_LIST_ID ||
  process.env.MAILCHIMP_LIST_ID;

export const _mailchimpService =
  apiKey && listId ? new MailchimpService(apiKey, listId) : undefined;

export type {_MailchimpMember} from './MailchimpService';
