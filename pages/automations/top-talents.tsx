<<<<<<< HEAD
import type { NextPage, GetServerSideProps } from 'next',
import fs from 'fs',
import path from 'path',
import Link from 'next/link',
type TalentItem = { talentSlug: string, talentName: string, averageRating: number, totalReviews: number },

type Props = { items: TalentItem[] },

const TopTalentsPage: NextPage<Props> = ({ items }) => {
  return (
    <main className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>Top Talents — Auto Generated</h1>
      <div className=&quot;grid gap-3&quot;>
        {items.map((t) => (
          <Link key={t.talentSlug} href={`/talent/${t.talentSlug}`}>
            <div className=&quot;enhanced-card hover:shadow-lg cursor-pointer flex items-center justify-between&quot;>
              <div>
                <div className=&quot;font-medium&quot;>{t.talentName}</div>
                <div className=&quot;text-sm text-gray-600&quot;>{t.averageRating.toFixed(1)}★ • {t.totalReviews} reviews</div>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <span className=&quot;pill&quot;>Auto</span>
            </div>
          </Link>
        ))}
<<<<<<< HEAD
        {!items.length && <div className=&quot;enhanced-card&quot;>No data yet.</div>}
=======
        {_!items.length && <div className="enhanced-card">No data yet.</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    </main>
  )
},

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join(process.cwd(), 'publicautomationstop-talents.json'),
  let items: TalentItem[] = [],
  try {
    const raw = fs.readFileSync(p, 'utf8'),
    const data = JSON.parse(raw),
    items = data.items || []
  } catch {}
  return { props: { items } }
},
=======
export const getServerSideProps: GetServerSideProps = async () => {_const _p = path.join(process.cwd(), _'public', _'automations', _'top-talents.json');
  let items: TalentItem[] = [];
  try {
    const _raw = fs.readFileSync(p, _'utf8');
    const _data = JSON.parse(raw);
    items = data.items || [];} catch {}
  return {_props: { items} };
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default TopTalentsPage,