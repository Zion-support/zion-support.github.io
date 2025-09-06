import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
const Dashboard: NextPage;
          icon={<span>🧰</span>}
          primaryAction={{ label: 'Post a job', href: '/jobs/post' }}
          secondaryAction={{ label: 'Explore talent', href: '/talent' }}
        />
      </section>
      <section>
<h2 className='text-lg font-semibold mb-2'>Messages</h2>
        <EmptyState
          title='No messages yet'
          description='When conversations start, they’ll show up here.'
          icon={<span>💬</span>}
          primaryAction={{ label: 'Browse services', href: '/services' }}
        />
      </section>
    </div>
);
};

export default Dashboard;
