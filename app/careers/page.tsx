import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Careers | Zion Tech Group',
  description: 'Join Zion Tech Group. Remote-first roles in AI engineering, DevOps, and solution architecture.',
  alternates: { canonical: '/careers/' },
};

const jobs = [
  {
    title: 'Senior AI Engineer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    desc: 'Design and deploy production AI systems — RAG pipelines, autonomous agents, fine-tuned LLMs, and ML infrastructure.',
    requirements: ['5+ years ML/AI experience', 'Python, PyTorch/TensorFlow', 'RAG, embeddings, vector DBs', 'LLM fine-tuning and deployment'],
  },
  {
    title: 'DevOps / Platform Engineer',
    location: 'Remote',
    type: 'Full-time',
    desc: 'Build and maintain cloud infrastructure, CI/CD pipelines, and observability systems for enterprise clients.',
    requirements: ['AWS/Azure/GCP expertise', 'Kubernetes, Terraform, Docker', 'CI/CD (GitHub Actions, GitLab)', 'Monitoring and incident response'],
  },
  {
    title: 'Solution Architect',
    location: 'Remote / Travel',
    type: 'Full-time',
    desc: 'Lead enterprise AI deployments from discovery to production. Bridge technical and business requirements.',
    requirements: ['Enterprise architecture experience', 'AI/ML solution design', 'Client-facing communication', 'Cloud migration expertise'],
  },
  {
    title: 'Full-Stack Developer',
    location: 'Remote',
    type: 'Full-time',
    desc: 'Build modern web applications, Micro SAAS platforms, and internal tools using Next.js, TypeScript, and cloud services.',
    requirements: ['Next.js, React, TypeScript', 'Node.js or Python backends', 'PostgreSQL, Redis', 'Cloud deployment (Vercel, AWS)'],
  },
];

const benefits = [
  'Competitive salary + equity',
  'Remote-first culture',
  'Health, dental, vision insurance',
  '401(k) matching',
  'Conference & learning budget',
  'Open-source contribution time',
  'Flexible PTO',
  'Latest equipment & tools',
];

export default function CareersPage() {
  return (
    <PageShell
      title="Careers at Zion Tech Group"
      description="Build the future of AI and enterprise software. Remote-first, competitive compensation, and open-source contributions welcome."
      eyebrow="We're hiring"
      align="center"
      canonical="https://ziontechgroup.com/careers/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Careers' },
      ]}
      actions={
        <>
          <a href="mailto:kleber@ziontechgroup.com?subject=Career Inquiry" className="btn-primary">Send your resume</a>
          <Link href="/about/" className="btn-secondary">About the company</Link>
        </>
      }
      ctaTitle="Don't see a perfect fit?"
      ctaDescription="We are always looking for talented people. Send us your resume and we will keep you in mind."
    >
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-white">Why work with us</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="page-card text-sm text-slate-300">
              <span className="mr-2 text-emerald-400" aria-hidden="true">✓</span>
              {benefit}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-bold text-white">Open positions</h2>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.title} className="page-card hover:border-purple-500/40">
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                  <p className="text-sm text-purple-300">{job.location} · {job.type}</p>
                </div>
                <Link href="/contact/" className="btn-secondary shrink-0 text-sm">Apply</Link>
              </div>
              <p className="mb-3 text-sm text-slate-400">{job.desc}</p>
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req) => (
                  <span key={req} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400">{req}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
