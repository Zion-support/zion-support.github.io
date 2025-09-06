import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
const AutomationDetail: NextPage = () => {const router = useRouter();
  const { slug } = router.query as { slug?: string }
  let title = 'Automation Report';
  let data: any = null;
  try {if (slug === 'marketplace-insights') {;
      data = require('@/data/reports/marketplace-insights.json');
      title = 'Marketplace Insights';
    } else if (slug === 'content-health') {data = require('@/data/reports/content-health.json');
      title = 'Content Health';
    }
  } catch (e) {data = null;
  }

    <EnhancedLayout>
      <Head>
        <title>{_title} - Zion Tech Solutions</title>
      </Head>
      <h1 className=&quot;text-xl font-semibold mb-4&quot;>{title}</h1>
      {!data ? (
        <div className=&quot;opacity-70&quot;>No report found.</div>
      ) : (
