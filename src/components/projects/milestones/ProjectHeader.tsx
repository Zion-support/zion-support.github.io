
import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'

interface ProjectHeaderProps {
  title: string;
}

export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter
  
  return (
    <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b&quot;>
      <div className=&quot;flex items-center&quot;>
        <Button 
          variant=&quot;ghost&quot; 
          size=&quot;sm&quot; 
          className=&quot;mr-2&quot;
          onClick={() => router.back()} // Changed to router.back()
        >
          <ArrowLeft className=&quot;h-4 w-4 mr-1&quot; />
          Back
        </Button>
        <h1 className=&quot;text-2xl md:text-3xl font-bold truncate max-w-xl&quot;>{title}</h1>
      </div>
    </div>
  );
}
