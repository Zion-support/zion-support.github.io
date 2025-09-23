type EnhancedLoadingProps ={
  lines?: number;
};

export default function EnhancedLoading({ lines = 3 }: EnhancedLoadingProps) {
  return (
    <div className="space-y-2">
