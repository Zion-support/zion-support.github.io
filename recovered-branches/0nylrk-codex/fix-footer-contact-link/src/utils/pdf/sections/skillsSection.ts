import { jsPDF  } from 'jspdf';
import { Skill  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addSkillsSection(
import { jsPDF  } from 'jspdf';
import { Skill  } from '@/types/resume';
import { PdfThemeColors } from '../themeConfig';
export function addSkillsSection(  doc: jsPDF;
  skills: Skill[];
  colors: PdfThemeColors;
  startY: number
): number {

  yPos += 8;
  // Group skills by category  yPos += 8;
  // Group skills by category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill);
    return acc
  }, {} as Record<string, typeof skills>);  }
  return yPos + 5
import {jsPDF} from 'jspdf';
import {Skill} from '@/types / resume';
import {PdfThemeColors} from '../theme_config';
export function addSkillsSection (
  doc: jsPDF;
  skills: Skill[];
  colors: PdfThemeColors;
  start_y: number): number {
  // Check condition
if (return start_y) {
  $2
}
  let y_pos = start_y;
;
  doc.setFontSize (16);
  doc.setTextColor (colors.heading),
  doc.text ('Skills', 20, y_pos);
  y_pos += 8;
;
  doc.setDrawColor (colors.accent);
  doc.line (20, y_pos, 60, y_pos);
  y_pos += 8;
;
  // Group skills by category;
  const skillsByCategory = skills.reduce ((acc, skill) => {
    const category = skill.category || 'Other';
    // Check condition
if ( {) {
  $2
}
      acc[category] = [];
    }
    acc[category].push (skill);
    return acc;
  }, {} as Record < string, typeof skills>);
;
  doc.setFontSize (11);
  doc.setTextColor (colors.text);
;
  for (const [category, category_skills] of Object.entries (skillsByCategory)) {
    doc.set_font ('helveticabold');
    doc.text (category, 20, y_pos);
    doc.set_font ('helveticanormal');
;
    const skills_text = category_skills.map (skill => skill.name).join (', ');
    const skill_lines = doc.splitTextToSize (skills_text, 160);
    doc.text (skill_lines, 30, y_pos + 5);
;
    y_pos += (skill_lines.length * 5) + 10;
  }
  return y_pos + 5;
}
  doc: jsPDF,
  skills: Skill[],
  colors: PdfThemeColors,
  startY: number): number {
  if (skills.length = $2;
  let yPos = $2;
  doc.setFontSize($2);
  doc.setTextColor($2);
  doc.text($2);
  yPos += 8,
  
  doc.setDrawColor($2);
  doc.line($2);
  yPos += 8,
  
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = $2;
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push($2);
    return acc
  }, {} as Record<string, typeof skills>),
  
  doc.setFontSize($2);
  doc.setTextColor($2);
  for (const [category, categorySkills] of Object.entries(skillsByCategory)) {
    doc.setFont($2);
    doc.text($2);
    doc.setFont($2);
    const skillsText = categorySkills.map(skill => skill.name).join($2);
    const skillLines = doc.splitTextToSize($2);
    doc.text($2);
    yPos += (skillLines.length * 5) + 10
  }
  
  return yPos + 5
}
