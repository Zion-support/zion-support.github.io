import React from 'react';
import type {_BlogAuthor} from '@/types/blog';

interface AuthorBioProps {_author: BlogAuthor;}

export function AuthorBio(_{_author}: AuthorBioProps) {_if (!author.bio) return null;
  return (_<div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">
      <img
        src={author.avatarUrl}
        alt={_author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md:mb-0"
        onError={_(e) => {
          const _target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg';}}
      />
      <div>
        <p className="font-medium text-lg">{_author.name}</p>
        {_author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{_author.bio}</p>
      </div>
    </div>
  );
}
