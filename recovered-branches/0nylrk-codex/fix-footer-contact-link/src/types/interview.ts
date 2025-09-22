<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export type InterviewStatus = 
  | 'requested' 
  | 'confirmed' 
  | 'declined' 
  | 'rescheduled' 
  | 'completed' ;

=======
export type InterviewStatus =
  | "requested""
  | "confirmed""
  | "declined""
  | "rescheduled""
  | "completed"";
  | "cancelled";
"
export type InterviewType = "video" | "phone" | "in-person";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export type MeetingPlatform =
  | "zoom"
  | "google-meet"
  | "teams"
  | "other"
=======
export type MeetingPlatform ="
  | "zoom""
  | "google-meet""
  | "teams""
  | "other"";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  | "in-app";

export interface Interview {;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  | 'cancelled';
=======
export interface Interview {  | 'cancelled';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  | 'cancelled';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';
export interface Interview {

export interface Interview {;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface Interview {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface Interview {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export interface Interview {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface InterviewRequest {

export interface InterviewRequest {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  client_avatar?: string;
  talent_avatar?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export interface InterviewRequest {;

client_avatar?: string
  talent_avatar?: string
}
export interface InterviewRequest {

export interface InterviewRequest {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  client_avatar?: string;
  talent_avatar?: string;
}
export interface InterviewRequest {};
export interface InterviewRequest {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
export interface InterviewRequest {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  talent_id: string;
  client_id: string;
  scheduled_date: string;
  duration_minutes: number;
  notes?: string;
  meeting_link?: string;
  meeting_platform?: MeetingPlatform;
<<<<<<< HEAD
<<<<<<< HEAD

  interview_type: InterviewType,
  title?: string;
}
export interface InterviewResponse {
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  interview_type: InterviewType
  title?: string
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  interview_type: InterviewType;
  title?: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
=======
export interface InterviewRequest {
  // TODO: Implement
  // TODO: Implement
  scheduled_date: string;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export interface InterviewResponse {;

interview_id: string;
  status: InterviewStatus;
alternative_date?: string,
  message?: string;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  status: InterviewStatus;
  interview_type: InterviewType
  title?: string
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface InterviewResponse {

export interface InterviewResponse {;
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  interview_id: string;
  status: InterviewStatus;

  message?: string
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
export interface InterviewResponse {
  interview_id: string;
  status: InterviewStatus;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  interview_id: string;,
  alternative_date?: string;
  message?: string;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
