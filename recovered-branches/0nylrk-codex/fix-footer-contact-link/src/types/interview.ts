
export type InterviewStatus =
  | 'requested'
  | 'confirmed'
  | 'declined'
  | 'rescheduled'
  | 'completed'
  | 'cancelled'
export type InterviewType = 'video' | 'phone' | 'in-person'
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app'