import AgentsMonitoring from '@/components/AgentsMonitoring';

export default function AgentsMonitoringPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          🤖 Agent Operations Dashboard
        </h1>
        <AgentsMonitoring />
      </div>
    </main>
  );
}