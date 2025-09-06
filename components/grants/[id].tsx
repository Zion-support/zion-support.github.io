import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication } from '../../types/grants';

export default function GrantDetailPage() {
  const router = useRouter();
  const { id } = router.query as { id: string };  const [item, setItem] = useState<GrantApplication | null>(null);

  const [item, setItem] = useState<GrantApplication | null>(null);

  const [loading, setLoading] = useState(true);
  const [updateContent, setUpdateContent] = useState('');

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`/api/grants/${id}`)
      .then(r => r.json())
      .then(d => setItem(d.record))
      .finally(() => setLoading(false));  }, [id]);

  const addUpdate = async () => {
    if (!id || !updateContent.trim()) return;

  }, [id]);

  const addUpdate = async () => {
    if (!id || !updateContent.trim()) return;

          </section>

        </aside>
      </div>
    </EnhancedLayout>
  );
}