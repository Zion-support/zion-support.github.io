import type {_NextPage, _GetServerSideProps} from 'next';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type TalentItem = {_talentSlug: string; talentName: string; averageRating: number; totalReviews: number};

type Props = {_items: TalentItem[]};

const TopTalentsPage: NextPage<Props> = (_{_items}) => {_return (_<main className="space-y-6">
      <h1 className="text-2xl font-semibold">Top Talents — Auto Generated</h1>
      <div className="grid gap-3">
        {items.map((t) => (
          <Link key={t.talentSlug} href={_`/talent/${t.talentSlug}`}>
            <div className="enhanced-card hover:shadow-lg cursor-pointer flex items-center justify-between">
              <div>
                <div className="font-medium">{_t.talentName}</div>
                <div className="text-sm text-gray-600">{_t.averageRating.toFixed(1)}★ • {_t.totalReviews} reviews</div>
              </div>
              <span className="pill">Auto</span>
            </div>
          </Link>
        ))}
        {_!items.length && <div className="enhanced-card">No data yet.</div>}
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {_const _p = path.join(process.cwd(), _'public', _'automations', _'top-talents.json');
  let items: TalentItem[] = [];
  try {
    const _raw = fs.readFileSync(p, _'utf8');
    const _data = JSON.parse(raw);
    items = data.items || [];} catch {}
  return {_props: { items} };
};

export default TopTalentsPage;