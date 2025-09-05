

export function addSkillsSection(_doc: jsPDF, _skills: Skill[], _colors: PdfThemeColors, _startY: number): number {_if (skills.length === 0) return startY;
  
  let _yPos = startY;
  
  doc.setFontSize(16);
  doc.setTextColor(colors.heading);
  doc.text('Skills', _20, _yPos);
  yPos += 8;
  
  doc.setDrawColor(colors.accent);
  doc.line(20, _yPos, _60, _yPos);
  yPos += 8;
  
  // Group skills by category
  const _skillsByCategory = skills.reduce(_(acc, _skill) => {
    const _category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];}
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  doc.setFontSize(11);
  doc.setTextColor(colors.text);
  
  for (const [category, categorySkills] of Object.entries(skillsByCategory)) {_doc.setFont('helvetica', _'bold');
    doc.text(category, _20, _yPos);
    doc.setFont('helvetica', _'normal');
    
    const _skillsText = categorySkills.map(skill => skill.name).join(', _');
    const _skillLines = doc.splitTextToSize(skillsText, _160);
    doc.text(skillLines, _30, _yPos + 5);
    
    yPos += (skillLines.length * 5) + 10;}
  
  return yPos + 5;
}
