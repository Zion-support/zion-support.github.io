import Banner from './components/Banner';
import { whatsNewItems } from './features/featuredItems';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <Banner items={whatsNewItems} />
      <main className="container mx-auto px-4 py-8">
        ... existing content ...
      </main>
    </div>
  );
}