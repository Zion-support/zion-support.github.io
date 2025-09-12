export type AdminQuoteStatus = $2;
export type TalentQuoteStatus = $2;
export type QuoteRequest = $2;
  talentSlug: string, // maps to TALENT_PROFILES.slug
  talentName: string,
  requesterName: string,
  summary: string,
  budgetUsd: number,
  timeline?: string,
  createdAt: string, // ISO date
  adminStatus: AdminQuoteStatus,
  talentStatus: TalentQuoteStatus,
  unread: boolean,
  archived?: boolean,
  details?: string
},

export type QuoteFilters = $2;
  startDate?: string | null, // ISO
  endDate?: string | null, // ISO
  talentSlug?: string | 'All',
  search?: string
},