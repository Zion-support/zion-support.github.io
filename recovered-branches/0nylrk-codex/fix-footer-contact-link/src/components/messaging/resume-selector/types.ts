<<<<<<< HEAD
import { Resume } from '@/types/resume';

export interface ResumeOption {
=======
 export interface ResumeOption {
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  id: string;
title: string;
type: 'ai resume' | 'custom upload';
resume?: Resume;
file?: File 
}export interface ResumeSelectorProps {
  onResumeSelected: (resumeOption: ResumeOption) => void 
}