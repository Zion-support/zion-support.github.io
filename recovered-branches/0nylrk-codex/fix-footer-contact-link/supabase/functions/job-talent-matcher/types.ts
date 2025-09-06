export interface JobData {
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: string;
  budget: {
<<<<<<< HEAD

    min: number

    max: number
  }
  deadline: string
=======
    min: number,
    max: number;
  }
  deadline: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface TalentProfile {
  id: string;
  full_name: string;
  professional_title: string;
  bio?: string;
  skills: string[];
  years_experience: number;
<<<<<<< HEAD

  hourly_rate?: number

  availability_type?: string
=======
  hourly_rate?: number,
  availability_type?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface TalentMatch {
  talent_id: string;
  job_id: string;
  match_score: number;
<<<<<<< HEAD

  matched_skills: string[]

  created_at: string
=======
  matched_skills: string[],
  created_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface MatchResult {
  talent_id: string;
  score: number;
<<<<<<< HEAD

  matchedSkills: string[]

  reason?: string
=======
  matched_skills: string[],
  reason?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}