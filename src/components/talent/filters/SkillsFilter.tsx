import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { SkillsFilterProps } from '@/types/filters';

// Common skills in AI and tech
const POPULAR_SKILLS = [
  'Machine Learning',
  'Deep Learning',
  'Python',
  'TensorFlow',
  'PyTorch',
  'Computer Vision',
  'NLP',
  'Data Science',
  'AWS',
  'Docker',
  'Kubernetes',
  'React',
  'Node.js',
  'TypeScript',
  'JavaScript',
  'SQL',
  'Git',
  'Linux',
  'Agile',
  'Scrum'
];

export function SkillsFilter({ 
  selectedSkills, 
  setSelectedSkills, 
  onApply 
}: SkillsFilterProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleSection = () => {
    setExpanded(!expanded);
  };

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleApply = () => {
    onApply();
  };

  return (
    <div className="mb-6 border-b border-zion-blue-light pb-6">
      <button
        onClick={toggleSection}
        className="flex w-full items-center justify-between text-white font-medium"
      >
        <span>Skills</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-zion-slate-light" />
        ) : (
          <ChevronDown className="h-4 w-4 text-zion-slate-light" />
        )}
      </button>
      {expanded && (
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
            {POPULAR_SKILLS.map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <Checkbox
                  id={skill}
                  checked={selectedSkills.includes(skill)}
                  onCheckedChange={() => handleSkillToggle(skill)}
                />
                <label
                  htmlFor={skill}
                  className="text-sm text-zion-slate-light cursor-pointer"
                >
                  {skill}
                </label>
              </div>
            ))}
          </div>
          <Button
            onClick={handleApply}
            className="mt-4 w-full bg-zion-blue text-white hover:bg-zion-blue-dark"
          >
            Apply Filter
          </Button>
        </div>
      )}
    </div>
  );
}