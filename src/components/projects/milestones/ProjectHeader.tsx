import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ProjectHeaderProps {
  title: string;

export function ProjectHeader({ title }: ProjectHeaderProps) {
  const router = useRouter(); // Changed from useNavigate to useRouter

  return (

        >
          <ArrowLeft className='h-4 w-4 mr-1' />
          Back
        </Button>
        <h1 className='text-2xl md:text-3xl font-bold truncate max-w-xl'>
          {title}
        </h1>
      </div>
    </div>
  );

}