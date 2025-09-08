
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { forwardRef } from 'react';'

<<<<<<< HEAD

  name: string;
  contact?: {;

    email?: string;



=======
export type ResumeData = any;
  contact?: {


import React, { forwardRef } from 'react';'

export type ResumeData = any;
  contact?: {
    }
    email?: string;

;
export type ResumeData = {import React, { forward_ref } from 'react';
export type ResumeData = {name: string;
  contact?: {import React, { forwardRef } from 'react';
export type ResumeData = any;
  contact?: {email?: string;

>>>>>>> origin/cursor/delete-old-data-records-6bba
    phone?: string;
    location?: string;
    website?: string;
    linkedin?: string;
<<<<<<< HEAD


  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string }
=======
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

}
    github?: string}
};
>>>>>>> origin/cursor/delete-old-data-records-6bba

  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{

<<<<<<< HEAD
title: string;


=======

    title: string;    title: string
    bullets?: string[];  name: string,;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string };
  summary?: string;
  skills?: string[];
  technologies?: string[];
<<<<<<< HEAD

  experience?: Array<{;
    title: string;    title: string,;



    company?: string;
    start?: string;
    end?: string;
    location?: string;


bullets?: string[];}
}
  }>;
  education?: Array<{institution: string;
=======

    github?: string;}  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{title: string;    company?: string;
    start?: string;
    end?: string;
    location?: string;
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string }}summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{title: string;    title: string;
    bullets?: string[];  name: string,contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string }summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{title: string;    title: string,title: string;company?: string;
    start?: string;
    end?: string;
    location?: string;}{children}export type ResumePreviewProps = {bullets?: string[];
  }>;
  education?: Array<{"institution": string;
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba
    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];
  portfolio?: Array<{"title": string;
    }
    description?: string;
    link?: string;
    technologies?: string[];
  }>;
}
<<<<<<< HEAD



  data: ResumeData;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;

=======
export type ResumePreviewProps = {
  }
  "data": ResumeData;
  theme?: 'light' | 'dark';'
  maxPortfolioItems?: number;
  data: ResumeData;
  theme?: 'light' | 'dark';}
  maxPortfolioItems?: number;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({}
  children}
}) => (
<<<<<<< HEAD

  portfolio?: Array<{;
    title: string;
    description?: string;
    link?: string;
    technologies?: string[];
  }>;


    return (
      <div
        ref={ref}
        className={`resume-a4 ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >


    degree?: string;
    start?: string;
    end?: string;
  }>;
  certifications?: string[];




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



  data: ResumeData,;


  theme?: 'light' | 'dark';
  maxPortfolioItems?: number
}
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">

export type ResumePreviewProps = {
  data: ResumeData,
  theme?: 'light' | 'dark';
export type ResumePreviewProps = $2;
  theme?: 'light' | 'dark',
  maxPortfolioItems?: number
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (



=======
  <h2 className=text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1'>    {children}  }>;
  education?: Array<{
    institution: string

const portfolioItems = (data.portfolio || []).slice(;
      0,
      Math.max(0, maxPortfolioItems);

    );




      >
        <div className='p-8'>

        <div className = 'p-8'>'
   ;
  const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems));

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(;
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {;
    const portfolioItems = (data && data.portfolio || []).slice(;
      0,;
      Math && Math.max(0, maxPortfolioItems);
    );
      >;
        <div className='p-8'>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap">
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
<<<<<<< HEAD

            </h1>
            <div className=mt-2 text-sm text-gray-600 dark: text-gray-300 space-x-3 flex flex-wrap'    />

=======

              {data && data.contact?.location && <span>{data && data.contact.location}</span
}
              {data && data.contact?.website && (<h2 className="text - lg font - semibold tracking - wide text - gray - 800 "dark":text - gray - 100 border - b border - gray - 200 "dark":border - gray - 700 pb - 1">;"
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
              {data.contact?.email && <span    />{data.contact.email}</span>}
              {data.contact?.phone && <span    />{data.contact.phone}</span>}
              {data.contact?.location && <span    />{data.contact.location}</span>}
              {data.contact?.website && (

<a
}
className='underline''
                  href={data.contact.website}
                  target='_blank''
                  rel='noreferrer''
                >
              {data.name}</h1>;
            <div className='mt - 2 text - sm text - gray - 600 dark:text - gray - 300 space - x-3 flex flex - wrap'>              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (return (<div;
        ref={ref}</h1>;
            <div className='mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap'>;
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (<a;
                  className='underline';
                  href={data.contact.website}
                  target='_blank';
                  rel='noreferrer';
                >;

                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">
                  {data.contact.website}
                </a>
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
        className={`resume-a4 ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}><div className="p-8">
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
              {data.contact?.github && (<a;
                  }
                  className='underline';'
                  href={data.contact.github}
                  target='_blank';'
                  rel='noreferrer'>'

                  GitHub
                </a>
              )}
            </div>
          </header>
import React, { forwardRef } from 'react';


                  {data.contact.website}
                </a>)}
              {data.contact?.linkedin && (

            </div>;
          </header>;







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
          {/* Summary */}

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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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





=======



          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
<section className='mb-5'>'
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>'
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
              <div className="mt-2 text-sm flex flex-wrap gap-2">
                {data.skills?.map((s, idx) => (
                  <span key={`skill-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {s}
                  </span>
                ))}
                {data.technologies?.map((t, idx) => (
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  className='underline';
                  href={data.contact.website}
                  target='_blank';
                  rel='noreferrer';
                >;

<<<<<<< HEAD

                  {data.contact.website}

                </a>

}
              {data.contact?.linkedin && (<a;}
                  className='underline';}
=======
                    />

                  {data.contact.website}
                </a>
              )}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  href={data.contact.linkedin}
                  target='_blank';
                  rel='noreferrer'    />

                  LinkedIn;
                </a>;
              )}
<<<<<<< HEAD

=======
              {data.contact?.linkedin && (
                <a className="underline" href={data.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {data.contact?.github && (
                <a className="underline" href={data.contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
>>>>>>> origin/cursor/delete-old-data-records-6bba
              )}
            </div>
          </header>





          {/* Summary */}

          {data.summary && (
<<<<<<< HEAD



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


          {data.experience?.length ? (
            <section className='mb - 5'>;
              <SectionTitle > Work Experience</SectionTitle>;
              <div className='mt - 2 space - y-3'>;
                {data.experience.map ((role, idx) => (
                  <div key={`exp-${idx}`}>;
                    <div className='flex items - baseline justify - between'>;
                      <h3 className='font - medium text - gray - 900 dark:text - white'>;

                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}

=======
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>
}
              </p>;
            </section>;
          )}
          {/* Skills & Technologies */}
          {/* Skills & Technologies */}





          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (

<section className='mb-5'>'
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>'
                {data.skills?.map((s, idx) => (
                  <span
}
key={`skill-${idx}`}`
                    className='px-2 py-0.5 rounded border border-gray-200 "dark": border-gray-700''
                  >


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
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'

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
                    {t}


          {/* Experience *
}
          {data.experience?.length ? (
>>>>>>> origin/cursor/delete-old-data-records-6bba

          {data.experience?.length ? (
            <section className="mb-5">
              <SectionTitle>Work Experience</SectionTitle>


                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (              <SectionTitle>Work Experience</SectionTitle>


<<<<<<< HEAD


              <div className="mt-2 space-y-3">
=======
              <div className='mt-2 space-y-3'>'
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
                        {role.company ? ` • ${role.company}` : ''}'                      </h3>
                      <div className='text-xs text-gray-600 "dark":text-gray-300'>'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        {(role.start || role.end) && (

                          <span>
                            {role.start |''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>



<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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



                            {role.end ? ` – ${role.end}` : ''}
                          </span>
=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        )}
                        {role.location ? ` • ${role.location}` : ''}'                      </div>;
                    </div>;
                    {role.bullets?.length ? (<ul className='mt-1 list-disc list-inside text-sm text-gray-800 "dark":text-gray-200 space-y-1'>;'
                        {role.bullets.map((b, bIdx) => (<li key={`exp-${idx}-b-${bIdx}`}>{b}</li>;`                        ))}
                      </ul>;
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}


<<<<<<< HEAD



          {/* Education */}






=======


          {(data.skills?.length || data.technologies?.length) && (
<section className='mb-5'    />
              <SectionTitle    />Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'    />
                {data.skills?.map((s, idx) => (}
                  <span;}
key={`skill-${idx}`}

                    className='px-2 py-0.5 rounded border border-gray-200 dark: border-gray-700'
                      />

                    {}
}
                  </span>;
                ))}
                {data.technologies?.map((t, idx) => (<span;}
                    key={`tech-${idx}`}

                    className='px-2 py-0.5 rounded border border-gray-200 dark: border-gray-700'
                      />
                    {t}

          {/* Experience *}
}
          {data.experience?.length ? (


<section className='mb-5'>'
              <SectionTitle>Education</SectionTitle>
              <div className='mt-2 space-y-2'>'
                {data.education.map((ed, idx) => (
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

                        .join(' • ')}
                    </div>
                ))}
              </div>
            </section>
<<<<<<< HEAD


                ))}
              </div>;
            </section>;

          ) : null}

            <section className='mb-5'>
              <SectionTitle>Portfolio</SectionTitle>
              <div className='mt-2 space-y-2'>
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className='text-sm'>
                    <div className='font-medium text-gray-900 dark:text-white'>
                      {p.title}
                      {p.link && (


=======
          ) : null}

          {/* Certifications */}
          {data.certifications?.length ? (

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


export default ResumePreview;
ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;
origin/cursor/automate-test-improve-and-merge-code-2533
    )}
)export default ResumePreview;ResumePreview.displayName = 'ResumePreview';export default ResumePreview;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
    )
  }
);
<<<<<<< HEAD
ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;




=======

ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;

;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
