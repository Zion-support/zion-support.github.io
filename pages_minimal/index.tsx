import Link from 'next/link';
import LatestContentBanner2025 from '../src/components/LatestContentBanner2025';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Welcome to Zion Tech Group</h1>
        <p>Advanced IT Solutions & AI Services</p>
        <Link href="/services">View Our Services</Link>
      </main>
      
      {/* Latest Content Section */}
      <LatestContentBanner2025 />
    </div>
  );
}