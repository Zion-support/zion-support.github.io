import React, { forwardRef } from 'react';
export type ResumeData = {

=======
  name: string,
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  summary?: string,
  skills?: string[];
  technologies?: string[];
  experience?: Array<{

=======
    title: string,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    company?: string;
    start?: string;
    end?: string;
    location?: string;

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
  theme?: 'light' | 'dark',
  maxPortfolioItems?: number
},


=======
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    {children}
  </h2>
),

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {


    return (
      <div
        ref={ref}
        className={`resume-a4 ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <div className="p-8">
          {/* Header */}

=======
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (

=======
                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {data.contact.website}
                </a>
              )}
              {data.contact?.linkedin && (

=======
                <a className="underline" href={data.contact.linkedin} target="_blank" rel="noreferrer">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  LinkedIn
                </a>
              )}
              {data.contact?.github && (

=======
                <a className="underline" href={data.contact.github} target="_blank" rel="noreferrer">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  GitHub
                </a>
              )}
            </div>
          </header>

          {/* Summary */}
          {data.summary && (

=======
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            </section>
          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (

              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className="mt-2 text-sm flex flex-wrap gap-2">
                {data.skills?.map((s, idx) => (

=======
                  <span key={`skill-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {s}
                  </span>
                ))}
                {data.technologies?.map((t, idx) => (

=======
                  <span key={`tech-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length ? (

              <SectionTitle>Work Experience</SectionTitle>
              <div className="mt-2 space-y-3">
                {data.experience.map((role, idx) => (
                  <div key={`exp-${idx}`}>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {role.title}
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>

=======
                      <div className="text-xs text-gray-600 dark:text-gray-300">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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

=======
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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

              <SectionTitle>Education</SectionTitle>
              <div className="mt-2 space-y-2">
                {data.education.map((ed, idx) => (

                  <div key={`edu-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">{ed.institution}</div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]

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

=======
            <section className="mb-5">
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                {data.certifications.map((c, idx) => (
                  <li key={`cert-${idx}`}>{c}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Portfolio */}
          {portfolioItems.length ? (

              <SectionTitle>Portfolio</SectionTitle>
              <div className="mt-2 space-y-2">
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {p.title}
                      {p.link && (

=======
                        <a className="ml-2 underline text-blue-600 dark:text-blue-400" href={p.link} target="_blank" rel="noreferrer">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                          link
                        </a>
                      )}
                    </div>
                    {p.description && (

                    )}
                    {p.technologies?.length ? (
                      <div className="mt-1 text-xs flex flex-wrap gap-2">
                        {p.technologies.map((t, tIdx) => (

=======
                          <span key={`proj-${idx}-t-${tIdx}`} className="px-2 py-0.5 rounded border border-gray-200 dark: border-gray-700">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
    ),
  }
),

ResumePreview.displayName = 'ResumePreview',


=======
export default ResumePreview,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
