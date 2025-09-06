type ResumeStep = "basics" | "experience" | "education" | "skills";

  
  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id))
  };
  
  
  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id))
  };
  
  
  
  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id))
  };
  
