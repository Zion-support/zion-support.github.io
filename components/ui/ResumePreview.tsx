
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

import React, { forward_ref } from 'react';
export type ResumeData = {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export type ResumeData = {;
import React, { forward_ref } from 'react';
export type ResumeData = {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

    bullets?: string[];  name: string,

=======
    bullets?: string[];  name: string,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string }
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{
    title: string;    title: string
=======
    bullets?: string[];  name: string,;
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string };
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{;
    title: string;    title: string,;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    company?: string;
    start?: string;
    end?: string;
    location?: string;
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    {children}

export type ResumePreviewProps = {;
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
    bullets?: string[];
  }>;
=======
};
export type ResumePreviewProps = {;
  data: ResumeData;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  education?: Array<{;
    institution: string;
    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];
<<<<<<< HEAD
  portfolio?: Array<{;
    title: string;
    description?: string;
    link?: string;
    technologies?: string[];
  }>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  education?: Array<{
    institution: string,
    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];
  portfolio?: Array<{
    title: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    description?: string;
    link?: string;


  data: ResumeData,;


  theme?: 'light' | 'dark';
  maxPortfolioItems?: number
}
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
};

=======
=======
};

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    technologies?: string[];
  }>;
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export type ResumePreviewProps = {
  data: ResumeData,
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;
}
;
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    const portfolioItems = (data.portfolio || []).slice(
      0,
      Math.max(0, maxPortfolioItems);

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    );

      >
        <div className='p-8'>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems));
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(;
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {;
    const portfolioItems = (data && data.portfolio || []).slice(;
      0,;
      Math && Math.max(0, maxPortfolioItems);
    );
<<<<<<< HEAD


      >;
        <div className='p-8'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {/* Header */}
          <header className='mb-6'>;
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>;
              {data && data.name}
            </h1>;
            <div className='mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap'>              {data && data.contact?.email && <span>{data && data.contact.email}</span>}
              {data && data.contact?.phone && <span>{data && data.contact.phone}</span>}
              {data && data.contact?.location && <span>{data && data.contact.location}</span>}
              {data && data.contact?.website && (;
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return (
      <div;
        ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {data.contact.website}
                </a>)}
              {data.contact?.linkedin && (

            </div>;
          </header>;
=======

=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (
                  {data.contact.website}
                </a>)}
              {data.contact?.linkedin && (
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
            </div>;
          </header>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {/* Summary */}

          {data.summary && (
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>
<<<<<<< HEAD

=======


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          )}
          {/* Skills & Technologies */}
          {(data.skills?.length |data.technologies?.length) && (

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          {/* Skills & Technologies */}
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
            <section className='mb-5'>
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>
                {data.skills?.map((s, idx) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
          {(data && data.skills?.length || data && data.technologies?.length) && (;
            <section className='mb-5'>;
              <SectionTitle>Skills & Technologies</SectionTitle>;
              <div className='mt-2 text-sm flex flex-wrap gap-2'>;
                {data && data.skills?.map((s, idx) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          {(data.skills?.length |data.technologies?.length) && (


=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
            <section className='mb-5'>
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>
                {data.skills?.map((s, idx) => (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
          {(data.skills?.length || data.technologies?.length) && (
            <section className="mb-5">
              <SectionTitle>Skills & Technologies</SectionTitle>
=======
                    className='px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700'>                    {t}              <SectionTitle>Skills & Technologies</SectionTitle>;
              <div className="mt-2 text-sm flex flex-wrap gap-2">;
                {data && data.skills?.map((s, idx) => (;
                  <span key={`skill-${idx}`} className="px-2 py-0 && 0.5 rounded border border-gray-200 dark:border-gray-700">;
                    {s}
                  </span>;
          {(data.skills?.length || data.technologies?.length) && (
            <section className="mb-5">
              <SectionTitle>Skills & Technologies</SectionTitle>
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                  >                    {t}              <SectionTitle>Skills & Technologies</SectionTitle>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
=======
                ))}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'


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
<<<<<<< HEAD

          {/* Experience */}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          {/* Experience */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          {/* Experience */}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {data.experience?.length ? (
            <section className='mb - 5'>;
              <SectionTitle > Work Experience</SectionTitle>;
              <div className='mt - 2 space - y-3'>;
                {data.experience.map ((role, idx) => (
                  <div key={`exp-${idx}`}>;
                    <div className='flex items - baseline justify - between'>;
                      <h3 className='font - medium text - gray - 900 dark:text - white'>;
<<<<<<< HEAD
<<<<<<< HEAD
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          {data.experience?.length ? (
            <section className="mb-5">
              <SectionTitle>Work Experience</SectionTitle>


                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (              <SectionTitle>Work Experience</SectionTitle>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start |role.end) && (              <SectionTitle>Work Experience</SectionTitle>
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (              <SectionTitle>Work Experience</SectionTitle>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
          {/* Experience */}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        {(role.start || role.end) && (

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          <span>
                            {role.start |''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>
<<<<<<< HEAD


<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                        )}
                        {role && role.location ? ` • ${role && role.location}` : ''}
                      </div>;
                    </div>;
                    {role && role.bullets?.length ? (;
                      <ul className='mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                        {role && role.bullets.map((b, bIdx) => (                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">;
                        {role && role.bullets.map((b, bIdx) => (;
                          <li key={`exp-${idx}-b-${bIdx}`}>{b}</li>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        )}
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                          <span>;
                            {role.start || ''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>)}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        {role.location ? ` • ${role.location}` : ''}
                      </div>;
                    </div>;
                    {role.bullets?.length ? (
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      <ul className='mt - 1 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1'>                        {role.bullets.map ((b, b_idx) => (                      <ul className="mt - 1 list - disc list - inside text - sm text - gray - 800 dark:text - gray - 200 space - y-1">;
                        {role.bullets.map ((b, b_idx) => (
                          <li key={`exp-${idx}-b-${b_idx}`}>{b}</li>))}
                      </ul>) : null}
                  </div>))}
              </div>;
            </section>) : null}

                        {(role.start || role.end) && (

<<<<<<< HEAD
=======
=======
                        {(role.start || role.end) && (

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (

                        {(role.start || role.end) && (

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          <span>
                            {role.start || ''}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
                          <span>
                            {role.start || ''}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                          <span>
                            {role.start || ''}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Education */}


=======

                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          {/* Education */}



                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]

                        .filter(Boolean)


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
<<<<<<< HEAD
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                        .join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>
<<<<<<< HEAD
          ) : null}
<<<<<<< HEAD




=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          {/* Certifications */}
          {data.certifications?.length ? (
            <section className="mb-5">
<<<<<<< HEAD
=======





          {/* Certifications */}
          {data.certifications?.length ? (
            <section className="mb-5">

          {/* Certifications */}
          {data.certifications?.length ? (
            <section className='mb-5'>
              <SectionTitle>Certifications</SectionTitle>
              <ul className='mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                {data.certifications.map((c, idx) => (            <section className="mb-5">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                {data.certifications.map((c, idx) => (
                  <li key={`cert-${idx}`}>{c}</li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                ))}
              </div>;
            </section>;
          ) : null}
<<<<<<< HEAD
<<<<<<< HEAD


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

          {/* Portfolio */}
          {portfolioItems.length ? (
            <section className='mb-5'>
              <SectionTitle>Portfolio</SectionTitle>
              <div className='mt-2 space-y-2'>
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className='text-sm'>
                    <div className='font-medium text-gray-900 dark:text-white'>
                      {p.title}
                      {p.link && (

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
                        <a
                          className='ml-2 underline text-blue-600 dark:text-blue-400'
                          href={p && p.link}
                          target='_blank'
<<<<<<< HEAD
=======
                          target='_blank'
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
          {portfolioItems.length ? (
            <section className="mb-5">
              <SectionTitle>Portfolio</SectionTitle>
=======
          {portfolioItems.length ? (
            <section className="mb-5">
              <SectionTitle>Portfolio</SectionTitle>
                          rel='noreferrer'
                        >                          link              <SectionTitle>Portfolio</SectionTitle>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <div className="mt-2 space-y-2">
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
=======
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                      {p.title}
                      {p.link && (
                        <a className="ml - 2 underline text - blue - 600 dark:text - blue - 400" href={p.link} target="_blank" rel="noreferrer">;
                          link;
                        </a>)}
                    </div>;
                    {p.description && (
<<<<<<< HEAD
<<<<<<< HEAD
=======

export default ResumePreview;

export default ResumePreview;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


ResumePreview && ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
<<<<<<< HEAD


=======

export default ResumePreview;

=======
=======
                            {t}
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
    );
  }
);
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default ResumePreview;


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
);
;
ResumePreview.display_name = 'ResumePreview';
;
export default ResumePreview;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
