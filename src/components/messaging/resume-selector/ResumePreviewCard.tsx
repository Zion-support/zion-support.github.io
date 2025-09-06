

import React from 'react',
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react'

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
        isSelected
          ? 'ring-2 ring-blue-500 border-blue-500'
          : 'hover:border-gray-300'
      }`}
      onClick={() => onSelect(resume)}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              {resume.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {resume.description}
            </p>
          </div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            {resume.basic_info.summary}
          </p>
        )}

        {resume.skills && resume.skills.length > 0 && (
          <div className='flex flex-wrap gap-1 mt-2'>
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant='outline'
                className='bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs'              >          <div className="flex flex-wrap gap-1 mt-2">

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
            {resume.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-zion-blue-dark/50 text-zion-cyan border-zion-purple/20 text-xs"
<<<<<<< HEAD
              >
              >
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <Badge 

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              >
                +{resume.skills.length - 5} more
              </Badge>
            )}
          </div>
        )}

    </Card>;
  );
};
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
