import type { NextPage } from 'next';

import Head from 'next/head';
import { useRouter  } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';


const EquipmentDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug?: string }
  const items = equipment as any[];
  if (!item) {
    return (
      <EnhancedLayout>
        <Head>
          <title>Equipment Not Found - Zion Tech Solutions</title>
        </Head>
          <h1 className="text-xl font-semibold">Equipment not found</h1>
          <Link href="/products"><a className="text-blue-600 hover: underline">Back to Equipment</a></Link>
        </div>
      </EnhancedLayout>
    )
export default EquipmentDetail;

