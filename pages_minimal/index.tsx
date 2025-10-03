import { Link } from 'react-router-dom';
import LatestContentBanner2025 from '../src/components/LatestContentBanner2025';
import October2025NewContentShowcase from '../components/October2025NewContentShowcase';

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

      {/* October 2025 Showcase */}
      <October2025NewContentShowcase />
    </div>
  );
}