export type AvailabilityStatus = $2;
export type PortfolioItem = $2;
  url: string},

export type FieldTranslations = $2;
export type TalentTranslations = $2;
  summary?: FieldTranslations,
  bio?: FieldTranslations,
  category?: FieldTranslations
},

export type TalentProfile = $2;
  slug: string,
  name: string,
  title: string,
  category?: string,
  location: string,
  timezone?: string,
  region?: string,
  skills: string[],
  summary: string, // AI-generated
  bio?: string, // user-provided raw bio
  hourlyRateUsd?: number,
  requestQuote?: boolean,
  availability: AvailabilityStatus,
  profileImageUrl?: string,
  videoUrl?: string,
  portfolio?: PortfolioItem[],
  verified?: boolean,
  rating?: number, // 0-5
  reviewsCount?: number,
  createdAt?: string,
  // i18n
  originalLanguage?: string, // ISO 639-1
  translations?: TalentTranslations
},

export type TalentFilters = $2;
  availability?: AvailabilityStatus[],
  minRate?: number,
  maxRate?: number,
  region?: string[],
  minRating?: number
},