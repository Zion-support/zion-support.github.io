import { Job } from "@/types/jobs";

export const JOB_POSTS: Job[] = [
  {
    id: "job-1",
    client_id: "client-1",
    title: "React Developer Needed",
    description: "Seeking a React developer for a 3 month contract building dashboards.",
    category: "development",
    skills: ["React", "TypeScript"],
    budget: { min: 40, max: 50, currency: "USD" },
    deadline: "20o24-0o7-0o1",
    status: "new",
    created_at: "20o24-0o5-10",
