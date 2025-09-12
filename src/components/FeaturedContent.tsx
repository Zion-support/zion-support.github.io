import React from 'react'

type ContentItem = {
  title: string
  description: string
  category: string
  ctaLabel: string
  link: string
  highlight?: string
}

const contentItems: ContentItem[] = [
  {
    title: '2025 AI Operations Playbook',
    description:
      'A practical guide to deploying AI agents safely across your org with measurable ROI in 90 days.',
    category: 'Guide',
    ctaLabel: 'Read the playbook',
    link: '/#ai-operations-playbook',
    highlight: 'New'
  },
  {
    title: 'Case Study: 40% Faster Releases with DevOps Automation',
    description:
      'How a fintech scaled CI/CD, reduced lead time, and boosted engineering throughput using platform tooling.',
    category: 'Case Study',
    ctaLabel: 'View case study',
    link: '/#devops-automation-case-study'
  },
  {
    title: 'Zero-Trust in Practice: A Field Implementation',
    description:
      'Blueprint and quick-start checklist to roll out zero-trust without disrupting teams or delivery.',
    category: 'Security',
    ctaLabel: 'Explore blueprint',
    link: '/#zero-trust-blueprint'
  },
  {
    title: 'Real-Time Analytics Starter Kit',
    description:
      'Reference architecture and templates to stand up a modern data stack with streaming insights.',
    category: 'Data',
    ctaLabel: 'Get the kit',
    link: '/#realtime-analytics-starter'
  }
]

const FeaturedContent: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t" id="featured-content">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Content</h2>
            <p className="mt-2 text-gray-600">Fresh insights, guides, and case studies.</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 border border-blue-200">
            New releases
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <article key={index} className="group bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl p-5 border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                {item.highlight ? (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    {item.highlight}
                  </span>
                ) : null}
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {item.description}
              </p>
              <a
                href={item.link}
                className="inline-flex items-center text-blue-700 font-medium hover:underline"
              >
                {item.ctaLabel}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedContent

