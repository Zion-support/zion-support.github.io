<<<<<<< HEAD
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, ArchiveIcon } from 'lucide-react';

type EmptyStateCardProps = {
  type: 'active' | 'archived';
=======
 type EmptyStateCardProps = {
  type: 'active' | 'archived' 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({
  type 
}) => {
  const isActive = type === 'active';
<<<<<<< HEAD

  return (
    <Card className='bg-zion-blue-dark border border-zion-blue-light text-center py-12'>
      <CardContent>
        <div className='mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4'>
          {isActive ? (
            <MessageSquare className='h-8 w-8 text-white' />
          ) : (
            <ArchiveIcon className='h-8 w-8 text-white' />
          )}
        </div>
        <h3 className='text-xl font-medium text-white mb-2'>
          {isActive ? 'No hire requests yet' : 'No archived requests'}
        </h3>
        <p className='text-zion-slate-light max-w-md mx-auto'>
          {isActive
            ? "You haven't received any hire requests yet. Promote your profile and services to attract potential clients."
            : "You haven't archived any hire requests yet. Archive requests to keep your active list organized."}
        </p>
      </CardContent>
    </Card>
  );
=======
bg-zion-blue-dark border border-zion-blue-light text-center py-12"> <CardContent> <div className=" mx-auto w-16 h-16 bg-zion-blue-light opacity-60 rounded-full flex items-center justify-center mb-4"> {
  isActive ? (<MessageSquare className=" h-8 w-8 text-white"/>) : (<ArchiveIcon className=" h-8 w-8 text-white" />) 
}</div> </p> </CardContent> </Card>) 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
