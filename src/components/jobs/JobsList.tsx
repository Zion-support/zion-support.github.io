import React from "react";

interface JobsListProps {
  jobs: any[];
  isLoading: boolean;
}

export function JobsList({ jobs, isLoading }: JobsListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light animate-pulse">
            <div className="h-4 bg-zion-blue-light rounded mb-2"></div>
            <div className="h-3 bg-zion-blue-light rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light text-center">
        <h3 className="text-white text-xl font-bold mb-2">No Jobs Yet</h3>
        <p className="text-zion-slate-light">Create your first job to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
          <h3 className="text-white font-semibold mb-2">{job.title}</h3>
          <p className="text-zion-slate-light text-sm">{job.description}</p>
        </div>
      ))}
    </div>
  );
}