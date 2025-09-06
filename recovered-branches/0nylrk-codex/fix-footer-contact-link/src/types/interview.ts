<<<<<<< HEAD

export type InterviewStatus =
  | 'requested'
  | 'confirmed'
  | 'declined'
  | 'rescheduled'
  | 'completed'
export type InterviewStatus =;
  | 'requested';
  | 'confirmed';
  | 'declined';
  | 'rescheduled';
  | 'completed';
  | 'cancelled';
;
export type InterviewType = 'video' | 'phone' | 'in - person';
;
export type MeetingPlatform = 'zoom' | 'google - meet' | 'teams' | 'other' | 'in - app';
;

export interface Interview {
export type InterviewStatus = 
  | 'requested' 
  | 'confirmed' 
  | 'declined' 
  | 'rescheduled' 
  | 'completed' ;
=======
export type InterviewStatus =
  | "requested"
  | "confirmed"
  | "declined"
  | "rescheduled"
  | "completed"
  | "cancelled";

export type InterviewType = "video" | "phone" | "in-person";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

export type MeetingPlatform =
  | "zoom"
  | "google-meet"
  | "teams"
  | "other"
  | "in-app";


export interface Interview {;

<<<<<<< HEAD
export interface Interview {
=======
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  | 'cancelled';
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';
export interface Interview {

export interface Interview {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface Interview {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  id: string;
  client_id: string;
  talent_id: string;
  scheduled_date: string;
  end_time: string;
  duration_minutes: number;
  status: InterviewStatus;
  notes?: string;
  meeting_link?: string;
  meeting_platform?: MeetingPlatform;
  created_at: string;
  updated_at: string;
  title?: string;
  interview_type: InterviewType;
  client_name?: string;
  talent_name?: string;
<<<<<<< HEAD
=======
  client_avatar?: string;
  talent_avatar?: string;
}


export interface InterviewRequest {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  client_avatar?: string
  talent_avatar?: string
}
export interface InterviewRequest {

export interface InterviewRequest {;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface InterviewRequest {
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  talent_id: string;
  client_id: string;
  scheduled_date: string;
  duration_minutes: number;
  notes?: string;
  meeting_link?: string;
  meeting_platform?: MeetingPlatform;
<<<<<<< HEAD
  interview_type: InterviewType
  title?: string
}
export interface InterviewResponse {

export interface InterviewResponse {;
=======
  interview_type: InterviewType;
  title?: string;
}


export interface InterviewResponse {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  interview_id: string;
  status: InterviewStatus;
  alternative_date?: string;
  message?: string;
}
<<<<<<< HEAD
;
  interview_id: string;
  status: InterviewStatus;

  alternative_date?: string,
  message?: string;

}
export interface InterviewResponse {
  interview_id: string;
  status: InterviewStatus;
}
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
