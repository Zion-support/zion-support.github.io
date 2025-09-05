 interface TalentCardSkillsProps {
  skills: string[] | undefined 
}export function TalentCardSkills ({
  skills = [] 
}: TalentCardSkillsProps) {
  //Get top skills (limit to 4) const topSkills = skills.slice (0, 4) || [];
flex flex-wrap gap-1 mb-5"> {
  topSkills.map (skill => (<Badge key= {
  skill 
}className=" bg-zion-purple/10 hover:bg-zion-purple/30 text-zion-purple border-0" > {
  skill 
}</Badge>) ) 
}+ {
  skills.length - 4 
}more </Badge>) 
}</div>) 
}