<<<<<<< HEAD
export type InterviewStatus =
  | "requested"
  | "confirmed"
  | "declined"
  | "rescheduled"
  | "completed"
  | "cancelled";

export type InterviewType = "video" | "phone" | "in-person";

=======

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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export type MeetingPlatform =
  | "zoom"
  | "google-meet"
  | "teams"
  | "other"
  | "in-app";

<<<<<<< HEAD

export interface Interview {;

  | 'cancelled';
=======
export interface Interview {;

export interface Interview {  | 'cancelled';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';
export interface Interview {

export interface Interview {;
export interface Interview {
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
  client_avatar?: string;
  talent_avatar?: string;
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface InterviewRequest {;

  client_avatar?: string
  talent_avatar?: string
}
export interface InterviewRequest {

export interface InterviewRequest {;
<<<<<<< HEAD
}
export interface InterviewRequest {
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  talent_id: string;
  client_id: string;
  scheduled_date: string;
  duration_minutes: number;
  notes?: string;
  meeting_link?: string;
  meeting_platform?: MeetingPlatform;
<<<<<<< HEAD
  interview_type: InterviewType;
  title?: string;
}


export interface InterviewResponse {;

  interview_id: string;
=======
  interview_type: InterviewType
  title?: string
}
export interface InterviewResponse {

export interface InterviewResponse {;  interview_id: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  status: InterviewStatus;
  alternative_date?: string;
  message?: string;
}
<<<<<<< HEAD
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
