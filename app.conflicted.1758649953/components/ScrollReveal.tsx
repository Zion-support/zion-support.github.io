'use client';
type ScrollRevealProps = React.PropsWithChildren<{
  origin?: 'bottom' | 'top' | 'left' | 'right';
  delay?: number;
}>;

export default function ScrollReveal({ children }: ScrollRevealProps) {
  return <>{children}</>;
}
