
<<<<<<< HEAD
import React from 'react',
import { useNavigate } from 'react-router-dom',
import { Button } from '@/components/ui/button',
import { ArrowLeft } from 'lucide-react',
interface ProjectHeaderProps {
  title: string
}

export function ProjectHeader({ title }: ProjectHeaderProps) {
  const navigate = useNavigate(),
  
  return (
    <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b&quot;>
      <div className=&quot;flex items-center&quot;>
=======
import React from 'react';

interface ProjectHeaderProps {_title: string;}

export function ProjectHeader(_{_title}: ProjectHeaderProps) {_const _navigate = useNavigate();
  
  return (_<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">
      <div className="flex items-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <Button 
          variant=&quot;ghost&quot; 
          size=&quot;sm&quot; 
          className=&quot;mr-2&quot;
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className=&quot;h-4 w-4 mr-1&quot; />
          Back
        </Button>
<<<<<<< HEAD
        <h1 className=&quot;text-2xl md:text-3xl font-bold truncate max-w-xl&quot;>{title}</h1>
=======
        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">{_title}</h1>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </div>
  )
}
