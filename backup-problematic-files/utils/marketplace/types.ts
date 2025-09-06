export type PaymentTermsType = "hourly" | "fixed" | "milestone",

export type Milestone = {
  id: string,
  title: string,
  dueDateIso?: string,
  amountUsd?: number,
  status?: "planned" | "in-progress" | "done"
},

export type OfferStatus =
  | "SENT"
  | "CONFIRMED"
  | "CHANGES_REQUESTED"
  | "DECLINED",

export type Offer = {
  id: string,
  createdAtIso: string,
  clientId: string,
  talentSlug: string,
  startDateIso: string,
  scopeSummary: string,
  paymentTerms: PaymentTerms,
  agreementUrl?: string,
  status: OfferStatus,
  changeRequestNote?: string,
  projectId?: string
},

export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ARCHIVED",

export type ProjectDocument = {
  id: string,
  name: string,
  url?: string,
  uploadedAtIso: string
},

export type ProjectNote = {
  id: string,
  authorId: string,
  authorRole: "client" | "talent",
  content: string,
  createdAtIso: string
},
