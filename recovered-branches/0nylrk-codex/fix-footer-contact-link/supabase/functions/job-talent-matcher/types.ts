export interface JobData {
  id: string;
  title: string,
  description: string;
  skills: string[];
  category: string;
  budget: {
    min: number,    max: number
};
  deadline: string;
}

}
export interface TalentProfile {
  talent_id: string;
  job_id: string;
  match_score: number;}
export interface TalentMatch {

export interface TalentMatch {;
  talent_id: string;
  job_id: string;
  match_score: number;
  matched_skills: string[];
  created_at: string;
}

export interface MatchResult {
  talentId: string;
  score: number;
