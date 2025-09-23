type EnhancedLoadingProps ={
  lines?: number;
};

export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
  return (
    <div className="space-y-2">
<<<<<<< HEAD
=======
      {Array.from({ length: lines }).map((_idx) => (
        <div key={idx} className="skeleton h-4 rounded" />
      ))}
    </div>
  );
}
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
