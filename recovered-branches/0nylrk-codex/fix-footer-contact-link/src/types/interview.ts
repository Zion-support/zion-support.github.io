

  | 'cancelled';
export type InterviewType = 'video' | 'phone' | 'in-person';
export type MeetingPlatform = 'zoom' | 'google-meet' | 'teams' | 'other' | 'in-app';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  interview_id: string;
  status: InterviewStatus;

  message?: string
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
