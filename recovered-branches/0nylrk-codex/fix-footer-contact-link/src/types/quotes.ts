<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export type ServiceType = "service" | "talent" | "equipment" | "";
export type ServiceCategory = string;"
export type TimelineType = "fixed" | "flexible";"
export type BudgetType = "fixed" | "hourly" | "range";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface ListingItem {
  id: string;
  title: string;
  category: string
  image?: string
}
export interface ContactInfo {

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface ListingItem {;
  id: string;
  title: string;
  category: string,
  image?: string
}

export interface ContactInfo {;
  name: string;
  email: string;
  phone: string
  company: string
}

;
export interface ListingItem {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

export interface ListingItem {};
  id: string;
  title: string;
  category: string;
  image?: string;
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export interface ListingItem {;

  id: string;
  title: string;
  category: string;
  image?: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}


export interface ContactInfo {;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  name: string;
  email: string;
  phone: string;
  company: string;
}

  phone: string,
  company: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
export interface QuoteFormData {
  service_type: ServiceType;
  service_category: ServiceCategory;
  specific_item: ListingItem | null;
  project_name: string;
  project_description: string;
  start_date?: Date;
  end_date?: Date;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


export interface Budget {;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  name: string;
  email: string;
  phone: string
  company: string
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface Budget {


export interface Budget {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface Budget {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface Budget {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface Budget {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  amount: number;
  maxAmount?: number;
  type: BudgetType;
}
<<<<<<< HEAD
export interface QuoteFormData {

<<<<<<< HEAD
export interface QuoteFormData {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


export interface QuoteFormData {;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface QuoteFormData {

export interface QuoteFormData {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface QuoteFormData {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  serviceType: ServiceType;
  serviceCategory: ServiceCategory;
  specificItem: ListingItem | null;
  projectName: string;
  projectDescription: string;
  startDate?: Date;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  endDate?: Date;

=======
  endDate?: Date;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  timeline: TimelineType;
  budget: Budget;
  contactInfo: ContactInfo;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  budget: Budget,
  contact_info: ContactInfo;
}
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface QuoteRequest {;
export interface QuoteRequest {
<<<<<<< HEAD
=======
=======
;
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type QuoteStatus =
  | "new"
  | "in_review"
  | "accepted"
  | "responded"
  | "closed"
<<<<<<< HEAD
=======
export type QuoteStatus ="
  | "new""
  | "in_review""
  | "accepted""
  | "responded""
  | "closed"";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  | "archived";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
=======
  endDate?: Date;  timeline: TimelineType;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface QuoteRequest {

=======
export interface QuoteRequest {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export interface QuoteRequest {;
<<<<<<< HEAD


  timeline: TimelineType;
<<<<<<< HEAD
export interface QuoteRequest {
<<<<<<< HEAD

export interface QuoteRequest {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface QuoteRequest {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  endDate?: Date;  timeline: TimelineType;
export interface QuoteRequest {

export interface QuoteRequest {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  | "archived";

export interface QuoteRequest {


export interface QuoteRequest {;

  timeline: TimelineType;
export interface QuoteRequest {

export interface QuoteRequest {;
  id: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

  created_at: string,
  updated_at: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  created_at: string
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  updated_at: string
}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface ListingItem {
  id: string,
  title: string,
  category: string,
  image?: string
export type ServiceType = "service" | "talent" | "equipment" | "",;
export type ServiceCategory = string,;
export type TimelineType = "fixed" | "flexible",;
export type BudgetType = "fixed" | "hourly" | "range",;
export interface ListingItem {;
  id: string,;
  title: string,;
  category: string,;
  image?: string;
}
;
export interface ContactInfo {;
  name: string,;
  email: string,;
  phone: string,;
  company: string;
}
;
export interface Budget {;
  amount: number,;
  maxAmount?: number,;
  type: BudgetType;
}
;
export interface QuoteFormData {;
  serviceType: ServiceType,;
  serviceCategory: ServiceCategory,;
  specificItem: ListingItem | null,;
  projectName: string,;
  projectDescription: string,;
  startDate?: Date,;
  endDate?: Date,;
  timeline: TimelineType,;
  budget: Budget,;
  contactInfo: ContactInfo;
}
;
export type QuoteStatus = 'new' | 'in_review' | 'accepted' | 'responded' | 'closed' | 'archived',;
export interface QuoteRequest {;
  id: string,;
  talent_id: string,;
  talent_name?: string,;
  requester_id?: string,;
  requester_name: string,;
  requester_email: string,;
  project_name: string,;
  project_summary: string,;
  project_description?: string,;
  budget_min?: number,;
  budget_max?: number,;
  budget_display?: string,;
  timeline: string,;
  start_date?: string,;
  status: QuoteStatus,;
  is_archived: boolean,;
  viewed_at?: string,;
  replied_at?: string,;
  created_at: string;
  updated_at: string;
}
<<<<<<< HEAD
;
  created_at: string,
  updated_at: string;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  created_at: string;
  updated_at: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  created_at: string;
  updated_at: string;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
