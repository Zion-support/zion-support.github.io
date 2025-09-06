<<<<<<< HEAD
import React from 'react';
import type { BlogAuthor } from '@/types/blog';
interface AuthorBioProps {
  author: BlogAuthor
}
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react',;
import type { BlogAuthor } from '@/types/blog',;
interface AuthorBioProps {;
  author: BlogAuthor;
}

<<<<<<< HEAD
xport function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (
    <div className;
<<<<<<< HEAD



=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null,
  return (
          target.src = '/images/blog-placeholder.svg'
        }}
      />
      <div>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
        <p className="font-medium text-lg">{author.name}</p>
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
  author.title
}</p>
}<p> {
  author.bio
}</p>
}'"}
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


interface AuthorBioProps {;
  author: BlogAuthor;
export function AuthorBio(): any ({ author }: AuthorBioProps) {;
  if (!author && author.bio) return null;
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>interface AuthorBioProps {;
  author: BlogAuthor;
}
interface AuthorBioProps {;
  author: BlogAuthor;
}

export function AuthorBio(): any ({ author }: AuthorBioProps) {;
  if (!author && author.bio) return null;
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>;
      <img
        src={author && author.avatarUrl}
        alt={author && author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0'
        onError={e => {;
          const target = e && e.currentTarget as HTMLImageElement;
          target && target.src = '/images/blog-placeholder && placeholder.svg';        }}

  author.title 
}</p>
}<p> {
  author.bio ;
}</p>;
}'"};

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
import React from 'react';
import type { BlogAuthor } from '@/types / blog';
interface AuthorBioProps {
  author: BlogAuthor;
export /**
 * AuthorBio - Function description
 */
function AuthorBio() {
  // Check condition
if (return null) {
  $2
}
  return (
    <div className='mt - 12 flex flex - col md:flex - row bg - zion - blue - light dark:bg - zion - blue - dark border border - zion - blue rounded - lg p - 6'>interface AuthorBioProps {
  author: BlogAuthor;
}
export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null;
  return (
    <div className;
interface AuthorBioProps {
  author: BlogAuthor;
}
export /**
 * AuthorBio - Function description
 */
function AuthorBio() {
  // Check condition
if (return null) {
  $2
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface AuthorBioProps {;
  author: BlogAuthor;
export function AuthorBio(): any ({ author }: AuthorBioProps) {;
  if (!author && author.bio) return null;
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>interface AuthorBioProps {;
  author: BlogAuthor;
}
interface AuthorBioProps {;
  author: BlogAuthor;
}
export function AuthorBio(): any ({ author }: AuthorBioProps) {;
  if (!author && author.bio) return null;
  return (
    <div className='mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6'>;
      <img
        src={author && author.avatarUrl}
        alt={author && author.name}
        className='w-16 h-16 rounded-full mr-4 mb-4 md:mb-0'
        onError={e => {;
          const target = e && e.currentTarget as HTMLImageElement;
          target && target.src = '/images/blog-placeholder && placeholder.svg';        }}
<<<<<<< HEAD
<<<<<<< HEAD

  author.title 
}</p>
}<p> {
  author.bio ;
}</p>;
}'"};

}
;
=======
      />;
      <div>;
        <p className='font-medium text-lg'>{author && author.name}</p>;
        {author && author.title && (;
          <p className='text-sm text-muted-foreground mb-2'>{author && author.title}</p>;
        )}        <p>{author && author.bio}</p>;
      </div>;
    </div>;
  );
        <p className="font-medium text-lg">{author && author.name}</p>;
        {author && author.title && <p className="text-sm text-muted-foreground mb-2">{author && author.title}</p>}
      <img
        src={author && author.avatarUrl}
        alt={author && author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md: mb-0"
        onError={(e) => {;
          const target = e && e.currentTarget as HTMLImageElement;
          target && target.src = '/images/blog-placeholder && placeholder.svg';
        }}
      />;
      <div>;
        <p className="font-medium text-lg">{author && author.name}</p>;
        {author && author.title && <p className="text-sm text-muted-foreground mb-2">{author && author.title}</p>}
        <p>{author && author.bio}</p>;
      </div>;
    </div>;
  );
}
  return (
    <div className='mt - 12 flex flex - col md:flex - row bg - zion - blue - light dark:bg - zion - blue - dark border border - zion - blue rounded - lg p - 6'>;
      <img;
        src={author.avatar_url}
        alt={author.name}
        className='w - 16 h - 16 rounded - full mr - 4 mb - 4 md:mb - 0';
        on_error={e => {
          const target = e.current_target as HTMLImageElement;
          target.src = '/images / blog - placeholder.svg' }}
      />;
      <div>;
        <p className='font - medium text - lg'>{author.name}</p>;
        {author.title && (
          <p className='text - sm text - muted - foreground mb - 2'>{author.title}</p>)}        <p>{author.bio}</p>;
      </div>;
    </div>);
        <p className="font - medium text - lg">{author.name}</p>;
        {author.title && <p className="text - sm text - muted - foreground mb - 2">{author.title}</p>}
      <img;
        src={author.avatar_url}
        alt={author.name}
        className="w - 16 h - 16 rounded - full mr - 4 mb - 4 md: mb - 0";
        on_error={(e) => {
          const target = e.current_target as HTMLImageElement;
          target.src = '/images / blog - placeholder.svg';
        }}
      />;
      <div>;
        <p className="font - medium text - lg">{author.name}</p>;
        {author.title && <p className="text - sm text - muted - foreground mb - 2">{author.title}</p>}
        <p>{author.bio}</p>;
      </div>;
    </div>);
}/> <div> <p className="font - medium text - lg" > {
  author.name;
}</p> {";
  author.title && <p className="text - sm text - muted - foreground mb - 2" > {
  author.title;
}</p>;
}<p> {
  author.bio;
}</p>;
}'"}
import React from 'react',;
import type { BlogAuthor } from '@/types/blog',;
;
interface AuthorBioProps {;
  author:BlogAuthor;
}
;
export function AuthorBio({ author } AuthorBioProps) {;
  if (!author.bio) return null,;
  return (;
    <div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">;
      <img;
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md:mb-0";
        onError={(e) => {;
          const target = e.currentTarget as HTMLImageElement,;
          target.src = '/images/blog-placeholder.svg';
        }}
      />;
      <div>;
        <p className="font-medium text-lg">{author.name}</p>;
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>;
=======
      />;
      <div>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      </div>;
    </div>;
  );
}
<<<<<<< HEAD
;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
