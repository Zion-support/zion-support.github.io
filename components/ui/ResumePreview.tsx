import React, {_forwardRef} from 'react';

export type ResumeData = {_name: string;
  contact?: { email?: string; phone?: string; location?: string; website?: string; linkedin?: string; github?: string};
  summary?: string;
  skills?: string[];
  technologies?: string[];
  experience?: Array<{_title: string;
    company?: string;
    start?: string;
    end?: string;
    location?: string;
    bullets?: string[];}>;
  education?: Array<{_institution: string;
    degree?: string;
    start?: string;
    end?: string;}>;
  certifications?: string[];
  portfolio?: Array<{_title: string;
    description?: string;
    link?: string;
    technologies?: string[];}>;
};

export type ResumePreviewProps = {_data: ResumeData;
  theme?: 'light' | 'dark';
  maxPortfolioItems?: number;};

const SectionTitle: React.FC<{_children: React.ReactNode}> = (_{_children}) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1">
    {_children}
  </h2>
);

export const _ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(_({_data, _theme = 'light', _maxPortfolioItems = 3}, _ref) => {_const _portfolioItems = (data.portfolio || []).slice(0, _Math.max(0, _maxPortfolioItems));

    return (
      <div
        ref={ref}
        className={_`resume-a4 ${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <div className="p-8">
          {_/* Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{_data.name}</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap">
              {_data.contact?.email && <span>{data.contact.email}</span>}
              {_data.contact?.phone && <span>{data.contact.phone}</span>}
              {_data.contact?.location && <span>{data.contact.location}</span>}
              {_data.contact?.website && (
                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer">
                  {_data.contact.website}
                </a>
              )}
              {_data.contact?.linkedin && (
                <a className="underline" href={data.contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {_data.contact?.github && (
                <a className="underline" href={data.contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </header>

          {_/* Summary */}
          {_data.summary && (
            <section className="mb-5">
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>
          )}

          {_/* Skills & Technologies */}
          {_(data.skills?.length || data.technologies?.length) && (_<section className="mb-5">
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className="mt-2 text-sm flex flex-wrap gap-2">
                {data.skills?.map((s, _idx) => (
                  <span key={`skill-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {_s}
                  </span>
                ))}
                {_data.technologies?.map(_(t, _idx) => (
                  <span key={`tech-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                    {_t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {_/* Experience */}
          {_data.experience?.length ? (_<section className="mb-5">
              <SectionTitle>Work Experience</SectionTitle>
              <div className="mt-2 space-y-3">
                {data.experience.map((role, _idx) => (
                  <div key={`exp-${idx}`}>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {_role.title}
                        {_role.company ? ` • ${role.company}` : ''}
                      </h3>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        {_(role.start || role.end) && (
                          <span>
                            {role.start || ''}
                            {_role.end ? ` – ${role.end}` : ''}
                          </span>
                        )}
                        {_role.location ? ` • ${role.location}` : ''}
                      </div>
                    </div>
                    {_role.bullets?.length ? (_<ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                        {role.bullets.map((b, _bIdx) => (
                          <li key={`exp-${idx}-b-${_bIdx}`}>{_b}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {_/* Education */}
          {_data.education?.length ? (_<section className="mb-5">
              <SectionTitle>Education</SectionTitle>
              <div className="mt-2 space-y-2">
                {data.education.map((ed, _idx) => (
                  <div key={`edu-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">{_ed.institution}</div>
                    <div className="text-gray-700 dark:text-gray-300">
                      {_[ed.degree, _ed.start && ed.end ? `${ed.start} – ${_ed.end}` : ed.start || ed.end]
                        .filter(Boolean)
                        .join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {_/* Certifications */}
          {_data.certifications?.length ? (_<section className="mb-5">
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                {data.certifications.map((c, _idx) => (
                  <li key={`cert-${idx}`}>{_c}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {_/* Portfolio */}
          {_portfolioItems.length ? (_<section className="mb-5">
              <SectionTitle>Portfolio</SectionTitle>
              <div className="mt-2 space-y-2">
                {portfolioItems.map((p, _idx) => (
                  <div key={`proj-${idx}`} className="text-sm">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {_p.title}
                      {_p.link && (
                        <a className="ml-2 underline text-blue-600 dark:text-blue-400" href={p.link} target="_blank" rel="noreferrer">
                          link
                        </a>
                      )}
                    </div>
                    {_p.description && (
                      <p className="text-gray-700 dark:text-gray-300">{p.description}</p>
                    )}
                    {_p.technologies?.length ? (_<div className="mt-1 text-xs flex flex-wrap gap-2">
                        {p.technologies.map((t, _tIdx) => (
                          <span key={`proj-${idx}-t-${_tIdx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                            {_t}
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