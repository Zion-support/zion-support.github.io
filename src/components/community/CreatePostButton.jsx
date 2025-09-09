import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const CreatePostButton = () => {
  return (
    <Button className="bg-blue-600 text-white hover:bg-blue-700">
      <Plus className="w-4 h-4 mr-2" />
      Create Post
    </Button>
  );
};

export default CreatePostButton;