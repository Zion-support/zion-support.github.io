import React, { useState, useEffect } from 'react';
import Head from 'next/head';

};

const AdminUsageAnalyticsPage: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
  const [selectedMetric, setSelectedMetric] = useState<'users' | 'revenue' | 'projects'>('users');

      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Usage Analytics - Admin</title>
        <meta name="description" content="Usage analytics and performance metrics" />
      </Head>

            </select>
          </div>
        </div>

                </div>
              ))}
            </div>
          </div>
        </div>

