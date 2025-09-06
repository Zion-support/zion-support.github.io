 if (typeof title === 'string') job.title = title;
if (typeof description === 'string') job.description = description;
if (typeof category === 'string') job.category = category;
if (Array.isArray (requiredSkills) ) job.requiredSkills = requiredSkills.map (String);
if (typeof budgetMinUsd === 'number' || budgetMinUsd === null) job.budgetMinUsd = budgetMinUsd ?? undefined;
if (typeof budgetMaxUsd === 'number' || budgetMaxUsd === null) job.budgetMaxUsd = budgetMaxUsd ?? undefined;
if (typeof deliveryDeadlineIso === 'string' || deliveryDeadlineIso === null) job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined;
if (typeof status === 'string') job.status = status as Job['status'];
job.updatedAtIso = new Date () .toISOString ();
jobs[idx] = job;
writeJsonFile<Job[]> (FILE, jobs);
}res.setHeader ('AllowGET, PATCH');
res.status (405) .end ('Method Not Allowed') 
}