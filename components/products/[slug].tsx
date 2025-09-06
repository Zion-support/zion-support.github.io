import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';
const EquipmentDetail: NextPage = () => {
  const router = useRouter($2);
  const { slug } = router.query as { slug?: string },
  const items = $2;
  const item = $2;
  if (!item) {
    return (
      <EnhancedLayout>
        <Head>
          <title>Equipment Not Found - Zion Tech Solutions</title>
        </Head>
        <div className = $2;
export default EquipmentDetail,
