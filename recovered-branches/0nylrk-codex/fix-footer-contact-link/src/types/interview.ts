


export type InterviewStatus = 
  | 'requested' 
  | 'confirmed' 
  | 'declined' 
  | 'rescheduled' 
  | 'completed' ;

  | 'cancelled';
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';
export interface Interview {

export interface Interview {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

export interface InterviewRequest {;



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

export interface InterviewResponse {;

  interview_id: string;
  status: InterviewStatus;

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


  interview_id: string;
  status: InterviewStatus;

  alternative_date?: string,
  message?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
