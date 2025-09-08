
export type InterviewType = "video" | "phone" | "in-person";

export type MeetingPlatform =
  | "zoom"
  | "google-meet"
  | "teams"
  | "other"
  | "in-app";

export type MeetingPlatform =
  | "zoom"
  | "google-meet"
  | "teams"
  | "other"

  | "in-app";

export interface Interview {;

  | 'cancelled';

export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';
export interface Interview {

export interface Interview {;



=======
  | 'cancelled';
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';
export interface Interview {

export interface Interview {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba


export interface InterviewRequest {;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  talent_id: string;
  client_id: string;
  scheduled_date: string;
  duration_minutes: number;
  notes?: string;
  meeting_link?: string;
  meeting_platform?: MeetingPlatform;
  interview_type: InterviewType;
  title?: string;
}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

export interface InterviewResponse {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  interview_id: string;
  status: InterviewStatus;
  alternative_date?: string;
  message?: string;
}
