import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Project Dashboard — Client Portal',
  description: 'Active project dashboards, milestones, and status updates.',
  alternates: { canonical: '/portal/projects/' },
};

export default function ProjectsPage() {
  const projects = [
    { name: 'AI Customer Support Rollout', status: 'In Progress', progress: 65, color: 'bg-purple-500' },
    { name: 'Cloud Migration — Phase 2', status: 'Planning', progress: 15, color: 'bg-blue-500' },
    { name: 'Security Audit & Hardening', status: 'In Review', progress: 90, color: 'bg-purple-500' },
  ];

  return (
    <PageShell
      title="Project Dashboard"
      description="Track active projects, milestones, and status updates in real time."
      eyebrow="Client Portal"
      align="center"
      canonical="https://ziontechgroup.com/portal/projects/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Client Portal', href: '/portal' },
        { label: 'Projects' },
      ]}
    >
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.name} className="page-card">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold text-white">{project.name}</h3>
              <span className="rounded-full bg-purple-900/40 px-2.5 py-1 text-xs font-semibold text-purple-300">{project.status}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div className={`${project.color} h-full rounded-full`} style={{ width: `${project.progress}%` }} />
            </div>
            <p className="mt-1.5 text-xs text-slate-500">{project.progress}% complete</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
