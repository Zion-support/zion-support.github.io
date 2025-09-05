<<<<<<< HEAD
<<<<<<< HEAD
import { Project } from "@/types/projects",
=======
import { Project } from &quot;@/types/projects&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const PROJECTS: Project[] = [
  {
    id: &quot;project-1&quot;,
    client_id: &quot;client-1&quot;,
    talent_id: &quot;t-001&quot;,
    job_id: &quot;job-1&quot;,
    start_date: &quot;2024-05-15&quot;,
    scope_summary: &quot;Build an AI powered dashboard for sales metrics&quot;,
    payment_terms: &quot;fixed&quot;,
    status: &quot;in_progress&quot;,
    created_at: &quot;2024-05-15&quot;,
    updated_at: &quot;2024-05-20&quot;,
    job: {
      title: &quot;AI Dashboard Development&quot;,
      description: &quot;Develop dashboards using React and integrate ML models&quot;
    },
    talent_profile: {
      full_name: &quot;Alexandra Chen&quot;,
      professional_title: &quot;Senior AI Engineer&quot;
=======
import { Project } from "@/types/projects",;
export const PROJECTS: Project[] = [;
  {;
    id: "project-1",;
    client_id: "client-1",;
    talent_id: "t-001",;
    job_id: "job-1",;
    start_date: "2024-05-15",;
    scope_summary: "Build an AI powered dashboard for sales metrics",;
    payment_terms: "fixed",;
    status: "in_progress",;
    created_at: "2024-05-15",;
    updated_at: "2024-05-20",;
    job: {;
      title: "AI Dashboard Development",;
      description: "Develop dashboards using React and integrate ML models";
    },;
    talent_profile: {;
      full_name: "Alexandra Chen";
      professional_title: "Senior AI Engineer";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  }
];