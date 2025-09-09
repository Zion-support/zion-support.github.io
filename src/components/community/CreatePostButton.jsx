import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function CreatePostButton({ categoryId }) {
  return (
    <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white">
      <Plus className="w-4 h-4 mr-2" />
      Create Post
    </Button>
  );
}