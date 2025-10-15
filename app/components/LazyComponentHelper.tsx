

    <LazyWrapper>
      <LazyComponent {...(props as P)} />


interface LazyComponentHelperProps {
  className?: string;
}

export default function LazyComponentHelper({ className }: LazyComponentHelperProps) {
  return (
    <div className={className}>
      <h2>LazyComponentHelper<// Comment
      <p>This component is under construction.<// Comment
    <// Comment
  );
}