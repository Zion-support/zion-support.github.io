import React, { forwardRef } from 'react',

export type ResumeData = {
  name: string,
  contact?: { email?: string, phone?: string, location?: string, website?: string, linkedin?: string, github?: string
  },
  summary?: string,
  skills?: string[],
  technologies?: string[],
  experience?: Array<{
    title: string,
    company?: string,
    start?: string,
    end?: string,
    location?: string,
    bullets?: string[]
  }>,
  education?: Array<{
    institution: string,
    degree?: string,
    start?: string,
    end?: string
  }>,
  certifications?: string[],
  portfolio?: Array<{
    title: string,
    description?: string,
    link?: string,
    technologies?: string[]
  }>,
},

export type ResumePreviewProps = {
  data: ResumeData,
  theme?: 'light' | 'dark',
  maxPortfolioItems?: number
},

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-1"></h2>
    {children
  },
  </h2>
),

export const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, theme = 'light', maxPortfolioItems = 3 }, ref) => {
    const portfolioItems = (data.portfolio || []).slice(0, Math.max(0, maxPortfolioItems)),

    return (
    <div className="max-w-2xl mx-auto">
      <div className="p-8"></div>
          {/* Header */}
          <header className="mb-6"></header>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{data.name}</h1>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-x-3 flex flex-wrap"></div>
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.website && (
                <a className="underline" href={data.contact.website} target="_blank" rel="noreferrer"></a>
                  {data.contact.website
  },
                </a>
              )}
              {data.contact?.linkedin && (
                <a className="underline" href={data.contact.linkedin} target="_blank" rel="noreferrer"></a>
                  LinkedIn
                </a>
              )}
              {data.contact?.github && (
                <a className="underline" href={data.contact.github} target="_blank" rel="noreferrer"></a>
                  GitHub
                </a>
              )}
            </div>
          </header>

          {/* Summary */}
          {data.summary && (
            <section className="mb-5"></section>
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="mt-2 text-sm leading-relaxed text-gray-800 dark:text-gray-200">{data.summary}</p>
            </section>
          )}

          {/* Skills & Technologies */}
          {(data.skills?.length || data.technologies?.length) && (
            <section className="mb-5"></section>
              <SectionTitle>Skills & Technologies</SectionTitle>
              <div className="mt-2 text-sm flex flex-wrap gap-2"></div>
                {data.skills?.map((s, idx) => (
                  <span key={`skill-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700"></span>
                    {s
  },
                  </span>
                ))}
                {data.technologies?.map((t, idx) => (
                  <span key={`tech-${idx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700"></span>
                    {t
  },
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length ? (
            <section className="mb-5"></section>
              <SectionTitle>Work Experience</SectionTitle>
              <div className="mt-2 space-y-3"></div>
                {data.experience.map((role, idx) => (
                  <div key={`exp-${idx}`}></div>
                    <div className="flex items-baseline justify-between"></div>
                      <h3 className="font-medium text-gray-900 dark:text-white"></h3>
                        {role.title
  },
                        {role.company ? ` • ${role.company}` : ''}
                      </h3>
                      <div className="text-xs text-gray-600 dark:text-gray-300"></div>
                        {(role.start || role.end) && (
                          <span></span>
                            {role.start || ''}
                            {role.end ? ` – ${role.end}` : ''}
                          </span>
                        )}
                        {role.location ? ` • ${role.location}` : ''}
                      </div>
                    </div>
                    {role.bullets?.length ? (
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1"></ul>
                        {role.bullets.map((b, bIdx) => (
                          <li key={`exp-${idx}-b-${bIdx}`}>{b}</li>
                        ))}
                      </ul>
                    ) : null
  },
                  </div>
                ))}
              </div>
            </section>
          ) : null
  },
          {/* Education */}
          {data.education?.length ? (
            <section className="mb-5"></section>
              <SectionTitle>Education</SectionTitle>
              <div className="mt-2 space-y-2"></div>
                {data.education.map((ed, idx) => (
                  <div key={`edu-${idx}`} className="text-sm"></div>
                    <div className="font-medium text-gray-900 dark:text-white">{ed.institution}</div>
                    <div className="text-gray-700 dark:text-gray-300"></div>
                      {[ed.degree, ed.start && ed.end ? `${ed.start} – ${ed.end}` : ed.start || ed.end]
                        .filter(Boolean)
                        .join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null
  },
          {/* Certifications */}
          {data.certifications?.length ? (
            <section className="mb-5"></section>
              <SectionTitle>Certifications</SectionTitle>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1"></ul>
                {data.certifications.map((c, idx) => (
                  <li key={`cert-${idx}`}>{c}</li>
                ))}
              </ul>
            </section>
          ) : null
  },
          {/* Portfolio */}
          {portfolioItems.length ? (
            <section className="mb-5"></section>
              <SectionTitle>Portfolio</SectionTitle>
              <div className="mt-2 space-y-2"></div>
                {portfolioItems.map((p, idx) => (
                  <div key={`proj-${idx}`} className="text-sm"></div>
                    <div className="font-medium text-gray-900 dark:text-white"></div>
                      {p.title
  },
                      {p.link && (
                        <a className="ml-2 underline text-blue-600 dark:text-blue-400" href={p.link} target="_blank" rel="noreferrer"></a>
                          link
                        </a>
                      )}
                    </div>
                    {p.description && (
                      <p className="text-gray-700 dark:text-gray-300">{p.description}</p>
                    )}
                    {p.technologies?.length ? (
                      <div className="mt-1 text-xs flex flex-wrap gap-2"></div>
                        {p.technologies.map((t, tIdx) => (
                          <span key={`proj-${idx}-t-${tIdx}`} className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700"></span>
                            {t
  },
                          </span>
                        ))}
                      </div>
                    ) : null
  },
                  </div>
                ))}
              </div>
            </section>
          ) : null
  },
        </div>
      </div>
    ),
  }
),

ResumePreview.displayName = 'ResumePreview',

export default ResumePreview,