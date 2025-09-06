 export const jobSchema = z.object ({
  title: z.string () .min (3, {
  message: "Title must be at least 3 characters." 
});
company: z.string () .min (3, {
  message: "Company name must be at least 3 characters." 
});
location: z.string () .min (3, {
  message: "Location must be at least 3 characters." 
});
job type: z.string () .min (3, {
  message: "Job type must be at least 3 characters." 
});
salary range: z.string () .optional ();
description: z.string () .min (10, {
  message: "Description must be at least 10 characters." 
});
qualifications: z.string () .optional ();
benefits: z.string () .optional ();
application instructions: z.string () .optional ();
published date: z.string () .optional ();
expiry date: z.string () .optional ();
is remote: z.boolean () .default (false) .optional ();
category: z.string () .optional ();
status: z.string () .optional ();
