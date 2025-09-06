import type { NextPage } from 'next';
import Head from 'next/head';
import EmptyState from '../../components/ui/EmptyState';
const Messages: NextPage;
        icon={<span>📫</span>}
        primaryAction={{ label: 'Explore talent', href: '/talent' }}
        secondaryAction={{ label: 'Browse services', href: '/services' }}
      />
    </div>
);
};

export default Messages;
