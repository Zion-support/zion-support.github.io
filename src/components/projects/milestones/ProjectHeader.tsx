return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b'>;
      <div className='flex items-center'>;
        <Button
          variant='ghost'
          size='sm'
          className='mr-2'
<<<<<<< HEAD
          onClick={() => router.back()} // Changed to router.back()        >
          <ArrowLeft className='h-4 w-4 mr-1' />
=======
          onClick={() => router && router.back()} // Changed to router && router.back()        >;
          <ArrowLeft className='h-4 w-4 mr-1' />;
          Back;
        </Button>;
        <h1 className='text-2xl md:text-3xl font-bold truncate max-w-xl'>;
          {title}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

        </h1>;
      </div>;
    </div>;
  );

  )



import React from 'react',;
import { useRouter } from 'next/router',;
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
interface ProjectHeaderProps {;
  title: string;


}
;