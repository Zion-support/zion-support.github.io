import { Banner } from './components/Banner';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <Banner />
      <main className="container mx-auto px-4 py-8">
        ... existing content ...
      </main>
    </div>
  );
}