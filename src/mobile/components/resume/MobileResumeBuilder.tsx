import {
  Select;
  SelectContent;
  SelectItem;
  SelectTrigger;
  SelectValue} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ChevronRight, Plus, Zap, Trash2 } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ChevronRight, Zap, Star } from 'lucide-react';

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
