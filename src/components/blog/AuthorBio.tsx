<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import type { BlogAuthor } from '@/types/blog';
interface AuthorBioProps {
  author: BlogAuthor
}
=======
import React from 'react'
import type { BlogAuthor } from '@/types/blog'
interface AuthorBioProps {
  author: BlogAuthor
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>interface AuthorBioProps {
  author: BlogAuthor
}
interface AuthorBioProps {
  author: BlogAuthor
}

export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>
      <img
        src={author.avatarUrl}
        alt={author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0'
        onError={e => {
          const target = e.currentTarget as HTMLImageElement
          target.src = '/images/blog-placeholder.svg' }}
      />
      <div>
        <p className='font-medium text-lg'>{author.name}</p>
        {author.title && (
          <p className='text-sm text-muted-foreground mb-2'>{author.title}</p>
        )}        <p>{author.bio}</p>
      </div>
    </div>
  )
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
      <img
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement
          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react',;
import type { BlogAuthor } from '@/types/blog',;
interface AuthorBioProps {;
  author: BlogAuthor;
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (
<<<<<<< HEAD
    <div className;
=======
    <div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">
      <img
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>
      </div>
    </div>
  )
<<<<<<< HEAD
}/> <div> <p className="font-medium text-lg" > {
  author.name
}</p> {"
  author.title && <p className="text-sm text-muted-foreground mb-2" > {
<<<<<<< HEAD
  author.title
}</p>
}<p> {
  author.bio
}</p>
}'"}
=======
  author.title 
}</p>
}<p> {
  author.bio ;
}</p>;
}'"};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
export function AuthorBio({ author }: AuthorBioProps) {;
  if (!author.bio) return null;
  return (;
    <div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">;
      <img;
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0";
        onError={(e) => {;
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg';
        }}
      />;
      <div>;
        <p className="font-medium text-lg">{author.name}</p>;
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
