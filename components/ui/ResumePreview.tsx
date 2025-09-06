import React, { forwardRef } from 'react';

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
    bullets?: string[];
=======
  name: string,
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string };
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{
<<<<<<< HEAD
    title: string;
=======
    title: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    company?: string;
    start?: string;
    end?: string;
    location?: string;
<<<<<<< HEAD
    bullets?: string[];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  <h2 className='text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1'>    {children}
=======
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
    {children}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  </h2>
);

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {
    const portfolioItems = (data.portfolio || []).slice(
      0,
      Math.max(0, maxPortfolioItems)
    );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    
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
=======
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap">
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <a
                  className='underline'
                  href={data.contact.website}
                  target='_blank'
                  rel='noreferrer'
<<<<<<< HEAD
                >                  {data.contact.website}
                </a>
              )}
              {data.contact?.linkedin && (
=======
                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">
                  {data.contact.website}
                </a>
              )}
              {data.contact?.linkedin && (
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <a
                  className='underline'
                  href={data.contact.linkedin}
                  target='_blank'
                  rel='noreferrer'
<<<<<<< HEAD
                >                  LinkedIn
                </a>
              )}
              {data.contact?.github && (
=======
                <a className="underline" href={data.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {data.contact?.github && (
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <a
                  className='underline'
                  href={data.contact.github}
                  target='_blank'
                  rel='noreferrer'
<<<<<<< HEAD
                >                  GitHub
=======
                <a className="underline" href={data.contact.github} target="_blank" rel="noreferrer">
                  GitHub
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </a>
              )}
            </div>
          </header>

          {/* Summary */}
          {data.summary && (
            <section className='mb-5'>
              <SectionTitle>Professional Summary</SectionTitle>
              <p className='mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200'>
                {data.summary}
              </p>            </section>
=======
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
            <section className='mb-5'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className='mt-2 text-sm flex flex-wrap gap-2'>
                {data.skills?.map((s, idx) => (
                  <span
                    key={`skill-${idx}`}
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                  >                    {s}
                  </span>
                ))}
                {data.technologies?.map((t, idx) => (
                  <span
                    key={`tech-${idx}`}
                    className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                  >                    {t}
=======
                  <span key={`skill-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {t}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length ? (
            <section className='mb-5'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <SectionTitle>Work Experience</SectionTitle>
              <div className='mt-2 space-y-3'>
                {data.experience.map((role, idx) => (
                  <div key={`exp-${idx}`}>
                    <div className='flex items-baseline justify-between'>
                      <h3 className='font-medium text-gray-900 dark:text-white'>
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>
                      <div className='text-xs text-gray-600 dark:text-gray-300'>                        {(role.start || role.end) && (
=======
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        {(role.start || role.end) && (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                          <span>
                            {role.start || ''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>
                        )}
                        {role.location ? ` • ${role.location}` : ''}
                      </div>
                    </div>
                    {role.bullets?.length ? (
                      <ul className='mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                        {role.bullets.map((b, bIdx) => (
=======
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                        {role.bullets.map((b, bIdx) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                      ]                        .filter(Boolean)
                  <div key={`edu-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">{ed.institution}</div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                        .filter(Boolean)
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        .join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* Certifications */}
          {data.certifications?.length ? (
            <section className='mb-5'>
              <SectionTitle>Certifications</SectionTitle>
              <ul className='mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1'>                {data.certifications.map((c, idx) => (
=======
            <section className="mb-5">
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                {data.certifications.map((c, idx) => (
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  <li key={`cert-${idx}`}>{c}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Portfolio */}
          {portfolioItems.length ? (
            <section className='mb-5'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
                        >                          link
=======
                        <a className="ml-2 underline text-blue-600 dark:text-blue-400" href={p.link} target="_blank" rel="noreferrer">
                          link
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        </a>
                      )}
                    </div>
                    {p.description && (
                      <p className='text-gray-700 dark:text-gray-300'>
                        {p.description}
                      </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    )}
                    {p.technologies?.length ? (
                      <div className='mt-1 text-xs flex flex-wrap gap-2'>
                        {p.technologies.map((t, tIdx) => (
                          <span
                            key={`proj-${idx}-t-${tIdx}`}
                            className='px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700'
                          >                            {t}
=======
                          <span key={`proj-${idx}-t-${tIdx}`} className="px-2 py-0.5 rounded border border-gray-200 dark: border-gray-700">
                            {t}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
