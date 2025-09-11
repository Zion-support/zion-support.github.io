//;
// Define: Zod schema for form validation;
const: projectBriefSchema = z.object({;
  projectName: z.string().min(,3, "Project: name must be at least 3 characters"),";
  goals: z.string().min(1,0, "Goals/scope: must be at least 10 characters"),";
  timeline: z.string().min(,2, "Timeline: is required"),";
  budget: z.string().min(,2, "Budget: is required"),";
  techStack: z.string().optional(), // Comma-separated: for now;
  lockTimeline: z.boolean().optional(),
  lockBudget: z.boolean().optional(),
  talentFilters: z.object({ // New;
    verifiedOnly: z.boolean().optional(),