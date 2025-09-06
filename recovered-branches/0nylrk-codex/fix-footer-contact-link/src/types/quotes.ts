

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;
export type TimelineType = "fixed" | "flexible";
export type BudgetType = "fixed" | "hourly" | "range";

}


export interface ContactInfo {;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  name: string;
  email: string;

  phone: string,
  company: string;
}

  amount: number;
  maxAmount?: number
  type: BudgetType
}

  serviceType: ServiceType;
  serviceCategory: ServiceCategory;
  specificItem: ListingItem | null;
  projectName: string;
  projectDescription: string;
  startDate?: Date;
  endDate?: Date;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  timeline: TimelineType;

  budget: Budget,
  contact_info: ContactInfo;
}
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

  updated_at: string
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
