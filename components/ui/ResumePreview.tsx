
<<<<<<< HEAD

import React, { forwardRef } from 'react';'

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

import React, { forwardRef } from 'react';

<<<<<<< HEAD
export type ResumeData = {
  name: string,
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export type ResumeData = any;
  contact?: {
=======

<<<<<<< HEAD

import React, { forward_ref } from 'react';
export type ResumeData = {
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  name: string;
  contact?: {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    email?: string;
<<<<<<< HEAD

;
export type ResumeData = {import React, { forward_ref } from 'react';
=======
<<<<<<< HEAD
export type ResumeData = {import React, { forward_ref } from react';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export type ResumeData = {name: string;
  contact?: {import React, { forwardRef } from 'react';
export type ResumeData = any;
  contact?: {email?: string;
=======

>>>>>>> origin/chore/fix-lint-and-merge
    phone?: string;
    location?: string;
    website?: string;
    linkedin?: string;
<<<<<<< HEAD
    github?: string;
  }  summary?: string;
    github?: string;}  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{;
    title: string;    company?: string;
    start?: string;
    end?: string;
    location?: string;
<<<<<<< HEAD
    title: string;    title: string
<<<<<<< HEAD
    bullets?: string[];  name: string,;
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string };
=======
    bullets?: string[];  name: string,
=======
<<<<<<< HEAD
    bullets?: string[];  name: string,
=======

    bullets?: string[];  name: string,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string }
=======
}
    github?: string}
};

>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{
<<<<<<< HEAD

<<<<<<< HEAD
}

"title": string;
=======
<<<<<<< HEAD
=======
title: string;
>>>>>>> origin/chore/fix-lint-and-merge
=======
    title: string;    title: string
    bullets?: string[];  name: string,;
>>>>>>> merged-prs-20250907-203621
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string };
  summary?: string;
  skills?: string[];
  technologies?: string[];
<<<<<<< HEAD
  experience?: Array<{
    title: string,
=======
  experience?: Array<{;
    title: string;    title: string,;
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    company?: string;
    start?: string;
    end?: string;
    location?: string;
<<<<<<< HEAD
    bullets?: string[]
  }>;
  education?: Array<{
    institution: string,
=======

bullets?: string[];}
}
  }>;
  education?: Array<{institution: string;
    degree?: string;
    start?: string;}
    end?: string;}
  }>;
  certifications?: string[];
  portfolio?: Array<{title: string;
    description?: string;
    link?: string;}
    technologies?: string[];}
  }>;
}

<<<<<<< HEAD
export type ResumePreviewProps = {
<<<<<<< HEAD

export type ResumePreviewProps = {;
=======
};
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    {children}


export type ResumePreviewProps = {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  data: ResumeData;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;
=======
  data: ResumeData;
  theme?: 'light' | 'dark';}
  maxPortfolioItems?: number;}
>>>>>>> origin/chore/fix-lint-and-merge
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({}
  children}
}) => (
<<<<<<< HEAD
  <h2 className=text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1'>    {children}  }>;
  education?: Array<{
    institution: string
<<<<<<< HEAD
    bullets?: string[];
  }>;
  education?: Array<{;
    institution: string;
>>>>>>> merged-prs-20250907-203621
    degree?: string;
    start?: string;
    end?: string
  }>;
  certifications?: string[];
<<<<<<< HEAD
  portfolio?: Array<{
    title: string,
    description?: string;
    link?: string;
    technologies?: string[]
  }>
=======
  portfolio?: Array<{;
    title: string;
    description?: string;
    link?: string;
    technologies?: string[];
  }>;
=======
<<<<<<< HEAD

  <h2 className='text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1'    />
    {childre}
>>>>>>> origin/chore/fix-lint-and-merge
}
<<<<<<< HEAD
export type ResumePreviewProps = {
  }
  "data": ResumeData;
  theme?: 'light' | 'dark';'
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
};
export type ResumePreviewProps = {;
  data: ResumeData;
  theme?: 'light' | 'dark';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  maxPortfolioItems?: number;
};
const SectionTitle: React.FC<{ children: React && React.ReactNode }> = ({;
  children,;
}) => (;
  <h2 className='text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1'>    {children}  }>;
  education?: Array<{;
    institution: string,;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
const "SectionTitle": React.FC<{ "children": React.ReactNode }> = ({
  }
  children
}) => (
  <h2 className='text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1'>    {children}  }>;
  education?: Array<{
    institution: string
};

  <h2 className='text-lg font-semibold tracking-wide text-gray-800 "dark":text-gray-100 border-b border-gray-200 "dark":border-gray-700 pb-1'>'
    {childre
}
  </h2>
);

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {;'
}
const portfolioItems = (data.portfolio || []).slice(;
=======
<<<<<<< HEAD
export type ResumePreviewProps = {
  data: ResumeData,
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
    {children}
  </h2>
);

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {
    const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems));
=======
=======
export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps    />(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {;
  const portfolioItems = (data.portfolio || []).slice(
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      0,
      Math.max(0, maxPortfolioItems)
    );
>>>>>>> merged-prs-20250907-203621

    return (
      <div
        ref={ref}
        className={`resume-a4 ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
<<<<<<< HEAD
        <div className = 'p-8'>'
   ;
  const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems));

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(;
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {;'

}

const portfolioItems = (data && data.portfolio || []).slice(;
      0,;
      Math && Math.max(0, maxPortfolioItems);
    );
          {/* Header */}

          <header className='mb-6'>;'
            <h1 className='text-3xl font-bold text-gray-900 "dark":text-white'>;'
              {data && data.name}
            </h1>;
            <div className='mt-2 text-sm text-gray-600 "dark": text-gray-300 space-x-3 flex flex-wrap'>              {data && data.contact?.email && <span>{data && data.contact.email}</span>}'
              {data && data.contact?.phone && <span>{data && data.contact.phone}</span>}
              {data && data.contact?.location && <span>{data && data.contact.location}</span
}
              {data && data.contact?.website && (<h2 className="text - lg font - semibold tracking - wide text - gray - 800 "dark":text - gray - 100 border - b border - gray - 200 "dark":border - gray - 700 pb - 1">;"
    {children}
  </h2>)export const ResumePreview = forward_ref < HTMLDivElement, ResumePreviewProps>(({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => ;'
  const portfolio_items = (data.portfolio || []).slice (0,Math.max (0, maxPortfolioItems))>;
        <div className='p - 8'>;'
          {/* Header */}
          <header className='mb - 6'>;'
            <h1 className='text - 3xl font - bold text - gray - 900 "dark":text - white'>;'
=======
<<<<<<< HEAD
        <div className="p-8">
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              {data.name}
            </h1>;
            <div className='mt - 2 text - sm text - gray - 600 dark:text - gray - 300 space - x-3 flex flex - wrap'>              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (
<<<<<<< HEAD
import React, { forwardRef } from 'react';

            </h1>
            <div className='mt-2 text-sm text-gray-600 "dark": text-gray-300 space-x-3 flex flex-wrap'>'
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
            </h1>
            <div className='mt-2 text-sm text-gray-600 dark: text-gray-300 space-x-3 flex flex-wrap'    />
=======
import React, { forwardRef } from 'react;

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type ResumeData = {
  name: string,
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string };
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{
    title: string,
    company?: string;
    start?: string;
    end?: string;
    location?: string;
    bullets?: string[]
  }>;
<<<<<<< HEAD
=======
}
;
export type ResumePreviewProps = {
  data: ResumeData;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;
}
;
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className='text - lg font - semibold tracking - wide text - gray - 800 dark:text - gray - 100 border - b border - gray - 200 dark:border - gray - 700 pb - 1'>    {children}  }>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  education?: Array<{
    institution: string,
    degree?: string;
    start?: string;
    end?: string
  }>;
  certifications?: string[];
  portfolio?: Array<{
    title: string,
    description?: string;
    link?: string;
<<<<<<< HEAD
    technologies?: string[]
  }>
};

=======


  data: ResumeData,;


  theme?: 'light' | 'dark';
  maxPortfolioItems?: number
}
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  portfolio?: Array<{;
    title: string,;
    description?: string;
    link?: string;
    technologies?: string[];
  }>;
};
export type ResumePreviewProps = {;
  data: ResumeData,;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;
};
const SectionTitle: React.FC<{ children: React && React.ReactNode }> = ({ children }) => (;
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">;
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
    technologies?: string[];
  }>;
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export type ResumePreviewProps = {
  data: ResumeData,
  theme?: 'light' | 'dark';
export type ResumePreviewProps = $2;
  theme?: 'light' | 'dark',
  maxPortfolioItems?: number
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
<<<<<<< HEAD
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
    {children}
  </h2>
);

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {
    const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems));

    return (
      <div
        ref={ref}
        className={`resume-a4 ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <div className="p-8">
=======
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const portfolioItems = (data.portfolio || []).slice(
      0,
      Math.max(0, maxPortfolioItems);

    );




      >
        <div className='p-8'>
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems));
export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(;
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {;
    const portfolioItems = (data && data.portfolio || []).slice(;
      0,;
      Math && Math.max(0, maxPortfolioItems);
    );
      >;
        <div className='p-8'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap">
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
<<<<<<< HEAD
              {data.contact?.website && (
                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">
=======
            </h1>
            <div className=mt-2 text-sm text-gray-600 dark: text-gray-300 space-x-3 flex flex-wrap'    />
=======
        <div className = 'p-8'    />
   ;
  const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems));
}
export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps    />(;}
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {;

const portfolioItems = (data && data.portfolio || []).slice(;
      0,;
      Math && Math.max(0, maxPortfolioItems);}
    );}
          {/* Header */}

          <header className='mb-6'    />;
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'    />;
              {data && data.name}
            </h1>;
<<<<<<< HEAD
            <div className='mt-2 text-sm text-gray-600 dark: text-gray-300 space-x-3 flex flex-wrap'    />              {data && data.contact?.email && <span    />{data && data.contact.email}</span>}
              {data && data.contact?.phone && <span    />{data && data.contact.phone}</span>}
              {data && data.contact?.location && <span    />{data && data.contact.location}</span
}
              {data && data.contact?.website && (<h2 className=\"text - lg font - semibold tracking - wide text - gray - 800 dark:text - gray - 100 border - b border - gray - 200 dark:border - gray - 700 pb - 1\"    />;}
=======
            <div className='mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap'>              {data && data.contact?.email && <span>{data && data.contact.email}</span>}
              {data && data.contact?.phone && <span>{data && data.contact.phone}</span>}
              {data && data.contact?.location && <span>{data && data.contact.location}</span>}
              {data && data.contact?.website && (;
  <h2 className="text - lg font - semibold tracking - wide text - gray - 800 dark:text - gray - 100 border - b border - gray - 200 dark:border - gray - 700 pb - 1">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    {children}
  </h2>)export const ResumePreview = forward_ref < HTMLDivElement, ResumePreviewProps>(({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => ;
  const portfolio_items = (data.portfolio || []).slice (0,Math.max (0, maxPortfolioItems))>;
        <div className='p - 8'    />;
          {/* Header */}
          <header className='mb - 6'    />;
            <h1 className='text - 3xl font - bold text - gray - 900 dark:text - white'    />;

              {data.name}

            </h1>
            <div className='mt-2 text-sm text-gray-600 dark: text-gray-300 space-x-3 flex flex-wrap'    />
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {data.contact?.email && <span    />{data.contact.email}</span>}
              {data.contact?.phone && <span    />{data.contact.phone}</span>}
              {data.contact?.location && <span    />{data.contact.location}</span>}
              {data.contact?.website && (

<<<<<<< HEAD
<a
}
className='underline''
                  href={data.contact.website}
                  target='_blank''
                  rel='noreferrer''
=======
<a;}
className='underline'}
                  href={data.contact.website}
                  target='_blank'
                  rel='noreferrer'
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                >
              {data.name}</h1>;
            <div className='mt - 2 text - sm text - gray - 600 dark:text - gray - 300 space - x-3 flex flex - wrap'>              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              {data.contact?.website && (return (<div;
        ref={ref}</h1>;
            <div className='mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap'>;
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (<a;
<<<<<<< HEAD
                  className='underline';
                  href={data.contact.website}
                  target='_blank';
                  rel='noreferrer';
                >;

                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">
                  {data.contact.website}
                </a>
=======
=======
              {data.contact?.website && (
    return (
      <div;
        ref={ref}
<<<<<<< HEAD
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap">
        className={`resume - a4 ${theme === 'dark' ? 'dark' : ''} bg - white dark:bg - black text - gray - 900 dark:text - gray - 100`}
      >;
        <div className="p - 8">;
          {/* Header */}
          <header className="mb - 6">;
            <h1 className="text - 3xl font - bold text - gray - 900 dark:text - white">{data.name}</h1>;
            <div className="mt - 2 text - sm text - gray - 600 dark:text - gray - 300 space - x-3 flex flex - wrap">;
  </h2>
),

export const ResumePreview = forwardRef<HTMLDivElement ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {
    const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems)),

    return (
      <div
        ref={ref}
        className={_`resume-a4 ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <div className=&quot;p-8&quot;>
          {/* Header */}
          <header className=&quot;mb-6&quot;>
            <h1 className=&quot;text-3xl font-bold text-gray-900 dark:text-white&quot;>{data.name}</h1>
            <div className=&quot;mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap&quot;>

import React, { forwardRef } from 'react';
export type ResumeData = {;

export type ResumeData = {
  name: string;
  contact?: {
    email?: string;
    phone?: string;
    location?: string;
    website?: string;
    linkedin?: string;
    github?: string;
  };  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{
    title: string;    company?: string;
    start?: string;
    end?: string;
    location?: string;
    bullets?: string[];  name: string
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string }
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{
    title: string;    title: string
    company?: string;
    start?: string;
    end?: string;
    location?: string;
    bullets?: string[];
  }>;
  education?: Array<{
    institution: string;
    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];
  portfolio?: Array<{
    title: string;
    description?: string;
    link?: string;
    technologies?: string[];
  }>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
export type ResumePreviewProps = {
};

    {children}

export type ResumePreviewProps = {;
  data: ResumeData;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;
}
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <h2 className='text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1'>    {children}  }>;
  education?: Array<{
    institution: string
    degree?: string;
    start?: string;
    end?: string
  }>;
  certifications?: string[];
  portfolio?: Array<{
    title: string
    description?: string;
    link?: string;
    technologies?: string[]
  }>
}
export type ResumePreviewProps = {
  data: ResumeData
  data: ResumeData,;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number
}
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
    {children}

    {children}

  </h2>
);
export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {
    const portfolioItems = (data.portfolio |[]).slice(
      0
      Math.max(0, maxPortfolioItems)
    const portfolioItems = (data.portfolio || []).slice(
      0,
      Math.max(0, maxPortfolioItems);
    );

      >
        <div className='p-8'>
          {/* Header */}
          <header className='mb-6'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
              {data.name}
            </h1>
            <div className='mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap'>              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (
    return (
      <div
        ref={ref}
        className={`resume-a4 ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <div className="p-8">
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap">
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (


                <a
                  className='underline'
                  href={data.contact.website}
                  target='_blank';
                  rel='noreferrer';
                >                  {data.contact.website}
                </a>
              )}
<<<<<<< HEAD
              {data.contact?.github && (<a;
                  }
                  className='underline';'
                  href={data.contact.github}
                  target='_blank';'
                  rel='noreferrer'>'

=======
              {data.contact?.linkedin && (                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">

                  {data.contact.website}
                </a>)}
              {data.contact?.linkedin && (
            </div>;
          </header>;
          {/* Summary */}
          {data.summary && (
            <section className="mb-5">
                <a
                  className='underline'
                  href={data.contact.linkedin}
                  target='_blank'
                  rel='noreferrer'
                >                  LinkedIn
                </a>
              )}
              {data.contact?.github && (                <a className="underline" href={data.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {data.contact?.github && (
                <a
                  className='underline'
                  href={data.contact.github}
                  target='_blank'
                  rel='noreferrer'
                >                  GitHub                <a className="underline" href={data.contact.github} target="_blank" rel="noreferrer">
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  GitHub
                </a>
              )}
            </div>
          </header>
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {data.contact.website}
                </a>)}
              {data.contact?.linkedin && (

            </div>;
          </header>;
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




<<<<<<< HEAD



          {/* Summary */}

          {data.summary && (
            <section className='mb-5'>
              <SectionTitle>Professional Summary</SectionTitle>
              <p className='mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200'>
                {data.summary}
              </p>            </section>            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>
          )}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Summary */}

<<<<<<< HEAD
<section className='mb-5'>'
              <SectionTitle>Professional Summary</SectionTitle>
              <p className='mt-2 text-sm leading-relaxed text-gray-800 "dark": text-gray-200'>'

                {data.summar
}
              </p>;
            </section>;
          )}
          {/* Skills & Technologies */}
<section className='mb-5'    />
              <SectionTitle    />Professional Summary</SectionTitle>
              <p className='mt-2 text-sm leading-relaxed text-gray-800 dark: text-gray-200'    />

                {data.summar}

              </p>
            </section>
          )}
=======
          {data.summary && (
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Summary */}
          {data && data.summary && (;
            <section className='mb-5'>;
              <SectionTitle>Professional Summary</SectionTitle>;
              <p className='mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200'>;
                {data && data.summary}
              </p>            </section>            <section className="mb-5">;
              <SectionTitle>Professional Summary</SectionTitle>;
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data && data.summary}</p>;
            </section>;
          )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {/* Skills & Technologies */}
<<<<<<< HEAD
=======



=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
<<<<<<< HEAD
<section className='mb-5'>'
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>'
=======
            <section className='mb-5'>
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>
                {data.skills?.map((s, idx) => (
<<<<<<< HEAD
=======
=======
          {(data && data.skills?.length || data && data.technologies?.length) && (;
            <section className='mb-5'>;
              <SectionTitle>Skills & Technologies</SectionTitle>;
              <div className='mt-2 text-sm flex flex-wrap gap-2'>;
                {data && data.skills?.map((s, idx) => (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {(data.skills?.length |data.technologies?.length) && (


          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
            <section className='mb-5'>
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>
                {data.skills?.map((s, idx) => (
                  <span
                    key={`skill-${idx}`}
                    className='px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700'>                    {s}
                  </span>;
                ))}
                {data && data.technologies?.map((t, idx) => (;
                  <span
                    key={`tech-${idx}`}

<<<<<<< HEAD
                    className='px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700'>                    {t}              <SectionTitle>Skills & Technologies</SectionTitle>;
              <div className="mt-2 text-sm flex flex-wrap gap-2">;
                {data && data.skills?.map((s, idx) => (;
                  <span key={`skill-${idx}`} className="px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700">;
                    {s}
                  </span>;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {(data.skills?.length || data.technologies?.length) && (
            <section className="mb-5">
              <SectionTitle>Skills & Technologies</SectionTitle>
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                  >                    {t}              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className="mt-2 text-sm flex flex-wrap gap-2">
                {data.skills?.map((s, idx) => (
                  <span key={`skill-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {s}
                  </span>
                ))}
                {data.technologies?.map((t, idx) => (
<<<<<<< HEAD
=======
                  <span key={`tech-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {t}
                  </span>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                ))}
                {data && data.technologies?.map((t, idx) => (;
                  <span
                    key={`tech-${idx}`}
                    className='px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700'>                  <span key={`tech-${idx}`} className="px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700">;
                    {t}
                  </span>;
                ))}
              </div>;
            </section>;
          )}
                <a;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  className='underline';
                  href={data.contact.website}
                  target='_blank';
                  rel='noreferrer';
                >;

=======
                    />

>>>>>>> merged-prs-20250907-203621
                  {data.contact.website}
>>>>>>> origin/chore/fix-lint-and-merge
                </a>
<<<<<<< HEAD
              )}
=======
}
              {data.contact?.linkedin && (<a;}
                  className='underline';}
                  href={data.contact.linkedin}
                  target='_blank';
                  rel='noreferrer'    />

                  LinkedIn;
                </a>;
              )}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
              {data.contact?.linkedin && (
                <a className="underline" href={data.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {data.contact?.github && (
                <a className="underline" href={data.contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
=======
              {data.contact?.github && (<a;}
                  className='underline';}
                  href={data.contact.github}
                  target='_blank';
                  rel='noreferrer'    />

                  GitHub;
                </a>;
>>>>>>> origin/chore/fix-lint-and-merge
              )}
            </div>
          </header>





          {/* Summary */}

          {data.summary && (
<<<<<<< HEAD
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>
=======

<<<<<<< HEAD
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className='mt-2 text-sm leading-relaxed text-gray-800 "dark": text-gray-200'>'

                {data.summar
=======
<section className='mb-5'    />
              <SectionTitle    />Professional Summary</SectionTitle>
              <p className='mt-2 text-sm leading-relaxed text-gray-800 dark: text-gray-200'    />
}
                {data.summar}
>>>>>>> origin/chore/fix-lint-and-merge
}
              </p>;
            </section>;
          )}
          {/* Skills & Technologies */}
<<<<<<< HEAD
          {/* Skills & Technologies */}





>>>>>>> merged-prs-20250907-203621
          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
<<<<<<< HEAD
            <section className="mb-5">
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className="mt-2 text-sm flex flex-wrap gap-2">
                {data.skills?.map((s, idx) => (
                  <span key={`skill-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {s}
                  </span>
                ))}
                {data.technologies?.map((t, idx) => (
                  <span key={`tech-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                {data.skills?.map((s, idx) => (
                  <span
}
key={`skill-${idx}`}`
                    className='px-2 py-0.5 rounded border border-gray-200 "dark": border-gray-700''
                  >

<<<<<<< HEAD
                    {
}
                  </span>;
                ))}
                {data.technologies?.map((t, idx) => (<span;
                    }
                    key={`tech-${idx}`}`
                    className='px-2 py-0.5 rounded border border-gray-200 "dark": border-gray-700''
                  >
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}
=======
            <section className='mb - 5'>;
              <SectionTitle > Skills & Technologies</SectionTitle>;
              <div className='mt - 2 text - sm flex flex - wrap gap - 2'>;
                {data.skills?.map ((s, idx) => (
                  <span;
                    key={`skill-${idx}`}
                    className='px - 2 py - 0.5 rounded border border - gray - 200 dark:border - gray - 700';
                  >                    {s}
                  </span>))}
                {data.technologies?.map ((t, idx) => (
                  <span;
                    key={`tech-${idx}`}
                    className='px - 2 py - 0.5 rounded border border - gray - 200 dark:border - gray - 700';
                  >                    {t}              <SectionTitle > Skills & Technologies</SectionTitle>;
              <div className="mt - 2 text - sm flex flex - wrap gap - 2">;
                {data.skills?.map ((s, idx) => (
                  <span key={`skill-${idx}`} className="px - 2 py - 0.5 rounded border border - gray - 200 dark:border - gray - 700">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'

<<<<<<< HEAD
          {/* Experience */}
          {data.experience?.length ? (
            <section className="mb-5">
              <SectionTitle>Work Experience</SectionTitle>
              <div className="mt-2 space-y-3">
                {data.experience.map((role, idx) => (
                  <div key={`exp-${idx}`}>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        {(role.start || role.end) && (
                          <span>
                            {role.start || ''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>
                        )}
                        {role.location ? ` • ${role.location}` : ''}
                      </div>
                    </div>
                    {role.bullets?.length ? (
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                        {role.bullets.map((b, bIdx) => (
                          <li key={`exp-${idx}-b-${bIdx}`}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Education */}
          {data.education?.length ? (
            <section className="mb-5">
              <SectionTitle>Education</SectionTitle>
              <div className="mt-2 space-y-2">
                {data.education.map((ed, idx) => (
                  <div key={`edu-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">{ed.institution}</div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]
                        .filter(Boolean)
=======

                  >                    {t}

                    {s}
                  </span>))}
                {data.technologies?.map ((t, idx) => (
                  <span;
                    key={`tech-${idx}`}
                    className='px - 2 py - 0.5 rounded border border - gray - 200 dark:border - gray - 700';
                  >                  <span key={`tech-${idx}`} className="px - 2 py - 0.5 rounded border border - gray - 200 dark:border - gray - 700">;
                    {t}

<<<<<<< HEAD
          {/* Experience */}
=======

          {/* Experience */}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {data.experience?.length ? (
            <section className='mb - 5'>;
              <SectionTitle > Work Experience</SectionTitle>;
              <div className='mt - 2 space - y-3'>;
                {data.experience.map ((role, idx) => (
                  <div key={`exp-${idx}`}>;
                    <div className='flex items - baseline justify - between'>;
                      <h3 className='font - medium text - gray - 900 dark:text - white'>;
<<<<<<< HEAD
                  </span>))}
              </div>;
            </section>)}
          {/* Experience */}
          {data.experience?.length ? (
            <section className="mb-5">
              <SectionTitle>Work Experience</SectionTitle>
                  <span
                    key={`tech-${idx}`}
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                  >                  <span key={`tech-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}
                  >                    {t}

                    {s}
                  </span>
                ))}
                {data.technologies?.map((t, idx) => (

                    {t}

                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length ? (
            <section className='mb-5'>
              <SectionTitle>Work Experience</SectionTitle>
              <div className='mt-2 space-y-3'>
                {data.experience.map((role, idx) => (
                  <div key={`exp-${idx}`}>
                    <div className='flex items-baseline justify-between'>
                      <h3 className='font-medium text-gray-900 dark:text-white'>
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>
=======
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          {data.experience?.length ? (
            <section className="mb-5">
              <SectionTitle>Work Experience</SectionTitle>


                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (              <SectionTitle>Work Experience</SectionTitle>

<<<<<<< HEAD
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start |role.end) && (              <SectionTitle>Work Experience</SectionTitle>
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (              <SectionTitle>Work Experience</SectionTitle>
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="mt-2 space-y-3">
                {data.experience.map((role, idx) => (
                  <div key={`exp-${idx}`}>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        {(role.start || role.end) && (

                          <span>
                            {role.start |''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>


<<<<<<< HEAD
                        {(role.start || role.end) && (
                        {(role.start |role.end) && (
                          <span>
                            {role.start |''}
                        {(role.start || role.end) && (
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (

                        {(role.start || role.end) && (

                          <span>
                            {role.start || ''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {data && data.experience?.length ? (;
            <section className='mb-5'>;
              <SectionTitle>Work Experience</SectionTitle>;
              <div className='mt-2 space-y-3'>;
                {data && data.experience.map((role, idx) => (;
                  <div key={`exp-${idx}`}>;
                    <div className='flex items-baseline justify-between'>;
                      <h3 className='font-medium text-gray-900 dark:text-white'>;
                        {role && role.title}
                        {role && role.company ? ` • ${role && role.company}` : ''}
                      </h3>;
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role && role.start || role && role.end) && (              <SectionTitle>Work Experience</SectionTitle>;
              <div className="mt-2 space-y-3">;
                {data && data.experience.map((role, idx) => (;
                  <div key={`exp-${idx}`}>;
                    <div className="flex items-baseline justify-between">;
                      <h3 className="font-medium text-gray-900 dark:text-white">;
                        {role && role.title}
                        {role && role.company ? ` • ${role && role.company}` : ''}
                      </h3>;
                      <div className="text-xs text-gray-600 dark:text-gray-300">;
                        {(role && role.start || role && role.end) && (;
                          <span>;
                            {role && role.start || ''}
                            {role && role.end ? ` – ${role && role.end}` : ''}
                          </span>;
                        )}
                        {role && role.location ? ` • ${role && role.location}` : ''}
                      </div>;
                    </div>;
                    {role && role.bullets?.length ? (;
                      <ul className='mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                        {role && role.bullets.map((b, bIdx) => (                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">;
                        {role && role.bullets.map((b, bIdx) => (;
                          <li key={`exp-${idx}-b-${bIdx}`}>{b}</li>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        )}
                      </h3>;
                      <div className='text - xs text - gray - 600 dark:text - gray - 300'>                        {(role.start || role.end) && (              <SectionTitle > Work Experience</SectionTitle>;
              <div className="mt - 2 space - y-3">;
                {data.experience.map ((role, idx) => (
                  <div key={`exp-${idx}`}>;
                    <div className="flex items - baseline justify - between">;
                      <h3 className="font - medium text - gray - 900 dark:text - white">;
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>;
                      <div className="text - xs text - gray - 600 dark:text - gray - 300">;
                        {(role.start || role.end) && (
                          <span>;
                            {role.start || ''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>)}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        {role.location ? ` • ${role.location}` : ''}
                      </div>;
                    </div>;
                    {role.bullets?.length ? (

<<<<<<< HEAD
                        {(role.start || role.end) && (

=======
                      <ul className='mt - 1 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1'>                        {role.bullets.map ((b, b_idx) => (                      <ul className="mt - 1 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1">;
                        {role.bullets.map ((b, b_idx) => (
                          <li key={`exp-${idx}-b-${b_idx}`}>{b}</li>))}
                      </ul>) : null}
                  </div>))}
              </div>;
            </section>) : null}

=======

                        {(role.start || role.end) && (

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (

                        {(role.start || role.end) && (



<<<<<<< HEAD
                          <span>
                            {role.start || ''}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          <span>
                            {role.start || ''}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                            {role.end ? ` – ${role.end}` : ''}
                          </span>
                        )}
                        {role.location ? ` • ${role.location}` : ''}
                      </div>
                    </div>
                    {role.bullets?.length ? (
                      <ul className='mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                        {role.bullets.map((b, bIdx) => (                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                        {role.bullets.map((b, bIdx) => (
                          <li key={`exp-${idx}-b-${bIdx}`}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}


<<<<<<< HEAD
          {/* Education */}



                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]

          {/* Education */}
          {data && data.education?.length ? (;
            <section className='mb-5'>;
              <div className='mt-2 space-y-2'>;
                {data && data.education.map((ed, idx) => (;
                  <div key={`edu-${idx}`} className='text-sm'>;
                    <div className='font-medium text-gray-900 dark:text-white'>;
                      {ed && ed.institution}
                    </div>;
                    <div className='text-gray-700 dark:text-gray-300'>;
                      {[;
                        ed && ed.degree,;
                        ed && ed.start && ed && ed.end;
                          ? `${ed && ed.start} – ${ed && ed.end}`;
                          : ed && ed.start || ed && ed.end,;
                      ]                        .filter(Boolean)                  <div key={`edu-${idx}`} className="text-sm">;
                    <div className="font-medium text-gray-900 dark:text-white">{ed && ed.institution}</div>;
                    <div className="text-gray-700 dark:text-gray-300">;
                      {[ed && ed.degree, ed && ed.start && ed && ed.end ? `${ed && ed.start} – ${ed && ed.end}` : ed && ed.start || ed && ed.end];
                        .join(' • ')}
                    </div>;
                  </div>;
          {data.education?.length ? (
            <section className="mb-5">
              <SectionTitle>Education</SectionTitle>
              <div className="mt-2 space-y-2">
                {data.education.map((ed, idx) => (
                  <div key={`edu-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">{ed.institution}</div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]
                        .filter(Boolean)
                      <ul className='mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                        {role.bullets.map((b, bIdx) => (                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                        {role.bullets.map((b, bIdx) => (
                          <li key={`exp-${idx}-b-${bIdx}`}>{b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Education */}
          {data.education?.length ? (
            <section className='mb-5'>
              <div className='mt-2 space-y-2'>
                {data.education.map((ed, idx) => (
                  <div key={`edu-${idx}`} className='text-sm'>
                    <div className='font-medium text-gray-900 dark:text-white'>
                      {ed.institution}
                    </div>
                    <div className='text-gray-700 dark:text-gray-300'>
                      {[
                        ed.degree
                        ed.start && ed.end
                          ? `${ed.start} – ${ed.end}`
                          : ed.start |ed.end
                      ]                        .filter(Boolean)                  <div key={`edu-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">{ed.institution}</div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start |ed.end]
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]

                        .filter(Boolean)


                        .filter(Boolean)

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Education */}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

          {(data.skills?.length || data.technologies?.length) && (
<section className='mb-5'    />
              <SectionTitle    />Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'    />
                {data.skills?.map((s, idx) => (}
                  <span;}
key={`skill-${idx}`}

<<<<<<< HEAD
                    className='px-2 py-0.5 rounded border border-gray-200 dark: border-gray-700'
                      />

                    {}
}
                  </span>;
                ))}
                {data.technologies?.map((t, idx) => (<span;}
                    key={`tech-${idx}`}
>>>>>>> origin/chore/fix-lint-and-merge

                    className='px-2 py-0.5 rounded border border-gray-200 dark: border-gray-700'
                      />
                    {t}

          {/* Experience *}
}
          {data.experience?.length ? (

<<<<<<< HEAD
<section className='mb-5'>'
              <SectionTitle>Work Experience</SectionTitle>
              <div className='mt-2 space-y-3'>'
                {data.experience.map((role, idx) => (
                  <div key={`exp-${idx}`}>`                    <div className='flex items-baseline justify-between'>'
                      <h3 className='font-medium text-gray-900 "dark": text-white'>'
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}'                      </h3>
                      <div className='text-xs text-gray-600 "dark":text-gray-300'>'
                        {(role.start || role.end) && (
                          <span>
                            {role.start |''}'
                            {role.end ? ` – ${role.end}` : ','}
                          </span>
          {data && data.experience?.length ? (;
            <section className='mb-5'>;'

              <SectionTitle>Work Experience</SectionTitle>;
              <div className='mt-2 space-y-3'>;'
                {data.experience.map((role, idx) => (<div key={`exp-${idx}`}>;`                    <div className='flex items-baseline justify-between'>;'
                      <h3 className='font-medium text-gray-900 "dark":text-white'>;'
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}'                      </h3>;
                      <div className='text-xs text-gray-600 "dark":text-gray-300'>;'
                        {(role.start || role.end) && (<span>{role.start |''}'
                            {role.end ? ` – ${role.end}` : ''}'                          </span>;
          {data && data.experience?.length ? (<section className='mb-5'>;'
              <SectionTitle>Work Experience</SectionTitle>;
              <div className='mt-2 space-y-3'>;'
                {data && data.experience.map((role, idx) => (<div key={`exp-${idx}`}>;`                    <div className='flex items-baseline justify-between'>;'
                      <h3 className='font-medium text-gray-900 "dark":text-white'>;'
                        {role && role.title}
                        {role && role.company ? ` • ${role && role.company}` : ''}'                      </h3>;
                      <div className='text-xs text-gray-600 "dark":text-gray-300'>                        {(role && role.start || role && role.end) && (              <SectionTitle>Work Experience</SectionTitle>;'
              <div className="mt-2 space-y-3">;"
                {data && data.experience.map((role, idx) => (<div key={`exp-${idx}`}>;`                    <div className="flex items-baseline justify-between">;"
                      <h3 className="font-medium text-gray-900 "dark":text-white">;"
                        {role && role.title}
                        {role && role.company ? ` • ${role && role.company}` : ''}'                      </h3>;
                      <div className="text-xs text-gray-600 "dark":text-gray-300">;"
                        {(role && role.start || role && role.end) && (<span>{role && role.start || ''}'
                            {role && role.end ? ` – ${role && role.end}` : ''}'                          </span>;
                        )}
                        {role && role.location ? ` • ${role && role.location}` : ''}'                      </div>;
                    </div>;
                    {role && role.bullets?.length ? (<ul className='mt-1 list-disc list-inside text-sm text-gray-800 "dark":text-gray-200 space-y-1'>                        {role && role.bullets.map((b, bIdx) => (                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 "dark":text-gray-200 space-y-1">;"
                        {role && role.bullets.map((b, bIdx) => (<li key={`exp-${idx}-b-${bIdx}`}>{b}</li>;`                          <span>{role.start || ''}'
                            {role.end ? ` – ${role.end}` : ''}'                          </span>)}{role.location ? ` • ${role.location}` : ''}'                      </div>;
                    </div>;
                    {role.bullets?.length ? (<ul className='mt - 1 list - disc list - inside text - sm text - gray - 800 "dark":text - gray - 200 space - y-1'>                        {role.bullets.map ((b, b_idx) => (                      <ul className="mt - 1 list - disc list - inside text - sm text - gray - 800 "dark":text - gray - 200 space - y-1">;"
                        {role.bullets.map ((b, b_idx) => (<li key={`exp-${idx}-b-${b_idx}`}>{b}</li>))}`                      </ul>) : null}
                  </div>))}
              </div>;
            </section>) : null}{(role.start || role.end) && (<div className='text-xs text-gray-600 "dark": text-gray-300'>                        {(role.start || role.end) && ({(role.start || role.end) && (<span>{role.start || ''}'
                            {role.end ? ` – ${role.end}` : ','}
                          </span>;
                        )}
                        {role.location ? ` • ${role.location}` : ''}'                      </div>;
                    </div>;
                    {role.bullets?.length ? (<ul className='mt-1 list-disc list-inside text-sm text-gray-800 "dark":text-gray-200 space-y-1'>;'
                        {role.bullets.map((b, bIdx) => (<li key={`exp-${idx}-b-${bIdx}`}>{b}</li>;`                        ))}
=======
<<<<<<< HEAD
=======
<section className='mb-5'    />
              <SectionTitle    />Work Experience</SectionTitle>
              <div className='mt-2 space-y-3'    />}
                {data.experience.map((role, idx) => (}
                  <div key={`exp-${idx}`}    />
                    <div className='flex items-baseline justify-between'    />
                      <h3 className='font-medium text-gray-900 dark: text-white'    />
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>
                      <div className='text-xs text-gray-600 dark:text-gray-300'    />
                        {(role.start || role.end) && (}
                          <span    />}
                            {role.start |''}
                            {role.end ? ` – ${role.end}` : '
}
                          </span>
          {data && data.experience?.length ? (;
            <section className='mb-5'    />;

              <SectionTitle    />Work Experience</SectionTitle>;}
              <div className='mt-2 space-y-3'    />;}
                {data.experience.map((role, idx) => (<div key={`exp-${idx}`}    />;
                    <div className='flex items-baseline justify-between'    />;
                      <h3 className='font-medium text-gray-900 dark:text-white'    />;
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>;
                      <div className='text-xs text-gray-600 dark:text-gray-300'    />;
                        {(role.start || role.end) && (<span    />{role.start |''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>;
          {data && data.experience?.length ? (<section className='mb-5'    />;
              <SectionTitle    />Work Experience</SectionTitle>;}
              <div className='mt-2 space-y-3'    />;}
                {data && data.experience.map((role, idx) => (<div key={`exp-${idx}`}    />;
                    <div className='flex items-baseline justify-between'    />;
                      <h3 className='font-medium text-gray-900 dark:text-white'    />;
                        {role && role.title}
                        {role && role.company ? ` • ${role && role.company}` : ''}
                      </h3>;
                      <div className='text-xs text-gray-600 dark:text-gray-300'    />                        {(role && role.start || role && role.end) && (              <SectionTitle    />Work Experience</SectionTitle>;}"
              <div className=\"mt-2 space-y-3\"    />;}
                {data && data.experience.map((role, idx) => (<div key={`exp-${idx}`}    />;"
                    <div className=\"flex items-baseline justify-between\"    />;"
                      <h3 className=\"font-medium text-gray-900 dark:text-white\"    />;
                        {role && role.title}
                        {role && role.company ? ` • ${role && role.company}` : ''}
                      </h3>;"
                      <div className=\"text-xs text-gray-600 dark:text-gray-300\"    />;
                        {(role && role.start || role && role.end) && (<span    />{role && role.start || ''}
                            {role && role.end ? ` – ${role && role.end}` : ''}
                          </span>;
                        )}
                        {role && role.location ? ` • ${role && role.location}` : ''}
                      </div>;
                    </div>;"
                    {role && role.bullets?.length ? (<ul className='mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'    />                        {role && role.bullets.map((b, bIdx) => (                      <ul className=\"mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1\"    />;}
                        {role && role.bullets.map((b, bIdx) => (<li key={`exp-${idx}-b-${bIdx}`}    />{b}</li>;
                          <span    />{role.start || ''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>)}{role.location ? ` • ${role.location}` : ''}
                      </div>;
                    </div>;"
                    {role.bullets?.length ? (<ul className='mt - 1 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1'    />                        {role.bullets.map ((b, b_idx) => (                      <ul className=\"mt - 1 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1\"    />;}
                        {role.bullets.map ((b, b_idx) => (<li key={`exp-${idx}-b-${b_idx}`}    />{b}</li>))}
                      </ul>) : null}
                  </div>))}
              </div>;
            </section>) : null}{(role.start || role.end) && (<div className='text-xs text-gray-600 dark: text-gray-300'    />                        {(role.start || role.end) && ({(role.start || role.end) && (<span    />{role.start || ''}
                            {role.end ? ` – ${role.end}` : '
}
                          </span>;
                        )}
                        {role.location ? ` • ${role.location}` : ''}
                      </div>;
                    </div>;
                    {role.bullets?.length ? (<ul className='mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'    />;}
                        {role.bullets.map((b, bIdx) => (<li key={`exp-${idx}-b-${bIdx}`}    />{b}</li>;
                        ))}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      </ul>;
                    ) : null}
                  </div>;
                ))}
              </div>;
            </section>;
<<<<<<< HEAD
          ) : null}{/* Education */}{[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end];`                        .filter(Boolean){/* Education */}
          {data && data.education?.length ? (<section className='mb-5'>;'
              <div className='mt-2 space-y-2'>;'
                {data && data.education.map((ed, idx) => (<div key={`edu-${idx}`} className='text-sm'>;'                    <div className='font-medium text-gray-900 "dark":text-white'>;'
                      {ed && ed.institution}
                    </div>;
                    <div className='text-gray-700 "dark":text-gray-300'>;'
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      {[;
                        }
                        ed && ed.degree,ed && ed.start && ed && ed.end;
                          ? `${ed && ed.start} – ${ed && ed.end}`;`                          : ed && ed.start || ed && ed.end]                        .filter(Boolean)                  <div key={`edu-${idx}`} className="text-sm">;"                    <div className="font-medium text-gray-900 "dark": text-white">{ed && ed.institutio,"
}</div>;
                    <div className="text-gray-700 "dark":text-gray-300">;"
                      {[ed && ed.degree, ed && ed.start && ed && ed.end ? `${ed && ed.start} – ${ed && ed.end}` : ed && ed.start || ed && ed.end];`                        .join(' • ')}'
                    </div>;

          {data.education?.length ? (

<section className='mb-5'>'
              <SectionTitle>Education</SectionTitle>
              <div className='mt-2 space-y-2'>'
                {data.education.map((ed, idx) => (
<<<<<<< HEAD
                  <div key={`edu-${idx}`} className='text-sm'>'                    <div className='font-medium text-gray-900 "dark": text-white'>'
                      {ed.institution}
                    </div>
                    <div className='text-gray-700 "dark":text-gray-300'>'
                      {[
                        }
                        ed.degree,
ed.start && ed.end
                          ? `${ed.start} – ${ed.en,`}``                          : ed.start || ed.end
                      ]
                        .filter(Boolean)
                        .join(' • ')}'
=======
                  <div key={`edu-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">{ed.institution}</div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]
=======
          ) : null}{/* Education */}{[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end];
                        .filter(Boolean){/* Education */}
          {data && data.education?.length ? (<section className='mb-5'    />;}
              <div className='mt-2 space-y-2'    />;}
                {data && data.education.map((ed, idx) => (<div key={`edu-${idx}`} className='text-sm'    />;
                    <div className='font-medium text-gray-900 dark:text-white'    />;
                      {ed && ed.institution}
                    </div>;
                    <div className='text-gray-700 dark:text-gray-300'    />;
                      {[;}
                        ed && ed.degree,ed && ed.start && ed && ed.end;}
                          ? `${ed && ed.start} – ${ed && ed.end}`;"
                          : ed && ed.start || ed && ed.end]                        .filter(Boolean)                  <div key={`edu-${idx}`} className=\"text-sm\"    />;"
                    <div className=\"font-medium text-gray-900 dark: text-white\"    />{ed && ed.institutio}
}</div>;"
                    <div className=\"text-gray-700 dark:text-gray-300\"    />;
                      {[ed && ed.degree, ed && ed.start && ed && ed.end ? `${ed && ed.start} – ${ed && ed.end}` : ed && ed.start || ed && ed.end];
                        .join(' • ')}
                    </div>;
                  </div>;

          {data.education?.length ? (

<section className='mb-5'    />
              <SectionTitle    />Education</SectionTitle>
              <div className='mt-2 space-y-2'    />}
                {data.education.map((ed, idx) => (}
                  <div key={`edu-${idx}`} className='text-sm'    />
                    <div className='font-medium text-gray-900 dark: text-white'    />
                      {ed.institution}
                    </div>
                    <div className='text-gray-700 dark:text-gray-300'    />
                      {[
                        ed.degree;}
ed.start && ed.end}
                          ? `${ed.start} – ${ed.en}
}`
                          : ed.start || ed.end
                      ]
>>>>>>> origin/chore/fix-lint-and-merge
                        .filter(Boolean)
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
                        .join(' • ')}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </div>
                ))}
              </div>
            </section>
<<<<<<< HEAD
          ) : null}

          {/* Certifications */}
          {data.certifications?.length ? (
<<<<<<< HEAD

<section className='mb-5'>'
              <SectionTitle>Certifications</SectionTitle>
              <ul className='mt-2 list-disc list-inside text-sm text-gray-800 "dark":text-gray-200 space-y-1'>'
                {data.certifications.map((c, idx) => (
                  <li key={`cert-${idx}`}>{c}</li>`                ))}
              </div>;
            </section>;
          ) : null}

          {/* Portfolio */}
          {portfolioItems.length ? (
<section className='mb-5'>'
              <SectionTitle>Portfolio</SectionTitle>
              <div className='mt-2 space-y-2'>'
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className='text-sm'>'                    <div className='font-medium text-gray-900 "dark": text-white'>'

                      {p.titl
}
                      {p.link && (<a;
                          }
                          className='ml-2 underline text-blue-600 "dark":text-blue-400';'
                          href={p.link}
                          target='_blank';'
                          rel='noreferrer'>'

                          link;
                        </a>;
                      )}
                    </div>;
                    {p.description && (<p className='text-gray-700 "dark":text-gray-300'>;'
                        {p.description}

                      </p>
                    )}
                    {p && p.technologies?.length ? (;
                      <div className='mt-1 text-xs flex flex-wrap gap-2'>;'
                        {p && p.technologies.map((t, tIdx) => (;
                          <span
}
key={`proj-${idx}-t-${tIdx}`}`

                            className='px-2 py-0.5 rounded border border-gray-200 "dark": border-gray-700''
                          >

                            {
}
                          </span>;
                        ))}
                      </div>;
                    ) : null}
                  </div>;
                ))}
              </div>;
            </section>;
          ) : null}
        </div>;
export default ResumePreview;


ResumePreview.displayName = 'ResumePreview';'

export default ResumePreview;
origin/cursor/automate-test-improve-and-merge-code-2533
    )}
)export default ResumePreview;ResumePreview.displayName = 'ResumePreview';export default ResumePreview;
=======
            <section className="mb-5">
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                {data.certifications.map((c, idx) => (
                  <li key={`cert-${idx}`}>{c}</li>
                ))}
              </ul>
            </section>
=======
<<<<<<< HEAD
          ) : null}
=======
>>>>>>> origin/chore/fix-lint-and-merge

          {/* Certifications */}
          {data.certifications?.length ? (
<<<<<<< HEAD

<section className='mb-5'    />
              <SectionTitle    />Certifications</SectionTitle>
              <ul className='mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'    />}
                {data.certifications.map((c, idx) => (}
                  <li key={`cert-${idx}`}    />{c}</li>
=======
            <section className="mb-5">

<<<<<<< HEAD
          {/* Certifications */}
          {data.certifications?.length ? (
            <section className='mb-5'>
              <SectionTitle>Certifications</SectionTitle>
              <ul className='mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                {data.certifications.map((c, idx) => (            <section className="mb-5">
=======




          {/* Certifications */}
          {data.certifications?.length ? (
            <section className="mb-5">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                {data.certifications.map((c, idx) => (
                  <li key={`cert-${idx}`}>{c}</li>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                ))}
              </div>;
            </section>;
>>>>>>> merged-prs-20250907-203621
          ) : null}
<<<<<<< HEAD
          {/* Certifications */}
          {data && data.certifications?.length ? (;
            <section className='mb-5'>;
              <SectionTitle>Certifications</SectionTitle>;
              <ul className='mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                {data && data.certifications.map((c, idx) => (            <section className="mb-5">;
              <SectionTitle>Certifications</SectionTitle>;
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">;
                {data && data.certifications.map((c, idx) => (;
                  <li key={`cert-${idx}`}>{c}</li>;
                ))}
              </ul>;
            </section>;
          ) : null}

          {/* Portfolio */}
          {portfolioItems.length ? (
<<<<<<< HEAD
            <section className="mb-5">
              <SectionTitle>Portfolio</SectionTitle>
              <div className="mt-2 space-y-2">
                {portfolioItems.map((p, idx) => (
=======
            <section className='mb-5'>
              <SectionTitle>Portfolio</SectionTitle>
              <div className='mt-2 space-y-2'>
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className='text-sm'>
                    <div className='font-medium text-gray-900 dark:text-white'>
                      {p.title}
                      {p.link && (

=======

          {/* Portfolio */}
          {portfolioItems.length ? (
<section className='mb-5'    />
              <SectionTitle    />Portfolio</SectionTitle>
              <div className='mt-2 space-y-2'    />}
                {portfolioItems.map((p, idx) => (}
                  <div key={`proj-${idx}`} className='text-sm'    />
                    <div className='font-medium text-gray-900 dark: text-white'    />

                      {p.titl}
}
                      {p.link && (<a;}
                          className='ml-2 underline text-blue-600 dark:text-blue-400';}
                          href={p.link}
                          target='_blank';
                          rel='noreferrer'    />

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        <a
                          className='ml-2 underline text-blue-600 dark:text-blue-400'
                          href={p.link}
                          target='_blank'
<<<<<<< HEAD
          {portfolioItems.length ? (
            <section className="mb-5">
              <SectionTitle>Portfolio</SectionTitle>
                          rel='noreferrer'
                        >                          link              <SectionTitle>Portfolio</SectionTitle>
=======
                          rel='noreferrer'>                          link              <SectionTitle>Portfolio</SectionTitle>;
              <div className="mt-2 space-y-2">;
                {portfolioItems && portfolioItems.map((p, idx) => (;
                  <div key={`proj-${idx}`} className="text-sm">;
                    <div className="font-medium text-gray-900 dark:text-white">;
                      {p && p.title}
                      {p && p.link && (;
                        <a className="ml-2 underline text-blue-600 dark:text-blue-400" href={p && p.link} target="_blank" rel="noreferrer">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                          link;
                        </a>;
                      )}
                    </div>;
                    {p.description && (<p className='text-gray-700 dark:text-gray-300'    />;}
                        {p.description}

                      </p>
                    )}
                    {p && p.technologies?.length ? (;
                      <div className='mt-1 text-xs flex flex-wrap gap-2'    />;
                        {p && p.technologies.map((t, tIdx) => (;}
                          <span;}
key={`proj-${idx}-t-${tIdx}`}

<<<<<<< HEAD
                            className='px-2 py-0.5 rounded border border-gray-200 dark: border-gray-700'
                              />

                            {}
}
                          </span>;
                        ))}
                      </div>;
                    ) : null}
                  </div>;
                ))}
              </div>;
            </section>;
          ) : null}
        </div>;
      </div>;

<<<<<<< HEAD

ResumePreview.displayName = 'ResumePreview';'

export default ResumePreview;
origin/cursor/automate-test-improve-and-merge-code-2533
    )}
)export default ResumePreview;ResumePreview.displayName = 'ResumePreview';export default ResumePreview;
=======
=======
          {portfolioItems.length ? (
            <section className="mb-5">
              <SectionTitle>Portfolio</SectionTitle>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="mt-2 space-y-2">
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                    </div>;
                    <div className='text - gray - 700 dark:text - gray - 300'>;
                      {[;
                        ed.degree,
                        ed.start && ed.end;
                          ? `${ed.start} – ${ed.end}`;
                          : ed.start || ed.end,
                      ]                        .filter (Boolean)                  <div key={`edu-${idx}`} className="text - sm">;
                    <div className="font - medium text - gray - 900 dark:text - white">{ed.institution}</div>;
                    <div className="text - gray - 700 dark:text - gray - 300">;
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end];
                        .join (' • ')}
                    </div>;
                  </div>))}
              </div>;
            </section>) : null}
          {/* Certifications */}
          {data.certifications?.length ? (
            <section className='mb - 5'>;
              <SectionTitle > Certifications</SectionTitle>;
              <ul className='mt - 2 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1'>                {data.certifications.map ((c, idx) => (            <section className="mb - 5">;
              <SectionTitle > Certifications</SectionTitle>;
              <ul className="mt - 2 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1">;
                {data.certifications.map ((c, idx) => (
                  <li key={`cert-${idx}`}>{c}</li>))}
              </ul>;
            </section>) : null}
          {/* Portfolio */}
          {portfolio_items.length ? (
            <section className='mb - 5'>;
              <SectionTitle > Portfolio</SectionTitle>;
              <div className='mt - 2 space - y-2'>;
                {portfolio_items.map ((p, idx) => (
                  <div key={`proj-${idx}`} className='text - sm'>;
                    <div className='font - medium text - gray - 900 dark:text - white'>;
                      {p.title}
                      {p.link && (
<<<<<<< HEAD
=======
                        <a;
                          className='ml - 2 underline text - blue - 600 dark:text - blue - 400';
                          href={p.link}
                          target='_blank';
                          rel='noreferrer';
                        >                          link              <SectionTitle > Portfolio</SectionTitle>;
              <div className="mt - 2 space - y-2">;
                {portfolio_items.map ((p, idx) => (
                  <div key={`proj-${idx}`} className="text - sm">;
                    <div className="font - medium text - gray - 900 dark:text - white">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      {p.title}
                      {p.link && (
                        <a className="ml - 2 underline text - blue - 600 dark:text - blue - 400" href={p.link} target="_blank" rel="noreferrer">;
                          link;
                        </a>)}
                    </div>;
                    {p.description && (
<<<<<<< HEAD

export default ResumePreview;

export default ResumePreview;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


ResumePreview && ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
<<<<<<< HEAD
ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
=======


=======

export default ResumePreview;

=======
export default ResumePreview;


ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                      <p className='text - gray - 700 dark:text - gray - 300'>;
                        {p.description}
                      </p>)}
                    {p.technologies?.length ? (<div className='mt - 1 text - xs flex flex - wrap gap - 2'>;
                        {p.technologies.map ((t, t_idx) => (<span;
                            key={`proj-${idx}-t-${t_idx}`}
                            className='px - 2 py - 0.5 rounded border border - gray - 200 dark:border - gray - 700';
                          >                            {t}                    )}
                    {p.technologies?.length ? (<div className="mt - 1 text - xs flex flex - wrap gap - 2">;
                        {p.technologies.map ((t, t_idx) => (<span key={`proj-${idx}-t-${t_idx}`} className="px - 2 py - 0.5 rounded border border - gray - 200 dark: border - gray - 700">;
                            {t}
                          </span>))}
                      </div>) : null}
                  </div>))}
              </div>;
            </section>) : null}
        </div>;
      </div>);
  }
      </div>)}ResumePreview.displayName = 'ResumePreview';export default ResumePreview;
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  <div key={`proj-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {p.title}
                      {p.link && (
                        <a className="ml-2 underline text-blue-600 dark:text-blue-400" href={p.link} target="_blank" rel="noreferrer">
                          link
                        </a>
                      )}
                    </div>
                    {p.description && (
                      <p className="text-gray-700 dark:text-gray-300">{p.description}</p>
                    )}
                    {p.technologies?.length ? (
                      <div className="mt-1 text-xs flex flex-wrap gap-2">
                        {p.technologies.map((t, tIdx) => (
                          <span key={`proj-${idx}-t-${tIdx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>
<<<<<<< HEAD
    )
  }
);

ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
=======
      </div>
    )
  }
);
ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
<<<<<<< HEAD

"
=======
<<<<<<< HEAD

"
=======
    );
  }
);

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
;
<<<<<<< HEAD
                        <a className="ml-2 underline text-blue-600 dark:text-blue-400" href={p.link} target="_blank" rel="noreferrer">
                          link
                        </a>
                      )}
                    </div>
                    {p.description && (
                      <p className='text-gray-700 dark:text-gray-300'>
                        {p.description}
                      </p>
                    )}
                    {p.technologies?.length ? (
                      <div className='mt-1 text-xs flex flex-wrap gap-2'>
                        {p.technologies.map((t, tIdx) => (
                          <span
                            key={`proj-${idx}-t-${tIdx}`}
                            className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                          >                            {t}                    )}
                    {p.technologies?.length ? (
                      <div className="mt-1 text-xs flex flex-wrap gap-2">
                        {p.technologies.map((t, tIdx) => (
                          <span key={`proj-${idx}-t-${tIdx}`} className="px-2 py-0.5 rounded border border-gray-200 dark: border-gray-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    );
  }
);
ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;

export default ResumePreview;
export default ResumePreview;

}
}
}
}
}
}
}
}
}
export default ResumePreview;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
