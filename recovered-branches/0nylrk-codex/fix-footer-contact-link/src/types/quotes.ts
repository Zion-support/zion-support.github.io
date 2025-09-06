export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;
export type TimelineType = "fixed" | "flexible";
export type BudgetType = "fixed" | "hourly" | "range";
}
export interface ContactInfo {
  name: string;
  email: string;
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
}