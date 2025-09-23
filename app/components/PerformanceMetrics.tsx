type Metric = { label: string; value: string };

export default function PerformanceMetrics() {
  const metrics: Metric[] = [
    { label: 'Latency', value: '< 50ms' },
    { label: 'Uptime', value: '99.99%' },
    { label: 'Throughput', value: '1M req/min' },
  ];

  return (
    <section aria-label="Performance Metrics">
      <h3>Performance Metrics</h3>
      <ul>
        {metrics.map((m) => (
          <li key={m.label}>
            <strong>{m.label}:</strong> {m.value}
          </li>
        ))}
      </ul>
    </section>
  );
}