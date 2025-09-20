
import React from 'react';
import { FileText } from "lucide-react";
import { ResumeOption } from "../resume-selector/types";
import { ResumePreviewCard } from "./ResumePreviewCard";
import { Resume } from "@/types/resume";
interface SelectResumeSectionProps {resumeOptions: ResumeOption[];
  isLoading: boolean
}
export function SelectResumeSection({}
isLoading}: SelectResumeSectionProps) {return (
    <div className='space-y-2'>
      {resumeOptions.length === 0 ? (
        <p className='text-sm text-zion-slate'>No saved resumes found.</p>
      ) : (<>
          {resumeOptions.map(option => (            <button
              onClick = {() => handleResumeSelect(option.id)}
            <ResumePreviewCard