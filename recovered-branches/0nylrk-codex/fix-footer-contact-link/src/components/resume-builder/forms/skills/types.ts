export interface SkillsFormProps {
  resume_id: string;
  skills: Skill[];
}
export interface SkillItemProps {
  skill: Skill;
  category: string;
}
export interface SkillCategoryProps {
  category: string;
  skills: Skill[];
