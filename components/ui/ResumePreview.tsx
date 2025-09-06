<<<<<<< HEAD
<<<<<<< HEAD
import React, { forwardRef } from 'react';

export type ResumeData = {

=======


=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React, { forward_ref } from 'react';
export type ResumeData = {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  name: string;
  contact?: {;
    email?: string;
    phone?: string;
    location?: string;
    website?: string;
    linkedin?: string;
    github?: string;
  }  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{;
    title: string;    company?: string;
    start?: string;
    end?: string;
    location?: string;
<<<<<<< HEAD

    bullets?: string[];  name: string,

=======
    bullets?: string[];  name: string,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string }
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{
    title: string;    title: string
    bullets?: string[];  name: string,;
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string };
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{;
    title: string;    title: string,;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    company?: string;
    start?: string;
    end?: string;
    location?: string;
<<<<<<< HEAD
<<<<<<< HEAD

export type ResumePreviewProps = {;

=======


};
=======

    {children}


export type ResumePreviewProps = {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======
=======
    bullets?: string[];
  }>;
  education?: Array<{;
    institution: string;
    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];
  portfolio?: Array<{;
    title: string;
    description?: string;
    link?: string;
    technologies?: string[];
  }>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
export type ResumePreviewProps = {;
  data: ResumeData;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;
};
const SectionTitle: React.FC<{ children: React && React.ReactNode }> = ({;
  children,;
}) => (;
  <h2 className='text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1'>    {children}  }>;
  education?: Array<{;
    institution: string,;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  education?: Array<{
    institution: string,
    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];
  portfolio?: Array<{
    title: string,
    description?: string;
    link?: string;
<<<<<<< HEAD
<<<<<<< HEAD
    technologies?: string[]
  }>
}
export type ResumePreviewProps = {
=======


  data: ResumeData,;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  theme?: 'light' | 'dark';
  maxPortfolioItems?: number
}
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
<<<<<<< HEAD
    {children}
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
    technologies?: string[];
  }>;
}
;
export type ResumePreviewProps = {
  data: ResumeData,
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;
}
;
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
  </h2>
);
export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {

    );
=======
    const portfolioItems = (data.portfolio || []).slice(
      0,
      Math.max(0, maxPortfolioItems);

    );



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

      >
        <div className='p-8'>
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems));
export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(;
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {;
    const portfolioItems = (data && data.portfolio || []).slice(;
      0,;
      Math && Math.max(0, maxPortfolioItems);
    );
      >;
        <div className='p-8'>;
          {/* Header */}
          <header className='mb-6'>;
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>;
              {data && data.name}
            </h1>;
            <div className='mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap'>              {data && data.contact?.email && <span>{data && data.contact.email}</span>}
              {data && data.contact?.phone && <span>{data && data.contact.phone}</span>}
              {data && data.contact?.location && <span>{data && data.contact.location}</span>}
              {data && data.contact?.website && (;
  <h2 className="text - lg font - semibold tracking - wide text - gray - 800 dark:text - gray - 100 border - b border - gray - 200 dark:border - gray - 700 pb - 1">;
    {children}
  </h2>);
;
export const ResumePreview = forward_ref < HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {
    const portfolio_items = (data.portfolio || []).slice (
      0,
      Math.max (0, maxPortfolioItems));
;
      >;
        <div className='p - 8'>;
          {/* Header */}
          <header className='mb - 6'>;
            <h1 className='text - 3xl font - bold text - gray - 900 dark:text - white'>;
              {data.name}
            </h1>;
            <div className='mt - 2 text - sm text - gray - 600 dark:text - gray - 300 space - x-3 flex flex - wrap'>              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (
    return (
      <div;
        ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
        className={`resume-a4 ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <div className="p-8">
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap">
=======
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

=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (
<<<<<<< HEAD
<<<<<<< HEAD

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<a;
                  className='underline';
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <a
                  className='underline'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  href={data.contact.website}
                  target='_blank';
                  rel='noreferrer';
                >                  {data.contact.website}
<<<<<<< HEAD
                </a>)}
              {data.contact?.linkedin && (                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">;
=======
                </a>
              )}
              {data.contact?.linkedin && (                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {data.contact.website}
                </a>)}
              {data.contact?.linkedin && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
            </div>;
          </header>;
          {/* Summary */}
          {data.summary && (
            <section className="mb-5">
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                  GitHub
                </a>
              )}
            </div>
          </header>
<<<<<<< HEAD

=======
<<<<<<< HEAD

            </div>;
          </header>;
=======

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {/* Summary */}

          {data.summary && (
<<<<<<< HEAD
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>

<<<<<<< HEAD
=======
=======
            <section className='mb-5'>
              <SectionTitle>Professional Summary</SectionTitle>
              <p className='mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200'>
                {data.summary}
              </p>            </section>            <section className="mb-5">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>
          )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Summary */}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
          {/* Skills & Technologies */}
<<<<<<< HEAD



=======
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <section className='mb-5'>
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>
                {data.skills?.map((s, idx) => (
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {(data && data.skills?.length || data && data.technologies?.length) && (;
            <section className='mb-5'>;
              <SectionTitle>Skills & Technologies</SectionTitle>;
              <div className='mt-2 text-sm flex flex-wrap gap-2'>;
                {data && data.skills?.map((s, idx) => (;
=======
          {(data.skills?.length |data.technologies?.length) && (


          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
            <section className='mb-5'>
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>
                {data.skills?.map((s, idx) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <span
                    key={`skill-${idx}`}
                    className='px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700'>                    {s}
                  </span>;
                ))}
                {data && data.technologies?.map((t, idx) => (;
                  <span
                    key={`tech-${idx}`}
<<<<<<< HEAD
<<<<<<< HEAD
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'

=======

=======
=======
                    className='px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700'>                    {t}              <SectionTitle>Skills & Technologies</SectionTitle>;
              <div className="mt-2 text-sm flex flex-wrap gap-2">;
                {data && data.skills?.map((s, idx) => (;
                  <span key={`skill-${idx}`} className="px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700">;
                    {s}
                  </span>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {(data.skills?.length || data.technologies?.length) && (
            <section className="mb-5">
              <SectionTitle>Skills & Technologies</SectionTitle>
=======
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                  >                    {t}              <SectionTitle>Skills & Technologies</SectionTitle>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="mt-2 text-sm flex flex-wrap gap-2">
                {data.skills?.map((s, idx) => (
                  <span key={`skill-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {s}
                  </span>
                ))}
                {data.technologies?.map((t, idx) => (
<<<<<<< HEAD
                  <span key={`tech-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {t}
                  </span>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
<span key={`tech-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {t}
                  </span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                  className='underline';
                  href={data.contact.linkedin}
                  target='_blank';
                  rel='noreferrer';
                >                  LinkedIn;
                </a>)}
              {data.contact?.github && (                <a className="underline" href={data.contact.linkedin} target="_blank" rel="noreferrer">;
                  LinkedIn;
                </a>)}
              {data.contact?.github && (
                <a;
                  className='underline';
                  href={data.contact.github}
                  target='_blank';
                  rel='noreferrer';
                >                  GitHub                <a className="underline" href={data.contact.github} target="_blank" rel="noreferrer">;
                  GitHub;
                </a>)}
            </div>;
          </header>;
          {/* Summary */}
          {data.summary && (
            <section className='mb - 5'>;
              <SectionTitle > Professional Summary</SectionTitle>;
              <p className='mt - 2 text - sm leading - relaxed text - gray - 800 dark:text - gray - 200'>;
                {data.summary}
              </p>            </section>            <section className="mb - 5">;
              <SectionTitle > Professional Summary</SectionTitle>;
              <p className="mt - 2 text - sm leading - relaxed text - gray - 800 dark:text - gray - 200">{data.summary}</p>;
            </section>)}
          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
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
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  >                    {t}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {s}
                  </span>))}
                {data.technologies?.map ((t, idx) => (
                  <span;
                    key={`tech-${idx}`}
                    className='px - 2 py - 0.5 rounded border border - gray - 200 dark:border - gray - 700';
                  >                  <span key={`tech-${idx}`} className="px - 2 py - 0.5 rounded border border - gray - 200 dark:border - gray - 700">;
                    {t}
<<<<<<< HEAD

<<<<<<< HEAD
                  </span>
                ))}

              </div>
            </section>
          )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          {/* Experience */}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {data.experience?.length ? (
            <section className='mb - 5'>;
              <SectionTitle > Work Experience</SectionTitle>;
              <div className='mt - 2 space - y-3'>;
                {data.experience.map ((role, idx) => (
                  <div key={`exp-${idx}`}>;
                    <div className='flex items - baseline justify - between'>;
                      <h3 className='font - medium text - gray - 900 dark:text - white'>;
=======
                  </span>))}
              </div>;
            </section>)}
          {/* Experience */}
          {data.experience?.length ? (
            <section className="mb-5">
              <SectionTitle>Work Experience</SectionTitle>
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>
<<<<<<< HEAD
<<<<<<< HEAD

=======

          {data.experience?.length ? (
            <section className="mb-5">
              <SectionTitle>Work Experience</SectionTitle>

=======

                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (              <SectionTitle>Work Experience</SectionTitle>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start |role.end) && (              <SectionTitle>Work Experience</SectionTitle>
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (              <SectionTitle>Work Experience</SectionTitle>
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
                        {(role.start || role.end) && (

                          <span>
                            {role.start |''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>


=======
                        {(role.start || role.end) && (
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        {(role.start |role.end) && (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                          <span>
                            {role.start |''}
                        {(role.start || role.end) && (
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (

                        {(role.start || role.end) && (

                          <span>
                            {role.start || ''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        {role.location ? ` • ${role.location}` : ''}
                      </div>;
                    </div>;
                    {role.bullets?.length ? (
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <ul className='mt - 1 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1'>                        {role.bullets.map ((b, b_idx) => (                      <ul className="mt - 1 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1">;
                        {role.bullets.map ((b, b_idx) => (
                          <li key={`exp-${idx}-b-${b_idx}`}>{b}</li>))}
                      </ul>) : null}
                  </div>))}
              </div>;
            </section>) : null}
<<<<<<< HEAD

=======

                        {(role.start || role.end) && (

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (

                        {(role.start || role.end) && (

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          <span>
                            {role.start || ''}

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

<<<<<<< HEAD
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

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Education */}


=======

                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
=======
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                        .join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
<<<<<<< HEAD
<<<<<<< HEAD
{/* Certifications */}
          {data.certifications?.length ? (
            <section className="mb-5">
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {/* Certifications */}
          {data.certifications?.length ? (
            <section className="mb-5">
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {/* Certifications */}
          {data.certifications?.length ? (
            <section className='mb-5'>
              <SectionTitle>Certifications</SectionTitle>
              <ul className='mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                {data.certifications.map((c, idx) => (            <section className="mb-5">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                {data.certifications.map((c, idx) => (
                  <li key={`cert-${idx}`}>{c}</li>
                ))}
              </div>;
            </section>;
          ) : null}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
          {/* Portfolio */}
          {portfolioItems.length ? (
=======
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
<<<<<<< HEAD
          {/* Portfolio */}
          {portfolioItems.length ? (
            <section className="mb-5">
              <SectionTitle>Portfolio</SectionTitle>
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

          {/* Portfolio */}
          {portfolioItems.length ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <section className='mb-5'>
              <SectionTitle>Portfolio</SectionTitle>
              <div className='mt-2 space-y-2'>
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className='text-sm'>
                    <div className='font-medium text-gray-900 dark:text-white'>
                      {p.title}
                      {p.link && (
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        <a
                          className='ml-2 underline text-blue-600 dark:text-blue-400'
                          href={p.link}
                          target='_blank'
<<<<<<< HEAD
                          rel='noreferrer'>                          link              <SectionTitle>Portfolio</SectionTitle>;
              <div className="mt-2 space-y-2">;
                {portfolioItems && portfolioItems.map((p, idx) => (;
                  <div key={`proj-${idx}`} className="text-sm">;
                    <div className="font-medium text-gray-900 dark:text-white">;
                      {p && p.title}
                      {p && p.link && (;
                        <a className="ml-2 underline text-blue-600 dark:text-blue-400" href={p && p.link} target="_blank" rel="noreferrer">;
                          link;
                        </a>;
                      )}
                    </div>;
                    {p && p.description && (;
                      <p className='text-gray-700 dark:text-gray-300'>;
                        {p && p.description}
                      </p>;
                    )}
                    {p && p.technologies?.length ? (;
                      <div className='mt-1 text-xs flex flex-wrap gap-2'>;
                        {p && p.technologies.map((t, tIdx) => (;
                          <span
                            key={`proj-${idx}-t-${tIdx}`}
                            className='px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700'>                            {t}                    )}
                    {p && p.technologies?.length ? (;
                      <div className="mt-1 text-xs flex flex-wrap gap-2">;
                        {p && p.technologies.map((t, tIdx) => (;
                          <span key={`proj-${idx}-t-${tIdx}`} className="px-2 py-0 && 0.5 rounded border border-gray-200 dark: border-gray-700">;

=======
          {portfolioItems.length ? (
            <section className="mb-5">
              <SectionTitle>Portfolio</SectionTitle>
=======
                          rel='noreferrer'
                        >                          link              <SectionTitle>Portfolio</SectionTitle>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      {p.title}
                      {p.link && (
                        <a className="ml - 2 underline text - blue - 600 dark:text - blue - 400" href={p.link} target="_blank" rel="noreferrer">;
                          link;
                        </a>)}
                    </div>;
                    {p.description && (
<<<<<<< HEAD


ResumePreview && ResumePreview.displayName = 'ResumePreview';


export default ResumePreview;


=======

export default ResumePreview;

=======
export default ResumePreview;


=======
ResumePreview && ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <p className='text - gray - 700 dark:text - gray - 300'>;
                        {p.description}
                      </p>)}
                    {p.technologies?.length ? (
                      <div className='mt - 1 text - xs flex flex - wrap gap - 2'>;
                        {p.technologies.map ((t, t_idx) => (
                          <span;
                            key={`proj-${idx}-t-${t_idx}`}
                            className='px - 2 py - 0.5 rounded border border - gray - 200 dark:border - gray - 700';
                          >                            {t}                    )}
                    {p.technologies?.length ? (
                      <div className="mt - 1 text - xs flex flex - wrap gap - 2">;
                        {p.technologies.map ((t, t_idx) => (
                          <span key={`proj-${idx}-t-${t_idx}`} className="px - 2 py - 0.5 rounded border border - gray - 200 dark: border - gray - 700">;
                            {t}
                          </span>))}
                      </div>) : null}
                  </div>))}
              </div>;
            </section>) : null}
        </div>;
      </div>);
  }
);
;
ResumePreview.display_name = 'ResumePreview';
;
export default ResumePreview;
<<<<<<< HEAD

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
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
