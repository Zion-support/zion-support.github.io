import React from 'react';

interface TranslatableJobFormProps {
  onSubmit?: (formData: any) => void;
  isSubmitting?: boolean;
}

export function TranslatableJobForm({ onSubmit, isSubmitting }: TranslatableJobFormProps) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit?.({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-6">Post a Job</h1>
        <p className="text-zion-slate-light mb-6">Describe your job and requirements.</p>
      </div>
      <button type="submit" className="px-4 py-2 rounded bg-zion-cyan text-white" disabled={isSubmitting}>Submit</button>
    </form>
  );
}
