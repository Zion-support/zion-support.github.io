import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../components/layout/MainLayout';

export default function ServicesPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the comprehensive services overview
    router.replace('/services-overview');
  }, [router]);

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Redirecting to services overview...</p>
        </div>
      </div>
    </MainLayout>
  );
}