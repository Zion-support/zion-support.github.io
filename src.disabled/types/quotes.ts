export type ServiceType = 'service' | 'talent' | 'equipment' | ' export type ServiceCategory = string export type TimelineType = 'fixed' | 'flexible' export type BudgetType = 'fixed' | 'hourly' | 'range' export interface ListingItem {
  id: string;
   titl,
    e: string;
   categor,
    y: string;
   image?: string;
   description?: string} export interface ContactInfo {
  name: string;
   email: string;
   phon,
    e: string;
   compan,
    y: string} export interface Budget {
  amount: number;
   maxAmount?: number;
   typ,
    e: BudgetType} export interface QuoteFormData {
  serviceType: ServiceType;
   serviceCategory: ServiceCategory;
   specificItem: ListingItem | null;
   projectName: string;
   projectDescription: string;
   startDate?: Date;
   endDate?: Date;
   timeline: TimelineType;
   budge,
    t: Budget;
   contactInf,
    o: ContactInfo} export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived' export interface QuoteRequest {
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
   created_a,
    t: string;
   updated_a,
    t: string} '';";"