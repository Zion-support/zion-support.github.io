
<<<<<<< HEAD
=======

  | 'cancelled';
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type InterviewStatus = 
  | 'requested' 
  | 'confirmed' 
  | 'declined' 
  | 'rescheduled' 
  | 'completed' ;
<<<<<<< HEAD

  | 'cancelled';
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';


export interface Interview {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  | 'cancelled';
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';
export interface Interview {

export interface Interview {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

  client_avatar?: string,
  talent_avatar?: string;

}
export interface InterviewRequest {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface InterviewRequest {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  client_avatar?: string
  talent_avatar?: string
}
export interface InterviewRequest {

export interface InterviewRequest {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  talent_id: string;
  client_id: string;
  scheduled_date: string;
  duration_minutes: number;
  notes?: string;
  meeting_link?: string;
  meeting_platform?: MeetingPlatform;

  interview_type: InterviewType,
  title?: string;

}
export interface InterviewResponse {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface InterviewResponse {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  interview_id: string;
  status: InterviewStatus;

  alternative_date?: string,
  message?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  interview_id: string;
  status: InterviewStatus;

  interview_type: InterviewType
  title?: string
}
export interface InterviewResponse {

export interface InterviewResponse {;
  interview_id: string;
  status: InterviewStatus;
  alternative_date?: string

  message?: string
}
export type InterviewStatus =;
  | 'requested';
  | 'confirmed';
  | 'declined';
  | 'rescheduled';
  | 'completed';
  | 'cancelled',;
export type InterviewType = 'video' | 'phone' | 'in-person',;
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app',;
export interface Interview {;
  id: string,;
  client_id: string,;
  talent_id: string,;
  scheduled_date: string,;
  end_time: string,;
  duration_minutes: number,;
  status: InterviewStatus,;
  notes?: string,;
  meeting_link?: string,;
  meeting_platform?: MeetingPlatform,;
  created_at: string,;
  updated_at: string,;
  title?: string,;
  interview_type: InterviewType,;
  client_name?: string,;
  talent_name?: string,;
  client_avatar?: string,;
  talent_avatar?: string;
}
;
export interface InterviewRequest {;
  talent_id: string,;
  client_id: string,;
  scheduled_date: string,;
  duration_minutes: number,;
  notes?: string,;
  meeting_link?: string,;
  meeting_platform?: MeetingPlatform,;
  interview_type: InterviewType,;
  title?: string;
}
;
export interface InterviewResponse {;
  interview_id: string,;
  status: InterviewStatus,;
  alternative_date?: string;
  message?: string;
}
;
  alternative_date?: string,
  message?: string;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
