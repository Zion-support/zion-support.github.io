import React, { forwardRef } from 'react';

export type ResumeData = {
<<<<<<< HEAD
  name: string;
  contact?: {
    email?: string;
    phone?: string;
    location?: string;
    website?: string;
    linkedin?: string;
    github?: string;
  };
=======
  name: string,
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{
<<<<<<< HEAD
    title: string;
=======
    title: string,
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    company?: string;
    start?: string;
    end?: string;
    location?: string;
<<<<<<< HEAD
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
};

export type ResumePreviewProps = {
  data: ResumeData;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className='text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1'>
=======
    bullets?: string[]
  }>;
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
    technologies?: string[]
  }>
};

export type ResumePreviewProps = {
  data: ResumeData,
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    {children}
  </h2>
);

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {
<<<<<<< HEAD
    const portfolioItems = (data.portfolio || []).slice(
      0,
      Math.max(0, maxPortfolioItems)
    );

    
      >
        <div className='p-8'>
          {/* Header */}
          <header className='mb-6'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
              {data.name}
            </h1>
            <div className='mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap'>
=======
    const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems));

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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (
<<<<<<< HEAD
                <a
                  className='underline'
                  href={data.contact.website}
                  target='_blank'
                  rel='noreferrer'
                >
=======
                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  {data.contact.website}
                </a>
              )}
              {data.contact?.linkedin && (
<<<<<<< HEAD
                <a
                  className='underline'
                  href={data.contact.linkedin}
                  target='_blank'
                  rel='noreferrer'
                >
=======
                <a className="underline" href={data.contact.linkedin} target="_blank" rel="noreferrer">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  LinkedIn
                </a>
              )}
              {data.contact?.github && (
<<<<<<< HEAD
                <a
                  className='underline'
                  href={data.contact.github}
                  target='_blank'
                  rel='noreferrer'
                >
=======
                <a className="underline" href={data.contact.github} target="_blank" rel="noreferrer">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  GitHub
                </a>
              )}
            </div>
          </header>

          {/* Summary */}
          {data.summary && (
<<<<<<< HEAD
            <section className='mb-5'>
              <SectionTitle>Professional Summary</SectionTitle>
              <p className='mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200'>
                {data.summary}
              </p>
=======
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
            </section>
          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
<<<<<<< HEAD
            <section className='mb-5'>
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>
                {data.skills?.map((s, idx) => (
                  <span
                    key={`skill-${idx}`}
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                  >
=======
            <section className="mb-5">
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className="mt-2 text-sm flex flex-wrap gap-2">
                {data.skills?.map((s, idx) => (
                  <span key={`skill-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                    {s}
                  </span>
                ))}
                {data.technologies?.map((t, idx) => (
<<<<<<< HEAD
                  <span
                    key={`tech-${idx}`}
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                  >
=======
                  <span key={`tech-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length ? (
<<<<<<< HEAD
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
                      <div className='text-xs text-gray-600 dark:text-gray-300'>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
                      <ul className='mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>
=======
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
<<<<<<< HEAD
            <section className='mb-5'>
              <SectionTitle>Education</SectionTitle>
              <div className='mt-2 space-y-2'>
                {data.education.map((ed, idx) => (
                  <div key={`edu-${idx}`} className='text-sm'>
                    <div className='font-medium text-gray-900 dark:text-white'>
                      {ed.institution}
                    </div>
                    <div className='text-gray-700 dark:text-gray-300'>
                      {[
                        ed.degree,
                        ed.start && ed.end
                          ? `${ed.start} – ${ed.end}`
                          : ed.start || ed.end,
                      ]
=======
            <section className="mb-5">
              <SectionTitle>Education</SectionTitle>
              <div className="mt-2 space-y-2">
                {data.education.map((ed, idx) => (
                  <div key={`edu-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">{ed.institution}</div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                        .filter(Boolean)
                        .join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Certifications */}
          {data.certifications?.length ? (
<<<<<<< HEAD
            <section className='mb-5'>
              <SectionTitle>Certifications</SectionTitle>
              <ul className='mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>
=======
            <section className="mb-5">
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                {data.certifications.map((c, idx) => (
                  <li key={`cert-${idx}`}>{c}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Portfolio */}
          {portfolioItems.length ? (
<<<<<<< HEAD
            <section className='mb-5'>
              <SectionTitle>Portfolio</SectionTitle>
              <div className='mt-2 space-y-2'>
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className='text-sm'>
                    <div className='font-medium text-gray-900 dark:text-white'>
                      {p.title}
                      {p.link && (
                        <a
                          className='ml-2 underline text-blue-600 dark:text-blue-400'
                          href={p.link}
                          target='_blank'
                          rel='noreferrer'
                        >
=======
            <section className="mb-5">
              <SectionTitle>Portfolio</SectionTitle>
              <div className="mt-2 space-y-2">
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {p.title}
                      {p.link && (
                        <a className="ml-2 underline text-blue-600 dark:text-blue-400" href={p.link} target="_blank" rel="noreferrer">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                          link
                        </a>
                      )}
                    </div>
                    {p.description && (
<<<<<<< HEAD
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
                          >
=======
                      <p className="text-gray-700 dark:text-gray-300">{p.description}</p>
                    )}
                    {p.technologies?.length ? (
                      <div className="mt-1 text-xs flex flex-wrap gap-2">
                        {p.technologies.map((t, tIdx) => (
                          <span key={`proj-${idx}-t-${tIdx}`} className="px-2 py-0.5 rounded border border-gray-200 dark: border-gray-700">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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

<<<<<<< HEAD
export default ResumePreview;
=======
export default ResumePreview;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
