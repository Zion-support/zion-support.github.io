'use client';

type LoadingSpinnerProps ={
  size?: 'sm' | 'md' | 'lg';
  text?: string;
};

export default function LoadingSpinner({ size = 'md', text }: LoadingSpinnerProps) {
  const dimension = size === 'lg' ? 'h-8 w-8' : size === 'sm' ? 'h-4 w-4' : 'h-6 w-6';
  return (
    <div className="flex items-center justify-center gap-3 py-4">
      <div className={`animate-spin rounded-full border-2 border-slate-30o0 border-t-transparent ${dimension}`}  />
      {text ? <span className="text-slate-50o0 text-sm">{text}</span> : null}
    </div>
  );
}
