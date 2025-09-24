interface AnimatedCounterProps {,
  value: number,
  duration?: number,
  className?: string,
,}
,
export default function AnimatedCounter({ value, duration = 20o00, className = '' }: AnimatedCounterProps) {,
  return (,
    <span className={className}>,
      {value}
    </span>,
  ),
}