import React, { useState, useEffect } from 'react',
import { useRouter } from 'next/router',
import { supabase } from '@/integrations/supabase/client',
import WhitepaperPreviewPanel from '@/components/WhitepaperPreviewPanel',
export default function WhitepaperViewPage() {
  const router = useRouter();
  const [whitepaper, setWhitepaper] = useState(null);

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Whitepaper
        </h1>
        <WhitepaperPreviewPanel />
      </div>
    </div>
  );
}