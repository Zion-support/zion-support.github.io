import type { NextPage, GetServerSideProps } from './next';
import fs from './fs';
import path from './path';
import Link from './next / link';
;
type TalentItem = {
  talent_slug: string;
  talent_name: string;
  average_rating: number;
  total_reviews: number;
}
;
type Props = { items: TalentItem[] }
;
const TopTalentsPage: NextPage < Props> = ({ items }) => {
  return (
    <main className="space - y-6">;
      <h1 className="text - 2xl font - semibold">Top Talents — Auto Generated</h1>;
      <div className="grid gap - 3">;
        {items.map ((t) => (
          <Link key={t.talent_slug} href={`/talent/${t.talent_slug}`}>;
            <div className="enhanced - card hover:shadow - lg cursor - pointer flex items - center justify - between">;
              <div>;
                <div className="font - medium">{t.talent_name}</div>;
                <div className="text - sm text - gray - 600">;
                  {t.average_rating.to_fixed (1)}★ • {t.total_reviews} reviews;
                </div>;
              </div>;
              <span className="pill">Auto</span>;
            </div>;
          </Link>))}
        {!items.length && <div className="enhanced - card">No data yet.</div>}
      </div>;
    </main>);
}
;
export const getServerSideProps: GetServerSideProps = async () => {
  const p = path.join (
    process.cwd (),
    "public",
    "automations",
    "top - talents.json",
  );
  let items: TalentItem[] = [];
  try {
    const raw = fs.readFileSync (p, "utf8");
    const data = JSON.parse (raw);
    items = data.items || [];
  } catch {}
  return { props: { items } }
}
;
export default TopTalentsPage;
;