export default function AnimatedCounter({ end, suffix = "", duration = 1000 }: { end: number; suffix?: string; duration?: number }) {
	return <span>{end}{suffix}</span>;
}