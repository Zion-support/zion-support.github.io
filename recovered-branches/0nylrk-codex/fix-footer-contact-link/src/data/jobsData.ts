import { Job } from &quot;@/types/jobs&quot;;

export const JOB_POSTS: Job[] = [
  {
    id: &quot;job-1&quot;,
    client_id: &quot;client-1&quot;,
    title: &quot;React Developer Needed&quot;,
    description: &quot;Seeking a React developer for a 3 month contract building dashboards.&quot;,
    category: &quot;development&quot;,
    skills: [&quot;React&quot;, &quot;TypeScript&quot;],
    budget: { min: 40, max: 50, currency: &quot;USD&quot; },
    deadline: &quot;2024-07-01&quot;,
    status: &quot;new&quot;,
    created_at: &quot;2024-05-10&quot;,
    updated_at: &quot;2024-05-10&quot;},
  {
    id: &quot;job-2&quot;,
    client_id: &quot;client-2&quot;,
    title: &quot;Part-time DevOps Engineer&quot;,
    description: &quot;Looking for a DevOps expert to maintain CI/CD pipelines.&quot;,
    category: &quot;development&quot;,
    skills: [&quot;DevOps&quot;, &quot;AWS&quot;, &quot;Terraform&quot;],
    budget: { min: 30, max: 60, currency: &quot;USD&quot; },
    deadline: &quot;2024-06-15&quot;,
    status: &quot;new&quot;,
    created_at: &quot;2024-05-05&quot;,
    updated_at: &quot;2024-05-05&quot;}
];
