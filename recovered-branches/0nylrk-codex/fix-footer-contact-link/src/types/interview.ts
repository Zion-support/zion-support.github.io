
<<<<<<< HEAD
<<<<<<< HEAD

  | 'cancelled';
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';

=======
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
=======
<<<<<<< HEAD

export type InterviewStatus =
  | 'requested'
  | 'confirmed'
  | 'declined'
  | 'rescheduled'
  | 'completed'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  | 'cancelled';
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';
<<<<<<< HEAD
export interface Interview {
=======

export interface Interview {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
  client_avatar?: string
  talent_avatar?: string
}

=======

  client_avatar?: string,
  talent_avatar?: string;

}
export interface InterviewRequest {
=======
}


export interface InterviewRequest {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  client_avatar?: string
  talent_avatar?: string
}
<<<<<<< HEAD
export interface InterviewRequest {
=======

export interface InterviewRequest {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  talent_id: string;
  client_id: string;
  scheduled_date: string;
  duration_minutes: number;
  notes?: string;
  meeting_link?: string;
  meeting_platform?: MeetingPlatform;
<<<<<<< HEAD
<<<<<<< HEAD
  interview_type: InterviewType
  title?: string
}

=======

  interview_type: InterviewType,
  title?: string;

}
export interface InterviewResponse {
=======
}


export interface InterviewResponse {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  interview_id: string;
  status: InterviewStatus;

<<<<<<< HEAD
  message?: string
}

=======
  interview_type: InterviewType
  title?: string
}
<<<<<<< HEAD
export interface InterviewResponse {
=======

export interface InterviewResponse {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  interview_id: string;
  status: InterviewStatus;
  alternative_date?: string

  message?: string
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
  alternative_date?: string,
  message?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
