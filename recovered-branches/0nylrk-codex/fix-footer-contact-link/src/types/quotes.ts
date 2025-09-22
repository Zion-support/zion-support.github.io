<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export interface ListingItem {;

  id: string;
  title: string;
  category: string;
  image?: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

export interface ContactInfo {;

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

export interface Budget {;

  name: string;
  email: string;
  phone: string
  company: string
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface Budget {

export interface Budget {;
<<<<<<< HEAD
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
export interface QuoteFormData {

export interface QuoteFormData {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
  endDate?: Date;
  timeline: TimelineType;
  budget: Budget;
  contactInfo: ContactInfo;
}

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
export type QuoteStatus =
  | "new"
  | "in_review"
  | "accepted"
  | "responded"
  | "closed"

  | "archived";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

export interface QuoteRequest {
export interface QuoteRequest {;
timeline: TimelineType;
export interface QuoteRequest {
<<<<<<< HEAD

export interface QuoteRequest {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

  updated_at: string
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
