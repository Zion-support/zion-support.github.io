
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;"
export type TimelineType = "fixed" | "flexible";"
export type BudgetType = "fixed" | "hourly" | "range";
<<<<<<< HEAD



export interface ListingItem {




=======

export interface ListingItem {
  id: string;
  title: string;
  category: string
  image?: string
}
export interface ContactInfo {

>>>>>>> origin/cursor/delete-old-data-records-6bba
export interface ListingItem {;

  id: string;
  title: string;
  category: string;
  image?: string;
<<<<<<< HEAD

}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

export interface ContactInfo {;

  name: string;
  email: string;
  phone: string;
  company: string;
}

  phone: string,
  company: string;
}

export interface Budget {;

  name: string;
  email: string;
  phone: string
  company: string
}

<<<<<<< HEAD
export interface QuoteFormData {
  service_type: ServiceType;
  service_category: ServiceCategory;
  specific_item: ListingItem | null;
  project_name: string;
  project_description: string;
  start_date?: Date;
  end_date?: Date;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

export interface Budget {

export interface Budget {;

<<<<<<< HEAD


=======
export interface Budget {

export interface Budget {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  amount: number;
  maxAmount?: number;
  type: BudgetType;
}

<<<<<<< HEAD


export interface QuoteFormData {;


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  serviceType: ServiceType;
  serviceCategory: ServiceCategory;
  specificItem: ListingItem | null;
  projectName: string;
  projectDescription: string;
  startDate?: Date;

<<<<<<< HEAD
  endDate?: Date;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  timeline: TimelineType;
  budget: Budget;
  contactInfo: ContactInfo;
}

export type QuoteStatus =
  | "new"
  | "in_review"
  | "accepted"
  | "responded"
  | "closed"

  | "archived";

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




=======
  created_at: string

  updated_at: string
}
export type ServiceType = "service" | "talent" | "equipment" | "",
export type ServiceCategory = string,
export type TimelineType = "fixed" | "flexible",
export type BudgetType = "fixed" | "hourly" | "range",


  updated_at: string
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
