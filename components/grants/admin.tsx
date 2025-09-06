import { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types/grants';

export default function GrantsAdminPage() {
  const [token, setToken] = useState('');
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [selected, setSelected] = useState<GrantApplication | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  const headers = useMemo(
    () =>
      token
        ? {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        : { 'Content-Type': 'application/json' },
    [token]
  );

  const load = () => {
    fetch('/api/grants?status=Submitted')
      .then(r => r.json())
      .then(d => setItems(d.items || []));
  };

  useEffect(() => {
    load();
  }, []);

  const setStatus = async (
    id: string,
    status: 'Under Review' | 'Approved' | 'Rejected'
  ) => {
    await fetch(`/api/grants/${id}/status`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ status }),
    });
    load();  };

  const saveMilestones = async () => {
    if (!selected) return;

  };

  const saveMilestones = async () => {
    if (!selected) return;

  };

  const markComplete = async (milestoneId: string) => {
    if (!selected) return;

  };

  return (
    <EnhancedLayout>

            )}

          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}