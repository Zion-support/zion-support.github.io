import React from "react";

interface ResourceItem {
  
  id: string;
title: string;
  description: string;
type: 'image' | 'video' | 'document' | 'link';
  icon: JSX.Element;
    <div className='space-y-6'>
      <Card className='bg-zion-blue-dark border-zion-blue-light'>
        <CardHeader>
          <CardTitle>Marketing Resources</CardTitle>
          <CardDescription>
            Download brand assets and marketing materials to promote Zion AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {resources.map(resource => (
}
              <Card}
key={resource.id}
                className='bg-zion-blue border-zion-blue-light overflow-hidden'
              >
                <CardContent className='p-6 flex flex-col items-center text-center'>
                  <div className='mb-4'>{resource.icon}</div>
                  <h3 className='font-semibold text-white mb-1'>
                    {resource.title}
                  </h3>
                  <p className='text-xs text-zion-slate-light mb-4'>
                    {resource.description}
                  </p>
                  <Button