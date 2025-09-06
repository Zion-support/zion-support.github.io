<<<<<<< HEAD


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;
export type TimelineType = "fixed" | "flexible";
export type BudgetType = "fixed" | "hourly" | "range";
<<<<<<< HEAD
export interface ListingItem {
  id: string;
  title: string;
  category: string
  image?: string
=======
;
export interface ListingItem {
  id: string;
  title: string;
  category: string,
  image?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface ContactInfo {
  name: string;
  email: string;
<<<<<<< HEAD
  phone: string
  company: string
}
export interface Budget {
  amount: number;
  maxAmount?: number
  type: BudgetType
=======
  phone: string,
  company: string;
}
export interface Budget {
  amount: number;
  max_amount?: number,
  type: BudgetType;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface QuoteFormData {
  service_type: ServiceType;
  service_category: ServiceCategory;
  specific_item: ListingItem | null;
  project_name: string;
  project_description: string;
  start_date?: Date;
  end_date?: Date;
  timeline: TimelineType;
<<<<<<< HEAD
  budget: Budget
  contactInfo: ContactInfo
}
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived';
=======
  budget: Budget,
  contact_info: ContactInfo;
}
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface QuoteRequest {
  id: string;
  talent_id: string;
  talent_name?: string;
  requester_id?: string;
  requester_name: string;
  requester_email: string;
  project_name: string;
  project_summary: string;
  project_description?: string;
  budget_min?: number;
  budget_max?: number;
  budget_display?: string;
  timeline: string;
  start_date?: string;
  status: QuoteStatus;
  is_archived: boolean;
  viewed_at?: string;
  replied_at?: string;
<<<<<<< HEAD
  created_at: string

  updated_at: string
=======
  created_at: string,
  updated_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}