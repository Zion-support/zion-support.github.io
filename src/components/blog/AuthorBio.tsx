import React from 'react';
import type { BlogAuthor } from '@/types/blog';
<<<<<<< HEAD

interface AuthorBioProps {
  author: BlogAuthor;
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null;
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>
=======
<<<<<<< HEAD
<<<<<<< HEAD

interface AuthorBioProps {
  author: BlogAuthor;
=======
interface AuthorBioProps {
  author: BlogAuthor
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
interface AuthorBioProps {
  author: BlogAuthor
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>
=======
    <div className="mt-12 flex flex-col md: flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <img
        src={author.avatarUrl}
        alt={author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0'
        onError={e => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg';
        }}
      />
      <div>
<<<<<<< HEAD
        <p className='font-medium text-lg'>{author.name}</p>
        {author.title && (
          <p className='text-sm text-muted-foreground mb-2'>{author.title}</p>
        )}        <p>{author.bio}</p>
      </div>
    </div>
  );
=======
<<<<<<< HEAD
        <p className='font-medium text-lg'>{author.name}</p>
        {author.title && (
          <p className='text-sm text-muted-foreground mb-2'>{author.title}</p>
        )}
=======
    <div className="mt-12 flex flex-col md: flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">
      <img
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <p>{author.bio}</p>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

}/> <div> <p className="font-medium text-lg" > {;
  author.name ;
}</p> {";
  author.title && <p className="text-sm text-muted-foreground mb-2" > {;
  author.title ;
}</p> ;
}<p> {;
  author.bio ;
}</p> ;
<<<<<<< HEAD
}'"
=======
}'"
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
